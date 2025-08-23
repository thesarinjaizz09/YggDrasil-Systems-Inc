import { cn } from "@/lib/utils";
import React from "react";
import { MeteorCards } from "@/components/MeteorCards/meteor-cards";
import { BentoGrid, BentoGridItem } from "./grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function BentoGridDemo() {
  return (
    <BentoGrid className="w-full mt-15">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <>
  <div className="relative overflow-hidden flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gray-900">
    <MeteorCards number={20}/>
  </div>
  </>
);
const items = [
  {
    title: `Endpoint & IT Hygiene Security`,
    description: "Protects devices and systems with continuous patching, configuration monitoring, and automated checks.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Threat Detection & Malware Defense",
    description: "Real-time detection and prevention of malicious activities, unauthorized file changes, and evolving threat vectors.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Threat Hunting & Vulnerability Management",
    description: "Proactively uncovers hidden risks, analyzes system logs, and identifies vulnerabilities before attackers can exploit them.",
    header: <Skeleton />,
    icon: <IconSignature className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Cloud & Container Security",
    description:
      "Provides airtight security for cloud workloads, containerized applications, and virtualized environments at scale.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Posture & Compliance Management",
    description: "Continuously evaluates organizational security posture and ensures adherence to global compliance frameworks.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Security Operations & Incident Response",
    description: "Centralized monitoring, automated workflows, and rapid response to contain and neutralize cyber incidents.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-10 w-10 text-neutral-500" />,
  },
  {
    title: "Integrated AI-Driven Protection",
    description: "An adaptive AI framework that unifies all defenses — from endpoints to cloud — into a single intelligent security ecosystem.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-10 w-10 text-neutral-500" />,
  },
];
