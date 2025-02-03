import Image from "next/image";
import SearchForm from "@/app/components/SearchForm";

export default function Home() {
  console.log('What')
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup,
          <br /> Connect With Your Entrepreneur
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noted in Virtual Competition
        </p>
        <SearchForm/>
      </section>
    </>

  );
}
