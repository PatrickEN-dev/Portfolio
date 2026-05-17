"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallback: ReactNode;
};

export default function SafeImage({ src, alt, className, fallback }: Props) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return <>{fallback}</>;
  }

  return (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt}
      className={cn("block", className)}
      onError={() => setErrored(true)}
    />
  );
}
