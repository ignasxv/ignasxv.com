import type { Metadata, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import image1 from "@/images/photos/image-1.jpg";
import image2 from "@/images/photos/image-2.jpg";
import image3 from "@/images/photos/image-3.jpg";
import image4 from "@/images/photos/image-4.jpg";
import image5 from "@/images/photos/image-5.jpg";
import clsx from "clsx";
import { Card } from "@/components/Card";
import PillButton from "@/components/PillButton";

export const metadata: Metadata = {
  title: "Ignas XV",
  description: "learning",
  openGraph: {
    title: "Computer engineering at CWRU",
    description: "Computer engineering at CWRU",
  },
};

function Photos() {
  let rotations = [
    "rotate-2",
    "-rotate-2",
    "rotate-2",
    "rotate-2",
    "-rotate-2",
  ];

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

const HomePage: NextPage = () => {
  const jsonSchema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ignas XV",
      url: "https://ignasxv.com",
      sameAs: [
        "https://x.com/ignasxv",
        "https://www.linkedin.com/in/ignasxv/",
        "https://dribbble.com/ignasxv",
        "https://github.com/ignasxv",
        "https://teksafari.org/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "ignas xv",
      url: "https://ignasxv.com",
    },
  ]);
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonSchema,
          }}
        />
      </Head>
      <main className="pb-32">
        <div className="px-6">
          <section className="w-full max-w-xl mx-auto mt-44">
            <h1 className="text-xl font-mono italic text-[#c9c1b4] font-medium">
              Hey 👋🏿, I&apos;m Ignas XV.
            </h1>
            <p className="mt-4 text-[#676767]">
              <s>I believe that</s>, We all have a moral responsibility to be{" "}
              <span className="border-b text-transparent bg-clip-text bg-gradient-to-r from-[#c0649e] to-[#2979a7] border-[#242424] py-1">
                great.
              </span>
              
              <em>
                {" "}
                — Channeling our abilities to drive life-changing impact... {" "}
                <span className="border-b text-transparent bg-clip-text bg-gradient-to-r from-[#9696bb] to-[#bddb36] border-[#242424] py-1">
                on others{" "}
              </span>
              </em>
              <br />
              <br />
              In this public repository, I document my successes, my failures,
              and the lessons learned in my pursuit of &quot;that&quot;
              responsibility.
            </p>
            <div className="mt-8">
              <PillButton href="https://archive.ignasxv.com/music">
                archive from 2021
              </PillButton>
            </div>

           
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
