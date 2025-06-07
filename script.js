// Configuração do tsParticles
document.addEventListener("DOMContentLoaded", function() {
    tsParticles.load("tsparticles", {
        fullScreen: {
            enable: true,
            zIndex: -1
        },
        particles: {
            number: {
                value: 40,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: ["#8a5fb9", "#c4a5e5", "#ffd700", "#5a3a7e"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.3,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 5,
                    duration: 2,
                    opacity: 0.8,
                    speed: 3
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        retina_detect: true,
        background: {
            color: "#1e1a2b",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
        }
    });
});

// Item data
const items = [
    ["Agreement Ostin", 10, 59.978, "agreement_ostin.png"],
    ["Prostrate Shrub", 7, 48.750, "prostrate_shrub.png"],
    ["Gray Sand", 18, 59.978, "gray_sand.png"],
    ["Dud Bomb", 15, 64.089, "dud_bomb.png"],
    ["Snowb Head", 15, 55.994, "snowb_head.png"],
    ["Northen BBZ Carapace", 8, 52.315, "northen_bbz_carapace.png"],
    ["Snowb Carapace", 20, 68.522, "snowb_carapace.png"],
    ["Snow BBZ Meat", 10, 64.089, "snow_bbz_meat.png"],
    ["Hoof", 14, 64.089, "hoof.png"],
    ["Black Roe", 16, 59.978, "black_roe.png"],
    ["Twisted Horn", 30, 68.522, "twisted_horn.png"],
    ["Waldermine Collar", 10, 64.089, "waldermine_collar.png"],
    ["Horny Spike", 16, 64.089, "horny_spike.png"],
    ["Alpha Drill", 15, 64.089, "alpha_drill.png"],
    ["Hard Alloy", 10, 64.089, "hard_alloy.png"],
    ["Magnesium Ore", 5, 48.750, "magnesium_ore.png"],
    ["Stella Ore", 9, 48.750, "stella_ore.png"],
    ["Trial Shot Monocular", 8, 59.978, "trial_shot_monocular.png"],
    ["Hoarbug", 25, 59.978, "hoarbug.png"],
    ["Obykhan Cloud", 5, 48.750, "obykhan_cloud.png"],
    ["Waldermine Pelt", 10, 55.994, "waldermine_pelt.png"],
    ["Beautiful Feather", 25, 64.089, "beautiful_feather.png"],
    ["Poisonous Feather", 25, 68.522, "poisonous_feather.png"],
    ["Pild of Old Dust", 20, 64.089, "pild_of_old_dust.png"],
    ["Shrew Tail", 25, 52.315, "shrew_tail.png"],
    ["Snowb Regulator", 14, 59.978, "snowb_regulator.png"],
    ["Stoutbloom", 8, 48.750, "stoutbloom.png"],
    ["Cave Salt", 10, 64.089, "cave_salt.png"],
    ["Waldermine Spit", 10, 55.994, "waldermine_spit.png"],
    ["Icy Streamer", 6, 48.750, "icy_streamer.png"],
    ["Tambourine", 8, 64.089, "tambourine.png"],
    ["Scorching Tentacle", 16, 59.978, "scorching_tentacle.png"],
    ["Greengrow", 9, 48.750, "greengrow.png"]
];

// Global variables
let currentFile = null;
const itemsContainer = document.getElementById("itemsContainer");
const searchInput = document.getElementById("searchInput");
const fileModal = new bootstrap.Modal(document.getElementById("fileModal"));
const modalTitle = document.getElementById("modalTitle");
const fileNameInput = document.getElementById("fileNameInput");
const modalConfirmBtn = document.getElementById("modalConfirmBtn");
let modalAction = "";

// Initialize the app
document.addEventListener("DOMContentLoaded", function() {
    loadItems();
    setupEventListeners();
    updateTotals();
    
    // Adicionar efeito de magia nos cartões
    setTimeout(addMagicEffects, 1000);
});

// Efeito de magia nos cartões
function addMagicEffects() {
    const cards = document.querySelectorAll(".card-item");
    cards.forEach(card => {
        card.classList.add("magic-glow");
    });
}

// Create item cards
function loadItems() {
    itemsContainer.innerHTML = "";
    
    items.forEach(item => {
        const [name, quantity, questValue, image] = item;
        
        const col = document.createElement("div");
        col.className = "col";
        
        const card = document.createElement("div");
        card.className = "card card-item magic-glow";
        card.dataset.name = name.toLowerCase();
        
        const cardBody = document.createElement("div");
        cardBody.className = "card-body d-flex flex-column";
        
        // Header with image and name
        const header = document.createElement("div");
        header.className = "d-flex mb-3";
        
        const imgDiv = document.createElement("div");
        imgDiv.className = "me-3";
        
        const img = document.createElement("img");
        img.src = `images/${image}`;
        img.alt = name;
        img.className = "item-img";
        img.onerror = function() {
            // Fallback if image doesn\'t load
            const fallback = document.createElement("div");
            fallback.className = "item-img d-flex align-items-center justify-content-center";
            fallback.textContent = name.split(" ")[0];
            imgDiv.innerHTML = "";
            imgDiv.appendChild(fallback);
        };
        
        imgDiv.appendChild(img);
        
        const infoDiv = document.createElement("div");
        infoDiv.className = "flex-grow-1";
        
        const nameElement = document.createElement("div");
        nameElement.className = "item-name";
        nameElement.textContent = name;
        
        const quantityElement = document.createElement("div");
        quantityElement.className = "item-detail";
        quantityElement.textContent = `Quantity: ${quantity}`;
        
        const questValueElement = document.createElement("div");
        questValueElement.className = "item-detail";
        questValueElement.textContent = `Quest Value: ${formatNumber(questValue)}`;
        
        infoDiv.appendChild(nameElement);
        infoDiv.appendChild(quantityElement);
        infoDiv.appendChild(questValueElement);
        
        header.appendChild(imgDiv);
        header.appendChild(infoDiv);
        
        // Price input
        const priceGroup = document.createElement("div");
        priceGroup.className = "d-flex align-items-center mb-2";
        
        const priceLabel = document.createElement("span");
        priceLabel.className = "me-2 item-detail";
        priceLabel.innerHTML = 
            '<i class="bi bi-currency-dollar"></i> Price:'; // Fixed HTML for icon
        
        const priceInput = document.createElement("input");
        priceInput.type = "text";
        priceInput.className = "form-control form-control-sm price-input";
        priceInput.placeholder = "0.000";
        priceInput.dataset.itemName = name;
        
        priceGroup.appendChild(priceLabel);
        priceGroup.appendChild(priceInput);
        
        // Results
        const costElement = document.createElement("div");
        costElement.className = "item-detail mb-1";
        costElement.textContent = "Cost: -";
        costElement.dataset.itemCost = name;
        
        const profitElement = document.createElement("div");
        profitElement.className = "item-detail";
        profitElement.textContent = "Profit: -";
        profitElement.dataset.itemProfit = name;
        
        // Add event listeners
        priceInput.addEventListener("input", function(e) {
            this.value = this.value.replace(/[^\d.,]/g, "").replace(/,/g, "."); // Allow comma and dot, replace comma with dot
            calculateSingle(name, quantity, questValue);
        });
        priceInput.addEventListener("blur", function() {
            if (this.value) {
                this.value = formatNumber(parseFloat(this.value));
            }
        });
        
        // Assemble card
        cardBody.appendChild(header);
        cardBody.appendChild(priceGroup);
        cardBody.appendChild(costElement);
        cardBody.appendChild(profitElement);
        
        card.appendChild(cardBody);
        col.appendChild(card);
        itemsContainer.appendChild(col);
        
        // Store references in the item array
        item.push(priceInput);
        item.push(costElement);
        item.push(profitElement);
    });
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll(".card-item");
        
        cards.forEach(card => {
            const itemName = card.dataset.name;
            if (itemName.includes(searchTerm)) {
                card.closest(".col").style.display = "";
            } else {
                card.closest(".col").style.display = "none";
            }
        });
    });
    
    // Calculate all button
    document.getElementById("calculateAllBtn").addEventListener("click", calculateAll);
    
    // Clear all button
    document.getElementById("clearAllBtn").addEventListener("click", clearAll);
    
    // Save button
    document.getElementById("saveBtn").addEventListener("click", function() {
        if (currentFile) {
            saveData(currentFile);
        } else {
            showSaveAsModal();
        }
    });
    
    // Save As button
    document.getElementById("saveAsBtn").addEventListener("click", showSaveAsModal);
    
    // Load button
    document.getElementById("loadBtn").addEventListener("click", showLoadModal);
    
    // Modal confirm button
    modalConfirmBtn.addEventListener("click", function() {
        const fileName = fileNameInput.value.trim();
        if (fileName) {
            if (modalAction === "save") {
                saveData(fileName);
            } else if (modalAction === "load") {
                loadData(fileName);
            }
            fileModal.hide();
        }
    });
    
    // Adicionar efeito de magia ao passar o mouse sobre os botões
    const buttons = document.querySelectorAll(".btn-rpg");
    buttons.forEach(btn => {
        btn.addEventListener("mouseenter", createMagicParticles);
    });
}

// Efeito de partículas mágicas ao passar o mouse sobre botões
function createMagicParticles(e) {
    // Criar um efeito de partículas temporário ao redor do botão
    const btn = e.target.closest(".btn-rpg");
    const rect = btn.getBoundingClientRect();
    
    // Criar 5 partículas mágicas
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement("div");
        particle.style.position = "fixed";
        particle.style.width = "8px";
        particle.style.height = "8px";
        particle.style.borderRadius = "50%";
        particle.style.backgroundColor = getRandomColor();
        particle.style.left = `${rect.left + Math.random() * rect.width}px`;
        particle.style.top = `${rect.top + Math.random() * rect.height}px`;
        particle.style.zIndex = "9999";
        particle.style.pointerEvents = "none";
        document.body.appendChild(particle);
        
        // Animar a partícula
        const angle = Math.random() * Math.PI * 2;
        const speed = 1 + Math.random() * 3;
        const distance = 30 + Math.random() * 50;
        const opacity = 1;
        
        let currentDistance = 0;
        
        const animate = () => {
            if (currentDistance >= distance) {
                document.body.removeChild(particle);
                return;
            }
            
            currentDistance += speed;
            const x = parseFloat(particle.style.left) + Math.cos(angle) * speed;
            const y = parseFloat(particle.style.top) + Math.sin(angle) * speed;
            const newOpacity = opacity * (1 - currentDistance / distance);
            
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.opacity = newOpacity;
            
            requestAnimationFrame(animate);
        };
        
        requestAnimationFrame(animate);
    }
}

