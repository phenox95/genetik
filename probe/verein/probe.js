/* ERZEUGT mit tools/build.js. Nicht von Hand ändern. */
/* Genetik-Labor · Probemission Hundezuchtverein · Missionen P1 und P2 (Stand 04.10.2026, Probe V1, Texte: Entwurf, nicht freigegeben)
   QUELLE mit Klartext-Lösungen. NICHT auf GitHub. Daraus erzeugt: probe/verein/probe.js
     node tools/build.js quellen/probe.src.js probe/verein/probe.js
   ⟦FEHLT: …⟧ markiert Texte, die im Auftrag nicht stehen und noch geliefert werden müssen.
   VORLÄUFIG markiert Lösungsstrukturen, die ich aus dem Auftrag nicht eindeutig ablesen konnte. */
TRESOR.room({
  base: '../',
  id: 'probe',
  store: 'probe-hundezucht.v1',          /* eigener Speicherplatz: Probe und Tresor überschreiben sich nicht */
  build: 'Engine 1.6 · Probe V1',
  filePrefix: 'probe',
  gameTitle: 'Genetik-Labor',
  title: 'Genetik-Labor',
  subtitle: 'Probemission Hundezuchtverein · Mission P1 und P2',
  image: 'bilder/labor.jpg',            /* Platzhalter, Bild folgt */
  imageAlt: '',
  size: [1024, 681],
  flashlight: false,
  unlockMode: 'auto',
  hideInventory: true,
  hideTabs: ['funde', 'beweise'],
  figures: { kemal: { name: 'Kemal Aydın', role: '', img: 'figuren/kemal.jpg' } },   /* ⟦FEHLT: Kemals Rolle im Verein⟧ */

  caseText: function (T) {
    return '⟦FEHLT: Auftragstext für die Laborakte (Hundezuchtverein, Brief der Käuferin)⟧';
  },

  akteTabs: [
    { id: 'zuchtbuch', label: 'Zuchtbuch', pos: 1, docs: [
      { doc: 'zuchtbuch1', if: { solved: 'p1-brief' } },
      { doc: 'zuchtbuch2', if: { unlocked: 'mP2' } } ] }
  ],

  missions: [
    { id: 'mP1', title: 'Mission P1 · Der Brief der Käuferin',
      intro: { from: 'kemal', text: '⟦FEHLT: Einstieg P1. Kemal legt einen Brief der Käuferin vor. Sie zweifelt am Zuchtbuch des Vereins. Das Team prüft, ob sie recht hat.⟧' },
      requires: ['p1-brief', 'p1-wuerfe'],
      doneTitle: 'Mission P1 abgeschlossen',
      doneText: '⟦FEHLT: Abschlusstext P1 (Hinweis auf das Papier: Hypothesen H1, H2 und Vorhersagen)⟧' },
    { id: 'mP2', title: 'Mission P2 · Der Einspruch des Züchters',
      intro: { from: 'kemal', text: '⟦FEHLT: Einstieg P2. Der Verein hat den Wurf mit dem langhaarigen Welpen und fünf weitere Würfe dokumentiert. Ein Züchter erhebt Einspruch.⟧' },
      requires: ['p2-hypothesen', 'p2-muenzen', 'p2-einspruch'],
      doneTitle: 'Mission P2 abgeschlossen',
      doneText: '⟦FEHLT: Abschlusstext P2⟧' }
  ],

  /* Tippflächen im Labor: Lage VORLÄUFIG, wird an das Laborbild angepasst. Ohne Bild erscheinen sie beschriftet. */
  hotspots: [
    { id: 'brief', label: 'Brief der Käuferin', rect: [5, 30, 20, 40], states: [
      { if: { unlocked: 'mP1', notSolved: 'p1-brief' }, action: { type: 'puzzle', puzzle: 'p1-brief' } },
      { if: { unlocked: 'mP1' }, action: { type: 'doc', doc: 'brief' } } ] },
    { id: 'zuchtbuch', label: 'Zuchtbuch', rect: [28, 30, 20, 40], states: [
      { if: { unlocked: 'mP1', solved: 'p1-brief', notSolved: 'p1-wuerfe' }, action: { type: 'puzzle', puzzle: 'p1-wuerfe' } },
      { if: { unlocked: 'mP2', notSolved: 'p2-hypothesen' }, action: { type: 'puzzle', puzzle: 'p2-hypothesen' } },
      { if: { unlocked: 'mP2' }, action: { type: 'docs', title: 'Zuchtbuch', docs: ['zuchtbuch1', 'zuchtbuch2'] } },
      { if: { solved: 'p1-brief' }, action: { type: 'doc', doc: 'zuchtbuch1' } },
      { action: { type: 'text', text: '⟦FEHLT: Text, solange das Zuchtbuch noch zu ist⟧' } } ] },
    { id: 'muenzen', label: 'Münzen', rect: [51, 30, 20, 40], states: [
      { if: { unlocked: 'mP2', solved: 'p2-hypothesen', notSolved: 'p2-muenzen' }, action: { type: 'puzzle', puzzle: 'p2-muenzen' } },
      { action: { type: 'text', text: '⟦FEHLT: Text, solange die Münzen noch nicht dran sind⟧' } } ] },
    { id: 'einspruch', label: 'Einspruch des Züchters', rect: [74, 30, 20, 40], states: [
      { if: { unlocked: 'mP2', solved: 'p2-muenzen', notSolved: 'p2-einspruch' }, action: { type: 'puzzle', puzzle: 'p2-einspruch' } },
      { if: { solved: 'p2-einspruch' }, action: { type: 'doc', doc: 'einspruch' } },
      { action: { type: 'text', text: '⟦FEHLT: Text, solange der Einspruch noch nicht dran ist⟧' } } ] }
  ],

  docs: {
    'brief': { title: 'Brief der Käuferin', style: 'paper',
      text: '⟦FEHLT: Anrede, Unterschrift?⟧\n\n1 Mein Welpe hat kurzes Fell. 2 Ihr Zuchtbuch muss falsch sein. 3 Sein Vater ist langhaarig, seine Mutter kurzhaarig. 4 Die Welpen hätten Fell mittlerer Länge haben müssen. 5 Das lange Fell des Vaters ist einfach nicht weitergegeben worden.' },
    'zuchtbuch1': { title: 'Zuchtbuch des Vereins · Würfe 1 bis 3 (nachempfunden)', style: 'paper',
      text: 'Nachempfundene Daten, kein echtes Zuchtbuch.\n\nEltern: aus reinen Zuchtlinien (je zehn Generationen nur kurzhaarig bzw. nur langhaarig).',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'zuchtbuch2': { title: 'Zuchtbuch des Vereins · sechs weitere Würfe (nachempfunden)', style: 'paper',
      text: 'Nachempfundene Daten, kein echtes Zuchtbuch.\n\n⟦FEHLT: Wer wurde verpaart? Welcher Wurf enthält den langhaarigen Welpen vom Foto?⟧',
      table: { head: ['Wurf', 'kurz', 'lang'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } },
    'einspruch': { title: 'Einspruch des Züchters', style: 'paper',
      text: '„Kurzes Fell ist dominant, also verschwinden langhaarige Welpen.“' }
  },

  puzzles: {
    /* ---------------- Mission P1 ---------------- */
    'p1-brief': { id: 'p1-brief', type: 'markup', fbStyle: 'satz', title: 'P1.1 · Der Brief',
      prompt: 'Markiert in jedem Satz, ob er eine Beobachtung, eine Deutung oder eine Behauptung ist.',
      passes: [{ id: 'beo', label: 'Beobachtung', tag: 'Beobachtung' },
               { id: 'deu', label: 'Deutung', tag: 'Deutung' },
               { id: 'beh', label: 'Behauptung', tag: 'Behauptung' }],
      note: 'Wählt oben die Markierung und tippt dann den Satz an. Ein zweiter Tipp entfernt sie.',
      /* Reihenfolge VORLÄUFIG gemischt (Frage 6) */
      segments: [
        { id: 's1', nr: '1', text: '„Mein Welpe hat kurzes Fell.“' },
        { id: 's2', nr: '2', text: '„Ihr Zuchtbuch muss falsch sein.“' },
        { id: 's3', nr: '3', text: '„Sein Vater ist langhaarig, seine Mutter kurzhaarig.“' },
        { id: 's4', nr: '4', text: '„Die Welpen hätten Fell mittlerer Länge haben müssen.“' },
        { id: 's5', nr: '5', text: '„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“' }
      ],
      hash: '78f9a0e162a31f361eef34936b282e279496992bce0fade6b18057e308ceba63',
      passHash: { beo: '782c510a8cff8a774edda47970b4925a07f3c1911d349dc0861e806ca8030332', deu: 'fd01e2030a16098b92d05c999b1b8b5eb2fc3b0500b5cc9282550e247f48a8dc', beh: 'b7b0633db709402244fa7901aa06e6fc9d59e6c27ba768fb20cf755a75f59279' },
      hints: ['Trennt, was man sehen kann, von dem, was jemand daraus schließt.',
              'Eine Behauptung nennt keinen Beleg.',
              'Fragt bei jedem Satz: Könnte das so im Zuchtbuch stehen?'],
      onSolve: { docs: ['zuchtbuch1'], toast: 'Neuer Reiter in der Akte: Zuchtbuch', openAkte: 'zuchtbuch' } },

    'p1-wuerfe': { id: 'p1-wuerfe', type: 'combo', title: 'P1.2 · Was sagen die Würfe wirklich?',
      prompt: 'Beurteilt die drei Aussagen mit dem Zuchtbuch. Zieht einen Pfeil von jeder Aussage zu einem Beleg und wählt die Pfeilart. Tragt ein, wie viele der 24 Welpen langes Fell haben.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch', docs: ['zuchtbuch1'] },
      parts: [
        { id: 'pfeile', kind: 'net', label: 'Pfeile', plural: true, count: true, onePerSource: true,
          kinds: [{ id: 'stuetzt', label: 'stützt' }, { id: 'widerspricht', label: 'widerspricht' }, { id: 'offen', label: 'nicht entscheidbar' }],
          items: [
            { id: 'a', tag: 'A', label: '„Alle Welpen haben Fell mittlerer Länge.“' },
            { id: 'b', tag: 'B', label: '„Bei allen Welpen setzt sich ein Elternmerkmal durch.“' },
            { id: 'c', tag: 'C', label: '„Die Anlage für langes Fell ist verloren.“' },
            /* Belegkarten VORLÄUFIG (Frage 7): nur Angaben aus dem Zuchtbuch */
            { id: 'eltern', tag: 'Beleg', label: 'Die Eltern stammen aus reinen Zuchtlinien.' },
            { id: 'alle24', tag: 'Beleg', label: 'Alle 24 Welpen sind kurzhaarig.' }
          ],
          layout: { a: [21, 16], b: [21, 50], c: [21, 84], eltern: [79, 30], alle24: [79, 70] },
          edgeCount: 3,
          edgeHash: ['b787e12538fc11dadda9afb9de1c1290ae4ed7168ca6230b7e97bcb9e3b23e4a', 'e645792231eb32f30f54f5e516402578649d5587d32f131788ca180ddfc0b67b',
                     '1e9f8853459f2747fdd23efe455d7adc862c69279ca799c19e4f4c072f620130', 'de3ac834d1ec6367e11b83880814574521164d5637c267a96fdf2ace9099d547'] },
        { id: 'zahl', kind: 'number', label: 'Zahl', before: 'Langes Fell haben', after: 'von 24 Welpen.',
          hash: '0d4bc2868e4dda0124fcf77e9bde533cc23cd82a51110913dad3e2ea67541642' }
      ],
      button: 'Prüfen',
      hints: ['Schaut nur auf das, was im Zuchtbuch steht.',
              'Fragt bei jeder Aussage: Was folgt daraus, was folgt nicht?',
              'Zu Aussage C sagen die Zahlen nichts.'],
      rescue: 'QSB3aWRlcnNwcmljaHQgZGVtIFp1Y2h0YnVjaC4gQiB3aXJkIGdlc3TDvHR6dC4gQyBpc3QgbmljaHQgZW50c2NoZWlkYmFyLg==',
      rescueTask: 'Schreibt in eigenen Worten, warum C nicht entscheidbar ist.',
      onSolve: { fx: 'lock', fxLamps: [], image: { src: 'bilder/p1-verpaarung.jpg', title: '⟦FEHLT: Überschrift zum Foto der nächsten Verpaarung⟧', text: '⟦FEHLT: Text zum Cliffhanger⟧' } } },

    /* ---------------- Mission P2 ---------------- */
    'p2-hypothesen': { id: 'p2-hypothesen', type: 'combo', title: 'P2.1 · Hypothesen prüfen',
      prompt: 'Berechnet aus allen sechs Würfen das Verhältnis kurz zu lang (für lang gleich 1, gerundet) und tragt es ein. Zieht einen Pfeil von der Hypothese „Anlage verloren“ zu dem Beleg, der sie widerlegt.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch', docs: ['zuchtbuch2'] },
      parts: [
        { id: 'zahl', kind: 'number', label: 'Zahl', before: 'kurz : lang =', after: ': 1',
          hash: 'b5d39dda9a2a0a815d352e6ef8196ba1250ab586754efe952fcff5ede10fbd27' },
        { id: 'pfeil', kind: 'net', label: 'Pfeil', count: false,
          kinds: [{ id: 'stuetzt', label: 'stützt' }, { id: 'widerspricht', label: 'widerspricht' }, { id: 'offen', label: 'nicht entscheidbar' }],
          items: [
            { id: 'h1', tag: 'H1', label: 'Anlage verloren' },
            { id: 'h2', tag: 'H2', label: 'Anlage vorhanden, aber überdeckt' },
            /* Belegkarten VORLÄUFIG (Frage 8) */
            { id: 'b31', tag: 'Beleg', label: '31 kurzhaarige Welpen' },
            { id: 'b9', tag: 'Beleg', label: '9 langhaarige Welpen' }
          ],
          layout: { h1: [21, 30], h2: [21, 72], b31: [79, 30], b9: [79, 72] },
          edgeCount: 1,
          edgeHash: ['3429123f8c56ccfa9581ec49305509a8ca18eace8fdb2c2b7f2ed8baec2f6982'] }
      ],
      button: 'Prüfen',
      hints: ['Ein Wurf allein ist zu wenig. Zählt alles zusammen.',
              'Teilt die größere Summe durch die kleinere.',
              'Welche Hypothese können 9 langhaarige Welpen nicht stehen lassen?'] },

    'p2-muenzen': { id: 'p2-muenzen', type: 'record', title: 'P2.2 · Münzwurf-Modell',
      prompt: 'Sagt vorher, wie viele von 20 Welpen langes Fell haben. Werft dann 20-mal mit zwei Münzen und tragt das Ergebnis ein.',
      say: { from: 'kemal', text: 'Kopf = Anlage für kurzes Fell, Zahl = Anlage für langes Fell, jede Münze ein Elterntier. Langes Fell nur bei zweimal Zahl.' },
      fields: [
        { id: 'vorhersage', label: 'Vorhersage', suffix: 'von 20 Welpen mit langem Fell', min: 0, max: 20 },
        { id: 'ergebnis', label: 'Ergebnis', suffix: 'von 20 Welpen mit langem Fell', min: 0, max: 20, waitText: 'erst nach dem Werfen' }
      ],
      hints: ['Zwei Münzen, zwei Elterntiere.', 'Wann ist das Fell lang?', 'Nur bei zwei Zahlen.'],
      onSolve: { text: '⟦FEHLT: Auftrag fürs Logbuch: Vorhersage und Ergebnis vergleichen, eine Grenze des Modells benennen⟧' } },

    'p2-einspruch': { id: 'p2-einspruch', type: 'combo', title: 'P2.3 · Der Einspruch des Züchters',
      prompt: 'Markiert die Stelle im Einspruch, die den Daten widerspricht. Zieht in der Skizze Pfeile, die erklären, wo die Anlage für langes Fell geblieben ist.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch', docs: ['zuchtbuch1', 'zuchtbuch2'] },
      parts: [
        { id: 'markierung', kind: 'markup', label: 'Markierung', inline: true,
          passes: [{ id: 'wid', label: 'Markieren', tag: 'markiert' }],
          /* Aufteilung VORLÄUFIG (Frage 9) */
          segments: [
            { id: 'e1', text: '„Kurzes Fell' }, { id: 'e2', text: 'ist dominant,' }, { id: 'e3', text: 'also' }, { id: 'e4', text: 'verschwinden langhaarige Welpen.“' }
          ],
          hash: 'c4c498fe8439221b9bef57e62197cfd480298475b90de2d55d653130f5e6c8f9' },
        { id: 'pfeile', kind: 'net', label: 'Pfeile', plural: true, count: false, stageClass: 'tall',
          items: [
            { id: 'rez', label: 'rezessiv', cls: 'label-card' },
            { id: 'lw', label: 'langhaariger Welpe' },
            { id: 'kw', label: 'kurzhaarige Welpen' },
            { id: 'anlage', label: 'Anlage für langes Fell' },
            { id: 'wurf', label: 'neuer Wurf' },
            { id: 'ueber', label: 'überdeckt' }
          ],
          layout: { rez: [50, 11], lw: [19, 34], kw: [81, 34], anlage: [50, 58], wurf: [19, 86], ueber: [81, 86] },
          edgeCount: 5,
          /* Pfeile VORLÄUFIG (Frage 9): Kette kurzhaarige Welpen → Anlage → neuer Wurf → langhaariger Welpe,
             „überdeckt“ und „rezessiv“ als Beschriftung an die Anlage */
          edgeHash: ['3476b7e00b4ba9a0d25859e9e632ada4fe6a3b5448e40a920ad178b1d92d223f', 'd42d8d4c18e40e9fe3a14646e7dd21071e25821f594b370eab1a08c194cf441c', 'cbcaa473bd5ca08eeb37ddebb0c4569e944b3f07dd3eb9766101e43237dec47f',
                     '224f3c3f6fc40247203f3dacdeb34ea7a6e7d8d510e99ca1eeeb2be23fc10390', 'e63aa7af3be07f09648132c7a8719ccf0c472d96af847a494739f3c31afcb7f1'] }
      ],
      button: 'Prüfen',
      hints: ['Welche Stelle im Einspruch passt nicht zu den 9 langhaarigen Welpen?',
              'Wo war die Anlage in der ersten Generation?',
              'Sie war da, aber man hat sie nicht gesehen.'],
      onSolve: { fx: 'lock', fxLamps: [], image: { src: 'bilder/p2-gartenbuch.jpg', title: '⟦FEHLT: Überschrift Gartenbuch⟧' },
        message: { from: 'kemal', text: '⟦FEHLT: Pointe. Kemal öffnet das Gartenbuch eines Mönchs, der das schon vor 150 Jahren bei Erbsen herausgefunden hat.⟧' } } }
  }
});
