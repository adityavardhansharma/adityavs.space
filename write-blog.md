# Blog Writing Guide

This repo still has the blog workflow, but blog links are currently hidden from the main UI and the old posts have been removed.

## Where Posts Live

Blog posts live in the `posts` folder as `.mdx` files. The filename becomes the URL slug:

```txt
posts/my-first-post.mdx -> /blog/my-first-post
```

Keep filenames lowercase and use hyphens between words.

## Required Frontmatter

Every post starts with frontmatter:

```mdx
---
title: "Post Title"
description: "A short summary for previews and metadata."
date: "June 3, 2026"
---
```

Optional draft flag:

```mdx
draft: "true"
```

Draft posts can be opened by slug, but they do not appear in the published post lists.

## Body Format

After the frontmatter, write normal Markdown or MDX:

````mdx
## Section Heading

Use short paragraphs.

- Bullets are supported.
- Links work like [this](https://example.com).

Code blocks should include a language:

```ts
const message = "hello"
```
````

Use `##` and `###` headings for sections. The blog page reads those headings to build article navigation.

Images can be added with Markdown:

```mdx
![Alt text](https://example.com/image.png)
```

## How The Blog Code Works

- `src/lib/blog.ts` reads `.mdx` files from `posts`.
- Frontmatter is parsed for `title`, `description`, `date`, and optional `draft`.
- The slug is generated from the filename.
- `src/app/blog/page.tsx` lists published posts.
- `src/app/blog/[slug]/page.tsx` renders a single post.
- `src/app/blog/[slug]/mdx.tsx` defines the MDX components and article styling.
- `src/components/blog-section.tsx` is the homepage blog preview component, currently unused.

## Future Workflow

When you write a blog in plain text, send it here and ask to format it as a blog post. I will:

1. Turn the plain text into a polished `.mdx` post.
2. Add the correct frontmatter.
3. Pick a clean slug and filename.
4. Preserve your voice while improving structure and readability.
5. Commit the change to the open PR branch, or create a new PR if none is open.
