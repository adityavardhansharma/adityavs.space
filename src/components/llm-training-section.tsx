import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ProjectCard } from "@/components/project-card"
import { llmTrainingItems } from "@/lib/project-items"

export function LlmTrainingSection() {
  return (
    <section className="mb-12 animate-fade-in-up pt-10 border-t border-neutral-800">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center text-white">
          <span className="text-accent accent-glow mr-2">*</span> LLM Training
        </h2>
        <Link
          href="https://huggingface.co/adityavardhansharma"
          target="_blank"
          className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
        >
          hugging face{" "}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
      <p className="text-gray-400 mb-4 leading-relaxed">
        small language models i fine-tuned to power EchoFlow on-device.
      </p>
      <div className="space-y-2">
        {llmTrainingItems.map((item) => (
          <ProjectCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  )
}
