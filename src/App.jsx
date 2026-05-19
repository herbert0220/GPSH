import { useState } from 'react'
import './index.css'

export default function App() {

  // LINE 官方顧問連結
  const lineUrl = 'https://lin.ee/uNjqsw8'

  /* ====================================
     1. DATA DEFINITIONS (資料庫定義)
  ====================================== */

  const products = [
    { id: '20ft', name: '20呎｜入門款', desc: '適合個人居住、工地宿舍與臨時辦公空間', size: '20ft', price: 350000 },
    { id: '30ft', name: '30呎｜主力款', desc: '民宿與小家庭最佳配置', size: '30ft', price: 680000 },
    { id: '40ft', name: '40呎｜投資款', desc: '三房雙衛、高報酬收租型產品', size: '40ft', price: 1280000 },
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
    { id: 'glass', name: '落地玻璃門隔音窗', price: 45000, img: '/opt-glass.png' },
    { id: 'bathroom', name: '乾濕分離浴室', price: 65000, img: '/opt-bathroom.png' },
    { id: 'floor-heating', name: '石墨烯地暖', price: 38000, img: '' },
    { id: 'solar', name: '太陽能系統', price: 220000, img: '' },
    { id: 'battery', name: '儲能電池', price: 180000, img: '' },
    { id: 'offgrid', name: '離網系統', price: 120000, img: '' },
    { id: 'curtain', name: '玻璃帷幕', price: 95000, img: '' },
    { id: 'terrace', name: '露台', price: 50000, img: '' },
  ]

  const productOptions = {
    floorPlans: {
      '20ft': [
        { id: '20-p1', name: '20呎 開放式標準套房', price: 0 },
        { id: '20-p2', name: '20呎 一房一衛極簡風', price: 35000 }
      ],
      '30ft': [
        { id: '30-p1', name: '30呎 一房一廳一衛標準版', price: 0 },
        { id: '30-p2', name: '30呎 雙房單衛溫馨格局', price: 55000 }
      ],
      '40ft': [
        { id: '40-p1', name: '40呎 兩房一廳雙衛雅緻版', price: 0 },
        { id: '40-p2', name: '40呎 三房雙衛高回報收租型', price: 85000 }
      ]
    },
    entranceDoors: [
      { id: 'd1', name: '標準鋼製氟碳防盜門', price: 0 },
      { id: 'd2', name: '智慧指紋密碼防盜門', price: 15000 },
      { id: 'd3', name: '斷橋鋁極窄邊框鋼化大門', price: 28000 }
    ],
    windows: [
      { id: 'w1', name: '雙層中空鋼化隔音窗', price: 0 },
      { id: 'w2', name: '防噪防颱三層夾膠玻璃窗', price: 25000 }
    ],
    exteriorWalls: [
      { id: 'wl1', name: '高密度聚氨酯保溫外牆板', price: 0 },
      { id: 'wl2', name: '金屬雕花氟碳漆裝飾板', price: 32000 }
    ],
    flooring: [
      { id: 'f1', name: 'SPC 鎖扣防水石塑地板', price: 0 },
      { id: 'f2', name: '原木多層實木複合地板', price: 22000 }
    ],
    powerSockets: [
      { id: 's1', name: '標準安全配電與鋼琴烤漆面板', price: 0 },
      { id: 's2', name: '高配防過載迴路與金屬拉絲面板', price: 12000 }
    ]
  }

  /* ====================================
     2. STATE MANAGEMENT (狀態管理)
  ====================================== */

  const [activeProduct, setActiveProduct] = useState(products[0]) 
  const [selectedOptions, setSelectedOptions] = useState({})

  const currentFloorPlans = productOptions.floorPlans[activeProduct?.id] || []
  
  const [selectedPlan, setSelectedPlan] = useState(productOptions.floorPlans['20ft'][0])
  const [selectedDoor, setSelectedDoor] = useState(productOptions.entranceDoors[0])
  const [selectedWindow, setSelectedWindow] = useState(productOptions.windows[0])
  const [selectedWall, setSelectedWall] = useState(productOptions.exteriorWalls[0])
  const [selectedFloor, setSelectedFloor] = useState(productOptions.flooring[0])
  const [selectedSocket, setSelectedSocket] = useState(productOptions.powerSockets[0])

  /* ====================================
     3. BUSINESS LOGIC & CALCULATIONS (商業邏輯)
  ====================================== */

  const handleProductChange = (prod) => {
    setActiveProduct(prod)
    const newPlans = productOptions.floorPlans[prod.id] || []
    setSelectedPlan(newPlans[0] || null)
  }

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const basePrice = activeProduct?.price || 0
  const planPrice = selectedPlan?.price || 0
  const materialPrice = 
    (selectedDoor?.price || 0) + 
    (selectedWindow?.price || 0) + 
    (selectedWall?.price || 0) + 
    (selectedFloor?.price || 0) + 
    (selectedSocket?.price || 0)

  const systemPrice = optionList.reduce((sum, opt) => sum + (selectedOptions[opt.id] ? opt.price : 0), 0)

  const totalPrice = basePrice + planPrice + materialPrice + systemPrice

  const handlePdfExport = () => {
    const content = `
GPSH 智慧翼展屋 專屬報價
----------------------------
【基本房屋主機】
主機型號：${activeProduct?.name} (NT$ ${basePrice.toLocaleString()})
空間格局：${selectedPlan?.name || '未選'} (+NT$ ${planPrice.toLocaleString()})

【建材工藝選配】
大門款式：${selectedDoor?.name || '未選'} (+NT$ ${(selectedDoor?.price || 0).toLocaleString()})
窗戶款式：${selectedWindow?.name || '未選'} (+NT$ ${(selectedWindow?.price || 0).toLocaleString()})
外牆板材：${selectedWall?.name || '未選'} (+NT$ ${(selectedWall?.price || 0).toLocaleString()})
地板材料：${selectedFloor?.name || '未選'} (+NT$ ${(selectedFloor?.price || 0).toLocaleString()})
插座面板：${selectedSocket?.name || '未選'} (+NT$ ${(selectedSocket?.price || 0).toLocaleString()})

【智慧與系統升級】
${optionList.filter(o => selectedOptions[o.id]).map(o => `• ${o.name} (+NT$ ${o.price.toLocaleString()})`).join('\n') || '無額外系統加購'}

----------------------------
預估估算總價：
NT$ ${totalPrice.toLocaleString()} 元

請截圖此畫面或連繫下方 LINE 官方顧問取得正式報價合約。
    `
    alert(content)
  }

  /* ====================================
     4. JSX RENDERING (外觀渲染)
  ====================================== */
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest">
            GPSH<span className="text-green-500 ml-2">SMART HOUSE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#products" className="hover:text-white transition">產品技術</a>
            <a href="#configurator" className="hover:text-white transition">客製配置</a>
            <a href="#investment" className="hover:text-white transition">投資方案</a>
            <a href={lineUrl} target="_blank" rel="noreferrer">
              <button className="bg-green-500 text-black px-5 py-2 rounded-xl font-bold hover:scale-105 transition">LINE 顧問</button>
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative border-b border-zinc-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-950/10 via-black to-black" />
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-36 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-flex items-center px-4 py-1 border border-green-500/30 rounded-full text-green-400 text-sm mb-8">EXPANDABLE SOLAR SMART HOUSE</div>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8">翼展太陽能<br /><span className="text-green-500">智能屋</span></h1>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">可展開式能源型智能移動住宅系統，結合翼展結構、太陽能、儲能與 AI 智慧能源管理。</p>
            <div className="flex flex-wrap gap-4">
              <a href="#configurator" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">開始客製配置</a>
              <a href="#investment" className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">投資方案</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/10" />
            <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl aspect-video bg-zinc-900">
              <img src="/house-main.png" alt="GPSH SMART HOUSE" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION (✅ 已修改為高性能原生原生 HTML5 播放器，直接加載上傳的影片檔) */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8">工廠製造<br />到現場部署</h2>
            <p className="text-zinc-400 leading-relaxed">全程於模組化工廠精密製造，出廠前完成結構、防水與電力測試。現場當天即可展開基本部署。</p>
          </div>
          
          <div className="relative aspect-[9/16] max-w-[340px] mx-auto rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950">
            <video 
              className="w-full h-full object-cover"
              src="/house-video.mp4" 
              autoPlay 
              muted 
              loop 
              playsInline
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feat, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/20 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-zinc-400 text-sm">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONFIGURATOR ================= */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        <div className="mb-16">
          <h2 className="text-3xl font-black mb-2 flex items-center text-green-400">
            <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 text-sm flex items-center justify-center mr-3 font-mono">1</span>
            選擇基礎規格尺寸
          </h2>
          <p className="text-zinc-400 mb-6">點選下方型號，右側摘要將自動同步基礎尺寸價格與結構關聯佈局。</p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {products.map((prod) => (
              <div 
                key={prod.id}
                onClick={() => handleProductChange(prod)}
                className={`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                  activeProduct.id === prod.id ? 'border-green-500 bg-green-500/5 shadow-[0_0_25px_rgba(34,197,94,0.1)]' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
                  <p className="text-zinc-500 text-xs line-clamp-2">{prod.desc}</p>
                </div>
                <div className="text-sm font-bold text-green-400 mt-4">NT$ {prod.price.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-[32px] p-8 space-y-6">
              <h2 className="text-2xl font-black mb-2 flex items-center text-green-400">
                <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 text-sm flex items-center justify-center mr-3 font-mono">2</span>
                客製細部建材與結構格局
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-6 pt-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">室內間隔佈局</label>
                  <select 
                    value={selectedPlan?.id || ''} 
                    onChange={(e) => setSelectedPlan(currentFloorPlans.find(p => p.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {currentFloorPlans.map(p => (
                      <option key={p.id} value={p.id}>{p.name} (+NT$ {p.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">入戶大門門款</label>
                  <select 
                    value={selectedDoor?.id || ''} 
                    onChange={(e) => setSelectedDoor(productOptions.entranceDoors.find(d => d.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {productOptions.entranceDoors.map(d => (
                      <option key={d.id} value={d.id}>{d.name} (+NT$ {d.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">防噪防颱窗戶款式</label>
                  <select 
                    value={selectedWindow?.id || ''} 
                    onChange={(e) => setSelectedWindow(productOptions.windows.find(w => w.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {productOptions.windows.map(w => (
                      <option key={w.id} value={w.id}>{w.name} (+NT$ {w.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">外牆板材顏色與雕花板</label>
                  <select 
                    value={selectedWall?.id || ''} 
                    onChange={(e) => setSelectedWall(productOptions.exteriorWalls.find(w => w.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {productOptions.exteriorWalls.map(w => (
                      <option key={w.id} value={w.id}>{w.name} (+NT$ {w.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">室內防水防磨地面材料</label>
                  <select 
                    value={selectedFloor?.id || ''} 
                    onChange={(e) => setSelectedFloor(productOptions.flooring.find(f => f.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {productOptions.flooring.map(f => (
                      <option key={f.id} value={f.id}>{f.name} (+NT$ {f.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">配電迴路與插座面板規格</label>
                  <select 
                    value={selectedSocket?.id || ''} 
                    onChange={(e) => setSelectedSocket(productOptions.powerSockets.find(s => s.id === e.target.value) || null)}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none cursor-pointer"
                  >
                    {productOptions.powerSockets.map(s => (
                      <option key={s.id} value={s.id}>{s.name} (+NT$ {s.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-black mb-2 flex items-center text-green-400">
                <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 text-sm flex items-center justify-center mr-3 font-mono">3</span>
                勾選高級智慧與系統功能加購
              </h2>
              <p className="text-zinc-400 mb-8 text-sm">可複選。升級項目皆隨車出廠與模組化整合安裝。</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {optionList.map((opt) => (
                  <label key={opt.id} className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer select-none transition ${selectedOptions[opt.id] ? 'border-green-500 bg-green-500/5 shadow-[0_0_20px_rgba(34,197,94,0.05)]' : 'border-zinc-800 bg-zinc-900/10 hover:border-zinc-700'}`}>
                    <div className="h-36 bg-zinc-950 relative flex items-center justify-center overflow-hidden">
                      {opt.img ? (
                        <img src={opt.img} alt={opt.name} className="w-full h-full object-cover opacity-80" />
                      ) : (
                        <div className="text-[10px] font-mono tracking-widest text-zinc-700 uppercase">// MODULE_PREVIEW</div>
                      )}
                      <div className="absolute top-3 left-3">
                        <input type="checkbox" checked={!!selectedOptions[opt.id]} onChange={() => handleCheckboxChange(opt.id)} className="accent-green-500 w-5 h-5 rounded cursor-pointer" />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col justify-between flex-1 bg-zinc-900/30">
                      <span className="font-bold text-sm text-white mb-2">{opt.name}</span>
                      <span className="text-green-400 text-sm font-mono font-bold">+ NT$ {opt.price.toLocaleString()}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          <div className="sticky top-28 border border-zinc-800 bg-zinc-900/50 p-8 rounded-[32px] backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">配備明細摘要</h3>
            <div className="space-y-3 text-xs text-zinc-400 min-h-[120px]">
              <div className="flex justify-between text-white font-medium">
                <span>{activeProduct?.name} 基礎結構</span>
                <span>NT$ {basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• 空間間隔佈局 ({selectedPlan?.name || '標準款'})</span>
                <span className="text-zinc-300">NT$ {planPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• 細部工藝加選明細</span>
                <span className="text-zinc-300">NT$ {materialPrice.toLocaleString()}</span>
              </div>
              {optionList.filter(opt => selectedOptions[opt.id]).map(opt => (
                <div key={opt.id} className="flex justify-between text-zinc-400">
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
                <button onClick={handlePdfExport} className="w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-zinc-200 transition">產出專屬報價</button>
                <a href={lineUrl} target="_blank" rel="noreferrer" className="w-full text-center">
                  <button className="w-full border border-green-500/50 text-green-400 py-4 rounded-xl font-bold hover:bg-green-500/10 transition">與 LINE 顧問討論可行性</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-black mb-4">ESG 綠能住宅 投資方案</h2>
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

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center text-xs text-zinc-600">
        <p>© 2026 GPSH SMART HOUSE. All rights reserved.</p>
      </footer>
    </div>
  )
}
