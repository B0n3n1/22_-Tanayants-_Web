function startGame() {
    const celebrities = [
        {
            name: "Тарантино",
            hints: [
                "Он режиссёр, который любит снимать фильмы про месть",
                "В его фильмах часто показывают ноги и много диалогов",
                "Снял 'Криминальное чтиво', 'Убить Билла', 'Бесславные ублюдки'"
            ],
            difficulty: "Средний"
        },
        {
            name: "Криштиану Роналду",
            hints: [
                "Футболист, известный своим прыжком и ударом",
                "Играл за Манчестер Юнайтед, Реал Мадрид, Ювентус",
                "У него есть прозвище CR7"
            ],
            difficulty: "Легкий"
        },
        {
            name: "Мэрилин Монро",
            hints: [
                "Икона Голливуда 1950-х годов",
                "Пела песню 'Happy Birthday' президенту США",
                "Её платье развевалось над вентиляционной решёткой"
            ],
            difficulty: "Средний"
        },
        {
            name: "Илон Маск",
            hints: [
                "Миллиардер, который хочет колонизировать Марс",
                "Основал Tesla и SpaceX",
                "Покупал Twitter за 44 миллиарда долларов"
            ],
            difficulty: "Легкий"
        },
        {
            name: "Джокер",
            hints: [
                "Персонаж комиксов DC",
                "Его фраза: 'Why so serious?'",
                "Сыгран актёром, который посмертно получил Оскара"
            ],
            difficulty: "Сложный"
        },
        {
            name: "Мадонна",
            hints: [
                "Певица, которую называют королевой поп-музыки",
                "Её хит 'Like a Virgin' скандально известен",
                "Носила остроконечный лифчик от Jean Paul Gaultier"
            ],
            difficulty: "Средний"
        },
        {
            name: "Джордан",
            hints: [
                "Легендарный баскетболист под 23 номером",
                "Снимался в фильме 'Космический джем'",
                "У него есть бренд кроссовок Air Jordan"
            ],
            difficulty: "Легкий"
        },
        {
            name: "Эйнштейн",
            hints: [
                "Учёный с взлохмаченными волосами",
                "Придумал теорию относительности",
                "Формула E = mc²"
            ],
            difficulty: "Средний"
        }
    ];
    alert("🌟 УГАДАЙ ЗНАМЕНИТОСТЬ 🌟\n\nПравила:\n• Я загадаю известную личность\n• У тебя будет 3 подсказки\n• Чем меньше подсказок используешь, тем больше очков\n• Максимум — 100 очков");
    let playAgain = true;
    let totalScore = 0;
    let gamesPlayed = 0;
    while (playAgain) {
        gamesPlayed++;
        const randomIndex = Math.floor(Math.random() * celebrities.length);
        const secretCeleb = celebrities[randomIndex]; 
        alert(`🔮 РАУНД ${gamesPlayed}\n\nЯ загадал знаменитость.\nУ тебя есть 3 подсказки.\nИспользуй их с умом!`);      
        let hintsUsed = 0;
        let guessed = false;
        let score = 100;
        while (hintsUsed < 3 && !guessed) {
            let action;
            if (hintsUsed === 0) {
                action = confirm("🎯 Готов угадывать сразу?)))\n\nОК — попробую угадать\nОтмена — дай подсказку");
            } else {
                action = confirm(`📢 Подсказка ${hintsUsed}/3\n\nОК — попробую угадать\nОтмена — нужна ещё подсказка`);
            }
            if (action === true) {
                const guess = prompt(`💰 Введи знаменитость (или нажми Отмена, чтобы вернуться к подсказкам):`);
                if (guess === null) {
                    continue;
                }
                if (guess.trim() === "") {
                    alert("⚠️ Ты ничего не ввёл! Попробуй ещё раз.");
                    continue;
                }
                const normalizedGuess = guess.trim();
                if (normalizedGuess.toLowerCase() === secretCeleb.name.toLowerCase()) {
                    guessed = true;
                    totalScore += score;
                    alert(`🎉 ПОБЕДА!\n\nТы угадал знаменитость: ${secretCeleb.name}!\nИспользовано подсказок: ${hintsUsed}\nЗаработано очков: ${score}\nВсего очков: ${totalScore}`);
                } else {
                    score -= 30;
                    alert(`😢 Не угадал! Это не "${normalizedGuess}".\nШтраф -30 очков.\nОсталось очков за этот раунд: ${score}`);
                    
                    if (score <= 0) {
                        alert(`💀 Ты проиграл раунд! Очки закончились.\nЗагаданная знаменитость: ${secretCeleb.name}`);
                        break;
                    }
                }
            } else {
                if (hintsUsed < 3) {
                    alert(`📢 Подсказка ${hintsUsed + 1}/3:\n\n${secretCeleb.hints[hintsUsed]}`);
                    hintsUsed++;
                    score -= 20;
                } else {
                    alert("⚠️ Подсказки закончились! Придётся угадывать.");
                }
            }
        }
        if (!guessed && score > 0) {
            const finalGuess = prompt(`❗ ПОСЛЕДНИЙ ШАНС!\nКто эта знаменитость? (Подсказки закончились)`);
            
            if (finalGuess !== null) {
                const normalizedFinal = finalGuess.trim();
                
                if (normalizedFinal.toLowerCase() === secretCeleb.name.toLowerCase()) {
                    totalScore += score;
                    alert(`🎉 ФИНАЛЬНАЯ ПОБЕДА!\n\nТы угадал знаменитость: ${secretCeleb.name}!\nЗаработано очков: ${score}\nВсего очков: ${totalScore}`);
                } else {
                    alert(`😢 Проигрыш...\nЗагаданная знаменитость: ${secretCeleb.name}\nТвой ответ: "${finalGuess}"`);
                }
            } else {
                alert(`😢 Ты сдался...\nЗагаданная знаменитость: ${secretCeleb.name}`);
            }
        }
        const again = confirm(`📊 ТВОЙ РЕЗУЛЬТАТ:\n\nСыграно раундов: ${gamesPlayed}\nВсего очков: ${totalScore}\nСредний результат: ${Math.round(totalScore / gamesPlayed)} очков за раунд\n\n🔄 Сыграем ещё раз?`);
        if (!again) {
            playAgain = false;
            let rating;
            if (totalScore >= 500) rating = "👑 ЗНАТОК ЗНАМЕНИТОСТЕЙ 👑";
            else if (totalScore >= 300) rating = "⭐ ПРОФИ ⭐";
            else if (totalScore >= 150) rating = "🎯 ЛЮБИТЕЛЬ 🎯";
            else rating = "📚 УЧИ МАТЧАСТЬ 📚";
            alert(`🏆 ИТОГОВЫЙ РЕЗУЛЬТАТ 🏆\n\nСыграно раундов: ${gamesPlayed}\nВсего очков: ${totalScore}\nСредний результат: ${Math.round(totalScore / gamesPlayed)}\n\nТвой рейтинг: ${rating}\n\nСпасибо за игру! Возвращайся ещё!`);
        }
    }
}