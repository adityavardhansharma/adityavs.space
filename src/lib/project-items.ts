import type { ProjectCardProps } from "@/components/project-card"

export const projects: ProjectCardProps[] = [
  {
    title: "EchoFlow",
    description:
      "A polished Android AI chat client with streaming responses, reasoning traces, and rich markdown rendering.",
    platform: "Android app",
    platforms: ["Android"],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "OpenRouter",
      "Room",
      "DataStore",
      "Retrofit",
      "Moshi",
    ],
    githubHref: "https://github.com/adityavardhansharma/EchoFlow",
    websiteHref: "https://echoflow.adityavs.tech/",
  },
  {
    title: "MailMe",
    description:
      "A desktop email co-pilot that turns unread Gmail into summaries, ready-to-edit replies, and follow-up workflows.",
    platform: "Mac, Windows, and Linux app",
    platforms: ["Desktop", "Mac"],
    technologies: [
      "Electron",
      "React",
      "TypeScript",
      "Vite",
      "Convex",
      "Gmail API",
      "OpenRouter",
    ],
    githubHref: "https://github.com/adityavardhansharma/MailMe",
  },
  {
    title: "FeedDoc",
    description:
      "A Chrome extension for working with documents, PDFs, and packaged feedback workflows in the browser.",
    platform: "Chrome extension",
    platforms: ["Chrome Extension"],
    technologies: ["Astro", "JavaScript", "pdf-lib", "JSZip", "pdfjs-dist"],
    githubHref: "https://github.com/adityavardhansharma/FeedDoc",
    websiteHref: "https://feeddoc.adityavs.tech/",
  },
  {
    title: "Chef It Up",
    description:
      "An AI recipe and food assistant that combines generated cooking ideas with food and nutrition data.",
    platform: "Website",
    platforms: ["Website"],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Groq SDK",
      "Cerebras SDK",
      "OpenFDA API",
      "JavaScript",
    ],
    githubHref: "https://github.com/adityavardhansharma/CHEF-IT-UP",
    websiteHref: "https://chef.adityavs.tech/",
  },
  {
    title: "SwiftSnap",
    description:
      "A Mac app focused on quick capture workflows with a lightweight, polished user experience.",
    platform: "Mac app",
    platforms: ["Mac"],
    technologies: [],
    githubHref: "https://github.com/adityavardhansharma/SwiftSnap",
    websiteHref: "https://swiftsnap-nu.vercel.app/",
  },
  {
    title: "AVS Code",
    description:
      "An opinionated custom fork of T3 Code packaged as a cross-platform desktop coding app.",
    platform: "Mac, Windows, and Linux app",
    platforms: ["Desktop", "Mac"],
    technologies: [
      "TypeScript",
      "Vite",
      "MDX",
      "JavaScript",
      "Astro",
      "CSS",
      "Electron",
    ],
    githubHref: "https://github.com/adityavardhansharma/AVS-CODE",
  },
  {
    title: "Subtrakt",
    description:
      "A calendar-based subscription tracking app for managing recurring payments across mobile platforms.",
    platform: "iOS and Android app",
    platforms: ["iOS", "Android"],
    technologies: [
      "Expo",
      "React Native",
      "Metro Bundler",
      "AsyncStorage",
      "date-fns",
    ],
    githubHref: "https://github.com/adityavardhansharma/Sub-Trakt",
  },
  {
    title: "Etsy AI Image Recognition Challenge",
    description:
      "Trained a custom image classifier to detect AI-generated seller images, reaching 92% accuracy against Etsy's 68% baseline.",
    platform: "Machine learning project",
    platforms: ["ML"],
    technologies: ["Python", "Machine Learning", "Computer Vision"],
    githubHref:
      "https://github.com/adityavardhansharma/Etsy_AI_Image_Recoginition_Challenge",
  },
  {
    title: "Talent Trail",
    description:
      "A career-focused web app powered by AI and YouTube data for guided learning and role discovery.",
    platform: "Website",
    platforms: ["Website"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini API",
      "YouTube Data API",
      "Clerk",
    ],
    githubHref: "https://github.com/adityavardhansharma/Talent-Trail",
    websiteHref: "https://talenttrail.adityavs.tech/",
  },
  {
    title: "Multiple Disease Prediction",
    description:
      "Trained disease prediction models and wrapped them in a Streamlit interface for interactive health risk prediction.",
    platform: "Machine learning project",
    platforms: ["ML"],
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas"],
    githubHref:
      "https://github.com/adityavardhansharma/Multiple-Disease-Prediction",
  },
  {
    title: "Free Scribe",
    description:
      "A real-time transcription and translation web app with live recording, file upload, and 10+ language outputs.",
    platform: "Website",
    platforms: ["Website"],
    technologies: [
      "React",
      "Tailwind CSS",
      "Next.js",
      "Hugging Face Transformers",
    ],
    githubHref: "https://github.com/adityavardhansharma/freescribe",
  },
]
