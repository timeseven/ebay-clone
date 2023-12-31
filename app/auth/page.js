"use client";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa, supabase } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";
import ClientOnly from "../components/ClientOnly";

export default function AuthPage() {
  const supabase = createClientComponentClient();
  const [jumpTo, setJumpTo] = useState("");
  useEffect(() => {
    console.log(window.location.origin);
    setJumpTo(window.location.origin);
  }, []);
  return (
    <>
      <div id="AuthPage" className="w-full min-h-screen bg-white">
        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">
          <Link href="/" className="min-w-[170px]">
            <img src="/images/logo.svg" width="170" alt="logo" />
          </Link>
        </div>

        <div className="w-full flex items-center justify-center p-5 border-b-gray-300">Login / Register</div>
        <ClientOnly>
          <div className="max-w-[400px] mx-auto px-2">
            <Auth
              onlyThirdPartyProviders
              redirectTo={`${jumpTo}/auth/callback`}
              supabaseClient={supabase}
              providers={["google"]}
              appearance={{ theme: ThemeSupa }}
            />
          </div>
        </ClientOnly>
      </div>
    </>
  );
}
