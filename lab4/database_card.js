export const cardDatabase = {
    attack: [
        {
            id: 'strike',
            name: 'Удар',
            cost: 1,
            description: 'Наносит 6 урона.',
            damage: 6,
            type: 'attack',
            rarity: 'common',
            character: 'ironclad',
            image: 'https://i.imgur.com/jS5OX5z.png'  // STRIKE
        },
        {
            id: 'perfected_strike',
            name: 'Совершенный удар',
            cost: 2,
            description: 'Наносит 6 урона. Увеличивается на +2 за каждую карту с "Удар" в названии.',
            damage: 6,
            type: 'attack',
            rarity: 'common',
            character: 'ironclad',
            image: 'https://i.imgur.com/BnY5isw.jpeg'  // СКОРО
        },
        {
            id: 'twin_strike',
            name: 'Двойной удар',
            cost: 1,
            description: 'Наносит урон 2 раза по 5.',
            damage: 5,
            hits: 2,
            type: 'attack',
            rarity: 'common',
            character: 'ironclad',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'heavy_blade',
            name: 'Тяжелый клинок',
            cost: 2,
            description: 'Наносит 14 урона. Сила увеличивает урон в 3 раза.',
            damage: 14,
            type: 'attack',
            rarity: 'common',
            character: 'ironclad',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'wild_strike',
            name: 'Дикий удар',
            cost: 1,
            description: 'Наносит 12 урона. Добавляет в стопку сброса Рану.',
            damage: 12,
            type: 'attack',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'blood_for_blood',
            name: 'Кровь за кровь',
            cost: 4,
            description: 'Наносит 18 урона. Стоимость уменьшается на 1 за каждый полученный урон.',
            damage: 18,
            type: 'attack',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'reaper',
            name: 'Жнец',
            cost: 2,
            description: 'Наносит 4 урона ВСЕМ врагам. Лечит на количество неуменьшенного урона.',
            damage: 4,
            aoe: true,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'bludgeon',
            name: 'Дубина',
            cost: 3,
            description: 'Наносит 32 урона.',
            damage: 32,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'immolate',
            name: 'Огненный дождь',
            cost: 2,
            description: 'Наносит 21 урон ВСЕМ врагам. Добавляет в стопку сброса Ожог.',
            damage: 21,
            aoe: true,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        
        {
            id: 'neutralize',
            name: 'Нейтрализация',
            cost: 0,
            description: 'Наносит 3 урона. Накладывает 1 Слабость.',
            damage: 3,
            debuff: 'weak',
            type: 'attack',
            rarity: 'common',
            character: 'silent',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'dagger_throw',
            name: 'Бросок кинжала',
            cost: 1,
            description: 'Наносит 9 урона. Сбрасывает 1 карту, затем берет 1 карту.',
            damage: 9,
            type: 'attack',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'endless_agony',
            name: 'Бесконечная агония',
            cost: 0,
            description: 'Наносит 4 урона. Когда вы сбрасываете эту карту, добавляет её копию в руку.',
            damage: 4,
            type: 'attack',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'flying_knee',
            name: 'Летящее колено',
            cost: 1,
            description: 'Наносит 8 урона. Дает +1 энергию на следующий ход.',
            damage: 8,
            type: 'attack',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'predator',
            name: 'Хищник',
            cost: 2,
            description: 'Наносит 15 урона. Дает +2 карты в следующем ходу.',
            damage: 15,
            type: 'attack',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'glass_knife',
            name: 'Стеклянный нож',
            cost: 1,
            description: 'Наносит 8 урона 2 раза. Уменьшается на 2 урона при использовании.',
            damage: 8,
            hits: 2,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'skewer',
            name: 'Вертел',
            cost: 'X',
            description: 'Наносит 7 урона X раз.',
            damage: 7,
            variable_cost: true,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        
        {
            id: 'eruption',
            name: 'Извержение',
            cost: 2,
            description: 'Наносит 9 урона. Входит в Гнев. (Пробужденная форма)',
            damage: 9,
            type: 'attack',
            rarity: 'common',
            character: 'watcher',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'tantrum',
            name: 'Истерика',
            cost: 1,
            description: 'Наносит 3 урона 3 раза. Помещает эту карту в стопку добора.',
            damage: 3,
            hits: 3,
            type: 'attack',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'reach_heaven',
            name: 'Достичь небес',
            cost: 2,
            description: 'Наносит 10 урона. Добавляет в руку "Восхождение" (наносит 25 урона).',
            damage: 10,
            type: 'attack',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'raagnarok',
            name: 'Рагнарек',
            cost: 3,
            description: 'Наносит 5 урона случайному врагу 6 раз.',
            damage: 5,
            hits: 6,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'conclude',
            name: 'Завершение',
            cost: 1,
            description: 'Наносит 12 урона ВСЕМ врагам. Завершает ход.',
            damage: 12,
            aoe: true,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
     
        {
            id: 'mind_blast',
            name: 'Ментальный взрыв',
            cost: 2,
            description: 'Наносит урон равный количеству карт в стопке добора.',
            damage: 0,
            scaling: 'draw_pile',
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'hand_of_greed',
            name: 'Рука жадности',
            cost: 2,
            description: 'Наносит 20 урона. Если убивает, дает 20 золота.',
            damage: 20,
            type: 'attack',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        }
    ],

    skill: [
        {
            id: 'defend',
            name: 'Защита',
            cost: 1,
            description: 'Дает 5 Защиты.',
            block: 5,
            type: 'skill',
            rarity: 'common',
            image: 'https://i.imgur.com/plagHCw.png'  // DEFEND
        },
        {
            id: 'shrug_it_off',
            name: 'Пропустить мимо ушей',
            cost: 1,
            description: 'Дает 8 Защиты. Берет 1 карту.',
            block: 8,
            draw: 1,
            type: 'skill',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'impervious',
            name: 'Неуязвимость',
            cost: 2,
            description: 'Дает 30 Защиты.',
            block: 30,
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'ghostly_armor',
            name: 'Призрачная броня',
            cost: 1,
            description: 'Дает 10 Защиты. (Эфирная - исчезает в конце хода)',
            block: 10,
            type: 'skill',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'flame_barrier',
            name: 'Огненный барьер',
            cost: 2,
            description: 'Дает 12 Защиты. Когда вас атакуют, наносит 4 урона атакующему.',
            block: 12,
            type: 'skill',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
    
        {
            id: 'survivor',
            name: 'Выживающий',
            cost: 1,
            description: 'Дает 8 Защиты. Сбрасывает 1 карту.',
            block: 8,
            type: 'skill',
            rarity: 'common',
            character: 'silent',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'leg_sweep',
            name: 'Подсечка',
            cost: 2,
            description: 'Дает 11 Защиты. Накладывает 2 Слабости.',
            block: 11,
            debuff: 'weak',
            type: 'skill',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'crippling_poison',
            name: 'Калечащий яд',
            cost: 2,
            description: 'Накладывает 4 Яда. Накладывает 3 Слабости.',
            poison: 4,
            debuff: 'weak',
            type: 'skill',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'adrenaline',
            name: 'Адреналин',
            cost: 0,
            description: 'Дает +1 энергию. Берет 2 карты.',
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'nightmare',
            name: 'Кошмар',
            cost: 3,
            description: 'Выбирает карту. В следующем ходу добавляет 3 её копии в руку.',
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
    
        {
            id: 'vigilance',
            name: 'Бдительность',
            cost: 2,
            description: 'Дает 8 Защиты. Входит в Спокойствие.',
            block: 8,
            type: 'skill',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'talk_to_the_hand',
            name: 'Поговори с рукой',
            cost: 1,
            description: 'Наносит 5 урона. Каждый раз, когда цель получает урон, дает 3 Защиты.',
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'scrawl',
            name: 'Письмена',
            cost: 1,
            description: 'Добирает карты до 10 в руке. (Эфирная)',
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },

        {
            id: 'disarm',
            name: 'Обезоружить',
            cost: 1,
            description: 'Накладывает 2 Силы. (Снижает силу атаки врага)',
            type: 'skill',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'piercing_wail',
            name: 'Пронзительный вопль',
            cost: 1,
            description: 'ВСЕ враги теряют 6 Силы на этот ход.',
            type: 'skill',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'corruption',
            name: 'Разложение',
            cost: 3,
            description: 'Навыки стоят 0 энергии. При разыгрывании навыка, карта сжигается.',
            type: 'skill',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        }
    ],

    power: [
        {
            id: 'inflame',
            name: 'Воспламенение',
            cost: 1,
            description: 'Дает +2 Силы на весь бой.',
            type: 'power',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'demon_form',
            name: 'Демоническая форма',
            cost: 3,
            description: 'Каждый ход получает +2 Силы.',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'footwork',
            name: 'Работа ног',
            cost: 1,
            description: 'Дает +2 Ловкости на весь бой.',
            type: 'power',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'after_image',
            name: 'Отражение',
            cost: 1,
            description: 'Каждый разыгранный навык дает 1 Защиты.',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'metallicize',
            name: 'Металлизация',
            cost: 1,
            description: 'В конце хода дает 3 Защиты.',
            block_per_turn: 3,
            type: 'power',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'rushdown',
            name: 'Натиск',
            cost: 1,
            description: 'Когда вы выходите из Гнева, берет 2 карты.',
            type: 'power',
            rarity: 'uncommon',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'devotion',
            name: 'Преданность',
            cost: 1,
            description: 'В начале хода дает +1 Мантры.',
            type: 'power',
            rarity: 'common',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'biased_cognition',
            name: 'Предвзятое мнение',
            cost: 1,
            description: 'Дает +4 Фокуса. Каждый ход теряет 1 Фокуса.',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'electrodynamics',
            name: 'Электродинамика',
            cost: 2,
            description: 'Молнии бьют по всем врагам. Дает 2 канала Молнии.',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'creative_ai',
            name: 'Творческий ИИ',
            cost: 3,
            description: 'В начале хода добавляет в руку случайную силу.',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        },
        {
            id: 'echo_form',
            name: 'Форма эха',
            cost: 3,
            description: 'Первая карта, разыгранная в ход, разыгрывается дважды. (Эфирная)',
            type: 'power',
            rarity: 'rare',
            image: 'https://i.imgur.com/BnY5isw.jpeg'
        }
    ]
};

export function getAllCards() {
    return [
        ...cardDatabase.attack,
        ...cardDatabase.skill,
        ...cardDatabase.power
    ];
}

export function getRandomCard(type = null) {
    let pool;
    if (type && type !== 'all') {
        pool = cardDatabase[type] || [];
    } else {
        pool = getAllCards();
    }
    
    if (pool.length === 0) return null;
    return pool[Math.floor(Math.random() * pool.length)];
}

export function getStarterDeck() {
    return [
        cardDatabase.attack.find(c => c.id === 'strike'),
        cardDatabase.attack.find(c => c.id === 'strike'),
        cardDatabase.attack.find(c => c.id === 'strike'),
        cardDatabase.attack.find(c => c.id === 'strike'),
        cardDatabase.attack.find(c => c.id === 'strike'),
        cardDatabase.skill.find(c => c.id === 'defend'),
        cardDatabase.skill.find(c => c.id === 'defend'),
        cardDatabase.skill.find(c => c.id === 'defend'),
        cardDatabase.skill.find(c => c.id === 'defend'),
        cardDatabase.attack.find(c => c.id === 'heavy_blade')
    ].filter(Boolean);
}

export function generateRandomDeck(size = 20) {
    const deck = [];
    const types = ['attack', 'skill', 'power'];
    
    for (let i = 0; i < size; i++) {
        const type = types[Math.floor(Math.random() * types.length)];
        const cardsOfType = cardDatabase[type];
        if (cardsOfType && cardsOfType.length > 0) {
            const template = cardsOfType[Math.floor(Math.random() * cardsOfType.length)];
            deck.push({
                ...template,
                instanceId: `${template.id}_${Date.now()}_${i}_${Math.random()}`
            });
        }
    }
    
    return deck;
}

export function getCardsByRarity(rarity) {
    return getAllCards().filter(card => card.rarity === rarity);
}

export function getCardsByCharacter(character) {
    return getAllCards().filter(card => card.character === character);
}

export function searchCards(query) {
    if (!query) return getAllCards();
    
    query = query.toLowerCase();
    return getAllCards().filter(card => 
        card.name.toLowerCase().includes(query) || 
        card.description.toLowerCase().includes(query)
    );
}

export function getDatabaseStats() {
    return {
        total: getAllCards().length,
        attack: cardDatabase.attack.length,
        skill: cardDatabase.skill.length,
        power: cardDatabase.power.length,
        common: getCardsByRarity('common').length,
        uncommon: getCardsByRarity('uncommon').length,
        rare: getCardsByRarity('rare').length
    };
}