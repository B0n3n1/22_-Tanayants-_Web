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
            <button id="saveEdit">💾 Сохранить</button>
            <button id="cancelEdit">✖ Отмена</button>
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
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common' }),
        new Attack({ name: 'Удар', cost: 1, description: 'Наносит 6 урона.', damage: 6, rarity: 'common' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common' }),
        new Skill({ name: 'Защита', cost: 1, description: 'Дает 5 Защиты.', block: 5, rarity: 'common' }),
        new Attack({ name: 'Тяжелый клинок', cost: 2, description: 'Наносит 14 урона.', damage: 14, rarity: 'common' })
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
    cards = cards.filter(c => c.instanceId !== instanceId);
    saveToLocalStorage();
    render();
}

function openEditPanel(instanceId) {
    const card = cards.find(c => c.instanceId === instanceId);
    if (!card) return;
    
    document.getElementById('editName').value = card.name;
    document.getElementById('editCost').value = card.cost;
    document.getElementById('editDesc').value = card.description;
    document.getElementById('editType').value = card.type;
    document.getElementById('editRarity').value = card.rarity;
    document.getElementById('saveEdit').dataset.editId = instanceId;
    
    document.getElementById('editPanel').style.display = 'flex';
}

function saveEdit() {
    const instanceId = document.getElementById('saveEdit').dataset.editId;
    const cardIndex = cards.findIndex(c => c.instanceId === instanceId);
    
    if (cardIndex === -1) return;
    cards[cardIndex].name = document.getElementById('editName').value;
    cards[cardIndex].cost = parseInt(document.getElementById('editCost').value);
    cards[cardIndex].description = document.getElementById('editDesc').value;
    cards[cardIndex].type = document.getElementById('editType').value;
    cards[cardIndex].rarity = document.getElementById('editRarity').value;
    
    saveToLocalStorage();
    document.getElementById('editPanel').style.display = 'none';
    render();
}

function addNewCard() {
    const newCard = new Attack({
        name: 'Новая карта',
        cost: 1,
        description: 'Опишите эффект...',
        damage: 6,
        rarity: 'common'
    });
    
    cards.push(newCard);
    saveToLocalStorage();
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
    
    document.getElementById('addCardBtn').addEventListener('click', addNewCard);
    document.getElementById('saveEdit').addEventListener('click', saveEdit);
    
    document.getElementById('cancelEdit').addEventListener('click', () => {
        document.getElementById('editPanel').style.display = 'none';
    });
}