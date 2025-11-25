"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, easeInOut, motion } from "motion/react";
import GlassSurface from "../components/GlassSurface";
import { Globe, PlusCircle, ScreenShare, Smartphone, SparklesIcon } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeTranscriberSlide, setActiveTranscriberSlide] = useState(0);

  const transcriberSlides = [
    {
      image: "/transcriber/Sonoris1.png",
      width: 1570,
      height: 882,
      title: "Transcrição em tempo real.",
      description: "De forma Offline no dispositivo, capture a voz de todos ao seu redor.",
    },
    {
      image: "/transcriber/Sonoris2.png",
      width: 1439,
      height: 1045,
      title: "Customização das legendas.",
      description: "Customize as legendas pelo aplicativo e deixe acessível do seu jeito.",
    },
    {
      image: "/transcriber/Sonoris3.png",
      width: 643,
      height: 567,
      title: "Histórico e separação de conversas.",
      description: "Veja o que você perdeu pelo histórico e inicie novas conversas quando quiser.",
    },
    {
      image: "/transcriber/Sonoris4.png",
      width: 636,
      height: 547,
      title: "Modo Privado.",
      description: "Mantenha aquelas conversas privadas apenas no momento com um clique.",
    },
  ];

  const [activeAppSlide, setActiveAppSlide] = useState(0);

  const appSlides = [
    {
      image: "/app/Sonoris1.png",
      width: 1683,
      height: 1716,
      title: "Histórico de conversas.",
      description: "Reveja as suas conversas, organize-as e não perca nada.",
    },
    {
      image: "/app/Sonoris2.png",
      width: 1683,
      height: 1716,
      title: "Respostas Rápidas.",
      description: "Responda com facilidade as pessoas, mesmo quando você não consegue falar. ",
    },
    {
      image: "/app/Sonoris3.png",
      width: 1683,
      height: 1716,
      title: "Salvamento na nuvem.",
      description: "Todas suas preferencias e conversas em qualquer dispositivo, não perca nada.",
    },
  ];

  const [activeFutureSlide, setActiveFutureSlide] = useState(0);

  const futureSlides = [
    {
      image: "/future/Sonoris1.png",
      width: 800,
      height: 1716,
      title: "Transcrição no Aplicativo",
      description:
        "Utilize a Sonoris apenas com seu celular, transcrevendo pelo próprio aplicativo, com todas as funções.",
      icon: Smartphone,
    },
    {
      image: "/future/Sonoris2.png",
      width: 800,
      height: 1716,
      title: "Múltiplas Línguas",
      description: "Fale com qualquer pessoa, em qualquer lingua e traduza em tempo real.",
      icon: Globe,
    },
    {
      image: "/future/Sonoris3.png",
      width: 801,
      height: 357,
      title: "Integração com I.A.",
      description:
        "Organização de conversas, descrição automática e transcrição impecável com integração de inteligência artificial.",
      icon: SparklesIcon,
    },
    {
      image: "/future/Sonoris4.png",
      width: 581,
      height: 456,
      title: "Melhorias no Transcritor",
      description: "Design portátil, com transcrição mais rápida e menos erros vindo para o transcritor.",
      icon: ScreenShare,
    },
  ];

  return (
    <div className="bg-background overflow-x-hidden relative">
      {/* Header */}

      <motion.div
        initial={{ opacity: 0 }}
        transition={{ ease: easeInOut, duration: 1.25 }}
        animate={{ opacity: 1 }}
        className="w-[calc(100%-2.7em)] max-w-[1920px] fixed top-[1.35em] left-1/2 translate-x-[-50%] z-50">
        <GlassSurface
          className="w-full! rounded-[1.5em]!  py-[0.4em]! h-fit! bg-white/80!"
          saturation={1}
          blur={0}
          displace={4}>
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
        </GlassSurface>
      </motion.div>
      {/* Hero Section */}
      <section
        id="section-sonoris"
        className="bg-linear-to-t from-[#28B4C4] to-[#5898FF] h-[63em] max-w-dvw flex mx-auto w-full justify-center gap-[12em] overflow-hidden pt-[11em] hero-section absolute top-0 left-0">
        <motion.div
          initial={{ opacity: 0, transform: "translateY(200px)" }}
          transition={{ ease: easeInOut, duration: 1.25 }}
          animate={{ opacity: 1, transform: "translateY(0)" }}
          className="w-[57.5em] absolute top-[24.5em] left-[calc(50%+1em)] translate-x-[-50%]">
          <Image
            className="w-full"
            src="/header/dispositivo.png"
            alt="Dispositivo Sonoris"
            width={1395}
            height={1053}
          />
        </motion.div>

        <div className="flex flex-col gap-[8em]">
          <motion.div
            className="flex flex-col items-center w-[15em]  rotate-[-4deg] animate-[float_5s_ease-in-out_infinite]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: easeInOut, duration: 0.75 }}
            animate={{ opacity: 1, filter: "none" }}>
            <Image
              className="w-full"
              src="/header/mensagens.png"
              alt="Mensagens do aplicativo Sonoris"
              width={353}
              height={303}
            />
          </motion.div>

          <motion.div
            className="w-[30em] rotate-6  animate-[float_4s_ease-in-out_infinite]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: easeInOut, duration: 1.1 }}
            animate={{ opacity: 1, filter: "none" }}>
            <Image
              className="w-full"
              src="/header/conversas.png"
              alt="Conversas do aplicativo Sonoris"
              width={692}
              height={686}
            />
          </motion.div>
        </div>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ ease: easeInOut, duration: 0.75 }}
          animate={{ opacity: 1, filter: "none" }}>
          <h1 className="text-[6em]! tracking-[0.125em] font-bold! text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] inline-block bg-clip-text">
            Sonoris
          </h1>
          <h2 className="text-center text-[2.5em]! leading-[1.1em] text-white font-medium! text-nowrap">
            Transformando acessibilidade <br />
            em produtividade
          </h2>
        </motion.div>

        <div className="flex flex-col gap-[8em]">
          <motion.div
            className="w-[27em] rotate-14 animate-[float_6s_ease-in-out_infinite]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: easeInOut, duration: 0.65 }}
            animate={{ opacity: 1, filter: "none" }}>
            <Image
              className="w-full"
              src="/header/ações rápidas.png"
              alt="Ações rápidas do aplicativo Sonoris"
              width={657}
              height={338}
            />
          </motion.div>

          <motion.div
            className="w-[28em] -rotate-12 animate-[float_7s_ease-in-out_infinite]"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ ease: easeInOut, duration: 0.95 }}
            animate={{ opacity: 1, filter: "none" }}>
            <Image
              className="w-full"
              src="/header/customização.png"
              alt="Customização do aplicativo Sonoris"
              width={657}
              height={338}
            />
          </motion.div>
        </div>
      </section>

      <main className="px-[2em] flex flex-col gap-[5em] pt-[63em] max-w-[1920px] m-auto pb-[8em]">
        {/* Transcriber Section */}
        <section
          id="section-transcriber"
          className="bg-white flex gap-[5em] justify-center items-center px-[5em] h-[47em] rounded-[3.5em] text-right relative">
          <div className="w-[45%] flex flex-col justify-center items-center gap-[1.5em]">
            {/* Imagem do carrossel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTranscriberSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25, ease: easeInOut }}
                className="w-[40em]">
                <Image
                  className="w-full"
                  src={transcriberSlides[activeTranscriberSlide].image}
                  alt="Description"
                  width={transcriberSlides[activeTranscriberSlide].width}
                  height={transcriberSlides[activeTranscriberSlide].height}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-[1em] absolute bottom-[3em]">
              {transcriberSlides.map((_, index) => (
                <div
                  key={index}
                  className={`${
                    index === activeTranscriberSlide ? "h-[0.75em] w-[2em] bg-blue-500" : "size-[0.75em] bg-gray-500"
                  } rounded-full transition-all duration-300`}
                />
              ))}
            </div>
          </div>

          <div className="w-[45%] flex flex-col gap-[2em]">
            <div className="flex flex-col">
              <h1 className="text-transparent bg-linear-to-r from-[#324766] from-0% via-[#366f7e] via-50% to-[#324766] to-100% inline-block bg-clip-text">
                Transcritor da Sonoris
              </h1>
              <b className="text-gray-700 ">Dispositivo integrado que faz o trabalho para você.</b>
            </div>

            <div className="flex flex-col gap-[1.5em] text-left text-gray-800 h-[30em]">
              {transcriberSlides.map((slide, index) => (
                <motion.button
                  animate={{ paddingLeft: index === activeTranscriberSlide ? "2em" : "5.5em" }}
                  key={index}
                  onClick={() => setActiveTranscriberSlide(index)}
                  transition={{ duration: 0.2, ease: easeInOut }}
                  style={{
                    paddingLeft: index !== activeTranscriberSlide ? "5.5em" : "2em",
                  }}
                  className={`bg-white/80 cursor-pointer rounded-[2.5em] pr-[2em] py-[1em] shadow-2xl/20 flex gap-[1.5em] items-center text-left relative overflow-hidden`}>
                  <AnimatePresence mode="wait">
                    {index !== activeTranscriberSlide && (
                      <motion.div
                        key="icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: easeInOut }}
                        className="absolute left-[2em] top-1/2 -translate-y-1/2">
                        <PlusCircle className="text-gray-800 size-[2.5em] shrink-0" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {index === activeTranscriberSlide ? (
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut }}>
                        <strong>{slide.title} </strong>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, ease: easeInOut }}>
                          {slide.description}
                        </motion.span>
                      </motion.p>
                    ) : (
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut }}>
                        <strong>{slide.title} </strong>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* App Section */}
        <section
          id="section-app"
          className="bg-linear-to-b from-[#327BF3] to-[#2890C4] flex gap-[5em] justify-center items-center px-[5em] h-[60em] rounded-[3.5em] text-left relative">
          <div className="w-[45%] flex flex-col gap-[2em]">
            <div className="flex flex-col">
              <h1 className="text-transparent bg-linear-to-r from-[#FFFFFF] via-[#E0F9FF] to-[#FBFBFB] to-100% inline-block bg-clip-text">
                Aplicativo da Sonoris
              </h1>
              <b className="text-slate-200 font-light!">A ferramenta que faz a diferença.</b>
            </div>

            <div className="flex flex-col gap-[1.5em] text-left text-gray-800 h-[30em]">
              {appSlides.map((slide, index) => (
                <motion.button
                  animate={{ paddingLeft: index === activeAppSlide ? "2em" : "5.5em" }}
                  key={index}
                  onClick={() => setActiveAppSlide(index)}
                  transition={{ duration: 0.2, ease: easeInOut }}
                  style={{
                    paddingLeft: index !== activeAppSlide ? "5.5em" : "2em",
                  }}
                  className={`bg-white/80 cursor-pointer rounded-[2.5em] pr-[2em] py-[1em] shadow-2xl/20 flex gap-[1.5em] items-center text-left relative overflow-hidden`}>
                  <AnimatePresence mode="wait">
                    {index !== activeAppSlide && (
                      <motion.div
                        key="icon"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        transition={{ duration: 0.3, ease: easeInOut }}
                        className="absolute left-[2em] top-1/2 -translate-y-1/2">
                        <PlusCircle className="text-gray-800 size-[2.5em] shrink-0" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {index === activeAppSlide ? (
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut }}>
                        <strong>{slide.title} </strong>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3, ease: easeInOut }}>
                          {slide.description}
                        </motion.span>
                      </motion.p>
                    ) : (
                      <motion.p
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: easeInOut }}>
                        <strong>{slide.title} </strong>
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="w-[45%] flex flex-col justify-center items-center gap-[1.5em]">
            {/* Imagem do carrossel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAppSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.25, ease: easeInOut }}
                className="w-[42em]">
                <Image
                  className="w-full"
                  src={appSlides[activeAppSlide].image}
                  alt="Description"
                  width={appSlides[activeAppSlide].width}
                  height={appSlides[activeAppSlide].height}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex gap-[1em] absolute bottom-[5em]">
              {appSlides.map((_, index) => (
                <div
                  key={index}
                  className={`${
                    index === activeAppSlide ? "h-[0.75em] w-[2em] bg-gray-800" : "size-[0.75em] bg-white"
                  } rounded-full transition-all duration-300`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Future of Sonoris */}
        <section id="section-future">
          <div className="flex flex-col justify-center items-center gap-[2em]">
            <div className="flex flex-col text-center">
              <h1 className="text-transparent bg-linear-to-r from-[#324766] from-0% via-[#366f7e] via-50% to-[#324766] to-100% inline-block bg-clip-text">
                O Futuro da Sonoris
              </h1>
              <b className="text-gray-700">Estamos sempre melhorando, veja o que está por vir.</b>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFutureSlide}
                initial={{ opacity: 0, scale: 0.75 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 0.75 }}
                style={{
                  height: activeFutureSlide === 2 ? "30em" : "40em",
                }}
                transition={{ duration: 0.3, ease: easeInOut }}>
                <Image
                  className="h-full w-auto object-contain"
                  src={futureSlides[activeFutureSlide].image}
                  alt="Description"
                  width={futureSlides[activeFutureSlide].width}
                  height={futureSlides[activeFutureSlide].height}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex bg-slate-200 rounded-[2em]">
              {futureSlides.map((slide, index) => {
                const Icon = slide.icon;
                return (
                  <motion.button
                    key={index}
                    onClick={() => setActiveFutureSlide(index)}
                    animate={{
                      backgroundColor: index === activeFutureSlide ? "#374151" : "transparent",
                      color: index === activeFutureSlide ? "#ffffff" : "#6b7280",
                    }}
                    transition={{ duration: 0.3, ease: easeInOut }}
                    className="text-[1.5em] cursor-pointer font-semibold flex flex-col items-center leading-[1.2em] w-[8.8em] rounded-[1.2em] px-[1em] py-[0.5em]">
                    <Icon className="size-[1.65em] shrink-0" />
                    {slide.title}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.b
                key={activeFutureSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: easeInOut }}
                className="text-gray-700 text-center max-w-[27em]">
                {futureSlides[activeFutureSlide].description}
              </motion.b>
            </AnimatePresence>
          </div>
        </section>

        {/* Credits */}
        <section id="section-credits" className="flex flex-col gap-[3em] z-10">
          <div className="flex flex-col text-center">
            <h1 className="text-transparent bg-linear-to-r from-[#324766] from-0% via-[#366f7e] via-50% to-[#324766] to-100% inline-block bg-clip-text">
              Quem somos?
            </h1>
            <b className="text-gray-700">O time por trás da Sonoris</b>
          </div>

          <div className="flex gap-[2.75em] justify-center">
            {/* Card Amanda*/}
            <div className="rounded-[3em] bg-[url('/credits/foto1.jpg')] bg-cover p-[1.2em] bg-center w-[32em] aspect-5/7 flex flex-col justify-end">
              <GlassSurface
                saturation={1}
                blur={0}
                displace={4}
                className="bg-[#374151]/80! rounded-[1.5em]! p-[1.5em] w-full! h-fit! text-white">
                <div className="flex flex-col gap-[0.2em] w-full">
                  <div>
                    <b className="leading-[0.25em]">Amanda Farias</b>
                    <p className="text-[1.3em]!">Documentação & Front-end do aplicativo</p>
                  </div>
                  <div className="flex gap-[1em]">
                    <button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="https://github.com/Amanda093">
                        <Image className="w-full" src="/Github.png" alt="Github" width={512} height={512} />
                      </a>
                    </button>
                    <button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="https://www.linkedin.com/in/amanda-farias-4033932aa/">
                        <Image className="w-full" src="/Linkedin.png" alt="Linkedin" width={512} height={512} />
                      </a>
                    </button>
                  </div>
                </div>
              </GlassSurface>
            </div>
            <div className="rounded-[3em] bg-[url('/credits/foto2.jpg')] bg-cover p-[1.2em] bg-center w-[32em] aspect-5/7 flex flex-col justify-end">
              <GlassSurface
                saturation={1}
                blur={0}
                displace={4}
                className="bg-[#374151]/80! rounded-[1.5em]! p-[1.5em] w-full! h-fit! text-white">
                <div className="flex flex-col gap-[0.2em] w-full">
                  <div>
                    <b className="leading-[0.25em]">Beatriz Silva</b>
                    <p className="text-[1.3em]!">Back-end & conexão do aplicativo</p>
                  </div>
                  <div className="flex gap-[1em]">
                    <button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="https://github.com/Beatriz02020">
                        <Image className="w-full" src="/Github.png" alt="Github" width={512} height={512} />
                      </a>
                    </button>
                    {/*<button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="">
                        <Image className="w-full" src="/Linkedin.png" alt="Linkedin" width={512} height={512} />
                      </a>
                    </button> */}
                  </div>
                </div>
              </GlassSurface>
            </div>
            <div className="rounded-[3em] bg-[url('/credits/foto3.jpg')] bg-cover p-[1.2em] bg-center w-[32em] aspect-5/7 flex flex-col justify-end">
              <GlassSurface
                saturation={1}
                blur={0}
                displace={4}
                className="bg-[#374151]/80! rounded-[1.5em]! p-[1.5em] w-full! h-fit! text-white">
                <div className="flex flex-col gap-[0.2em] w-full">
                  <div>
                    <b className="leading-[0.25em]">Carlos Henrique</b>
                    <p className="text-[1.3em]!">Modelagem, Design & Transcritor</p>
                  </div>
                  <div className="flex gap-[1em]">
                    <button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="https://github.com/Chrb09">
                        <Image className="w-full" src="/Github.png" alt="Github" width={512} height={512} />
                      </a>
                    </button>
                    <button className="rounded-full cursor-pointer hover:translate-y-[-0.2em] transition-all duration-200 p-[0.1em] bg-white aspect-square shrink-0 text-gray-800 size-[3em]">
                      <a href="https://www.linkedin.com/in/carlos-henrique-rodrigues-barile-4953932aa/">
                        <Image className="w-full" src="/Linkedin.png" alt="Linkedin" width={512} height={512} />
                      </a>
                    </button>
                  </div>
                </div>
              </GlassSurface>
            </div>
          </div>
        </section>
      </main>
      <div className="bg-linear-to-b from-[#232F57] to-[#14242C] absolute bottom-0 left-0 w-full h-[18em]" />
    </div>
  );
}
