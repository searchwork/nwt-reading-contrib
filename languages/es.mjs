// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 1.2.3. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Español',

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
        chronological: 'Cronológico (experimental)',
        // Christian Greek Scriptures only
        greekScriptures: 'Escrituras Griegas Cristianas'
    },
    speed_header: 'Velocidad',

    // Settings page 
    //
    english: 'Ingles',
    language: {
        label: 'Idioma',
        placeholder: 'Idioma',
        title: 'Seleccione un idioma',
        contribute: 'Contribuir traducción'
    },
    startOver: {
        label: 'Comenzar de nuevo',
        title: 'Comenzar de nuevo',
        description: 'Borra el estado de lectura y establece hoy como fecha de inicio.',
        question: 'Desea borrar el estado de lectura y establecer hoy como fecha de inicio?'
    },
    continueAt: {
        label: 'Continuar en',
        placeholder: '<seleccionar>',
        title: 'Selecciona donde continuar con la lectura',
        description: 'Todas las secciones anteriores serán marcadas como leídas y las siguientes como no leídas.',
        question: 'Desea establecer todas las secciones anteriores marcadas como leídas y las siguientes como no leídas?'
    },
    help: 'Ayuda',
    legal: 'Legal',
    version: 'Versión',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Génesis', 'Éxodo', 'Levítico', 'Números', 'Deuteronomio',
        'Josué', 'Jueces', 'Rut', '1 Samuel', '2 Samuel',
        '1 Reyes', '2 Reyes', '1 Crónicas', '2 Crónicas',
        'Esdras', 'Nehemías', 'Ester', 'Job',
        'Salmos', 'Proverbios', 'Eclesiastés', 'El Cantar de los Cantares',
        'Isaías', 'Jeremías', 'Lamentaciones', 'Ezequiel', 'Daniel',
        'Oseas', 'Joel', 'Amós', 'Abdías', 'Jonás', 'Miqueas', 'Nahúm',
        'Habacuc', 'Sofonías', 'Ageo', 'Zacarías', 'Malaquías',
        'Mateo', 'Marcos', 'Lucas', 'Juan', 'Hechos',
        'Romanos', '1 Corintios', '2 Corintios',
        'Gálatas', 'Efesios', 'Filipenses', 'Colosenses',
        '1 Tesalonicenses', '2 Tesalonicenses', '1 Timoteo', '2 Timoteo',
        'Tito', 'Filemón', 'Hebreos', 'Santiago',
        '1 Pedro', '2 Pedro', '1 Juan', '2 Juan', '3 Juan',
        'Judas', 'Apocalipsis'
    ],
    // Base link to the Bible in the Watchtower Online Library in this language
    // On the Bible tab open Genesis, chapter 1, and use the link without "/1/1#study=discover"
    baseURL: 'https://wol.jw.org/es/wol/b/r4/lp-s/nwt/S/2019',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/es/wol/d/r4/lp-s/1101990130#h=251',
        text: 'Basado en',
        book: '“Toda Escritura es inspirada de Dios y provechosa”',
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