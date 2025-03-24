import { Card } from "@/components/Card";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Blog — ignasxv.com",
};

const WritingPage: NextPage = () => {
  return (
    <>
      <div className="px-6">
        <main className="w-full max-w-2xl mx-auto mt-10 mb-20">
          <h1 className="text-xl font-medium">Blog</h1>
          <p className="mt-4 text-[#676767]">My thoughts and meditations</p>

          <div className="mt-6">
            <div className="flex flex-col max-w-3xl space-y-16">
              <Card className="p-4 rounded-lg border-[0.5px] border-[#484545]">
                <Card.Eyebrow decorate>March 2025</Card.Eyebrow>
                <Card.Title href="/writing/sample-post">
                  Why do you keep your promises?
                </Card.Title>
                <Card.Description>
                  Is it because the past always holds you, Or because the
                  future…?
                  <br />
                  Do you walk this path with steady steps, Or is it the weight
                  of unspoken doubts That keeps you moving forward?
                  <br />
                  Is it a vow you cherish or a debt you owe?
                  <br />
                  So tell me, <br />
                  When you make promises to anyone(including yourself), <br />
                  Do you see a choice or a consequence?
                </Card.Description>
                {/* <Card.Cta>Read article</Card.Cta> */}
              </Card>
              
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default WritingPage;
