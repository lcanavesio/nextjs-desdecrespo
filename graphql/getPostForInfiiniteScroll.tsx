import gql from "graphql-tag"

export const getPostForInfiiniteScroll = gql`
query getPostForInfiiniteScroll($categoryName: String, $first: Int, $cursor: String) {
  posts(
    first: $first
    after: $cursor
    where: {
      orderby: { field: DATE, order: DESC }
      categoryName: $categoryName
    }
  ) {
    edges {
      cursor
      node {
        id
        date
        title
        slug
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
}
`
