import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Link from "next/link";

export default function Result() {
  return (
    <>
      <CardHeader>
        <CardTitle>تعداد برگرها برابر است با:</CardTitle>
        <CardDescription>
          با فرض اینکه قیمت برگر به صورت میانگین ۱۰ دلار باشد.
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col grow">
        <div className="grow text-9xl text-center flex items-center justify-center">
          ۱۰
        </div>
        <Link href="/">
          <Button className="w-full">برگشت</Button>
        </Link>
      </CardContent>
    </>
  );
}
