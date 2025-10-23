"use client";

import {
  resumeAtom,
  resumeShowCaseIdxAtom,
  selectedFontAtom,
} from "@/app/store";
import { useAtomValue } from "jotai";
import { useRef } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import Resume from "../templates/Resume";
import { ResumeAmsterdam } from "../templates/ResumeAmsterdam";
import { ResumeBerlin } from "../templates/ResumeBerlin";
import { ResumeTimeLine } from "../templates/ResumeTimeline";
import { ResumeControlBar } from "./ResumeControlBar";

export default function TemplateShowcase() {
  const data = useAtomValue(resumeAtom);
  const font = useAtomValue(selectedFontAtom);

  const resumeShowCaseIdx = useAtomValue(resumeShowCaseIdxAtom);
  const pdfRef = useRef<HTMLDivElement>(null);

  const resumes: Record<number, React.ReactElement> = {
    0: <Resume data={data} font={font} />,
    1: <ResumeBerlin data={data} />,
    2: <ResumeTimeLine data={data} />,
    3: <ResumeAmsterdam data={data} />,
  };

  return (
    <TransformWrapper
      initialScale={1}
      minScale={0.2}
      maxScale={3}
      centerOnInit={true}
      limitToBounds={false}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <div className="relative">
          <ResumeControlBar pdfRef={pdfRef} />
          <div ref={pdfRef}>
            <TransformComponent>
              {resumes[resumeShowCaseIdx]}
            </TransformComponent>
          </div>
        </div>
      )}
    </TransformWrapper>
  );
}
