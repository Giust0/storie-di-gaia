import { Translation } from "./definition"

export default {
  propertyDefaults: {
    title: "Senza titolo",
    description: "Nessuna descrizione",
  },
  components: {
    callout: {
      note: "Nota",
      abstract: "Astratto",
      info: "Info",
      todo: "Da fare",
      tip: "Consiglio",
      success: "Completato",
      question: "Domanda",
      warning: "Attenzione",
      failure: "Errore",
      danger: "Pericolo",
      bug: "Bug",
      example: "Esempio",
      quote: "Citazione",
    },
    backlinks: {
      title: "Riferimenti",
      noBacklinksFound: "Nessun riferimento",
    },
    themeToggle: {
      lightMode: "Tema chiaro",
      darkMode: "Tema scuro",
    },
    explorer: {
      title: "Esplora",
    },
    footer: {
      createdWith: "Creato con",
    },
    graph: {
      title: "Grafico Collegamenti",
    },
    recentNotes: {
      title: "Note recenti",
      seeRemainingMore: ({ remaining }) => `Vedi ${remaining} altro →`,
    },
    transcludes: {
      transcludeOf: ({ targetSlug }) => `Transclusione di ${targetSlug}`,
      linkToOriginal: "Link all'originale",
    },
    search: {
      title: "Cerca",
      searchBarPlaceholder: "Cerca qualcosa",
    },
    tableOfContents: {
      title: "Tabella dei contenuti",
    },
    contentMeta: {
      readingTime: ({ minutes }) => `${minutes} minuti`,
    },
  },
  pages: {
    rss: {
      recentNotes: "Note recenti",
      lastFewNotes: ({ count }) => `Ultime ${count} note`,
    },
    error: {
      title: "Non trovato",
      notFound: "Questa pagina è privata o non esiste.",
      home: "Ritorna alla home page",
    },
    folderContent: {
      folder: "Cartella",
      itemsUnderFolder: ({ count }) =>
        count === 1 ? "1 oggetto in questa cartella." : `${count} oggetti in questa cartella.`,
    },
    tagContent: {
      tag: "Etichetta",
      tagIndex: "Indice etichette",
      itemsUnderTag: ({ count }) =>
        count === 1 ? "1 oggetto con questa etichetta." : `${count} oggetti con questa etichetta.`,
      showingFirst: ({ count }) => `Prime ${count} etichette.`,
      totalTags: ({ count }) => `Trovate ${count} etichette totali.`,
    },
  },
} as const satisfies Translation