// Obter uma cor aleatória para as partículas mágicas
function getRandomColor() {
    const colors = ["#8a5fb9", "#c4a5e5", "#ffd700", "#5a3a7e"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Calculate single item
function calculateSingle(name, quantity, questValue) {
    const item = items.find(item => item[0] === name);
    if (!item) return;
    
    const priceInput = item[4];
    const costElement = item[5];
    const profitElement = item[6];
    
    // Clean and parse price input
    const price = parseFloat(priceInput.value.replace(/[^\d.]/g, ".").replace(/,/g, ".")) || 0; // Ensure only digits and one decimal point
    
    const cost = price * quantity;
    const profit = questValue - cost;
    
    costElement.textContent = `Cost: ${formatNumber(cost)}`;
    profitElement.textContent = `Profit: ${formatNumber(profit)}`;
    
    const card = priceInput.closest(".card-item");
    if (card) {
        if (profit > 0) {
            profitElement.className = "item-detail profit-text";
            card.classList.add("profit-card");
            card.classList.remove("loss-card");
        } else if (profit < 0) {
            profitElement.className = "item-detail loss-text";
            card.classList.add("loss-card");
            card.classList.remove("profit-card");
        } else {
            profitElement.className = "item-detail";
            card.classList.remove("profit-card", "loss-card");
        }
    }
    
    updateTotals();
}

// Calculate all items
function calculateAll() {
    items.forEach(item => {
        const [name, quantity, questValue] = item;
        calculateSingle(name, quantity, questValue);
    });
    
    // Adicionar efeito de magia ao calcular tudo
    const totalCard = document.querySelector(".total-card");
    totalCard.classList.add("calculating");
    setTimeout(() => {
        totalCard.classList.remove("calculating");
    }, 1000);
}

// Clear all inputs
function clearAll() {
    items.forEach(item => {
        const priceInput = item[4];
        const costElement = item[5];
        const profitElement = item[6];
        
        priceInput.value = "";
        costElement.textContent = "Cost: -";
        profitElement.textContent = "Profit: -";
        profitElement.className = "item-detail";
        
        const card = priceInput.closest(".card-item");
        if (card) {
            card.classList.remove("profit-card", "loss-card");
        }
    });
    
    updateTotals();
}

// Update totals
function updateTotals() {
    let totalQuestValue = 0;
    let totalMarketCost = 0;
    let totalProfit = 0;
    
    items.forEach(item => {
        const [name, quantity, questValue] = item;
        totalQuestValue += questValue;
        
        const priceInput = item[4];
        // Clean and parse price input for total calculation
        const price = parseFloat(priceInput.value.replace(/[^\d.]/g, ".").replace(/,/g, ".")) || 0; // Ensure only digits and one decimal point
        
        if (price > 0) {
            const cost = price * quantity;
            totalMarketCost += cost;
            totalProfit += (questValue - cost);
        }
    });
    
    document.getElementById("totalQuestValue").textContent = formatNumber(totalQuestValue);
    document.getElementById("totalMarketCost").textContent = formatNumber(totalMarketCost);
    document.getElementById("totalProfit").textContent = formatNumber(totalProfit);
    
    // Adicionar classe de lucro/prejuízo ao total
    const totalProfitElement = document.getElementById("totalProfit");
    if (totalProfit > 0) {
        totalProfitElement.className = "profit-text";
    } else if (totalProfit < 0) {
        totalProfitElement.className = "loss-text";
    } else {
        totalProfitElement.className = "";
    }
}



// Format number with commas and 3 decimal places
function formatNumber(num) {
    return num.toFixed(3).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Show save as modal
function showSaveAsModal() {
    modalTitle.textContent = "Save As";
    fileNameInput.value = currentFile || "";
    modalAction = "save";
    fileModal.show();
}

// Show load modal
function showLoadModal() {
    modalTitle.textContent = "Load File";
    fileNameInput.value = "";
    modalAction = "load";
    fileModal.show();
}

// Save data to localStorage
function saveData(fileName) {
    const data = {};
    
    items.forEach(item => {
        const [name] = item;
        const priceInput = item[4];
        data[name] = priceInput.value;
    });
    
    localStorage.setItem(`questCalc_${fileName}`, JSON.stringify(data));
    currentFile = fileName;
    
    // Mostrar mensagem de sucesso
    showToast(`Saved as "${fileName}"`);
}

// Load data from localStorage
function loadData(fileName) {
    const data = JSON.parse(localStorage.getItem(`questCalc_${fileName}`));
    
    if (data) {
        clearAll();
        
        items.forEach(item => {
            const [name, quantity, questValue] = item;
            const priceInput = item[4];
            
            if (data[name]) {
                priceInput.value = data[name];
                calculateSingle(name, quantity, questValue);
            }
        });
        
        currentFile = fileName;
        
        // Mostrar mensagem de sucesso
        showToast(`Loaded "${fileName}"`);
    } else {
        // Mostrar mensagem de erro
        showToast(`File "${fileName}" not found`, true);
    }
}

// Show toast message
function showToast(message, isError = false) {
    const toast = document.createElement("div");
    toast.className = `toast align-items-center ${isError ? "bg-danger" : "bg-success"} text-white border-0 position-fixed bottom-0 end-0 m-3`;
    toast.setAttribute("role", "alert");
    toast.setAttribute("aria-live", "assertive");
    toast.setAttribute("aria-atomic", "true");
    
    toast.innerHTML = `
        <div class="d-flex">
            <div class="toast-body">
                ${message}
            </div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    const bsToast = new bootstrap.Toast(toast, {
        delay: 3000
    });
    
    bsToast.show();
    
    toast.addEventListener("hidden.bs.toast", function() {
        document.body.removeChild(toast);
    });
}

