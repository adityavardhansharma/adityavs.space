import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { educationItems } from "@/lib/education-items"
import { workItems } from "@/lib/work-items"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

const projectItems: Item[] = []

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
