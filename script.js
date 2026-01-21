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

// タブ切り替えロジック
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.nav-btn, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
        if (btn.dataset.target === 'manage-page') renderManageList();
    };
});

// カード生成
function createCard(op) {
    const rarityNum = parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) || 1;
    const charId = String(op.id).toLowerCase().trim();
    const fName = factionNamesMap[(op.faction||"").replace('n_', '').toLowerCase()] || op.faction || "不明";

    const div = document.createElement('div');
    div.className = `operator-card rarity-${rarityNum}`;
    div.innerHTML = `
        <div class="icon-container"><img src="./img/${charId}.png" class="op-icon" onerror="this.src='https://via.placeholder.com/100/333/fff?text=No+Img'"></div>
        <div class="rarity-stars">${'★'.repeat(rarityNum)}</div>
        <div class="name">${op.name}</div>
        <div><span class="info-tag">${op.class}</span><span class="info-tag">${fName}</span></div>
    `;
    return div;
}

// 管理リスト
function renderManageList() {
    const list = document.getElementById('operator-list');
    list.innerHTML = '';
    allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = currentManageRarity === "3" ? ["1","2","3"].includes(r) : r === currentManageRarity;
        const cMatch = currentManageClass === "all" || op.class === currentManageClass;
        return rMatch && cMatch;
    }).forEach(op => {
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
        if (ownedOnly && !ownedIds.includes(String(op.id))) return false;
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        if (!allowedRarities.includes(r)) return false;
        const fName = factionNamesMap[(op.faction||"").replace('n_', '').toLowerCase()] || op.faction;
        if (targetFaction !== "all" && fName !== targetFaction) return false;
        return true;
    });

    if (pool.length === 0) { display.innerHTML = "条件に合うキャラがいません"; return; }

    let squad = [];
    let used = new Set();
    document.querySelectorAll('.class-input').forEach(input => {
        const tClass = input.dataset.class;
        const tCount = parseInt(input.value) || 0;
        const selected = pool.filter(op => op.class === tClass).sort(() => 0.5 - Math.random()).slice(0, tCount);
        selected.forEach(op => { if (squad.length < maxSquadSize) { squad.push(op); used.add(op.id); } });
    });

    if (squad.length < maxSquadSize) {
        const filler = pool.filter(op => !used.has(op.id)).sort(() => 0.5 - Math.random()).slice(0, maxSquadSize - squad.length);
        squad = [...squad, ...filler];
    }
    squad.forEach(op => display.appendChild(createCard(op)));
}

document.getElementById('generate-btn').onclick = generate;

// 管理画面用イベント
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
document.getElementById('all-owned-btn').onclick = () => {
    allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = currentManageRarity === "3" ? ["1","2","3"].includes(r) : r === currentManageRarity;
        const cMatch = currentManageClass === "all" || op.class === currentManageClass;
        return rMatch && cMatch;
    }).forEach(op => { if(!ownedIds.includes(String(op.id))) ownedIds.push(String(op.id)); });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
    renderManageList();
};
document.getElementById('all-unowned-btn').onclick = () => {
    const currentPoolIds = allOperators.filter(op => {
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        const rMatch = currentManageRarity === "3" ? ["1","2","3"].includes(r) : r === currentManageRarity;
        const cMatch = currentManageClass === "all" || op.class === currentManageClass;
        return rMatch && cMatch;
    }).map(op => String(op.id));
    ownedIds = ownedIds.filter(id => !currentPoolIds.includes(id));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
    renderManageList();
};