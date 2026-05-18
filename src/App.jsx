import { useState } from 'react'
import './index.css'

export default function App() {

  /* ====================================
     PRODUCT DATA (主機型 - 已擴充 PDF 規格)
  ====================================== */
  const products = [
    {
      id: '10ft',
      name: '10呎｜精巧款',
      desc: '精巧靈活，適合微型空間與個人工作室 (2.95米長 / 1.5噸)',
      size: '10ft',
      price: 200000,
    },
    {
      id: '20ft',
      name: '20呎｜入門款',
      desc: '適合個人居住、工地宿舍與臨時辦公空間 (5.9米長 / 3噸)',
      size: '20ft',
      price: 350000,
    },
    {
      id: '20ft_office',
      name: '20呎｜辦公型',
      desc: '專為商務辦公、展示間設計的小平米規格 (5.9米長 / 2噸)',
      size: '20ft_office',
      price: 320000,
    },
    {
      id: '30ft',
      name: '30呎｜主力款',
      desc: '民宿與小家庭最佳配置，多房型大空間 (9米長 / 4.5噸)',
      size: '30ft',
      price: 450000,
    },
    {
      id: '40ft',
      name: '40呎｜投資款',
      desc: '三房雙衛、高報酬收租型產品，極致豪華大空間 (11.8米長 / 6噸)',
      size: '40ft',
      price: 680000,
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

    /* =========================
     STATE (狀態管理)
  ========================== */

  // 修正：加上 [0] 預設選取第一個產品（20呎）
  const [activeProduct, setActiveProduct] = useState(products[0]) 
  const [selectedOptions, setSelectedOptions] = useState({})

  // 已補上您的 LINE 官方帳號連結
  const lineUrl = 'https://lin.ee/uNjqsw8'

      '20ft': [
        { id: 'plan-20-open', name: '大通間佈局', price: 0 },
        { id: 'plan-20-1b1k', name: '一室一廚一衛佈局', price: 30000 },
        { id: 'plan-20-2b1k', name: '兩室一廳一廚一衛佈局', price: 50000 }
      ],
      '20ft_office': [{ id: 'plan-20off-open', name: '辦公大通間佈局', price: 0 }],
      '30ft': [
        { id: 'plan-30-open', name: '大通間佈局', price: 0 },
        { id: 'plan-30-2b1k', name: '兩室一廳一廚一衛佈局', price: 50000 },
        { id: 'plan-30-3b1k', name: '三室一廚一衛佈局', price: 70000 }
      ],
      '40ft': [
        { id: 'plan-40-open', name: '大通間佈局', price: 0 },
        { id: 'plan-40-2b1k', name: '兩室一廳一廚一衛佈局', price: 50000 },
        { id: 'plan-40-3b1k', name: '三室一廚一衛佈局', price: 70000 },
        { id: 'plan-40-3b2b', name: '三室一廚兩衛豪華佈局', price: 100000 }
      ]
    },
    // 入戶大門
    entranceDoors: [
      { id: 'door-steel', name: '鋼質門 / 玻璃推拉門 [標配]', price: 0 },
      { id: 'door-bridge', name: '斷橋鋁平開門', price: 12000 },
      { id: 'door-kfc', name: '商業級 肯德基門', price: 15000 },
      { id: 'door-burglar', name: '重型 防盜門', price: 8000 }
    ],
    // 窗戶款式
    windows: [
      { id: 'win-plastic', name: '高強度 塑鋼窗 [標配]', price: 0 },
      { id: 'win-slide', name: '斷橋鋁推拉窗', price: 8000 },
      { id: 'win-casement', name: '斷橋鋁平開窗', price: 10000 },
      { id: 'win-hung', name: '斷橋鋁下懸窗', price: 10000 },
      { id: 'win-grille', name: '安全 格柵窗', price: 12000 }
    ],
    // 外牆板材顏色與雕花板
    exteriorWalls: [
      { id: 'wall-std-white', name: '標準彩鋼板 (灰白色) [標配]', price: 0 },
      { id: 'wall-std-wood', name: '標準彩鋼板 (木紋色) [標配]', price: 0 },
      { id: 'wall-std-grey', name: '標準彩鋼板 (灰色) [標配]', price: 0 },
      { id: 'wall-carved-brick', name: '金屬雕花板 (磚紅砂七磚)', price: 45000 },
      { id: 'wall-carved-grey', name: '金屬雕花板 (古牆灰七磚)', price: 45000 },
      { id: 'wall-carved-white', name: '金屬雕花板 (天使白木紋)', price: 45000 },
      { id: 'wall-carved-wood', name: '金屬雕花板 (雞翅木紋)', price: 45000 }
    ],
    // 室內地面材料
    flooring: [
      { id: 'floor-leather', name: '2.0mm 木紋色地板革 [標配]', price: 0 },
      { id: 'floor-spc', name: '4.0mm 石塑鎖扣防水木紋地板', price: 28000 }
    ],
    // 電路與插座規格
    powerSockets: [
      { id: 'socket-tw', name: '台灣美標插座 (110V/220V) [標配]', price: 0 },
      { id: 'socket-universal', name: '全客機 國際通用插座面版', price: 5000 }
    ]
  }

  /* ====================================
     OPTIONS DATA (原本帶圖片的複選升級項目)
  ====================================== */
  const optionList = [
    { id: 'curtain', name: '全景豪華玻璃帷幕牆', price: 95000, img: '/opt-curtain.png' },
    { id: 'bathroom', name: '現代化乾濕分離浴室', price: 65000, img: '/opt-bathroom.png' },
    { id: 'floor', name: '石墨烯智能地暖系統', price: 38000, img: '/opt-floor.png' },
    { id: 'solar', name: '綠能包覆全屋太陽能系統', price: 220000, img: '/opt-solar.png' },
    { id: 'battery', name: '特斯拉級高性能儲能電池', price: 180000, img: '/opt-battery.png' },
    { id: 'offgrid', name: 'ESG 離網控制供電系統', price: 120000, img: '/opt-offgrid.png' },
    { id: 'glass', name: '落地玻璃門隔音窗', price: 45000, img: '/opt-glass.png' },
    { id: 'terrace', name: '戶外延伸休閒露台區', price: 50000, img: '/opt-terrace.png' },
  ]

  /* ====================================
     STATE (狀態管理)
  ====================================== */
  const [activeProduct, setActiveProduct] = useState(products[1]) // 預設 20呎 入門款
  const [selectedOptions, setSelectedOptions] = useState({}) // 多選圖片項目狀態

  // PDF 單選規格狀態
  const [selectedPlan, setSelectedPlan] = useState(productOptions.floorPlans['20ft'][0])
  const [selectedDoor, setSelectedDoor] = useState(productOptions.entranceDoors[0])
  const [selectedWindow, setSelectedWindow] = useState(productOptions.windows[0])
  const [selectedWall, setSelectedWall] = useState(productOptions.exteriorWalls[0])
  const [selectedFloor, setSelectedFloor] = useState(productOptions.flooring[0])
  const [selectedSocket, setSelectedSocket] = useState(productOptions.powerSockets[0])

  const lineUrl = 'https://lin.ee'

  /* ====================================
     FUNCTIONS (商業計算邏輯)
  ====================================== */
  const handleProductChange = (prod) => {
    setActiveProduct(prod)
    // 當切換主機規格尺寸時，連動切換對應可用的佈局列表，並預設選取第一個
    const availablePlans = productOptions.floorPlans[prod.id] || []
    setSelectedPlan(availablePlans[0] || { name: '預設大通間', price: 0 })
  }

  const handleCheckboxChange = (id) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // 計算加總
  const basePrice = activeProduct.price

  // 單選部分加總
  const singleOptionsPrice = 
    (selectedPlan?.price || 0) + 
    selectedDoor.price + 
    selectedWindow.price + 
    selectedWall.price + 
    selectedFloor.price + 
    selectedSocket.price

  // 複選圖片部分加總
  const optionsPrice = optionList.reduce((sum, opt) => {
    return sum + (selectedOptions[opt.id] ? opt.price : 0)
  }, 0)

  const totalPrice = basePrice + singleOptionsPrice + optionsPrice

  // 獲取所有選中配備名稱，用於帶入 LINE
  const getSelectedNamesText = () => {
    const names = [
      `室內佈局:${selectedPlan?.name}`,
      `入戶門:${selectedDoor.name.split(' ')[0]}`,
      `窗戶:${selectedWindow.name.split(' ')[0]}`,
      `外牆:${selectedWall.name.split(' ')[0]}`,
      `地面:${selectedFloor.name.split(' ')[0]}`,
      `插座:${selectedSocket.name.split(' ')[0]}`
    ]
    optionList.forEach(opt => {
      if (selectedOptions[opt.id]) names.push(opt.name)
    })
    return names.join('、')
  }

  const handlePdfExport = () => {
    const content = `
GPSH 智慧翼展屋 專屬選配規格單

----------------------------
【基本房屋主機】
主機型號：${activeProduct.name} (NT$ ${basePrice.toLocaleString()})
空間格局：${selectedPlan?.name} (+NT$ ${selectedPlan?.price.toLocaleString()})

【建材工藝選配】
大門款式：${selectedDoor.name}
窗戶款式：${selectedWindow.name}
外牆板材：${selectedWall.name}
地板材料：${selectedFloor.name}
插座面板：${selectedSocket.name}

【智慧與系統升級】
${optionList.filter(o => selectedOptions[o.id]).map(o => `• \${o.name} (+NT\$ \${o.price.toLocaleString()})`).join('\n') || '無額外系統加購'}

----------------------------
預估估算總價：
NT$ ${totalPrice.toLocaleString()} 元

請截圖此畫面或連繫下方 LINE 官方顧問取得正式報價合約。
    `
    alert(content)
  }

  /* ====================================
     JSX 網頁渲染
  ====================================== */
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/70 border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-widest">
            GPSH
            <span className="text-green-500 ml-2">SMART HOUSE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-zinc-400 items-center">
            <a href="#products" className="hover:text-white transition">產品技術</a>
            <a href="#configurator" className="hover:text-white transition">客製配置</a>
            <a href="#investment" className="hover:text-white transition">投資方案</a>
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
              <a href="#configurator" className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
                開始客製配置
              </a>
              <a href="#investment" className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
                投資方案
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-14">
              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">OFF</div>
                <div className="text-xs text-zinc-500 mt-1">GRID SYSTEM</div>
              </div>
              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">ESG</div>
                <div className="text-xs text-zinc-500 mt-1">GREEN ENERGY</div>
              </div>
              <div className="border border-zinc-800 rounded-2xl p-5 bg-zinc-900/30">
                <div className="text-3xl font-black text-green-500">AI</div>
                <div className="text-xs text-zinc-500 mt-1">ENERGY CONTROL</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-green-500/10" />
            <div className="relative rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">
              <img src="/house-main.png" alt="GPSH SMART HOUSE" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= VIDEO ================= */}
      <section className="border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-8">工廠製造<br />到現場部署</h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed">
              <p>全程於模組化工廠精密製造，出廠前完成結構、防水與電力測試。</p>
              <p>現場可快速展開，當天完成基本部署。</p>
              <p>真正實現：「即運輸、即展開、即可使用」</p>
            </div>
          </div>
          <div className="relative aspect-video rounded-[32px] overflow-hidden border border-zinc-800 shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://youtube.com/shorts/rc2IO7ueJhU?si=63YhqiuJpbNbOaP9"
              title="GPSH SMART HOUSE"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURES & PRODUCTS ================= */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black mb-4">核心技術</h2>
          <p className="text-zinc-500">模組化鋼構 × 太陽能 × 智能控制 × 可移動資產</p>
        </div>

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

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {products.map((prod, idx) => (
            <div key={idx} className="border border-zinc-800 bg-zinc-900/40 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono bg-zinc-800 px-3 py-1 rounded-full text-zinc-400">{prod.size}</span>
                <h3 className="text-2xl font-black mt-4 mb-2">{prod.name}</h3>
                <p className="text-zinc-400 text-sm mb-6">{prod.desc}</p>
              </div>
              <div className="text-xl font-bold text-green-400 border-t border-zinc-800 pt-4 mt-4">
                NT\$ {prod.price.toLocaleString()} 起
              </div>
            </div>
          ))}
        </div>
      </section>

           {/* ================= CONFIGURATOR (客製配置器) ================= */}
      <section id="configurator" className="max-w-7xl mx-auto px-6 py-24 border-b border-zinc-900">
        
        {/* Step 1: 選擇主機規格尺寸 */}
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
                onClick={() => setActiveProduct(prod)}
                className={`p-6 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                  activeProduct.id === prod.id ? 'border-green-500 bg-green-500/5 shadow-[0_0_25px_rgba(34,197,94,0.1)]' : 'border-zinc-800 bg-zinc-900/20 hover:border-zinc-700'
                }`}
              >
                <div>
                  <h3 className="text-lg font-bold mb-1">{prod.name}</h3>
                  <p className="text-zinc-500 text-xs line-clamp-2">{prod.desc}</p>
                </div>
                <div className="text-sm font-bold text-green-400 mt-4">
                  NT$ {prod.price.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: 選擇配備項目 與 右側摘要 */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-black mb-2 flex items-center text-green-400">
              <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 text-sm flex items-center justify-center mr-3 font-mono">2</span>
              勾選客製升級配備
            </h2>
            <p className="text-zinc-400 mb-8">可複選。升級項目皆隨車出廠與模組化安裝。</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {optionList.map((opt) => (
                <label 
                  key={opt.id} 
                  className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer select-none transition ${
                    selectedOptions[opt.id] ? 'border-green-500 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/10 hover:border-zinc-700'
                  }`}
                >
                  {/* 已移除 onError 阻擋編譯的錯誤語法 */}
                  <div className="h-32 bg-zinc-900 relative">
                    <img 
                      src={opt.img} 
                      alt={opt.name} 
                      className="w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute top-3 left-3">
                      <input 
                        type="checkbox" 
                        checked={!!selectedOptions[opt.id]} 
                        onChange={() => handleCheckboxChange(opt.id)}
                        className="accent-green-500 w-5 h-5 rounded"
                      />
                    </div>
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-1">
                    <span className="font-bold text-sm text-white mb-2">{opt.name}</span>
                    <span className="text-green-400 text-xs font-mono">+ NT$ {opt.price.toLocaleString()}</span>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* 右側：計算報價單 */}
          <div className="sticky top-28 border border-zinc-800 bg-zinc-900/50 p-8 rounded-[32px] backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">配備明細摘要</h3>
            
            <div className="space-y-3 text-sm text-zinc-400 min-h-[100px]">
              <div className="flex justify-between text-white font-medium">
                <span>{activeProduct.name} 基礎結構</span>
                <span>NT$ {basePrice.toLocaleString()}</span>
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

        {/* Step 2 + Step 3 混合佈局區 */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          
          <div className="lg:col-span-2 space-y-12">
            
            {/* Step 2: PDF 精細化建材工藝下拉群組 */}
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
                    onChange={(e) => setSelectedPlan(productOptions.floorPlans[activeProduct.id].find(p => p.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {(productOptions.floorPlans[activeProduct.id] || []).map(p => (
                      <option key={p.id} value={p.id}>{p.name} (+NT$ {p.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">入戶大門門款</label>
                  <select 
                    value={selectedDoor.id} 
                    onChange={(e) => setSelectedDoor(productOptions.entranceDoors.find(d => d.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {productOptions.entranceDoors.map(d => (
                      <option key={d.id} value={d.id}>{d.name} (+NT$ {d.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">防噪防颱窗戶款式</label>
                  <select 
                    value={selectedWindow.id} 
                    onChange={(e) => setSelectedWindow(productOptions.windows.find(w => w.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {productOptions.windows.map(w => (
                      <option key={w.id} value={w.id}>{w.name} (+NT$ {w.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">外牆板材顏色與雕花板</label>
                  <select 
                    value={selectedWall.id} 
                    onChange={(e) => setSelectedWall(productOptions.exteriorWalls.find(w => w.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {productOptions.exteriorWalls.map(w => (
                      <option key={w.id} value={w.id}>{w.name} (+NT$ {w.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">室內防水防磨地面材料</label>
                  <select 
                    value={selectedFloor.id} 
                    onChange={(e) => setSelectedFloor(productOptions.flooring.find(f => f.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {productOptions.flooring.map(f => (
                      <option key={f.id} value={f.id}>{f.name} (+NT$ {f.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-2">配電迴路與插座面板規格</label>
                  <select 
                    value={selectedSocket.id} 
                    onChange={(e) => setSelectedSocket(productOptions.powerSockets.find(s => s.id === e.target.value))}
                    className="w-full bg-black border border-zinc-800 rounded-xl p-3 text-sm text-zinc-300 focus:border-green-500 outline-none"
                  >
                    {productOptions.powerSockets.map(s => (
                      <option key={s.id} value={s.id}>{s.name} (+NT$ {s.price.toLocaleString()})</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: 原本帶有縮圖的智慧複選升級配備項目 */}
            <div>
              <h2 className="text-2xl font-black mb-2 flex items-center text-green-400">
                <span className="w-8 h-8 rounded-full bg-green-500/10 border border-green-500/30 text-sm flex items-center justify-center mr-3 font-mono">3</span>
                勾選高級智慧與系統功能加購
              </h2>
              <p className="text-zinc-400 mb-8 text-sm">可複選。升級項目皆隨車出廠與模組化整合安裝。</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {optionList.map((opt) => (
                  <label 
                    key={opt.id} 
                    className={`flex flex-col rounded-2xl border overflow-hidden cursor-pointer select-none transition ${
                      selectedOptions[opt.id] ? 'border-green-500 bg-green-500/5' : 'border-zinc-800 bg-zinc-900/10 hover:border-zinc-700'
                    }`}
                  >
                    <div className="h-36 bg-zinc-900 relative">
                      <img 
                        src={opt.img} 
                        alt={opt.name} 
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => { e.target.style.display = 'none'; }} 
                      />
                      <div className="absolute top-3 left-3">
                        <input 
                          type="checkbox" 
                          checked={!!selectedOptions[opt.id]} 
                          onChange={() => handleCheckboxChange(opt.id)}
                          className="accent-green-500 w-5 h-5 rounded"
                        />
                      </div>
                    </div>
                    <div className="p-4 flex flex-col justify-between flex-1">
                      <span className="font-bold text-sm text-white mb-2">{opt.name}</span>
                      <span className="text-green-400 text-xs font-mono">+ NT$ {opt.price.toLocaleString()}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* 右側：計算報價單 (動態面板) */}
          <div className="sticky top-28 border border-zinc-800 bg-zinc-900/50 p-8 rounded-[32px] backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 pb-4 border-b border-zinc-800">配備明細摘要</h3>
            
            <div className="space-y-3 text-xs text-zinc-400 min-h-[120px]">
              <div className="flex justify-between text-white font-medium">
                <span>{activeProduct.name} 基礎結構</span>
                <span>NT$ {basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• 空間間隔佈局 ({selectedPlan?.name})</span>
                <span className="text-zinc-300">NT$ {(selectedPlan?.price || 0).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>• 建材建材 ({selectedWall.name.split(' ')[0]} / {selectedFloor.name.split(' ')[0]})</span>
                <span
