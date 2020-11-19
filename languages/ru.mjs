// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 3.3.0. Any missing item will fall back to english
//
export default {
    // Pages
    pages: {
        schedule: 'Расписание',
        settings: 'Настройки',
        help: 'помогите',
        storedData: 'Сохраненные данные',
        privacyPolicy: 'Политика конфиденциальности'
    },

    // Schedule page
    //
    plans_header: 'Выберите план чтения',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Последовательный',
        // In the order the Bible books were written
        written: 'Как написано',
        // In the order the events happened
        chronological: '«Хронологический'
    },
    durations_header: 'продолжительность',
    setRead: {
        label: 'Установить чтение',
        question: 'Вы хотите, чтобы все предыдущие разделы были прочитаны, а следующие - непрочитанными?'
    },

    // Settings page 
    //
    english: 'английский',
    display: 'Дисплей',
    language: {
        label: 'Язык',
        placeholder: 'Язык',
        title: 'Выберите язык',
        contribute: 'Участвовать в переводе'
    },
    startOver: {
        label: 'Начать заново',
        title: 'Начать заново',
        description: 'Очистить статус чтения.',
        question: 'Вы хотите очистить статус чтения?'
    },
    resetEndDate: {
        label: 'Сбросить дату окончания',
        description: 'Установите дату окончания, чтобы она совпадала с чтением.',
        question: 'Сбросить дату окончания, чтобы успеть к чтению?',
    },
    withEndDate: {
        label: 'С датой окончания',
        description: 'Отслеживайте ежедневное чтение с датой окончания.',
    },
    showEvents: {
        label: 'Показать события (экспериментально)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/ru/wol/d/r2/lp-u/1101990130#h=255',
        text: 'События основаны на',
        title: '«Все Писание богодухновенно и полезно»',
        chapter: 'Исследование № 3 - Измерение событий в потоке времени',
        caption: 'Таблица выдающихся исторических дат',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'b.',
        'c.': 'c.',
        'C.E.': 'CE',
        'B.C.E.': 'BCE'
    },
    showLocations: {
        label: 'Показать местоположения (экспериментально)',
        URL: 'https://wol.jw.org/ru/wol/d/r2/lp-u/1102003130',
        text: 'Показать ссылки на места в брошюре',
        title: '«Добрая земля»',
        legend: 'Для легенды см.',
        caption: 'Указатель к картам',

    },
    legal: 'юридический',
    version: 'Версия',
    help: 'Помогите',


    // Help page
    //
    helpPage: [
        'Около',
        'NWT Reading поможет вам следить за своим расписанием чтения \
            Священные Писания Свидетелей Иеговы - Перевод нового мира.',

        'Как это устроено',
        'Выберите план чтения и продолжительность вверху страницы.',
        'Проверьте раздел, который вы прочитали.',
        'После прочтения Библии выберите "Начать заново" на странице настроек.',
    ],

    // Stored Data
    storedDataPage: [
        'Это дамп всех данных, которые хранятся в приложении. \
            Это может быть полезно для устранения неполадок и проверки конфиденциальности.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        '«Мобильное приложение« СЗТ Ридинг («ПРОДУКТ») не собирает \
        любая личная информация. Все данные хранятся локально.',

        'Searchwork.org не позволяет рекламным компаниям собирать данные через \
        наш ПРОДУКТ для таргетинга рекламы. \
        Мы не передаем данные, собранные этим ПРОДУКТОМ, другим организациям \
        для любых целей.',

        'Эта политика конфиденциальности последний раз обновлялась 05.04.2019. \
        Наша политика конфиденциальности может время от времени меняться. \
        Рекомендуется периодически просматривать эту Политику конфиденциальности на предмет изменений. \
        Изменения в этой Политике конфиденциальности вступают в силу, когда они публикуются на этой странице.'
    ],
};