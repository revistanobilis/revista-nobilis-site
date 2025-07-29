
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function RevistaNobilis() {
  return (
    <div className="min-h-screen bg-[#0f1c16] text-white">
      {/* Header */}
      <header className="text-center py-10 border-b border-green-900">
        <h1 className="text-5xl font-serif text-[#d4af37]">Revista Nobilis</h1>
        <p className="text-lg mt-2 text-green-200">Conteúdo de prestígio para empresários e contadores</p>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Conectando mentes nobres</h2>
        <p className="text-lg text-green-100 mb-6">
          A Revista Nobilis é um elo entre líderes, empresários e contadores que constroem o futuro com inteligência, valores e visão.
        </p>
        <Button className="bg-[#d4af37] text-black font-semibold hover:bg-yellow-500">Leia a última edição</Button>
      </section>

      {/* Sobre a Revista */}
      <section className="bg-[#13241c] py-14 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-[#d4af37] mb-4">Sobre a Nobilis</h3>
          <p className="text-green-100">
            Criada para valorizar o conhecimento, a Revista Nobilis reúne conteúdo exclusivo, entrevistas com empresários de sucesso,
            insights para contadores e matérias sobre inovação, negócios e liderança. Um espaço de conexão e prestígio.
          </p>
        </div>
      </section>

      {/* Seções da Revista */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <Card className="bg-[#1b2e26] border-green-800">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-[#d4af37] mb-2">Artigos & Entrevistas</h4>
              <p className="text-green-100">Conteúdo de alto nível com especialistas, líderes e personalidades do mundo dos negócios.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1b2e26] border-green-800">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-[#d4af37] mb-2">Edições Digitais</h4>
              <p className="text-green-100">Leia todas as edições da revista online, com navegação moderna e elegante.</p>
            </CardContent>
          </Card>
          <Card className="bg-[#1b2e26] border-green-800">
            <CardContent className="p-6">
              <h4 className="text-xl font-bold text-[#d4af37] mb-2">Seja um Colunista</h4>
              <p className="text-green-100">Participe como colaborador e compartilhe sua visão com leitores qualificados.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contato */}
      <section className="bg-[#13241c] py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-serif text-[#d4af37] mb-4">Fale com a Nobilis</h3>
          <p className="text-green-100 mb-6">Quer ser parceiro, colunista ou anunciar na revista? Entre em contato conosco.</p>
          <Button className="bg-[#d4af37] text-black font-semibold hover:bg-yellow-500">Fale via WhatsApp</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-green-900 text-green-400">
        © 2025 Revista Nobilis. Todos os direitos reservados.
      </footer>
    </div>
  );
}
