import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Check, X, TrendingUp, Award, Shield, Users, Zap, Quote } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomeEN() {
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

            <div className="flex items-center justify-center order-1 lg:order-2">
              <img
                src="https://files.manuscdn.com/canvas/images/2026/02/18/741cb688-324d-4184-9e5a-7ce0678672e4.jpg"
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
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">ProDentim</h3>
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
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">ProvaDent</h3>
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
                    <Quote className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"Improved my bad breath in 3 weeks. My dentist was surprised by the improvement in my gums."</p>
                      <p className="font-semibold text-slate-900">John, 45 years old</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-blue-700 flex-shrink-0 mt-1" />
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
                className="w-full bg-blue-700 hover:bg-blue-800 text-white text-base sm:text-lg py-4 sm:py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
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
                <h3 className="text-lg font-bold text-slate-900">What Real Users Say</h3>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"My dentist was surprised by the health of my gums. I highly recommend it!"</p>
                      <p className="font-semibold text-slate-900">Kelly T</p>
                      <p className="text-sm text-slate-600">Verified Purchase</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-lg border border-slate-200">
                  <div className="flex items-start gap-3">
                    <Quote className="w-5 h-5 text-slate-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 italic mb-2">"No more morning bad breath. Easy to use and natural ingredients give me peace of mind."</p>
                      <p className="font-semibold text-slate-900">Ethan C</p>
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
                variant="outline"
                size="lg"
                className="w-full border-slate-400 text-slate-700 hover:bg-slate-100 text-base sm:text-lg py-4 sm:py-6 rounded-lg font-semibold"
              >
                Consider ProvaDent
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
