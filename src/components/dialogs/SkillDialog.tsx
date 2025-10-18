import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import InputWithTags from "../InputWithTags";
import { Field, FieldControl, FieldLabel } from "../ui/field";

export function DialogField({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <Field className="w-full">
      <FieldLabel>{label}</FieldLabel>
      <FieldControl placeholder={placeholder} />
    </Field>
  );
}

export default function SkillDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-full" asChild>
        <Button variant="outline" className="w-full p-6">
          Add a new item
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2 sm:w-[500px]">
        <DialogTitle>New Item</DialogTitle>
        <DialogField label={"Skill name"} placeholder={"Frame works"} />
        <InputWithTags />
      </DialogContent>
    </Dialog>
  );
}
