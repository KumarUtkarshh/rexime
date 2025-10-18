import { ResumeEntry } from "@/lib/resume-types";
import * as React from "react";
import AddNewItemDialog from "../dialogs/AddNewItemDialog";
import ItemTileDialog from "../dialogs/ItemTileDialog";
import SkillDialog from "../dialogs/SkillDialog";
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
  return (
    <div>
      <FormHeading heading={heading} icon={icon} />
      {entries.map((entry, key) => (
        <ItemTileDialog entry={entry} key={key} id={heading.toLowerCase()} />
      ))}
      <div className="mb-5"></div>
      {heading.toLowerCase() == "skills" ? (
        <SkillDialog />
      ) : (
        <AddNewItemDialog id={heading.toLowerCase()} />
      )}

      <hr className="w-full mt-7 mb-4" />
    </div>
  );
}
