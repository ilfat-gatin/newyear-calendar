const decemberDays = {
    day1: {
        text: "Вырежи снежинки из бумаги и укрась ими дом",
        photo: "1 Snezhinki.jpg",
        opened: false,
        id: 1
    },
    day2: {
        text: "Вкусная шоколадка",
        photo: "2 Shoko.jpg",
        opened: false,
        id: 2
    },
    day3: {
        text: "Поставь елку и укрась дом",
        photo: "3 Elka.jpg",
        opened: false,
        id: 3
    },
    day4: {
        text: "Пастила",
        photo: "4 Pastila.jpg",
        opened: false,
        id: 4
    },
    day5: {
        text: "Смастери елочную игрушку",
        photo: "5 Igrushka.jpg",
        opened: false,
        id: 5
    },
    day6: {
        text: "Ароматическая свечка",
        photo: "6 Svechka.jpg",
        opened: false,
        id: 6
    },
    day7: {
        text: "Составь список целей на будущий год",
        photo: "7 Celi.jpg",
        opened: false,
        id: 7
    },
    day8: {
        text: "Крем для рук",
        photo: "8 Krem.png",
        opened: false,
        id: 8
    },
    day9: {
        text: "Устрой вечер с друзьями",
        photo: "9 Friends.jpg",
        opened: false,
        id: 9
    },
    day10: {
        text: "Орехи и сухофрукты",
        photo: "10 Orehi.jpg",
        opened: false,
        id: 10
    },
    day11: {
        text: "Устрой вечер поцелуев и не только😏",
        photo: "11 Pocelui.jpeg",
        opened: false,
        id: 11
    },
    day12: {
        text: "Вкусный набор чая",
        photo: "12 Chai.jpeg",
        opened: false,
        id: 12
    },
    day13: {
        text: "Порадуй себя! Закажи пиццу/суши",
        photo: "13 Pizza.jpg",
        opened: false,
        id: 13
    },
    day14: {
        text: "Зефир",
        photo: "14 Zefir.jpeg",
        opened: false,
        id: 14
    },
    day15: {
        text: "Подведи итоги года, вспомни самые важные моменты",
        photo: "15 Itogi.jpg",
        opened: false,
        id: 15
    },
    day16: {
        text: "Kinder сюрприз",
        photo: "16 kinder.jpg",
        opened: false,
        id: 16
    },
    day17: {
        text: "Сходи на каток",
        photo: "17 katok.jpg",
        opened: false,
        id: 17
    },
    day18: {
        text: "Игрушка на елку",
        photo: "18 IgrNaElku.jpeg",
        opened: false,
        id: 18
    },
    day19: {
        text: "Испеки праздничное печенье",
        photo: "19 Pechene.jpg",
        opened: false,
        id: 19
    },
    day20: {
        text: "Новогодние носки",
        photo: "20 Socks.jpg",
        opened: false,
        id: 20
    },
    day21: {
        text: "Посмотри новогодний фильм/мультфильм",
        photo: "21 Film.jpg",
        opened: false,
        id: 21
    },
    day22: {
        text: "Мармелад",
        photo: "22 Marmelad.jpg",
        opened: false,
        id: 22
    },
    day23: {
        text: "Свари глинтвейн",
        photo: "23 Glintwein.jpg",
        opened: false,
        id: 23
    },
    day24: {
        text: "Пазл с символом Нового Года",
        photo: "24 Puzzle.jpg",
        opened: false,
        id: 24
    },
    day25: {
        text: "Поиграть в снежки/слепить снеговика",
        photo: "25 Snowman.jpg",
        opened: false,
        id: 25
    },
    day26: {
        text: "Сладкий подарок",
        photo: "26 Podarok.jpg",
        opened: false,
        id: 26
    },
    day27: {
        text: "Составить новогоднее меню",
        photo: "27 Menu.jpg",
        opened: false,
        id: 27
    },
    day28: {
        text: "Бомбочки для ванной",
        photo: "28 BombaWanna.jpg",
        opened: false,
        id: 28
    },
    day29: {
        text: "Пусть твой дом будет чистым к новому году, уберись в нем",
        photo: "29 Uborka.jpg",
        opened: false,
        id: 29
    },
    day30: {
        text: "Новогодняя пижама",
        photo: "30 Pijama.jpg",
        opened: false,
        id: 30
    },
    day31: {
        text: "Весело встретить Новый Год",
        photo: "31 New Year.jpg",
        opened: false,
        id: 31
    },
}
const date = new Date()
const calendarDay = date.getDate()

const days = document.querySelectorAll('.day');

const modal = document.querySelector('.modal')

const jsonStr = JSON.stringify(decemberDays)

if (!localStorage.length) {
    localStorage.setItem("decemberDays", jsonStr)
}

const loadedDays = JSON.parse(localStorage.decemberDays)

for (key in loadedDays) {
    if (loadedDays[key].opened) {
        days.forEach(e => {
            if (e.dataset.day == loadedDays[key].id) {
                e.classList.add('opened')    
            }
        })        
    }
}

days.forEach( el => {
    el.addEventListener('click', () => {
        const decemberDay = loadedDays[`day${el.dataset.day}`]
        if (el.dataset.day > calendarDay) {
            document.querySelector('.not_allowed').style.display = 'flex';
            document.querySelector('.not_allowed').classList.add("animation");
        } else {
            loadedDays[`day${el.dataset.day}`].opened = true
            let jsonStr = JSON.stringify(loadedDays)
            localStorage.setItem("decemberDays", jsonStr)            
            modal.querySelector('h2').innerHTML = el.dataset.day % 2 == 0 ? "Подарок" : "Задание"
            modal.querySelector('h3').innerHTML = decemberDay.text;
            modal.querySelector('img').setAttribute('src', `./img/${decemberDay.photo}`)
            if (el.dataset.day == 7 || el.dataset.day == 20) {
                modal.querySelector('img').style.width = '80%'; 
            } else if (el.dataset.day == 24){
                modal.querySelector('img').style.width = '60%';
            } else {
                modal.querySelector('img').style.width = '100%';
            }
            document.querySelector('.modal_bg').style.display = 'flex';
            el.classList.add('opened')
            modal.classList.add("animation");
        }        
    })
})

document.querySelector('.not_allowed').addEventListener('click', (e) => {
    document.querySelector('.not_allowed').style.display = 'none'
})

document.querySelector('.modal_bg').addEventListener('click', (e) => {
    document.querySelector('.modal_bg').style.display = 'none'
})

modal.addEventListener('click', (e) => {
    e.stopPropagation();
})
