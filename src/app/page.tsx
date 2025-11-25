"use client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background overflow-x-hidden">
      {/* Header */}

      {/* TODO: Liquid Glass */}
      <header className="glass-header w-[calc(100%-2.7em)] max-w-[1920px] rounded-[1.5em] py-[0.95em] fixed top-[1.35em] left-1/2 translate-x-[-50%] z-50">
        <nav className="container flex flex-row justify-between items-center">
          <div className="w-[20%]">
            <Image className="w-[16em]" src="/logo-sonoris.png" alt="Description" width={252} height={70} />
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
      {/* TODO: verificar responsividade do background */}
      <section
        id="section-sonoris"
        className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] h-[63em] flex absolute top-0 left-1/2 translate-x-[-50%] min-w-[250em] justify-center pt-[11em] hero-section">
        <div className="flex flex-col items-center">
          <h1 className="text-[6em]! tracking-[0.125em] font-bold! text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] inline-block bg-clip-text">
            Sonoris
          </h1>
          <h2 className="text-center text-[2.5em]! leading-[1.1em] text-white font-medium!">
            Transformando acessibilidade <br />
            em produtividade
          </h2>
        </div>
        <Image
          className="w-[57.5em] absolute top-[24.5em] left-[calc(50%+1em)] translate-x-[-50%]"
          src="/header/dispositivo.png"
          alt="Dispositivo Sonoris"
          width={1395}
          height={1053}
        />

        <Image
          className="w-[15em] absolute top-[10em] left-[calc(50%-20%)] rotate-[-4deg] translate-x-[-50%] animate-[float_5s_ease-in-out_infinite]"
          src="/header/mensagens.png"
          alt="Mensagens do aplicativo Sonoris"
          width={353}
          height={303}
        />

        <Image
          className="w-[30em] absolute top-[30em] left-[calc(50%-18%)] rotate-6 translate-x-[-50%] animate-[float_4s_ease-in-out_infinite]"
          src="/header/conversas.png"
          alt="Conversas do aplicativo Sonoris"
          width={692}
          height={686}
        />

        <Image
          className="w-[27em] absolute top-[12em] right-[calc(50%-18%)] rotate-14 translate-x-[50%] animate-[float_6s_ease-in-out_infinite]"
          src="/header/ações rápidas.png"
          alt="Ações rápidas do aplicativo Sonoris"
          width={657}
          height={338}
        />

        <Image
          className="w-[28em] absolute top-[32em] right-[calc(50%-18%)] -rotate-12 translate-x-[50%] animate-[float_7s_ease-in-out_infinite]"
          src="/header/customização.png"
          alt="Customização do aplicativo Sonoris"
          width={657}
          height={338}
        />
      </section>

      <main className="px-[2em] flex flex-col gap-[5em] pt-[63em] max-w-[1920px] m-auto">
        {/* Transcriber Section */}
        <section
          id="section-transcriber"
          className="bg-white flex gap-[2em] justify-center px-[6em] py-[5em] rounded-[1em] text-right">
          <div className="w-[55%]">
            <Image className="w-full" src="/transcriptor/Sonoris1.png" alt="Description" width={500} height={120} />
          </div>

          <div className="w-[45%] flex flex-col gap-[2em]">
            <div className="flex flex-col">
              <h1 className="text-transparent bg-linear-to-r from-[#142E50] from-10% via-[#1D5765] to-[#142E50] to-90% inline-block bg-clip-text">
                Transcritor da Sonoris
              </h1>
              <b className="text-gray-700 ">Dispositivo integrado que faz o trabalho para você.</b>
            </div>
            <div className="flex flex-col gap-[1em] text-left text-gray-800">
              <div className="bg-white-500 rounded-[10em] px-[2em] py-[0.5em] my-[1em] shadow-2xl">
                <p>
                  <strong>Transcrição em tempo real. </strong> De forma Offline no dispositivo, capture a voz de todos
                  ao seu redor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* App Section */}
        <section
          id="section-app"
          className="flex justify-center bg-linear-to-t from-[#2890C4] to-[#327BF3] p-[2em] rounded-[1em] ">
          <div>
            <h1 className=" text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] inline-block bg-clip-text">
              Aplicativo da Sonoris
            </h1>
            <p className="text-white">A ferramenta que faz a diferença.</p>

            <div>
              <div className="bg-white rounded-[1em] p-[1em] my-[1em]">
                <b>Histórico de conversas. </b>
                Reveja as suas conversas, organize-as e não perca nada.
              </div>
            </div>
          </div>

          <Image src="/aplicativo.png" alt="Description" width={500} height={140} />
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
