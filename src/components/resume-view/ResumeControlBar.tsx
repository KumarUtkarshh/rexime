import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { RefObject } from "react";
import { FaRegFilePdf } from "react-icons/fa6";
import {
  MdCenterFocusWeak,
  MdOutlineZoomInMap,
  MdOutlineZoomOutMap,
} from "react-icons/md";
import { useControls } from "react-zoom-pan-pinch";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

function ControlBtn({
  icon,
  tooltip,
  onClick,
}: {
  icon: React.ReactElement;
  tooltip: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild className="text-gray-300 text-xs">
        <Button variant="secondary" size="default" onClick={onClick}>
          {icon}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{tooltip}</TooltipContent>
    </Tooltip>
  );
}

export function ResumeControlBar({
  pdfRef,
}: {
  pdfRef: RefObject<HTMLDivElement | null>;
}) {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  const cleanColors = (element: HTMLDivElement) => {
    const elements = element.querySelectorAll("*");
    elements.forEach((el) => {
      const style = getComputedStyle(el);
      if (
        style.color.includes("lab(") ||
        style.backgroundColor.includes("lab(")
      ) {
        (el as HTMLDivElement).style.color = "black";
        (el as HTMLDivElement).style.backgroundColor = "white";
      }
    });
  };

  const handleDownloadPDF = async () => {
    const element = pdfRef.current;
    if (!element) return;

    // ✅ Dynamically import (only runs in browser)
    const html2pdf = (await import("html2pdf.js")).default;

    cleanColors(element);

    const options: any = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2, // Higher = better quality
        useCORS: true,
        logging: false,
      },
      jsPDF: {
        unit: "in",
        format: "a4",
        orientation: "portrait",
      },
    };

    (html2pdf as any)()
      .from(element)
      .set(options)
      .save()
      .catch((err: any) => console.error("PDF generation error:", err));
  };

  return (
    <div className="flex absolute z-10 top-[90dvh] left-[35%] flex-col items-start gap-8">
      <ButtonGroup>
        <ControlBtn
          onClick={() => zoomIn()}
          icon={<MdOutlineZoomInMap />}
          tooltip={"Zoom in"}
        />
        <ControlBtn
          onClick={() => zoomOut()}
          icon={<MdOutlineZoomOutMap />}
          tooltip={"Zoom out"}
        />
        <ControlBtn
          onClick={() => resetTransform()}
          icon={<MdCenterFocusWeak />}
          tooltip={"Re center"}
        />
        <ControlBtn
          onClick={handleDownloadPDF}
          icon={<FaRegFilePdf />}
          tooltip={"Download pdf"}
        />
      </ButtonGroup>
    </div>
  );
}
