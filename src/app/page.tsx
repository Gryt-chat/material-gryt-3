"use client";

import {
  FilledButton,
  OutlinedTextField,
  TextButton,
} from "@/components/Material";
import React from "react";

export default function page() {
  return (
      <main className="grid w-screen h-screen place-items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-6 w-[400px] p-6 rounded-2xl bg-surface-container-highest"
        >
        <h1 className="text-3xl font-bold">Sign in</h1>
        <div className="flex flex-col gap-3 items-start">
          <OutlinedTextField className="w-full" label="Email" type="email" />
          <button className="text-secondary text-sm">Forgot password?</button>
        </div>
          <div className="flex items-center justify-between pt-12">
            <TextButton>Create account</TextButton>
            <FilledButton>Next</FilledButton>
          </div>
        </form>
      </main>
  );
}
