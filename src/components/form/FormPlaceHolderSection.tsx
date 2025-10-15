import * as React from "react";
import { Button } from "../ui/button";
import { FormHeading } from "./FormHeading";

export function FormPlaceHolderSection({
  heading,
  icon,
}: {
  heading: string;
  icon: React.ReactElement;
}) {
  return (
    <div>
      <FormHeading heading={heading} icon={icon} />
      <Button variant="outline" className="w-full p-6">
        Add a new item
      </Button>
      <hr className="w-full mt-7" />
    </div>
  );
}
