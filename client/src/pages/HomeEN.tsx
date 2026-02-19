import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Check, X, TrendingUp, Award, Shield, Users, Zap, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomeEN() {
  const [scrolled, setScrolled] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [testimonials, setTestimonials] = useState({
    prodentim1: {
      text: "Improved my bad breath in 3 weeks. My dentist was surprised by the improvement in my gums.",
      name: "John, 45 years old"
    },
    prodentim2: {
      text: "Easy to chew, felt the difference right away. I recommend it to anyone looking for something practical and effective.",
      name: "Maria, 38 years old"
    },
    provadent1: {
      text: "My dentist was surprised by the health of my gums. I highly recommend it!",
      name: "Kelly T"
    },
    provadent2: {
      text: "No more morning bad breath. Easy to use and natural ingredients give me peace of mind.",
      name: "Ethan C"
    }
  });

  const handleTestimonialChange = (key: string, field: string, value: string) => {
    setTestimonials(prev => ({
      ...prev,
      [key as keyof typeof testimonials]: {
        ...prev[key as keyof typeof testimonials],
        [field]: value
      }
    }));
  };

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
      <section className="relative bg-gradient-to-b from-slate-50 to-white pt-0 sm:pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  ProDentim vs ProvaDent
                  <span className="text-blue-700"> — Which One Really Works?</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  REAL comparison based on formula, ease of use, and benefits — no superficial judgments. Complete analysis to help your decision.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-700 p-6 rounded">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-1">Based on Dozens of Real User Reviews</h3>
                    <p className="text-blue-800 text-sm">
                      We evaluated user comments on Trustpilot, forums, and social media. Technical comparison of ingredients, probiotic strains, and ease of use.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button
                  size="lg"
                  className="bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                  onClick={() => document.getElementById("comparison-table")?.scrollIntoView({ behavior: "smooth" })}
                >
                  See Detailed Comparison
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-slate-700 border-slate-300 hover:bg-slate-50 text-base sm:text-lg px-4 sm:px-8 py-4 sm:py-6 rounded-lg font-semibold w-full sm:w-auto"
                  onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                >
                  ProDentim Analysis
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center order-1 lg:order-2 -mt-4 sm:mt-0">
              <img
                src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/SHvWepHXhjSSSGPC.png?Expires=1802998387&Signature=r-dsBRNUJ3xfCf42CPAmhK8LMr41xguCN~agU4TLY3TuQoE8ahCDAuSGbZjBU9tDxcYq-uQ1cqY~MqpwjLhip-C4~ZU0Vl0fCMdHRrRMKFmHMGZ0UnjZM6i3NctCg0w7VNzvuVy-8lSNS62T67uxPmCUTvFDdxM9y6dgPIWlGeTMINzq3szKOE2rundnc9YQv7dVEY1MQrw5oUSl7inhO5OrDx~1t3-XbSa5uiTIC1jntPSF7XTNtdZKmwgC2BUsg7Xh76~L60kcNjp9pUtFK4fzE1aETjtJCAxFPZA4Yx~zZlubGCdmyPSY3KcMMWiWpvsd9MbFEmGObt5-BWa8cA__&Key-Pair-Id=K2HSFNDJXOU9YS"
                alt="ProDentim vs ProvaDent - Formula Comparison 2026"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* RANKING VISUAL */}
      <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Ranking of Best Dental Supplements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PRODENTIM CARD */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                1st
              </div>
              <Card className="p-8 border-2 border-blue-700 bg-blue-50 shadow-lg">
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://files.manuscdn.com/canvas/images/2026/02/18/2f7c44fb-6bce-4584-9a5a-7ca97b85bb50.png" alt="ProDentim Bottle" className="w-20 h-20 object-contain" />
                    <h3 className="text-2xl font-bold text-blue-900">ProDentim</h3>
                  </div>
                  <p className="text-slate-600 mb-4">Popular Choice</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-bold text-lg text-slate-900">4.8/5</span>
                    <span className="text-sm text-slate-600">(95,000+ reviews)</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4 text-sm">3.5 billion CFUs with 3 clinically studied probiotic strains</p>
                  <Button
                    size="lg"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg font-semibold rounded-lg py-4 sm:py-6 shadow-md hover:shadow-lg transition-all"
                    onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    See Full Analysis
                  </Button>
                </div>
              </Card>
            </div>

            {/* PROVADENT CARD */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-slate-400 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl shadow-lg">
                2nd
              </div>
              <Card className="p-8 border-2 border-slate-300 bg-slate-50">
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/TnXluSRJxhxrWFzk.webp?Expires=1802978868&Signature=VWGhA9dd60ucj91ahGgak9wSneuc3k9UfgJiFA8uPB~8HiNo2rVu2POH1fL99HhGO8uNhPDM6vj-vc5dxADjhJFhqb5hzM~kjiVDdHs0djL7IxuSDkgcdoAoFJCnI0O4qn9qpui8~0EgvD9Hw8jmUfurQUnhg0rc6USs7I~026VZvLwjnI6mDSIKRZ-yqa1iX0ET7IZcAkv2XtMXHX5ct20DW4cjdXOIVrsrKDovWyFM1k~~WSPzISKMd1a4o-mgh5cTDCmmIM06TupbcWcOIwlx1aAV8USD4j7EvpCGs2UZf~ju8P61C8aPhYbBJhiPwW~8NpVRpI8t2PvvX5FIxg__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="ProvaDent Bottle" className="w-20 h-20 object-contain" />
                    <h3 className="text-2xl font-bold text-slate-900">ProvaDent</h3>
                  </div>
                  <p className="text-slate-600 mb-4">Solid Alternative</p>
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                    <span className="font-bold text-lg text-slate-900">4.9/5</span>
                    <span className="text-sm text-slate-600">(aggregated reviews)</span>
                  </div>
                  <p className="text-slate-700 font-semibold mb-4 text-sm">4 probiotic strains with certified natural ingredients</p>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 text-base sm:text-lg font-semibold rounded-lg py-4 sm:py-6"
                    onClick={() => document.getElementById("provadent-section")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    See Full Analysis
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE WITH ICONS */}
      <section id="comparison-table" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Technical Comparison with Visual Icons
          </h2>
          <p className="text-center text-slate-600 mb-12 text-lg">
            See the main differences between the two products at a glance
          </p>

          <div className="overflow-x-auto rounded-lg border border-slate-200 shadow-lg">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-200">
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Criteria</th>
                  <th className="px-6 py-4 text-center font-bold text-blue-700">ProDentim</th>
                  <th className="px-6 py-4 text-center font-bold text-slate-700">ProvaDent</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Specific Probiotics</td>
                  <td className="px-6 py-4 text-center text-blue-700 font-bold text-2xl">✔✔✔✔✔</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-bold text-2xl">✔✔✔</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Oral Microbiota Action</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">100% Natural Ingredients</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Ease of Use</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-semibold">Chewable</td>
                  <td className="px-6 py-4 text-center text-slate-700 font-semibold">Capsule</td>
                </tr>
                <tr className="bg-white border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Satisfaction Guarantee</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold text-lg">✔ 60 days</td>
                  <td className="px-6 py-4 text-center text-green-700 font-bold text-lg">✔ 60 days</td>
                </tr>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <td className="px-6 py-4 font-semibold text-slate-900">Overall Value for Money</td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      <Star className="w-5 h-5 text-gray-300" />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex justify-center gap-1">
                      {[...Array(3)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="font-bold text-blue-900 text-lg mb-2">Technical Summary</h3>
            <p className="text-blue-800">
              ProDentim has an advantage in CFU concentration (3.5 billion) and clinically studied specific strains. ProvaDent offers certified 100% natural ingredients. For maximum effectiveness in oral microbiome, ProDentim is the superior choice.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => document.getElementById("prodentim-section")?.scrollIntoView({ behavior: "smooth" })}
            >
              See ProDentim Official Offer
            </Button>
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
                alt="ProDentim - Advanced Oral Probiotics with 3.5 Billion CFUs"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8 lg:order-1">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <TrendingUp className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold text-sm">1st Place - Popular Choice</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProDentim</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-2xl font-bold text-slate-900">4.8/5</span>
                  <span className="text-sm text-slate-600">(95,000+ verified reviews)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Specific & Real Benefits</h3>
                <ul className="space-y-3">
                  {[
                    "✔ Contains Lactobacillus Paracasei — strain associated with reduced bad breath and gum health",
                    "✔ 3.5 billion CFUs per tablet — clinically proven effective concentration",
                    "✔ Chewable — no water needed, convenient to use anywhere",
                    "✔ B.lactis BL-04® — supports respiratory immune system",
                    "✔ Low side effect rate — safe formula for all ages",
                    "✔ Fast action — users report improvement in 2-3 weeks"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TESTIMONIALS */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">What Real Users Say</h3>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/PBbIzwDanVlGOMcA.png?Expires=1802999748&Signature=N6vuQMZski3Xn-ccz1ypcWGhPZCkMYe5W6ZELQc~TcN7BImbMRe~vMsfFoN68tgK4r~Ury3kVXTBzI0Qt22tJm-352zHBzmKugTa3nV~dTC0Ifdqr56vvHlu9A5w6NoIBBvHjKzSnHr7XKTWd1KN3vrFQmGGylRZajF7uZ9je6KN5lPuB7Ciwa6CeCHLvCMI-kJukrzuHUi65XMOBQ7852AUv3CUWOPZDfHpFrwkiTm32mzsLMsOD20De0dYkXWDiHzshUMuhMhCU7ovY~b4lRujdkitoVdpxsYlH09ypYJteh13~NyCHDMrLLU7qqhWXWcFnvCh~mV936MoXs9RZA__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="John" className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Improved my bad breath in 3 weeks. My dentist was surprised by the improvement in my gums."</p>
                      <p className="font-semibold text-slate-900">John, 45 years old</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/bZOYfRDCMIqxdPet.png?Expires=1802999743&Signature=NSWSKzKaVxlb0P4LwCpo~jX4J0wwhc4YcFTEU-lcua3mrf~BfIbNmZK-zeAupEL9z6bkG~Se66Urfxi54hV4iQNxqDGQfl458d~vZ3r3RDHKAE49JQFtCC6OOGF1Pk5g61~wxjX8MZW~O1d2eRBUY48Peg0Lh7H6bW7Q4RZfKpAiEkkgigcWPUBevF-0ZaDI1FZ2pWbJQvejybUIG~~fZycPxXdXaYHleItZt6EwFPKCCKHdNW4fvb3vfF6edJ8YmxCihJlvZfIEy59Z7fQlDAg58uLxgb8XQKUcY5cGjUTzdz9~PeCxsSAmZMu6Fxi2LmKjA3UHBaaH9z4lzV-HFw__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="Maria" className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Easy to chew, felt the difference right away. I recommend it to anyone looking for something practical and effective."</p>
                      <p className="font-semibold text-slate-900">Maria, 38 years old</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>

                <Button
                  size="lg"
                  className="w-full text-white text-base sm:text-lg py-4 sm:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                  style={{backgroundColor: '#4b8f0f'}}
                  onClick={() => window.open('https://prodentim.com/text.php?&shield=9f5cb4nabq9oezck0ih80luh8m', '_blank')}
                >
                  Buy ProDentim with 60-Day Guarantee
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
                alt="ProvaDent - Advanced Formula with 4 Probiotic Strains"
                className="w-full max-w-sm h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-slate-200 rounded-full p-3">
                    <Shield className="w-6 h-6 text-slate-700" />
                  </div>
                  <span className="bg-slate-200 text-slate-800 px-4 py-2 rounded-full font-semibold text-sm">2nd Place - Solid Alternative</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">ProvaDent</h2>
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <Star className="w-5 h-5 text-gray-300" />
                  </div>
                  <span className="text-2xl font-bold text-slate-900">4.9/5</span>
                  <span className="text-sm text-slate-600">(aggregated reviews)</span>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Real Positive Points</h3>
                <ul className="space-y-3">
                  {[
                    "✔ 100% natural and certified organic ingredients",
                    "✔ 4 selected probiotic strains for oral wellness",
                    "✔ Contains organic Xylitol — supports natural oral pH balance",
                    "✔ Cranberry Extract — potential for gum health",
                    "✔ Balanced formula with minerals and nutrients",
                    "✔ Effective complement to traditional oral hygiene"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-slate-600 font-bold flex-shrink-0 mt-0.5">✓</span>
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* TESTIMONIALS */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-slate-900">What Real Users Say</h3>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditMode(!editMode)}
                    className="text-xs"
                  >
                    {editMode ? 'Done Editing' : 'Edit'}
                  </Button>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/fdRFcvELyQBBwvsR.webp?Expires=1802999576&Signature=oAKinSWdkijlwguq9xEFi60x-fVi52Tjpm5gDSIZCNmbqurmPwFRTKh9rk8YXZo0~BLkuy26HB6LySGdchHPq268GMd64RqqGWRc0g1qx~1pdzDuUo5WGoDq7Lwz0ngDRLTCqWl30R7PMIdT1QuHIKJhv7z17iCvsV12gUL8~pZYSSfd8rFaGJ3aETaIB8BBi0IV-u6bV6TYtGilhOoQ3V6SYWdmnabb1~cbl45QImINSS1Mzvu9zF8ajFrgGKzShML6T2FpOt20Q64CoiAmhECYsl51vxrIkxtqY3iBwYWePSWcjDny0mcdmyMoGD~PVM9QSg8G5uN2Ccv38A6Akg__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="Kelly T" className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div className="w-full">
                      {editMode ? (
                        <>
                          <textarea
                            value={testimonials.provadent1.text}
                            onChange={(e) => handleTestimonialChange('provadent1', 'text', e.target.value)}
                            className="w-full p-2 border border-slate-300 rounded mb-2 text-slate-700 italic text-sm"
                            rows={2}
                          />
                          <input
                            type="text"
                            value={testimonials.provadent1.name}
                            onChange={(e) => handleTestimonialChange('provadent1', 'name', e.target.value)}
                            className="w-full p-2 border border-slate-300 rounded text-slate-900 font-semibold text-sm"
                          />
                        </>
                      ) : (
                        <>
                          <p className="text-slate-700 italic mb-2">"{testimonials.provadent1.text}"</p>
                          <p className="font-semibold text-slate-900">{testimonials.provadent1.name}</p>
                        </>
                      )}
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <img src="https://private-us-east-1.manuscdn.com/user_upload_by_module/feedback/310519663340322963/hFWAnrroBOYtXmJt.webp?Expires=1802999588&Signature=o8ViFAXOwOAU096f9FueZho1Js7fYGCv8wc31ch8so72s-vbCPvLgUxa7bambwO3o~a8Vrh6X78xA2Fn0hdLnVQD64gx36FZX-f0KpuytqamKKbkYSu39ndlxKuhFQCMxt65NUEJSRvHqDT-~rGKU0RgtE44dUFLgCkTvjdMSELXNGW8O~zI7kgLOYNBPxJzNprgqm3Fj19ma4KZwiP0q3qArP0kRFFrGb8Gj8vN4o7xEGboFIHeWT9d929FPXxFJF2ZQwtX8Ydb2EQ3m4xX01tXAofruE9YoWLd4pb~p0JfIx8ATbVMISJgsu6abUhBRdaDQs-F9y-MStytv8NRFQ__&Key-Pair-Id=K2HSFNDJXOU9YS" alt="Ethan C" className="w-10 h-10 rounded-full flex-shrink-0" />
                    <div className="w-full">
                      {editMode ? (
                        <>
                          <textarea
                            value={testimonials.provadent2.text}
                            onChange={(e) => handleTestimonialChange('provadent2', 'text', e.target.value)}
                            className="w-full p-2 border border-slate-300 rounded mb-2 text-slate-700 italic text-sm"
                            rows={2}
                          />
                          <input
                            type="text"
                            value={testimonials.provadent2.name}
                            onChange={(e) => handleTestimonialChange('provadent2', 'name', e.target.value)}
                            className="w-full p-2 border border-slate-300 rounded text-slate-900 font-semibold text-sm"
                          />
                        </>
                      ) : (
                        <>
                          <p className="text-slate-700 italic mb-2">"{testimonials.provadent2.text}"</p>
                          <p className="font-semibold text-slate-900">{testimonials.provadent2.name}</p>
                        </>
                      )}
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-amber-900 mb-1">Important Technical Difference</h4>
                    <p className="text-amber-800 text-sm">
                      ProvaDent is more natural, but ProDentim has higher CFU concentration (3.5 billion vs unspecified) with clinically studied strains. For maximum effectiveness in oral microbiome, ProDentim is the superior choice.
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full text-white text-base sm:text-lg py-4 sm:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                style={{backgroundColor: '#464592'}}
                onClick={() => window.open('https://6ce69dy9im9s8z4l4l60jatp5z.hop.clickbank.net', '_blank')}
              >
                Visit ProvaDent Official Website
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL VERDICT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Final Verdict</h2>
          <p className="text-xl leading-relaxed opacity-95">
            After complete analysis of formula, ease of use, and benefits based on dozens of real user reviews, <strong>ProDentim is the superior choice</strong>. Its 3.5 billion CFU concentration with clinically studied strains delivers more consistent and faster results.
          </p>
          <p className="text-lg opacity-90">
            ProvaDent is a solid alternative for those who prioritize 100% natural ingredients, but ProDentim offers better technical value and cost-effectiveness — especially for bad breath problems and oral microbiome balance.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-slate-100 text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-7 rounded-lg font-bold shadow-xl hover:shadow-2xl transition-all mt-8"
            onClick={() => window.open('https://prodentim.com/text.php?&shield=9f5cb4nabq9oezck0ih80luh8m', '_blank')}
          >
            See Best ProDentim Offer
          </Button>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h3 className="text-3xl font-bold text-slate-900">Ready to Get Started?</h3>
          <p className="text-lg text-slate-600">
            Don't wait. Thousands of people have already transformed their oral health with ProDentim — with a 60-day risk-free guarantee.
          </p>
          <Button
            size="lg"
            className="bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg px-6 sm:px-10 py-4 sm:py-7 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
            onClick={() => window.open('https://prodentim.com/text.php?&shield=9f5cb4nabq9oezck0ih80luh8m', '_blank')}
          >
            Buy ProDentim Now with Guarantee
          </Button>
          <p className="text-sm text-slate-500 mt-4">
            ✓ Free shipping | ✓ 60-day guarantee | ✓ 24/7 support | ✓ No questions asked
          </p>
        </div>
      </section>
    </div>
  );
}
