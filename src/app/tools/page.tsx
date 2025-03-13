import PillButton from "@/components/PillButton"
import { Metadata, NextPage } from "next"
import Head from "next/head"

export const metadata: Metadata = {
  title: "Tools — theux.dev",
}

const ToolsPage: NextPage = () => {
  return (
    <>
      <div className="px-6">
        <main className="w-full max-w-2xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Tools</h1>
          <p className="mt-4 text-[#676767]">What I use to get an edge</p>

          <div className="mt-6">
            <div className="flex flex-col max-w-3xl space-y-2">
              <PillButton href="https://notion.so">Notion</PillButton>
              <PillButton href="https://garudalinux.org">Garuda Arch Linux</PillButton>
              <PillButton href="https://klariti.org">Klariti OS</PillButton>



            </div> 
          </div>
        </main>
      </div>
    </>
  )
}

export default ToolsPage
