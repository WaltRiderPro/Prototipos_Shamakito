const SHAMAKITO_PRODUCTS = [
    {
        id: "caja-de-encaje",
        title: "CAJA DE ENCAJE",
        category: "Juguetes Didácticos",
        price: 250.0,
        rating: 4.8,
        ratingLabel: "4",
        reviewsCount: 42,
        age: "2–4 años",
        dimensions: "30 × 18 × 16 cm",
        material: "Madera certificada y pinturas al agua",
        badge: null,
        image: "assets/img/prod-caja-encaje.jpg",
        url: "producto.html?id=caja-de-encaje",
        description:
            "Caja de madera con piezas geométricas de colores que invita a clasificar, encajar y descubrir relaciones entre forma, tamaño y espacio.",
        purposeTitle: "Cada forma abre una posibilidad",
        purposeText:
            "El encaje permite comprobar, corregir y volver a intentar sin intervención adulta. Una experiencia concreta que fortalece la percepción espacial y la confianza.",
    },
    {
        id: "carrito-pasajero",
        title: "CARRITO PASAJERO",
        category: "Juguetes Didácticos",
        price: 45.0,
        rating: 4.9,
        ratingLabel: "4.9",
        reviewsCount: 28,
        age: "2–4 años",
        dimensions: "22 × 12 × 14 cm",
        material: "Madera certificada y ruedas de haya natural",
        badge: null,
        image: "assets/img/prod-carrito-pasajero.jpg",
        url: "producto.html?id=carrito-pasajero",
        description:
            "Vehículo de madera natural con pasajeros desmontables que estimula el juego simbólico, el desplazamiento libre y la coordinación motriz fina.",
        purposeTitle: "Movimiento libre e imaginación en marcha",
        purposeText:
            "Al deslizar el carrito y encajar sus pasajeros, el niño coordina fuerza, dirección y narrativa propia de forma autónoma.",
    },
    {
        id: "bloques-de-colores",
        title: "BLOQUES DE COLORES",
        category: "Juguetes Didácticos",
        price: 280.0,
        homePrice: 45.0,
        rating: 4.4,
        ratingLabel: "4.4",
        reviewsCount: 19,
        age: "2–4 años",
        dimensions: "34 × 24 × 8 cm",
        material: "Madera certificada con tintes botánicos no tóxicos",
        badge: null,
        image: "assets/img/prod-bloques-colores.jpg",
        url: "producto.html?id=bloques-de-colores",
        description:
            "Set de bloques sensoriales y geométricos en madera pulida para construir estructuras, explorar el equilibrio y clasificar por color y proporción.",
        purposeTitle: "Construir para comprender el equilibrio",
        purposeText:
            "La construcción libre con bloques introduce nociones tempranas de física, simetría, peso y resolución creativa de problemas.",
    },
    {
        id: "sonajero",
        title: "SONAJERO",
        category: "Juguetes Didácticos",
        price: 23.0,
        rating: 4.1,
        ratingLabel: "4.1",
        reviewsCount: 15,
        age: "0–2 años",
        dimensions: "14 × 7 × 7 cm",
        material: "Madera natural sin barniz y acabado sedoso",
        badge: "OFERTA",
        image: "assets/img/prod-sonajero.jpg",
        url: "producto.html?id=sonajero",
        description:
            "Sonajero ergonómico de madera natural con sonido suave y orgánico, diseñado para el agarre palmar del bebé y la estimulación auditiva respetuosa.",
        purposeTitle: "Primeros descubrimientos sensoriales",
        purposeText:
            "Su peso ligero y sonido acústico natural acompañan el reflejo de prensión y la relación causa–efecto desde los primeros meses.",
    },
    {
        id: "torre-de-argollas",
        title: "TORRE DE ARGOLLAS",
        category: "Juguetes Didácticos",
        price: 65.0,
        rating: 4.7,
        ratingLabel: "4.7",
        reviewsCount: 31,
        age: "0–2 años",
        dimensions: "16 × 16 × 24 cm",
        material: "Madera certificada con eje basculante de seguridad",
        badge: null,
        image: "assets/img/prod-torre-argollas.jpg",
        url: "producto.html?id=torre-de-argollas",
        description:
            "Torre apilable de argollas graduadas en madera que desarrolla la seriación por tamaño, la precisión óculo–manual y el control del movimiento.",
        purposeTitle: "Orden, tamaño y proporción en sus manos",
        purposeText:
            "Apilar y desapilar argollas permite visualizar secuencias de mayor a menor mientras perfecciona el movimiento de pinza y muñeca.",
    },
    {
        id: "rompecabezas",
        title: "ROMPECABEZAS",
        category: "Juguetes Didácticos",
        price: 89.0,
        rating: 5.0,
        ratingLabel: "5.0",
        reviewsCount: 24,
        age: "2–4 años",
        dimensions: "28 × 28 × 3 cm",
        material: "Madera contrachapada de abedul y pinturas al agua",
        badge: "NUEVO",
        image: "assets/img/prod-rompecabezas.jpg",
        url: "producto.html?id=rompecabezas",
        description:
            "Rompecabezas evolutivo en relieve de madera con piezas gruesas fáciles de manipular que estimulan la atención sostenida y la memoria visual.",
        purposeTitle: "Paciencia y visión del todo",
        purposeText:
            "Reconocer contornos y completar la figura brinda al niño una sensación inmediata de logro autónomo y concentración profunda.",
    },
    {
        id: "tablero-de-formas",
        title: "TABLERO DE FORMAS",
        category: "Juguetes Didácticos",
        price: 120.0,
        rating: 4.3,
        ratingLabel: "4.3",
        reviewsCount: 17,
        age: "2–4 años",
        dimensions: "32 × 22 × 4 cm",
        material: "Madera certificada con bordes redondeados",
        badge: null,
        image: "assets/img/prod-tablero-formas.jpg",
        url: "producto.html?id=tablero-de-formas",
        description:
            "Tablero sensorial Montessori para clasificar figuras geométricas, comparar alturas y asociar patrones de color de manera táctil.",
        purposeTitle: "Geometría táctil antes del papel",
        purposeText:
            "Tocar los bordes y vértices de cada pieza prepara la mente matemática y el trazo pre-escritor de forma natural.",
    },
    {
        id: "silla-infantil",
        title: "SILLA INFANTIL",
        category: "Mobiliario Infantil",
        price: 350.0,
        rating: 4.8,
        ratingLabel: "4.8",
        reviewsCount: 22,
        age: "2–4 años",
        dimensions: "34 × 32 × 52 cm",
        material: "Madera maciza certificada con acabado ecológico",
        badge: null,
        image: "assets/img/prod-silla-infantil.jpg",
        url: "producto.html?id=silla-infantil",
        description:
            "Silla ergonómica Montessori a la altura del niño para sentarse y levantarse con total independencia, fomentando su autonomía diaria.",
        purposeTitle: "Mobiliario a su medida para crecer libre",
        purposeText:
            "Cuando el entorno está adaptado a su escala, el niño decide cuándo sentarse a crear, leer o merendar sin depender del adulto.",
    },
    {
        id: "mesa-de-actividades",
        title: "MESA DE ACTIVIDADES",
        category: "Mobiliario Infantil",
        price: 420.0,
        rating: 4.6,
        ratingLabel: "4.6",
        reviewsCount: 14,
        age: "4–6 años",
        dimensions: "65 × 50 × 48 cm",
        material: "Madera maciza certificada de alta resistencia",
        badge: null,
        image: "assets/img/prod-mesa-actividades.jpg",
        url: "producto.html?id=mesa-de-actividades",
        description:
            "Mesa infantil de madera con superficie amplia y esquinas redondeadas, ideal para rincones de arte, lectura y trabajo con materiales Montessori.",
        purposeTitle: "Un espacio propio para concentrarse y crear",
        purposeText:
            "Delimitada y estable, invita a organizar sus materiales con orden y disfrutar largas sesiones de juego tranquilo.",
    },
];

