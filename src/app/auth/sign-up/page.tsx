"use client";
import { axios } from "@/axios";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BACKEND_URI } from "@/config";
import { userRegisterSchema } from "@/schemas/zod";
import type { UserRegisterType } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";

export default function Sign_in() {
  const router = useRouter();
  // ** hook form
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegisterType>({
    resolver: zodResolver(userRegisterSchema),
  });
  // submit function
  const handleRegister = async (data: UserRegisterType) => {
    reset();
  };
  return (
    <section className="h-screen  flex items-center overflow-y-auto">
      <div className=" w-fit mx-auto h-fit ">
        <Card className="mx-auto max-w-sm shadow-lg shadow-foreground/20">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Sign up</CardTitle>
            <CardDescription>
              Enter your email below to Sign up to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <form action="" onSubmit={handleSubmit(handleRegister)}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="off"
                    {...register("name")}
                  />
                  <span className="text-xs select-none text-red-500  text-balance ml-2  relative bottom-2">
                    {errors.name && errors.name.message}
                  </span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="lowercase"
                    autoComplete="off"
                    {...register("email")}
                  />
                  <span className="text-xs select-none text-red-500  text-balance ml-2  relative bottom-2">
                    {errors.email && errors.email.message}
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="off"
                    {...register("password")}
                  />
                  <span className="text-xs select-none text-red-500  text-balance ml-2  relative bottom-2">
                    {errors.password && errors.password.message}
                  </span>
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Confirm Password</Label>
                  </div>
                  <Input
                    id="confirmPassword"
                    type="password"
                    autoComplete="off"
                    {...register("confirmPassword")}
                  />
                  <span className="text-xs select-none text-red-500  text-balance ml-2  relative bottom-2">
                    {errors.confirmPassword && errors.confirmPassword.message}
                  </span>
                </div>
                <Button type="submit" className="w-full">
                  Sign up
                </Button>
              </form>
              <Button variant="outline" className="w-full">
                <FcGoogle size={23} className="mx-3" />
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/auth/sign-in" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
