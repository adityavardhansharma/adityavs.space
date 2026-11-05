import type { ProjectCardProps } from "@/components/project-card"

export const projects: ProjectCardProps[] = [
  {
    title: "EchoFlow",
    description:
      "An Android AI workspace that runs on-device models offline, connects to cloud and local network models, and adds projects, artifacts, on-device OCR, and web search.",
    platform: "Android app",
    platforms: ["Android"],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material 3",
      "OpenRouter",
      "LiteRT-LM",
      "llama.cpp",
      "ML Kit",
      "Room",
      "DataStore",
      "Retrofit",
      "Moshi",
    ],
    githubHref: "https://github.com/adityavardhansharma/EchoFlow",
    websiteHref: "https://echoflow.adityavs.space/",
  },
  {
    title: "EchoFiles",
    description:
      "A native Linux file manager built for fast folders, quick search, dual-pane file work, and a command palette.",
    platform: "Linux app",
    platforms: ["Desktop"],
    technologies: ["Rust", "iced", "wgpu", "Vulkan", "rayon", "zbus"],
    githubHref: "https://github.com/adityavardhansharma/EchoFiles_Linux",
    websiteHref: "https://echofiles.adityavs.space/",
  },
  {
    title: "Ledgerline",
    description:
      "Management accounts and three-statement forecasts for small businesses, synced from Xero or CSV and reconciled to the cent.",
    platform: "Website",
    platforms: ["Website"],
    technologies: [
      "Next.js",
      "TypeScript",
      "Convex",
      "Python",
      "FastAPI",
      "Xero API",
      "Clerk",
      "OpenRouter",
    ],
    githubHref: "https://github.com/adityavardhansharma/Ledgerline",
    websiteHref: "https://ledger.adityavs.space/",
  },
  {
    title: "TypoPilot",
    description:
      "Research project that fine-tunes ByT5-small to fix heavily mistyped English and Hinglish text, trained on pairs from a keyboard-aware noise generator. Halved character error rate and cut overcorrection from 44.5% to 9.3% against SymSpell.",
    platform: "Machine learning research",
    platforms: ["ML"],
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "ByT5",
      "SymSpell",
    ],
    githubHref: "https://github.com/adityavardhansharma/TypoPilot",
  },
  {
    title: "Cricket ML Practicum",
    description:
      "MSc practicum forecasting next-over runs and ball-by-ball wicket risk in T20 cricket from 8,903 Cricsheet matches, with leakage-safe features, SHAP explanations, and a live prediction dashboard.",
    platform: "Machine learning project",
    platforms: ["ML", "Website"],
    technologies: [
      "Python",
      "Pandas",
      "LightGBM",
      "SHAP",
      "FastAPI",
      "Astro",
      "TypeScript",
    ],
    githubHref:
      "https://github.com/adityavardhansharma/Cricket-Practicum---T20-Analytics---Prediction",
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
    websiteHref: "https://feeddoc.adityavs.space/",
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

export const llmTrainingItems: ProjectCardProps[] = [
  {
    title: "EchoPulse",
    description:
      "A 1.7B model fine-tuned from Liquid AI's LFM3-1.7B for EchoFlow, my private on-device AI assistant. It knows when to emit a search query, builds single-file HTML app artifacts, and handles a 16K-token context. Published with Q4 and Q8 GGUF builds for llama.cpp.",
    platform: "Fine-tuned language model",
    platforms: ["ML", "Android"],
    technologies: ["LFM3-1.7B", "Transformers", "GGUF", "llama.cpp", "SFT"],
    huggingFaceHref: "https://huggingface.co/adityavardhansharma/EchoPulse-1.7B",
  },
  {
    title: "EchoSwift",
    description:
      "A smaller 700M model fine-tuned from Liquid AI's LFM2-700M on the same EchoFlow training corpus, built to run fast on phones. Quantised to INT4 and INT8 LiteRT-LM packages with 4K and 8K context.",
    platform: "Fine-tuned language model",
    platforms: ["ML", "Android"],
    technologies: ["LFM2-700M", "Transformers", "LiteRT-LM", "INT4/INT8", "SFT"],
    huggingFaceHref: "https://huggingface.co/adityavardhansharma/EchoSwift-700M",
  },
]
