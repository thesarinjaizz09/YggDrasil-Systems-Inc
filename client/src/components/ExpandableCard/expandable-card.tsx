"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCard() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div> */}

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-200 text-2xl text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-400 text-xl text-slate-300"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {/* <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a> */}
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-lg h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto text-slate-300 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full space-y-6">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-start lg:items-center hover:bg-neutral-50 hover:bg-neutral-800 rounded-xl cursor-pointer border border-purple-400"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              {/* <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div> */}
              <div className="">
                <motion.h2
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-xl lg:text-xl text-neutral-800 text-neutral-200 text-left md:text-left text-white"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 text-neutral-400 text-slate-300 text-lg lg:text-lg md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="cursor-pointer px-4 py-2 text-xs lg:text-sm rounded-full font-bold bg-gray-100 hover:bg-slate-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "What services does Yggdrasil provide?",
    title: "Services We Offer",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Yggdrasil delivers end-to-end enterprise technology solutions, including AI-powered cybersecurity, enterprise-grade software development, blockchain integration, secure data brokerage, and IT consulting. Our solutions are built to be scalable, secure, and resilient, enabling organizations to confidently embrace digital transformation.
        </p>
      );
    },
  },
  {
    description: "How does Yggdrasil ensure data security for clients?",
    title: "Enterprise Data Security",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          We implement a Zero Trust security framework reinforced by AI-driven anomaly detection and 24/7 monitoring. Every system is designed with encryption-first policies, identity-based access controls, and compliance with global standards such as ISO 27001, GDPR, and HIPAA. This ensures enterprises remain secure, compliant, and breach-resistant against evolving cyber threats.
        </p>
      );
    },
  },

  {
    description: "Do you offer consulting services for enterprises?",
    title: "Consulting & Support",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Yes. We provide strategic consulting, security assessments, and technical advisory services to help enterprises modernize legacy infrastructure and adopt cutting-edge technologies. In addition, our community-driven support initiative offers free consulting and guidance, fostering innovation and problem-solving beyond client projects.
        </p>
      );
    },
  },
  {
    description: "Can Yggdrasil build custom solutions for my business?",
    title: "Tailored Enterprise Solutions",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Absolutely. We specialize in custom-built enterprise platforms ranging from AI-driven applications and SaaS solutions to secure enterprise systems. Every solution is aligned with your business goals, compliance requirements, and performance standards, ensuring measurable ROI and long-term digital resilience.
        </p>
      );
    },
  },
  {
    description: "What industries does Yggdrasil work with?",
    title: "Industries We Serve",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          We work across sectors where security, compliance, and performance are mission-critical. Our expertise spans finance, defense, healthcare, retail, and government, with solutions tailored to the unique requirements of each industry. Our adaptive frameworks ensure sector-specific compliance while enabling scalable growth and operational efficiency.
        </p>
      );
    },
  },
  {
    description: "How does Yggdrasil’s AI Cybersecurity protect businesses?",
    title: "AI-Powered Cybersecurity",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Our AI-driven Cybersecurity Mesh provides real-time threat detection, predictive risk analytics, and automated incident response. Unlike static defense systems, our AI evolves continuously, detecting anomalies before they escalate into breaches. With deception layers, behavioral monitoring, and autonomous defense mechanisms, we deliver proactive protection that minimizes downtime, reduces financial risks, and strengthens enterprise resilience.
        </p>
      );
    },
  },
];
