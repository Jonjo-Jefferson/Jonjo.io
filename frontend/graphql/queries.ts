import gql from "graphql-tag";

export const allArticlesQuery = gql`
  query allArticlesQuery {
    articles {
      data {
        id
        attributes {
          title
          slug
          description
          body
          date
        }
      }
    }
  }
`;

export const singleArticleQuery = gql`
  query singleArticelsQuery {
    article(id: 1) {
      data {
        id
        attributes {
          title
          date
          body
          description
          slug
        }
      }
    }
  }
`;
