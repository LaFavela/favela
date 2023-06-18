import { useSession } from "next-auth/react";
import { Users } from "@prisma/client";
import { useState } from "react";
import { useGet } from "@/lib/axios";

export default function CheckApi() {
   const { data: session } = useSession();

   const token = session?.user.accessToken;

   const { data, isLoading, isError } = useGet("/user", {
      authorization: token as string,
   });
   console.log(data);

   return <div className="absolute "></div>;
}
