"use client";
import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";
import {
  BookOpenCheck,
  Code2,
  Hammer,
  Sparkles,
  LayoutDashboard,
  Blocks,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from "fumadocs-ui/layouts/home/navbar";
import { RiTwitterXLine } from "react-icons/ri";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { SOCIALS } from "@/constants";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          type: "custom",
          on: "nav",
          children: (
            <NavbarMenu>
              <NavbarMenuTrigger>Documentation</NavbarMenuTrigger>
              <NavbarMenuContent>
                <NavbarMenuLink href="/docs/getting-started">
                  <BookOpenCheck className="mr-3 h-5 w-5 text-blue-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">Getting Started</span>
                    <span className="text-sm text-muted-foreground">
                      Introduction, setup, and first steps
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/components">
                  <Blocks className="mr-3 h-5 w-5 text-purple-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">UI Components</span>
                    <span className="text-sm text-muted-foreground">
                      Beautifully designed building blocks
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/customization">
                  <Sparkles className="mr-3 h-5 w-5 text-pink-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">Theming & Customization</span>
                    <span className="text-sm text-muted-foreground">
                      Tailor components to your brand and vision
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/api">
                  <Code2 className="mr-3 h-5 w-5 text-green-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">API Reference</span>
                    <span className="text-sm text-muted-foreground">
                      All the props, methods, and events
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/tutorials">
                  <Hammer className="mr-3 h-5 w-5 text-orange-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">Hands-on Tutorials</span>
                    <span className="text-sm text-muted-foreground">
                      Learn by building real features
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/guides">
                  <FileText className="mr-3 h-5 w-5 text-yellow-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">Practical Guides</span>
                    <span className="text-sm text-muted-foreground">
                      Solve common use cases with clarity
                    </span>
                  </div>
                </NavbarMenuLink>

                <NavbarMenuLink href="/docs/dashboard">
                  <LayoutDashboard className="mr-3 h-5 w-5 text-teal-500" />
                  <div className="flex flex-col">
                    <span className="font-medium">Dashboard Integration</span>
                    <span className="text-sm text-muted-foreground">
                      Build dashboards and admin panels
                    </span>
                  </div>
                </NavbarMenuLink>
              </NavbarMenuContent>
            </NavbarMenu>
          ),
        },

        // --- External Links (Inline) ---
        {
          type: "custom",

          children: (
            <div className="flex items-center gap-3 ml-4">
              <motion.a
                href={SOCIALS.Github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex items-center justify-center p-2 rounded-md hover:bg-muted/30 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4 text-white group-hover:text-gray-300" />
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href={SOCIALS.Discord}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.05,
                }}
                className="group relative flex items-center justify-center p-2 rounded-md hover:bg-muted/30 transition-colors"
                aria-label="Discord"
              >
                <FaDiscord className="h-4 w-4 text-white group-hover:text-indigo-300" />
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all">
                  Discord
                </span>
              </motion.a>

              <motion.a
                href={SOCIALS.X}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: 0.1,
                }}
                className="group relative flex items-center justify-center p-2 rounded-md hover:bg-muted/30 transition-colors"
                aria-label="Twitter"
              >
                <RiTwitterXLine className="h-4 w-4 text-white group-hover:text-sky-300" />
                <span className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-all">
                  Twitter
                </span>
              </motion.a>
            </div>
          ),
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
