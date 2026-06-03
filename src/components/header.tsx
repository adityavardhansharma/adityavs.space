import { ScrambleText } from "@/components/scramble-text"

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-5xl font-semibold tracking-tight text-white text-balance mb-4 animate-fade-in">
        <span className="inline-block">
          <ScrambleText text="Aditya Vardhan Sharma" />
        </span>
      </h1>
      <p className="text-gray-500 animate-fade-in">
        Student at DCU · Dublin, Ireland
      </p>
      <p className="text-pretty max-w-[52ch] animate-fade-in-up">
        I&apos;m a 22-year-old Master&apos;s student in Computer Science.
      </p>
      <p className="text-pretty max-w-[52ch] animate-fade-in-up">
        I love building things and solving problems. These days, I spend most
        of my time working with AI and AI agents. If I&apos;m not coding,
        I&apos;m probably watching movies, following sports, or reading about
        the latest technology.
      </p>
    </header>
  )
}
