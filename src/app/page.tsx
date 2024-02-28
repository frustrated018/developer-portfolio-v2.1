import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { TextGenerateEffect } from "@/components/TextGenerateEffect";

export default function Home() {
  return (
    <div className="relative h-screen w-full bg-background bg-grid-[#27272A]/[.2] dark:bg-grid-[#F4F4F5]/[.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      {/* Hero text generate effect */}
      <MaxWidthWrapper>
        <div className="absolute flex flex-col gap-7">
          <TextGenerateEffect words="Hi, my name is niloy... ANd fucko you" />
          <TextGenerateEffect
            stag={0.5}
            duration={3}
            words="This is the stagger and duration time delay for the second time..."
          />
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
