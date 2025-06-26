"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { handleMessage } from "@/lib/actions";
import { LOG } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

function SuccessForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
        <CardTitle className="text-green-700">Nachricht gesendet!</CardTitle>
        <CardDescription>
          Vielen Dank für Ihre Nachricht. Wir werden uns bald bei Ihnen melden.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

function ErrorForm() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <XCircle className="w-12 h-12 text-red-500 mx-auto mb-2" />
        <CardTitle className="text-red-700">Fehler beim Senden</CardTitle>
        <CardDescription>
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function ContactForm() {
  const FormSchema = z
    .object({
      email: z
        .string()
        .email({ message: "Ungültige E-Mail-Adresse" })
        .optional()
        .or(z.literal("")),
      phone: z
        .string()
        .refine((value) => !value || /^\+?\d{7,16}$/.test(value), {
          message: "Ungültige Telefonnummer",
        })
        .optional(),
      message: z
        .string({ message: "Dieses Feld ist erforderlich." })
        .min(1, "Dieses Feld ist erforderlich."),
      first_name: z
        .string({ message: "Dieses Feld ist erforderlich." })
        .min(1, "Dieses Feld ist erforderlich."),
      last_name: z
        .string({ message: "Dieses Feld ist erforderlich." })
        .min(1, "Dieses Feld ist erforderlich."),
      dsgvo: z.boolean().refine((value) => value === true, {
        message: "Bitte akzeptiere unsere Datenschutzerklärung.",
      }),
    })
    .refine((data) => data.email || data.phone, {
      message:
        "Bitte geben Sie entweder eine E-Mail-Adresse oder eine Telefonnummer an.",
      path: ["email"],
    });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      phone: "",
      message: "",
      first_name: "",
      last_name: "",
      dsgvo: false,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);
    setError(false);

    try {
      // Simulate API call
      const { success } = await handleMessage(data);

      // Simulate success (change to false to test error state)
      if (success) {
        setFormSubmitted(true);
      } else {
        setError(true);
      }
    } catch (err) {
      LOG("Error sending contact form: " + err, "error");
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (formSubmitted) return <SuccessForm />;
  if (error) return <ErrorForm />;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Kontaktformular</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns bei Ihnen zurück.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr Vorname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachname *</FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr Nachname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail-Adresse</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="email@beispiel.de"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefonnummer</FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+49 123 456789"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormDescription className="text-sm text-muted-foreground">
              Bitte geben Sie entweder eine E-Mail-Adresse oder eine
              Telefonnummer an.
            </FormDescription>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nachricht *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Ihre Nachricht an uns..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dsgvo"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>Datenschutzerklärung *</FormLabel>
                    <FormDescription>
                      Ich habe die{" "}
                      <Link className="underline" href="/datenschutz">
                        Datenschutzerklärung
                      </Link>{" "}
                      gelesen und akzeptiere diese
                    </FormDescription>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Wird gesendet..." : "Nachricht senden"}
            </Button>

            <FormDescription className="text-center">
              Felder mit einem <strong>*</strong> sind Pflichtfelder.
            </FormDescription>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
