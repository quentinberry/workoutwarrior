"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  const currentColor = "red";
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="relative">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Image
              src="/basic-view-muscle.png"
              alt="A picture of a cat"
              width={500}
              height={500}
            />
          </CardContent>
          <CardFooter>
            <button
              className="btn btn-primary"
              style={{ backgroundColor: currentColor }}
              onClick={() => alert("Hello!")}
            >
              Click me
            </button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
