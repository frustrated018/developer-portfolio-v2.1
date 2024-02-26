export default function Home() {
  return (
    <div className="h-[50rem] w-full bg-background bg-grid-[#27272A]/[.2] dark:bg-grid-[#F4F4F5]/[.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text py-8">
        Grid Background
      </p>
    </div>
  );
}
