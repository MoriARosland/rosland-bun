import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-end">
        <ModeToggle />
      </header>
      <main className="mx-auto max-w-2xl pt-8 text-foreground">
        <section>
          <h1 className="text-3xl font-semibold tracking-tight">Hi there, I&apos;m Mori</h1>
          <p className="mt-4">
            I&apos;m in my final year of studying Electronic System Design at NTNU, specializing in
            digital and embedded systems, and currently writing my thesis.
          </p>
          <p className="mt-4">
            I focus on hardware, and have made plenty of PCBs ranging from analog instrumentation to
            high-speed digital circuits and power electronics. Furthermore I&apos;ve developed
            digital circuits, accelerators on FPGA, and plenty of C/C++. Explore below experiences
            and projects.
          </p>
        </section>
      </main>
    </div>
  );
}
