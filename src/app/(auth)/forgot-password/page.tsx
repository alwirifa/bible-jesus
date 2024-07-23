// "use client"

// import React from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// import axios from "axios";
// import { z } from "zod";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";

// const formSchema = z.object({
//   email: z.string().email(),
// });

// const page = () => {


//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//     },
//   });

//   const handleSubmit = async (values: z.infer<typeof formSchema>) => {
//     try {
//       const response = await axios.post(
//         "https://close-positive-bunny.ngrok-free.app/api/auth/login",
//         values,
//         { withCredentials: true }
//       );
    
//       console.log("Response:", response.data);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="h-screen w-full flex justify-center items-center">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl">Sign in </CardTitle>
//           <CardDescription>
//             Enter your email and password to sign in to your account.
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <Form {...form}>
//             <form
//               onSubmit={form.handleSubmit(handleSubmit)}
//               className="max-w-md w-full flex flex-col gap-4"
//             >
//               <FormField
//                 control={form.control}
//                 name="email"
//                 render={({ field }) => {
//                   return (
//                     <FormItem>
//                       <FormLabel>Email address</FormLabel>
//                       <FormControl>
//                         <Input
//                           placeholder="Email address"
//                           type="email"
//                           {...field}
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   );
//                 }}
//               />

//               <Button type="submit" className="w-full">
//                 Send Verify to email
//               </Button>
//             </form>
//           </Form>
//         </CardContent>
//         <CardFooter
//           onClick={() => router.push("/sign-up")}
//           className="text-sm text-muted-foreground"
//         >
//           Don’t have an account?
//           <span className="ml-1 hover:underline cursor-pointer">Sign up</span>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// };

// export default page;
import React from 'react'

function page() {
  return (
    <div>page</div>
  )
}

export default page