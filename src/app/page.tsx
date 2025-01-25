import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CurrenciesResponse } from "@/interfaces/currencies";
import { formatPrice } from "@/lib/format";
import { Label } from "@radix-ui/react-label";
import { redirect } from "next/navigation";

const calculate = async () => {
  "use server";
  redirect("/result");
};

export default async function Home() {
  const currentUSDTPrice = await fetch("https://api.tetherland.com/currencies")
    .then((res) => res.json())
    .then((res: CurrenciesResponse) =>
      formatPrice(res.data.currencies.USDT.price)
    );

  return (
    <>
      <CardHeader>
        <CardTitle>
          با درآمد یه ماهت تو ایران چندتا برگر تو آمریکا میتونی بخری؟
        </CardTitle>

        <CardDescription>
          قیمت تقریبی دلار در حال حاضر: {currentUSDTPrice} تومان
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={calculate} className="flex flex-col gap-4">
          <input
            type="hidden"
            name="currentUSDTPrice"
            value={currentUSDTPrice}
          />

          <Label htmlFor="salary">حقوق به تومان</Label>
          <Input
            id="salary"
            name="salary"
            placeholder="عدد انگلیسی وارد کنید"
            type="number"
            required
            min={1}
            max={999999999}
          />

          <Button>محاسبه</Button>
        </form>
      </CardContent>
    </>
  );
}
