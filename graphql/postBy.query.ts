import gql from "graphql-tag"

export const postBy = gql`
query postBy($slug: String!) {
    postBy(slug: $slug) {
      content
      slug
      title
      uri
      date
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      categories {
        nodes {
          name
        }
      }
    }
  }
`
