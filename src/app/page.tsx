export default function Home() {
  return (
    <div className="relative flex h-[50rem] w-full items-center justify-center bg-background bg-grid-[#27272A]/[.2] dark:bg-grid-[#F4F4F5]/[.2]">
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="relative z-20 bg-clip-text py-8 text-4xl font-bold sm:text-7xl">
        Kode Mono Font
      </p>
    </div>
  );
}
