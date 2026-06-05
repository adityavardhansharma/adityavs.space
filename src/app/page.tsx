import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { educationItems } from "@/lib/education-items"
import { projects } from "@/lib/project-items"
import { workItems } from "@/lib/work-items"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

const projectItems: Item[] = projects.slice(0, 3).map((project) => ({
  title: project.title,
  role: project.platform,
  description: project.description,
}))

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
      {projectItems.length > 0 && (
        <SectionList
          title="projects"
          items={projectItems}
          viewAllHref="/projects"
          viewAllText="all projects"
        />
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
