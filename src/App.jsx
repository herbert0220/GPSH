```jsx
import { useState } from 'react'
import './index.css'

export default function App() {

  /* =========================
     PRODUCT DATA
  ========================== */

  const products = [
    {
      name: '20呎｜入門款',
      desc: '適合個人居住、工地宿舍與臨時辦公空間',
      size: '20ft',
      price: 'NT$ 350,000 起',
    },
    {
      name: '30呎｜主力款',
      desc: '民宿與小家庭最佳配置',
      size: '30ft',
      price: 'NT$ 680,000 起',
    },
    {
      name: '40呎｜投資款',
      desc: '三房雙衛、高報酬收租型產品',
      size: '40ft',
      price: 'NT$ 1,280,000 起',
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

  const optionList = [
    { id: 'glass', name: '落地玻璃門隔音窗', price: 45000 },
    { id: 'bathroom', name: '乾濕分離浴室', price: 65000 },
    { id: 'floor', name: '石墨烯地暖', price: 38000 },
    { id: 'solar', name: '太陽能系統', price: 220000 },
    { id: 'battery', name: '儲能電池', price: 180000 },
    { id: 'offgrid', name: '離網系統', price: 120000 },
    { id: 'curtain', name: '玻璃帷幕', price: 95000 },
    { id: 'terrace', name: '露台', price: 50000 },
  ]

  /* =========================
     STATE
  ========================== */

  const basePrice = 350000
  const [selectedOptions, setSelectedOptions] = useState({})

  const lineUrl = 'https://lin.ee/uNjqsw8'

  /* =========================
     FUNCTIONS
  ========================== */

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const optionsPrice = optionList.reduce((sum, opt) => {
    return sum + (selectedOptions[opt.id] ? opt.price : 0)
  }, 0)

  const totalPrice = basePrice + optionsPrice

  const selectedNames = optionList
    .filter((opt) => selectedOptions[opt.id])
    .map((opt) => opt.name)
    .join('、')

  const handlePdfExport = () => {
    const content = `
GPSH 智慧翼展屋 專屬報價

----------------------------

選配內容：
${selectedNames || '無'}

總價：
NT$ ${totalPrice.toLocaleString()}

