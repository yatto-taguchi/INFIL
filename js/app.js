/**
 * LittDesign 3D Craft E-Commerce Application Engine
 * Pure Vanilla JS, Zero External Frameworks, Production-Ready
 */

// Fallback Product Dataset in case of local file:// protocol CORS restrictions
const FALLBACK_PRODUCTS = [
  {
    "id": "ld-001",
    "name": "幾何学ウェーブ プランター",
    "subtitle": "Geometric Wave Planter Vase",
    "category": "interior",
    "categoryName": "インテリア・花器",
    "price": 3800,
    "stock": 5,
    "featured": true,
    "color": "Matte Pure White（マットピュアホワイト）",
    "material": "高密度バイオPLA（植物由来生分解性プラスチック）",
    "printSpecs": {
      "layerHeight": "0.16mm 高精細積層",
      "printTime": "約11時間40分",
      "dimensions": "幅 110mm × 奥行 110mm × 高さ 165mm",
      "weight": "約 195g",
      "heatResistance": "耐熱温度 55℃（食洗機・熱湯不可）"
    },
    "description": "数式に基づいた有機的なスパイラル幾何学を描く、LittDesignのシグネチャーモデル。FDM方式3Dプリンタならではの連続する層の重なりが、外光によって豊かな陰影を生み出します。多肉植物や観葉植物のポットとしてはもちろん、オブジェとしても空間にモダンな静けさをもたらします。",
    "features": [
      "底面水抜き穴＆専用ドリップトレイ設計",
      "光の入射角によって表情を変えるスパイラルリブ構造",
      "トウモロコシ由来の環境調和型バイオPLA素材採用"
    ],
    "images": [
      { "url": "assets/images/item-planter-1.jpg", "label": "正面全体ビュー", "angle": "Front View" },
      { "url": "assets/images/item-planter-2.jpg", "label": "上面・幾何学開口アングル", "angle": "Top-down Spiral" },
      { "url": "assets/images/item-planter-3.jpg", "label": "積層痕ディテール（0.16mmピッチ）", "angle": "Layer Detail" }
    ],
    "video": {
      "type": "timelapse",
      "title": "3Dプリント造形タイムラプス（Core-XY高速積層）",
      "preview": "assets/images/hero-craft.jpg"
    }
  },
  {
    "id": "ld-002",
    "name": "アーチ型マグネット デスクオーガナイザー",
    "subtitle": "Arch Magnetic Desk Organizer & Stand",
    "category": "stationery",
    "categoryName": "ステーショナリー",
    "price": 4200,
    "stock": 2,
    "featured": true,
    "color": "Sand Beige（サンドベージュ）",
    "material": "高密度バイオPLA（植物由来生分解性プラスチック）",
    "printSpecs": {
      "layerHeight": "0.18mm 高密度積層",
      "printTime": "約9時間15分",
      "dimensions": "幅 155mm × 奥行 85mm × 高さ 90mm",
      "weight": "約 160g",
      "heatResistance": "耐熱温度 55℃（直射日光・車内放置厳禁）"
    },
    "description": "クラシック建築の連続アーチ構造に着想を得たデスクトップオーガナイザー。スマートフォンやタブレットを最適な角度でホールドしながら、手前にはお気に入りの筆記具を美しく整列させます。デスク上をミニマルに整理し、作業効率と視覚的な調和を高めます。",
    "features": [
      "各種スマートフォン（厚み13mmまで・ケース装着可）対応スタンド",
      "筆記具用リブ溝 ＆ メモ・名刺立てアーチスリット",
      "デスクを傷つけないシリコンクッション底面付属"
    ],
    "images": [
      { "url": "assets/images/item-organizer-1.jpg", "label": "正面・実使用シーン", "angle": "Perspective View" },
      { "url": "assets/images/item-organizer-2.jpg", "label": "サイドアーチ構造アングル", "angle": "Side Arch" }
    ],
    "video": {
      "type": "timelapse",
      "title": "連続アーチのブリッジ造形プロセス",
      "preview": "assets/images/hero-craft.jpg"
    }
  },
  {
    "id": "ld-003",
    "name": "ボロノイ幾何学 ヘッドホンスタンド",
    "subtitle": "Voronoi Acoustic Headphone Stand",
    "category": "gadget",
    "categoryName": "ガジェット・オーディオ",
    "price": 6800,
    "stock": 0,
    "featured": false,
    "color": "Stealth Dark Charcoal（ステルスチャコール）",
    "material": "高剛性PLA+（強化耐衝撃ポリ乳酸）",
    "printSpecs": {
      "layerHeight": "0.20mm 高強度ボロノイシェル",
      "printTime": "約16時間50分",
      "dimensions": "幅 140mm × 奥行 145mm × 高さ 260mm",
      "weight": "約 240g",
      "heatResistance": "耐熱温度 60℃"
    },
    "description": "自然界の蜂の巣や骨格構造に見られるボロノイ（Voronoi）分割アルゴリズムを活用した、金型成型では不可能な一体中空トラス構造。ヘッドホンのヘッドバンドにかかる荷重を均等に分散し、型崩れを防ぎます。ケーブルをスマートに巻き取れるベースフックを装備。",
    "features": [
      "金型不可能な3Dプリンタならではの有機的トラス立体構造",
      "ヘッドバンドに優しい幅広曲面サポート",
      "オーディオケーブルすっきり収納ベース"
    ],
    "images": [
      { "url": "assets/images/item-headphone-1.jpg", "label": "ヘッドホン装着アングル", "angle": "Front Fit" },
      { "url": "assets/images/item-headphone-2.jpg", "label": "ボロノイトラス拡大ディテール", "angle": "Lattice Detail" }
    ],
    "video": {
      "type": "timelapse",
      "title": "オーバーハング高難度中空プリント工程",
      "preview": "assets/images/hero-craft.jpg"
    }
  },
  {
    "id": "ld-004",
    "name": "プリズム インセンス＆キャンドルホルダー",
    "subtitle": "Prism Incense & Tea-light Holder",
    "category": "lifestyle",
    "categoryName": "ライフスタイル・お香",
    "price": 2900,
    "stock": 8,
    "featured": true,
    "color": "Warm Ivory（ウォームアイボリー）",
    "material": "高密度バイオPLA（植物由来生分解性プラスチック）",
    "printSpecs": {
      "layerHeight": "0.12mm ウルトラファイン積層",
      "printTime": "約7時間20分",
      "dimensions": "幅 92mm × 奥行 92mm × 高さ 52mm",
      "weight": "約 95g",
      "heatResistance": "耐熱温度 55℃（※金属カップ入りティーライト付属）"
    },
    "description": "多面体幾何学のファセット（面）が光を複雑に反射し、キャンドルの炎やお香のゆらぎとともに美しい影のグラデーションをテーブル上に投影します。スティック型お香とLEDまたはカップ入りティーライトキャンドルの両方に対応するマルチパーパスデザイン。",
    "features": [
      "お香スティック穴（径2.5mm）＋金属受皿スペース",
      "LEDティーライト・カップキャンドル両対応",
      "0.12mmの極細ピッチによるシルキーな陶器調の質感"
    ],
    "images": [
      { "url": "assets/images/item-holder-1.jpg", "label": "キャンドル＆お香ホルダー 全体", "angle": "Perspective" },
      { "url": "assets/images/item-holder-2.jpg", "label": "上面・幾何学ファセットの陰影", "angle": "Top Geometry" }
    ],
    "video": {
      "type": "timelapse",
      "title": "マイクロファセット造形プロセス",
      "preview": "assets/images/hero-craft.jpg"
    }
  }
];

