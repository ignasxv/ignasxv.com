import type { Metadata, NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

import image1 from "@/images/photos/image-1.jpg"
import image2 from "@/images/photos/image-2.jpg"
import image3 from "@/images/photos/image-3.jpg"
import image4 from "@/images/photos/image-4.jpg"
import image5 from "@/images/photos/image-5.jpg"
import clsx from "clsx"
import { Card } from "@/components/Card"

export const metadata: Metadata = {
  title: "Ignas XV",
  description:
    "learning",
  openGraph: {
    title: "Computer engineering at CWRU",
    description:
      "Computer engineering at CWRU",
  },
}

function Photos() {
  let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"]

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
  )
}

const HomePage: NextPage = () => {
  const jsonSchema = JSON.stringify([
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Nitesh Kumar Niranjan",
      url: "https://theux.dev",
      sameAs: [
        "https://x.com/niranjannitesh",
        "https://www.linkedin.com/in/niranjannitesh/",
        "https://dribbble.com/niranjannitesh",
        "https://github.com/niranjannitesh",
        "https://vaya.so/",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Nitesh Kumar Niranjan",
      url: "https://theux.dev",
    },
  ])
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
            <h1 className="text-xl text-[#c9c1b4] font-medium">Hey, I&apos;m Ignas XV.</h1>
            <p className="mt-4 text-[#676767]">
              <s>I believe that</s>, We all have a moral responsibility to be {" "}
              <span className="border-b text-transparent bg-clip-text bg-gradient-to-r from-[#D4D4AD] to-[#2979a7] border-[#242424] py-1">
                great.
              </span>
              <br /> <br />
              In this public repository, I document my successes, 
              my failures, and the lessons learned in my pursuit of &quot;that&quot; responsibility.            
            </p>
            <div className="mt-8">
              <p className="text-[#676767]">
                <span className="text-[#676767] border-b  border-[#242424] py-2 pr-1">
                <em> You can access my old site from 2021 </em>
                </span>{" "}
                at{" "}
                <a href="https://archive.ignasxv.com" target="_blank" rel="noreferrer">
                  <span className="bg-[#0F0F0F] text-[#676767] inline-flex items-center gap-2 border border-[#161616] px-5 py-2 rounded-full font-medium ml-1">
                    archive.ignasxv.com
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      className="w-4 h-4"
                    >
                      <rect
                        opacity="0.12"
                        x="2"
                        y="4"
                        width="18"
                        height="18"
                        rx="5"
                        fill="currentColor"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.25 2C16.25 2.41421 16.5858 2.75 17 2.75H20.1893L11.4697 11.4697C11.1768 11.7626 11.1768 12.2374 11.4697 12.5303C11.7626 12.8232 12.2374 12.8232 12.5303 12.5303L21.25 3.81066V7C21.25 7.41421 21.5858 7.75 22 7.75C22.4142 7.75 22.75 7.41421 22.75 7V2C22.75 1.58579 22.4142 1.25 22 1.25H17C16.5858 1.25 16.25 1.58579 16.25 2ZM10 3.25L9.96644 3.25C8.59472 3.25 7.51929 3.24999 6.65494 3.32061C5.77479 3.39252 5.04769 3.54138 4.38955 3.87671C3.30762 4.42798 2.42798 5.30762 1.87671 6.38955C1.54138 7.04768 1.39252 7.77479 1.32061 8.65494C1.24999 9.51929 1.25 10.5947 1.25 11.9664V12V14V14.0336C1.25 15.4053 1.24999 16.4807 1.32061 17.3451C1.39252 18.2252 1.54138 18.9523 1.87671 19.6104C2.42798 20.6924 3.30762 21.572 4.38956 22.1233C5.04768 22.4586 5.77479 22.6075 6.65494 22.6794C7.51927 22.75 8.59469 22.75 9.96637 22.75H9.96642H10H12H12.0336H12.0336C13.4053 22.75 14.4807 22.75 15.3451 22.6794C16.2252 22.6075 16.9523 22.4586 17.6104 22.1233C18.6924 21.572 19.572 20.6924 20.1233 19.6104C20.4586 18.9523 20.6075 18.2252 20.6794 17.3451C20.75 16.4807 20.75 15.4053 20.75 14.0336V14.0336V14V11C20.75 10.5858 20.4142 10.25 20 10.25C19.5858 10.25 19.25 10.5858 19.25 11V14C19.25 15.4125 19.2494 16.4268 19.1844 17.2229C19.12 18.0103 18.9964 18.518 18.7868 18.9295C18.3793 19.7291 17.7291 20.3793 16.9295 20.7868C16.518 20.9964 16.0103 21.12 15.2229 21.1844C14.4268 21.2494 13.4125 21.25 12 21.25H10C8.58749 21.25 7.57322 21.2494 6.77708 21.1844C5.9897 21.12 5.48197 20.9964 5.07054 20.7868C4.27085 20.3793 3.62068 19.7291 3.21322 18.9295C3.00359 18.518 2.87996 18.0103 2.81563 17.2229C2.75058 16.4268 2.75 15.4125 2.75 14V12C2.75 10.5875 2.75058 9.57322 2.81563 8.77708C2.87996 7.9897 3.00359 7.48197 3.21322 7.07054C3.62068 6.27085 4.27085 5.62068 5.07054 5.21322C5.48197 5.00359 5.9897 4.87996 6.77708 4.81563C7.57322 4.75058 8.58749 4.75 10 4.75H13C13.4142 4.75 13.75 4.41421 13.75 4C13.75 3.58579 13.4142 3.25 13 3.25H10Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>

            <div className="mt-12 text-[#676767] flex items-center gap-5">
             
             
              <a
                href="https://github.com/ignasxv"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A] rounded-lg"
                aria-label="GitHub"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5094 20.9056C14.5198 20.402 14.5349 19.6585 14.5349 19C14.5349 18 13.8548 17.0818 13.8548 17.0818C16.1129 16.834 18.4919 15.5037 18.4919 11.5393C18.4919 10.383 18.0887 9.84616 17.4435 9.10284L17.4579 9.0525C17.5588 8.7032 17.8583 7.66631 17.3226 6.29474C16.4758 6.00567 14.5403 7.40972 14.5403 7.40972C13.7339 7.16195 12.8871 7.07936 12 7.07936C11.1532 7.07936 10.3065 7.16195 9.5 7.40972C9.5 7.40972 7.52419 6.04697 6.71774 6.29474C6.15323 7.74009 6.47581 8.81377 6.59677 9.10284C5.95161 9.84616 5.62903 10.383 5.62903 11.5393C5.62903 15.5037 7.92742 16.834 10.1855 17.0818C10.1855 17.0818 9.5 17.8624 9.5 18.9312V20.9082V22.4578C4.76861 21.3309 1.25 17.0764 1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.073 19.2361 21.3252 14.5094 22.4555V20.9056Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/ignasxv"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center hover:bg-[#1A1A1A] rounded-lg"
                aria-label="LinkedIn"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.25305 1.84946C5.42957 1.25 6.96971 1.25 10.05 1.25H13.95C17.0303 1.25 18.5704 1.25 19.7469 1.84946C20.7818 2.37677 21.6232 3.21816 22.1505 4.25305C22.75 5.42957 22.75 6.96971 22.75 10.05V13.95C22.75 17.0303 22.75 18.5704 22.1505 19.7469C21.6232 20.7818 20.7818 21.6232 19.7469 22.1505C18.5704 22.75 17.0303 22.75 13.95 22.75H10.05C6.96971 22.75 5.42957 22.75 4.25305 22.1505C3.21816 21.6232 2.37677 20.7818 1.84946 19.7469C1.25 18.5704 1.25 17.0303 1.25 13.95V10.05C1.25 6.96971 1.25 5.42957 1.84946 4.25305C2.37677 3.21816 3.21816 2.37677 4.25305 1.84946ZM7.5 6.25C6.80964 6.25 6.25 6.80964 6.25 7.5C6.25 8.19036 6.80964 8.75 7.5 8.75C8.19036 8.75 8.75 8.19036 8.75 7.5C8.75 6.80964 8.19036 6.25 7.5 6.25ZM8.25 11C8.25 10.5858 7.91421 10.25 7.5 10.25C7.08579 10.25 6.75 10.5858 6.75 11V18C6.75 18.4142 7.08579 18.75 7.5 18.75C7.91421 18.75 8.25 18.4142 8.25 18V11ZM12.25 14C12.25 12.7574 13.2574 11.75 14.5 11.75C15.7426 11.75 16.75 12.7574 16.75 14V18C16.75 18.4142 17.0858 18.75 17.5 18.75C17.9142 18.75 18.25 18.4142 18.25 18V14C18.25 11.9289 16.5711 10.25 14.5 10.25C12.4289 10.25 10.75 11.9289 10.75 14V18C10.75 18.4142 11.0858 18.75 11.5 18.75C11.9142 18.75 12.25 18.4142 12.25 18V14Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </section>
        </div>
        
      </main>
    </>
  )
}

export default HomePage
