/*
 * @Date: 2024-04-15 17:09:41
 * @Description: 功能：
 */
import Head from 'next/head';
import { AwesomeLink } from '../components/AwesomeLink';
import { links } from '../data/links';
import { gql, useQuery} from '@apollo/client'
import type { Link } from '@prisma/client';


const AllLinksQuery = gql`
  query allLinksQuery($first:Int, $after:ID) {
    links(first:$first, after:$after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          url
          description
          imageUrl
          category
        }
      }
    }
  }
`

export default function Home() {
  const { data, loading, error, fetchMore } = useQuery(AllLinksQuery, {
    variables: { first: 2}
  })
  if (loading) return <p>Loading</p>
  if (error) return <p>Oh no....</p>
  
  const { endCursor, hasNextPage} = data?.links.pageInfo 
  return (
    <div>
      <Head>
        <title>Awesome Links</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container mx-auto max-w-5xl my-20">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.links.edges.map(({node}:{node:Link}) => (
            <AwesomeLink
              key={node.id}
              url={node.url}
              id={node.id}
              category={node.category}
              title={node.title}
              description={node.description}
              imageUrl={node.imageUrl}
            />
          ))}
        </ul>
      </div>

      {hasNextPage ? (
        <button className='px-4 py-2 bg-blue-400 text-white rounded my-10' 
        onClick={() => {
          fetchMore({
            variables: { after: endCursor},
            updateQuery: (prevResult, { fetchMoreResult}) => {
              fetchMoreResult.links.edges = [
                ...prevResult.links.edges,
                ...fetchMoreResult.links.edges
              ];
              return fetchMoreResult
            }
          })
        }}>
          more
        </button>
      ): (
        <p className='my-10 text-center font-medium'>You've reached the end {"  "}</p>
      ) }
    </div>
  );
}
