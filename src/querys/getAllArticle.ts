import client from '@/lib/apolloClient';
import { gql } from '@apollo/client';

export const getAllArticle = client.query({
    query: gql`query getAllArticle {
      RevistaContents(limit: 100){
        totalDocs
        hasNextPage
        limit
        docs{
          id
          articulo
          position
          imagen
          magazineImage {
            id
            url
            mimeType
          }
          audio
          audioFile {
            id
            url
            mimeType
          }
          video
          urlVideo
          categoriaPrueba{
            categoriaNombre
          }
        }
      }
    }`,
    fetchPolicy: 'no-cache'
})