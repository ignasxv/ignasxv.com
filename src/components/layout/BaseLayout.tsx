import React from "react"
import Navigation from "./Navigation"

const BaseLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="flex font-mono flex-col justify-center min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(/img/bg-noise.png)`,
      }}
    >
      <div className="fixed top-0 h-[2px] bg-gradient-to-r from-[#a9937a] to-[#06c2d6] w-full"></div>
      {children}
      <Navigation />
      <div className="scale-[1] z-20 fixed -top-10 right-2 mt-12 text-[#676767] flex items-center gap-3 ">
              <a
                href="https://github.com/ignasxv"
                // target=""
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center border-[1.5px] md:border-2 border-[#676767] hover:bg-[#1A1A1A] rounded-lg"
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
                // target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center border-[1.5px] md:border-2 border-[#676767] hover:bg-[#1A1A1A] rounded-lg"
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
    </div>
  )
}

export default BaseLayout