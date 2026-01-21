import allOperators from './data.js';

const STORAGE_KEY = 'arknights_owned_v1';
let ownedIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentSquad = [];
let currentManageRarity = "6";
let currentManageClass = "all";

document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.nav-btn, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
        if (btn.dataset.target === 'manage-page') renderManageList();
    };
});

function createCard(op) {
    const rarityNum = parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) || 1;
    const charId = String(op.id).toLowerCase().trim();
    const div = document.createElement('div');
    div.className = `operator-card rarity-${rarityNum}`;
    div.innerHTML = `
        <div class="icon-container"><img src="./img/${charId}.png" onerror="this.src='https://via.placeholder.com/100/333/fff?text=No+Img'"></div>
        <div class="name">${op.name}</div>
    `;
    return div;
}

function generate() {
    const display = document.getElementById('squad-display');
    display.innerHTML = '';
    const ownedOnly = document.getElementById('owned-only-check').checked;
    const maxSquadSize = parseInt(document.getElementById('max-squad-size').value) || 12;
    const allowedRarities = Array.from(document.querySelectorAll('.rarity-check:checked')).map(cb => cb.value);

    let pool = allOperators.filter(op => {
        if (ownedOnly && !ownedIds.includes(String(op.id))) return false;
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        return allowedRarities.includes(r);
    });

    if (pool.length === 0) return alert("条件に合うキャラがいません");

    let squad = [];
    let used = new Set();
    document.querySelectorAll('.class-input').forEach(input => {
        const tCount = parseInt(input.value) || 0;
        const selected = pool.filter(op => op.class === input.dataset.class)
                             .sort(() => 0.5 - Math.random()).slice(0, tCount);
        selected.forEach(op => { if(squad.length < maxSquadSize) { squad.push(op); used.add(op.id); } });
    });

    const fillers = pool.filter(op => !used.has(op.id)).sort(() => 0.5 - Math.random());
    while(squad.length < maxSquadSize && fillers.length > 0) {
        squad.push(fillers.shift());
    }

    currentSquad = squad;
    squad.forEach(op => display.appendChild(createCard(op)));
    document.getElementById('share-actions').style.display = 'flex';
}

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

document.getElementById('generate-btn').onclick = generate;

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

function getShareText() {
    const opNames = currentSquad.map(op => op.name).join('、');
    const currentUrl = window.location.origin + window.location.pathname;
    return `【PRTS:拠点防衛編成】\nメンバー：${opNames}\n\n▼編成を生成\n${currentUrl}\n#アークナイツ #PRTS編成生成`;
}

document.getElementById('download-btn').onclick = async function() {
    const target = document.getElementById('squad-display');
    const canvas = await html2canvas(target, { backgroundColor: "#121212", scale: 2, useCORS: true });
    const link = document.getElementById('download-link');
    link.href = canvas.toDataURL("image/png");
    link.download = `squad_${Date.now()}.png`;
    link.click();
};

document.getElementById('share-x-btn').onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`, '_blank');
};

document.getElementById('share-bsky-btn').onclick = () => {
    window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(getShareText())}`, '_blank');
};