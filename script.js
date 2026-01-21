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

const btn = document.getElementById('generate-btn');
const display = document.getElementById('squad-display');
const classInputs = document.querySelectorAll('.class-input');

function pickRandom(list, count) {
    const shuffled = [...list].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generate() {
    display.innerHTML = '';
    const targetFaction = document.getElementById('faction-filter').value;
    const TOTAL_LIMIT = 12;

    // 1. データのクレンジング（陣営名を日本語に）
    let baseList = allOperators.map(op => {
        const fraw = op.faction || "";
        const fkey = fraw.replace('n_', '').toLowerCase();
        return { ...op, displayFaction: factionNamesMap[fkey] || fraw };
    });

    // 2. 陣営フィルタの適用
    if (targetFaction !== "all") {
        baseList = baseList.filter(op => op.displayFaction === targetFaction);
    }

    if (baseList.length === 0) {
        display.innerHTML = '<p style="grid-column:1/-1;">条件に合うオペレーターが見つかりません</p>';
        return;
    }

    let finalSquad = [];
    let usedIds = new Set();

    // 3. 各クラスの枚数指定に従って抽出
    classInputs.forEach(input => {
        const targetClass = input.getAttribute('data-class');
        const targetCount = parseInt(input.value) || 0;
        
        if (targetCount > 0) {
            const pool = baseList.filter(op => op.class === targetClass && !usedIds.has(op.id));
            const selected = pickRandom(pool, targetCount);
            selected.forEach(op => {
                if (finalSquad.length < TOTAL_LIMIT) {
                    finalSquad.push(op);
                    usedIds.add(op.id);
                }
            });
        }
    });

    // 4. 指定枚数で12人に満たない場合、残りのプールからランダムに埋める
    if (finalSquad.length < TOTAL_LIMIT) {
        const remainingPool = baseList.filter(op => !usedIds.has(op.id));
        const filler = pickRandom(remainingPool, TOTAL_LIMIT - finalSquad.length);
        finalSquad = [...finalSquad, ...filler];
    }

    // 5. HTML生成
    finalSquad.forEach(op => {
        const rarityNum = op.rarity ? parseInt(op.rarity.replace(/[^0-9]/g, '').charAt(0)) : 1;
        const charId = String(op.id).toLowerCase().trim();
        const iconPath = `./img/${charId}.png`; 

        const card = document.createElement('div');
        card.className = `operator-card rarity-${rarityNum}`;
        card.innerHTML = `
            <div class="icon-container">
                <img src="${iconPath}" alt="${op.name}" class="op-icon" 
                     onerror="this.src='https://via.placeholder.com/80/444/fff?text=No+Img'">
            </div>
            <div class="info-container">
                <div class="rarity-stars">${'★'.repeat(rarityNum)}</div>
                <strong class="name">${op.name}</strong>
                <div class="tags">
                    <span class="info-tag">${op.class}</span>
                    <span class="info-tag">${op.displayFaction}</span>
                </div>
            </div>
        `;
        display.appendChild(card);
    });
}

// カウンターのリアルタイム表示
function updateCounter() {
    let sum = 0;
    classInputs.forEach(input => sum += (parseInt(input.value) || 0));
    const counterEl = document.getElementById('total-count');
    counterEl.textContent = sum;
    counterEl.style.color = sum > 12 ? "#ff4444" : "#00ffcc";
}

classInputs.forEach(input => input.addEventListener('input', updateCounter));
btn.addEventListener('click', generate);

// 初期表示
updateCounter();