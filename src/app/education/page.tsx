import { ScrambleText } from "@/components/scramble-text"
import { SectionList } from "@/components/section-list"
import { educationItems } from "@/lib/education-items"
import { Metadata } from "next"

export default function EducationPage() {
  return (
    <main className="animate-fade-in-up">
      <h1 className="text-4xl font-bold mb-8 text-white">
        <span className="text-accent accent-glow mr-2">*</span>
        <ScrambleText text="education" />
      </h1>

      <p className="text-gray-400 mb-6 leading-relaxed">
        here&apos;s where i studied and the programs i completed.
      </p>

      <SectionList
        title="education"
        items={educationItems}
        showTitle={false}
        showSectionBorder={false}
      />
    </main>
  )
}

export const metadata: Metadata = {
  title: "Education",
  description: "Education history and academic programs.",
  openGraph: {
    images: [
      {
        url: "https://www.nexxel.dev/og/home?title=education",
      },
    ],
  },
}