const DEFAULT_CART = [
    { id: "caja-de-encaje", qty: 1 },
    { id: "carrito-pasajero", qty: 1 },
    { id: "bloques-de-colores", qty: 1 },
];

const DEFAULT_FAVS = [
    "caja-de-encaje",
    "carrito-pasajero",
    "bloques-de-colores",
];

const CART_STORAGE_KEY = "shamakito_cart_v1";
const COUPON_STORAGE_KEY = "shamakito_coupon_v1";
const FAVS_STORAGE_KEY = "shamakito_favs_v1";

/* ==========================================================================
   SMOOTH PAGE TRANSITION CONTROLLER (300ms Easing between HTML files)
   ========================================================================== */
function navigateWithTransition(targetUrl) {
    if (!targetUrl) return;
    const bar = document.getElementById("shamakitoTransitionBar");
    if (bar) bar.classList.add("active");
    document.body.classList.add("page-leaving");
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 240);
}

function initPageTransitions() {
    // Create top transition progress bar
    let bar = document.getElementById("shamakitoTransitionBar");
    if (!bar) {
        bar = document.createElement("div");
        bar.id = "shamakitoTransitionBar";
        bar.className = "page-transition-bar";
        document.body.appendChild(bar);
    }

    // Ensure body is visible if restored from bfcache (Back/Forward button)
    window.addEventListener("pageshow", () => {
        document.body.classList.remove("page-leaving");
        if (bar) bar.classList.remove("active");
    });

    // Intercept clicks on links pointing to another local .html page
    document.addEventListener("click", (e) => {
        const link = e.target.closest("a[href]");
        if (!link) return;

        // Ignore modified clicks, new tabs, downloads, or external protocols
        if (
            e.defaultPrevented ||
            e.button !== 0 ||
            e.metaKey ||
            e.ctrlKey ||
            e.shiftKey ||
            e.altKey ||
            link.target === "_blank" ||
            link.hasAttribute("download")
        ) {
            return;
        }

        const rawHref = link.getAttribute("href");
        if (
            !rawHref ||
            rawHref.startsWith("#") ||
            rawHref.startsWith("mailto:") ||
            rawHref.startsWith("tel:") ||
            rawHref.startsWith("javascript:")
        ) {
            return;
        }

        // Check if same-page hash change
        try {
            const target = new URL(rawHref, window.location.href);
            const current = new URL(window.location.href);
            if (
                target.origin === current.origin &&
                target.pathname === current.pathname &&
                target.search === current.search &&
                target.hash
            ) {
                return;
            }
        } catch (err) {}

        e.preventDefault();
        navigateWithTransition(rawHref);
    });
}

/* ==========================================================================
   STORAGE HELPERS (Cart, Coupon, Favorites)
   ========================================================================== */
function getCart() {
    try {
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        if (!raw) {
            localStorage.setItem(
                CART_STORAGE_KEY,
                JSON.stringify(DEFAULT_CART),
            );
            return [...DEFAULT_CART];
        }
        return JSON.parse(raw);
    } catch (e) {
        return [...DEFAULT_CART];
    }
}

function saveCart(cart) {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch (e) {}
    updateCartBadges();
}

function getCoupon() {
    try {
        const raw = localStorage.getItem(COUPON_STORAGE_KEY);
        if (raw === null) {
            localStorage.setItem(COUPON_STORAGE_KEY, "SHAMAKITO10");
            return "SHAMAKITO10";
        }
        return raw;
    } catch (e) {
        return "SHAMAKITO10";
    }
}

function setCoupon(code) {
    try {
        localStorage.setItem(COUPON_STORAGE_KEY, code);
    } catch (e) {}
}

function getFavorites() {
    try {
        const raw = localStorage.getItem(FAVS_STORAGE_KEY);
        if (!raw) {
            localStorage.setItem(
                FAVS_STORAGE_KEY,
                JSON.stringify(DEFAULT_FAVS),
            );
            return [...DEFAULT_FAVS];
        }
        return JSON.parse(raw);
    } catch (e) {
        return [...DEFAULT_FAVS];
    }
}

function saveFavorites(favs) {
    try {
        localStorage.setItem(FAVS_STORAGE_KEY, JSON.stringify(favs));
    } catch (e) {}
    updateFavBadges();
}

function toggleFavoriteId(prodId) {
    const favs = getFavorites();
    const idx = favs.indexOf(prodId);
    let added = false;
    if (idx >= 0) {
        favs.splice(idx, 1);
    } else {
        favs.push(prodId);
        added = true;
    }
    saveFavorites(favs);
    return added;
}

function updateCartBadges() {
    const cart = getCart();
    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    document.querySelectorAll(".js-cart-count").forEach((el) => {
        el.textContent = totalCount;
    });
}

function updateFavBadges() {
    const favs = getFavorites();
    document.querySelectorAll(".js-fav-count").forEach((el) => {
        el.textContent = favs.length;
    });
}

function showToast(message) {
    let toast = document.getElementById("shamakito-toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "shamakito-toast";
        toast.className = "toast-notification";
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg class="icon-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>${message}</span>`;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

function addToCart(productId, qty = 1) {
    const cart = getCart();
    const existing = cart.find((i) => i.id === productId);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ id: productId, qty });
    }
    saveCart(cart);
    const prod = SHAMAKITO_PRODUCTS.find((p) => p.id === productId);
    showToast(`${prod ? prod.title : "Producto"} agregado al carrito`);
}

