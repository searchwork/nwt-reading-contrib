// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 1.0.2. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'English',

    // Pages
    pages: {
        schedule: 'Schedule',
        settings: 'Settings',
        help: 'Help',
        storedData: 'Stored Data',
        privacyPolicy: 'Privacy Policy'
    },

    // Schedule page
    //
    plans_header: 'Select a reading plan',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sequential',
        // In the order the Bible books were written
        written: 'As written',
        // In the order the events happened
        chronological: 'Chronological (experimental)',
        // Christian Greek Scriptures only
        greekScriptures: 'Christian Greek Scriptures'
    },
    speed_header: 'Speed',

    // Settings page 
    //
    english: 'English',
    language: {
        label: 'Language',
        placeholder: 'Language',
        title: 'Choose a language',
        contribute: 'Contribute Translation'
    },
    startOver: {
        label: 'Start Over',
        title: 'Start over',
        description: 'Clear the reading status and set today as start date.',
        question: 'Do you want to clear the reading status and set today as start date?'
    },
    continueAt: {
        label: 'Continue at',
        placeholder: '<select>',
        title: 'Select where to continue with the reading',
        description: 'All previous sections will be marked as read and those following as unread.',
        question: 'Do you want to set all previous sections to read and those following to unread?'
    },
    help: 'Help',
    legal: 'Legal',
    version: 'Version',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
        'Joshua', 'Judges', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Kings', '2 Kings', '1 Chronicles', '2 Chronicles',
        'Ezra', 'Nehemiah', 'Esther', 'Job',
        'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
        'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
        'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah', 'Nahum',
        'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
        'Matthew', 'Mark', 'Luke', 'John', 'Acts',
        'Romans', '1 Corinthians', '2 Corinthians',
        'Galatians', 'Ephesians', 'Philippians', 'Colossians',
        '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
        'Titus', 'Philemon', 'Hebrews', 'James',
        '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
        'Jude', 'Revelation'
    ],
    // Base link to the Bible in the Watchtower Online Library in this language
    baseURL: 'https://wol.jw.org/en/wol/b/r1/lp-e/nwtsty/E/2019',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'b.',
        'c.': 'c.',
        'C.E.': 'C.E.',
        'B.C.E.': 'B.C.E.'
    },
    chart: {
        text: 'Events are based on',
        book: '“All Scripture Is Inspired of God and Beneficial”',
        chapter: 'Study Number 3—Measuring Events in the Stream of Time',
        caption: 'Chart of outstanding historical dates',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1101990130#h=252',
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

        'SearchWork.org, does not allow advertising companies to collect data through \
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