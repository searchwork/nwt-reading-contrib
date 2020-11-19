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
        chronological: 'Chronologique'
    },
    durations_header: 'durée',
    setRead: {
        label: 'Noter lu',
        question: 'Voulez-vous noter toutes les sections précédentes comme lues et les suivantes comme non lues ?'
    },
    
    // Settings page 
    //
    english: 'Anglais',
    display: 'Affichage',
    language: {
        label: 'Langue',
        placeholder: 'Langue',
        title: 'Choisir une langue',
        contribute: 'Participer à la traduction'
    },
    startOver: {
        label: 'Repartir à zéro',
        title: 'Repartir à zéro',
        description: 'Supprimer l\'avancement de la lecture.',
        question: 'Voulez-vous supprimer l\'avancement de la lecture?'
    },
    resetEndDate: {
        label: 'Réinitialiser la date de fin',
        description: 'Réinitialisez la date de fin pour être à l\'heure avec la lecture.',
        question: 'Réinitialiser la date de fin pour être à l\'heure avec la lecture?',
    },
    withEndDate: { 
        label: 'Avec date de fin',
        description: 'Suivez la lecture quotidienne avec une date de fin.',
    },
    showEvents: {
        label: 'Afficher les événements (expérimental)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/fr/wol/d/r30/lp-f/1101990130#h=252:0',
        text: 'Dates des événements',
        title: '« Toute Écriture est inspirée de Dieu et utile »',
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
    showLocations: {
        label: 'Show Locations (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Show location references to the brosure',
        title: '“See the Good Land”',
        legend: 'For a legend see the',
        caption: 'Index to Maps',
    },
    legal: 'Mentions légales',
    version: 'Version',
    help: 'Aide',


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
        'Voici toutes les données conservées dans l\'application. \
            Cela peut être utile pour dépanner ou pour vérifier la confidentialité.'
    ],

    // Privacy Policy page
    //
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
    ]
};