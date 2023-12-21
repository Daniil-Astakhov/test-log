"use client";

import { Button } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [time, setTime] = useState<any>();

  const sort = () => {
    const data = Array.from({ length: 50000000 }, (_, index) => index);
    const first = new Date().getTime();

    data.sort((a, b) => b - a);

    const last = new Date().getTime();

    const timeDifference = last - first;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
    const milliseconds = timeDifference % 1000;

    console.log(
      `Time elapsed: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`
    );
    setTime(
      `Time elapsed: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds, ${milliseconds} milliseconds`
    );
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button onClick={sort}>Сортировка a - b</Button>
        <p>{time}</p>
      </div>
    </main>
  );
}
