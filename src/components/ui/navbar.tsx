"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import { Link } from "react-scroll";
import { animateScroll } from "react-scroll";

type navItem = {
  name: string;
  link: string;
  icon?: JSX.Element;
};

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress, scrollY } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      if (scrollY.get() > window.innerHeight - 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed inset-x-0 top-10 z-[5000] mx-auto flex max-w-fit items-center justify-center space-x-4 rounded-full border border-transparent bg-white py-2 pl-8 pr-2  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-slate-950",
          className,
        )}
      >
        {navItems.map((navItem: navItem, idx: number) => (
          <Link
            to={navItem.name.toLowerCase()}
            smooth={true}
            duration={750}
            spy={true}
            hashSpy={true}
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
          </Link>
        ))}
        <button
          onClick={() =>
            animateScroll.scrollToTop({
              duration: 750,
              smooth: true,
            })
          }
          className="relative rounded-full border border-neutral-200 px-4 py-2 text-sm font-medium text-black dark:border-white/[0.2] dark:text-white"
        >
          <span>Back to Top</span>
          <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
