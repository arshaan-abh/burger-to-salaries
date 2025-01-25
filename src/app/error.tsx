"use client";

import { Block } from "@/components/ui/block";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Block className="flex-col">
      <h2>مشکلی در بارگذاری اطلاعات به وجود آمد!</h2>
      <Button onClick={reset}>دوباره تلاش کن</Button>
    </Block>
  );
}
