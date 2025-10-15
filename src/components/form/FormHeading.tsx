import { IoMdClose } from "react-icons/io";
import { Button } from "../ui/button";

export function FormHeading({
  heading,
  icon,
}: {
  heading: string;
  icon: React.ReactElement;
}) {
  return (
    <div className="flex items-center mb-4 mt-2 justify-between">
      <div className="flex items-center gap-2">
        <div className="text-xl">{icon}</div>
        <h1 className="text-3xl font-semibold">{heading}</h1>
      </div>
      <Button className="rounded-full" variant="secondary" size="icon">
        <IoMdClose />
      </Button>
    </div>
  );
}
