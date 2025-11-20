import BuilderPage from "@/components/builder/BuilderPage";
import { hasResumeEditAccess } from "@/lib/supabase/hasResumeEditAccess";

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const allowed = await hasResumeEditAccess(id);
  console.log(allowed);

  if (!allowed) {
    // redirect("/403");
  }

  return <BuilderPage id={id} />;
}
