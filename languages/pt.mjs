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
        settings: 'Opções',
        help: 'Ajuda',
        storedData: 'Dados Salvos',
        privacyPolicy: 'Política de Privacidade'
    },

    // Schedule page
    //
    plans_header: 'Selecione um plano de leitura',
    // Reading plans
    plans: {
        // In the order the chapters appear in the Bible
        sequential: 'Sequencial',
        // In the order the Bible books were written
        written: 'Data de conclusão',
        // In the order the events happened
        chronological: 'Cronológica'
    },
    durations_header: 'duração',
    setRead: {
        label: 'Definido lido',
        question: 'Deseja definir todas as seções anteriores como lidas e as seguintes para não lidas?'
    },

    // Settings page 
    //
    english: 'Inglês',
    display: 'Mostrar',
    language: {
        label: 'Idioma',
        placeholder: 'Idioma',
        title: 'Escolha um idioma',
        contribute: 'Contribuir com Tradução'
    },
    startOver: {
        label: 'Começar novamente',
        title: 'Começar novamente',
        description: 'Apague todo o status de leitura.',
        question: 'Tem certeza que quer apagar todo o status de leitura?'
    },
    resetEndDate: {
        label: 'Redefinir data de término',
        description: 'Redefina a data de término para estar dentro do prazo com a leitura.',
        question: 'Redefinir a data de término para que a leitura seja pontual',
    },
    withEndDate: { 
        label: 'Com Data Final',
        description: 'Acompanhe a leitura diária com uma data de término.',
    },
    showEvents: {
        label: 'Mostrar eventos (experimental)',
        // Below information can be found in the WOL at the provided link
        // after switching to your language
        URL: 'https://wol.jw.org/pt/wol/d/r5/lp-t/1101990130#h=254',
        text: 'Eventos baseados em',
        title: '“Toda Escritura é Inspirada por Deus e Proveitosa”',
        chapter: 'Estudo Número 3—Localização dos eventos na corrente do tempo',
        caption: 'Tabela de datas históricas notáveis',
    },
    // Symbols: a. for “after”; b. for “before”; c. for “circa”, or “about”.
    //          C.E. for Common Era; B.C.E. for Before Common Era
    symbols: {
        'a.': 'a.',
        'b.': 'd.',
        'c.': 'c.',
        'C.E.': 'EC',
        'B.C.E.': 'AEC'
    },
    showLocations: {
        label: 'Show Locations (experimental)',
        URL: 'https://wol.jw.org/en/wol/d/r1/lp-e/1102003130',
        text: 'Show location references to the brosure',
        title: '“See the Good Land”',
        legend: 'For a legend see the',
        caption: 'Index to Maps',
    },
    legal: 'Legal',
    version: 'Versão',
    help: 'Ajuda',



    // Help page
    //
    helpPage: [
        'Sobre',
        'NWT Reading ajuda você a acompanhar o seu programa de leitura da \
            Tradução do Novo Mundo da Bíblia Sagrada das Testemunhas de Jeová.',

        'Como funciona',
        'Choose a reading plan and the duration at the top of the page.',
        'Check the section that you have read.',
        'Depois de terminar de ler a Bíblia, selecione "Começar novamente" na página Opções.',
    ],

    // Stored Data page
    //
    storedDataPage: [
        'Este é um dump de todos os dados armazenados no aplicativo. \
            Pode ser útil para solução de problemas e verificação de privacidade.'
    ],

    // Privacy Policy page
    //
    privacyPolicyPage: [
        'O aplicativo móvel NWT Reading (o “PRODUTO”) não coleta \
        nenhuma informação pessoal. Todos os dados são armazenados localmente.',

        'Searchwork.org, não permite que empresas de publicidade coletem dados de \
        nosso PRODUTO para segmentação de anúncios. \
        Não compartilhamos dados coletados por este PRODUTO com outras organizações \
        para qualquer finalidade.',

        'Esta Política de Privacidade foi atualizada pela última vez em 05/04/2019. \
        Nossa Política de Privacidade pode mudar de tempos em tempos. \
        Você está avisado para analisar esta Política de Privacidade periodicamente para qualquer alteração. \
        As alterações nesta Política de Privacidade terão efeito quando são publicadas nesta página.'
    ]
};