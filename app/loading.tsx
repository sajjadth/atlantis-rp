"use client";

import { CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <div className="w-screen h-svh flex flex-column items-center justify-center">
      <CircularProgress color="primary" />
    </div>
  );
}
