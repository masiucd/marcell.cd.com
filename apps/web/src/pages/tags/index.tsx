import {GetStaticProps} from "next"
import Link from "next/link"
import React, {ReactElement} from "react"

import Page from "~/components/common/page"
import Title from "~/components/common/title"
import Layout from "~/components/layout"
import {getAllPosts} from "~/lib/blog"
import {OnlyPostTagsSchema} from "~/lib/schemas"

interface Props {
  tags: string[]
}

export default function TagsPage({tags}: Props) {
  return (
    <Page
      metaData={{
        title: "Tags",
      }}
    >
      <Title>
        <h1>Blog post&apos;s tags</h1>
      </Title>
      <ul className="grid grid-cols-3 gap-5">
        {tags.map((tag) => (
          <li key={tag} className="capitalize w-fit">
            <Link
              className="text-xl relative block after:content-[''] after:transition-all after:ease-in-out after:duration-200 after:w-3  hover:after:w-full after:h-1 after:bg-blue-500 after:dark:bg-blue-500 after:absolute after:bottom-1 after:-rotate-1 after:left-0"
              href={`/tags/${tag}`}
            >
              {tag}
            </Link>
          </li>
        ))}
      </ul>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const postsWithOnlyTags = OnlyPostTagsSchema.parse(getAllPosts(["tags"]))
  return {
    props: {
      tags: [
        ...new Set(postsWithOnlyTags.flatMap((p) => p.tags.map((x) => x))),
      ],
    },
  }
}

TagsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
