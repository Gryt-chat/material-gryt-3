"use client";

import { ChannelsWindow } from "@/components/ChannelsWindow";
import { ChatWindow } from "@/components/ChatWindow";
import {
  FilledButton,
  OutlinedTextField,
  TextButton,
} from "@/components/Material";
import React, { useEffect, useState } from "react";

export default function Page() {
  return (
    <main className="flex w-full h-full gap-4">
      <ChannelsWindow />
      <ChatWindow />
    </main>
  );
}

function SignInDialog() {
  const [showPasswordSection, setShowPasswordSection] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  useEffect(() => {
    setEmailError(false);
    console.log(email);
  }, [email]);

  const validateEmail = () => {
    const emailIsValid = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (emailIsValid) {
      setShowPasswordSection(true);
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-[400px] rounded-2xl bg-surface-container-highest">
      <h1 className="text-3xl font-bold">Sign in</h1>
      <div className="flex flex-col gap-3 items-start">
        <OutlinedTextField
          className="w-full"
          label="Email"
          error={emailError}
          error-text="Enter a valid email"
          value={email}
          onchange={(e: any) => setEmail(e.target.value)}
        />
        <button className="text-secondary text-sm hover:underline">
          Forgot password?
        </button>
      </div>
      <div className="flex items-center justify-between pt-4">
        <TextButton>Create account</TextButton>
        <FilledButton onClick={validateEmail}>Next</FilledButton>
      </div>
    </div>
  );
}
