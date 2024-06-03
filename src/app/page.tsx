"use client";

import {
  FilledButton,
  OutlinedTextField,
  TextButton,
} from "@/components/Material";
import React from "react";

export default function page() {
  return (
    <div className="flex w-screen h-screen">
      <div className="flex flex-col gap-2 w-96 items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="flex flex-col gap-4"
        >
          <h1 className="text-3xl font-bold">Sign in</h1>
          <OutlinedTextField label="Email" type="email" />
          <div className="flex items-center justify-between">
            <TextButton>Create account</TextButton>
            <FilledButton>Next</FilledButton>
          </div>
        </form>
      </div>
      <div></div>
    </div>
  );
}
