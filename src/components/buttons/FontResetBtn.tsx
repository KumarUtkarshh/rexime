"use client";

import { selectedFontAtom } from "@/app/store";
import { useSetAtom } from "jotai";
import { RiResetLeftFill } from "react-icons/ri";
import { Button } from "../ui/button";

export default function FontResetBtn() {
  const setSelectedFont = useSetAtom(selectedFontAtom);

  return (
    <Button
      variant="secondary"
      className="rounded-full"
      size="icon"
      onClick={() => setSelectedFont(null)}
    >
      <RiResetLeftFill />
    </Button>
  );
}
