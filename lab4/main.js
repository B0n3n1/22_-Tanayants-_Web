import { cardDatabase, generateRandomDeck, getDatabaseStats } from './database_card.js';
import { createCardFromData, Attack, Skill, Power } from './cards.js';

let cards = [];
let editMode = false;
let filters = {
    type: 'all',
    rarity: 'all',
    search: ''
};

document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Slay the Spire Collection запущена!');
    console.log('Статистика базы:', getDatabaseStats());
    
    createAppStructure();
    loadFromLocalStorage();
    setupEventListeners();
    render();
});

function createAppStructure() {
    const app = document.getElementById('app');
    app.innerHTML = `
        <header>
            <h1>⚔️ Slay the Spire · Коллекция</h1>
            <div class="header-controls">
                <button id="toggleEditMode">📝 Режим: просмотр</button>
                <button id="randomDeckBtn">🎲 Случайная колода (20 карт)</button>
                <button id="resetToStarter">🃏 Стартовая колода</button>
            </div>
        </header>

        <!-- Панель фильтрации -->
        <div class="filter-bar">
            <span class="filter-label">🔍 Фильтр:</span>
            <select id="filterType">
                <option value="all">Все типы</option>
                <option value="attack">🗡️ Атака</option>
                <option value="skill">🛡️ Навык</option>
                <option value="power">🔮 Сила</option>
            </select>
            
            <select id="filterRarity">
                <option value="all">Все редкости</option>
                <option value="common">⚪ Обычные</option>
                <option value="uncommon">🟢 Необычные</option>
                <option value="rare">🟡 Редкие</option>
            </select>
            
            <input type="text" id="searchInput" placeholder="Поиск по названию...">
            
            <span id="cardCount" class="filter-stats">0 карт</span>
        </div>

        <!-- Панель редактирования (скрыта по умолчанию) -->
        <div id="editPanel" class="edit-bar" style="display: none;">
            <input type="text" id="editName" placeholder="Название">
            <input type="number" id="editCost" placeholder="Цена" min="0" max="9" value="1">
            <input type="text" id="editDesc" placeholder="Описание">
            <select id="editType">
                <option value="attack">Атака</option>
                <option value="skill">Навык</option>
                <option value="power">Сила</option>
            </select>
            <select id="editRarity">
                <option value="common">Обычная</option>
                <option value="uncommon">Необычная</option>
                <option value="rare">Редкая</option>
            </select>
            <input type="text" id="editImage" placeholder="URL изображения">
            <button id="saveEdit">💾 Сохранить</button>
            <button id="cancelEdit">✖ Отмена</button>
        </div>

        <!-- Панель добавления новой карты -->
        <div id="addPanel" class="edit-bar" style="display: none;">
            <input type="text" id="addName" placeholder="Название">
            <input type="number" id="addCost" placeholder="Цена" min="0" max="9" value="1">
            <input type="text" id="addDesc" placeholder="Описание">
            <select id="addType">
                <option value="attack">Атака</option>
                <option value="skill">Навык</option>
                <option value="power">Сила</option>
            </select>
            <select id="addRarity">
                <option value="common">Обычная</option>
                <option value="uncommon">Необычная</option>
                <option value="rare">Редкая</option>
            </select>
            <input type="text" id="addImage" placeholder="URL изображения">
            <input type="number" id="addDamage" placeholder="Урон (для атаки)">
            <input type="number" id="addBlock" placeholder="Блок (для навыка)">
            <button id="saveAdd">➕ Добавить</button>
            <button id="cancelAdd">✖ Отмена</button>
        </div>

        <!-- Сетка карт -->
        <div id="cardGrid" class="card-grid"></div>

        <!-- Кнопка добавления (в режиме редактирования) -->
        <div style="text-align: center; margin: 20px;">
            <button id="addCardBtn" class="primary" style="display: none;">➕ Добавить карту</button>
        </div>

        <footer>
            ✦ Slay the Spire · Карточная коллекция ✦
        </footer>
    `;
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('slayCards');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            cards = parsed.map(cardData => createCardFromData(cardData));
        } catch (e) {
            console.error('Ошибка загрузки:', e);
            loadStarterDeck();
        }
    } else {
        loadStarterDeck();
    }
}

