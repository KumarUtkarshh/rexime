import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import YouTubeBtn from "../buttons/YouTubeBtn";
import GetStartedOrDashBtn from "./GetStartedOrDashBtn";

const Hero03 = () => {
  return (
    <div className="min-h-screen inset-0 md:pointer-events-none z-10 absolute bg-transparent w-full flex flex-col gap-16 items-center justify-center px-6 py-16">
      <div className="text-center max-w-3xl">
        <Badge
          variant="secondary"
          className="rounded-full py-1 border-border"
          asChild
        >
          <Link href="#">
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl md:leading-[1.2] font-semibold tracking-tighter">
          Create Your Perfect Resume with Rexime
        </h1>
        <p className="mt-6 md:text-lg">
          Craft stunning, professional resumes in minutes with Rexime. Our
          reactive, modern interface helps you design, customize, and export
          resumes effortlessly — giving you the edge to stand out and land
          interviews at top tech companies like Google, Amazon, and beyond.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4 pointer-events-auto">
          <GetStartedOrDashBtn />
          <YouTubeBtn />
        </div>
      </div>
      {/* <div className="w-full max-w-(--breakpoint-xl) mx-auto aspect-video bg-accent rounded-xl" /> */}
    </div>
  );
};

export default Hero03;