class LittStoreApp {
  constructor() {
    this.products = [];
    this.currentFilter = 'all';
    this.currentSort = 'default';
    this.cart = this.loadCart();
    this.currentUser = this.loadUser();
    this.currentDetailProduct = null;
    this.detailQuantity = 1;
    this.activeAngleIndex = 0;
    this.activePaymentMethod = 'card';

    this.init();
  }

  async init() {
    await this.loadProducts();
    this.setupEventListeners();
    this.renderProducts();
    this.updateCartUI();
    this.updateAuthUI();
  }

  // 1. Data Management
  async loadProducts() {
    try {
      const response = await fetch('js/products.json');
      if (!response.ok) throw new Error('Fetch failed');
      this.products = await response.json();
    } catch (e) {
      console.info('Using embedded fallback products dataset:', e);
      this.products = FALLBACK_PRODUCTS;
    }

    // Check custom stock overrides from local storage (e.g. after simulation order)
    const localStock = localStorage.getItem('litt_custom_stock');
    if (localStock) {
      try {
        const stockMap = JSON.parse(localStock);
        this.products.forEach(p => {
          if (stockMap[p.id] !== undefined) {
            p.stock = stockMap[p.id];
          }
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  saveStockOverride() {
    const stockMap = {};
    this.products.forEach(p => stockMap[p.id] = p.stock);
    localStorage.setItem('litt_custom_stock', JSON.stringify(stockMap));
  }

  loadCart() {
    try {
      const saved = localStorage.getItem('litt_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  }

  saveCart() {
    localStorage.setItem('litt_cart', JSON.stringify(this.cart));
    this.updateCartUI();
  }

  loadUser() {
    try {
      const saved = localStorage.getItem('litt_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  }

  saveUser(user) {
    this.currentUser = user;
    if (user) {
      localStorage.setItem('litt_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('litt_user');
    }
    this.updateAuthUI();
  }

  // 2. Event Listeners Setup
  setupEventListeners() {
    // Header scroll blur effect
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.site-header');
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Category Filter Buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.currentFilter = e.currentTarget.dataset.filter;
        this.renderProducts();
      });
    });

    // Sort Selection
    const sortSelect = document.getElementById('catalogSort');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.currentSort = e.target.value;
        this.renderProducts();
      });
    }

    // Drawer Cart Toggle
    const cartToggleBtn = document.getElementById('btnOpenCart');
    const cartDrawer = document.getElementById('cartDrawerBackdrop');
    const closeCartBtn = document.getElementById('btnCloseCart');

    if (cartToggleBtn) {
      cartToggleBtn.addEventListener('click', () => this.openCart());
    }
    if (closeCartBtn) {
      closeCartBtn.addEventListener('click', () => this.closeCart());
    }
    if (cartDrawer) {
      cartDrawer.addEventListener('click', (e) => {
        if (e.target === cartDrawer) this.closeCart();
      });
    }

    // Product Detail Modal Controls
    const detailModal = document.getElementById('productDetailModal');
    const closeDetailBtn = document.getElementById('btnCloseDetail');
    if (closeDetailBtn) {
      closeDetailBtn.addEventListener('click', () => this.closeDetailModal());
    }
    if (detailModal) {
      detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) this.closeDetailModal();
      });
    }

    // Detail Stepper Buttons
    const btnMinus = document.getElementById('detailQtyMinus');
    const btnPlus = document.getElementById('detailQtyPlus');
    if (btnMinus) {
      btnMinus.addEventListener('click', () => {
        if (this.detailQuantity > 1) {
          this.detailQuantity--;
          this.updateDetailQuantityUI();
        }
      });
    }
    if (btnPlus) {
      btnPlus.addEventListener('click', () => {
        if (this.currentDetailProduct && this.detailQuantity < this.currentDetailProduct.stock) {
          this.detailQuantity++;
          this.updateDetailQuantityUI();
        }
      });
    }

    // Add to Cart from Detail
    const btnDetailAdd = document.getElementById('btnDetailAddToCart');
    if (btnDetailAdd) {
      btnDetailAdd.addEventListener('click', () => {
        if (this.currentDetailProduct) {
          this.addToCart(this.currentDetailProduct.id, this.detailQuantity);
          this.closeDetailModal();
          this.openCart();
        }
      });
    }

    // Checkout Flow Modal Controls
    const btnStartCheckout = document.getElementById('btnStartCheckout');
    const checkoutModal = document.getElementById('checkoutModal');
    const btnCloseCheckout = document.getElementById('btnCloseCheckout');

    if (btnStartCheckout) {
      btnStartCheckout.addEventListener('click', () => {
        if (this.cart.length === 0) return;
        this.closeCart();
        this.openCheckoutModal();
      });
    }
    if (btnCloseCheckout) {
      btnCloseCheckout.addEventListener('click', () => this.closeCheckoutModal());
    }
    if (checkoutModal) {
      checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) this.closeCheckoutModal();
      });
    }

