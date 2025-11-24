import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="">
        {/* Header */}
        <header className="header-glass w-[calc(100% - 2.7em)] rounded-[2em] py-[0.95em] m-[1.35em] fixed top-0 left-0 right-0 z-10">
          <nav className="container">
            <Image
              src="/logo-sonoris.png"
              alt="Description"
              width={252}
              height={70}
            />
          </nav>
        </header>
        {/* Hero Section */}
        <section className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] h-[56em]">
          <h1>Sonoris</h1>
        </section>
        <h1>
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a v
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a v
          <br />a
          <br />a
          <br />a v
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a
          <br />a v
        </h1>
      </main>
    </div>
  );
}
