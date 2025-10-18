"use client";

import { openCustomEditorAtom } from "@/app/store";
import { ResumeEntry } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import * as React from "react";
import AddNewItemDialog from "../dialogs/AddNewItemDialog";
import ItemTileDialog from "../dialogs/ItemTileDialog";
import SkillDialog from "../dialogs/SkillDialog";
import TiptapEditor from "../editor/TiptapEditor";
import { FormHeading } from "./FormHeading";

export function FormPlaceHolderSection({
  heading,
  icon,
  entries,
}: {
  heading: string;
  icon: React.ReactElement;
  entries: ResumeEntry[];
}) {
  const isEditorOpen = useAtomValue(openCustomEditorAtom);
  const id = heading.toLowerCase();
  return (
    <div>
      <FormHeading heading={heading} icon={icon} />

      {(isEditorOpen && id == "skills") || id == "achievements" ? (
        <TiptapEditor
          onContentChange={function (html: string): void {
            throw new Error("Function not implemented.");
          }}
          content={entries[0].editorHTML}
        />
      ) : (
        <div>
          {entries.map((entry, key) => (
            <ItemTileDialog
              entry={entry}
              key={key}
              id={heading.toLowerCase()}
            />
          ))}
          <div className="mb-5"></div>
          {heading.toLowerCase() == "skills" ? (
            <SkillDialog />
          ) : (
            <AddNewItemDialog id={heading.toLowerCase()} />
          )}
        </div>
      )}

      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
