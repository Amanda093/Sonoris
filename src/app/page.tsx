import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="">
        <section className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] p-4 rounded-lg mb-8">
          {/* Header */}
          <header className="bg-white opacity-90 rounded-lg">
            <Image
              src="/logo-sonoris.png"
              alt="Description"
              width={252}
              height={70}
            />
          </header>

          <h1>Sonoris</h1>
        </section>

        <section>
          <h1>Hello world</h1>
        </section>
      </main>
    </div>
  );
}
