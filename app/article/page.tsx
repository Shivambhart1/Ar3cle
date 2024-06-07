"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { axios } from "axios";

const formSchema = z.object({
  articleName: z
    .string()
    .min(2, {
      message: "Article must be of more than 2 characters",
    })
    .max(50),
});

const ArticleBox = () => {
  const [Articlelink, SetArticleLink] = useState<string>("");
  const handleArticleLinkChange = (e) => {
    SetArticleLink(e.target.value);
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      articleName: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  const router = useRouter();
  const handleRedirect = async () => {
    router.push("/article/article-summary");
    const backendUrl = "https://localhost:4000";
    const response = await axios.get(`/api/${Articlelink}`);
  };

  const handlePushData = async () => {};
  return (
    <div className="w-[100%] flex items-center justify-center mt-[30%]">
      <div className="w-[60%] p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="articleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-5xl">
                    Enter the Article Link
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      {...field}
                      className="text-black background-[#d1d1d1]"
                      value={Articlelink}
                      onChange={(e) => handleArticleLinkChange(e)}
                    />
                  </FormControl>
                  <FormDescription className="font-light text-white">
                    Enter the link of any kind of article and get the summarised
                    result.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-transparent text-white font-light border rounded-md px-10"
              onClick={handleRedirect}
            >
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ArticleBox;
