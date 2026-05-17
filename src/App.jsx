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
    { title: '翼展式結構', desc: '專利折疊展開設計，運輸體積小，現場空間倍增。' },
    { title: '碳鋼方柱骨架', desc: '高強度結構鋼，抗風耐震，符合安全法規。' },
    { title: '太陽能整合', desc: '車頂全包覆式光電板，自主發電，節能減碳。' },
    { title: '智慧能源控制', desc: 'AI 自動調配市電與電池輸出，優化負載管理。' },
    { title: '離網供電能力', desc: '配備大容量儲能系統，無市電地區亦能正常運作。' },
    { title: '快速部署', desc: '工廠模組化量產，現場只需一天即可完成展開組裝。' },
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

            <a href={lineUrl} target="_blank" rel="noreferrer">
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

      <section id="products" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4">
            核心技術
          </h2>
          <p className="text-zinc-500">
            模組化鋼構 × 太陽能 × 智能控制 × 可移動資產
          </p>
        </div>

        {/* 修正原本被截斷的 className */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-3xl hover:border-zinc-700 transition">
              <div className="h-12 w-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 font-bold mb-6">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>

        {/* 產品規格卡片 */}
        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {products.map((prod, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/40 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono bg-zinc-800 px-3 py-1 rounded-full text-zinc-400">{prod.size}</span>
                <h3 className="text-2xl font-black mt-4 mb-2">{prod.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{prod.desc}</p>
              </div>
              <div className="text-xl font-bold text-green-400 border-t border-zinc-800 pt-4 mt-4">
                {prod.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONFIGURATOR (客製配置) ================= */}

      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h2 className="text-4xl font-black mb-4">預算即時試算</h2>
            <p className="text-zinc-400 mb-8">依據您的場域需求與離網條件，勾選客製化配備，系統將即時產出報價底稿。</p>
            
            <div className="space-y-4">
              {optionList.map((opt) => (
                <label 
                  key={opt.id} 
                  className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer select-none transition ${
                    selectedOptions[opt.id] ? 'border-green-500 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/10 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <input 
                      type="checkbox" 
                      checked={!!selectedOptions[opt.id]} 
                      onChange={() => handleCheckboxChange(opt.id)}
                      className="accent-green-500 w-5 h-5 rounded"
                    />
                    <span className="font-medium text-sm">{opt.name}</span>
                  </div>
                  <span className="text-zinc-400 text-sm">+ NT$ {opt.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="sticky top-28 border border-zinc-800 bg-zinc-900/50 p-8 rounded-[32px] backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">配備明細摘要</h3>
            
            <div className="space-y-3 text-sm text-zinc-400 min-h-[100px]">
              <div className="flex justify-between text-white">
                <span>20呎 入門款基礎結構</span>
                <span>NT$ {basePrice.toLocaleString()}</span>
              </div>
              {optionList.filter(opt => selectedOptions[opt.id]).map(opt => (
                <div key={opt.id} className="flex justify-between">
                  <span>+ {opt.name}</span>
                  <span>NT$ {opt.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-800 pt-6 mt-6">
              <div className="flex justify-between items-baseline mb-8">
                <span className="text-zinc-400 text-sm">預估總價</span>
                <span className="text-3xl font-black text-green-500">NT$ {totalPrice.toLocaleString()}</span>
              </div>
              
              <div className="grid gap-4">
                <button 
                  onClick={handlePdfExport}
                  className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition"
                >
                  產出專屬報價
                </button>
                <a href={lineUrl} target="_blank" rel="noreferrer" className="w-full text-center">
                  <button className="w-full border border-green-500/50 text-green-400 py-4 rounded-xl font-bold hover:bg-green-500/10 transition">
                    與 LINE 顧問討論可行性
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= INVESTMENT (投資方案) ================= */}

      <section id="investment" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-black mb-4">ESG 綠能住宅投資方案</h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-12">高流動性的移動資產，結合民宿經營與淨零碳排趨勢，打造兼具高投報率與環境友善的資產配置。</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div className="border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-black p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-green-400 mb-2">鄉村輕旅民宿方案</h3>
            <p className="text-zinc-500 text-sm mb-6">低土地整地成本，快速開張運營</p>
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li>• 專人協助場域能源與離網規劃</li>
              <li>• 支援快速撤點重組，折舊風險極低</li>
              <li>• 結合智慧鎖與 AI 管理，節省人力營運成本</li>
            </ul>
          </div>

          <div className="border border-zinc-800 bg-gradient-to-br from-zinc-900/50 to-black p-8 rounded-3xl">
            <h3 className="text-xl font-bold text-green-400 mb-2">企業 ESG 園區宿舍</h3>
            <p className="text-zinc-500 text-sm mb-6">滿足企業減碳指標與綠電憑證需求</p>
            <ul className="space-y-3 text-zinc-300 text-sm">
              <li>• 自帶太陽能發電，符合綠色建築規範</li>
              <li>• 工廠預製模組結構，可全數回收及異地重建</li>
              <li>• 縮短專案開發週期 70% 以上</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-600">
        <p>© 2026 GPSH SMART HOUSE. All rights reserved.</p>
      </footer>

    </div>
  )
}
