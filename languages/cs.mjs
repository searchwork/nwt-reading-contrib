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
        schedule: 'Časový plán',
        settings: 'Nastavení',
        help: 'Pomoc',
        storedData: 'Uložená Data',
        privacyPolicy: 'Zásady ochrany osobních údajů'
    },

    // Schedule page
    //
    plans_header: 'Vyber plán čtení',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sekvenční',
        // In the order the Bible books were written
        written: 'Jak je napsáno',
        // In the order the events happened
        chronological: 'Chronologické'
    },
    durations_header: 'Duration',
    setRead: {
        label: 'Nastavit čtení',
        question: 'Chcete nastavit všechny předchozí oddíly na čtení a ty následující na nepřečtené?'
    },

    // Settings page
    //
    english: 'Angličtina',
    display: 'Zobrazit',
    language: {
        label: 'Jazyk',
        placeholder: 'Jazyk',
        title: 'Vyber jazyk',
        contribute: 'Přispět překladem'
    },
    startOver: {
        label: 'Začít znovu',
        title: 'Začít znovu',
        description: 'Vymazat stav čtení.',
        question: 'Chcete vymazat stav čtení?'
    },
    resetEndDate: {
        label: 'Smazat datum ukončení',
        description: 'Smazat datum ukončení pro dodržení plánu čtení.',
        question: 'Smazat datum ukončení pro dodržení plánu čtení?',
    },
    withEndDate: {
        label: 'S datem ukončení',
        description: 'Sledujte denní čtení s datem ukončení.',
    },
    showEvents: {
        label: 'Zobrazit události (experimentální)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/cs/wol/d/r29/lp-b/1101990130',
        text: 'Události jsou založeny na',
        title: '“Celé Písmo je inspirováno Bohem a prospěšné”',
        chapter: 'Studie číslo 3 - Měření událostí v proudu času',
        caption: 'Tabulka význačných dějinných dat',
    },
    // Symbols: a. for “po”; b. for “před”; c. for “asi”, or “kolem”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'po',
        'b.': 'př.',
        'c.': 'asi',
        'C.E.': 'n. l.',
        'B.C.E.': 'př. n. l.'
    },
    showLocations: {
        label: 'Zobrazit umístění (experimentální)',
        URL: 'https://wol.jw.org/cs/wol/d/r29/lp-b/1102003130#h=1:0',
        text: 'Zobrazit referenční umístění v brožuře',
        title: '“Pohleďte na Dobrou zemi”',
        legend: 'Pro legendu viz',
        caption: 'Index k mapám',
    },
    legal: 'Právní',
    version: 'Verze',
    help: 'Pomoc',


    // Help page
    //
    helpPage: [
        'O',
        'Čtení NWT vám pomůže sledovat váš plán čtení \
            Překlad nového světa Svatých písem svědků Jehovových.',

        'Jak to funguje',
        'Zvolte plán čtení a dobu trvání v horní části stránky.',
        'Zkontrolujte sekci, kterou jste si přečetli.',
        'Po dočtení Bible vyberte na stránce Nastavení možnost„ Začít znovu	.',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'oto je výpis všech dat, která jsou uložena v aplikaci. \
            Může to být užitečné při řešení potíží a kontrole soukromí.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'Mobilní aplikace NWT Reading („ VÝROBEK “) neshromažďuje \
        jakékoli osobní údaje. Všechna data jsou uložena lokálně.',

        'Searchwork.org, neumožňuje reklamním společnostem shromažďovat data prostřednictvím \
        náš PRODUKT pro cílení reklam. \
        Nesdílíme data shromážděná tímto PRODUKTEM s jinými organizacemi \
        za jakýmkoli účelem.',

        'Tyto zásady ochrany osobních údajů byly naposledy aktualizovány 5. 4. 2019. \
        Naše zásady ochrany osobních údajů se mohou čas od času změnit. \
        Doporučujeme tyto zásady ochrany osobních údajů pravidelně kontrolovat, zda neobsahují jakékoli změny. \
        Změny těchto zásad ochrany osobních údajů jsou účinné, pokud jsou zveřejněny na této stránce.'
    ]
};