"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

const NavItem: React.FC<{ href: string; title: string }> = ({
  href,
  title,
}) => {
  let isActive = usePathname() === href;
  return (
    <NextLink
      href={href}
      prefetch={false}
      className={`font-medium px-5 py-2.5 rounded-full relative transition-all ${
        isActive && "bg-zinc-900 "
      }`}
    >
      {title}
      {isActive && (
        <span className="absolute bottom-0 h-[6px] m-auto w-[50%] inset-x-3 bg-gradient-to-r from-blue-100/0 via-blue-500/40 to-blue-500/0" />
      )}
    </NextLink>
  );
};

const Navigation: React.FC = () => {
  return (
    <div className="fixed inset-x-1 text-[#979797] z-50 flex m-auto justify-center bottom-4 md:bottom-4">
      <nav className="scale-[0.95] text-sm bg-zinc-700  bg-opacity-[80%] backdrop-blur-sm border border-slate-700/20 p-1 font-mono  rounded-full flex ">
        <NavItem href="/" title="Home" />
        <NavItem href="/projects" title="Projects" />
        <NavItem href="/writing" title="Writing" />
        <NavItem href="/tools" title="Tools" />
      </nav>
    </div>

    
  );
};

export default Navigation;
