import Link from "next/link"
import type { ComponentType } from "react"
import {
  Apple,
  Bot,
  Chrome,
  ExternalLink,
  Github,
  Globe,
  Monitor,
  Smartphone,
} from "lucide-react"

export type ProjectPlatform =
  | "Android"
  | "Chrome Extension"
  | "Desktop"
  | "iOS"
  | "Mac"
  | "ML"
  | "Website"

export type ProjectCardProps = {
  title: string
  description: string
  platform: string
  platforms: ProjectPlatform[]
  technologies: string[]
  githubHref: string
  websiteHref?: string
}

const platformIcons: Record<
  ProjectPlatform,
  ComponentType<{ className?: string }>
> = {
  Android: Smartphone,
  "Chrome Extension": Chrome,
  Desktop: Monitor,
  iOS: Smartphone,
  Mac: Apple,
  ML: Bot,
  Website: Globe,
}

export function ProjectCard({
  title,
  description,
  platform,
  platforms,
  technologies,
  githubHref,
  websiteHref,
}: ProjectCardProps) {
  return (
    <article className="group block rounded-lg p-4 -mx-4 hover:bg-neutral-900/50">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-white transition-colors group-hover:text-accent">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{platform}</p>
          <p className="mt-2 text-pretty text-gray-300">{description}</p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {platforms.map((item) => {
              const Icon = platformIcons[item]

              return (
                <span
                  key={item}
                  className="inline-flex items-center gap-1 rounded-full bg-neutral-800/70 px-2 py-0.5 text-xs text-gray-400"
                >
                  <Icon className="h-3 w-3" />
                  {item}
                </span>
              )
            })}
          </div>

          {technologies.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-neutral-800/40 px-2 py-0.5 text-xs text-gray-500"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex shrink-0 gap-2">
          <Link
            href={githubHref}
            target="_blank"
            aria-label={`${title} GitHub repository`}
            className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 text-gray-500 transition-colors hover:border-accent hover:text-accent"
          >
            <Github className="h-4 w-4" />
          </Link>
          {websiteHref && (
            <Link
              href={websiteHref}
              target="_blank"
              aria-label={`${title} website`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-800 text-gray-500 transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}
