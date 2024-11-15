"use client";

import React, { useState } from "react";
import { FilledButton, IconButton, TextButton } from "../Material";
import { Home02Icon, Home04Icon } from "hugeicons-react";
import Image from "next/image";
import pfp from "../../dummy/pfp.jpg";

type Server = {
  id: string;
  name: string;
  image: string;
};

type SidebarProps = {
  servers?: Server[];
};

export function Sidebar({ servers }: SidebarProps) {
  const [selectedServer, setSelectedServer] = useState("1");
  return (
    <div className="h-full flex flex-col gap-4 items-center justify-between">
      <div className="flex flex-col gap-4">
        {servers?.map((server) => (
          <button
            key={server.id}
            onClick={() => setSelectedServer(server.id)}
            className={`rounded-full overflow-hidden w-12 h-12 flex hover:opacity-100 transition-all ${
              selectedServer === server.id ? "opacity-100" : "opacity-50"
            }`}
          >
            <Image
              quality={100}
              alt=""
              src={pfp}
              width={48}
              height={48}
              className="object-cover object-center"
            />
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <IconButton className="w-12 h-12 text-xs">
          <Home04Icon />
        </IconButton>
      </div>
    </div>
  );
}