/* ==========================================================================
   MOBILE & TABLET DRAWER + GLOBAL DELEGATION
   ========================================================================== */
function initNavigation() {
    updateCartBadges();
    updateFavBadges();

    const header = document.querySelector(".site-header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 10);
        });
    }

    const backdrop = document.getElementById("mobileDrawerBackdrop");
    const drawer = document.getElementById("mobileDrawer");
    const openBtns = document.querySelectorAll(".js-open-drawer");
    const closeBtn = document.getElementById("closeDrawerBtn");

    function toggleDrawer(open) {
        if (!drawer || !backdrop) return;
        drawer.classList.toggle("open", open);
        backdrop.classList.toggle("open", open);
    }

    openBtns.forEach((btn) =>
        btn.addEventListener("click", () => toggleDrawer(true)),
    );
    if (closeBtn) closeBtn.addEventListener("click", () => toggleDrawer(false));
    if (backdrop) backdrop.addEventListener("click", () => toggleDrawer(false));

    // Delegate Add-to-Cart and Heart Wishlist buttons globally
    document.addEventListener("click", (e) => {
        const addBtn = e.target.closest(".js-add-to-cart");
        if (addBtn) {
            e.preventDefault();
            const id = addBtn.getAttribute("data-id") || "caja-de-encaje";
            addToCart(id, 1);
        }

        const favBtn = e.target.closest(".js-fav-toggle");
        if (favBtn) {
            e.preventDefault();
            const prodId = favBtn.getAttribute("data-id");
            if (prodId) {
                const isAdded = toggleFavoriteId(prodId);
                favBtn.classList.toggle("active", isAdded);
                showToast(
                    isAdded
                        ? "Guardado en tus favoritos"
                        : "Eliminado de favoritos",
                );
                if (typeof window._renderFavoritesPage === "function") {
                    window._renderFavoritesPage();
                }
            } else {
                favBtn.classList.toggle("active");
                const isFav = favBtn.classList.contains("active");
                showToast(
                    isFav
                        ? "Guardado en tus favoritos"
                        : "Eliminado de favoritos",
                );
            }
        }
    });
}

/* ==========================================================================
   CATALOG FILTERING (catalogo.html — Desktop Sidebar + Tablet Pills)
   ========================================================================== */
