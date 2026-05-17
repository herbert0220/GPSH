import { useState } from 'react'
import './index.css'

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
    { id: 'glass', name: '落地玻璃門隔音窗', price: 45000 },
    { id: 'bathroom', name: '乾濕分離浴室', price: 65000 },
    { id: 'floor', name: '石墨烯地暖', price: 38000 },
    { id: 'solar', name: '太陽能系統', price: 220000 },
    { id: 'battery', name: '儲能電池', price: 180000 },
    { id: 'offgrid', name: '離網系統', price: 120000 },
    { id: 'curtain', name: '玻璃帷幕', price: 95000 },
    { id: 'terrace', name: '露台', price: 50000 },
  ]

  // 基礎價格與已選配狀態
  const basePrice = 350000
  const [selectedOptions, setSelectedOptions] = useState({})

  // 處理複選框點擊
  const handleCheckboxChange = (id) => {
    setSelectedOptions(prev => ({ ...prev, [id]: !prev[id] }))
  }

  // 計算選配總價
  const optionsPrice = optionList.reduce((sum, opt) => {
    return sum + (selectedOptions[opt.id] ? opt.price : 0)
  }, 0)

  const totalPrice = basePrice + optionsPrice

  // 您的 LINE 官方帳號官方連結
  const lineUrl = "https://lin.ee" 

  // 按鈕互動提示
  const handlePdfExport = () => {
    alert(`專屬報價單已產生！\n總計：NT$ ${totalPrice.toLocaleString()}\n請儲存此畫面或截圖提供給業務顧問。`)
  }

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased selection:bg-green-500 selection:text-black">
      
      {/* HEADER NAVBAR (頂部導覽列：含右上角小農點點 LOGO) */}
      <header className="border-b border-zinc-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold font-mono tracking-wider text-white">
            GPSH <span className="text-green-500">SMART</span>
          </div>
          {/* 右上角 LOGO 照片 */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="小農點點 LOGO" 
              className="h-12 w-auto object-contain rounded-xl border border-zinc-800 bg-zinc-900/50 p-1"
              onError={(e) => { e.target.style.display = 'none'; }} 
            />
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800 bg-zinc-950">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full border border-zinc-700 text-xs sm:text-sm mb-6 text-green-400 font-mono">
              Solar Expandable Smart House
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              翼展太陽能<br /><span className="text-green-500">智能屋</span>
            </h1>
            <p className="text-zinc-400 text-base sm:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              可展開式能源型智能移動住宅系統<br />
              結合翼展結構、太陽能、儲能與智慧能源管理。
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#configurator" className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-zinc-200 transition text-center active:scale-98">
                開始客製配置
              </a>
              <a href="#investment" className="w-full sm:w-auto border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition text-center active:scale-98">
                查看投資方案
              </a>
            </div>
          </div>
          
          {/* 右側實體照片區塊 */}
          <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 flex flex-col justify-center items-center shadow-2xl">
            <img 
              src="/house-main.png" 
              alt="實體外觀" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.parentNode.innerHTML = `
                  <div class="absolute inset-0 bg-gradient-to-br from-zinc-900 via-black to-green-950/30 flex flex-col justify-center items-center p-6 text-center w-full h-full">
                    <span class="text-4xl sm:text-5xl mb-3">🏠</span>
                    <h4 class="text-base sm:text-xl font-bold text-green-400 font-mono">GPSH REAL MODEL</h4>
                    <p class="text-zinc-500 text-xs sm:text-sm mt-2">請於 GitHub 根目錄的 public 資料夾中上傳名為 house-main.png 的照片</p>
                  </div>
                `;
              }}
            />
          </div>
        </div>
      </section>

      {/* VIDEO SECTION (100% 破解拒絕連線的商務嵌入代碼) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 border-b border-zinc-800">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">實境展示：<br /><span className="text-green-500">工廠製造到現場安裝</span></h2>
            <div className="space-y-4 sm:space-y-6 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p>我們的智慧屋全程於現代化高標準工廠進行模組化精密生產，出廠前通過嚴格的結構與氣密、防水測試。</p>
              <p>運抵現場後，透過專利翼展傳動系統，可在極短時間內完成雙翼展開，並在當天完成基礎管線組裝，實現真正的「即到即住、無痛部署」。</p>
            </div>
          </div>
          {/* 全新官方 YouTube-No-Cookie 商務專用垂直播放器容器 */}
          <div className="flex justify-center w-full">
            <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[9/16] rounded-2xl sm:rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://youtube-nocookie.com"
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
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">核心技術</h2>
          <p className="text-zinc-400 text-sm sm:text-lg">模組化鋼構 × 太陽能 × 智能控制 × 可移動資產</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 sm:p-8 hover:border-green-500 transition-colors">
              <div className="text-2xl sm:text-3xl mb-3 text-green-500">⚡</div>
              <h3 className="text-lg sm:text-xl font-semibold">{feature}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
          <div className="mb-12 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">產品系列</h2>
            <p className="text-zinc-400 text-sm sm:text-lg">從個人住宅到投資型資產，完整模組化產品線。</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-black border border-zinc-800 rounded-2xl overflow-hidden flex flex-col justify-between">
                <div className="h-44 bg-zinc-900/30 flex items-center justify-center text-5xl border-b border-zinc-800">🏗️</div>
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">{product.desc}</p>
                  </div>
                  <a href="#configurator" className="block w-full text-center bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors text-sm">
                    查看配置
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURATOR */}
      <section id="configurator" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 scroll-mt-6">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">3D互動選配系統</h2>
          <p className="text-zinc-400 text-sm sm:text-lg">即時配置、即時報價、即時產生投資方案。</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-6">選配項目</h3>
            <div className="space-y-3">
              {optionList.map((option) => (
                <label key={option.id} className={`flex items-center justify-between border rounded-xl p-4 transition-all cursor-pointer select-none ${selectedOptions[option.id] ? 'border-green-500 bg-green-950/10' : 'border-zinc-800 hover:border-zinc-700'}`}>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={!!selectedOptions[option.id]} onChange={() => handleCheckboxChange(option.id)} className="w-5 h-5 accent-green-500 rounded" />
                    <span className="font-medium text-sm sm:text-base">{option.name}</span>
                  </div>
                  <span className="text-zinc-400 font-mono text-xs sm:text-sm">+NT$ {option.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-xl font-bold mb-6">即時報價總覽</h3>
              <div className="space-y-4">
                <div className="flex justify-between text-zinc-400 text-sm sm:text-base">
                  <span>基礎艙體總價</span>
                  <span className="font-mono">NT$ {basePrice.toLocaleString()}</span>
                </div>
                {optionList.map(opt => selectedOptions[opt.id] && (
                  <div key={opt.id} className="flex justify-between text-green-400 text-xs sm:text-sm animate-fadeIn">
                    <span>➕ {opt.name}</span>
                    <span className="font-mono">+NT$ {opt.price.toLocaleString()}</span>
                  </div>
                ))}
                <div className="border-t border-zinc-800 pt-4 flex justify-between text-2xl font-bold">
                  <span>總價</span>
                  <span className="text-green-500 font-mono">NT$ {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <button onClick={handlePdfExport} className="w-full bg-green-500 text-black py-4 rounded-xl font-bold hover:bg-green-400 transition-transform active:scale-98 text-sm">
                產生專屬報價 PDF
              </button>
              <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="block w-full text-center border border-zinc-700 py-4 rounded-xl hover:bg-zinc-800 transition-colors text-sm font-semibold text-zinc-200">
                加入 LINE 顧問
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PATENT */}
      <section className="bg-zinc-950 border-y border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">專利技術保障</h2>
            <div className="space-y-4 text-zinc-400 leading-relaxed text-sm sm:text-base">
              <p>本系統採用碳鋼方柱模組化結構，完美整合雙向翼展機構、高集成度太陽能模組與智能能源微電網控制核心。</p>
              <p>可做為高奢露營、特色民宿、移動辦公、防災減災與完全離網能源獨立系統使用。</p>
              <p className="text-green-400 font-semibold">佈局規劃：新型專利、發明專利與外觀設計專利。</p>
            </div>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-gradient-to-bl from-zinc-900 via-black to-zinc-900 flex flex-col justify-center items-center p-6 text-center">
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
            <span className="text-4xl mb-3">📐</span>
            <h4 className="text-base sm:text-xl font-bold text-zinc-400 font-mono">STRUCTURE SCHEMA</h4>
            <p className="text-zinc-500 text-xs mt-2">高強度碳鋼方柱骨架與翼展連桿結構設計</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="investment" className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">可移動的能源型資產</h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-12 max-w-2xl mx-auto">
            不開玩笑的 ESG 綠能移動住宅，全面結合發電與資產管理。
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-12">
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2 text-green-400">2年</div>
              <p className="text-zinc-500 text-xs">預估投資回報期</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2 text-green-400">25%</div>
              <p className="text-zinc-500 text-xs">年化節能與綜合收益率</p>
            </div>
            <div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6">
              <div className="text-3xl font-bold mb-2 text-green-400">100%</div>
              <p className="text-zinc-500 text-xs">全天候綠電自給自足率</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
