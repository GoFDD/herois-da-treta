"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sword,
  Shield,
  Users,
  Trophy,
  Crown,
  Target,
  Heart,
  Star,
  Flame,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const navLinks = [
  { name: "Sobre", id: "sobre" },
  { name: "Benefícios", id: "beneficios" },
  { name: "Recrutamento", id: "recrutamento" },
  { name: "Contato", id: "contato" },
] as const;

export default function HeroisDaTretaLanding() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(251,191,36,0.02)_50%,transparent_75%)] pointer-events-none"></div>

      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center border-b border-amber-500/20 bg-slate-950/90 backdrop-blur-xl sticky top-0 z-50 shadow-2xl">
        <Link href="/" className="flex items-center justify-center gap-3 group">
          <div className="relative">
            <Image
              src="/images/logo-ht.webp"
              alt="Logo Heróis da Treta"
              width={50}
              height={50}
              className="transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl group-hover:bg-amber-400/30 transition-all duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
            Heróis da Treta
          </span>
        </Link>
        <nav className="ml-auto flex gap-6 sm:gap-8">
          {navLinks.map(({ name, id }) => (
            <Link
              key={id}
              href={`#${id}`}
              className="text-sm font-medium text-slate-300 hover:text-amber-400 transition-all duration-300 relative group"
            >
              {name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-60"></div>
            <div className="absolute top-40 right-20 w-1 h-1 bg-amber-300 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
            <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/10 via-red-600/10 to-amber-600/10"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="flex flex-col items-center space-y-8 text-center">
              {/* Logo Principal */}
              <div className="relative group">
                <Image
                  src="/images/logo-ht.webp"
                  alt="Logo Heróis da Treta"
                  width={200}
                  height={200}
                  className="transition-all duration-500 group-hover:scale-105 drop-shadow-2xl"
                />
                <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-3xl group-hover:bg-amber-400/30 transition-all duration-500 scale-150"></div>
              </div>
              <Badge
                variant="outline"
                className="border-amber-400/50 text-amber-300 bg-amber-400/10 backdrop-blur-sm px-6 py-2 text-lg font-semibold shadow-lg"
              >
                <Star className="w-4 h-4 mr-2" />
                Guild Ativa • Albion Online
              </Badge>
              <div className="space-y-6">
                <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
                  <span className="bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent drop-shadow-2xl">
                    Heróis da{" "}
                  </span>
                  <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl animate-pulse">
                    Treta
                  </span>
                </h1>
                <p className="mx-auto max-w-[800px] text-slate-300 md:text-xl lg:text-2xl leading-relaxed font-medium">
                  Junte-se à guild mais épica de Albion Online! Conquiste
                  territórios, domine masmorras e faça parte de uma comunidade
                  unida que vive para a{" "}
                  <span className="text-amber-400 font-bold">treta</span>!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById("recrutamento")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  size="lg"
                  className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <Users className="mr-3 h-6 w-6" />
                  Entrar na Guild
                </Button>
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-amber-500/50 text-amber-300 hover:bg-amber-500/10 px-10 py-4 text-lg font-semibold bg-slate-900/50 backdrop-blur-sm shadow-2xl hover:border-amber-400 transition-all duration-300 transform hover:scale-105"
                    >
                      <Shield className="mr-3 h-6 w-6" />
                      Ver Requisitos
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-800/95 to-slate-900/95 border-amber-500/30 backdrop-blur-xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent flex items-center gap-3">
                        <Shield className="h-6 w-6 text-amber-400" />
                        Requisitos para Entrar na Guild
                      </DialogTitle>
                      <DialogDescription className="text-slate-300 text-lg">
                        Confira os requisitos básicos para se juntar aos Heróis
                        da Treta
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-6 py-4 pr-2">
                      <div className="grid gap-4">
                        {[
                          {
                            icon: Trophy,
                            title: "20M de Fama Mínima",
                            description:
                              "Experiência suficiente para participar das atividades da guild",
                            color: "text-amber-400",
                          },
                          {
                            icon: Users,
                            title: "Discord Obrigatório",
                            description:
                              "Comunicação ativa no Discord da guild é essencial",
                            color: "text-blue-400",
                          },
                          {
                            icon: Heart,
                            title: "Participação Ativa",
                            description:
                              "Mínimo de 2 participações por semana em atividades",
                            color: "text-green-400",
                          },
                          {
                            icon: Shield,
                            title: "Respeito e Fair Play",
                            description:
                              "Respeitar membros e seguir as regras da guild",
                            color: "text-purple-400",
                          },
                          {
                            icon: Target,
                            title: "Disponibilidade",
                            description:
                              "Estar disponível para atividades em grupo (ZvZ, ganking)",
                            color: "text-red-400",
                          },
                        ].map((req, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-amber-500/20 hover:border-amber-400/40 transition-all duration-300 group"
                          >
                            <div className="p-2 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors duration-300">
                              <req.icon className={`h-5 w-5 ${req.color}`} />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-white text-lg group-hover:text-amber-100 transition-colors duration-300">
                                {req.title}
                              </h4>
                              <p className="text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                                {req.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 p-4 rounded-lg border border-amber-500/30">
                        <div className="flex items-center gap-3 mb-2">
                          <Star className="h-5 w-5 text-amber-400" />
                          <h4 className="font-semibold text-amber-300 text-lg">
                            Dica Importante
                          </h4>
                        </div>
                        <p className="text-slate-300">
                          Não se preocupe se você ainda não atende todos os
                          requisitos! Nossa guild também ajuda novatos a
                          evoluir. Entre em contato conosco e vamos conversar
                          sobre sua situação.
                        </p>
                      </div>
                      <div className="flex gap-3 pt-4">
                        <Button
                          onClick={() => setIsModalOpen(false)}
                          className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-semibold shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
                        >
                          <Users className="mr-2 h-4 w-4" />
                          Quero me Candidatar
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setIsModalOpen(false)}
                          className="border-amber-500/50 text-amber-300 hover:bg-amber-500/10 hover:border-amber-400 transition-all duration-300"
                        >
                          Fechar
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre a Guild */}
        <section
          id="sobre"
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Sobre os{" "}
                    </span>
                    <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                      Heróis da Treta
                    </span>
                  </h2>
                  <p className="max-w-[600px] text-slate-300 text-xl leading-relaxed">
                    Somos uma guild focada em PvE, PVP, conquista territorial e
                    diversão em grupo. Com mais de 100 membros ativos, dominamos
                    as terras de Albion com estratégia, união e muita{" "}
                    <span className="text-amber-400 font-bold">treta</span>!
                  </p>
                </div>
                <div className="grid gap-4 py-6">
                  {[
                    {
                      icon: Crown,
                      text: "Guild estabelecida há mais de 2 anos",
                      color: "text-amber-400",
                    },
                    {
                      icon: Trophy,
                      text: "Múltiplas vitórias em ZvZ",
                      color: "text-amber-400",
                    },
                    {
                      icon: Users,
                      text: "Comunidade ativa no Discord 24/7",
                      color: "text-amber-400",
                    },
                    {
                      icon: Flame,
                      text: "Eventos diários organizados",
                      color: "text-amber-400",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors duration-300"
                    >
                      <div className="p-2 bg-amber-500/10 rounded-full group-hover:bg-amber-500/20 transition-colors duration-300">
                        <item.icon className={`h-6 w-6 ${item.color}`} />
                      </div>
                      <span className="text-lg font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center relative">
                <div className="relative group">
                  <Image
                    src="/images/logo-da-guilda.webp"
                    width="500"
                    height="500"
                    alt="Logo da Guild com fundo"
                    className="mx-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section
          id="beneficios"
          className="w-full py-16 md:py-24 lg:py-32 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="flex flex-col items-center justify-center space-y-8 text-center mb-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Por que escolher os{" "}
                  </span>
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    Heróis da Treta?
                  </span>
                </h2>
                <p className="max-w-[900px] text-slate-300 text-xl leading-relaxed">
                  Oferecemos tudo que você precisa para dominar Albion Online e
                  se divertir ao máximo
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  icon: Sword,
                  title: "PvP Organizado",
                  description:
                    "Participe de ZvZ e ganking em grupo com estratégias coordenadas e liderança experiente",
                },
                {
                  icon: Shield,
                  title: "Territórios Próprios",
                  description:
                    "Acesso a hideouts, territórios e recursos exclusivos da guild para acelerar sua progressão",
                },
                {
                  icon: Users,
                  title: "Comunidade Ativa",
                  description:
                    "Discord sempre movimentado com dicas, grupos e muita diversão entre os membros",
                },
                {
                  icon: Trophy,
                  title: "Eventos Regulares",
                  description: "Dungeons em grupo, raids, torneios internos",
                },
                {
                  icon: Target,
                  title: "Mentoria PvP",
                  description:
                    "Veteranos experientes ajudam novatos a melhorar suas skills de combate e estratégia",
                },
                {
                  icon: Heart,
                  title: "Suporte Total",
                  description:
                    "Ajuda completa com dicas de builds, economia, progressão e qualquer dúvida sobre o jogo",
                },
              ].map((benefit, index) => (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 group hover:scale-105 shadow-2xl"
                >
                  <CardHeader className="p-8">
                    <div className="p-4 bg-amber-500/10 rounded-full w-fit group-hover:bg-amber-500/20 transition-colors duration-300">
                      <benefit.icon className="h-12 w-12 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-amber-100 transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                    <CardDescription className="text-slate-300 text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {benefit.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Requisitos */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-l from-slate-900/50 to-slate-800/50 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,191,36,0.05),transparent_70%)]"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl">
                    <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                      Requisitos para{" "}
                    </span>
                    <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                      Entrar
                    </span>
                  </h2>
                  <p className="text-slate-300 text-xl leading-relaxed">
                    Não exigimos muito, mas alguns requisitos básicos garantem
                    que todos se divirtam juntos e a guild permaneça
                    competitiva!
                  </p>
                </div>
                <div className="grid gap-4 py-6">
                  {[
                    "20M de fama mínima",
                    "Discord obrigatório para comunicação",
                    "Participação ativa (mínimo 2x por semana)",
                    "Respeito aos membros e regras da guild",
                    "Disponibilidade para atividades em grupo",
                  ].map((requirement, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 text-slate-300 group hover:text-white transition-colors duration-300"
                    >
                      <div className="h-3 w-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg"></div>
                      <span className="text-lg font-medium">{requirement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Image
                    src="/images/recrutamento.webp"
                    width="500"
                    height="500"
                    alt="Batalha PvP em Albion Online"
                    className="relative mx-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recrutamento */}
        <section
          id="recrutamento"
          className="w-full py-16 md:py-24 lg:py-32 relative"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.1),transparent_70%)]"></div>
          <div className="w-full h-full flex items-center justify-center px-4 md:px-6 relative z-10 min-h-[50vh] sm:min-h-[60vh] lg:min-h-[70vh] ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="flex flex-col items-center justify-center space-y-8 sm:space-y-10 md:space-y-12 text-center w-full max-w-4xl mx-auto">
              <div className="space-y-8">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                  <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                    Pronto para a{" "}
                  </span>
                  <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                    Treta?
                  </span>
                </h2>
                <p className="mx-auto max-w-[90%] sm:max-w-[700px] text-slate-300 text-lg sm:text-xl md:text-xl leading-relaxed">
                  Entre em contato conosco e faça parte da guild mais épica de
                  Albion Online! A aventura te espera.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-8">
                <p className="text-slate-400 text-lg sm:text-xl">
                  Entre direto no nosso Discord:
                </p>

                <Link
                  href="https://discord.gg/cYCH76ew"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-amber-500/50 text-amber-300 hover:bg-amber-500/10 bg-slate-900/50 backdrop-blur-sm 
            h-16 px-8 text-lg font-semibold
            sm:h-20 sm:px-12 sm:text-xl 
            md:h-24 md:px-16 md:text-2xl 
            lg:h-24 lg:px-20 lg:text-2xl 
            xl:h-28 xl:px-24 xl:text-3xl
            hover:border-amber-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-amber-500/25"
                  >
                    🎮 Discord: Heróis da Treta
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm relative">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(251,191,36,0.02)_25%,transparent_25%,transparent_75%,rgba(251,191,36,0.02)_75%)]"></div>
          <div className="container px-4 md:px-6 relative z-10 ml-8 sm:ml-12 md:ml-16 lg:ml-20 xl:ml-24">
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
              {[
                { number: "100+", label: "Membros Ativos" },
                { number: "4+", label: "HO's disponiveis na aliança" },
                { number: "2+", label: "Anos de Experiência" },
                { number: "24/7", label: "Atividade Online" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 text-center group"
                >
                  <div className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-300 text-lg font-medium group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contato"
        className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-500/20 bg-slate-950/90 backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Logo Heróis da Treta"
            width={32}
            height={32}
            className="drop-shadow-lg"
          />
          <p className="text-sm text-slate-400">
            © 2024 Heróis da Treta. Guild oficial de Albion Online.
          </p>
        </div>
        <nav className="sm:ml-auto flex gap-6 sm:gap-8">
          {[
            { name: "Discord", href: "https://discord.gg/cYCH76ew" },
            { name: "Regras da Guild", href: "#regras" },
            { name: "Albion Online", href: "#" },
          ].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm hover:underline underline-offset-4 text-slate-400 hover:text-amber-400 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </footer>
    </div>
  );
}
