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
            image: 'strike.jpg'
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
            image: 'perfected_strike.jpg'
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
            image: 'twin_strike.jpg'
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
            image: 'heavy_blade.jpg'
        },
        {
            id: 'wild_strike',
            name: 'Дикий удар',
            cost: 1,
            description: 'Наносит 12 урона. Добавляет в стопку сброса Рану.',
            damage: 12,
            type: 'attack',
            rarity: 'common',
            image: 'wild_strike.jpg'
        },
        {
            id: 'blood_for_blood',
            name: 'Кровь за кровь',
            cost: 4,
            description: 'Наносит 18 урона. Стоимость уменьшается на 1 за каждый полученный урон.',
            damage: 18,
            type: 'attack',
            rarity: 'uncommon',
            image: 'blood_for_blood.jpg'
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
            image: 'reaper.jpg'
        },
        {
            id: 'bludgeon',
            name: 'Дубина',
            cost: 3,
            description: 'Наносит 32 урона.',
            damage: 32,
            type: 'attack',
            rarity: 'rare',
            image: 'bludgeon.jpg'
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
            image: 'immolate.jpg'
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
            image: 'neutralize.jpg'
        },
        {
            id: 'dagger_throw',
            name: 'Бросок кинжала',
            cost: 1,
            description: 'Наносит 9 урона. Сбрасывает 1 карту, затем берет 1 карту.',
            damage: 9,
            type: 'attack',
            rarity: 'common',
            image: 'dagger_throw.jpg'
        },
        {
            id: 'endless_agony',
            name: 'Бесконечная агония',
            cost: 0,
            description: 'Наносит 4 урона. Когда вы сбрасываете эту карту, добавляет её копию в руку.',
            damage: 4,
            type: 'attack',
            rarity: 'uncommon',
            image: 'endless_agony.jpg'
        },
        {
            id: 'flying_knee',
            name: 'Летящее колено',
            cost: 1,
            description: 'Наносит 8 урона. Дает +1 энергию на следующий ход.',
            damage: 8,
            type: 'attack',
            rarity: 'common',
            image: 'flying_knee.jpg'
        },
        {
            id: 'predator',
            name: 'Хищник',
            cost: 2,
            description: 'Наносит 15 урона. Дает +2 карты в следующем ходу.',
            damage: 15,
            type: 'attack',
            rarity: 'uncommon',
            image: 'predator.jpg'
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
            image: 'glass_knife.jpg'
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
            image: 'skewer.jpg'
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
            image: 'eruption.jpg'
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
            image: 'tantrum.jpg'
        },
        {
            id: 'reach_heaven',
            name: 'Достичь небес',
            cost: 2,
            description: 'Наносит 10 урона. Добавляет в руку "Восхождение" (наносит 25 урона).',
            damage: 10,
            type: 'attack',
            rarity: 'uncommon',
            image: 'reach_heaven.jpg'
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
            image: 'raagnarok.jpg'
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
            image: 'conclude.jpg'
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
            image: 'mind_blast.jpg'
        },
        {
            id: 'hand_of_greed',
            name: 'Рука жадности',
            cost: 2,
            description: 'Наносит 20 урона. Если убивает, дает 20 золота.',
            damage: 20,
            type: 'attack',
            rarity: 'rare',
            image: 'hand_of_greed.jpg'
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
            image: 'defend.jpg'
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
            image: 'shrug_it_off.jpg'
        },
        {
            id: 'impervious',
            name: 'Неуязвимость',
            cost: 2,
            description: 'Дает 30 Защиты.',
            block: 30,
            type: 'skill',
            rarity: 'rare',
            image: 'impervious.jpg'
        },
        {
            id: 'ghostly_armor',
            name: 'Призрачная броня',
            cost: 1,
            description: 'Дает 10 Защиты. (Эфирная - исчезает в конце хода)',
            block: 10,
            type: 'skill',
            rarity: 'common',
            image: 'ghostly_armor.jpg'
        },
        {
            id: 'flame_barrier',
            name: 'Огненный барьер',
            cost: 2,
            description: 'Дает 12 Защиты. Когда вас атакуют, наносит 4 урона атакующему.',
            block: 12,
            type: 'skill',
            rarity: 'uncommon',
            image: 'flame_barrier.jpg'
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
            image: 'survivor.jpg'
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
            image: 'leg_sweep.jpg'
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
            image: 'crippling_poison.jpg'
        },
        {
            id: 'adrenaline',
            name: 'Адреналин',
            cost: 0,
            description: 'Дает +1 энергию. Берет 2 карты.',
            type: 'skill',
            rarity: 'rare',
            image: 'adrenaline.jpg'
        },
        {
            id: 'nightmare',
            name: 'Кошмар',
            cost: 3,
            description: 'Выбирает карту. В следующем ходу добавляет 3 её копии в руку.',
            type: 'skill',
            rarity: 'rare',
            image: 'nightmare.jpg'
        },
    
        {
            id: 'vigilance',
            name: 'Бдительность',
            cost: 2,
            description: 'Дает 8 Защиты. Входит в Спокойствие.',
            block: 8,
            type: 'skill',
            rarity: 'common',
            image: 'vigilance.jpg'
        },
        {
            id: 'talk_to_the_hand',
            name: 'Поговори с рукой',
            cost: 1,
            description: 'Наносит 5 урона. Каждый раз, когда цель получает урон, дает 3 Защиты.',
            type: 'skill',
            rarity: 'rare',
            image: 'talk_to_the_hand.jpg'
        },
        {
            id: 'scrawl',
            name: 'Письмена',
            cost: 1,
            description: 'Добирает карты до 10 в руке. (Эфирная)',
            type: 'skill',
            rarity: 'rare',
            image: 'scrawl.jpg'
        },

        {
            id: 'disarm',
            name: 'Обезоружить',
            cost: 1,
            description: 'Накладывает 2 Силы. (Снижает силу атаки врага)',
            type: 'skill',
            rarity: 'uncommon',
            image: 'disarm.jpg'
        },
        {
            id: 'piercing_wail',
            name: 'Пронзительный вопль',
            cost: 1,
            description: 'ВСЕ враги теряют 6 Силы на этот ход.',
            type: 'skill',
            rarity: 'common',
            image: 'piercing_wail.jpg'
        },
        {
            id: 'corruption',
            name: 'Разложение',
            cost: 3,
            description: 'Навыки стоят 0 энергии. При разыгрывании навыка, карта сжигается.',
            type: 'skill',
            rarity: 'rare',
            image: 'corruption.jpg'
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
            image: 'inflame.jpg'
        },
        {
            id: 'demon_form',
            name: 'Демоническая форма',
            cost: 3,
            description: 'Каждый ход получает +2 Силы.',
            type: 'power',
            rarity: 'rare',
            image: 'demon_form.jpg'
        },
        {
            id: 'footwork',
            name: 'Работа ног',
            cost: 1,
            description: 'Дает +2 Ловкости на весь бой.',
            type: 'power',
            rarity: 'uncommon',
            image: 'footwork.jpg'
        },
        {
            id: 'after_image',
            name: 'Отражение',
            cost: 1,
            description: 'Каждый разыгранный навык дает 1 Защиты.',
            type: 'power',
            rarity: 'rare',
            image: 'after_image.jpg'
        },
        {
            id: 'metallicize',
            name: 'Металлизация',
            cost: 1,
            description: 'В конце хода дает 3 Защиты.',
            block_per_turn: 3,
            type: 'power',
            rarity: 'uncommon',
            image: 'metallicize.jpg'
        },
        {
            id: 'rushdown',
            name: 'Натиск',
            cost: 1,
            description: 'Когда вы выходите из Гнева, берет 2 карты.',
            type: 'power',
            rarity: 'uncommon',
            image: 'rushdown.jpg'
        },
        {
            id: 'devotion',
            name: 'Преданность',
            cost: 1,
            description: 'В начале хода дает +1 Мантры.',
            type: 'power',
            rarity: 'common',
            image: 'devotion.jpg'
        },
        {
            id: 'biased_cognition',
            name: 'Предвзятое мнение',
            cost: 1,
            description: 'Дает +4 Фокуса. Каждый ход теряет 1 Фокуса.',
            type: 'power',
            rarity: 'rare',
            image: 'biased_cognition.jpg'
        },
        {
            id: 'electrodynamics',
            name: 'Электродинамика',
            cost: 2,
            description: 'Молнии бьют по всем врагам. Дает 2 канала Молнии.',
            type: 'power',
            rarity: 'rare',
            image: 'electrodynamics.jpg'
        },
        {
            id: 'creative_ai',
            name: 'Творческий ИИ',
            cost: 3,
            description: 'В начале хода добавляет в руку случайную силу.',
            type: 'power',
            rarity: 'rare',
            image: 'creative_ai.jpg'
        },
        {
            id: 'echo_form',
            name: 'Форма эха',
            cost: 3,
            description: 'Первая карта, разыгранная в ход, разыгрывается дважды. (Эфирная)',
            type: 'power',
            rarity: 'rare',
            image: 'echo_form.jpg'
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