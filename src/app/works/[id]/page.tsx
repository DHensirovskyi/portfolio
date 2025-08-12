import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { works, type IWorks } from "@/app/data/works";
import WorkClient from "./WorkClient";
import LinkButton from "@/app/components/LinkButton/LinkButton";

export default function WorkPage({ params }: { params: { id: string } }) {
  const workSlug = params.id;

  // текущая работа
  const current = works.find((w) => w.slug === workSlug);
  if (!current) notFound();

  // остальные и первые две
  const otherTwo = works.filter(({ slug }) => slug !== workSlug).slice(0, 2);

  return (
    <>
      <WorkClient work={current} otherTwo={otherTwo} />
      <LinkButton url={current.link} />
    </>
  );
}
