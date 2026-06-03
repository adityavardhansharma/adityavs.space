import { Header } from "@/components/header"
import { Item, SectionList } from "@/components/section-list"
import { BlogSection } from "@/components/blog-section"
import { LinksSection } from "@/components/links-section"
import { educationItems } from "@/lib/education-items"
import { workItems } from "@/lib/work-items"

const featuredWorkItems: Item[] = workItems.slice(0, 3)

const projectItems = [
  {
    title: "create-t3-app",
    role: "creator and maintainer",
    description:
      "open-source project for initializing full-stack next.js apps. 24k+ stars, 200+ contributors",
    href: "https://create.t3.gg",
  },
  {
    title: "mini-git",
    role: "creator",
    description: "simplified version of git from scratch",
    href: "https://github.com/nexxeln/mini-git",
  },
]

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
      <SectionList
        title="projects"
        items={projectItems}
        viewAllHref="/projects"
        viewAllText="all projects"
      />
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
