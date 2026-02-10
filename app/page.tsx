import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-6">
      <header className="flex justify-end">
        <ThemeToggle />
      </header>
      <main className="mx-auto max-w-2xl pt-8 text-foreground">
        <h1 className="text-3xl font-semibold tracking-tight">Hello there</h1>
        <p className="mt-2 text-muted-foreground">Writing my thesis</p>
      </main>
    </div>
  );
}
