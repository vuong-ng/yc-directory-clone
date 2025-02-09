
import SearchForm from "@/components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import { client } from '../../sanity/lib/client';


export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  
  console.log('What');
  const query = (await searchParams).query;
  const posts = await client.fetch(STARTUP_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,
          <br /> Connect With Your Entrepreneur
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noted in Virtual Competition
        </p>
        <SearchForm query={query}/>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"`:'All Startups' }
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post = {post}/>
            ))
          ) : 
          <p className="no-results">No Startups found</p>
          }
        </ul>
      </section>
    </>

  );
}
