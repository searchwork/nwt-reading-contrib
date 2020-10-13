// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 3.2.2. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Română',

    // Pages
    pages: {
        schedule: 'Programul',
        settings: 'Setările',
        help: 'Ajutor (engleză)',
        storedData: 'Datele stocate (engleză)',
        privacyPolicy: 'Politica de confidențialitate (engleză)'
    },

    // Schedule page
    //
    plans_header: 'Alege un program',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'În ordine',
        // In the order the Bible books were written
        written: 'Cum au fost scrise',
        // In the order the events happened
        chronological: 'cronologic'
    },
    durations_header: 'durată',
    durations: {
        '6m': 'în 6 luni',
        '1y': 'în 1 an',
        '2y': 'în 2 ani',
        '4y': 'în 4 ani'
    },
    setRead: {
        label: 'Setează citit',
        question: 'Vrei să setezi totul dinainte ca citit și totul ce urmează ca necitit?'
    },

    // Settings page 
    //
    english: 'engleză',
    language: {
        label: 'Limba',
        placeholder: 'Limba',
        title: 'Alege limba',
        contribute: 'Contribuie la traducere'
    },
    startOver: {
        label: 'Reîncepe',
        title: 'Reîncepe',
        description: 'Șterge marcajele de citit.',
        question: 'Vrei să ștergi marcajele de citit?'
    },
    resetEndDate: {
        label: 'Resetează termenul',
        description: 'Setează termenul pentru a fi la zi cu citire.',
        question: 'Vrei să setezi termenul pentru a fi la zi cu citire?',
    },
    withEndDate: {
        label: 'Cu termen',
        description: 'Urmărește citirea zilnică cu un termen.',
    },
    showEvents: {
        label: 'Afișează evenimente (experimental)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/ro/wol/d/r34/lp-m/1101990130#h=255',
        text: 'Evenimente bazate pe',
        title: '„Toată Scriptura este inspirată de Dumnezeu şi de folos“',
        chapter: 'Studiul numărul 3 — Plasarea evenimentelor în timp',
        caption: 'Date istorice remarcabile',
    },
    showLocations: {
        label: 'Afișează locații (experimental)',
        URL: 'https://wol.jw.org/ro/wol/d/r34/lp-m/1102003130',
        text: 'Afișează referințe la locații în broșura',
        title: '„Să vedem ţara aceea bună!“',
        legend: 'Pentru o legendă vezi',
        caption: 'Indexul hărţilor',
    },
    help: 'Ajutor',
    legal: 'Juridice',
    version: 'Versiune',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Geneza', 'Exodul', 'Leviticul', 'Numerele', 'Deuteronomul',
        'Iosua', 'Judecătorii', 'Rut', '1 Samuel', '2 Samuel',
        '1 Regi', '2 Regi', '1 Cronici', '2 Cronici',
        'Ezra', 'Neemia', 'Estera', 'Iov',
        'Psalmii', 'Proverbele', 'Eclesiastul', 'Cântarea cântărilor',
        'Isaia', 'Ieremia', 'Plângerile', 'Ezechiel', 'Daniel',
        'Osea', 'Ioel', 'Amos', 'Obadia', 'Iona', 'Mica', 'Naum',
        'Habacuc', 'Țefania', 'Hagai', 'Zaharia', 'Maleahi',
        'Matei', 'Marcu', 'Luca', 'Ioan', 'Faptele',
        'Romani', '1 Corinteni', '2 Corinteni',
        'Galateni', 'Efeseni', 'Filipeni', 'Coloseni',
        '1 Tesaloniceni', '2 Tesaloniceni', '1 Timotei', '2 Timotei',
        'Tit', 'Filimon', 'Evrei', 'Iacov',
        '1 Petru', '2 Petru', '1 Ioan', '2 Ioan', '3 Ioan',
        'Iuda', 'Revelația'
    ],
    // Singular form of Psalms used in references like "Psalm 23" 
    psalm: 'Psalmul',
    // Base link to the Bible at jw.org in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/genesis/1/")
    baseURL: 'https://www.jw.org/ro/biblioteca/biblia/bi12/carti',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'd.',
        'b.': 'î.',
        'c.': 'a.',
        'C.E.': 'e.n.',
        'B.C.E.': 'î.e.n.'
    },


    // Help
    //
    // Help
    helpPage: [
        'About',
        'NWT Reading helps you to keep track of your reading schedule of the \
            New World Translation of the Holy Scriptures of Jehovah\'s Witnesses.',

        'How it Works',
        'Choose a reading plan and the duration at the top of the page.',
        'Check the section that you have read.',
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