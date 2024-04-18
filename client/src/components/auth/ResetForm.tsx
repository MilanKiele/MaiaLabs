/*
File: ResetForm.tsx
Description: Asks for email to reset password.
*/

"use client";

import { useState, startTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  ResetPasswordSchema,
  ResetPasswordSchemaData,
} from "@/schemas/auth/auth-schemas";
import { reset } from "@/actions/auth/auth-reset";
import FormField from "@/components/FormTemplate/FormField";
import FormMessage from "@/components/FormTemplate/FormMessage";
import FormWrapper from "@/components/FormTemplate/FormWrapper";

const ResetForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordSchemaData>({
    resolver: zodResolver(ResetPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = async (data: ResetPasswordSchemaData) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      reset(data)
        .then((result) => {
          setError(result?.error || "");
          setSuccess(result?.success || "");
        })
        .catch(() => {
          setError("An error occurred");
        });
    });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Forgot your password?</h1>
        <FormField
          label="Email"
          type="email"
          placeholder="Enter your email"
          register={register("email")}
          error={errors.email}
        />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Reset email"}
        </button>
      </form>
      <FormMessage
        message={!success && !error ? "" : error || success}
        type={!success && !error ? "success" : "error"}
      />
    </FormWrapper>
  );
};

export default ResetForm;
