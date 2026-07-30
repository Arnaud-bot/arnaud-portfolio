"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

export function ContactForm({ dict }: { dict: Dictionary["contactPage"]["form"] }) {
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = z.object({
    name: z.string().min(2, dict.nameError),
    email: z.email(dict.emailError),
    message: z.string().min(20, dict.messageError),
  });

  type ContactValues = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactValues) {
    // TODO: brancher un vrai endpoint d'envoi (API route + service email)
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log(values);
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-8 text-success" strokeWidth={1.75} />
        <p className="text-base font-medium">{dict.sentTitle}</p>
        <p className="text-sm text-muted-foreground">{dict.sentBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">{dict.name}</Label>
        <Input id="name" autoComplete="name" {...register("name")} />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">{dict.email}</Label>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{dict.message}</Label>
        <Textarea id="message" rows={5} {...register("message")} />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting} className="h-11 w-full">
        {isSubmitting && <Loader2 className="size-4 animate-spin" />}
        {dict.send}
      </Button>
    </form>
  );
}
