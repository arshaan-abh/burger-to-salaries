import type { Metadata } from "next";
import { Vazirmatn as Sans } from "next/font/google";
import "./globals.css";
import { ReactNode, Suspense } from "react";
import { cn } from "@/lib/utils";
import { MainCarousel } from "@/components/ui/main-carousel";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import logo from "#/logo.svg";
import Link from "next/link";
import { Block } from "@/components/ui/block";

const sans = Sans({ subsets: ["arabic"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa-IR" className="h-full" dir="rtl">
      <body
        className={cn(
          sans.variable,
          "antialiased font-sans bg-body flex items-center justify-center min-h-full"
        )}
      >
        <div className="flex max-w-96 ml:max-w-none m-8 sm:m-16 ml:w-[48rem] ml:h-[24rem] *:basis-1/2 gap-4 flex-col-reverse ml:flex-row">
          <Card className="flex flex-col">
            <div className="grow flex flex-col justify-between">
              <Suspense fallback={<Block>در حال بارگذاری...</Block>}>
                {children}
              </Suspense>
            </div>

            <CardFooter>
              <Link
                href="https://code-bin.ir/"
                className="gap-1 text-sm flex items-center mr-auto flex-wrap justify-end"
                target="_blank"
              >
                ساخته شده توسط <Image src={logo} alt="codebin" height={16} />
              </Link>
            </CardFooter>
          </Card>

          <MainCarousel />
        </div>
      </body>
    </html>
  );
}
