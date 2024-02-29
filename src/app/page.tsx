import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-background bg-grid-[#27272A]/[.2] dark:bg-grid-[#F4F4F5]/[.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {/* Hero text generate effect */}
      <MaxWidthWrapper className="absolute">
        <div className="grid h-[50dvh] place-items-center mt-5 lg:mt-0">
          <div className="space-y-5">
            <h5 className="text-xl">Hi, 👋</h5>
            <h3 className="text-6xl leading-snug">My Name is Niloy</h3>
            <h3 className="text-2xl text-muted-foreground">I build pixel perfect web interactions</h3>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
