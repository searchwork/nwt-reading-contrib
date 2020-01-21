// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 2.0.0. Any missing item will fall back to english
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
        chronological: 'Chronologisch (experimentell)',
        // Christian Greek Scriptures only
        greekScriptures: 'Christliche griechische Schriften'
    },
    speed_header: 'Geschwindigkeit',

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
        description: 'Setzt den Lesestatus zurück und das Anfangsdatum auf heute.',
        question: 'Möchtest du den Lesestatus zurücksetzen und das Anfangsdatum auf heute setzen?'
    },
    continueAt: {
        label: 'Fortsetzen bei',
        placeholder: '<auswählen>',
        title: 'Wähle wo du mit dem Lesen fortsetzen möchtest.',
        description: 'Alles davor wird auf gelesen und alles danach auf ungelesen gesetzt.',
        question: 'Möchtest du alles davor auf gelesen und alles danach auf ungelesen setzen?'
    },
    WOLreferences: {
        label: 'WOL Verweissymbole',
        description: 'Anzeigen der Verweissymbole in der Wachtturm ONLINE-BIBLIOTHEK.',
    },
    help: 'Hilfe',
    legal: 'Rechtliches',
    version: 'Version',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        '1. Mose', '2. Mose', '3. Mose', '4. Mose', '5. Mose',
        'Josua', 'Richter', 'Ruth', '1. Samuel', '2. Samuel',
        '1. Könige', '2. Könige', '1. Chronika', '2. Chronika',
        'Esra', 'Nehemia', 'Esther', 'Hiob',
        'Psalm', 'Sprüche', 'Prediger', 'Hohes Lied',
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
    // Base link to the Bible at jw.org in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/genesis/1/")
    baseURL: 'https://www.jw.org/de/bibliothek/bibel/nwt/bibelbuecher',
    

    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/de/wol/d/r10/lp-x/1101990130#h=254',
        text: 'Ereignisse basierend auf',
        book: '„Die ganze Schrift ist von Gott inspiriert und nützlich“',
        chapter: 'Studie 3 — Ereignisse in den Strom der Zeit einordnen',
        caption: 'Tabelle hervorragender Geschichtsdaten',
    },
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