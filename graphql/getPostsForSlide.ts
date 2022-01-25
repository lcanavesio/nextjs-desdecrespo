import gql from "graphql-tag"

export const getPostsForSlide = gql`
query getPostsForSlide($first: Int) {
    posts(
      first: $first
      where: {
        orderby: { field: DATE, order: DESC }
        tag: "Destacadas, Destacados"
      }
    ) {
      edges {
        node {
          id
          date
          title
          slug
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
