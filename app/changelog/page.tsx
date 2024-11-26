import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function CareerPage() {
  const data = [
    {
      title: "currently",
      content: (
        <div>
          <p>
            @intersmart, developing and user flow planing various web projects.
          </p>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            Working as a one man show both designs and developing cms and ecommerce project frontend sides. </p>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p className="mb-8 text-neutral-800 dark:text-neutral-200">
            Expiriment knowledge in practical life and a intern at eyet innovations.
          </p>
        </div>
      ),
    },
    {
      title: "2016 - 19",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            Doing graduaction in economics at Calicut University to improve my financial knowledge.
          </p>
        </div>
      ),
    },
    {
      title: "before 2019",
      content: (
        <div>
          <p className="mb-8 font-normal text-neutral-800 dark:text-neutral-200">
            Enjoying lazy school days with lots of future plans :)
          </p>
        </div>
      ),
    }
  ];
  return (
    <section className="mt-[var(--header-y)] py-2">
      <Timeline data={data} />
    </section>
  );
}
