"use client";

import FieldInfo from "@/components/forms/field-info";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import * as validators from "@/convex/validators";
import { ERRORS } from "@/lib/config";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQuery } from "convex/react";
import { useRouter } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  squareName: validators.squareName,
});

export default function Onboarding() {
  const router = useRouter();
  const user = useQuery(api.users.getUser);
  const createSquare = useMutation(api.squares.createSquare);

  const form = useForm({
    defaultValues: {
      squareName: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value, formApi }) => {
      try {
        const squareId = await createSquare({ name: value.squareName });
        formApi.reset();
        router.push(`/admin/${squareId}`);
      } catch (error) {
        if (error instanceof Error) {
          formApi.setFieldMeta("squareName", (prev) => ({
            ...prev,
            errorMap: {
              onChange: ERRORS.SQUARE_NAME_ALREADY_EXISTS,
            },
          }));
        }
      }
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-md w-full mx-auto">
      <p>Onboarding - crea un nuovo Square</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="squareName"
          // biome-ignore lint/correctness/noChildrenProp: tanstack best practice
          children={(field) => (
            <div className="flex flex-col gap-2">
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
              />
              <FieldInfo field={field} />
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          // biome-ignore lint/correctness/noChildrenProp: tanstack best practice
          children={([canSubmit, isSubmitting]) => (
            <>
              <Button type="submit" disabled={!canSubmit}>
                {isSubmitting ? (
                  <Icons.Loader className="animate-spin" />
                ) : (
                  "Continua"
                )}
              </Button>
            </>
          )}
        />
      </form>
    </div>
  );
}
