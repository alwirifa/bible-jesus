"use client";

import React, { useEffect, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
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
import {
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  Select,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  image: z.string().url().optional(),
  name: z.string().min(1, "Name is required"),
  type: z.string().optional(),
  size: z.enum(["30ml", "50ml", "100ml"]),
  description: z.string().optional(),
  topNotes: z.array(z.string()).max(3),
  middleNotes: z.array(z.string()).max(3),
  baseNotes: z.array(z.string()).max(3),
  price: z.number().min(0, "Price must be a positive number"),
  whatsappLink: z.string().url().optional(),
  shopeeLink: z.string().url().optional(),
  tokopediaLink: z.string().url().optional(),
});

function AddProduct() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: "",
      name: "",
      type: "",
      size: "30ml",
      description: "",
      topNotes: [],
      middleNotes: [],
      baseNotes: [],
      price: 0,
      whatsappLink: "",
      shopeeLink: "",
      tokopediaLink: "",
    },
  });

  const [dataProductType, setProductType] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${process.env.BASE_URL}/product/product-type`,
        {
          withCredentials: true,
          headers: {
            "ngrok-skip-browser-warning": "true",
          },
        }
      )
      .then((response) => {
        setProductType(response.data?.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSubmit = () => {};

  return (
    <div className="p-12 bg-neutral-100">
      <Card className="w-full">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign in </CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="w-full flex flex-col gap-4"
            >
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Image URL" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Product Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Product Type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="whatsappLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>WhatsApp Link</FormLabel>
                    <FormControl>
                      <Input placeholder="WhatsApp Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="shopeeLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Shopee Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Shopee Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tokopediaLink"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Tokopedia Link</FormLabel>
                    <FormControl>
                      <Input placeholder="Tokopedia Link" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

export default AddProduct;
