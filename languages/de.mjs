// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 3.2.2. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Deutsch',

    // Pages
    pages: {
        schedule: 'Plan',
        settings: 'Einstellungen',
        help: 'Hilfe (englisch)',
        storedData: 'Gespeicherte Daten (englisch)',
        privacyPolicy: 'Datenschutzerklärung (englisch)'
    },

    // Schedule page
    //
    plans_header: 'Wähle einen Plan',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Der Reihe nach',
        // In the order the Bible books were written
        written: 'Wie aufgezeichnet',
        // In the order the events happened
        chronological: 'Chronologisch'
    },
    durations_header: 'Dauer',
    durations: {
        '6m': 'in 6 Monaten',
        '1y': 'in 1 Jahr',
        '2y': 'in 2 Jahren',
        '4y': 'in 4 Jahren'
    },    
    setRead: {
        label: 'Gelesen setzen',
        question: 'Alles davor wird auf gelesen und alles danach auf ungelesen gesetzt.',
    },    

    // Settings page 
    //
    english: 'englisch',
    language: {
        label: 'Sprache',
        placeholder: 'Sprache',
        title: 'Wähle eine Sprache',
        contribute: 'Übersetzung beisteuern'
    },
    startOver: {
        label: 'Neu beginnen',
        title: 'Neu beginnen',
        description: 'Setzt den Lesestatus zurück.',
        question: 'Möchtest du den Lesestatus zurücksetzen?'
    },
    resetEndDate: {
        label: 'Enddatum zurücksetzen',
        description: 'Passe das Enddatum dem aktuellen Lesestatus an.',
        question: 'Möchtest du das Enddatum auf dem aktuellan Lesestatus anpassen?',
    },
    withEndDate: {
        label: 'Mit Enddatum',
        description: 'Verfolge das tägliche Bibellesen mit Enddatum.',
    },
    showEvents: {
        label: 'Zeige Ereignisse (experimentell)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/de/wol/d/r10/lp-x/1101990130#h=254',
        text: 'Ereignisse basierend auf',
        title: '„Die ganze Schrift ist von Gott inspiriert und nützlich“',
        chapter: 'Studie 3 — Ereignisse in den Strom der Zeit einordnen',
        caption: 'Tabelle hervorragender Geschichtsdaten',
    },
    showLocations: {
        label: 'Zeige Orte (experimentell)',
        URL: 'https://wol.jw.org/de/wol/d/r10/lp-x/1102003130',
        text: 'Zeige Verweise auf Orte in der Broschüre',
        title: '„Das gute Land sehen“',
        legend: 'Zur Legende siehe den',
        caption: 'Kartenindex',
    },
    legal: 'Rechtliches',
    version: 'Version',
    
    help: 'Hilfe',
    // Bible
    //
    // Ordered list of the Bible books
    books: [
        '1. Mose', '2. Mose', '3. Mose', '4. Mose', '5. Mose',
        'Josua', 'Richter', 'Ruth', '1. Samuel', '2. Samuel',
        '1. Könige', '2. Könige', '1. Chronika', '2. Chronika',
        'Esra', 'Nehemia', 'Esther', 'Hiob',
        'Psalmen', 'Sprüche', 'Prediger', 'Hohes Lied',
        'Jesaja', 'Jeremia', 'Klagelieder', 'Hesekiel', 'Daniel',
        'Hosea', 'Joel', 'Amos', 'Obadja', 'Jona', 'Micha', 'Nahum',
        'Habakuk', 'Zephanja', 'Haggai', 'Sacharja', 'Maleachi',
        'Matthäus', 'Markus', 'Lukas', 'Johannes', 'Apostelgeschichte',
        'Römer', '1. Korinther', '2. Korinther',
        'Galater', 'Epheser', 'Philipper', 'Kolosser',
        '1. Thessalonicher', '2. Thessalonicher', '1. Timotheus', '2. Timotheus',
        'Titus', 'Philemon', 'Hebräer', 'Jakobus',
        '1. Petrus', '2. Petrus', '1. Johannes', '2. Johannes', '3. Johannes',
        'Judas', 'Offenbarung'
    ],
    // Singular form of Psalms used in references like "Psalm 23" 
    psalm: 'Psalm',
    // Base link to the Bible at jw.org in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/genesis/1/")
    baseURL: 'https://www.jw.org/de/bibliothek/bibel/studienbibel/buecher',
    

    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'n.',
        'b.': 'v.',
        'c.': 'um',
        'C.E.': 'u. Z.',
        'B.C.E.': 'v. u. Z.'
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