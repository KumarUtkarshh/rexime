"use client";
import { resumeAtom, resumeShowCaseIdxAtom } from "@/app/store";
import { mockBerlinData, sampleData } from "@/lib/constants";
import { ResumeData } from "@/lib/resume-types";
import { useAtom, useSetAtom } from "jotai";
import Image from "next/image";
import { MouseEventHandler } from "react";

function ResumeImage({
  src,
  alt,
  onClick,
}: {
  src: string;
  alt: string;
  onClick: MouseEventHandler<HTMLImageElement>;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className="h-52 rounded-sm cursor-pointer active:scale-95 transition-all"
      height={400}
      width={200}
      onClick={onClick}
    />
  );
}

export default function TemplateSelector() {
  const [index, setIdx] = useAtom(resumeShowCaseIdxAtom);
  const setResume = useSetAtom(resumeAtom);
  const images = [
    { imagePath: "/resume-simple.jpeg", defaultResume: sampleData },
    { imagePath: "/resume-stylish.jpg", defaultResume: mockBerlinData },
  ];

  const handleClick = (index: number, resume: ResumeData) => {
    setIdx(index);
    setResume(resume);
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((data, key) => (
        <div
          className={index == key ? "border p-0.5 border-white rounded-lg" : ""}
        >
          <ResumeImage
            key={key}
            src="/resume-simple.jpeg"
            alt={data.imagePath.slice(1)}
            onClick={() => handleClick(key, data.defaultResume)}
          />
        </div>
      ))}
    </div>
  );
}
