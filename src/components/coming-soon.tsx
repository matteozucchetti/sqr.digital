"use client";
import FieldInfo from "@/components/forms/field-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { render } from "@react-email/components";
import { useForm } from "@tanstack/react-form";
import { useAction } from "convex/react";
import { z } from "zod";
import ComingSoonSubscribedEmail from "../../emails/coming-soon-subscribed";
import { Icons } from "./ui/icons";

const formSchema = z.object({
  email: z.string().email("Inserisci un indirizzo email valido"),
});

export function ComingSoon() {
  const addToAudience = useAction(api.resend.addToAudience);
  const sendEmail = useAction(api.resend.send);

  const form = useForm({
    defaultValues: {
      email: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      await addToAudience({ email: value.email });
      form.reset();

      const comingSoonSubscribedEmail = await render(
        ComingSoonSubscribedEmail(),
      );
      await sendEmail({
        to: value.email,
        subject: "Iscrizione alla lista di attesa confermata!",
        html: comingSoonSubscribedEmail,
      });
    },
  });

  return (
    <div className="max-w-md mx-auto py-12 flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Coming Soon</h1>
      <p className="text-sm text-gray-500">
        Siamo quasi pronti a lanciare il nostro prodotto. Ti invitiamo a
        iscriverti alla lista d'attesa per essere il primo a sapere quando sarà
        disponibile.
      </p>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          // biome-ignore lint/correctness/noChildrenProp: tanstack best practice
          children={(field) => (
            <div className="flex flex-col gap-2">
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                placeholder="Inserisci il tuo indirizzo email"
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
                  "Iscriviti alla lista d'attesa"
                )}
              </Button>
            </>
          )}
        />
      </form>
    </div>
  );
}
