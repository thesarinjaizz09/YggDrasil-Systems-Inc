"use client";
import { motion } from "motion/react";
import { Tabs } from "@/components/Tabs/tabs";
import { WorldMap } from "@/components/WorldMap/world-map";
import { BentoGridDemo } from "@/components/BentoGrid/bento-grid";
import { MeteorCards } from "@/components/MeteorCards/meteor-cards";
import { WobbleCards } from "@/components/WobbleCards/wobble-cards";
import { GlowingButton } from "@/components/Buttons/glowing-button";
import { ExpandableCard } from "@/components/ExpandableCard/expandable-card";
import { FloatingDock } from "@/components/FloatingDock/floating-dock";
import { PlaceholdersAndVanishInput } from "@/components/VanishInput/vanish-input";
import { GlowingStarsDescription, GlowingStarsTitle } from "@/components/GlowingStars/glowing-stars";
import {
    IconBrandGithub,
    IconBrandMongodb,
    IconCircles,
    IconCloudBolt,
    IconBrandWordpress,
    IconBrandGoogleFilled,
    IconBrandWindowsFilled,
    IconBrandUbuntu,
    IconBrandAndroid,
    IconBrandAws,
    IconBrandAzure,
    IconServer
} from "@tabler/icons-react";
export default function Home() {

    const tabs = [
        {
            title: "AI-Powered Cybersecurity",
            value: "product",
            content: (
                <div className="w-full overflow-hidden relative h-200 rounded-2xl p-1 text-xl md:text-4xl font-bold text-white border border-purple-400  lg:h-180">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full overflow-scroll relative h-full rounded-2xl text-xl font-bold text-white backdrop-blur-lg bg-gray-900 py-5 px-4 ">
                        <div className="h-auto lg:h-full flex flex-col items-start justify-between w-full">
                            <GlowingStarsTitle className="mb-8">Real-Time <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Precision.{" "}
                            </p>
                                Zero <p style={{ color: "#2b5cfc", display: "inline" }}>
                                    Compromise.
                                </p></GlowingStarsTitle>
                            <div className="w-full flex justify-between items-center">
                                <GlowingStarsDescription className="w-full mb-8">
                                    In today’s threat landscape, milliseconds matter. Our AI-Powered Cybersecurity platform is more than just protection — it’s an autonomous security ecosystem engineered to outpace attackers.
                                    <br />
                                    <br />
                                    By unifying XDR and SIEM into a single AI-driven framework, it delivers continuous real-time monitoring, instant breach alerts, and autonomous remediation across endpoints, workloads, and cloud environments. Every action is orchestrated by AI, giving your business a living, adaptive defense system that never sleeps.
                                    <br />
                                    <br />
                                    Imagine a live security dashboard that gives you:
                                    <br />

                                    ✅ Full visibility across your IT infrastructure in real-time
                                    <br />

                                    ✅ AI-driven threat intelligence that evolves as fast as attackers do
                                    <br />

                                    ✅ Instant remediation on endpoints before threats spread
                                    <br />

                                    ✅ Granular compliance and vulnerability insights at your fingertips
                                    <br />
                                    <br />
                                    🔒 Our system doesn’t just react — it predicts. Leveraging advanced machine learning, it analyzes billions of signals across your network to anticipate threats before they emerge, ensuring your business remains secure, resilient, and always a step ahead.
                                    <br />
                                    <br />


                                    Your enterprise deserves more than reaction — it deserves anticipation. With our system, you’re not just protected, you’re untouchable.
                                    This is intelligence at the edge, vigilance at the core, and resilience at scale.

                                </GlowingStarsDescription>
                            </div>
                            <button className="font-normal w-30 cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                                Explore
                            </button>
                        </div>
                        {/* <div className="w-full lg:w-6/12 flex items-center justify-center rounded-2xl overflow-visible lg:overflow-hidden mt-10">
                            <img src="./assets/dashboard.jpg" className="w-12/12" alt="" />
                        </div> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Custom AI-Enhanced Software",
            value: "services",
            content: (
                <div className="w-full overflow-hidden relative h-200 rounded-2xl p-1 text-xl md:text-4xl font-bold text-white border border-purple-400  lg:h-180">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full overflow-scroll relative h-full rounded-2xl text-xl font-bold text-white backdrop-blur-lg bg-gray-900 py-5 px-4 ">
                        <div className="h-auto lg:h-full flex flex-col items-start justify-between w-full">
                            <GlowingStarsTitle className="mb-8">Where <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                {" "}Imagination{" "}
                            </p> Ends, Our <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                    {" "}Engineering{" "}
                                </p> Begins.</GlowingStarsTitle>
                            <div className="w-full flex justify-between items-center">
                                <GlowingStarsDescription className="w-full mb-8">
                                    In a world where technology defines competitive edge, your ideas deserve more than off-the-shelf solutions — they deserve limitless creation. Our Custom AI-Enhanced Software service is not just development, it’s digital craftsmanship powered by intelligence and precision.
                                    <br />
                                    <br />

                                    From lightweight web pages that load at lightning speed, to enterprise-scale ecosystems that empower thousands of users, from autonomous AI models that learn and adapt, to advanced cybersecurity research tools including controlled malware and virus simulators for red-teaming — our engineers build with no boundaries. Every project is approached as a living, evolving system designed to scale and transform with your vision.

                                    <br />
                                    <br />

                                    ✨ Imagine software that:
                                    <br />

                                    ✅ Automates and optimizes workflows, turning hours of work into seconds
                                    <br />

                                    ✅ Seamlessly integrates AI into your everyday operations and decision-making
                                    <br />

                                    ✅ Evolves continuously with predictive intelligence — never becoming obsolete
                                    <br />

                                    ✅ Translates even the boldest, most futuristic ideas into working reality
                                    <br />

                                    ✅ Bridges creativity and engineering to deliver experiences that feel alive

                                    <br />
                                    <br />

                                    🔮 This isn’t just development — it’s creation without limits. By fusing cutting-edge AI with deep engineering expertise, we ensure that every build is smarter, faster, and more adaptive than traditional solutions.
                                </GlowingStarsDescription>
                            </div>
                            <button className="font-normal w-30 cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                                Explore
                            </button>
                        </div>
                        {/* <div className="w-full lg:w-6/12 flex items-center justify-center rounded-2xl overflow-visible lg:overflow-hidden mt-10">
                            <img src="./assets/software.png" className="w-12/12" alt="" />
                        </div> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Strategic Tech & Security Consultation",
            value: "playground",
            content: (
                <div className="w-full overflow-hidden relative h-200 rounded-2xl p-1 text-xl md:text-4xl font-bold text-white border border-purple-400  lg:h-180">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full overflow-scroll relative h-full rounded-2xl text-xl font-bold text-white backdrop-blur-lg bg-gray-900 py-5 px-4 ">
                        <div className="h-auto lg:h-full flex flex-col items-start justify-between w-full">
                            <GlowingStarsTitle className="mb-8">Your <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Vision,{" "}
                            </p> Our <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                    Guidance{" "}
                                </p> — Limitless, Precise, and <p style={{
                                    color: "#2b5cfc",
                                    display: "inline"
                                }}>
                                    Free.{" "}
                                </p></GlowingStarsTitle>
                            <div className="w-full flex justify-between items-center">
                                <GlowingStarsDescription className="w-full mb-8">
                                    In a digital era where every decision shapes resilience and growth, the right strategy is more valuable than any tool. Our Strategic Tech & Security Consultation service gives you unrestricted access to expert minds — without the barrier of cost.
                                    <br />
                                    <br />
                                    Whether you’re navigating the complexities of cyber defense, planning the architecture of a next-generation enterprise platform, exploring the use of AI in business, or simply validating your ideas against industry standards, we provide tailored insights that are clear, actionable, and forward-looking.

                                    <br />
                                    <br />

                                    ⚡ Imagine having access to:
                                    <br />

                                    ✅ Elite-level cybersecurity and technology experts advising you without hidden fees
                                    <br />

                                    ✅ Clarity in chaos — making sense of complex technical landscapes
                                    <br />

                                    ✅ Custom roadmaps for scaling your business securely and intelligently
                                    <br />

                                    ✅ A sparring partner for innovation — refining even your wildest ideas into achievable strategies
                                    <br />

                                    ✅ Unbiased, vendor-agnostic advice focused only on your success

                                    <br />
                                    <br />

                                    🧭 Consultation isn’t a transaction — it’s partnership. We stand beside you as strategists, innovators, and defenders, ensuring every choice you make is fortified by knowledge and foresight.
                                </GlowingStarsDescription>
                            </div>
                            <button className="font-normal w-30 cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                                Explore
                            </button>
                        </div>
                        {/* <div className="w-full lg:w-6/12 flex items-center justify-center rounded-2xl overflow-visible lg:overflow-hidden mt-10">
                            <img src="./assets/consultation.png" className="w-12/12" alt="" />

                        </div> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Enterprise Bug Hunting",
            value: "content",
            content: (
                <div className="w-full overflow-hidden relative h-200 rounded-2xl p-1 text-xl md:text-4xl font-bold text-white border border-purple-400  lg:h-180">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full overflow-scroll relative h-full rounded-2xl text-xl font-bold text-white backdrop-blur-lg bg-gray-900 py-5 px-4 ">
                        <div className="h-auto lg:h-full flex flex-col items-start justify-between w-full">
                            <GlowingStarsTitle className="mb-8">Think Like The <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Enemy.{" "}
                            </p> Defend Like A <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                    Warrior.{" "}
                                </p></GlowingStarsTitle>
                            <div className="w-full flex justify-between items-center mb-8">
                                <GlowingStarsDescription className="w-full mb-8">
                                    Cyber defense isn’t enough when adversaries are relentless. To be truly secure, you must become the attacker before they do. Our Offensive Security & Red-Teaming service goes beyond traditional testing — it’s a full-scale simulation of real-world threats, designed to expose cracks in your defenses before attackers exploit them.
                                    <br />
                                    <br />

                                    We don’t just scan. We hunt.
                                    We don’t just test. We break.
                                    And then we show you how to build back stronger.

                                    <br />
                                    <br />

                                    💀 With this service, you gain:
                                    <br />

                                    ✅ Advanced penetration testing across networks, applications, and cloud infrastructure
                                    <br />

                                    ✅ Red-team operations that mirror state-sponsored, zero-day-level attacks
                                    <br />

                                    ✅ Physical & social engineering assessments to test the human layer of your defense
                                    <br />

                                    ✅ Detailed exploit chains showing exactly how attackers could move through your systems
                                    <br />

                                    ✅ Actionable, prioritized remediation plans to close every gap before it’s too late
                                    <br />


                                    <br />

                                    ⚔️ Our approach is adversarial by design, but constructive in purpose. Every engagement is executed by elite cybersecurity operators who specialize in thinking like attackers but acting as your defenders.
                                </GlowingStarsDescription>
                            </div>
                            <button className="font-normal w-30 cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                                Explore
                            </button>
                        </div>
                        {/* <div className="w-full lg:w-6/12 flex items-center justify-center rounded-2xl overflow-visible lg:overflow-hidden mt-10">
                            <img src="./assets/pentesting.png" className="w-12/12" alt="" />

                        </div> */}
                    </div>
                </div>
            ),
        },
        {
            title: "Secure Data Brokerage",
            value: "random",
            content: (
                <div className="w-full overflow-hidden relative h-200 rounded-2xl p-1 text-xl md:text-4xl font-bold text-white border border-purple-400  lg:h-180">
                    <div className="flex flex-col lg:flex-row items-center justify-between w-full overflow-scroll relative h-full rounded-2xl text-xl font-bold text-white backdrop-blur-lg bg-gray-900 py-5 px-4 ">
                        <div className="h-auto lg:h-full flex flex-col items-start justify-between w-full">
                            <GlowingStarsTitle className="mb-8">Your Data Is <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Currency.{" "}
                            </p> We Make It <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                    Invincible.{" "}
                                </p></GlowingStarsTitle>
                            <div className="w-full flex justify-between items-center">
                                <GlowingStarsDescription className="w-full mb-8">
                                    In today’s economy, data isn’t just information — it’s power. But power without protection is vulnerability. Our Secure Data Brokerage service ensures your most sensitive assets are exchanged, transferred, and stored with absolute confidentiality, integrity, and control.
                                    <br />
                                    <br />

                                    We don’t just protect your data — we fortify it into an unbreakable asset.
                                    We don’t just move information — we move trust across every transaction.

                                    <br />

                                    <br />
                                    💠 With this service, you gain:
                                    ✅ End-to-end encrypted data exchange for individuals, enterprises, and government use
                                    <br />

                                    ✅ Zero-Trust enforcement on every transfer, ensuring only the right entities gain access
                                    <br />

                                    ✅ Blockchain-backed audit trails for unalterable proof of every transaction
                                    <br />

                                    ✅ AI-driven anomaly detection to prevent tampering or unauthorized access in real time
                                    <br />

                                    ✅ Granular access control policies that let you define exactly who sees what
                                    <br />

                                    <br />

                                    🔐 Whether it’s intellectual property, classified government intelligence, or corporate trade secrets — our system ensures your data remains untouchable, untraceable, and uncompromised.
                                    <br />
                                    <br />

                                    This is not just secure storage.
                                    <br />

                                    This is data sovereignty as a service — power, privacy, and protection engineered at scale.
                                </GlowingStarsDescription>
                            </div>
                            <button className="font-normal w-30 cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                                Explore
                            </button>
                        </div>
                        {/* <div className="w-full lg:w-6/12 flex items-center justify-center rounded-2xl overflow-visible lg:overflow-hidden mt-10">
                            <img src="./assets/data.png" className="w-12/12" alt="" />

                        </div> */}
                    </div>
                </div>
            ),
        },
    ];
    const links = [
        {
            title: "Start With MongoDB",
            icon: (
                <IconBrandMongodb className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Start With SalesForce",
            icon: (
                <IconCircles className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With Crowdstrike",
            icon: (
                <IconCloudBolt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With WordPress",
            icon: (
                <IconBrandWordpress className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With GCP",
            icon: (
                <IconBrandGoogleFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Start With Windows",
            icon: (
                <IconBrandWindowsFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With Linux",
            icon: (
                <IconBrandUbuntu className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With Android",
            icon: (
                <IconBrandAndroid className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With AWS",
            icon: (
                <IconBrandAws className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With Azure",
            icon: (
                <IconBrandAzure className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
        {
            title: "Start With Servers",
            icon: (
                <IconServer className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },
    ];
    const placeholders = [
        "What's the first rule of Fight Club?",
        "Who is Tyler Durden?",
        "Where is Andrew Laeddis Hiding?",
        "Write a Javascript method to reverse a string",
        "How to assemble your own PC?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="w-full mt-30 lg:mt-45">
            <div className="relative flex flex-col items-center justify-center mt-15 px-2 lg:px-0">
                <div className=" flex flex-col items-start lg:items-center justify-center w-full pt-10">
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0,
                        }}>

                        <GlowingButton
                            as="button"
                            className="text-sm lg:text-xl rounded-lg bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                        >
                            <span>Securing the World’s Most Critical Assets</span>
                        </GlowingButton>
                    </motion.div>
                    <div className="flex flex-col lg:flex-row items-start justify-center">
                        <h1
                            className="mt-8 mb-2 relative z-10 text-center text-5xl font-bold text-slate-700 md:text-7xl dark:text-slate-300 lg:text-8xl"
                        >
                            {`Holistic ${' '}`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="mt-0 lg:mt-8 mb-2 relative z-10 text-center text-5xl font-bold md:text-7xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text lg:text-8xl font-orbitron"
                            style={{
                                color: "#2b5cfc",
                            }}
                        >
                            {`Cyber${' '} Protection`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </div>
                    <h1
                        className="mb-8 relative z-10 text-left text-4xl font-bold text-slate-700 md:text-3xl lg:text-8xl dark:text-slate-300 text-neutral-400 navbar-responsive">
                        {`in${' '} a${' '} Single${' '} Console`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="ml-1 w-full lg:w-8/12 relative z-10 py-4 text-left lg:text-center text-lg lg:text-2xl text-neutral-500">
                        Bespoke <b>cyber defense</b> for <b>governments, global enterprises, and innovators</b> operating in hostile digital environments. From <b>custom-built secure systems</ b> to <b>AI modules</b> that integrate seamlessly into existing networks, our solutions <b>monitor, predict, and neutralize threats</b> in real time.
                        <br />
                        <b>We don’t just secure systems — We secure legacies.</b>
                    </motion.p>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1,
                        }}
                        className="relative z-10 mt-10 flex flex-wrap items-center justify-start gap-4 text-neutral-500">
                        <button
                            className="texl-lg lg:text-xl cursor-pointer w-full lg:w-80 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                            Secure Your Infrastructure →
                        </button>
                        <button
                            className="texl-lg lg:text-xl cursor-pointer w-full lg:w-80 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
                            Explore Our Capabilities
                        </button>
                    </motion.div>
                </div>
                <div style={{
                    zIndex: 1,
                }} className="w-full mt-25 lg:px-7">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 10,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 1.2,
                        }}
                        className="relative rounded-lg flex items-center justify-center"
                    >
                        <div className="border border-purple-400 w-full rounded-lg ring-1 ring-neutral-700/10 overflow-hidden">
                            {/* <img src="./assets/dashboard.jpg" alt="" /> */}
                            <video
                                src="/assets/dashboard-video.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className="my-50 w-full flex items-center justify-center">
                <div className="relative w-10/12">
                    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                    <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                            </svg>
                        </div>

                        <h1 className="relative z-50 mb-5 text-xl lg:text-3xl font-bold text-white text-neutral-400">
                            One <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Intelligence.{" "}
                            </p> Infinite <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Integrations.{" "}
                            </p>
                        </h1>

                        <p className="relative z-50 mb-6 font-normal text-slate-500 text-lg lg:text-2xl">
                            From legacy systems to cutting-edge stacks, our technology unifies and enhances security across your entire ecosystem.
                        </p>

                        <FloatingDock
                            items={links}
                            desktopClassName="navbar-responsive"
                            mobileClassName="navbar-unresponsive"
                        />

                        {/* Meaty part - Meteor effect */}
                        <MeteorCards number={20} />
                    </div>
                </div>
            </div>
            <div className="w-full px-2 lg:px-7">
                <div className="flex flex-wrap">
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                        {`Pioneer${' '} in`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="ml-0 lg:ml-2 mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Security,`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                </div>
                <div className="flex flex-wrap">
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Intelligence${" "}`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                        {"&"
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="ml-0 lg:ml-2 mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Engineering`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                </div>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="ml-0 lg:ml-1 w-full lg:w-10/12 relative z-10 py-4 text-left text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400">
                    Empowering enterprises with AI-driven cybersecurity, precision-engineered software, and expert insight — safeguarding your digital future while accelerating innovation.
                </motion.p>
                <Tabs tabs={tabs} />
            </div>
            <div className="w-full px-2 lg:px-7 mt-50">
                <div className="flex">
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400 flex items-end lg:block" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Intelligent${" "} `
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                        {`Defence`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>

                </div>
                <div className="flex flex-wrap">

                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Mesh${" "}`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                        {`For ${" "} Modern`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                    <h1
                        className="ml-0 lg:ml-2 mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                            color: "#2b5cfc",
                        }}>
                        {`Enterprises`
                            .split(" ")
                            .map((word, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                        ease: "easeInOut",
                                    }}
                                    className="mr-2 inline-block">
                                    {word}
                                </motion.span>
                            ))}
                    </h1>
                </div>
                <motion.p
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        duration: 0.3,
                        delay: 0.8,
                    }}
                    className="ml-0 lg:ml-1 w-full lg:w-10/12 relative z-10 py-4 text-left text-xl text-neutral-600 dark:text-neutral-400">
                    Comprehensive Cyber Defense that Monitors, Detects, and Neutralizes Risks Across Systems, Networks, and Applications Before They Can Escalate. Designed for Enterprises That Demand Zero Weak Points.
                </motion.p>
                {/* <div className="w-full flex items-center justify-between mt-15">
                    <PinContainer
                        title="Endpoint Security"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <ul>
                                <li>Continuous Monitoring</li>
                                <li>Automated Threat Detection</li>
                                <li>Incident Response</li>
                            </ul>
                        </div>
                    </PinContainer>
                    <PinContainer
                        title="/ui.aceternity.com"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Aceternity UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                    <PinContainer
                        title="/ui.aceternity.com"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Aceternity UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                    <PinContainer
                        title="/ui.aceternity.com"
                        href="https://twitter.com/mannupaaji"
                    >
                        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                                Aceternity UI
                            </h3>
                            <div className="text-base !m-0 !p-0 font-normal">
                                <span className="text-slate-500 ">
                                    Customizable Tailwind CSS and Framer Motion Components.
                                </span>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
                        </div>
                    </PinContainer>
                </div> */}
                <BentoGridDemo />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-auto w-full px-2 lg:px-6 mt-22">
                <WobbleCards
                    containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[650px] lg:min-h-[500px]"
                    className=""
                >
                    <div className="max-w-md">
                        <h2 className="text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                            Active XDR protection
                            from modern threats
                        </h2>
                        <p className="mt-4 text-left text-lg text-neutral-400">
                            Defend against today’s most advanced cyberattacks with AI-driven Extended Detection and Response (XDR). Our platform continuously identifies, analyzes, and neutralizes threats across endpoints, networks, and cloud workloads — ensuring rapid containment before damage is done.
                        </p>
                    </div>
                    <img
                        src="./assets/dashboard.jpg"
                        width={525}
                        height={550}
                        alt="linear demo image"
                        className="absolute -right-1 lg:-right-[1%] grayscale filter -bottom-2 object-contain rounded-2xl -z-10"
                    />
                </WobbleCards>
                <WobbleCards containerClassName="col-span-1 min-h-[300px]">
                    <h2 className="max-w-80  text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                        AI-Powered Real-Time Monitoring
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-lg text-neutral-400">
                        Stay ahead with continuous visibility into every layer of your IT environment. From endpoint activity to cloud traffic, our real-time monitoring and live dashboards provide instant alerts, enabling proactive defense before incidents escalate.
                    </p>
                </WobbleCards>
                <WobbleCards containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[650px] lg:min-h-[500px] xl:min-h-[500px]">
                    <div className="max-w-sm">
                        <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-2xl lg:text-4xl font-semibold tracking-[-0.015em] text-white">
                            A comprehensive
                            SIEM solution
                        </h2>
                        <p className="mt-4 max-w-[26rem] text-left  text-lg text-neutral-400">
                            Gain complete control over your security posture with an intelligent Security Information and Event Management (SIEM) solution. By correlating logs, detecting anomalies, and automating responses, we empower your team to make informed decisions faster.
                        </p>
                    </div>
                    <img
                        src="./assets/dashboard.jpg"
                        width={525}
                        height={525}
                        alt="linear demo image"
                        className="absolute -right-1 md:-right-[1%] lg:-right-[1%] -bottom-2 object-contain rounded-2xl"
                    />
                </WobbleCards>
            </div>
            <div className="my-50 w-full flex items-center justify-center">
                <div className="relative w-10/12">
                    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                    <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                            </svg>
                        </div>

                        <h1 className="relative z-50 mb-5 text-xl lg:text-3xl font-bold text-white text-neutral-400">
                            Explore the <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Potential{" "}
                            </p> of <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Yggdrasil Security.{" "}
                            </p>
                        </h1>

                        <p className="relative z-50 mb-6 font-normal text-slate-500 text-lg lg:text-2xl">
                            The Yggdrasil Cloud service offers managed, ready-to-use, and highly scalable cloud environments for security monitoring and endpoint protection.
                        </p>

                        <button className="cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                            Start Your Free Trial
                        </button>

                        <MeteorCards number={20} />
                    </div>
                </div>
            </div>
            <div className="w-full px-2 lg:px-7">
                <div className="mx-auto text-left mb-13">
                    <div className="flex flex-wrap">
                        <h1
                            className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                            {`Remote`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="ml-0 lg:ml-2 mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                                color: "#2b5cfc",
                            }}>
                            {`Connectivity,`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </div>
                    <div className="flex flex-wrap navbar-responsive">
                        <h1
                            className="mb-2 relative z-10 text-left text-2xl font-bold text-slate-700 md:text-3xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                                color: "#2b5cfc",
                            }}>
                            {`Powered${" "} `
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="mb-2 relative z-10 text-left text-2xl font-bold text-slate-700 md:text-3xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                            {"by"
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="mb-2 relative z-10 text-left text-2xl font-bold text-slate-700 md:text-3xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                                color: "#2b5cfc",
                            }}>
                            {` ${" "}Zero ${' '}Trust`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </div>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="ml-0 lg:ml-1 w-full lg:w-10/12 relative z-10 py-4 text-left text-xl text-neutral-600 dark:text-neutral-400">
                        Enable your workforce to connect from anywhere without exposing your infrastructure. Our platform enforces continuous verification, encrypted tunnels, and AI-driven risk assessments — ensuring every login, device, and session is trusted, monitored, and protected.
                    </motion.p>
                </div>
                <WorldMap
                    dots={[
                        {
                            start: {
                                lat: 64.2008,
                                lng: -149.4937,
                            }, // Alaska (Fairbanks)
                            end: {
                                lat: 34.0522,
                                lng: -118.2437,
                            }, // Los Angeles
                        },
                        {
                            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
                            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                        },
                        {
                            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
                            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
                        },
                        {
                            start: { lat: 51.5074, lng: -0.1278 }, // London
                            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
                        },
                        {
                            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
                            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
                        },
                    ]}
                />
            </div>
            <div className="my-50 w-full flex items-center justify-center">
                <div className="relative w-10/12">
                    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                    <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                            </svg>
                        </div>

                        <h1 className="relative z-50 mb-5 text-xl lg:text-3xl font-bold text-white text-neutral-400">
                            <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Join{" "}
                            </p> our <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Open Source Community.{" "}
                            </p>
                        </h1>

                        <p className="relative z-50 mb-6 font-normal text-slate-500 text-lg lg:text-2xl">
                            Connect with industry experts and access free support tailored to your needs.
                            Gain consulting insights to strengthen your digital systems and strategies.
                            Be part of a trusted network shaping the future of secure technology.
                        </p>

                        <button className="cursor-pointer rounded-lg border border-gray-500 px-4 py-1 text-gray-300 text-xl">
                            Join Now
                        </button>

                        <MeteorCards number={20} />
                    </div>
                </div>
            </div>
            <div className="w-full px-2 lg:px-7">
                <div className="mx-auto text-left mb-13">
                    <div className="flex flex-wrap">
                        <h1
                            className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                                color: "#2b5cfc",
                            }}>
                            {`Frequently${" "} `
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400">
                            {"asked"
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                        <h1
                            className="ml-0 lg:ml-2 mb-2 relative z-10 text-left text-5xl font-bold text-slate-700 md:text-6xl lg:text-7xl dark:text-slate-300 text-neutral-400" style={{
                                color: "#2b5cfc",
                            }}>
                            {`Questions`
                                .split(" ")
                                .map((word, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                                        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1,
                                            ease: "easeInOut",
                                        }}
                                        className="mr-2 inline-block">
                                        {word}
                                    </motion.span>
                                ))}
                        </h1>
                    </div>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.8,
                        }}
                        className="ml-0 lg:ml-1 w-full lg:w-10/12 relative z-10 py-4 text-left text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400">
                        Your most important questions, answered. Learn how Yggdrasil empowers businesses with next-generation cybersecurity, AI-driven solutions, and strategic consulting.
                    </motion.p>
                </div>
                <ExpandableCard />
            </div>
            <div className="my-50 w-full flex items-center justify-center">
                <div className="relative w-10/12">
                    <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                    <div className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                        <div className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="h-2 w-2 text-gray-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                />
                            </svg>
                        </div>

                        <h1 className="relative z-50 mb-5 text-xl lg:text-3xl font-bold text-white text-neutral-400">
                            Stay
                            <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>

                                {" "}Updated{" "}
                            </p> with <p style={{
                                color: "#2b5cfc",
                                display: "inline"
                            }}>
                                Cyber Insights.{" "}
                            </p>
                        </h1>

                        <p className="relative z-50 mb-6 font-normal text-slate-500 text-lg     lg:text-2xl">
                            Subscribe to our newsletter and get the latest app updates,
                            exclusive cybersecurity insights, and industry news delivered directly to your inbox.
                        </p>

                        <PlaceholdersAndVanishInput
                            placeholders={placeholders}
                            onChange={handleChange}
                            onSubmit={onSubmit}
                        />

                        <MeteorCards number={20} />
                    </div>
                </div>
            </div>

        </div>
    );
}

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4 text-blue-500 mt-1 shrink-0"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
                d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
                fill="currentColor"
                strokeWidth="0"
            />
        </svg>
    );
};