function saveToLocalStorage() {
    const data = cards.map(card => ({
        id: card.id,
        instanceId: card.instanceId,
        name: card.name,
        cost: card.cost,
        description: card.description,
        type: card.type,
        rarity: card.rarity,
        image: card.image,
        damage: card.damage,
        block: card.block,
        hits: card.hits
    }));
    localStorage.setItem('slayCards', JSON.stringify(data));
}

function loadStarterDeck() {
    cards = [
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common', image: 'https://i.imgur.com/jS5OX5z.png' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common', image: 'https://i.imgur.com/jS5OX5z.png' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common', image: 'https://i.imgur.com/jS5OX5z.png' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common', image: 'https://i.imgur.com/jS5OX5z.png' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common', image: 'https://i.imgur.com/jS5OX5z.png' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common', image: 'https://i.imgur.com/plagHCw.png' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common', image: 'https://i.imgur.com/plagHCw.png' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common', image: 'https://i.imgur.com/plagHCw.png' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common', image: 'https://i.imgur.com/plagHCw.png' }),
        new Attack({ name: 'Тяжелый клинок', cost: 2, description: 'Наносит 14 урона.', damage: 14, rarity: 'common', image: 'https://i.imgur.com/BnY5isw.jpeg' })
    ];
    saveToLocalStorage();
}

function loadRandomDeck() {
    const randomData = generateRandomDeck(20);
    cards = randomData.map(data => createCardFromData(data));
    saveToLocalStorage();
    render();
}

function getFilteredCards() {
    return cards.filter(card => {
        if (filters.type !== 'all' && card.type !== filters.type) {
            return false;
        }
        if (filters.rarity !== 'all' && card.rarity !== filters.rarity) {
            return false;
        }
        if (filters.search && !card.name.toLowerCase().includes(filters.search.toLowerCase())) {
            return false;
        }
        
        return true;
    });
}

function render() {
    const grid = document.getElementById('cardGrid');
    const countSpan = document.getElementById('cardCount');
    
    const filtered = getFilteredCards();
    
    if (filtered.length === 0) {
        grid.innerHTML = '<div class="empty-message">🃏 Нет карт, соответствующих фильтру</div>';
    } else {
        grid.innerHTML = filtered.map(card => card.toHTML()).join('');
    }
    
    countSpan.textContent = `${filtered.length} из ${cards.length} карт`;
    document.querySelectorAll('.edit-actions').forEach(el => {
        el.classList.toggle('hidden', !editMode);
    });
    document.getElementById('addCardBtn').style.display = editMode ? 'inline-block' : 'none';
    attachCardEventListeners();
}

function attachCardEventListeners() {
    document.querySelectorAll('.delete-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            deleteCard(id);
        });
    });
    document.querySelectorAll('.edit-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = btn.dataset.id;
            openEditPanel(id);
        });
    });
}

function deleteCard(instanceId) {
    if (confirm('Удалить эту карту?')) {
        cards = cards.filter(c => c.instanceId !== instanceId);
        saveToLocalStorage();
        render();
    }
}

function openEditPanel(instanceId) {
    const card = cards.find(c => c.instanceId === instanceId);
    if (!card) return;
    
    document.getElementById('editName').value = card.name;
    document.getElementById('editCost').value = card.cost;
    document.getElementById('editDesc').value = card.description;
    document.getElementById('editType').value = card.type;
    document.getElementById('editRarity').value = card.rarity;
    document.getElementById('editImage').value = card.image || '';
    
    if (card.damage !== undefined) {
        document.getElementById('addDamage').value = card.damage;
    }
    if (card.block !== undefined) {
        document.getElementById('addBlock').value = card.block;
    }
    
    document.getElementById('saveEdit').dataset.editId = instanceId;
    document.getElementById('editPanel').style.display = 'flex';
    document.getElementById('addPanel').style.display = 'none';
}

