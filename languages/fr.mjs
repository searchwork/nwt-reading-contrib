// Language resources
//
// (c) Searchwork.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 2.0.0. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'French',

    // Pages
    pages: {
        schedule: 'Programme',
        settings: 'Paramètres',
        help: 'Aide',
        storedData: 'Données conservées',
        privacyPolicy: 'Règles de confidentialité'
    },

    // Schedule page
    //
    plans_header: 'Choisir un planning de lecture',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Dans l\'ordre',
        // In the order the Bible books were written
        written: 'Ordre d\'écriture',
        // In the order the events happened
        chronological: 'Chronologique (expérimental)',
        // Christian Greek Scriptures only
        //greekScriptures: 'Écritures grecques chrétiennes'
    },
    speed_header: 'Vitesse',

    // Settings page 
    //
    english: 'Anglais',
    language: {
        label: 'Langue',
        placeholder: 'Langue',
        title: 'Choisir une langue',
        contribute: 'Participer à la traduction'
    },
    startOver: {
        label: 'Repartir à zéro',
        title: 'Repartir à zéro',
        description: 'Supprimer l\'avancement de la lecture et recommencer à aujourd\'hui.',
        question: 'Voulez-vous supprimer l\'avancement de la lecture et recommencer à aujourd\'hui ?'
    },
    continueAt: {
        label: 'Continuer à partir de',
        placeholder: '<Choisir>',
        title: 'Choisir à partir d\'où continuer la lecture',
        description: 'Toutes les sections précédentes seront notées comme lues et les suivantes comme non lues.',
        question: 'Voulez-vous noter toutes les sections précédentes comme lues et les suivantes comme non lues ?'
    },
    WOLreferences: {
        label: 'Références dans WOL',
        description: 'Afficher les références dans la BIBLIOTHÈQUE EN LIGNE Watchtower.',
    },
    help: 'Aide',
    legal: 'Mentions légales',
    version: 'Version',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Genèse', 'Exode', 'Lévitique', 'Nombres', 'Deutéronome',
        'Josué', 'Juges', 'Ruth', '1 Samuel', '2 Samuel',
        '1 Rois', '2 Rois', '1 Chroniques', '2 Chroniques',
        'Esdras', 'Néhémie', 'Esther', 'Job',
        'Psaumes', 'Proverbes', 'Ecclésiaste', 'Chant de Salomon',
        'Isaie', 'Jérémie', 'Lamentations', 'Ézéchiel', 'Daniel',
        'Osée', 'Joël', 'Amos', 'Abdias', 'Jonas', 'Michée', 'Nahum',
        'Habacuc', 'Sophonie', 'Aggée', 'Zacharie', 'Malachie',
        'Matthieu', 'Marc', 'Luc', 'Jean', 'Actes',
        'Romains', '1 Corinthiens', '2 Corinthiens',
        'Galates', 'Éphésiens', 'Philippiens', 'Colossiens',
        '1 Thessaloniciens', '2 Thessaloniciens', '1 Timothée', '2 Timothée',
        'Tites', 'Philémon', 'Hébreux', 'Jacques',
        '1 Pierre', '2 Pierre', '1 Jean', '2 Jean', '3 Jean',
        'Jude', 'Révélation'
    ],
    // Base link to the Bible at jw.org in this language
    // (On the Bible tab open Genesis, chapter 1, and use the link without "/genesis/1/")
    baseURL: 'https://www.jw.org/fr/bibliothèque/bible/nwt/livres',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/fr/wol/d/r30/lp-f/1101990130#h=252:0',
        text: 'Dates des événements',
        book: '« Toute Écriture est inspirée de Dieu et utile »',
        chapter: 'Étude numéro 3 : Comment situer les événements dans le cours du temps ',
        caption: 'Tableau des pricipales dates historiques',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'apr.',
        'b.': 'av.',
        'c.': 'env.',
        'C.E.': 'n. è.',
        'B.C.E.': 'av. n. è.'
    },


    // Help
    //
    // Help
    helpPage: [
        'À propos',
        'NWT Reading vous aide à suivre où vous en êtres dans votre programme de lecture de \
            La Bible. Traduction du monde nouveau. des Témoins de Jéhovah.',

        'Mode d\'emploi',
        'Lisez simplement depuis le commencement et cochez chaque section que vous avez lue.',
        'Si vous voulez commencer là où vous en être actuellement, choisissez \
            "Continue à partir de" dans les Paramètres.',
        'After finishing reading the Bible select "Start Over" on the Settings page.',
    ],

    // Stored Data
    storedDataPage: [
        'Voici toutes les données conservées dans l\'application. \
            Cela peut être utile pour dépanner ou pour vérifier la confidentialité.'
    ],

    // Legal
    //
    // Privacy Policy
    privacyPolicyPage: [
        'L\'application mobile NWT Reading ("Le PRODUIT") ne collecte \
		aucune information personnelle. Toutes les données sont enregistrées localement.',

        'Searchwork.org n\'autorise pas la collecte de données à des fins de ciblage publicitaire \
		à l\'aide de notre PRODUIT. \
		Nous ne partageaons pas les données collectées par ce PRODUIT avec d\'autres organisations \
		sous aucun prétexte.',

        'La dernière mise à jour de ces Règles de confidentialité date du 04/05/2019. \
        Nos Règles de confidentialité peuvent être amenées à changer de temps en temps. \
		Vous êtes encouragés à consulter ces Règles de confidentialités régulièrement en cas de changement. \
		Les changements de ces Règles de confidentialité prennent effet à compter de \
		leur date de publication sur cette page.'
    ],
    // ^^^^^^^^^^^^  Translating above section is OPTIONAL  ------------
};