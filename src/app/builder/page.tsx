import { ResumeForm } from "@/components/form/ResumeForm";
import TemplateSelector from "@/components/templates/TemplateSelector";
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
      <main className="w-2/4 h-full">
        <TemplateSelector />
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
