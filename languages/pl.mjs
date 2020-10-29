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
        schedule: 'Harmonogram',
        settings: 'Ustawienia',
        help: 'Pomoc',
        storedData: 'Przechowywanie danych',
        privacyPolicy: 'Polityka Prywatności'
    },

    // Schedule page
    //
    plans_header: 'Wybierz plan czytania',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sekwencyjny',
        // In the order the Bible books were written
        written: 'Jak napisano',
        // In the order the events happened
        chronological: 'Chronologiczny'
    },
    durations_header: 'Trwanie',
    setRead: {
        label: 'Ustaw przeczytane',
        question: 'Czy chcesz ustawić wszystkie poprzednie sekcje do czytania, a te do nieprzeczytanych??'
    },

    // Settings page 
    //
    english: 'Angielski',
    language: {
        label: 'Język',
        placeholder: 'Język',
        title: 'Wybierz język',
        contribute: 'Przyczyń sie do tłumaczenia'
    },
    startOver: {
        label: 'Zacznij od nowa',
        title: 'Zacznij od nowa',
        description: 'Wyczyść status czytania.',
        question: 'Czy chcesz wyczyścić status czytania?'
    },
    resetEndDate: {
        label: 'Resetuj datę zakończenia',
        description: 'Zresetuj datę zakończenia, aby zdążyć na czytanie.',
        question: 'Zresetować datę zakończenia, aby zdążyć z czytaniem?',
    },
    withEndDate: {
        label: 'Z datą zakończenia',
        description: 'Śledź codzienne czytanie z datą zakończenia.',
    },
    showEvents: {
        label: 'Pokaż zdarzenia (eksperymentalne)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/pl/wol/d/r12/lp-p/1101990130#h=252',
        text: 'Zdarzenia oparte na',
        title: '“Całe Pismo natchnione przez Boga i pożyteczne”',
        chapter: 'Studium 3- Umiejscawianie wydarzeń w strumieniu czasu',
        caption: 'Ważne daty historyczne',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'po.': 'po.',
        'przed.': 'przed.',
        'ok.': 'ok.',
        'n.e.': 'n.e.',
        'p.n.e.': 'p.n.e.'
    },
    showLocations: {
        label: 'Show Locations (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Show location references to the brosure',
        title: '“See the Good Land”',
        legend: 'For a legend see the',
        caption: 'Index to Maps',
    },
    legal: 'Prawne',
    version: 'Wersja',
    help: 'Pomoc',


    // Help page
    //
    helpPage: [
        'About',
        'NWT Reading helps you to keep track of your reading schedule of the \
            New World Translation of the Holy Scriptures of Jehovah\'s Witnesses.',

        'How it Works',
        'Choose a reading plan and the duration at the top of the page.',
        'Check the section that you have read.',
        'After finishing reading the Bible select "Start Over" on the Settings page.',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'This is a dump of all the data that is stored in the app. \
            It can be useful for troubleshooting and privacy checking.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'The NWT Reading mobile application (the “PRODUCT”) does not collect \
        any personal information. All data is stored locally.',

        'Searchwork.org, does not allow advertising companies to collect data through \
        our PRODUCT for ad targeting. \
        We do not share data collected by this PRODUCT with other organizations \
        for any purpose.',

        'This privacy policy was last updated on 05/04/2019. \
        Our privacy policy may change from time to time. \
        You are advised to review this Privacy Policy periodically for any changes. \
        Changes to this Privacy Policy are effective when they are posted on this page.'
    ]
};