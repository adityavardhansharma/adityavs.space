import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { ProjectCard } from "@/components/project-card"
import { educationItems } from "@/lib/education-items"
import { projects } from "@/lib/project-items"
import { workItems } from "@/lib/work-items"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

const featuredProjects = projects.slice(0, 3)

export default function HomePage() {
  return (
    <>
      <Header />
      <SectionList
        title="work"
        items={featuredWorkItems}
        viewAllHref="/work"
        viewAllText="all work"
      />
      {featuredProjects.length > 0 && (
        <section className="mb-12 animate-fade-in-up pt-10 border-t border-neutral-800">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl font-semibold flex items-center text-white">
              <span className="text-accent accent-glow mr-2">*</span> projects
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
            >
              all projects{" "}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
          <div className="space-y-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      )}
      <SectionList
        title="education"
        items={educationItems}
        viewAllHref="/education"
        viewAllText="all education"
      />
      <BlogSection />
      <LinksSection />
    </>
  )
}