    // Payment Method Tabs in Checkout
    const payTabs = document.querySelectorAll('.payment-tab-btn');
    payTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        payTabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        this.activePaymentMethod = e.currentTarget.dataset.method;
        this.togglePaymentFields();
      });
    });

    // Checkout Form Submission
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) {
      checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.processCheckout(new FormData(checkoutForm));
      });
    }

    // Success Modal Close
    const btnCloseSuccess = document.getElementById('btnCloseSuccess');
    const successModal = document.getElementById('orderSuccessModal');
    if (btnCloseSuccess) {
      btnCloseSuccess.addEventListener('click', () => this.closeSuccessModal());
    }
    if (successModal) {
      successModal.addEventListener('click', (e) => {
        if (e.target === successModal) this.closeSuccessModal();
      });
    }

    // Auth Modal Controls
    const btnAuthHeader = document.getElementById('btnAuthHeader');
    const authModal = document.getElementById('authModal');
    const btnCloseAuth = document.getElementById('btnCloseAuth');
    if (btnAuthHeader) {
      btnAuthHeader.addEventListener('click', () => this.handleAuthHeaderClick());
    }
    if (btnCloseAuth) {
      btnCloseAuth.addEventListener('click', () => this.closeAuthModal());
    }
    if (authModal) {
      authModal.addEventListener('click', (e) => {
        if (e.target === authModal) this.closeAuthModal();
      });
    }

    // Auth Tabs
    const authTabs = document.querySelectorAll('.auth-tab-btn');
    authTabs.forEach(tab => {
      tab.addEventListener('click', (e) => {
        authTabs.forEach(t => t.classList.remove('active'));
        e.currentTarget.classList.add('active');
        const mode = e.currentTarget.dataset.mode;
        document.getElementById('authLoginForm').style.display = mode === 'login' ? 'block' : 'none';
        document.getElementById('authRegisterForm').style.display = mode === 'register' ? 'block' : 'none';
      });
    });

    // Login & Register Handlers
    const loginForm = document.getElementById('authLoginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        this.saveUser({ name: email.split('@')[0] + '様', email: email, address: '岡山県津山市' });
        this.closeAuthModal();
      });
    }

    const regForm = document.getElementById('authRegisterForm');
    if (regForm) {
      regForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const address = document.getElementById('regAddress').value;
        this.saveUser({ name: name, email: email, address: address });
        this.closeAuthModal();
      });
    }

    // Keyboard ESC to close any modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeDetailModal();
        this.closeCart();
        this.closeCheckoutModal();
        this.closeSuccessModal();
        this.closeAuthModal();
      }
    });
  }

  // 3. Rendering Products
  renderProducts() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    let list = [...this.products];

    // Filter
    if (this.currentFilter !== 'all') {
      list = list.filter(p => p.category === this.currentFilter);
    }

    // Sort
    if (this.currentSort === 'price-asc') {
      list.sort((a, b) => a.price - b.price);
    } else if (this.currentSort === 'price-desc') {
      list.sort((a, b) => b.price - a.price);
    } else if (this.currentSort === 'stock') {
      list.sort((a, b) => b.stock - a.stock);
    }

    grid.innerHTML = list.map(product => {
      const isSoldOut = product.stock <= 0;
      const isLowStock = product.stock > 0 && product.stock <= 3;

      let badgeHtml = '';
      if (isSoldOut) {
        badgeHtml = `<span class="badge-status sold-out">SOLD OUT</span>`;
      } else if (isLowStock) {
        badgeHtml = `<span class="badge-status low-stock">残り${product.stock}点</span>`;
      } else {
        badgeHtml = `<span class="badge-status in-stock">在庫あり</span>`;
      }

      const mainImg = product.images[0]?.url || 'assets/images/item-planter-1.jpg';

      return `
        <article class="product-card" data-id="${product.id}">
          <div class="product-image-wrap" onclick="window.storeApp.openDetailModal('${product.id}')">
            <div class="product-badge-corner">${badgeHtml}</div>
            <img src="${mainImg}" alt="${product.name}" loading="lazy" />
            <div class="quick-view-overlay">
              <span class="btn-quick-view">詳細・アングルを見る</span>
            </div>
          </div>
          <div class="product-card-body">
            <div class="product-category-tag">${product.categoryName}</div>
            <h3 class="product-card-title">${product.name}</h3>
            <p class="product-card-subtitle">${product.subtitle}</p>
            <div class="product-card-footer">
              <div class="product-price">
                <span class="price-label">税込・送料無料ライン対象</span>
                <span class="price-amount">${product.price.toLocaleString()}</span>
              </div>
              <button 
                type="button" 
                class="btn-add-cart" 
                ${isSoldOut ? 'disabled' : ''} 
                onclick="window.storeApp.handleCardAddToCart(event, '${product.id}')"
              >
                ${isSoldOut ? '売り切れ' : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> カゴへ追加'}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // 4. Product Detail Modal
  openDetailModal(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    this.currentDetailProduct = product;
    this.detailQuantity = 1;
    this.activeAngleIndex = 0;

    // Fill content
    document.getElementById('detailCategory').textContent = product.categoryName;
    document.getElementById('detailTitle').textContent = product.name;
    document.getElementById('detailSubtitle').textContent = product.subtitle;
    document.getElementById('detailPrice').textContent = product.price.toLocaleString();
    document.getElementById('detailDesc').textContent = product.description;

    // Badges
    const badgeContainer = document.getElementById('detailStockBadge');
    if (product.stock <= 0) {
      badgeContainer.innerHTML = '<span class="badge-status sold-out">SOLD OUT（完売）</span>';
    } else if (product.stock <= 3) {
      badgeContainer.innerHTML = `<span class="badge-status low-stock">残りわずか（在庫${product.stock}点）</span>`;
    } else {
      badgeContainer.innerHTML = `<span class="badge-status in-stock">在庫あり（${product.stock}点）</span>`;
    }

    // Specs
    document.getElementById('specMaterial').textContent = product.material;
    document.getElementById('specDimensions').textContent = product.printSpecs.dimensions;
    document.getElementById('specWeight').textContent = product.printSpecs.weight;
    document.getElementById('specLayer').textContent = product.printSpecs.layerHeight;
    document.getElementById('specHeat').textContent = product.printSpecs.heatResistance;

    // Gallery Render
    this.renderDetailGallery();
    this.updateDetailQuantityUI();

    // Modal state
    const modal = document.getElementById('productDetailModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeDetailModal() {
    const modal = document.getElementById('productDetailModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  renderDetailGallery() {
    const p = this.currentDetailProduct;
    if (!p) return;

    const mainImg = document.getElementById('detailMainImage');
    const angleTag = document.getElementById('detailAngleTag');
    const thumbsContainer = document.getElementById('detailThumbnails');

    const currentImgData = p.images[this.activeAngleIndex] || p.images[0];
    mainImg.src = currentImgData.url;
    mainImg.alt = currentImgData.label;
    angleTag.textContent = currentImgData.angle + ' - ' + currentImgData.label;

    thumbsContainer.innerHTML = p.images.map((img, idx) => `
      <button 
        type="button" 
        class="thumbnail-btn ${idx === this.activeAngleIndex ? 'active' : ''}" 
        onclick="window.storeApp.selectDetailAngle(${idx})"
        title="${img.label}"
      >
        <img src="${img.url}" alt="${img.label}" />
      </button>
    `).join('');
  }

  selectDetailAngle(index) {
    this.activeAngleIndex = index;
    this.renderDetailGallery();
  }

  updateDetailQuantityUI() {
    const valueEl = document.getElementById('detailQtyValue');
    const btnMinus = document.getElementById('detailQtyMinus');
    const btnPlus = document.getElementById('detailQtyPlus');
    const btnAdd = document.getElementById('btnDetailAddToCart');

    if (!valueEl || !this.currentDetailProduct) return;

    const maxStock = this.currentDetailProduct.stock;
    const isSoldOut = maxStock <= 0;

    valueEl.textContent = isSoldOut ? '0' : this.detailQuantity;
    btnMinus.disabled = isSoldOut || this.detailQuantity <= 1;
    btnPlus.disabled = isSoldOut || this.detailQuantity >= maxStock;

    if (isSoldOut) {
      btnAdd.disabled = true;
      btnAdd.textContent = '現在売り切れです';
    } else {
      btnAdd.disabled = false;
      btnAdd.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> カゴに追加する (¥${(this.currentDetailProduct.price * this.detailQuantity).toLocaleString()})`;
    }
  }

  // 5. Cart Management
  handleCardAddToCart(e, productId) {
    e.stopPropagation();
    this.addToCart(productId, 1);
    this.openCart();
  }

  addToCart(productId, quantity = 1) {
    const product = this.products.find(p => p.id === productId);
    if (!product || product.stock <= 0) return;

    const existingIndex = this.cart.findIndex(item => item.productId === productId);
    if (existingIndex > -1) {
      const currentQty = this.cart[existingIndex].quantity;
      const newQty = Math.min(currentQty + quantity, product.stock);
      this.cart[existingIndex].quantity = newQty;
    } else {
      this.cart.push({
        productId: productId,
        quantity: Math.min(quantity, product.stock),
        price: product.price
      });
    }

    this.saveCart();
  }

  changeCartQty(productId, delta) {
    const item = this.cart.find(i => i.productId === productId);
    const product = this.products.find(p => p.id === productId);
    if (!item || !product) return;

    const newQty = item.quantity + delta;
    if (newQty <= 0) {
      this.removeFromCart(productId);
    } else if (newQty <= product.stock) {
      item.quantity = newQty;
      this.saveCart();
    } else {
      alert(`大変申し訳ありません。この商品の現在庫は残り${product.stock}点となります。`);
    }
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.productId !== productId);
    this.saveCart();
  }

  openCart() {
    const drawer = document.getElementById('cartDrawerBackdrop');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
    this.updateCartUI();
  }

  closeCart() {
    const drawer = document.getElementById('cartDrawerBackdrop');
    drawer.classList.remove('open');
    document.body.style.overflow = '';
  }

  updateCartUI() {
    const countBadge = document.getElementById('cartBadgeCount');
    const drawerCount = document.getElementById('drawerCartCount');
    const itemsList = document.getElementById('cartItemsList');
    const emptyState = document.getElementById('cartEmptyState');
    const subtotalEl = document.getElementById('cartSubtotalAmount');
    const shippingEl = document.getElementById('cartShippingAmount');
    const totalEl = document.getElementById('cartTotalAmount');
    const btnCheckout = document.getElementById('btnStartCheckout');

    const totalCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);

    // Badges
    if (countBadge) {
      countBadge.textContent = totalCount;
      if (totalCount > 0) {
        countBadge.classList.add('has-items');
      } else {
        countBadge.classList.remove('has-items');
      }
    }
    if (drawerCount) drawerCount.textContent = totalCount;

    // Items calculation
    let subtotal = 0;
    const itemRows = this.cart.map(item => {
      const product = this.products.find(p => p.id === item.productId);
      if (!product) return '';

      const linePrice = product.price * item.quantity;
      subtotal += linePrice;

      return `
        <li class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${product.images[0]?.url}" alt="${product.name}" />
          </div>
          <div class="cart-item-info">
            <h4 class="cart-item-title">${product.name}</h4>
            <div class="cart-item-meta">${product.categoryName} / ${product.color}</div>
            <div class="cart-item-controls">
              <div class="quantity-stepper">
                <button type="button" class="stepper-btn" onclick="window.storeApp.changeCartQty('${product.id}', -1)">−</button>
                <span class="stepper-value">${item.quantity}</span>
                <button type="button" class="stepper-btn" onclick="window.storeApp.changeCartQty('${product.id}', 1)" ${item.quantity >= product.stock ? 'disabled' : ''}>＋</button>
              </div>
              <span class="cart-item-price">${linePrice.toLocaleString()}</span>
              <button type="button" class="btn-remove-item" onclick="window.storeApp.removeFromCart('${product.id}')" title="削除">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
              </button>
            </div>
          </div>
        </li>
      `;
    }).join('');

    // Shipping logic: free over 10,000 yen, otherwise 500 yen
    const shipping = subtotal === 0 ? 0 : (subtotal >= 10000 ? 0 : 500);
    const grandTotal = subtotal + shipping;

    if (this.cart.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      if (itemsList) itemsList.style.display = 'none';
      if (btnCheckout) btnCheckout.disabled = true;
    } else {
      if (emptyState) emptyState.style.display = 'none';
      if (itemsList) {
        itemsList.style.display = 'flex';
        itemsList.innerHTML = itemRows;
      }
      if (btnCheckout) btnCheckout.disabled = false;
    }

    if (subtotalEl) subtotalEl.textContent = `¥${subtotal.toLocaleString()}`;
    if (shippingEl) shippingEl.textContent = shipping === 0 ? (subtotal > 0 ? '無料' : '¥0') : `¥${shipping.toLocaleString()}`;
    if (totalEl) totalEl.textContent = `¥${grandTotal.toLocaleString()}`;
  }

  // 6. Checkout Flow (Stripe / PayPay Simulator)
  openCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Auto-fill user if logged in
    if (this.currentUser) {
      const emailField = document.getElementById('checkoutEmail');
      const nameField = document.getElementById('checkoutName');
      const addressField = document.getElementById('checkoutAddress');
      if (emailField && this.currentUser.email) emailField.value = this.currentUser.email;
      if (nameField && this.currentUser.name) nameField.value = this.currentUser.name;
      if (addressField && this.currentUser.address) addressField.value = this.currentUser.address;
    }

    // Populate summary in checkout
    this.renderCheckoutSummary();
    this.togglePaymentFields();
  }

  closeCheckoutModal() {
    const modal = document.getElementById('checkoutModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  togglePaymentFields() {
    const cardSection = document.getElementById('cardPaymentSection');
    const paypaySection = document.getElementById('paypayPaymentSection');

    if (this.activePaymentMethod === 'card') {
      cardSection.style.display = 'block';
      paypaySection.style.display = 'none';
    } else {
      cardSection.style.display = 'none';
      paypaySection.style.display = 'block';
    }
  }

  renderCheckoutSummary() {
    const container = document.getElementById('checkoutSummaryBox');
    if (!container) return;

    let subtotal = 0;
    const listHtml = this.cart.map(item => {
      const product = this.products.find(p => p.id === item.productId);
      if (!product) return '';
      const total = product.price * item.quantity;
      subtotal += total;
      return `<div style="display:flex; justify-content:space-between; margin-bottom:6px; font-size:0.86rem;">
        <span>${product.name} × ${item.quantity}</span>
        <span style="font-weight:600;">¥${total.toLocaleString()}</span>
      </div>`;
    }).join('');

    const shipping = subtotal >= 10000 ? 0 : 500;
    const grandTotal = subtotal + shipping;

    container.innerHTML = `
      <div style="font-weight:700; margin-bottom:10px; font-size:0.9rem;">ご注文明細</div>
      ${listHtml}
      <div style="border-top:1px solid var(--border-medium); margin-top:8px; padding-top:8px; display:flex; justify-content:space-between; font-size:0.86rem; color:var(--text-secondary);">
        <span>送料</span>
        <span>${shipping === 0 ? '無料' : '¥' + shipping.toLocaleString()}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:1.1rem; font-weight:800; margin-top:8px;">
        <span>合計お支払い金額</span>
        <span style="color:var(--text-primary);">¥${grandTotal.toLocaleString()}</span>
      </div>
    `;
  }

  processCheckout(formData) {
    const email = formData.get('email') || 'customer@example.com';
    const name = formData.get('name') || 'お客様';
    const address = formData.get('address') || '指定住所';

    // Generate Order ID
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const orderId = `LD-20260917-${randomSuffix}`;

    // Deduct stock
    this.cart.forEach(item => {
      const p = this.products.find(prod => prod.id === item.productId);
      if (p) {
        p.stock = Math.max(0, p.stock - item.quantity);
      }
    });
    this.saveStockOverride();

    // Record order in user history
    const orderRecord = {
      orderId: orderId,
      date: new Date().toLocaleDateString('ja-JP'),
      paymentMethod: this.activePaymentMethod === 'card' ? 'クレジットカード' : 'PayPay',
      items: [...this.cart],
      email: email,
      name: name,
      address: address
    };

    const history = JSON.parse(localStorage.getItem('litt_order_history') || '[]');
    history.unshift(orderRecord);
    localStorage.setItem('litt_order_history', JSON.stringify(history));

    // Clear Cart
    this.cart = [];
    this.saveCart();
    this.renderProducts();

    // Close checkout and show success modal
    this.closeCheckoutModal();
    this.showSuccessModal(orderRecord);
  }

  showSuccessModal(order) {
    const modal = document.getElementById('orderSuccessModal');
    document.getElementById('successOrderId').textContent = order.orderId;
    document.getElementById('successCustomerEmail').textContent = order.email;
    document.getElementById('successPaymentMethod').textContent = order.paymentMethod;

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeSuccessModal() {
    const modal = document.getElementById('orderSuccessModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  // 7. Auth and Profile
  handleAuthHeaderClick() {
    if (this.currentUser) {
      // Show user profile and order history
      this.openMyPageModal();
    } else {
      this.openAuthModal();
    }
  }

  openAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  closeAuthModal() {
    const modal = document.getElementById('authModal');
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  openMyPageModal() {
    const modal = document.getElementById('myPageModal');
    if (!modal) return;

    document.getElementById('myPageUserName').textContent = this.currentUser.name;
    document.getElementById('myPageUserEmail').textContent = this.currentUser.email;

    const history = JSON.parse(localStorage.getItem('litt_order_history') || '[]');
    const historyList = document.getElementById('myPageHistoryList');
    if (history.length === 0) {
      historyList.innerHTML = '<div style="color:var(--text-muted); font-size:0.88rem;">まだご注文履歴がありません。</div>';
    } else {
      historyList.innerHTML = history.map(order => `
        <div style="padding:12px; background:var(--bg-secondary); border:1px solid var(--border-light); border-radius:8px; margin-bottom:12px;">
          <div style="display:flex; justify-content:space-between; font-weight:700; font-size:0.88rem; margin-bottom:4px;">
            <span>${order.orderId}</span>
            <span style="color:var(--accent-blue);">${order.paymentMethod}</span>
          </div>
          <div style="font-size:0.78rem; color:var(--text-muted); margin-bottom:6px;">注文日: ${order.date}</div>
          <div style="font-size:0.82rem; color:var(--text-secondary);">
            発送ステータス: <strong style="color:#10b981;">ご注文確認済（7営業日以内に発送準備中）</strong>
          </div>
        </div>
      `).join('');
    }

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Logout button handler
    document.getElementById('btnLogoutUser').onclick = () => {
      this.saveUser(null);
      this.closeMyPageModal();
    };

    document.getElementById('btnCloseMyPage').onclick = () => this.closeMyPageModal();
    modal.onclick = (e) => {
      if (e.target === modal) this.closeMyPageModal();
    };
  }

  closeMyPageModal() {
    const modal = document.getElementById('myPageModal');
    if (modal) modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  updateAuthUI() {
    const btnAuth = document.getElementById('btnAuthHeader');
    if (!btnAuth) return;

    if (this.currentUser) {
      btnAuth.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>${this.currentUser.name}</span>
      `;
    } else {
      btnAuth.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>ログイン</span>
      `;
    }
  }
}

// Global bootstrap
document.addEventListener('DOMContentLoaded', () => {
  window.storeApp = new LittStoreApp();
});
