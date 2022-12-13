import {serialize} from "next-mdx-remote/serialize"
// import rehypeAutolinkHeadings from "rehype-autolink-headings"
// import rehypeCodeTitles from "rehype-code-titles"
// import rehypeHighlight from "rehype-highlight"
import rehypeSlug from "rehype-slug"

export const parseContentToMDX = async (content: string) => {
  return await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        // [
        //   rehypeAutolinkHeadings,
        //   {
        //     properties: {className: ["anchor"]},
        //   },
        // {behaviour: "wrap"},
        // ],
        // rehypeHighlight,
        // rehypeCodeTitles,
      ],
    },
  })
}
