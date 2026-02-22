import Link from "next/link";
import { usePathname } from "next/navigation";

export const Logo = ({ onClick }: { onClick?: () => void }) => {
  const pathName = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link
      href="/"
      onClick={() => {
        if (pathName !== "/") {
          return;
        }

        scrollToTop();
        onClick?.();
      }}
    >
      <img src="/images/set2pass.webp" alt="Set2Pass Logo" className="w-44" />
    </Link>
  );
};
