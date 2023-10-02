// GraphQL Queries
import { gql } from "@apollo/client";

export const GET_ANIME_TITLES = gql`
  query {
    Page(page: 1, perPage: 10) {
      media(type: ANIME) {
        id
        title {
          romaji
        }
      }
    }
  }
`;

export const GET_TOP_100 = gql`
  query {
    Page(page: 1, perPage: 100) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
        }
      }
    }
  }
`;