function initCatalogPage() {
    const catalogGrid = document.getElementById("catalogProductsGrid");
    if (!catalogGrid) return;

    let state = {
        search: "",
        category: "Todos los productos",
        maxPrice: 500,
        age: null,
        rating: null,
        sort: "populares",
    };

    const searchInput = document.getElementById("catalogSearchInput");
    const priceSlider = document.getElementById("priceRangeSlider");
    const maxPriceLabel = document.getElementById("maxPriceDisplay");
    const applyFilterBtn = document.getElementById("applyFilterBtn");
    const clearFiltersBtn = document.getElementById("clearFiltersBtn");
    const sortSelect = document.getElementById("catalogSortSelect");
    const countDisplay = document.getElementById("catalogCountDisplay");
    const mobileFilterToggle = document.getElementById("mobileFilterToggle");
    const filterSidebar = document.getElementById("catalogFilterSidebar");

    const params = new URLSearchParams(window.location.search);
    const urlCat = params.get("categoria");
    if (urlCat) {
        state.category = urlCat;
        document.querySelectorAll(".js-cat-filter").forEach((btn) => {
            btn.classList.toggle(
                "active",
                btn.getAttribute("data-cat") === urlCat,
            );
        });
    }

    function renderCatalog() {
        const favs = getFavorites();
        let filtered = SHAMAKITO_PRODUCTS.filter((p) => {
            if (
                state.category !== "Todos los productos" &&
                p.category !== state.category
            ) {
                return false;
            }
            if (p.price > state.maxPrice) return false;
            if (state.age && p.age !== state.age) return false;
            if (state.rating && p.rating < state.rating) return false;
            if (
                state.search &&
                !p.title.toLowerCase().includes(state.search.toLowerCase())
            ) {
                return false;
            }
            return true;
        });

        if (state.sort === "precio-asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (state.sort === "precio-desc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (state.sort === "valoracion") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        if (countDisplay) {
            if (filtered.length === SHAMAKITO_PRODUCTS.length) {
                countDisplay.innerHTML = `Mostrando <strong>24 de 48</strong> productos`;
            } else {
                countDisplay.innerHTML = `Mostrando <strong>${filtered.length} de ${SHAMAKITO_PRODUCTS.length}</strong> productos`;
            }
        }

        if (filtered.length === 0) {
            catalogGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--surface-card); border-radius: 22px; border: 1px solid var(--border-warm);">
          <h3 style="font-size: 22px; margin-bottom: 8px;">No encontramos juguetes con esos filtros</h3>
          <p style="color: var(--text-secondary); margin-bottom: 18px;">Prueba limpiando los filtros para explorar toda nuestra colección Montessori.</p>
          <button type="button" class="btn btn-cta js-reset-inline">Ver todos los productos</button>
        </div>
      `;
            const inlineReset = catalogGrid.querySelector(".js-reset-inline");
            if (inlineReset)
                inlineReset.addEventListener("click", resetFilters);
            return;
        }

        catalogGrid.innerHTML = filtered
            .map((p) => {
                const isFav = favs.includes(p.id);
                return `
        <article class="product-card">
          <div class="product-thumb-wrap">
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
            <button type="button" class="fav-btn js-fav-toggle ${isFav ? "active" : ""}" data-id="${p.id}" aria-label="Guardar ${p.title} en favoritos">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            <a href="${p.url}">
              <img src="${p.image}" alt="${p.title}" loading="lazy">
            </a>
          </div>
          <div class="product-body">
            <span class="product-cat">${p.category}</span>
            <h3 class="product-title"><a href="${p.url}">${p.title}</a></h3>
            <div class="product-rating">
              <span class="stars">★ ★ ★ ★</span>
              <span>(${p.ratingLabel})</span>
            </div>
            <div class="product-footer">
              <span class="product-price">S/.${p.price.toFixed(2)}</span>
              <a href="${p.url}" class="btn btn-cta btn-sm">Ver producto</a>
            </div>
          </div>
        </article>
      `;
            })
            .join("");
    }

    function resetFilters() {
        state = {
            search: "",
            category: "Todos los productos",
            maxPrice: 500,
            age: null,
            rating: null,
            sort: "populares",
        };
        if (searchInput) searchInput.value = "";
        if (priceSlider) priceSlider.value = 500;
        if (maxPriceLabel) maxPriceLabel.textContent = "S/.500";
        document
            .querySelectorAll(".js-cat-filter")
            .forEach((b, idx) => b.classList.toggle("active", idx === 0));
        document
            .querySelectorAll(".js-age-filter")
            .forEach((b) => b.classList.remove("active"));
        document
            .querySelectorAll(".js-rating-filter")
            .forEach((b) => b.classList.remove("active"));
        renderCatalog();
    }

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            state.search = e.target.value;
            renderCatalog();
        });
    }

    document.querySelectorAll(".js-cat-filter").forEach((btn) => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll(".js-cat-filter")
                .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            state.category = btn.getAttribute("data-cat");
            renderCatalog();
        });
    });

    if (priceSlider) {
        priceSlider.addEventListener("input", (e) => {
            const val = Number(e.target.value);
            if (maxPriceLabel) maxPriceLabel.textContent = `S/.${val}`;
        });
    }

    if (applyFilterBtn && priceSlider) {
        applyFilterBtn.addEventListener("click", () => {
            state.maxPrice = Number(priceSlider.value);
            renderCatalog();
            showToast("Filtro aplicado");
        });
    }

    document.querySelectorAll(".js-age-filter").forEach((btn) => {
        btn.addEventListener("click", () => {
            const age = btn.getAttribute("data-age");
            if (state.age === age) {
                state.age = null;
                btn.classList.remove("active");
            } else {
                document
                    .querySelectorAll(".js-age-filter")
                    .forEach((b) => b.classList.remove("active"));
                state.age = age;
                btn.classList.add("active");
            }
            renderCatalog();
        });
    });

    document.querySelectorAll(".js-rating-filter").forEach((btn) => {
        btn.addEventListener("click", () => {
            const r = Number(btn.getAttribute("data-rating"));
            if (state.rating === r) {
                state.rating = null;
                btn.classList.remove("active");
            } else {
                document
                    .querySelectorAll(".js-rating-filter")
                    .forEach((b) => b.classList.remove("active"));
                state.rating = r;
                btn.classList.add("active");
            }
            renderCatalog();
        });
    });

    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            state.sort = e.target.value;
            renderCatalog();
        });
    }

    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener("click", () => {
            resetFilters();
            showToast("Filtros restablecidos");
        });
    }

    if (mobileFilterToggle && filterSidebar) {
        mobileFilterToggle.addEventListener("click", () => {
            filterSidebar.classList.toggle("open");
        });
    }

    // Tablet horizontal quick filter pills (Matches Tablet_Tablet_Catalog.pdf)
    document.querySelectorAll(".js-tablet-pill").forEach((pill) => {
        pill.addEventListener("click", () => {
            if (filterSidebar) {
                filterSidebar.classList.toggle("open");
                const targetFocus = pill.getAttribute("data-focus");
                if (targetFocus === "search" && searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                }
            }
        });
    });

    renderCatalog();
}

/* ==========================================================================
   PRODUCT DETAIL PAGE (producto.html — Supports all 9 Catalog Products + SUMAS)
   ========================================================================== */
function initProductDetailPage() {
    const detailContainer = document.getElementById("productDetailSection");
    if (!detailContainer) return;

    const params = new URLSearchParams(window.location.search);
    const prodId = params.get("id") || "caja-de-encaje";
    const product =
        SHAMAKITO_PRODUCTS.find((p) => p.id === prodId) ||
        SHAMAKITO_PRODUCTS[0];

    const mainImg = document.getElementById("detailMainImage");
    const titleEl = document.getElementById("detailTitle");
    const priceEl = document.getElementById("detailPrice");
    const breadcrumbEl = document.getElementById("detailBreadcrumbName");
    const catTagEl = document.getElementById("detailCategoryTag");
    const descEl = document.getElementById("detailDescription");
    const matEl = document.getElementById("detailMaterialSpec");
    const dimEl = document.getElementById("detailDimensionSpec");
    const ageEl = document.getElementById("detailAgeSpec");
    const purposeTitleEl = document.getElementById("detailPurposeTitle");
    const purposeTextEl = document.getElementById("detailPurposeText");
    const purposeImgEl = document.getElementById("detailPurposeImg");
    const qtyValEl = document.getElementById("detailQtyValue");
    const totalPriceEl = document.getElementById("detailTotalPrice");
    const minusBtn = document.getElementById("detailQtyMinus");
    const plusBtn = document.getElementById("detailQtyPlus");
    const addCartBtn = document.getElementById("detailAddToCartBtn");
    const buyNowBtn = document.getElementById("detailBuyNowBtn");

    let qty = 1;
    const unitPrice = product.price;

    // Populate product details dynamically
    document.title = `${product.title} — Shamakito | Tienda Montessori`;
    if (titleEl) titleEl.textContent = product.title;
    if (priceEl) priceEl.textContent = `S/.${product.price.toFixed(2)}`;
    if (breadcrumbEl) breadcrumbEl.textContent = product.title;
    if (catTagEl) catTagEl.textContent = product.category;
    if (descEl && product.description) descEl.textContent = product.description;
    if (matEl && product.material) matEl.textContent = product.material;
    if (dimEl && product.dimensions) dimEl.textContent = product.dimensions;
    if (ageEl && product.age) ageEl.textContent = product.age;
    if (purposeTitleEl && product.purposeTitle)
        purposeTitleEl.textContent = product.purposeTitle;
    if (purposeTextEl && product.purposeText)
        purposeTextEl.textContent = product.purposeText;
    if (purposeImgEl) purposeImgEl.src = product.image;
    if (mainImg) {
        mainImg.src = product.image;
        mainImg.alt = product.title;
    }

    // Set data-id on favorite buttons
    const favs = getFavorites();
    detailContainer.querySelectorAll(".js-detail-fav").forEach((btn) => {
        btn.setAttribute("data-id", product.id);
        btn.classList.toggle("active", favs.includes(product.id));
    });

    // Update gallery thumbnails
    const altImages = [
        product.image,
        "assets/img/hero-home.jpg",
        "assets/img/proposito-home.jpg",
        "assets/img/hero-catalogo.jpg",
    ];
    document.querySelectorAll(".js-thumb-btn").forEach((btn, index) => {
        const imgSrc =
            prodId === "caja-de-encaje"
                ? product.image
                : altImages[index] || product.image;
        btn.setAttribute("data-src", imgSrc);
        const img = btn.querySelector("img");
        if (img) img.src = imgSrc;
    });

    function updateQtyUI() {
        if (qtyValEl) qtyValEl.textContent = qty;
        if (totalPriceEl)
            totalPriceEl.textContent = `S/. ${(unitPrice * qty).toFixed(0)}`;
    }

    updateQtyUI();

    if (minusBtn) {
        minusBtn.addEventListener("click", () => {
            if (qty > 1) {
                qty--;
                updateQtyUI();
            }
        });
    }

    if (plusBtn) {
        plusBtn.addEventListener("click", () => {
            if (qty < 12) {
                qty++;
                updateQtyUI();
            }
        });
    }

    if (addCartBtn) {
        addCartBtn.addEventListener("click", () => {
            addToCart(product.id, qty);
        });
    }

    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", () => {
            addToCart(product.id, qty);
            navigateWithTransition("checkout.html");
        });
    }

    const thumbBtns = document.querySelectorAll(".js-thumb-btn");
    thumbBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            thumbBtns.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            const src = btn.getAttribute("data-src");
            if (mainImg && src) {
                mainImg.src = src;
            }
        });
    });
}

/* ==========================================================================
   CART PAGE (carrito.html)
   ========================================================================== */
function initCartPage() {
    const cartListEl = document.getElementById("cartItemsList");
    if (!cartListEl) return;

    const subtotalEl = document.getElementById("summarySubtotal");
    const discountRow = document.getElementById("summaryDiscountRow");
    const discountCodeEl = document.getElementById("summaryDiscountCode");
    const discountValEl = document.getElementById("summaryDiscountVal");
    const totalEl = document.getElementById("summaryTotal");
    const countSubEl = document.getElementById("summaryItemsCount");
    const heroCountEl = document.getElementById("cartHeroCount");
    const emptyCartBtn = document.getElementById("emptyCartBtn");
    const couponInput = document.getElementById("couponInput");
    const applyCouponBtn = document.getElementById("applyCouponBtn");
    const shippingFill = document.getElementById("shippingProgressBar");
    const shippingStatus = document.getElementById("shippingStatusText");
    const checkoutBtn = document.getElementById("checkoutBtn");

    function renderCart() {
        const cart = getCart();
        const coupon = getCoupon();

        if (cart.length === 0) {
            cartListEl.innerHTML = `
        <div style="text-align: center; padding: 48px 24px; background: var(--surface-card); border-radius: 22px; border: 1px solid var(--border-warm);">
          <h3 style="font-size: 22px; margin-bottom: 8px;">Tu carrito está vacío</h3>
          <p style="color: var(--text-secondary); margin-bottom: 20px;">Explora nuestros juguetes Montessori y mobiliario infantil.</p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="catalogo.html" class="btn btn-cta">Explorar catálogo</a>
            <button type="button" class="btn btn-outline js-restore-demo-cart">Restaurar selección Shamakito</button>
          </div>
        </div>
      `;
            const restoreBtn = cartListEl.querySelector(
                ".js-restore-demo-cart",
            );
            if (restoreBtn) {
                restoreBtn.addEventListener("click", () => {
                    saveCart([...DEFAULT_CART]);
                    setCoupon("SHAMAKITO10");
                    renderCart();
                });
            }
        } else {
            cartListEl.innerHTML = cart
                .map((item) => {
                    const p =
                        SHAMAKITO_PRODUCTS.find(
                            (prod) => prod.id === item.id,
                        ) || SHAMAKITO_PRODUCTS[0];
                    const itemSub = p.price * item.qty;
                    return `
          <article class="cart-item-card" data-id="${p.id}">
            <a href="${p.url}" class="cart-item-img">
              <img src="${p.image}" alt="${p.title}">
            </a>
            <div class="cart-item-info">
              <small>${p.category}</small>
              <h3><a href="${p.url}">${p.title}</a></h3>
              <div class="cart-item-tags">
                <span class="age-mini-pill">${p.age}</span>
                <span style="color: #15803D; font-weight: 600; display: inline-flex; align-items: center; gap: 5px;"><span class="stock-dot"></span> En stock</span>
              </div>
              <div class="cart-unit-price">S/. ${p.price.toFixed(2)}</div>
            </div>
            <div class="cart-item-qty">
              <small>CANTIDAD</small>
              <div class="qty-stepper">
                <button type="button" class="qty-btn js-cart-minus" data-id="${p.id}" aria-label="Disminuir">−</button>
                <span class="qty-val">${item.qty}</span>
                <button type="button" class="qty-btn plus js-cart-plus" data-id="${p.id}" aria-label="Aumentar">+</button>
              </div>
            </div>
            <div class="cart-item-subtotal">
              <small>SUBTOTAL</small>
              <strong>S/. ${itemSub.toFixed(2)}</strong>
              <button type="button" class="remove-item-btn js-cart-remove" data-id="${p.id}">
                <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                <span>Eliminar</span>
              </button>
            </div>
          </article>
        `;
                })
                .join("");
        }

        const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
        const subtotal = cart.reduce((acc, item) => {
            const p = SHAMAKITO_PRODUCTS.find((prod) => prod.id === item.id);
            return acc + (p ? p.price * item.qty : 0);
        }, 0);

        const discount = coupon === "SHAMAKITO10" ? subtotal * 0.1 : 0;
        const finalTotal = Math.max(0, subtotal - discount);

        if (subtotalEl) subtotalEl.textContent = `S/. ${subtotal.toFixed(2)}`;
        if (discountRow) {
            discountRow.style.display = discount > 0 ? "flex" : "none";
            if (discountCodeEl)
                discountCodeEl.textContent = `Descuento ${coupon}`;
            if (discountValEl)
                discountValEl.textContent = `− S/. ${discount.toFixed(2)}`;
        }
        if (totalEl) totalEl.textContent = `S/. ${finalTotal.toFixed(2)}`;
        if (countSubEl)
            countSubEl.textContent = `${totalItems} producto${totalItems === 1 ? "" : "s"} en tu carrito`;
        if (heroCountEl)
            heroCountEl.textContent = `${totalItems} producto${totalItems === 1 ? "" : "s"} listos para seguir aprendiendo y jugando.`;

        const pct = Math.min(100, Math.round((subtotal / 100) * 100));
        if (shippingFill) shippingFill.style.width = `${pct}%`;
        if (shippingStatus) {
            shippingStatus.innerHTML =
                subtotal >= 100
                    ? `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Beneficio desbloqueado</span>`
                    : `Te faltan S/. ${(100 - subtotal).toFixed(2)} para envío gratis`;
        }
    }

    cartListEl.addEventListener("click", (e) => {
        const minus = e.target.closest(".js-cart-minus");
        const plus = e.target.closest(".js-cart-plus");
        const remove = e.target.closest(".js-cart-remove");

        if (minus) {
            const id = minus.getAttribute("data-id");
            const cart = getCart();
            const item = cart.find((i) => i.id === id);
            if (item && item.qty > 1) {
                item.qty--;
                saveCart(cart);
                renderCart();
            }
        } else if (plus) {
            const id = plus.getAttribute("data-id");
            const cart = getCart();
            const item = cart.find((i) => i.id === id);
            if (item) {
                item.qty++;
                saveCart(cart);
                renderCart();
            }
        } else if (remove) {
            const id = remove.getAttribute("data-id");
            const cart = getCart().filter((i) => i.id !== id);
            saveCart(cart);
            renderCart();
            showToast("Producto eliminado del carrito");
        }
    });

    if (emptyCartBtn) {
        emptyCartBtn.addEventListener("click", () => {
            saveCart([]);
            renderCart();
            showToast("Carrito vaciado");
        });
    }

    if (applyCouponBtn && couponInput) {
        applyCouponBtn.addEventListener("click", () => {
            const code =
                couponInput.value.trim().toUpperCase() || "SHAMAKITO10";
            if (code === "SHAMAKITO10") {
                setCoupon("SHAMAKITO10");
                renderCart();
                showToast("Cupón SHAMAKITO10 aplicado (10% dcto.)");
            } else {
                showToast("Prueba con el cupón SHAMAKITO10");
            }
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener("click", () => {
            navigateWithTransition("checkout.html");
        });
    }

    renderCart();
}

/* ==========================================================================
   CHECKOUT & SAVED ADDRESS SELECTOR (checkout.html, direcciones.html, design-system.html)
   ========================================================================== */
function initCollapsibleAddressBoxes() {
    document.querySelectorAll(".js-address-box").forEach((box) => {
        const trigger = box.querySelector(".js-address-trigger");
        const stateCaption = box.querySelector(".js-address-state-caption");
        const titleEl = box.querySelector(".js-address-title");
        const subEl = box.querySelector(".js-address-sub");
        const customForm = box.querySelector(".js-custom-address-form");

        if (trigger) {
            trigger.addEventListener("click", () => {
                const isOpen = box.classList.toggle("open");
                trigger.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false",
                );
                if (stateCaption) {
                    stateCaption.textContent = isOpen
                        ? "Open · Dirección guardada"
                        : "Closed · Dirección guardada";
                }
            });
        }

        box.querySelectorAll(".js-address-option").forEach((opt) => {
            opt.addEventListener("click", () => {
                const isNew = opt.classList.contains("add-new");
                if (isNew) {
                    if (customForm) {
                        customForm.style.display =
                            customForm.style.display === "none"
                                ? "grid"
                                : "none";
                    }
                    showToast("Ingresa los datos de la nueva dirección");
                    return;
                }
                box.querySelectorAll(".js-address-option").forEach((b) =>
                    b.classList.remove("selected"),
                );
                opt.classList.add("selected");
                const label = opt.getAttribute("data-label") || "Casa";
                const addr =
                    opt.getAttribute("data-address") ||
                    "Av. Los Álamos 123, dpto. 201 · Demostrativa";
                if (titleEl) titleEl.textContent = label;
                if (subEl) subEl.textContent = addr;
                showToast(`Dirección seleccionada: ${label}`);
            });
        });
    });

    // Shipping / Selector radio cards (Frame 3 Selectores)
    document.querySelectorAll(".js-selector-group").forEach((group) => {
        group.querySelectorAll(".js-selector-card").forEach((card) => {
            card.addEventListener("click", () => {
                if (card.classList.contains("disabled")) return;
                group
                    .querySelectorAll(".js-selector-card")
                    .forEach((c) => c.classList.remove("selected"));
                card.classList.add("selected");
            });
        });
    });
}

function initLiveFormValidation() {
    document.querySelectorAll(".js-live-email-card").forEach((card) => {
        const input = card.querySelector('input[type="email"]');
        const stateLabel = card.querySelector(".js-field-state-label");
        const validPill = card.querySelector(".js-valid-pill");
        const errorMsg = card.querySelector(".js-error-msg");

        if (!input) return;

        function evaluateEmail(focused) {
            const val = input.value.trim();
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

            card.classList.remove(
                "state-focus",
                "state-success",
                "state-error",
            );

            if (!val) {
                if (focused) {
                    card.classList.add("state-focus");
                    if (stateLabel) stateLabel.textContent = "Focus";
                } else {
                    if (stateLabel) stateLabel.textContent = "Default";
                }
                if (validPill) validPill.style.display = "none";
                if (errorMsg) errorMsg.style.display = "none";
                return;
            }

            if (isValid) {
                card.classList.add("state-success");
                if (stateLabel) stateLabel.textContent = "Success";
                if (validPill) validPill.style.display = "inline-flex";
                if (errorMsg) errorMsg.style.display = "none";
            } else {
                card.classList.add("state-error");
                if (stateLabel) stateLabel.textContent = "Error";
                if (validPill) validPill.style.display = "none";
                if (errorMsg) errorMsg.style.display = "block";
            }
        }

        input.addEventListener("focus", () => {
            card.classList.add("state-focus");
            if (stateLabel) stateLabel.textContent = "Focus";
        });

        input.addEventListener("input", () => evaluateEmail(true));
        input.addEventListener("blur", () => evaluateEmail(false));

        // Quick state switcher buttons (if present)
        const wrapper = card.closest(".js-validation-demo-section") || document;
        wrapper.querySelectorAll(".js-set-email-state").forEach((btn) => {
            btn.addEventListener("click", () => {
                const mode = btn.getAttribute("data-state");
                card.classList.remove(
                    "state-focus",
                    "state-success",
                    "state-error",
                );
                if (mode === "default") {
                    input.value = "nombre@correo.com";
                    if (stateLabel) stateLabel.textContent = "Default";
                    if (validPill) validPill.style.display = "none";
                    if (errorMsg) errorMsg.style.display = "none";
                } else if (mode === "focus") {
                    input.value = "fabricio@shamakito.pe";
                    card.classList.add("state-focus");
                    if (stateLabel) stateLabel.textContent = "Focus";
                    if (validPill) validPill.style.display = "none";
                    if (errorMsg) errorMsg.style.display = "none";
                    input.focus();
                } else if (mode === "success") {
                    input.value = "fabricio@shamakito.pe";
                    card.classList.add("state-success");
                    if (stateLabel) stateLabel.textContent = "Success";
                    if (validPill) validPill.style.display = "inline-flex";
                    if (errorMsg) errorMsg.style.display = "none";
                } else if (mode === "error") {
                    input.value = "fabricio@correo";
                    card.classList.add("state-error");
                    if (stateLabel) stateLabel.textContent = "Error";
                    if (validPill) validPill.style.display = "none";
                    if (errorMsg) errorMsg.style.display = "block";
                }
            });
        });
    });
}

function initCheckoutPage() {
    const confirmBtn = document.getElementById("confirmOrderPrimaryBtn");
    if (!confirmBtn) return;

    const checkoutItemsContainer = document.getElementById("checkoutItemsList");
    const checkoutSubtotalEl = document.getElementById("checkoutSubtotal");
    const checkoutDiscountEl = document.getElementById("checkoutDiscount");
    const checkoutTotalEl = document.getElementById("checkoutTotal");

    // Render Cart items in Checkout
    const cart = getCart();
    const coupon = getCoupon();
    const itemsToRender =
        cart.length > 0 ? cart : [{ id: "caja-de-encaje", qty: 1 }];

    if (checkoutItemsContainer) {
        checkoutItemsContainer.innerHTML = itemsToRender
            .map((item) => {
                const p =
                    SHAMAKITO_PRODUCTS.find((prod) => prod.id === item.id) ||
                    SHAMAKITO_PRODUCTS[0];
                return `
        <article class="demo-order-item-card">
          <div class="demo-order-thumb">
            <img src="${p.image}" alt="${p.title}">
          </div>
          <div class="demo-order-info">
            <h4>${p.title}</h4>
            <p>Cantidad: ${item.qty} · Pedido demostrativo</p>
          </div>
          <div class="demo-order-price">S/.${(p.price * item.qty).toFixed(2)}</div>
        </article>
      `;
            })
            .join("");
    }

    const subtotal = itemsToRender.reduce((acc, item) => {
        const p =
            SHAMAKITO_PRODUCTS.find((prod) => prod.id === item.id) ||
            SHAMAKITO_PRODUCTS[0];
        return acc + p.price * item.qty;
    }, 0);
    const discount = coupon === "SHAMAKITO10" ? subtotal * 0.1 : 0;
    const total = Math.max(0, subtotal - discount);

    if (checkoutSubtotalEl)
        checkoutSubtotalEl.textContent = `S/. ${subtotal.toFixed(2)}`;
    if (checkoutDiscountEl)
        checkoutDiscountEl.textContent = `− S/. ${discount.toFixed(2)}`;
    if (checkoutTotalEl)
        checkoutTotalEl.textContent = `S/. ${total.toFixed(2)}`;

    confirmBtn.addEventListener("click", () => {
        if (confirmBtn.classList.contains("is-loading")) return;
        confirmBtn.classList.add("is-loading");
        confirmBtn.innerHTML = `<span class="btn-spinner"></span> <span>Confirmando pedido...</span>`;
        showToast("Procesando pedido #SHK-2026-001...");
        setTimeout(() => {
            navigateWithTransition("pedidos.html?nuevo=SHK-2026-001");
        }, 850);
    });
}

/* ==========================================================================
   MIS PEDIDOS PAGE (pedidos.html — Matches docx_media/image26.png)
   ========================================================================== */
function initOrdersPage() {
    const ordersContainer = document.getElementById("ordersPageContainer");
    if (!ordersContainer) return;

    const filterPills = ordersContainer.querySelectorAll(
        ".js-order-filter-pill",
    );
    const searchInput = document.getElementById("ordersSearchInput");
    const cards = ordersContainer.querySelectorAll(".js-order-card");
    const countEl = document.getElementById("ordersResultCount");

    let activeFilter = "todos";
    let searchQuery = "";

    function filterOrders() {
        let visibleCount = 0;
        cards.forEach((card) => {
            const status = card.getAttribute("data-status") || "";
            const text = card.textContent.toLowerCase();
            const matchesStatus =
                activeFilter === "todos" || status === activeFilter;
            const matchesSearch =
                !searchQuery || text.includes(searchQuery.toLowerCase());

            if (matchesStatus && matchesSearch) {
                card.style.display = "flex";
                visibleCount++;
            } else {
                card.style.display = "none";
            }
        });

        if (countEl) {
            countEl.textContent = `${visibleCount} resultado${visibleCount === 1 ? "" : "s"}`;
        }
    }

    filterPills.forEach((pill) => {
        pill.addEventListener("click", () => {
            filterPills.forEach((p) => p.classList.remove("active"));
            pill.classList.add("active");
            activeFilter = pill.getAttribute("data-filter") || "todos";
            filterOrders();
        });
    });

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            filterOrders();
        });
    }

    // Toggle order timeline details
    ordersContainer.querySelectorAll(".js-toggle-timeline").forEach((btn) => {
        btn.addEventListener("click", () => {
            const card = btn.closest(".js-order-card");
            const timeline = card
                ? card.querySelector(".js-order-timeline")
                : null;
            if (timeline) {
                const isHidden = timeline.style.display === "none";
                timeline.style.display = isHidden ? "grid" : "none";
                btn.innerHTML = isHidden
                    ? `<span>Ocultar seguimiento</span> <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="18 15 12 9 6 15"/></svg>`
                    : `<span>Ver seguimiento</span> <svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>`;
            }
        });
    });
}

/* ==========================================================================
   MIS FAVORITOS PAGE (favoritos.html)
   ========================================================================== */
function initFavoritesPage() {
    const favGrid = document.getElementById("favoritesPageGrid");
    if (!favGrid) return;

    const addAllBtn = document.getElementById("addAllFavsToCartBtn");
    const restoreFavsBtn = document.getElementById("restoreDefaultFavsBtn");

    function renderFavorites() {
        const favIds = getFavorites();
        const favProducts = SHAMAKITO_PRODUCTS.filter((p) =>
            favIds.includes(p.id),
        );

        if (favProducts.length === 0) {
            favGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 24px; background: var(--surface-card); border-radius: 22px; border: 1px solid var(--border-warm);">
          <h3 style="font-size: 22px; margin-bottom: 8px;">Aún no tienes productos en tu lista de deseos</h3>
          <p style="color: var(--text-secondary); margin-bottom: 18px;">Pulsa el icono de corazón en cualquier juguete para guardarlo aquí.</p>
          <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
            <a href="catalogo.html" class="btn btn-cta">Explorar catálogo</a>
            <button type="button" class="btn btn-outline js-restore-favs-inline">Restaurar favoritos demostrativos</button>
          </div>
        </div>
      `;
            const inlineBtn = favGrid.querySelector(".js-restore-favs-inline");
            if (inlineBtn) {
                inlineBtn.addEventListener("click", () => {
                    saveFavorites([...DEFAULT_FAVS]);
                    renderFavorites();
                });
            }
            return;
        }

        favGrid.innerHTML = favProducts
            .map(
                (p) => `
      <article class="product-card">
        <div class="product-thumb-wrap">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
          <button type="button" class="fav-btn active js-fav-toggle" data-id="${p.id}" aria-label="Quitar ${p.title} de favoritos">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
          <a href="${p.url}">
            <img src="${p.image}" alt="${p.title}">
          </a>
        </div>
        <div class="product-body">
          <span class="product-cat">${p.category}</span>
          <h3 class="product-title"><a href="${p.url}">${p.title}</a></h3>
          <div class="product-rating">
            <span class="stars">★ ★ ★ ★ ★</span>
            <span>(${p.ratingLabel})</span>
          </div>
          <div class="product-footer">
            <span class="product-price">S/. ${p.price.toFixed(2)}</span>
            <button type="button" class="btn btn-cta btn-sm js-add-to-cart" data-id="${p.id}">+ Carrito</button>
          </div>
        </div>
      </article>
    `,
            )
            .join("");
    }

    window._renderFavoritesPage = renderFavorites;

    if (addAllBtn) {
        addAllBtn.addEventListener("click", () => {
            const favIds = getFavorites();
            favIds.forEach((id) => addToCart(id, 1));
            showToast("Todos tus favoritos fueron agregados al carrito");
        });
    }

    if (restoreFavsBtn) {
        restoreFavsBtn.addEventListener("click", () => {
            saveFavorites([...DEFAULT_FAVS]);
            renderFavorites();
            showToast("Lista de deseos restaurada");
        });
    }

    renderFavorites();
}

