"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <main className="">
        {/* Header */}

        <header className="glass-header w-[calc(100%-2.7em)] rounded-[2em] py-[0.95em] m-[1.35em] fixed top-0 left-0 right-0 z-50">
          <nav className="container flex flex-row justify-between items-center">
            <div className="w-full">
              <Image
                src="/logo-sonoris.png"
                alt="Description"
                width={252}
                height={70}
              />
            </div>
            <div className="flex gap-4 w-full">
              <Link href="#section-sonoris" className="text-header">
                Sonoris
              </Link>
              <Link href="#section-transcriber" className="text-header">
                Transcritor
              </Link>
              <Link href="#section-app" className="text-header">
                Aplicativo
              </Link>
              <Link href="#section-future" className="text-header">
                Futuro da Sonoris
              </Link>
              <Link href="#section-credits" className="text-header">
                Créditos
              </Link>
            </div>
            <div className="w-full"></div>
          </nav>
        </header>

        {/* Hero Section */}
        <section
          id="section-sonoris"
          className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] h-[56em]"
        >
          <h1>Sonoris</h1>
        </section>
        <section id="section-transcriber">Transcritor</section>
        <section id="section-app">Aplicativo</section>
        <section id="section-future">Futuro da Sonoris</section>
        <section id="section-credits">Créditos</section>
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
