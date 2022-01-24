import gql from "graphql-tag"

export const getPostsSearch = gql`
query getPostsSearch($keyword: String!, $first: Int, $last: Int, $after:String ,$before: String) {
  posts(
    where: {search: $keyword, orderby: {field: DATE, order: DESC}}
    first: $first, 
    last: $last,
    after: $after,
    before: $before,
  
  ) {
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
    }
    edges {
      cursor
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
