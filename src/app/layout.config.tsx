import { ShimmerText } from "@/components/shimmer-text";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { IoBookSharp } from "react-icons/io5";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <div className="w-10 h-10 border-2 border-white/20 rounded-lg flex items-center justify-center">
          <IoBookSharp color="white" size={15} />
        </div>
        {/* <span>Documentation Kit</span> */}
        <ShimmerText
          text="Documentation"
          colors={["#fff", "#f0f0f0", "#e0e0e0", "#d0d0d0", "#c0c0c0"]}
          baseColor="#000"
          speed={0.8}
        />
      </>
    ),
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
};
