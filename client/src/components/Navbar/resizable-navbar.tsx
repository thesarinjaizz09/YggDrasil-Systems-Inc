"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState, ComponentPropsWithoutRef, ReactNode, ElementType } from "react";


interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}


type NavbarButtonProps<T extends ElementType> = {
    as?: T;
    href?: string;
    variant?: "default" | "ghost" | "outline";
    className?: string;
    children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className" | "href" | "variant">;

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
            className={cn("sticky inset-x-0 top-20 z-100 w-full flex items-center justify-center", !visible && "shadow-[0_6px_20px_rgba(43,173,253,0.4)]", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean }>,
                        { visible },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(6px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "60%" : "100%",
                y: visible ? -20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "flex relative z-[60] w-full flex-row items-center justify-between rounded-lg bg-transparent px-4 py-4 dark:bg-transparent mt-0",
                visible && "bg-white/80 backdrop-blur-md dark:bg-neutral-950/80 px-3 py-3 mt-0",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "z-50 inset-0 flex-1 flex-row items-center justify-center space-x-2 text-lg font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
                className,
            )}
        >
            <div className="backdrop-blur-sm bg-white/15 rounded-md py-[5px] glass">
                {items.map((item, idx) => (
                    <a
                        onMouseEnter={() => setHovered(idx)}
                        onClick={onItemClick}
                        className="relative px-2 py-1 text-neutral-600 dark:text-neutral-300 mx-2 "
                        key={`link-${idx}`}
                        href={item.link}
                    >
                        {hovered === idx && (
                            <motion.div
                                layoutId="hovered"
                                className="absolute inset-0 h-full w-full rounded-lg bg-slate-900"
                            />
                        )}
                        <span className="relative z-20">{item.name}</span>
                    </a>
                ))}
            </div>
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(6px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "4px",
                y: visible ? -32 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "rounded-lg relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-white/80 dark:bg-neutral-950/80 px-3 py-3 mt-0",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return isOpen ? (
        <IconX className="text-black dark:text-white" onClick={onClick} />
    ) : (
        <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
    );
};

export const NavbarLogo = () => {
    return (
        <a
            href="#"
            className="relative z-20 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
        >
            <img
                src="./assets/download.png"
                alt="logo"
                width={135}
                height={30}
            />
        </a>
    );
};

// export function NavbarButton<T extends ElementType = "button">({
//     as,
//     href,
//     variant = "default",
//     className,
//     children,
//     ...props
// }: NavbarButtonProps<T>) {
//     const Tag = (as || (href ? "a" : "button")) as ElementType;

//     const baseStyles =
//         "inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors";
//     const variantStyles: Record<string, string> = {
//         default: "bg-purple-600 text-white hover:bg-purple-700",
//         ghost: "bg-transparent text-purple-600 hover:bg-purple-100",
//         outline: "border border-purple-600 text-purple-600 hover:bg-purple-50",
//     };

//     return (
//         // @ts-expect-error – ignoring children typing issue
//         <Tag
//             {...(href ? { href } : {})}
//             className={cn(baseStyles, (variantStyles as any)[variant], className)}

//             {...(props as any)}
//         >
//             {children}
//         </Tag>

//     );
// }
