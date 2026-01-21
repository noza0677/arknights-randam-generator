import allOperators from './data.js';

const STORAGE_KEY = 'arknights_owned_v1';
let ownedIds = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let currentSquad = [];
let currentManageRarity = "6";
let currentManageClass = "all";

// --- ナビゲーション制御 ---
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.onclick = () => {
        document.querySelectorAll('.nav-btn, .page').forEach(el => el.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
        if (btn.dataset.target === 'manage-page') renderManageList();
    };
});

// --- 共通カード生成関数 ---
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

// --- 編成生成ロジック ---
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

    if (pool.length === 0) return alert("条件に合うキャラがいません。所持キャラ管理を確認してください。");

    let squad = [];
    let used = new Set();

    // 職種別の確定枠を処理
    document.querySelectorAll('.class-input').forEach(input => {
        const tCount = parseInt(input.value) || 0;
        const selected = pool.filter(op => op.class === input.dataset.class)
                             .sort(() => 0.5 - Math.random()).slice(0, tCount);
        selected.forEach(op => { 
            if(squad.length < maxSquadSize) { 
                squad.push(op); 
                used.add(op.id); 
            } 
        });
    });

    // 残りの枠をランダムに埋める
    const fillers = pool.filter(op => !used.has(op.id)).sort(() => 0.5 - Math.random());
    while(squad.length < maxSquadSize && fillers.length > 0) {
        squad.push(fillers.shift());
    }

    currentSquad = squad;
    squad.forEach(op => display.appendChild(createCard(op)));
    
    // 生成後に共有アクションを表示
    document.getElementById('share-actions').style.display = 'flex';
}

// --- 所持キャラ管理の描画 ---
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
            if (ownedIds.includes(opId)) { 
                ownedIds = ownedIds.filter(id => id !== opId); 
            } else { 
                ownedIds.push(opId); 
            }
            localStorage.setItem(STORAGE_KEY, JSON.stringify(ownedIds));
            renderManageList();
        };
        list.appendChild(card);
    });
}

// --- イベントリスナーの登録 ---

document.getElementById('generate-btn').onclick = generate;

// 管理画面のフィルタボタン
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

// 管理画面の一括操作
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

// --- 共有・保存機能 ---

function getShareText() {
    const opNames = currentSquad.map(op => op.name).join('、');
    const currentUrl = window.location.origin + window.location.pathname;
    return `【PRTS:拠点防衛編成】\nメンバー：${opNames}\n\n▼編成を生成\n${currentUrl}\n#アークナイツ #PRTS編成生成`;
}

// 画像保存 (iOS/Safari対策版)
document.getElementById('download-btn').onclick = async function() {
    const target = document.getElementById('squad-display');
    const canvas = await html2canvas(target, { 
        backgroundColor: "#121212", 
        scale: 2, 
        useCORS: true,
        logging: false 
    });
    const dataUrl = canvas.toDataURL("image/png");

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isIOS) {
        // iPhone/Safari対策: 別タブで開き、長押し保存を促す
        const newTab = window.open();
        if (newTab) {
            newTab.document.body.innerHTML = `
                <div style="background:#121212; color:white; text-align:center; padding:20px; font-family:sans-serif;">
                    <p>画像を長押しして「"写真"に追加」または保存してください</p>
                    <img src="${dataUrl}" style="width:100%; max-width:500px; border:1px solid #444;">
                    <br><br>
                    <button onclick="window.close()" style="padding:10px 20px; background:#444; color:white; border:none; border-radius:5px;">閉じる</button>
                </div>`;
            newTab.document.title = "編成画像の保存";
        } else {
            alert("ポップアップがブロックされました。ブラウザの設定で許可するか、もう一度お試しください。");
        }
    } else {
        // PC/Android: 通常のダウンロード処理
        const link = document.getElementById('download-link');
        link.href = dataUrl;
        link.download = `arknights_squad_${Date.now()}.png`;
        link.click();
    }
};

document.getElementById('share-x-btn').onclick = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(getShareText())}`, '_blank');
};

document.getElementById('share-bsky-btn').onclick = () => {
    window.open(`https://bsky.app/intent/compose?text=${encodeURIComponent(getShareText())}`, '_blank');
};