/* ==========================================================================
   PROFILE PAGE (perfil.html)
   ========================================================================== */
function initProfilePage() {
    const editBtn = document.getElementById("editProfileBtn");
    if (!editBtn) return;

    let editing = false;
    editBtn.addEventListener("click", () => {
        editing = !editing;
        const fields = document.querySelectorAll(".js-editable-field");
        if (editing) {
            editBtn.innerHTML = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg> <span>Guardar cambios</span>`;
            fields.forEach((el) => {
                el.setAttribute("contenteditable", "true");
                el.style.outline = "1.5px dashed var(--action-cta)";
                el.style.padding = "2px 6px";
                el.style.borderRadius = "6px";
            });
            fields[0]?.focus();
        } else {
            editBtn.innerHTML = `<svg class="icon-svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> <span>Editar perfil</span>`;
            fields.forEach((el) => {
                el.removeAttribute("contenteditable");
                el.style.outline = "none";
                el.style.padding = "0";
            });
            showToast("Datos personales actualizados");
        }
    });
}

/* ==========================================================================
   APPLE-STYLE SCROLL CHOREOGRAPHY (index.html)
   ========================================================================== */
function initAppleHomeAnimations() {
    const revealEls = document.querySelectorAll(".apple-reveal");
    if (revealEls.length > 0 && "IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                    }
                });
            },
            { threshold: 0.14, rootMargin: "0px 0px -40px 0px" },
        );
        revealEls.forEach((el) => revealObserver.observe(el));
    } else {
        revealEls.forEach((el) => el.classList.add("is-visible"));
    }

    // Hero Parallax & 3D Tilt Stage
    const heroStage = document.getElementById("appleHeroStage");
    if (heroStage) {
        let ticking = false;
        window.addEventListener(
            "scroll",
            () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        const progress = Math.min(
                            1,
                            Math.max(0, window.scrollY / 520),
                        );
                        heroStage.style.setProperty(
                            "--hero-scroll",
                            progress.toFixed(3),
                        );
                        ticking = false;
                    });
                    ticking = true;
                }
            },
            { passive: true },
        );

        heroStage.addEventListener("mousemove", (e) => {
            const rect = heroStage.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            heroStage.style.setProperty("--tilt-x", `${(x * 7).toFixed(2)}deg`);
            heroStage.style.setProperty(
                "--tilt-y",
                `${(-y * 7).toFixed(2)}deg`,
            );
        });

        heroStage.addEventListener("mouseleave", () => {
            heroStage.style.setProperty("--tilt-x", "0deg");
            heroStage.style.setProperty("--tilt-y", "0deg");
        });
    }

    // Animated Number Counters on Stats Section
    const counterEls = document.querySelectorAll(".js-apple-counter");
    if (counterEls.length > 0 && "IntersectionObserver" in window) {
        const counterObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        !entry.isIntersecting ||
                        entry.target.dataset.counted === "true"
                    )
                        return;
                    entry.target.dataset.counted = "true";
                    const el = entry.target;
                    const targetVal = parseFloat(
                        el.getAttribute("data-target") || "0",
                    );
                    const suffix = el.getAttribute("data-suffix") || "";
                    const duration = 1200;
                    const startTime = performance.now();

                    function step(now) {
                        const elapsed = now - startTime;
                        const t = Math.min(1, elapsed / duration);
                        // EaseOutExpo
                        const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
                        const current = Math.round(targetVal * eased);
                        el.textContent = `${current}${suffix}`;
                        if (t < 1) {
                            window.requestAnimationFrame(step);
                        } else {
                            el.textContent = `${targetVal}${suffix}`;
                        }
                    }
                    window.requestAnimationFrame(step);
                });
            },
            { threshold: 0.35 },
        );
        counterEls.forEach((el) => counterObserver.observe(el));
    }

    // Apple Scrollytelling Chapters & Sticky Visual Showcase
    const storySteps = document.querySelectorAll(".js-story-step");
    const showcaseSlides = document.querySelectorAll(".js-showcase-slide");
    const showcaseDots = document.querySelectorAll(".js-showcase-dot");
    const captionEl = document.getElementById("appleShowcaseCaptionText");

    function activateStoryStep(idx) {
        storySteps.forEach((step, i) =>
            step.classList.toggle("active", i === idx),
        );
        showcaseSlides.forEach((slide, i) =>
            slide.classList.toggle("active", i === idx),
        );
        showcaseDots.forEach((dot, i) =>
            dot.classList.toggle("active", i === idx),
        );
        const activeStep = storySteps[idx];
        if (captionEl && activeStep) {
            captionEl.textContent =
                activeStep.getAttribute("data-caption") || "";
        }
    }

    if (storySteps.length > 0) {
        storySteps.forEach((step, idx) => {
            step.addEventListener("click", () => activateStoryStep(idx));
            step.addEventListener("mouseenter", () => activateStoryStep(idx));
        });

        if ("IntersectionObserver" in window) {
            const stepObserver = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            const idx = Number(
                                entry.target.getAttribute("data-step-index") ||
                                    0,
                            );
                            activateStoryStep(idx);
                        }
                    });
                },
                { threshold: 0.6, rootMargin: "-15% 0px -25% 0px" },
            );
            storySteps.forEach((step) => stepObserver.observe(step));
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initPageTransitions();
    initNavigation();
    initAppleHomeAnimations();
    initCatalogPage();
    initProductDetailPage();
    initCartPage();
    initCollapsibleAddressBoxes();
    initLiveFormValidation();
    initCheckoutPage();
    initOrdersPage();
    initFavoritesPage();
    initProfilePage();
});
