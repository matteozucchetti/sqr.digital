"use client";

import FieldInfo from "@/components/forms/field-info";
import { Display1, Text } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/convex/_generated/api";
import * as validators from "@/convex/validators";
import { ERRORS, PLANS } from "@/lib/config";
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
  const getSquares = useQuery(api.squares.getSquares);
  const plan = user?.subscription?.planKey;
  const userCanCreateSquare = getSquares?.length === 0 || plan === PLANS.PRO;

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
    <div className="max-w-md mx-auto py-12 flex flex-col gap-4">
      <Display1 as="h1">Crea uno Square</Display1>
      {userCanCreateSquare ? (
        <>
          <Text>Crea un QR-code per la tua struttura</Text>
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
                  <Label htmlFor={field.name}>Nome della tua struttura</Label>
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
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <Text>
            Non puoi creare un nuovo Square, per farlo devi essere un utente
            PRO.
          </Text>
        </div>
      )}
    </div>
  );
}
