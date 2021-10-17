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
        schedule: 'Ütemterv',
        settings: 'Beállítások',
        help: 'Segítség',
        storedData: 'Eltárolt Információk',
        privacyPolicy: 'Adatvédelem'
    },

    // Schedule page
    //
    plans_header: 'Válassz egy olvasási tervet',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Egymás utáni',
        // In the order the Bible books were written
        written: 'Írási sorrendben',
        // In the order the events happened
        chronological: 'Az események sorrendjében'
    },
    durations_header: 'Időtartam',
    setRead: {
        label: 'Olvasás Beállítás',
        question: 'Minden előző részt olvasottra állítasz, és az ezt követőket olvasatlanra?'
    },

    // Settings page
    //
    english: 'Angol',
    display: 'Megjelenés',
    language: {
        label: 'Nyelv',
        placeholder: 'Nyelv',
        title: 'Válassz nyelvet',
        contribute: 'Közreműködés a Fordításban'
    },
    startOver: {
        label: 'Újrakezdés',
        title: 'Újrakezdés',
        description: 'Olvasási állapot törlése.',
        question: 'Valóban törölni szeretnéd az olvasási állapotot?'
    },
    resetEndDate: {
        label: 'Befejezési Dátum Visszaállítása',
        description: 'Az olvasásod befejezési dátumának visszaállítása',
        question: 'Biztosan visszaállítod a befejezési dátumot?',
    },
    withEndDate: {
        label: 'Befejezési Dátummal',
        description: 'A napi olvasás nyomonkövetése befejezési dátummal.',
    },
    showEvents: {
        label: 'Események mutatása (kísérleti)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/hu/wol/d/r17/lp-h/1101990130#h=252',
        text: 'Az események alapja a',
        title: '“Teljes Írás Istentől ihletett és hasznos”',
        chapter: 'III. tanulmány – Események meghatározása az idő sodrában',
        caption: 'Kiemelkedő történelmi dátumok táblázata',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'u.',
        'b.': 'e.',
        'c.': 'kb.',
        'C.E.': 'i.sz.',
        'B.C.E.': 'i.e.'
    },
    showLocations: {
        label: 'Mutasd a helyszíneket (kísérleti)',
        URL: 'https://wol.jw.org/hu/wol/d/r17/lp-h/1102003130',
        text: 'A helyszínek bemutatása a következő kiadványra épül',
        title: '“Hadd lássam azt a jó földet”',
        legend: 'Magyarázatért lásd a',
        caption: 'Névmutatót',
    },
    legal: 'Jogok',
    version: 'Verzió',
    help: 'Segítség',


    // Help page
    //
    helpPage: [
        'Rólunk',
        'Az NWT Reading segít, hogy követni tudd az olvasásod ütemtervét a \
            Jehova Tanúi által kiadott, Szentírás – Új világ fordításából.',

        'Hogyan működik',
        'Válassz egy olvasási ütemtervet és időtartamot az oldal tetején.',
        'Pipáld ki azt a részt, amit elolvastál.',
        'Miután végeztél a Biblia elolvasásával, válaszd az "Újrakezdés" funkciót a Beálllítások oldalon.',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'Ez az alkalmazásban tárolt összes adat kiírása.. \
            Hasznos lehet a hibaelhárításhoz és az adatvédelem ellenőrzéséhez.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'Az NWT Reading mobil alkalmazás (“TERMÉK”) nem gyűjt  \
        semmilyen személyes adatot. Minden adat helyileg van tárolva.',

        'Searchwork.org, nem engedélyezi, hogy hirdető cégek adatokat gyűjtsenek a \
        TERMÉK-en keresztül hírdetések célzásához. \
        Nem osztunk meg semmilyen, a TERMÉK által összegyűjtött adatot más vállalatokkal \
        semmiféle célra.',

        'Ez az adatvédelmi nyilatkozat utóljára 2019. május 4-én frissült. \
        Az Adatvédelmi Nyilatkozatunk módosulhat időről-időre. \
        Javasoljuk, hogy időről-időre nézd át újra ezt az Adatvédelmi Nyilatkozatot, a változások miatt. \
        Az Adatvédelmi Nyilatkozat változásai akkor lesznek érvényesek, ha megjelennek ezen az oldalon.'
    ]
};