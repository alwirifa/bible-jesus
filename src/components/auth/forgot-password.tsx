"use client";

import React from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z
  .object({
    password: z.string().min(3),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  )

type Props = {
  email: string | null;
  code: string | null;
};

export default function ForgotPassword({ email, code }: Props) {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirm: "",
    
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post(
        "https://close-positive-bunny.ngrok-free.app/api/auth/login",
        values,
        { withCredentials: true }
      );
      router.push("/admin");
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full bg-black hidden lg:flex flex-col justify-between p-6">
        <div className="">
          <img
            src="/logo/maison-logo-white.PNG"
            alt="logo"
            className="h-auto w-[200px]"
          />
        </div>
        <p className="text-white italic">
          "The Scents of Flower, And Sweet Memory of Butterflies" <br />
          -span
        </p>
      </div>
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Sign in </CardTitle>
            <CardDescription>
              Enter New Password
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="max-w-md w-full flex flex-col gap-4"
              >
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="passwordConfirm"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel>Password confirm</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Password confirm"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter
            onClick={() => router.push("/sign-up")}
            className="text-sm text-muted-foreground"
          >
            Don’t have an account?
            <span className="ml-1 hover:underline cursor-pointer">Sign up</span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
