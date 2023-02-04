import { toString } from 'mdast-util-to-string'

export function remarkReadingTime() {
  return function (tree, { data }) {
    const text = toString(tree)
    const readingTime = 0
    data.astro.frontmatter.readingTime = readingTime
  }
}
