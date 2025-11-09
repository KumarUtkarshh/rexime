import { ibmplexmono } from "@/app/fonts";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { LuGithub } from "react-icons/lu";
import { Button } from "../ui/button";

const footerLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Donate",
    href: "/donation",
  },
  {
    title: "Terms",
    href: "/terms",
  },
  {
    title: "Faq",
    href: "#faq",
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col">
      <footer className="border-t">
        <div className="max-w-(--breakpoint-xl) mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <p className={`${ibmplexmono.className} text-3xl tracking-widest`}>
              Rexime
            </p>

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Rexime
              </Link>
              . All rights reserved.
            </span>

            <div className="flex gap-2">
              <Link href="https://github.com/dev-o-los/rexime" target="_blank">
                <Button variant="outline" size="icon" className="rounded-full">
                  <LuGithub className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="https://x.com/utkarshdev_" target="_blank">
                <Button variant="outline">
                  <BsTwitterX className="h-5 w-5" /> @utkarshdev_
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
