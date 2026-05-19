```jsx
import { useMemo, useState } from 'react'
import './index.css'

export default function App() {

  /* =========================================
      DATA
  ========================================= */

  const lineUrl = 'https://lin.ee/uNjqsw8'

  // ⚠️ 改成你的 YouTube 影片 ID
  const youtubeId = 'dQw4w9WgXcQ'

  const basePrice = 350000

  const products = [
    {
      title: '20呎｜入門款',
      desc: '適合個人住宅、工地宿舍與臨時辦公空間',
      price: 'NT$ 350,000 起',
    },
    {
      title: '30呎｜主力款',
      desc: '民宿與小家庭最佳配置',
      price: 'NT$ 680,000 起',
    },
    {
      title: '40呎｜投資款',
      desc: '三房雙衛、高報酬收租型產品',
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

  const options = [
    {
      id: 'solar',
      name: '太陽能系統',
      price: 220000,
    },
    {
      id: 'battery',
      name: '儲能電池',
      price: 180000,
    },
    {
      id: 'offgrid',
      name: '離網系統',
      price: 120000,
    },
    {
      id: 'glass',
      name: '落地隔音玻璃',
      price: 45000,
    },
    {
      id: 'bathroom',
      name: '乾濕分離浴室',
      price: 65000,
    },
    {
      id: 'terrace',
      name: '戶外露台',
      price: 50000,
    },
  ]

  /* =========================================
      STATE
  ========================================= */

  const [selectedOptions, setSelectedOptions] = useState({})

  /* =========================================
      FUNCTIONS
  ========================================= */

  const toggleOption = (id) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const selectedList = useMemo(() => {
    return options.filter((item) => selectedOptions[item.id])
  }, [selectedOptions])

  const totalPrice = useMemo(() => {
    return selectedList.reduce(
      (total, item) => total + item.price,
      basePrice
    )
  }, [selectedList])

  const handleExport = () => {

    const selectedText =
      selectedList.length > 0
        ? selectedList.map((i) => `• ${i.name}`).join('\n')
        : '無'

    alert(`
GPSH 翼展智能屋

====================

選配項目：

${selectedText}

====================

總價：
NT$ ${totalPrice.toLocaleString()}

