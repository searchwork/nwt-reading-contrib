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
        schedule: 'Plan',
        settings: 'Einstellungen',
        help: 'Hilfe',
        storedData: 'Gespeicherte Daten',
        privacyPolicy: 'Datenschutzerklärung'
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
    setRead: {
        label: 'Gelesen setzen',
        question: 'Alles davor wird auf gelesen und alles danach auf ungelesen gesetzt.',
    },

    // Settings page
    //
    english: 'englisch',
    display: 'Anzeige',
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
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'n.',
        'b.': 'v.',
        'c.': 'um',
        'C.E.': 'u. Z.',
        'B.C.E.': 'v. u. Z.'
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


    // Help page
    //
    helpPage: [
        'Über',
        'NWT Reading hilft dir, deinen Leseplan für die Neue Welt Übersetzung der \
            Heiligen Schrift von Jehovas Zeugen im Auge zu behalten.',

        'So funktionier es',
        'Wähle in der Menüleiste oben die Art des Leseplans und die Dauer aus.',
        'Markiere die gelesenen Abschnitte als gelesen.',
        'Nachdem du die Bibel gelesen hast, wähle "Neu beginnen" in den Einstellungen.',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'Eine Auflistung aller Daten, die in der App gespeichert sind. \
            Dies kann nützlich sein, um Probleme zu beheben und die Privatsphäre zu überprüfen.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'Die NWT Reading App (das “PRODUKT”) sammelt keine persönlichen \
        Informationen. Alle Daten werden lokal gespeichert.',

    'Searchwork.org erlaubt es Werbeunternehmen nicht, Daten durch unser PRODUKT für Werbezwecke zu sammeln. Wir teilen Daten, die durch dieses PRODUKT gesammelt werden, nicht mit anderen Organisationen zu irgendeinem Zweck.',

        'Diese Datenschutzerklärung wurde zuletzt am 05.04.2019 aktualisiert. Unsere Datenschutzerklärung kann sich von Zeit zu Zeit ändern. Es wird empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen dieser Datenschutzerklärung treten in Kraft, wenn sie auf dieser Seite veröffentlicht werden.'
    ]
};