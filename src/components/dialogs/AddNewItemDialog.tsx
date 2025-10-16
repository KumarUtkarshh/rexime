import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldControl, FieldLabel } from "../ui/field";
import { Textarea } from "../ui/textarea";

function DialogField({
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

export default function AddNewItemDialog() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <Button variant="outline" className="w-full p-6">
          Add a new item
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2">
        <DialogTitle>New Item</DialogTitle>
        <div className="flex gap-2">
          <DialogField label="Company" placeholder="company name" />
          <DialogField label="Position" placeholder="Senior developer" />
        </div>
        <div className="flex gap-2">
          <DialogField
            label="Date or Date Range"
            placeholder="March 2025 to Present"
          />
          <DialogField label="Location" placeholder="Mars" />
        </div>
        {/* <DialogField label="Description" placeholder="Write something..." /> */}
        <Field>
          <FieldLabel>Description</FieldLabel>
          <Textarea placeholder="Write something..." className="h-32" />
        </Field>
        <div className="text-end mt-3">
          <Button className="w-fit">Save Changes</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
