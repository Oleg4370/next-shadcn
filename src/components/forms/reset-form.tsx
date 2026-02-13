"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { FormField, Form } from "@/components/ui/form";
import { InputField } from "@/components/forms";

const FormSchema = z.object({
  email: z.email({ message: "Please type valid email address" }),
});

const defaultValues = {
  email: "",
};

type LoginFormType = typeof defaultValues;

export function PasswordResetForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-md")}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Password reset</CardTitle>
          <CardDescription>
            Type your email and we will sent reset link if account exist
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <InputField<LoginFormType>
                      field={field}
                      label="Email"
                      placeholder="Input email"
                    />
                  )}
                />
                <Field>
                  <Button type="submit">Send me reset link</Button>
                </Field>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