function saveEdit() {
    const instanceId = document.getElementById('saveEdit').dataset.editId;
    const cardIndex = cards.findIndex(c => c.instanceId === instanceId);
    
    if (cardIndex === -1) return;
    cards[cardIndex].name = document.getElementById('editName').value;
    cards[cardIndex].cost = parseInt(document.getElementById('editCost').value) || 0;
    cards[cardIndex].description = document.getElementById('editDesc').value;
    cards[cardIndex].type = document.getElementById('editType').value;
    cards[cardIndex].rarity = document.getElementById('editRarity').value;
    cards[cardIndex].image = document.getElementById('editImage').value;
    if (cards[cardIndex].damage !== undefined) {
        cards[cardIndex].damage = parseInt(document.getElementById('addDamage').value) || 0;
    }
    if (cards[cardIndex].block !== undefined) {
        cards[cardIndex].block = parseInt(document.getElementById('addBlock').value) || 0;
    }
    
    saveToLocalStorage();
    document.getElementById('editPanel').style.display = 'none';
    render();
}

function openAddPanel() {
    document.getElementById('addName').value = '';
    document.getElementById('addCost').value = '1';
    document.getElementById('addDesc').value = '';
    document.getElementById('addType').value = 'attack';
    document.getElementById('addRarity').value = 'common';
    document.getElementById('addImage').value = 'https://i.imgur.com/BnY5isw.jpeg';
    document.getElementById('addDamage').value = '6';
    document.getElementById('addBlock').value = '0';
    
    document.getElementById('addPanel').style.display = 'flex';
    document.getElementById('editPanel').style.display = 'none';
}

function saveAdd() {
    const type = document.getElementById('addType').value;
    const name = document.getElementById('addName').value;
    const cost = parseInt(document.getElementById('addCost').value) || 0;
    const description = document.getElementById('addDesc').value;
    const rarity = document.getElementById('addRarity').value;
    const image = document.getElementById('addImage').value;
    
    let newCard;
    
    if (type === 'attack') {
        const damage = parseInt(document.getElementById('addDamage').value) || 6;
        newCard = new Attack({
            name: name || 'Новая атака',
            cost: cost,
            description: description || 'Наносит урон.',
            damage: damage,
            rarity: rarity,
            image: image
        });
    } else if (type === 'skill') {
        const block = parseInt(document.getElementById('addBlock').value) || 5;
        newCard = new Skill({
            name: name || 'Новый навык',
            cost: cost,
            description: description || 'Даёт защиту.',
            block: block,
            rarity: rarity,
            image: image
        });
    } else {
        newCard = new Power({
            name: name || 'Новая сила',
            cost: cost,
            description: description || 'Даёт усиление.',
            rarity: rarity,
            image: image
        });
    }
    
    cards.push(newCard);
    saveToLocalStorage();
    document.getElementById('addPanel').style.display = 'none';
    render();
}

function setupEventListeners() {
    document.getElementById('toggleEditMode').addEventListener('click', () => {
        editMode = !editMode;
        document.getElementById('toggleEditMode').innerHTML = editMode ? '👁️ Режим: правка' : '📝 Режим: просмотр';
        render();
    });
    
    document.getElementById('filterType').addEventListener('change', (e) => {
        filters.type = e.target.value;
        render();
    });
    
    document.getElementById('filterRarity').addEventListener('change', (e) => {
        filters.rarity = e.target.value;
        render();
    });
    
    document.getElementById('searchInput').addEventListener('input', (e) => {
        filters.search = e.target.value;
        render();
    });
    
    document.getElementById('randomDeckBtn').addEventListener('click', loadRandomDeck);
    
    document.getElementById('resetToStarter').addEventListener('click', () => {
        loadStarterDeck();
        render();
    });
    
    document.getElementById('addCardBtn').addEventListener('click', openAddPanel);
    document.getElementById('saveEdit').addEventListener('click', saveEdit);
    document.getElementById('saveAdd').addEventListener('click', saveAdd);
    
    document.getElementById('cancelEdit').addEventListener('click', () => {
        document.getElementById('editPanel').style.display = 'none';
    });
    
    document.getElementById('cancelAdd').addEventListener('click', () => {
        document.getElementById('addPanel').style.display = 'none';
    });
}