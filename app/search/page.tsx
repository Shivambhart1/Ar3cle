"use client";

import React from "react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Search = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const router = useRouter();
  const redirectToLinkPage = () => {
    router.push("/article");
  };
  const redirectToSearch = () => {
    router.push("/search");
  };
  const navElements = ["Your NFTs", "Pricing", "Link"];
  return (
    <div>
      <nav className="flex justify-around p-5 items-center">
        <div className="right">
          <ul className="flex gap-8">
            {navElements.map((value, i) => (
              <li
                key={i}
                className="font-medium cursor-pointer"
                onClick={value === "Link" ? () => redirectToLinkPage() : ""}
              >
                {value.toUpperCase()}
              </li>
            ))}
          </ul>
        </div>
        <h1>Ar3cle</h1>
        <div className="flex items-center gap-6">
          <button
            className="py-2 px-4 text-black duration-200 bg-white hover:bg-transparent hover:text-white hover:border ease-in-out rounded-md font-bold"
            onClick={redirectToSearch}
          >
            About Us
          </button>
          <Image src="/images/Avatar.svg" alt="" width={40} height={40} />
        </div>
      </nav>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-64 bg-white/18 rounded-lg shadow-lg backdrop-blur-sm border border-white/37"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Search;
