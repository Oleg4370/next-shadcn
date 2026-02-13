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
import { Field, FieldDescription, FieldGroup } from "@/components/ui/field";
import { FormField, Form } from "@/components/ui/form";
import { InputField, SocialLogin } from "@/components/forms";

const FormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  surname: z
    .string()
    .min(2, { message: "Surname must be at least 2 characters." }),
  email: z.email({ message: "Please type valid email address" }),
  password: z
    .string()
    .min(8, {
      message: "Password must be at least 8 characters.",
    })
    .regex(/^(?=.*[A-Z]).*$/, {
      message: "Password should contain at least one uppercase letter",
    }),
});

const defaultValues = {
  name: "",
  surname: "",
  email: "",
  password: "",
};

type RegisterFormType = typeof defaultValues;

export function RegisterForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: defaultValues,
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className={cn("flex flex-col gap-6")}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Test register form</CardTitle>
          <CardDescription>
            Register with your email account or with third-party providers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <InputField<RegisterFormType>
                      field={field}
                      label="Name"
                      placeholder="Input name"
                    />
                  )}
                />
                <FormField
                  name="surname"
                  control={form.control}
                  render={({ field }) => (
                    <InputField<RegisterFormType>
                      field={field}
                      label="Surname"
                      placeholder="Input surname"
                    />
                  )}
                />
                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <InputField<RegisterFormType>
                      field={field}
                      label="Email"
                      placeholder="Input email"
                    />
                  )}
                />
                <FormField
                  name="password"
                  control={form.control}
                  render={({ field }) => (
                    <InputField<RegisterFormType>
                      field={field}
                      label="Password"
                      placeholder="Your password"
                    />
                  )}
                />
                <Field>
                  <Button type="submit">Register</Button>
                  <FieldDescription className="text-center">
                    Already have an account? <a href="/login">Sign in</a>
                  </FieldDescription>
                </Field>
                <SocialLogin />
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
      </Card>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  );
}
