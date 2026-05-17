import { useState } from 'react'

export default function App() {
  // 產品系列數據
  const products = [
    { name: '20呎｜入門款', desc: '適合個人居住、工地宿舍與臨時辦公空間', size: '20ft' },
    { name: '30呎｜主力款', desc: '民宿與小家庭最佳配置', size: '30ft' },
    { name: '40呎｜投資款', desc: '三房雙衛、高報酬收租型產品', size: '40ft' },
  ]

  // 核心技術數據
  const features = [
    '翼展式可擴充結構', '碳鋼方柱高強度骨架', '太陽能整合系統', '智慧能源控制',
    '離網供電能力', '快速部署', '模組化量產', 'ESG綠能住宅',
  ]

  // 選配項目及其對應價格
  const optionList = [
    { id: 'glass', name: '落地玻璃門', price: 45000 },
    { id: 'bathroom', name: '乾濕分離浴室', price: 65000 },
    { id: 'floor', name: '石墨烯地暖', price: 38000 },
    { id: 'solar', name: '太陽能系統', price: 220000 },
    { id: 'battery', name: '儲能電池', price: 180000 },
    { id: 'offgrid', name: '離網系統', price: 120000 },
    { id: 'curtain', name: '玻璃帷幕', price: 95000 },
    { id: 'terrace', name: '露台', price: 50000 },
  ]

  // 基礎價格與已選配狀態
  const basePrice = 500000
  const [selectedOptions, setSelectedOptions] = useState({})

  // 處理複選框點擊
  const handleCheckboxChange = (id) => {
    setSelectedOptions(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  // 計算選配總價
  const optionsPrice = optionList.reduce((sum, opt) => {
    return sum + (selectedOptions[opt.id] ? opt.price : 0)
  }, 0)

  const totalPrice = basePrice + optionsPrice

  // 按鈕互動提示
  const handlePdfExport = () => {
    alert(`專屬報價單已產生！\n總計：NT$ ${totalPrice.toLocaleString()}\n請儲存此畫面或截圖提供給業務顧問。`)
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-90" />
        <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full border border-zinc-700 text-sm mb-6 text-green-400 font-mono">
              Solar Expandable Smart House
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8">
              翼展太陽能<br /><span className="text-green-500">智能屋</span>
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-10">
              可展開式能源型智能移動住宅系統<br />
              結合翼展結構、太陽能、儲能與智慧能源管理。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#configurator" className="bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition text-center">
                開始客製配置
              </a>
              <a href="#investment" className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition text-center">
                查看投資方案
              </a>
            </div>
          </div>
          {/* 取代原本破圖的高級科技占位圖 */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900 via-black to-green-950/30 flex flex-col justify-center items-center p-8 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
            <span className="text-6xl mb-4">🏠</span>
            <h4 className="text-xl font-bold text-green-400 font-mono">GPSH CONCEPT MODEL</h4>
            <p className="text-zinc-500 text-sm mt-2">可展翼式光儲充智慧一體化貨櫃屋示意</p>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION (新加入的工廠到安裝影片區塊) */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-800">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">實境展示：<br /><span className="text-green-500">工廠製造到現場安裝</span></h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                我們的智慧屋全程於現代化高標準工廠進行模組化精密生產，出廠前通過嚴格的結構與氣密、防水測試。
              </p>
              <p>
                運抵現場後，透過專利翼展傳動系統，可在極短時間內完成雙翼展開，並在當天完成基礎管線組裝，實現真正的「即到即住、無痛部署」。
              </p>
            </div>
          </div>
          {/* YouTube Shorts 專用垂直影片容器 */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
               <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtube.com"
                title="GPSH 工廠到安裝"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">核心技術</h2>
          <p className="text-zinc-400 text-lg">模組化鋼構 × 太陽能 × 智能控制 × 可移動資產</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition-colors">
              <div className="text-3xl mb-4 text-green-500">⚡</div>
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
            <p className="text-zinc-400 text-lg">從個人住宅到投資型資產，完整模組化產品線。</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-black border border-zinc-800 rounded-3xl overflow-hidden hover:border-green-500 transition-colors">
                <div className="h-56 bg-zinc-900/50 flex items-center justify-center text-6xl border-b border-zinc-800">
                  🏗️
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
                  <p className="text-zinc-400 leading-relaxed mb-8">{product.desc}</p>
                  <a href="#configurator" className="block w-full text-center bg-white text-black py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition-colors">
                    查看配置
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">3D互動選配系統</h2>
          <p className="text-zinc-400 text-lg">即時配置、即時報價、即時產生投資方案。</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">選配項目</h3>
            <div className="space-y-4">
              {optionList.map((option) => (
                <label key={option.id} className={`flex items-center justify-between border rounded-2xl p-4 transition-all cursor-pointer ${selectedOptions[option.id] ? 'border-green-500 bg-green-950/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={!!selectedOptions[option.id]} onChange={() => handleCheckboxChange(option.id)} className="w-5 h-5 accent-green-500 rounded" />
                    <span className="font-medium">{option.name}</span>
                  </div>
                  <span className="text-zinc-400 font-mono">+NT$ {option.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl font-bold mb-8">即時報價總覽</h3>
              <div className="space-y-6">
                <div className="flex justify-between text-zinc-400">
                  <span>基礎艙體總價</span>
                  <span className="font-mono">NT$ {basePrice.toLocaleString()}</span>
                </div>
                {optionList.map(opt => selectedOptions[opt.id] && (
                  <div key={opt.id} className="flex justify-between text-green-400 text-sm animate-fadeIn">
                    <span>➕ {opt.name}</span>
                    <span className="font-mono">+NT$ {opt.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-zinc-800 pt-6 flex justify-between text-3xl font-bold">
                  <span>總價</span>
                  <span className="text-green-500 font-mono">NT$ {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-12">
              <button onClick={handlePdfExport} className="w-full bg-green-500 text-black py-4 rounded-2xl font-bold hover:bg-green-400 transition-transform active:scale-95">
                產生專屬報價 PDF
              </button>
              <button onClick={() => alert('即將為您導向業務顧問 LINE 帳號...')} className="w-full border border-zinc-700 py-4 rounded-2xl hover:bg-zinc-800 transition-colors">
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
            <h2 className="text-4xl font-bold mb-8">專利技術保障</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed text-lg">
              <p>本系統採用碳鋼方柱模組化結構，完美整合雙向翼展機構、高集成度太陽能模組與智能能源微電網控制核心。</p>
              <p>可做為高奢露營、特色民宿、移動辦公、防災減災與完全離網能源獨立系統使用。</p>
              <p className="text-green-400 font-semibold">佈局規劃：新型專利、發明專利與外觀設計專利。</p>
            </div>
          </div>
          {/* 取代原本破圖的高級技術架構占位圖 */}
          <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-bl from-zinc-900 via-black to-zinc-900 flex flex-col justify-center items-center p-8 text-center">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            <span className="text-6xl mb-4">📐</span>
            <h4 className="text-xl font-bold text-zinc-400 font-mono">STRUCTURE SCHEMA</h4>
            <p className="text-zinc-500 text-sm mt-2">高強度碳鋼方柱骨架與翼展連桿結構設計</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">可移動的能源型資產</h2>
          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            不只是貨櫃屋。而是全面結合綠能發電、分散式儲能、智慧能源調節與高資產回報率的全新 ESG 綠能住宅平台。
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4 text-green-400">2年</div>
              <p className="text-zinc-500 text-sm">預估投資回報期</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4 text-green-400">25%</div>
              <p className="text-zinc-500 text-sm">年化節能與綜合收益率</p>
            </div>
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8">
              <div className="text-4xl font-bold mb-4 text-green-400">100%</div>
              <p className="text-zinc-500 text-sm">全天候綠電自給自足率</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
