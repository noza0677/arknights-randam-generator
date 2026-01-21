import allOperators from './data.js';

const factionNamesMap = {
    "rhodes": "ロドス", "victoria": "ヴィクトリア", "ursus": "ウルサス",
    "kazimierz": "カジミエーシュ", "lungmen": "龍門", "yan": "炎国",
    "laterano": "ラテラーノ", "rhine": "ライン生命", "abyssal": "アビサル",
    "siracusa": "シラクーザ", "iberia": "イベリア", "sargon": "サルゴン"
};

const STORAGE_KEY = 'arknights_owned_v1';
let ownedIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentManageRarity = "6";
let currentManageClass = "all";

// タブ制御
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.tab-btn, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
        if (btn.dataset.target === 'manage-page') renderManageList();
    };
});

// カード生成関数
function createCard(op) {
    const rarityNum = parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) || 1;
    const charId = String(op.id).toLowerCase().trim();
    const fraw = op.faction || "";
    const fName = factionNamesMap[fraw.replace('n_', '').toLowerCase()] || fraw;

    const div = document.createElement('div');
    div.className = `operator-card rarity-${rarityNum}`;
    div.innerHTML = `
        <div class="icon-container">
            <img src="./img/${charId}.png" class="op-icon" onerror="this.src='https://via.placeholder.com/100/333/fff?text=No+Img'">
        </div>
        <div class="rarity-stars">${'★'.repeat(rarityNum)}</div>
        <div class="name">${op.name}</div>
        <div class="tag-container">
            <span class="info-tag">${op.class}</span>
            <span class="info-tag">${fName}</span>
        </div>
    `;
    return div;
}

// 管理画面用プール取得
function getFilteredManagePool() {
    return allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = currentManageRarity === "3" ? ["1","2","3"].includes(r) : r === currentManageRarity;
        const cMatch = currentManageClass === "all" || op.class === currentManageClass;
        return rMatch && cMatch;
    });
}

// 管理リスト描画
function renderManageList() {
    const list = document.getElementById('operator-list');
    list.innerHTML = '';
    getFilteredManagePool().forEach(op => {
        const card = createCard(op);
        const opId = String(op.id);
        if (ownedIds.includes(opId)) card.classList.add('owned');
        card.onclick = () => {
            if (ownedIds.includes(opId)) { ownedIds = ownedIds.filter(id => id !== opId); }
            else { ownedIds.push(opId); }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
            renderManageList();
        };
        list.appendChild(card);
    });
}

// 編成生成
function generate() {
    const display = document.getElementById('squad-display');
    display.innerHTML = '';
    const targetFaction = document.getElementById('faction-filter').value;
    const ownedOnly = document.getElementById('owned-only-check').checked;
    const maxSquadSize = parseInt(document.getElementById('max-squad-size').value) || 12;
    const allowedRarities = Array.from(document.querySelectorAll('.rarity-check:checked')).map(cb => cb.value);

    let pool = allOperators.filter(op => {
        const opId = String(op.id);
        if (ownedOnly && !ownedIds.includes(opId)) return false;
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        if (!allowedRarities.includes(r)) return false;
        const fraw = op.faction || "";
        const fName = factionNamesMap[fraw.replace('n_', '').toLowerCase()] || fraw;
        if (targetFaction !== "all" && fName !== targetFaction) return false;
        return true;
    });

    if (pool.length === 0) { display.innerHTML = '<p style="grid-column:1/-1;">該当キャラがいません</p>'; return; }

    let finalSquad = [];
    let usedIds = new Set();
    document.querySelectorAll('.class-input').forEach(input => {
        const tClass = input.getAttribute('data-class');
        const tCount = parseInt(input.value) || 0;
        const selected = pool.filter(op => op.class === tClass).sort(() => 0.5 - Math.random()).slice(0, tCount);
        selected.forEach(op => { if (finalSquad.length < maxSquadSize) { finalSquad.push(op); usedIds.add(op.id); } });
    });

    if (finalSquad.length < maxSquadSize) {
        const filler = pool.filter(op => !usedIds.has(op.id)).sort(() => 0.5 - Math.random()).slice(0, maxSquadSize - finalSquad.length);
        finalSquad = [...finalSquad, ...filler];
    }
    finalSquad.forEach(op => display.appendChild(createCard(op)));
}

// イベント設定
document.getElementById('all-owned-btn').onclick = () => {
    getFilteredManagePool().forEach(op => { if(!ownedIds.includes(String(op.id))) ownedIds.push(String(op.id)); });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
    renderManageList();
};
document.getElementById('all-unowned-btn').onclick = () => {
    const currentPoolIds = getFilteredManagePool().map(op => String(op.id));
    ownedIds = ownedIds.filter(id => !currentPoolIds.includes(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
    renderManageList();
};

document.querySelectorAll('.sub-tab-btn').forEach(btn => btn.onclick = (e) => {
    document.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentManageRarity = e.target.dataset.rarity;
    renderManageList();
});
document.querySelectorAll('.class-tab').forEach(btn => btn.onclick = (e) => {
    document.querySelectorAll('.class-tab').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    currentManageClass = e.target.dataset.class;
    renderManageList();
});

document.getElementById('generate-btn').onclick = generate;
document.querySelectorAll('.class-input').forEach(i => i.oninput = () => {
    let sum = 0; document.querySelectorAll('.class-input').forEach(i => sum += (parseInt(i.value) || 0));
    document.getElementById('total-count').textContent = sum;
});