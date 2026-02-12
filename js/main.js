// ============================================
// DATOS DE PRODUCTOS
// ============================================
const productsData = {
    "todo-menu": [],
    "ofertas-familiares": [
        { name: "Pollo Entero + Papas Familiares", description: "Pollo a la brasa entero, papas fritas grandes, ensalada y 4 bebidas", price: 65.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 5 },
        { name: "2 Pollos + Papas + Ensalada", description: "Dos pollos enteros, papas familiares, ensalada grande y 6 bebidas", price: 120.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 5 },
        { name: "Combo Familiar Especial", description: "Pollo entero, 1/2 pollo extra, papas, ensalada y 5 bebidas", price: 95.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 4 },
        { name: "Mega Familiar", description: "2 pollos, papas XXL, ensalada, cremas y 8 bebidas", price: 145.00, image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop", rating: 5 },
        { name: "Familiar Económico", description: "Pollo entero, papas medianas, ensalada y 3 bebidas", price: 55.00, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop", rating: 4 },
        { name: "Familiar Premium", description: "Pollo entero, papas, ensalada, anticuchos y 4 bebidas", price: 85.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", rating: 5 },
        { name: "Familiar Clásico", description: "Pollo entero, papas, ensalada tradicional y 4 bebidas", price: 62.00, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop", rating: 4 },
        { name: "Familiar Deluxe", description: "Pollo entero, papas, ensalada, choclo y 5 bebidas", price: 75.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 5 },
        { name: "Familiar Festivo", description: "2 pollos, papas XXL, ensalada, salsas y 6 bebidas", price: 135.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 5 },
        { name: "Familiar Express", description: "Pollo entero, papas rápidas y 4 bebidas", price: 58.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 4 },
        { name: "Familiar Completo", description: "Pollo entero, papas, ensalada, arroz y 4 bebidas", price: 70.00, image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop", rating: 4 },
        { name: "Familiar Supremo", description: "2 pollos, papas XXL, ensalada, extras y 8 bebidas", price: 155.00, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop", rating: 5 }
    ],
    "ofertas-dos": [
        { name: "1/2 Pollo + Papas para Dos", description: "Medio pollo, papas medianas, ensalada y 2 bebidas", price: 35.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 4 },
        { name: "Combo Pareja Especial", description: "1/2 pollo, papas, ensalada, anticuchos y 2 bebidas", price: 45.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", rating: 5 },
        { name: "Duo Clásico", description: "1/2 pollo, papas fritas, ensalada y 2 bebidas", price: 32.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 4 },
        { name: "Pareja Premium", description: "1/2 pollo, papas, ensalada gourmet y 2 bebidas", price: 42.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 5 },
        { name: "Duo Económico", description: "1/4 pollo cada uno, papas compartidas y 2 bebidas", price: 28.00, image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop", rating: 4 },
        { name: "Combo Romántico", description: "1/2 pollo, papas, ensalada especial y 2 bebidas", price: 38.00, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop", rating: 4 },
        { name: "Pareja Deluxe", description: "1/2 pollo, papas, ensalada, choclo y 2 bebidas", price: 40.00, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop", rating: 5 },
        { name: "Duo Express", description: "1/2 pollo, papas rápidas y 2 bebidas", price: 30.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 4 },
        { name: "Combo Doble", description: "1/2 pollo, papas dobles, ensalada y 2 bebidas", price: 37.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 4 },
        { name: "Pareja Festiva", description: "1/2 pollo, papas, ensalada, extras y 2 bebidas", price: 43.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", rating: 5 },
        { name: "Duo Completo", description: "1/2 pollo, papas, ensalada, arroz y 2 bebidas", price: 39.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 4 },
        { name: "Pareja Suprema", description: "1/2 pollo, papas XXL, ensalada gourmet y 2 bebidas", price: 48.00, image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop", rating: 5 }
    ],
    "ofertas-personales": [
        { name: "1/4 Pollo Personal", description: "Cuarto de pollo, papas personales, ensalada y bebida", price: 18.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Especial", description: "1/4 pollo, papas, ensalada, anticucho y bebida", price: 22.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", rating: 5 },
        { name: "Personal Clásico", description: "1/4 pollo, papas fritas y bebida", price: 16.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Premium", description: "1/4 pollo, papas, ensalada gourmet y bebida", price: 20.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Económico", description: "1/8 pollo, papas pequeñas y bebida", price: 12.00, image: "https://images.unsplash.com/photo-1594221708779-94832f4320d1?w=400&h=300&fit=crop", rating: 3 },
        { name: "Personal Deluxe", description: "1/4 pollo, papas, ensalada, choclo y bebida", price: 21.00, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop", rating: 5 },
        { name: "Personal Express", description: "1/4 pollo, papas rápidas y bebida", price: 15.00, image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Completo", description: "1/4 pollo, papas, ensalada, arroz y bebida", price: 19.00, image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Festivo", description: "1/4 pollo, papas, ensalada, extras y bebida", price: 23.00, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop", rating: 5 },
        { name: "Personal Light", description: "1/4 pollo, ensalada grande y bebida", price: 17.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop", rating: 4 },
        { name: "Personal Supremo", description: "1/4 pollo, papas XXL, ensalada y bebida", price: 24.00, image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop", rating: 5 },
        { name: "Personal Ejecutivo", description: "1/4 pollo, papas, ensalada y bebida premium", price: 25.00, image: "https://images.unsplash.com/photo-1633964913295-ceb43826e36f?w=400&h=300&fit=crop", rating: 5 }
    ],
    "platos-extras": [
        { name: "Arroz Chaufa", description: "Arroz chaufa especial con pollo y verduras", price: 15.00, image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop", rating: 4 },
        { name: "Tallarines Saltados", description: "Tallarines con pollo y verduras salteadas", price: 16.00, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 4 },
        { name: "Anticuchos", description: "4 anticuchos de corazón con papas y choclo", price: 18.00, image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop", rating: 5 },
        { name: "Alitas Picantes", description: "8 alitas de pollo con salsa picante", price: 20.00, image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop", rating: 5 },
        { name: "Chaufa Especial", description: "Arroz chaufa con mariscos y pollo", price: 22.00, image: "https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop", rating: 5 },
        { name: "Lomo Saltado", description: "Lomo saltado con papas y arroz", price: 25.00, image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&h=300&fit=crop", rating: 5 },
        { name: "Chicharrón de Pollo", description: "Chicharrón de pollo con papas y ensalada", price: 17.00, image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop", rating: 4 },
        { name: "Causa Rellena", description: "Causa limeña rellena de pollo", price: 12.00, image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop", rating: 4 },
        { name: "Sopa Criolla", description: "Sopa criolla con fideos y pollo", price: 10.00, image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop", rating: 4 },
        { name: "Arroz con Pollo", description: "Arroz con pollo tradicional peruano", price: 14.00, image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop", rating: 4 },
        { name: "Tallarines Verdes", description: "Tallarines verdes con bistec", price: 19.00, image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop", rating: 5 },
        { name: "Ceviche de Pollo", description: "Ceviche de pollo estilo peruano", price: 16.00, image: "https://images.unsplash.com/photo-1580217593608-61931cefc821?w=400&h=300&fit=crop", rating: 4 }
    ],
    "agregados": [
        { name: "Papas Fritas Grandes", description: "Porción grande de papas fritas crujientes", price: 8.00, image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop", rating: 4 },
        { name: "Ensalada Fresca", description: "Ensalada mixta con vegetales frescos", price: 6.00, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop", rating: 4 },
        { name: "Choclo con Queso", description: "Choclo peruano con queso fresco", price: 7.00, image: "https://images.unsplash.com/photo-1551462147-37d3f9c6e2ef?w=400&h=300&fit=crop", rating: 5 },
        { name: "Arroz Blanco", description: "Porción de arroz blanco", price: 4.00, image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&h=300&fit=crop", rating: 3 },
        { name: "Cremas Variadas", description: "Set de 4 cremas: ají, mayonesa, mostaza, ketchup", price: 3.00, image: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=400&h=300&fit=crop", rating: 4 },
        { name: "Yuca Frita", description: "Yuca frita dorada y crujiente", price: 7.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop", rating: 4 },
        { name: "Camote Frito", description: "Camote frito dulce y dorado", price: 6.00, image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?w=400&h=300&fit=crop", rating: 4 },
        { name: "Plátano Frito", description: "Plátano maduro frito", price: 5.00, image: "https://images.unsplash.com/photo-1603052875672-c212427a2a7e?w=400&h=300&fit=crop", rating: 4 },
        { name: "Porción de Ají", description: "Ají casero picante", price: 2.00, image: "https://images.unsplash.com/photo-1583663848850-46af132dc08e?w=400&h=300&fit=crop", rating: 3 },
        { name: "Pan Francés", description: "2 panes franceses", price: 2.00, image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop", rating: 3 },
        { name: "Bebida Extra", description: "Bebida adicional de 500ml", price: 4.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Postre del Día", description: "Postre especial del día", price: 8.00, image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&h=300&fit=crop", rating: 5 }
    ],
    "bebidas": [
        { name: "Coca Cola 1.5L", description: "Refresco de cola 1.5 litros", price: 5.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Inca Kola 1.5L", description: "Refresco de cola dorada 1.5 litros", price: 5.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 5 },
        { name: "Sprite 1.5L", description: "Refresco de lima-limón 1.5 litros", price: 5.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Fanta 1.5L", description: "Refresco de naranja 1.5 litros", price: 5.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Coca Cola 3L", description: "Refresco de cola 3 litros", price: 8.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Inca Kola 3L", description: "Refresco de cola dorada 3 litros", price: 8.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 5 },
        { name: "Sprite 3L", description: "Refresco de lima-limón 3 litros", price: 8.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Fanta 3L", description: "Refresco de naranja 3 litros", price: 8.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Agua Mineral", description: "Agua mineral sin gas 500ml", price: 2.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 3 },
        { name: "Jugo de Naranja", description: "Jugo natural de naranja 500ml", price: 4.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 },
        { name: "Chicha Morada", description: "Chicha morada tradicional 500ml", price: 4.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 5 },
        { name: "Maracuyá", description: "Jugo de maracuyá 500ml", price: 4.00, image: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400&h=300&fit=crop", rating: 4 }
    ]
};

// Combinar todos los productos para "Todo el Menú"
productsData["todo-menu"] = [
    ...productsData["ofertas-familiares"],
    ...productsData["ofertas-dos"],
    ...productsData["ofertas-personales"],
    ...productsData["platos-extras"],
    ...productsData["agregados"],
    ...productsData["bebidas"]
];

// ============================================
// VARIABLES GLOBALES
// ============================================
let currentCategory = "todo-menu";
const ITEMS_PER_PAGE = 12;

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

/**
 * Genera las estrellas de calificación
 * @param {number} rating - Calificación de 1 a 5
 * @returns {string} HTML de las estrellas
 */
function generateStars(rating) {
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starsHTML += '<span class="star">★</span>';
        } else {
            starsHTML += '<span class="star empty">★</span>';
        }
    }
    return starsHTML;
}

/**
 * Crea el HTML de una tarjeta de producto
 * @param {Object} product - Objeto del producto
 * @returns {string} HTML de la tarjeta
 */
function createProductCard(product) {
    return `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'300\'%3E%3Crect fill=\'%236b7280\' width=\'400\' height=\'300\'/%3E%3Ctext fill=\'%23fff\' font-family=\'Arial\' font-size=\'20\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\' dominant-baseline=\'middle\'%3E${encodeURIComponent(product.name)}%3C/text%3E%3C/svg%3E';">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <div class="product-rating">
                        ${generateStars(product.rating)}
                    </div>
                    <div class="product-price">S/ ${product.price.toFixed(2)}</div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Renderiza los productos en el grid
 * @param {string} category - Categoría a mostrar
 * @param {HTMLElement} container - Contenedor donde renderizar
 * @param {number} limit - Límite de productos a mostrar (null = todos)
 */
function renderProducts(category, container, limit = null) {
    const products = productsData[category] || [];
    const productsToShow = limit ? products.slice(0, limit) : products;
    
    container.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
}

/**
 * Actualiza el título de la sección
 * @param {string} category - Categoría actual
 */
function updateSectionTitle(category) {
    const titles = {
        "todo-menu": "Todo el Menú",
        "ofertas-familiares": "Ofertas Familiares",
        "ofertas-dos": "Ofertas para Dos",
        "ofertas-personales": "Ofertas Personales",
        "platos-extras": "Platos Extras",
        "agregados": "Agregados",
        "bebidas": "Bebidas"
    };
    
    const sectionTitle = document.getElementById('sectionTitle');
    if (sectionTitle) {
        sectionTitle.textContent = titles[category] || "Nuestro Menú";
    }
}

/**
 * Marca la categoría activa
 * @param {string} category - Categoría activa
 */
function setActiveCategory(category) {
    document.querySelectorAll('.category-card').forEach(card => {
        card.classList.remove('active');
    });
    
    const activeCard = document.querySelector(`[data-category="${category}"]`);
    if (activeCard) {
        activeCard.classList.add('active');
    }
}

/**
 * Abre el modal con todos los productos de una categoría
 * @param {string} category - Categoría a mostrar
 */
function openCategoryModal(category) {
    const modal = document.getElementById('categoryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalGrid = document.getElementById('modalProductsGrid');
    
    const titles = {
        "todo-menu": "Todo el Menú",
        "ofertas-familiares": "Ofertas Familiares",
        "ofertas-dos": "Ofertas para Dos",
        "ofertas-personales": "Ofertas Personales",
        "platos-extras": "Platos Extras",
        "agregados": "Agregados",
        "bebidas": "Bebidas"
    };
    
    modalTitle.textContent = titles[category] || "Platos";
    renderProducts(category, modalGrid, null);
    modal.classList.add('active');
}

/**
 * Cierra el modal
 */
function closeCategoryModal() {
    const modal = document.getElementById('categoryModal');
    modal.classList.remove('active');
}

// ============================================
// EVENT LISTENERS
// ============================================

// Cargar productos iniciales
document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');
    const goToOrdersBtn = document.getElementById('goToOrders');
    
    // Renderizar productos iniciales
    renderProducts(currentCategory, productsGrid, ITEMS_PER_PAGE);
    updateSectionTitle(currentCategory);
    setActiveCategory(currentCategory);
    
    // Botón "Ir a la página de pedidos"
    if (goToOrdersBtn) {
        goToOrdersBtn.addEventListener('click', () => {
            document.querySelector('.products-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // Click en tarjetas de categoría
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Si se hace click en el botón "Ver más", abrir modal
            if (e.target.classList.contains('btn-view-more')) {
                e.stopPropagation();
                const category = card.dataset.category;
                openCategoryModal(category);
                return;
            }
            
            // Si se hace click en la tarjeta, cambiar categoría
            const category = card.dataset.category;
            currentCategory = category;
            renderProducts(category, productsGrid, ITEMS_PER_PAGE);
            updateSectionTitle(category);
            setActiveCategory(category);
            
            // Scroll suave a la sección de productos
            document.querySelector('.products-section').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Botones "Ver más" en las tarjetas de categoría
    document.querySelectorAll('.btn-view-more').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.category-card');
            const category = card.dataset.category;
            openCategoryModal(category);
        });
    });
    
    // Cerrar modal
    const modalClose = document.getElementById('modalClose');
    if (modalClose) {
        modalClose.addEventListener('click', closeCategoryModal);
    }
    
    // Cerrar modal al hacer click fuera
    const modal = document.getElementById('categoryModal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeCategoryModal();
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCategoryModal();
        }
    });
    
    // Menú toggle (para futuras funcionalidades)
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Funcionalidad del menú hamburguesa (puede agregarse después)
            console.log('Menú toggle clicked');
        });
    }
});
