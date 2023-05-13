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
        schedule: 'Ɖoɖo'
        settings: 'Ɖoɖowo',
        help: 'Kpekpeɖeŋu',
        storedData: 'Nyatakaka Siwo Wodzra Ðo',
        privacyPolicy: 'Ameŋunyatakakawo Ŋuti Ðoɖo'
    },

    // Schedule page
    //
    plans_header: 'Tia nuxexlẽ ƒe ɖoɖo',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Nusiwo kplɔ wo nɔewo ɖo',
        // In the order the Bible books were written
        written: 'Abe alesi woŋlɔe ene',
        // In the order the events happened
        chronological: 'Ɣeyiɣikɔntabubu ƒe ɖoɖo'
    },
    durations_header: 'Ɣeyiɣi didime',
    setRead: {
        label: 'Ðo Xlẽe ',
        question: 'Ðe nèdi be yeaɖo akpa siwo katã do ŋgɔ la be woaxlẽ eye esiwo kplɔe ɖo nanye esiwo womaxlẽ oa? '
    },

    // Settings page
    //
    english: 'English',
    display: 'Display',
    language: {
        label: 'Gbegbɔgblɔ',
        placeholder: 'Language',
        title: 'Choose a language',
        contribute: 'Contribute Translation'
    },
    startOver: {
        label: 'Start Over',
        title: 'Start over',
        description: 'Clear the reading status.',
        question: 'Do you want to clear the reading status?'
    },
    resetEndDate: {
        label: 'Reset End Date',
        description: 'Reset the end date to be on time with reading.',
        question: 'Reset the end date to be on time with reading?',
    },
    withEndDate: {
        label: 'With End Date',
        description: 'Track daily reading with an end date.',
    },
    showEvents: {
        label: 'Show Events (experimental)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1101990130#h=252',
        text: 'Events are based on',
        title: '“All Scripture Is Inspired of God and Beneficial”',
        chapter: 'Study Number 3—Measuring Events in the Stream of Time',
        caption: 'Chart of outstanding historical dates',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'b.',
        'c.': 'c.',
        'C.E.': 'C.E.',
        'B.C.E.': 'B.C.E.'
    },
    showLocations: {
        label: 'Show Locations (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Show location references to the brochure',
        title: '“See the Good Land”',
        legend: 'For a legend see the',
        caption: 'Index to Maps',
    },
    legal: 'Legal',
    version: 'Version',
    help: 'Help',


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
