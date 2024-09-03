"use client";

import RootLayout from "@/app/layout";
import { ResponseErrorData } from "@/shared/api/http/types";
import { notFound } from "next/navigation";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  let result;

  try {
    result = JSON.parse(error.message) as unknown as ResponseErrorData;
  } catch (e) {}

  if (result?.status === 404) {
    notFound();
  }

  return (
    <RootLayout>
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <h2>Something went wrong!</h2>
        <p>{error.message}</p>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </RootLayout>
  );
}
