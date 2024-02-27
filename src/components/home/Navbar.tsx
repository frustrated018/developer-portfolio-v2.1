import Link from "next/link";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="bg-background">
      <MaxWidthWrapper>
        <div className="border-b border-secondary">
          <div className="flex h-16 items-center">
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
            <div className="z-50 hidden lg:ml-8 lg:block lg:self-stretch">
              {/* <NavItems /> */}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  );
};

export default Navbar;
