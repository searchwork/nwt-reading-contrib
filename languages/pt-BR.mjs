// Language resources
//
// (c) Redaio.org
// Licensed under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
//
// Template for app version 1.2.3. Any missing item will fall back to english
//
export default {
    // Name of the language
    me: 'Português (Brasil)',

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
        chronological: 'Cronológica (experimental)',
        // Christian Greek Scriptures only
        greekScriptures: 'Escrituras Gregas Cristãs'
    },
    speed_header: 'Velocidade',

    // Settings page 
    //
    english: 'Inglês',
    language: {
        label: 'Idioma',
        placeholder: 'Idioma',
        title: 'Escolha um idioma',
        contribute: 'Contribuir com Tradução'
    },
    startOver: {
        label: 'Começar novamente',
        title: 'Começar novamente',
        description: 'Apague todo o status de leitura e selecione hoje como data para início.',
        question: 'Tem certeza que quer apagar todo o status de leitura?'
    },
    continueAt: {
        label: 'Iniciar em',
        placeholder: '<selecione>',
        title: 'Selecione onde você quer iniciar a leitura',
        description: 'Todas as seções anteriores serão marcadas como lidas e as seguintes como não lidas.',
        question: 'Deseja definir todas as seções anteriores como lidas e as seguintes para não lidas?'
    },
    WOLreferences: {
        label: 'WOL símbolos de referência',
        description: 'Exibir símbolos de referência na BIBLIOTECA ON-LINE da Torre de Vigia.',
    },
    help: 'Ajuda',
    legal: 'Legal',
    version: 'Versão',

    // Bible
    //
    // Ordered list of the Bible books
    books: [
        'Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio',
        'Josué', 'Juízes', 'Rute', '1 Samuel', '2 Samuel',
        '1 Reis', '2 Reis', '1 Crônicas', '2 Crônicas',
        'Esdras', 'Neemias', 'Ester', 'Jó',
        'Salmos', 'Provérbios', 'Eclesiastes', 'Cântico de Salomão',
        'Isaías', 'Jeremias', 'Lamentações', 'Ezequiel', 'Daniel',
        'Oseias', 'Joel', 'Amós', 'Obadias', 'Jonas', 'Miqueias', 'Naum',
        'Habacuque', 'Sofonias', 'Ageu', 'Zacarias', 'Malaquias',
        'Mateus', 'Marcos', 'Lucas', 'João', 'Atos',
        'Romanos', '1 Coríntios', '2 Coríntios',
        'Galátas', 'Efésios', 'Filipenses', 'Colossenses',
        '1 Tessalonicenses', '2 Tessalonicenses', '1 Timóteo', '2 Timóteo',
        'Tito', 'Filêmon', 'Hebreus', 'Tiago',
        '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João',
        'Judas', 'Apocaplise'
    ],
    // Base link to the Bible in the Watchtower Online Library in this language
    // On the Bible tab open Genesis, chapter 1, and use the link without "/1/1#study=discover"
    baseURL: 'https://wol.jw.org/pt/wol/b/r5/lp-t/nwtsty/T/2019',


    // ----------  Translating below section is OPTIONAL  vvvvvvvvvv
    //
    // Below information can be found in the WOL at the provided link
    // after switching to your language
    chart: {
        URL: 'https://wol.jw.org/pt/wol/d/r5/lp-t/1101990130#h=254',
        text: 'Eventos baseados em',
        book: '“Toda Escritura é Inspirada por Deus e Proveitosa”',
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


    // Help
    //
    // Help
    helpPage: [
        'Sobre',
        'NWT Reading ajuda você a acompanhar o seu programa de leitura da \
            Tradução do Novo Mundo da Bíblia Sagrada das Testemunhas de Jeová.',

        'Como funciona',
        'Leia imediatamente desde o início e verifique cada seção que você leu.',
        'Se você quer começar na posição atual da sua leitura da Bíblia, selecione \
            "Iniciar em" na página Opções.',
        'Depois de terminar de ler a Bíblia, selecione "Começar novamente" na página Opções.',
    ],

    // Stored Data
    storedDataPage: [
        'Este é um dump de todos os dados armazenados no aplicativo. \
            Pode ser útil para solução de problemas e verificação de privacidade.'
    ],

    // Legal
    //
    // Privacy Policy
    privacyPolicyPage: [
        'O aplicativo móvel NWT Reading (o “PRODUTO”) não coleta \
        nenhuma informação pessoal. Todos os dados são armazenados localmente.',

        'Redaio.org, não permite que empresas de publicidade coletem dados de \
        nosso PRODUTO para segmentação de anúncios. \
        Não compartilhamos dados coletados por este PRODUTO com outras organizações \
        para qualquer finalidade.',

        'Esta Política de Privacidade foi atualizada pela última vez em 05/04/2019. \
        Nossa Política de Privacidade pode mudar de tempos em tempos. \
        Você está avisado para analisar esta Política de Privacidade periodicamente para qualquer alteração. \
        As alterações nesta Política de Privacidade terão efeito quando são publicadas nesta página.'
    ],
    // ^^^^^^^^^^^^  Translating above section is OPTIONAL  ------------
};