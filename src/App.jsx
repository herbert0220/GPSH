export default function WingExpandableSolarHouseWebsite() {
  const products = [
    {
      name: '20呎｜入門款',
      desc: '適合個人居住、工地宿舍與臨時辦公空間',
      size: '20ft',
    },
    {
      name: '30呎｜主力款',
      desc: '民宿與小家庭最佳配置',
      size: '30ft',
    },
    {
      name: '40呎｜投資款',
      desc: '三房雙衛、高報酬收租型產品',
      size: '40ft',
    },
  ]

  const features = [
    '翼展式可擴充結構',
    '碳鋼方柱高強度骨架',
    '太陽能整合系統',
    '智慧能源控制',
    '離網供電能力',
    '快速部署',
    '模組化量產',
    'ESG綠能住宅',
  ]

  const options = [
    '落地窗',
    '乾濕分離浴室',
    '石墨烯地暖',
    '太陽能系統',
    '儲能電池',
    '離網系統',
    '玻璃帷幕',
    '露台',
  ]

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-90" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-zinc-700 text-sm mb-6">
              Solar Expandable Smart House
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              翼展太陽能
              <br />
              智能屋
            </h1>

            <p className="text-zinc-400 text-xl leading-relaxed mb-10">
              可展開式能源型智能移動住宅系統
              <br />
              結合翼展結構、太陽能、儲能與智慧能源管理。
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                開始客製配置
              </button>

              <button className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
                查看投資方案
              </button>
            </div>
          </div>

          <div>
            <img
              src="/images/patent-drawing.png"
              alt="Wing Expandable Smart House"
              className="rounded-3xl shadow-2xl border border-zinc-800"
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">核心技術</h2>
          <p className="text-zinc-400 text-lg">
            模組化鋼構 × 太陽能 × 智能控制 × 可移動資產
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">產品系列</h2>
            <p className="text-zinc-400 text-lg">
              從個人住宅到投資型資產，完整模組化產品線。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition"
              >
                <div className="h-56 bg-zinc-900 flex items-center justify-center text-6xl">
                  🏠
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>

                  <p className="text-zinc-400 leading-relaxed mb-8">
                    {product.desc}
                  </p>

                  <button className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-105 transition">
                    查看配置
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">3D互動選配系統</h2>
          <p className="text-zinc-400 text-lg">
            即時配置、即時報價、即時產生投資方案。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">選配項目</h3>

            <div className="space-y-4">
              {options.map((option, index) => (
                <label
                  key={index}
                  className="flex items-center justify-between border border-zinc-800 rounded-2xl p-4 hover:border-green-500 transition cursor-pointer"
                >
                  <span>{option}</span>
                  <input type="checkbox" className="w-5 h-5" />
                </label>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8">即時報價</h3>

              <div className="space-y-6">
                <div className="flex justify-between text-zinc-400">
                  <span>基礎價格</span>
                  <span>NT$ 520,000</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>太陽能系統</span>
                  <span>NT$ 220,000</span>
                </div>

                <div className="flex justify-between text-zinc-400">
                  <span>儲能系統</span>
                  <span>NT$ 180,000</span>
                </div>

                <div className="border-t border-zinc-800 pt-6 flex justify-between text-2xl font-bold">
                  <span>總價</span>
                  <span>NT$ 920,000</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mt-10">
              <button className="w-full bg-green-500 text-black py-4 rounded-2xl font-bold hover:scale-105 transition">
                產生專屬報價 PDF
              </button>

              <button className="w-full border border-zinc-700 py-4 rounded-2xl hover:bg-zinc-800 transition">
                加入 LINE 顧問
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PATENT */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              專利技術
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>
                本系統採用碳鋼方柱模組化結構，整合翼展機構、太陽能模組與智能能源控制系統。
              </p>

              <p>
                可作為住宅、民宿、移動辦公、工地宿舍與離網能源系統。
              </p>

              <p>
                已規劃：
                新型專利、發明專利與外觀設計專利。
              </p>
            </div>
          </div>

          <div>
            <img
              src="/images/structure-frame.png"
              alt="Carbon Steel Structure"
              className="rounded-3xl border border-zinc-800"
            />
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">
            可移動的能源型資產
          </h2>

          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            不只是貨櫃屋。
            <br />
            而是結合發電、儲能、智慧能源與投資回報的 ESG 綠能住宅平台。
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4">2年</div>
              <p className="text-zinc-400 text-sm">預估投資回報期</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4">25%</div>
              <p className="text-zinc-400 text-sm">年化節能與收益率</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4">100%</div>
              <p className="text-zinc-400 text-sm">綠電自給自足率</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
