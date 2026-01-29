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
        window.scrollTo(0, 0);
    };
});

function createCard(op, isResultCard = false) {
    const rarityNum = parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) || 1;
    const charId = String(op.id).toLowerCase().trim();
    const div = document.createElement('div');
    div.className = `operator-card rarity-${rarityNum}`;
    div.innerHTML = `
        <div class="icon-container"><img src="./img/${charId}.png" onerror="this.src='https://via.placeholder.com/100/333/fff?text=No+Img'"></div>
        <div class="name">${op.name}</div>
    `;
    if (isResultCard) {
        div.style.cursor = "pointer";
        div.onclick = () => replaceOperator(op.id);
    }
    return div;
}

function replaceOperator(oldId) {
    const ownedOnly = document.getElementById('owned-only-check').checked;
    const allowedRarities = Array.from(document.querySelectorAll('.rarity-check:checked')).map(cb => cb.value);
    const currentIds = new Set(currentSquad.map(o => o.id));
    const oldIndex = currentSquad.findIndex(o => o.id === oldId);
    const oldOp = currentSquad[oldIndex];

    let pool = allOperators.filter(op => {
        if (ownedOnly && !ownedIds.includes(String(op.id))) return false;
        const r = op.rarity.replace(/[^0-9]/g, '').charAt(0);
        return allowedRarities.includes(r) && op.class === oldOp.class && !currentIds.has(op.id);
    });

    if (pool.length === 0) return alert("入れ替え候補がいません");
    currentSquad[oldIndex] = pool[Math.floor(Math.random() * pool.length)];
    renderSquad();
}

function renderSquad() {
    const display = document.getElementById('squad-display');
    display.innerHTML = '';
    currentSquad.forEach(op => display.appendChild(createCard(op, true)));
}

function generate() {
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
    while(squad.length < maxSquadSize && fillers.length > 0) squad.push(fillers.shift());

    currentSquad = squad;
    renderSquad();
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
        const card = createCard(op, false);
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

document.getElementById('download-btn').onclick = async function() {
    const target = document.getElementById('squad-display');
    const canvas = await html2canvas(target, { backgroundColor: "#121212", scale: 2, useCORS: true, logging: false });
    const dataUrl = canvas.toDataURL("image/png");
    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        const newTab = window.open();
        if (newTab) newTab.document.body.innerHTML = `<div style="background:#121212; color:white; text-align:center; padding:20px; font-family:sans-serif;"><p>画像を長押しして保存してください</p><img src="${dataUrl}" style="width:100%; max-width:500px; border:1px solid #444;"><br><br><button onclick="window.close()" style="padding:10px 20px; background:#444; color:white; border:none; border-radius:5px;">閉じる</button></div>`;
        else alert("ポップアップを許可してください。");
    } else {
        const link = document.getElementById('download-link');
        link.href = dataUrl;
        link.download = `arknights_squad_${Date.now()}.png`;
        link.click();
    }
};

document.getElementById('share-x-btn').onclick = () => {
    const opNames = currentSquad.map(op => op.name).join('、');
    const txt = `【PRTS:拠点防衛編成】\nメンバー：${opNames}\n\n#アークナイツ #PRTS編成生成`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(txt)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
};

document.getElementById('share-bsky-btn').onclick = () => {
    const opNames = currentSquad.map(op => op.name).join('、');
    const txt = `【PRTS:拠点防衛編成】\nメンバー：${opNames}\n\n#アークナイツ #PRTS編成生成`;
    window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(txt + "\n" + window.location.href)}`, '_blank');
};