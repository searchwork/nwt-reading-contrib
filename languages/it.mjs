// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 2.0.0. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Italiano',

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
        chronological: 'Cronologico (sperimentale)',
        // Christian Greek Scriptures only
        greekScriptures: 'Scritture Greche Cristiane'
    },
    speed_header: 'Velocità',

    // Settings page 
    //
    english: 'inglese',
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
    continueAt: {
        label: 'Continua da',
        placeholder: '<seleziona>',
        title: 'Scegli da dove continuare con la lettura',
        description: 'Tutte le sezioni precedenti saranno contrassegnate come già lette e quelle che seguono come non lette.',
        question: 'Vuoi impostare tutte le sezioni precedenti come da leggere e quelle che seguono come non lette?'
    },
    WOLreferences: {
        label: 'WOL riferimenti e note',
        description: 'Visualizza i riferimenti e note nella BIBLIOTECA ONLINE Watchtower.',
    },
    help: 'Aiuto',
    legal: 'Legale',
    version: 'Versione',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Genesi', 'Esodo', 'Levitico', 'Numeri', 'Deuteronomio',
        'Giosuè', 'Giudici', 'Rut', '1 Samuele', '2 Samuele',
        '1 Re', '2 Re', '1 Cronache', '2 Cronache',
        'Esdra', 'Neemia', 'Ester', 'Giobbe',
        'Salmi', 'Proverbi', 'Ecclesiaste', 'Cantico dei Cantici',
        'Isaia', 'Geremia', 'Lamentazioni', 'Ezechiele', 'Daniele',
        'Osea', 'Gioele', 'Amos', 'Abdia', 'Giona', 'Michea', 'Naum',
        'Abacuc', 'Sofonia', 'Aggeo', 'Zaccaria', 'Malachia',
        'Matteo', 'Marco', 'Luca', 'Giovanni', 'Atti',
        'Romani', '1 Corinti', '2 Corinti',
        'Galati', 'Efesini', 'Filippesi', 'Colossesi',
        '1 Tessalonicesi', '2 Tessalonicesi', '1 Timoteo', '2 Timoteo',
        'Tito', 'Filemone', 'Ebrei', 'Giacomo',
        '1 Pietro', '2 Pietro', '1 Giovanni', '2 Giovanni', '3 Giovanni',
        'Giuda', 'Rivelazione'
    ],
    // Base link to the Bible in the Watchtower Online Library in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/1/1#study=discover")
    baseURL: 'https://wol.jw.org/it/wol/b/r6/lp-i/nwtsty/I/2019',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/it/wol/d/r6/lp-i/1101990130#h=253',
        text: 'Basati su',
        book: '“Tutta la Scrittura è ispirata da Dio e utile”',
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


    // Help
    //
    // Help
    helpPage: [
        'About',
        'NWT Reading helps you to keep track of your reading schedule of the \
            New World Translation of the Holy Scriptures of Jehovah\'s Witnesses.',

        'How it Works',
        'Read right away from the beginning and check each section that you have read.',
        'If you want to start at the current position of your Bible reading, select \
            "Continue at" on the Settings page.',
        'After finishing reading the Bible select "Start Over" on the Settings page.',
    ],

    // Stored Data
    storedDataPage: [
        'This is a dump of all the data that is stored in the app. \
            It can be useful for troubleshooting and privacy checking.'
    ],

    // Legal
    //
    // Privacy Policy
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
    ],
    // ^^^^^^^^^^^^  Translating above section is OPTIONAL  ------------
};