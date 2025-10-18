"use client";
import { Button } from "../ui/button";
import TiptapEditor from "./TiptapEditor";

export function DialogTipTapEditor({
  content,
}: {
  content?: string | undefined;
}) {
  return (
    <div>
      <div className="text-sm my-2">Description</div>
      <TiptapEditor
        onContentChange={(content: string) => {}}
        content={content}
      />
      <div className="text-end mt-3">
        <Button className="w-fit">Save Changes</Button>
      </div>
    </div>
  );
}
