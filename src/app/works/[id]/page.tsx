import { notFound } from "next/navigation";
import { works} from "@/app/data/works";
import WorkClient from "./WorkClient";
import LinkButton from "@/app/components/LinkButton/LinkButton";

export default async function WorkPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params

  const workSlug = resolvedParams.id;

  const current = works.find((w) => w.slug === workSlug);
  if (!current) notFound();

  const otherTwo = works.filter(({ slug }) => slug !== workSlug).slice(0, 2);

  return (
    <>
      <WorkClient work={current} otherTwo={otherTwo} />
      <LinkButton url={current.link} />
    </>
  );
}
