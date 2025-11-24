"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      {/* Header */}

      {/* TODO: Liquid Glass */}
      <header className="glass-header w-[calc(100%-2.7em)] rounded-[1.5em] py-[0.95em] m-[1.35em] fixed top-0 left-0 right-0 z-50">
        <nav className="container flex flex-row justify-between items-center">
          <div className="w-[20%]">
            <Image
              src="/logo-sonoris.png"
              alt="Description"
              width={252}
              height={70}
            />
          </div>
          <div className="flex justify-center items-center gap-[1.5em] w-[60%]">
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
          <div className="w-[20%]"></div>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="section-sonoris"
        className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] h-[56em] flex relative justify-center pt-[11em] hero-section"
      >
        <div className="flex flex-col items-center">
          {/* TODO: Gradiente nos textos*/}
          <h1 className="text-[6em]! tracking-[0.125em] font-bold! text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] inline-block bg-clip-text">
            Sonoris
          </h1>
          <h2 className="text-center text-[2.5em]! leading-[1.1em] text-white font-medium!">
            Transformando acessibilidade <br />
            em produtividade
          </h2>
        </div>
      </section>

      <main className="px-[2em] pt-[5em] flex flex-col gap-[5em]">
        {/* Transcriber Section */}
        <section
          id="section-transcriber"
          className="bg-white p-[2em] rounded-[1em]"
        >
          <div>
            <h1 className="text-transparent bg-linear-to-r from-[#142E50] from-10% via-[#1D5765] to-[#142E50] to-90% inline-block bg-clip-text">
              Transcritor da Sonoris
            </h1>
            <p>Dispositivo integrado que faz o trabalho para você.</p>
          </div>
        </section>

        {/* App Section */}
        <section
          id="section-app"
          className="flex justify-center bg-linear-to-t from-[#2890C4] to-[#327BF3] p-[2em] rounded-[1em] "
        >
          <div>
            <h1 className=" text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] inline-block bg-clip-text">
              Aplicativo da Sonoris
            </h1>
            <p>A ferramenta que faz a diferença.</p>

            <div>
              <div className="bg-white rounded-[1em] p-[1em] my-[1em]">
                <b>Histórico de conversas. </b>
                Reveja as suas conversas, organize-as e não perca nada.
              </div>
            </div>
          </div>

          <Image
            src="/aplicativo.png"
            alt="Description"
            width={500}
            height={140}
          />
        </section>

        <section id="section-future">
          <h1>O Futuro da Sonoris</h1>
        </section>

        <section id="section-credits">
          <h1>Quem somos?</h1>
        </section>
      </main>
    </div>
  );
}
