import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import { MailIcon } from "@/components/icons";

export default function DocsPage() {
  return (
    <section className="flex flex-col items-center justify-center sm:gap-12 gap-6 sm:py-8 md:py-10">
      <div className="flex flex-col max-w-4xl justify-center w-full px-6 items-center gap-4">
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <Link
          href=""
          passHref
          className="bg-slate-500 text-white w-fit px-4 py-2 font-semibold rounded-md hover:opacity-90 flex gap-2"
        >
          <MailIcon />
          Email Me
        </Link>
        <p className="text-xl font-medium text-slate-600">or</p>
        <p className="text-2xl text-slate-800 font-semibold mx-auto mb-2">
          Send a Message Here!👇
        </p>
        <div className="bg-slate-300 p-8 rounded-lg w-[400px] flex flex-col gap-3">
          <Input type="text" label="Name" />
          <Input type="text" label="Subject" />
          <Input type="email" label="Email" />
          <Textarea
            label="Message"
            placeholder="Enter your message"
            className=""
          />
          <Button className="bg-slate-600 text-white" size="lg">
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
