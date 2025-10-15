import { ResumeForm } from "@/components/form/ResumeForm";
import TemplateAmazing from "@/components/templates/template-amazing";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Page() {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* LEFT SECTION — Scrollable form */}
      <aside className="w-[30%] border-r">
        <ScrollArea className="h-full px-6 py-3 space-y-8">
          <ResumeForm />
        </ScrollArea>
      </aside>

      {/* MIDDLE SECTION — Resume preview */}
      <main className="w-2/4 flex items-center justify-center relative">
        <TemplateAmazing />
      </main>

      {/* RIGHT SECTION — Scrollable color + template picker */}
      <aside className="w-1/4 border-l">
        <ScrollArea className="h-full p-6 space-y-8">
          {/* Color Picker */}
          asas
          {/* Template Selector */}
        </ScrollArea>
      </aside>
    </div>
  );
}
