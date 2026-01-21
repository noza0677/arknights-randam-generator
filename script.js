import allOperators from './data.js';

const factionNamesMap = {
    "rhodes": "ロドス", "victoria": "ヴィクトリア", "ursus": "ウルサス",
    "kazimierz": "カジミエーシュ", "lungmen": "龍門", "yan": "炎国",
    "laterano": "ラテラーノ", "rhine": "ライン生命", "penguin": "ペンギン急便",
    "blacksteel": "BSW", "kjerag": "カランド貿易", "abyssal": "アビサル",
    "iberia": "イベリア", "sargon": "サルゴン", "rim": "リム・ビリトン",
    "columbia": "クルビア", "siracusa": "シラクーザ", "higashi": "極東",
    "minos": "ミノス", "bolivar": "ボリバル", "leithanien": "リターニア",
    "sami": "サーミ", "kazdel": "カズデル"
};

const STORAGE_KEY = 'arknights_owned_v1';
let ownedIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentManageRarity = "6";
let currentManageClass = "all";

// --- メインタブ切り替え ---
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        const target = btn.dataset.target;
        document.getElementById(target).classList.add('active');
        if (target === 'manage-page') renderManageList();
    });
});

// --- 管理用サブタブ切り替え (レアリティ & クラス) ---
document.querySelectorAll('.sub-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.sub-tab-btn').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        currentManageRarity = btn.dataset.rarity;
        renderManageList();
    });
});

document.querySelectorAll('.class-tab').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.class-tab').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        currentManageClass = btn.dataset.class;
        renderManageList();
    });
});

// --- 一括操作 ---
document.getElementById('all-owned-btn').onclick = () => bulkUpdate(true);
document.getElementById('all-unowned-btn').onclick = () => bulkUpdate(false);

function bulkUpdate(isOwned) {
    const currentPool = getFilteredManagePool();
    currentPool.forEach(op => {
        if (isOwned) {
            if (!ownedIds.includes(op.id)) ownedIds.push(op.id);
        } else {
            ownedIds = ownedIds.filter(id => id !== op.id);
        }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
    renderManageList();
}

function getFilteredManagePool() {
    return allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = currentManageRarity === "3" ? ["1","2","3"].includes(r) : r === currentManageRarity;
        const cMatch = currentManageClass === "all" || op.class === currentManageClass;
        return rMatch && cMatch;
    });
}

// --- カード生成 ---
function createCard(op) {
    const rarityNum = parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) || 1;
    const charId = String(op.id).toLowerCase().trim();
    const fraw = op.faction || "";
    const fkey = fraw.replace('n_', '').toLowerCase();
    const fName = factionNamesMap[fkey] || fraw;

    const div = document.createElement('div');
    div.className = `operator-card rarity-${rarityNum}`;
    div.innerHTML = `
        <div class="icon-container"><img src="./img/${charId}.png" class="op-icon" onerror="this.src='https://via.placeholder.com/60/444/fff?text=No'"></div>
        <div class="info-container">
            <div class="rarity-stars">${'★'.repeat(rarityNum)}</div>
            <strong class="name">${op.name}</strong>
            <div class="tags"><span class="info-tag">${op.class}</span><span class="info-tag">${fName}</span></div>
        </div>
    `;
    return div;
}

// --- 管理リスト表示 ---
function renderManageList() {
    const list = document.getElementById('operator-list');
    list.innerHTML = '';
    const filtered = getFilteredManagePool();

    filtered.forEach(op => {
        const card = createCard(op);
        if (ownedIds.includes(op.id)) card.classList.add('owned');
        card.onclick = () => {
            if (ownedIds.includes(op.id)) {
                ownedIds = ownedIds.filter(id => id !== op.id);
                card.classList.remove('owned');
            } else {
                ownedIds.push(op.id);
                card.classList.add('owned');
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
        };
        list.appendChild(card);
    });
}

// --- 編成生成 ---
function generate() {
    const display = document.getElementById('squad-display');
    display.innerHTML = '';

    const targetFaction = document.getElementById('faction-filter').value;
    const ownedOnly = document.getElementById('owned-only-check').checked;
    const allowedRarities = Array.from(document.querySelectorAll('.rarity-check:checked')).map(cb => cb.value);

    let pool = allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = allowedRarities.includes(r);
        const oMatch = ownedOnly ? ownedIds.includes(op.id) : true;
        
        const fraw = op.faction || "";
        const fkey = fraw.replace('n_', '').toLowerCase();
        const fName = factionNamesMap[fkey] || fraw;
        const fMatch = targetFaction === "all" || fName === targetFaction;

        return rMatch && oMatch && fMatch;
    });

    if (pool.length === 0) {
        display.innerHTML = '<p style="grid-column:1/-1;">該当キャラがいません</p>';
        return;
    }

    let finalSquad = [];
    let tempUsedIds = new Set();
    const classInputs = document.querySelectorAll('.class-input');

    classInputs.forEach(input => {
        const tClass = input.getAttribute('data-class');
        const tCount = parseInt(input.value) || 0;
        const classPool = pool.filter(op => op.class === tClass);
        const selected = classPool.sort(() => 0.5 - Math.random()).slice(0, tCount);
        selected.forEach(op => {
            if (finalSquad.length < 12) {
                finalSquad.push(op);
                tempUsedIds.add(op.id);
            }
        });
    });

    const remaining = 12 - finalSquad.length;
    if (remaining > 0) {
        const others = pool.filter(op => !tempUsedIds.has(op.id)).sort(() => 0.5 - Math.random()).slice(0, remaining);
        finalSquad = [...finalSquad, ...others];
    }

    finalSquad.forEach(op => display.appendChild(createCard(op)));
}

function updateCounter() {
    let sum = 0;
    document.querySelectorAll('.class-input').forEach(i => sum += (parseInt(i.value) || 0));
    document.getElementById('total-count').textContent = sum;
}

document.getElementById('generate-btn').onclick = generate;
document.querySelectorAll('.class-input').forEach(i => i.oninput = updateCounter);
updateCounter();