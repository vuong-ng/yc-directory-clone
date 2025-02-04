
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  
  console.log('What');
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name:'Vuong Nguyen' },
      _id: 1,
      description: "This is a description",
      image: "https://plus.unsplash.com/premium_photo-1679064287823-fbd549bf47dd?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Cleanser",
      title:"New cleaser"
    }
  ]
  // const response =JSON.stringify(query);
  // response = JSON.stringify(response);
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
            posts.map((post: StartupCardType, index: number) => (
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
