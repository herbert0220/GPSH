import { useState } from 'react'
import './index.css'

export default function App() {

  // ✅ 經最終校對之正確唯一 LINE 官方顧問連結
  const lineUrl = 'https://lin.ee/uNjqsw8'

  /* ====================================
     1. DATA DEFINITIONS (產品型號、選配與格局資料庫)
  ====================================== */

  const products = [
    { id: '20ft', name: '20呎｜入門款', desc: '適合個人居住、工地宿舍與臨時辦公空間', size: '20ft', price: 350000 },
    { id: '30ft', name: '30呎｜主力款', desc: '民宿與小家庭最佳配置', size: '30ft', price: 450000 }, 
    { id: '40ft', name: '40呎｜投資款', desc: '三房雙衛、高報酬收租型產品', size: '40ft', price: 680000 }, 
  ]

  const features = [
    { title: '翼展式結構', desc: '專利折疊展開設計，運輸體積小，現場空間倍增。' },
    { title: '碳鋼方柱骨架', desc: '高強度結構鋼，抗風耐震。' },
    { title: '太陽能整合', desc: '整合太陽能與儲能系統。' },
    { title: '智慧能源控制', desc: 'AI 能源調配與負載管理。' },
    { title: '離網供電', desc: '無市電地區也可獨立運作。' },
    { title: '快速部署', desc: '現場快速展開組裝。' },
  ]

  const optionList = [
    { id: 'glass', name: '落地玻璃門隔音窗', price: 45000, img: '/opt-glass.png' },
    { id: 'bathroom', name: '乾濕分離浴室', price: 65000, img: '/opt-bathroom.png' },
    { id: 'wall', name: '金屬雕花外牆', price: 38000, img: '/opt-floor-heating.png' },
    { id: 'solar', name: '太陽能離網10度儲能系統', price: 350000, img: '/opt-solar.png' },
    { id: 'roof', name: '斜屋頂', price: 150000, img: '/opt-battery.png' },
    { id: 'terrace', name: '露臺', price: 80000, img: '/opt-offgrid.png' },
    { id: 'floor', name: '石墨烯保溫地板', price: 95000, img: '/opt-curtain.png' },
    { id: 'color', name: '框架選色', price: 20000, img: '/opt-terrace.png' },
  ]

  const productOptions = {
    floorPlans: {
      '20ft': [
        { id: '20-p1', name: '20呎 一房一廳一衛', price: 0 },
        { id: '20-p2', name: '20呎 兩房一廳一衛極簡風', price: 35000 },
      ],
      '30ft': [
        { id: '30-p1', name: '30呎 雙房一廳一衛', price: 0 },
        { id: '30-p2', name: '30呎 三房一廳一衛', price: 55000 },
      ],
      '40ft': [
        { id: '40-p1', name: '40呎 三房雙衛豪華版', price: 0 },
        { id: '40-p2', name: '40呎 四房雙衛收租型', price: 85000 },
      ],
    },
    entranceDoors: [
      { id: 'd1', name: '標準鋼製防盜門', price: 0, img: '/door-d1.png' },
      { id: 'd2', name: '智慧指紋防盜門', price: 15000, img: '/door-d2.png' },
      { id: 'd3', name: '斷橋鋁鋼化大門', price: 28000, img: '/door-d3.png' },
    ],
  }
 // 📸 新增：對齊您實體照片總數的 35 張照片資料陣列生成
  const galleryData = {
    exterior: Array.from({ length: 24 }, (_, i) => `/ext-${i + 1}.png`),
    interior: Array.from({ length: 5 }, (_, i) => `/int-${i + 1}.png`),
    floor2: Array.from({ length: 6 }, (_, i) => `/floor2-${i + 1}.png`)
  }
  /* ====================================
     2. STATE MANAGEMENT (狀態初始化管理)
  ====================================== */

  const [activeProduct, setActiveProduct] = useState(products[0])
  const [selectedOptions, setSelectedOptions] = useState({})
  
  const currentFloorPlans = productOptions.floorPlans[activeProduct?.id] || []

  const [selectedPlan, setSelectedPlan] = useState(productOptions.floorPlans['20ft'][0])
  const [selectedDoor, setSelectedDoor] = useState(productOptions.entranceDoors[0])

  /* ====================================
     3. BUSINESS LOGIC (演算法與加總邏輯)
  ====================================== */

  const getMultiplier = () => {
    if (activeProduct?.id === '30ft') return 1.5
    if (activeProduct?.id === '40ft') return 2
    return 1
  }

  const handleProductChange = (product) => {
    setActiveProduct(product)
    const plans = productOptions.floorPlans[product.id]
    if (plans?.length > 0) {
      setSelectedPlan(plans[0])
    }
  }

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const basePrice = activeProduct.price
  const planPrice = (selectedPlan?.price || 0) * getMultiplier()
  const doorPrice = (selectedDoor?.price || 0) * getMultiplier()

  const systemPrice = optionList.reduce((sum, opt) => {
    if (selectedOptions[opt.id]) {
      return sum + opt.price * getMultiplier()
    }
    return sum
  }, 0)

  const totalPrice = basePrice + planPrice + doorPrice + systemPrice

  const handlePdfExport = () => {
    const selectedSystems = optionList
      .filter((o) => selectedOptions[o.id])
      .map((o) => `• ${o.name} (+NT$ ${(o.price * getMultiplier()).toLocaleString()})`)
      .join('\n')

    const content = `
GPSH 智慧翼展屋 專屬報價

主機：
${activeProduct.name} (NT$ ${basePrice.toLocaleString()})

格局：
${selectedPlan?.name || '標準款'} (+NT$ ${planPrice.toLocaleString()})

大門：
${selectedDoor?.name || '標準門'} (+NT$ ${doorPrice.toLocaleString()})

系統加購：
${selectedSystems || '無額外系統加購'}

----------------------------
預估總價：
NT$ ${totalPrice.toLocaleString()} 元

請截圖此畫面或連蹟下方 LINE 官方顧問取得正式報價合約。
    `
    alert(content)
  }

  /* ====================================
     4. JSX RENDERING (前端外觀渲染)
  ====================================== */
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden font-sans">

      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest">
            GPSH<span className="text-green-500 ml-2">SMART HOUSE</span>
          </div>
          <a
            href={lineUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-green-500 text-black px-5 py-3 rounded-xl font-bold hover:scale-105 transition text-sm"
          >
            LINE 顧問
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-black to-black" />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center px-4 py-1 border border-green-500/30 rounded-full text-green-400 text-sm mb-8">
              EXPANDABLE SOLAR SMART HOUSE
            </div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">
              翼展太陽能<br /><span className="text-green-500">智能屋</span>
            </h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              可展開式能源型智能移動住宅系統，結合翼展結構、太陽能、儲能與 AI 智慧能源管理。
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
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/10" />
            <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl aspect-video bg-zinc-900">
              <img src="/house-main.png" alt="GPSH" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8">工廠製造<br />到現場部署</h2>
            <p className="text-zinc-400 leading-relaxed">模組化生產，快速現場展開。</p>
          </div>
          <div className="relative aspect-[9/16] max-w-[340px] mx-auto rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
            <video className="w-full h-full object-cover" src="/house-video.mp4" poster="/house-main.png" controls loop playsInline />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-zinc-400 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        
        <div className="mb-16">
          <h2 className="text-3xl font-black mb-6 text-green-400">選擇產品尺寸</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {products.map((prod) => (
              <div
                key={prod.id}
                onClick={() => handleProductChange(prod)}
                className={`p-6 rounded-2xl border cursor-pointer transition ${
                  activeProduct.id === prod.id ? 'border-green-500 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/20'
                }`}
              >
                <h3 className="text-lg font-bold mb-2">{prod.name}</h3>
                <p className="text-zinc-500 text-sm mb-6">{prod.desc}</p>
                <div className="text-green-400 font-bold">NT$ {prod.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* LEFT PANEL */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* FLOOR PLAN */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black mb-6 text-green-400">格局配置</h3>
              <select
                value={selectedPlan?.id}
                onChange={(e) => setSelectedPlan(currentFloorPlans.find((p) => p.id === e.target.value) || null)}
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 text-white outline-none focus:border-green-500"
              >
                {currentFloorPlans.map((plan) => (
                  <option key={plan.id} value={plan.id}>{plan.name}</option>
                ))}
              </select>
            </div>

            {/* DOORS */}
            <div className="bg-zinc-900/30 border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-black mb-6 text-green-400">大門款式</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {productOptions.entranceDoors.map((door) => (
                  <div
                    key={door.id}
                    onClick={() => setSelectedDoor(door)}
                    className={`border rounded-2xl overflow-hidden cursor-pointer transition flex flex-col justify-between ${
                      selectedDoor.id === door.id ? 'border-green-500 bg-green-500/5' : 'border-zinc-800'
                    }`}
                  >
                    <div className="h-40 bg-zinc-950">
                      <img src={door.img} alt={door.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <div className="font-bold text-sm mb-2 line-clamp-1">{door.name}</div>
                      <div className="text-green-400 text-sm font-mono">+ NT$ {(door.price * getMultiplier()).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* OPTIONS */}
            <div>
              <h3 className="text-2xl font-black mb-6 text-green-400">智慧系統加購</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {optionList.map((opt) => (
                  <label key={opt.id} className={`border rounded-2xl overflow-hidden cursor-pointer transition ${selectedOptions[opt.id] ? 'border-green-500 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/20'}`}>
                    <div className="h-44 bg-zinc-950 relative">
                      {opt.img ? (
                        <img src={opt.img} alt={opt.name} className="w-full h-full object-cover opacity-80" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-zinc-700 font-mono tracking-wider">// MODULE_PREVIEW</div>
                      )}
                      <div className="absolute top-4 left-4">
                        <input type="checkbox" checked={!!selectedOptions[opt.id]} onChange={() => handleCheckboxChange(opt.id)} className="w-5 h-5 accent-green-500 cursor-pointer" />
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="font-bold mb-2 text-white">{opt.name}</div>
                      <div className="text-green-400 font-bold font-mono">+ NT$ {(opt.price * getMultiplier()).toLocaleString()}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT SUMMARY PANEL */}
          <div className="lg:sticky lg:top-28 h-fit border border-zinc-800 bg-zinc-900/50 p-8 rounded-3xl">
            <h3 className="text-2xl font-black mb-8">配置摘要</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between">
                <span>{activeProduct.name} 基礎型號</span>
                <span className="font-mono text-zinc-300">NT$ {basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• {selectedPlan?.name || '格局標配'}</span>
                <span className="font-mono text-zinc-300">NT$ {planPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• {selectedDoor?.name || '大門標配'}</span>
                <span className="font-mono text-zinc-300">NT$ {doorPrice.toLocaleString()}</span>
              </div>
              {optionList
                .filter((o) => selectedOptions[o.id])
                .map((o) => (
                  <div key={o.id} className="flex justify-between text-zinc-400 text-xs">
                    <span>+ {o.name}</span>
                    <span className="font-mono">NT$ {(o.price * getMultiplier()).toLocaleString()}</span>
                  </div>
                ))}
            </div>

            <div className="border-t border-zinc-800 mt-8 pt-8">
              <div className="flex justify-between items-end mb-8">
                <span className="text-zinc-400 text-sm">預估總價</span>
                <span className="text-4xl font-black text-green-500 font-mono">NT$ {totalPrice.toLocaleString()}</span>
              </div>
              <div className="space-y-4">
                <button onClick={handlePdfExport} className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-zinc-200 transition">
                  產生專屬報價
                </button>
                <a href={lineUrl} target="_blank" rel="noreferrer" className="block">
                  <button className="w-full border border-green-500 text-green-400 py-4 rounded-2xl font-bold hover:bg-green-500/10 transition">
                    LINE 顧問
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black mb-6">ESG 綠能住宅</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">高流動性智慧住宅資產，結合民宿、能源與 ESG 綠建築概念。</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/20">
            <h3 className="text-2xl font-bold text-green-400 mb-4">民宿投資方案</h3>
            <ul className="space-y-4 text-zinc-300 text-sm">
              <li>• 快速部署營運</li>
              <li>• 可移動式資產</li>
              <li>• AI 智慧管理</li>
            </ul>
          </div>
          <div className="border border-zinc-800 rounded-3xl p-8 bg-zinc-900/20">
            <h3 className="text-2xl font-bold text-green-400 mb-4">ESG 企業宿舍</h3>
            <ul className="space-y-4 text-zinc-300 text-sm">
              <li>• 綠能與減碳</li>
              <li>• 模組化快速建置</li>
              <li>• 可回收重複利用</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-600">
        <p>© 2026 GPSH SMART HOUSE. All rights reserved.</p>
      </footer>

    </div>
  )
}
