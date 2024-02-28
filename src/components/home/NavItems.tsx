import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

const items = [
  { href: "/#", title: "About" },
  { href: "/#", title: "Projects" },
  { href: "/#", title: "Contact" },
];

const NavItems = () => {
  return (
    <section className="flex items-center">
      <div>
        {items.map((item) => (
          <Link
            href={item.href}
            key={item.href}
            className={buttonVariants({ variant: "link" })}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <Button>Resume</Button>
    </section>
  );
};

export default NavItems;