請截圖並聯繫 LINE 顧問取得正式報價。
    `)
  }

  /* =========================================
      JSX
  ========================================= */

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">

      {/* =========================================
          HEADER
      ========================================= */}

      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur-xl">

        <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

          <div className="text-2xl font-black tracking-widest">
            GPSH
            <span className="text-green-500 ml-2">
              SMART HOUSE
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">

            <a
              href="#products"
              className="text-zinc-400 hover:text-white transition"
            >
              產品系列
            </a>

            <a
              href="#configurator"
              className="text-zinc-400 hover:text-white transition"
            >
              客製配置
            </a>

            <a
              href="#investment"
              className="text-zinc-400 hover:text-white transition"
            >
              投資方案
            </a>

            <a
              href={lineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-black px-5 py-3 rounded-xl font-black hover:scale-105 transition"
            >
              LINE 顧問
            </a>

          </nav>
        </div>
      </header>

      {/* =========================================
          HERO
      ========================================= */}

      <section className="relative border-b border-zinc-900 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-b from-green-950/20 via-black to-black" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center border border-green-500/30 text-green-400 rounded-full px-4 py-1 text-sm mb-8">
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
              整合翼展結構、太陽能、儲能與智能能源控制。

            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#configurator"
                className="bg-white text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition"
              >
                開始客製配置
              </a>

              <a
                href="#video"
                className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
              >
                查看展示影片
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

            <div className="absolute inset-0 bg-green-500/10 blur-3xl" />

            <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">

              <img
                src="/house-main.png"
                alt="GPSH Smart House"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src =
                    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
                }}
              />

            </div>
          </div>

        </div>
      </section>

      {/* =========================================
          VIDEO
      ========================================= */}

      <section
        id="video"
        className="border-b border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <h2 className="text-4xl font-black mb-8">
              工廠製造到現場部署
            </h2>

            <div className="space-y-6 text-zinc-400 leading-relaxed">

              <p>
                模組化工廠精密生產，
                出廠前完成結構與電力測試。
              </p>

              <p>
                現場快速展開部署，
                可應用於住宅、民宿與離網能源系統。
              </p>

              <p>
                採用碳鋼方柱骨架與專利翼展結構。
              </p>

            </div>
          </div>

          {/* FIXED YOUTUBE */}

          <div className="aspect-video rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">

            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
              title="GPSH Smart House"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />

          </div>

        </div>
      </section>

      {/* =========================================
          FEATURES
      ========================================= */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

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

              <div className="text-4xl text-green-500 mb-5">
                ⚡
              </div>

              <h3 className="text-xl font-black">
                {feature}
              </h3>

            </div>

          ))}
        </div>
      </section>

      {/* =========================================
          PRODUCTS
      ========================================= */}

      <section
        id="products"
        className="bg-zinc-950 border-y border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-black mb-4">
              產品系列
            </h2>

            <p className="text-zinc-500">
              模組化住宅 × 綠能系統 × 投資型資產
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {products.map((item, index) => (

              <div
                key={index}
                className="bg-black border border-zinc-800 rounded-[32px] overflow-hidden hover:border-green-500 transition"
              >

                <div className="h-56 flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black text-7xl">
                  🏠
                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-black mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  <div className="text-green-500 text-2xl font-black mb-8">
                    {item.price}
                  </div>

                  <a
                    href="#configurator"
                    className="block text-center bg-white text-black py-4 rounded-2xl font-black hover:scale-105 transition"
                  >
                    查看配置
                  </a>

                </div>
              </div>

            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          CONFIGURATOR
      ========================================= */}

      <section
        id="configurator"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-16">

          <h2 className="text-4xl font-black mb-4">
            即時客製配置
          </h2>

          <p className="text-zinc-500">
            即時選配 × 即時報價 × LINE 成交
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT */}

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8">

            <h3 className="text-2xl font-black mb-8">
              選配項目
            </h3>

            <div className="space-y-4">

              {options.map((item) => (

                <label
                  key={item.id}
                  className={`flex items-center justify-between border rounded-2xl p-5 cursor-pointer transition ${
                    selectedOptions[item.id]
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <input
                      type="checkbox"
                      checked={!!selectedOptions[item.id]}
                      onChange={() => toggleOption(item.id)}
                      className="w-5 h-5 accent-green-500"
                    />

                    <span className="font-semibold">
                      {item.name}
                    </span>

                  </div>

                  <span className="text-green-400 font-mono">
                    + NT$ {item.price.toLocaleString()}
                  </span>

                </label>

              ))}
            </div>
          </div>

          {/* RIGHT */}

          <div className="bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8 flex flex-col justify-between">

            <div>

              <h3 className="text-2xl font-black mb-8">
                即時報價
              </h3>

              <div className="space-y-4">

                <div className="flex justify-between text-zinc-400">

                  <span>基礎價格</span>

                  <span>
                    NT$ {basePrice.toLocaleString()}
                  </span>

                </div>

                {selectedList.map((item) => (

                  <div
                    key={item.id}
                    className="flex justify-between text-green-400"
                  >

                    <span>
                      {item.name}
                    </span>

                    <span>
                      + NT$ {item.price.toLocaleString()}
                    </span>

                  </div>

                ))}

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
                onClick={handleExport}
                className="w-full bg-green-500 text-black py-5 rounded-2xl font-black hover:scale-105 transition"
              >
                產生專屬報價
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

      {/* =========================================
          INVESTMENT
      ========================================= */}

      <section
        id="investment"
        className="bg-zinc-950 border-y border-zinc-900"
      >

        <div className="max-w-7xl mx-auto px-6 py-24 text-center">

          <h2 className="text-5xl font-black mb-8">
            可移動的能源型資產
          </h2>

          <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed mb-16">

            不只是貨櫃屋，
            而是結合綠能發電、分散式儲能、
            智能能源控制與高資產回報率的 ESG 綠能住宅平台。

          </p>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-black border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl font-black text-green-500 mb-4">
                2年
              </div>

              <div className="text-zinc-500">
                預估投資回本期
              </div>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl font-black text-green-500 mb-4">
                25%
              </div>

              <div className="text-zinc-500">
                年化綜合收益率
              </div>

            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-10">

              <div className="text-5xl font-black text-green-500 mb-4">
                OFF GRID
              </div>

              <div className="text-zinc-500">
                全天候能源獨立
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          FOOTER
      ========================================= */}

      <footer className="border-t border-zinc-900 py-12 text-center text-zinc-500">

        <div className="text-white text-2xl font-black mb-4">
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
