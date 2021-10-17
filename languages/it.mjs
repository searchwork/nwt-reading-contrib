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
        schedule: 'Programma',
        settings: 'Impostazioni',
        help: 'Aiuto (inglese)',
        storedData: 'Dati memorizzati (inglese)',
        privacyPolicy: 'Politica sulla riservatezza (inglese)'
    },

    // Schedule page
    //
    plans_header: 'Seleziona un piano di lettura',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sequenziale',
        // In the order the Bible books were written
        written: 'Come è scritto',
        // In the order the events happened
        chronological: 'Cronologico'
    },
    durations_header: 'durata',
    setRead: {
        label: 'Impostare letto',
        question: 'Vuoi impostare tutte le sezioni precedenti come da leggere e quelle che seguono come non lette?'
    },

    // Settings page
    //
    english: 'inglese',
    display: 'Mostrare',
    language: {
        label: 'Lingua',
        placeholder: 'Lingua',
        title: 'Scegli una lingua',
        contribute: 'Contribuire alla traduzione'
    },
    startOver: {
        label: 'Ricomincia',
        title: 'Ricomincia',
        description: 'Azzera il programma di lettura e imposta oggi come data di inizio.',
        question: 'Vuoi azzerare il programma di lettura e impostare oggi come data di inizio?'
    },
    resetEndDate: {
        label: 'Reimposta data di fine',
        description: 'Reimposta la data di fine in modo che sia puntuale con la lettura.',
        question: 'Reimpostare la data di fine in modo che sia puntuale con la lettura?',
    },
    withEndDate: {
        label: 'Con data di fine',
        description: 'Tieni traccia della lettura quotidiana con una data di fine.',
    },
    showEvents: {
        label: 'Mostra eventi (sperimentale)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/it/wol/d/r6/lp-i/1101990130#h=253',
        text: 'Basati su',
        title: '“Tutta la Scrittura è ispirata da Dio e utile”',
        chapter: 'Studio numero 3: Come collocare gli avvenimenti nel tempo',
        caption: 'Elenco di importanti date storiche',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'd.': 'd.',
        'ca.': 'ca.',
        'E.V.': 'E.V.',
        'a.E.V.': 'a.E.V.'
    },
    showLocations: {
        label: 'Show Locations (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Show location references to the brosure',
        title: '“See the Good Land”',
        legend: 'For a legend see the',
        caption: 'Index to Maps',
    },
    legal: 'Legale',
    version: 'Versione',
    help: 'Aiuto',


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