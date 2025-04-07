"use client";
import FieldInfo from "@/components/forms/field-info";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { render } from "@react-email/components";
import { useForm } from "@tanstack/react-form";
import { useAction } from "convex/react";
import { toast } from "sonner";
import { z } from "zod";
import ComingSoonSubscribedEmail from "../../emails/coming-soon-subscribed";
import { Display1, Text } from "./typography";

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

      toast.success("Ti sei iscritto alla lista d'attesa");

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
      <Display1 as="h1">Coming Soon</Display1>
      <Text>
        Siamo quasi pronti a lanciare il nostro prodotto. Ti invitiamo a
        iscriverti alla lista d'attesa per essere il primo a sapere quando sarà
        disponibile.
      </Text>
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
