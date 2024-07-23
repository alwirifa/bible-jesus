"use client"

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ForgotPassword from "@/components/auth/forgot-password";
import { Loader2 } from "lucide-react";

function Page() {
  const searchParams = useSearchParams();
  const [emailParams, setEmailParams] = useState<string | null>(null);
  const [codeParams, setCodeParams] = useState<string | null>(null);
  const [timeoutError, setTimeoutError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (emailParams === null || codeParams === null) {
        setTimeoutError(true);
      }
    }, 5000); 

    return () => clearTimeout(timer);
  }, [emailParams, codeParams]);

  useEffect(() => {
    setEmailParams(searchParams.get("email"));
    setCodeParams(searchParams.get("code"));
  }, [searchParams]);

  if (timeoutError) {
    throw new Error("Parameters not available within 5 seconds.");
  }

  if (emailParams === null || codeParams === null) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Loader2 className="h-16 w-16 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div>
      <ForgotPassword email={emailParams} code={codeParams} />
    </div>
  );
}

export default Page;
