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
        schedule: 'Programa',
        settings: 'Ajustes',
        help: 'Ayuda (ingles)',
        storedData: 'Datos almacenados (ingles)',
        privacyPolicy: 'Politica de privacidad (ingles)'
    },

    // Schedule page
    //
    plans_header: 'Seleccione un plan de lectura',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Secuencial',
        // In the order the Bible books were written
        written: 'Según se completaron',
        // In the order the events happened
        chronological: 'Cronológico'
    },
    durations_header: 'duración',
    setRead: {
        label: 'Establecer leído',
        question: 'Desea establecer todas las secciones anteriores marcadas como leídas y las siguientes como no leídas?'
    },

    // Settings page
    //
    english: 'Ingles',
    display: 'Visualización',
    language: {
        label: 'Idioma',
        placeholder: 'Idioma',
        title: 'Seleccione un idioma',
        contribute: 'Contribuir traducción'
    },
    startOver: {
        label: 'Comenzar de nuevo',
        title: 'Comenzar de nuevo',
        description: 'Borra el estado de lectura.',
        question: 'Desea borrar el estado de lectura?'
    },
    resetEndDate: {
        label: 'Restablecer la fecha de finalización',
        description: 'Restablezca la fecha de finalización para estar a tiempo con la lectura.',
        question: 'Restablecer la fecha de finalización para estar a tiempo con la lectura?',
    },
    withEndDate: {
        label: 'Con fecha de finalización',
        description: 'Realice un seguimiento de la lectura diaria con una fecha de finalización.',
    },
    showEvents: {
        label: 'Mostrar eventos (experimental)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/es/wol/d/r4/lp-s/1101990130#h=251',
        text: 'Basado en',
        title: '“Toda Escritura es inspirada de Dios y provechosa”',
        chapter: 'Estudio número 3: Sucesos fechados en la corriente del tiempo',
        caption: 'Cuadro de fechas históricas sobresalientes',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'd.',
        'c.': 'c.',
        'C.E.': 'C.E.',
        'B.C.E.': 'a.C.E.'
    },
    showLocations: {
        label: 'Mostrar ubicaciones (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Mostrar referencias de ubicación al folleto',
        title: '“la buena tierra”',
        legend: 'Para una leyenda ver el',
        caption: 'Índice para los mapas',
    },
    legal: 'Legal',
    help: 'Ayuda',
    version: 'Versión',


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