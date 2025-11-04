import { FaDonate } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="hidden md:block fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit px-4 pointer-events-none">
      <div className="mx-auto bg-transparent backdrop-blur-3xl px-4 py-3 text-foreground rounded-xl pointer-events-auto">
        <p className="text-center text-sm whitespace-nowrap overflow-hidden text-ellipsis">
          <FaDonate
            className="me-2 -mt-0.5 inline-flex opacity-60"
            size={16}
            aria-hidden="true"
          />
          Enjoying the resume builder? Your small donation helps us keep it
          fast, reliable, and free for everyone.{" "}
          <span className="text-muted-foreground">·</span>{" "}
          <a href="#" className="font-medium underline hover:no-underline">
            Donate
          </a>
        </p>
      </div>
    </div>
  );
}
