export class Card {
    constructor(data) {
        this.id = data.id || this.generateId();
        this.name = data.name || 'Безымянная карта';
        this.cost = data.cost || 0;
        this.description = data.description || '';
        this.rarity = data.rarity || 'common';
        this.type = data.type || 'attack';
        this.image = data.image || 'default.jpg';
        this.instanceId = data.instanceId || `${this.id}_${Date.now()}_${Math.random()}`;
    }

    generateId() {
        return 'card_' + Math.random().toString(36).substr(2, 9);
    }
    toHTML() {
        return `
            <div class="card ${this.type} ${this.rarity}" data-instance-id="${this.instanceId}">
                <div class="card-image">
                    <img src="images/${this.image}" alt="${this.name}" onerror="this.src='images/default.jpg'">
                </div>
                <div class="card-header">
                    <span class="card-name">${this.name}</span>
                    <span class="card-cost">⚡${this.cost}</span>
                </div>
                <div class="card-description">${this.description}</div>
                <div class="card-footer">
                    <span class="card-type">${this.getTypeName()}</span>
                    <span class="card-rarity">${this.getRarityName()}</span>
                </div>
                <div class="edit-actions hidden">
                    <button class="edit-card" data-id="${this.instanceId}">✏️ Править</button>
                    <button class="delete-card" data-id="${this.instanceId}">🗑️ Удалить</button>
                </div>
            </div>
        `;
    }

    getTypeName() {
        const types = {
            attack: 'Атака',
            skill: 'Навык',
            power: 'Сила'
        };
        return types[this.type] || this.type;
    }

    getRarityName() {
        const rarities = {
            common: 'Обычная',
            uncommon: 'Необычная',
            rare: 'Редкая'
        };
        return rarities[this.rarity] || this.rarity;
    }
}
export class Attack extends Card {
    constructor(data) {
        super(data);
        this.type = 'attack';
        this.damage = data.damage || 6;
        this.hits = data.hits || 1;
        this.aoe = data.aoe || false;
    }

    toHTML() {
        const base = super.toHTML();
        return base;
    }
}

export class Skill extends Card {
    constructor(data) {
        super(data);
        this.type = 'skill';
        this.block = data.block || 0;
        this.draw = data.draw || 0;
        this.poison = data.poison || 0;
    }
}

export class Power extends Card {
    constructor(data) {
        super(data);
        this.type = 'power';
        this.buff = data.buff || '';
        this.turns = data.turns || -1;
    }
}

export function createCardFromData(data) {
    switch (data.type) {
        case 'attack':
            return new Attack(data);
        case 'skill':
            return new Skill(data);
        case 'power':
            return new Power(data);
        default:
            return new Card(data);
    }
}