請截圖或聯繫 LINE 顧問取得正式 PDF。
    `

    alert(content)
  }

  /* =========================
     JSX
  ========================== */

  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* ================= HEADER ================= */}

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="text-2xl font-black tracking-widest">
            GPSH
            <span className="text-green-500 ml-2">
              SMART HOUSE
            </span>
          </div>

          <div className="hidden md:flex gap-8 text-sm text-zinc-400">
            <a href="#products" className="hover:text-white transition">
              產品
            </a>

            <a href="#configurator" className="hover:text-white transition">
              客製配置
            </a>

            <a href="#investment" className="hover:text-white transition">
              投資方案
            </a>

            <a href={lineUrl} target="_blank">
              <button className="bg-green-500 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition">
                LINE 顧問
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}

      <section className="relative border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-black to-black" />

        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-20 items-center relative z-10">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center px-4 py-1 border border-green-500/30 rounded-full text-green-400 text-sm mb-8">
              EXPANDABLE SOLAR SMART HOUSE
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              翼展太陽能
              <br />
              <span className="text-green-500">
                智能屋
              </span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              可展開式能源型智能移動住宅系統，
              結合翼展結構、太陽能、儲能與 AI 智慧能源管理。
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#configurator"
                className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
              >
                開始客製配置
              </a>

              <a
                href="#investment"
                className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
              >
                投資方案
              </a>

            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-4 mt-14">

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">
                  OFF
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  GRID SYSTEM
                </div>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">
                  ESG
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  GREEN ENERGY
                </div>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">
                  AI
                </div>
                <div className="text-xs text-zinc-500 mt-1">
                  ENERGY CONTROL
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute inset-0 blur-3xl bg-green-500/10" />

            <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">

              <img
                src="/house-main.png"
                alt="GPSH SMART HOUSE"
                className="w-full h-full object-cover"
              />

            </div>
          </div>

        </div>
      </section>

      {/* ================= VIDEO ================= */}

      <section className="border-b border-zinc-900">

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-black mb-8">
              工廠製造
              <br />
              到現場部署
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed">

              <p>
                全程於模組化工廠精密製造，
                出廠前完成結構、防水與電力測試。
              </p>

              <p>
                現場可快速展開，
                當天完成基本部署。
              </p>

              <p>
                真正實現：
                「即運輸、即展開、即可使用」
              </p>

            </div>
          </div>

          {/* FIXED YOUTUBE */}

          <div className="relative aspect-video rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">

            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="GPSH SMART HOUSE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-black mb-4">
            核心技術
          </h2>

          <p className="text-zinc-500">
            模組化鋼構 × 太陽能 × 智能控制 × 可移動資產
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-zinc-900/40 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition"
            >

              <div className="text-4xl mb-5 text-green-500">
                ⚡
              </div>

              <h3 className="text-xl font-bold">
                {feature}
              </h3>

            </div>
          ))}
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}

      <section
        id="products"
        className="bg-zinc-950 border-y border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="mb-16 text-center">

            <h2 className="text-4xl font-black mb-4">
              產品系列
            </h2>

            <p className="text-zinc-500">
              模組化住宅 × 投資型資產 × 綠能系統
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {products.map((product, index) => (

              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-[32px] overflow-hidden hover:border-green-500 transition"
              >

                <div className="h-56 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center text-7xl">
                  🏠
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-black mb-3">
                    {product.name}
                  </h3>

                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="text-green-500 text-2xl font-black mb-8">
                    {product.price}
                  </div>

                  <a
                    href="#configurator"
                    className="block text-center bg-white text-black py-4 rounded-2xl font-bold hover:scale-105 transition"
                  >
                    查看配置
                  </a>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONFIGURATOR ================= */}

      <section
        id="configurator"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="mb-16 text-center">

          <h2 className="text-4xl font-black mb-4">
            即時客製配置
          </h2>

          <p className="text-zinc-500">
            即時選配 × 即時報價 × LINE 成交
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* OPTIONS */}

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-[32px] p-8">

            <h3 className="text-2xl font-black mb-8">
              選配項目
            </h3>

            <div className="space-y-4">

              {optionList.map((option) => (

                <label
                  key={option.id}
                  className={`flex items-center justify-between rounded-2xl border p-5 cursor-pointer transition ${
                    selectedOptions[option.id]
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <input
                      type="checkbox"
                      checked={!!selectedOptions[option.id]}
                      onChange={() => handleCheckboxChange(option.id)}
                      className="w-5 h-5 accent-green-500"
                    />

                    <span className="font-semibold">
                      {option.name}
                    </span>
                  </div>

                  <span className="text-green-400 font-mono">
                    + NT$ {option.price.toLocaleString()}
                  </span>

                </label>
              ))}
            </div>
          </div>

          {/* PRICE */}

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-[32px] p-8 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-black mb-8">
                即時報價
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between text-zinc-400">
                  <span>基礎價格</span>
                  <span>NT$ {basePrice.toLocaleString()}</span>
                </div>

                {optionList.map(
                  (opt) =>
                    selectedOptions[opt.id] && (
                      <div
                        key={opt.id}
                        className="flex justify-between text-green-400"
                      >
                        <span>{opt.name}</span>
                        <span>
                          + NT$ {opt.price.toLocaleString()}
                        </span>
                      </div>
                    )
                )}

                <div className="border-t border-zinc-800 pt-6 flex justify-between text-3xl font-black">

                  <span>總價</span>

                  <span className="text-green-500">
                    NT$ {totalPrice.toLocaleString()}
                  </span>

                </div>
              </div>
            </div>

            <div className="space-y-4 mt-10">

              <button
                onClick={handlePdfExport}
                className="w-full bg-green-500 text-black py-5 rounded-2xl font-black hover:scale-105 transition"
              >
                產生專屬報價 PDF
              </button>

              <a
                href={lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center border border-zinc-700 py-5 rounded-2xl hover:bg-zinc-800 transition"
              >
                加入 LINE 顧問
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-500">

        <div className="text-xl font-black text-white mb-3">
          GPSH SMART HOUSE
        </div>

        <p className="mb-2">
          可展開式能源型智能移動住宅系統
        </p>

        <p className="text-sm">
          © 2026 GPSH All Rights Reserved.
        </p>

      </footer>
    </div>
  )
}
```
