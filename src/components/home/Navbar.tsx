import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <header className="bg-background">
      <MaxWidthWrapper>
        <div className="border-b border-secondary">
          <section className="flex h-16 items-center justify-between">
            {/* //TODO: Add mobile nav here */}
            <div className="ml-4 flex lg:ml-0">
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                  className: "text-2xl",
                })}
              >
                Niloy Das
              </Link>
            </div>
            <div className="">
              <NavItems />
            </div>
          </section>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
