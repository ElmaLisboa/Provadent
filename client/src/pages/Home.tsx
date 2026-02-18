import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Check, X, TrendingUp, Award, Shield } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Antes de Comprar ProDentim ou ProvaDent,
                  <span className="text-blue-700"> Veja Esta Analise</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Comparacao imparcial e detalhada dos dois suplementos dentais mais procurados.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Ver Analise ProDentim
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-slate-700 border-slate-300 hover:bg-slate-50 text-lg px-8 py-6 rounded-lg font-semibold"
                  onClick={() => document.getElementById("comparison-table")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Comparar Agora
                </Button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
                <div className="flex items-start gap-4">
                  <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">Resultado da Analise</h3>
                    <p className="text-green-800 mt-2">
                      <strong>ProDentim e a escolha superior</strong> com formula inovadora de 3.5 bilhoes de probioticos.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/OSTZLMBzOpDHs4GY0kUCpT/sandbox/cNJAJvA8WfLUdDl9CHEVTb-img-1_1771439875000_na1fn_aGVyby1kZW50YWwtY29tcGFyaXNvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80"
                alt="Comparacao de suplementos dentais"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RANKING VISUAL */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Ranking dos Melhores Suplementos Dentais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                1
              </div>
              <Card className="p-8 border-2 border-blue-700 bg-blue-50 shadow-lg">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">ProDentim</h3>
                  <p className="text-slate-600 mb-4">Escolha do Editor</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-lg text-slate-900">9.7/10</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4">Formula Inovadora com 3.5 Bilhoes de Probioticos</p>
                  <Button
                    size="lg"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg py-6"
                    onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-slate-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                2
              </div>
              <Card className="p-8 border-2 border-slate-300 bg-slate-50">
                <div className="pt-4">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ProvaDent</h3>
                  <p className="text-slate-600 mb-4">Alternativa Solida</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="font-bold text-lg text-slate-900">8.9/10</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4">Nutrientes Minerais e Ingredientes Naturais</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 font-semibold rounded-lg py-6"
                    onClick={() => document.getElementById("provadent-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Saiba Mais
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* PRODENTIM SECTION */}
      <section id="prodentim-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center lg:order-2">
              <img
                src="https://files.manuscdn.com/canvas/images/2026/02/18/2f7c44fb-6bce-4584-9a5a-7ca97b85bb50.png"
                alt="ProDentim - Probioticos Orais Avancados"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">1o Lugar - Escolha do Editor</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProDentim</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-slate-900">9.7/10</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
                <h3 className="font-bold text-blue-900 text-lg mb-2">Diferencial Principal</h3>
                <p className="text-blue-800">
                  Abordagem unica focada em restaurar a flora bucal com probioticos clinicamente estudados.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Beneficios Principais</h3>
                <ul className="space-y-3">
                  {[
                    "Repovoa a boca com bacterias beneficas (3.5 bilhoes de probioticos)",
                    "Melhora significativa na saude das gengivas e dentes",
                    "Halito fresco duradouro e natural",
                    "Suporte ao sistema imunologico e respiratorio",
                    "Formula com ingredientes clinicamente estudados",
                    "Facil de usar - apenas 1 comprimido por dia"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Para Quem E Indicado</h3>
                <p className="text-slate-700 leading-relaxed">
                  ProDentim e ideal para quem busca uma solucao inovadora e completa para saude bucal. Especialmente recomendado para pessoas com historico de problemas gengivais ou que desejam uma abordagem mais natural e cientifica.
                </p>
              </div>

              <Button
                size="lg"
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Escolher ProDentim Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PROVADENT SECTION */}
      <section id="provadent-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/TnXluSRJxhxrWFzk.webp?Expires=1802978868&Signature=VWGhA9dd60ucj91ahGgak9wSneuc3k9UfgJiFA8uPB~8HiNo2rVu2POH1fL99HhGO8uNhPDM6vj-vc5dxADjhJFhqb5hzM~kjiVDdHs0djL7IxuSDkgcdoAoFJCnI0O4qn9qpui8~0EgvD9Hw8jmUfurQUnhg0rc6USs7I~026VZvLwjnI6mDSIKRZ-yqa1iX0ET7IZcAkv2XtMXHX5ct20DW4cjdXOIVrsrKDovWyFM1k~~WSPzISKMd1a4o-mgh5cTDCmmIM06TupbcWcOIwlx1aAV8USD4j7EvpCGs2UZf~ju8P61C8aPhYbBJhiPwW~8NpVRpI8t2PvvX5FIxg__&Key-Pair-Id=K2HSFNDJXOU9YS"
                alt="ProvaDent - Formula Avancada de Saude Oral"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-200 rounded-full p-3">
                    <Shield className="w-6 h-6 text-slate-700" />
                  </div>
                  <span className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full font-semibold text-sm">2o Lugar - Alternativa Solida</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProvaDent</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">8.9/10</span>
                </div>
              </div>

              <div className="bg-slate-100 border-l-4 border-slate-400 p-6 rounded">
                <h3 className="font-bold text-slate-900 text-lg mb-2">Abordagem Diferente</h3>
                <p className="text-slate-700">
                  Foca em nutrientes minerais e ingredientes naturais para fortalecer o esmalte e gengivas.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Pontos Positivos</h3>
                <ul className="space-y-3">
                  {[
                    "Ingredientes 100% naturais e organicos",
                    "Suporte mineral para fortalecimento do esmalte",
                    "Halito fresco com xilitol organico",
                    "Formula equilibrada com multiplos beneficios",
                    "Boa relacao custo-beneficio",
                    "Complemento eficaz para higiene tradicional"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <X className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Limitacao Comparativa</h4>
                    <p className="text-amber-800 text-sm">
                      Foca mais em nutrientes tradicionais e menos na colonizacao massiva de probioticos especificos que o ProDentim oferece.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                variant="outline"
                size="lg"
                className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 text-lg py-6 rounded-lg font-semibold"
              >
                Considerar ProvaDent
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Comparacao Detalhada
          </h2>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Criterio</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">ProDentim</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-700">ProvaDent</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { criterion: "Nota Geral", prodentim: "9.7/10", provadent: "8.9/10" },
                  { criterion: "Tipo de Formula", prodentim: "Probioticos (3.5B)", provadent: "Nutrientes Minerais" },
                  { criterion: "Ingredientes Naturais", prodentim: "Sim", provadent: "Sim (Organicos)" },
                  { criterion: "Saude das Gengivas", prodentim: "Excelente", provadent: "Muito Bom" },
                  { criterion: "Halito Fresco", prodentim: "Excelente", provadent: "Muito Bom" },
                  { criterion: "Facilidade de Uso", prodentim: "1 comprimido/dia", provadent: "Variavel" },
                  { criterion: "Inovacao", prodentim: "Abordagem Unica", provadent: "Tradicional" },
                  { criterion: "Custo-Beneficio", prodentim: "Excelente", provadent: "Muito Bom" },
                  { criterion: "Recomendacao Geral", prodentim: "Altamente Recomendado", provadent: "Bom Complemento" }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"} >
                    <td className="px-6 py-4 font-semibold text-slate-900 border-b border-slate-200">{row.criterion}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200 border-l border-slate-200 bg-blue-50">{row.prodentim}</td>
                    <td className="px-6 py-4 text-center text-slate-700 border-b border-slate-200 border-l border-slate-200">{row.provadent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Veredito Final</h2>
          <p className="text-xl leading-relaxed opacity-95">
            Apos analise completa de ingredientes, beneficios, inovacao e relacao custo-beneficio, <strong>ProDentim emerge como a escolha superior</strong>. Sua formula inovadora com 3.5 bilhoes de probioticos oferece uma abordagem unica e cientifica para saude bucal.
          </p>
          <p className="text-lg opacity-90">
            Enquanto ProvaDent e uma alternativa solida com ingredientes naturais, ProDentim proporciona resultados mais consistentes e completos para quem busca transformacao real na saude oral.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 text-lg px-10 py-7 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all mt-8"
          >
            Escolher ProDentim - A Melhor Opcao
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Pronto para Comecar?</h3>
          <p className="text-lg text-slate-600">
            Nao deixe para depois. Milhares de pessoas ja transformaram sua saude bucal com ProDentim.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white text-lg px-10 py-7 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Comprar ProDentim Agora
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            Frete gratis | Garantia de satisfacao | Suporte ao cliente 24/7
          </p>
        </div>
      </section>
    </div>
  );
}
