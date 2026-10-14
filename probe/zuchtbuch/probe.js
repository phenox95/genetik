/* ERZEUGT mit tools/build.js. Nicht von Hand ändern. */
/* Probe-Raum Genetik · Das Zuchtbuch · Missionen P1 und P2 (Auftrag Version 2 vom 14.10.2026, Probe V2)
   QUELLE mit Klartext-Lösungen. NICHT auf GitHub. Daraus erzeugt: probe/zuchtbuch/probe.js
     node tools/build.js quellen/probe.src.js probe/zuchtbuch/probe.js
   Prüfkennungen: Gesamtlösung = id, Durchgang = id-<pass>, Spalte = id-<spalte>, Pfeil = id-edge */
TRESOR.room({
  base: '../',
  id: 'probe',
  store: 'probe-genetik.v2',                /* eigener Speicherplatz, unabhängig von Raum 1 und 2 */
  build: 'Engine 1.9 · Probe V2',
  filePrefix: 'probe',
  gameTitle: 'Genetik-Labor',
  title: 'Das Zuchtbuch',
  subtitle: 'Probe-Raum · Genetik',
  image: 'bilder/buero.jpg',                /* Platzhalter: Büro des Zuchtvereins */
  imageAlt: 'Büro des Zuchtvereins',
  size: [1024, 681],
  flashlight: false,
  unlockMode: 'auto',                       /* Haken „Do Now im Logbuch beantwortet“, wie Raum 1 */
  hideInventory: true,
  hideTabs: ['funde', 'beweise'],
  figures: { kemal: { name: 'Kemal Aydın', role: '', img: 'figuren/kemal.jpg' } },   /* Rolle: offen (andere als Präparator) */

  missions: [
    { id: 'pm1', title: 'P1 · Der Brief der Käuferin',
      intro: { from: 'kemal', text: 'Eine Käuferin zweifelt am Zuchtbuch unseres Vereins. Lest ihren Brief und prüft, ob sie recht hat.' },
      requires: ['probe-brief', 'probe-wuerfe-tabelle', 'probe-wuerfe-zahl'] },
    { id: 'pm2', title: 'P2 · Der Einspruch des Züchters',
      intro: { from: 'kemal', text: 'Der Verein hat sechs Würfe dieser Welpen dokumentiert. Ein Züchter erhebt Einspruch. Ihr habt auf Papier zwei Hypothesen formuliert: H1, die Anlage ist verloren. H2, die Anlage ist da, aber nicht sichtbar. Das Zuchtbuch entscheidet.' },
      requires: ['probe-hyp-zahl', 'probe-hyp-beleg', 'probe-einspruch-markup', 'probe-einspruch-skizze'] }
  ],

  /* Tippflächen: Lage (rect) Platzhalter, wird an das Raumbild angepasst */
  hotspots: [
    { id: 'brief', label: 'Brief', rect: [5, 30, 20, 40], states: [
      { if: { unlocked: 'pm1', notSolved: 'probe-brief' }, action: { type: 'puzzle', puzzle: 'probe-brief' } },
      { if: { unlocked: 'pm1' }, action: { type: 'doc', doc: 'm1' } } ] },
    { id: 'zuchtbuch', label: 'Zuchtbuch', rect: [28, 30, 20, 40], states: [
      { if: { unlocked: 'pm1', solved: 'probe-brief', notSolved: 'probe-wuerfe-tabelle' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-tabelle' } },
      { if: { unlocked: 'pm1', solved: 'probe-wuerfe-tabelle', notSolved: 'probe-wuerfe-zahl' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-zahl' } },
      { if: { unlocked: 'pm2', notSolved: 'probe-hyp-zahl' }, action: { type: 'puzzle', puzzle: 'probe-hyp-zahl' } },
      { if: { unlocked: 'pm2', solved: 'probe-hyp-zahl', notSolved: 'probe-hyp-beleg' }, action: { type: 'puzzle', puzzle: 'probe-hyp-beleg' } },
      { if: { unlocked: 'pm2' }, action: { type: 'docs', title: 'Zuchtbuch', docs: ['m2', 'm3'] } },
      { if: { solved: 'probe-brief' }, action: { type: 'doc', doc: 'm2' } } ] },
    { id: 'pinnwand', label: 'Pinnwand', rect: [51, 30, 20, 40], states: [
      { if: { unlocked: 'pm2' }, action: { type: 'docs', title: 'Pinnwand', docs: ['merkkarte', 'm1', 'm2', 'm3'] } },
      { if: { solved: 'probe-brief' }, action: { type: 'docs', title: 'Pinnwand', docs: ['merkkarte', 'm1', 'm2'] } },
      { if: { unlocked: 'pm1' }, action: { type: 'docs', title: 'Pinnwand', docs: ['merkkarte', 'm1'] } } ] },
    { id: 'mappe', label: 'Mappe des Züchters', rect: [74, 30, 20, 40], states: [
      { if: { unlocked: 'pm2', solved: 'probe-hyp-beleg', notSolved: 'probe-einspruch-markup' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-markup' } },
      { if: { unlocked: 'pm2', solved: 'probe-einspruch-markup', notSolved: 'probe-einspruch-skizze' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-skizze' } },
      { if: { solved: 'probe-einspruch-markup' }, action: { type: 'doc', doc: 'einspruch' } } ] }
  ],

  docs: {
    'm1': { title: 'm1 · Der Brief der Käuferin', style: 'paper',
      text: 'Beispieldaten, nachempfunden.\n\nSehr geehrter Zuchtverein,\n(1) Mein Welpe hat kurzes Fell. (2) Ihr Zuchtbuch muss falsch sein. (3) Sein Vater ist langhaarig, seine Mutter kurzhaarig. (4) Die Welpen hätten Fell mittlerer Länge haben müssen. (5) Das lange Fell des Vaters ist einfach nicht weitergegeben worden.' },
    'merkkarte': { title: 'Merkkarte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann: ‚Wenn …, dann …‘' },
    'm2': { title: 'm2 · Zuchtbuch, Teil 1', style: 'paper',
      text: 'Eltern: aus reinen Zuchtlinien, je zehn Generationen nur kurzhaarig bzw. nur langhaarig. Beispieldaten, nachempfunden.',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'm3': { title: 'm3 · Zuchtbuch, Teil 2', style: 'paper',
      text: 'Sechs Würfe aus Verpaarungen der Welpen aus Teil 1 untereinander. Beispieldaten, nachempfunden.',
      table: { head: ['Wurf', 'kurzhaarig', 'langhaarig'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } },
    'einspruch': { title: 'Einspruch des Züchters', style: 'paper',
      text: '(1) Ich züchte seit 30 Jahren. (2) Kurzes Fell ist stärker. (3) Deshalb verschwinden langhaarige Welpen aus der Zucht. (4) Das Zuchtbuch muss falsch sein.' }
  },

  puzzles: {
    /* ---------------- Mission P1 ---------------- */
    'probe-brief': { id: 'probe-brief', type: 'markup', title: 'Der Brief',
      prompt: 'Lest den Brief m1. Markiert jeden Satz als Beobachtung, Deutung oder Behauptung.',
      ref: { title: 'Zum Nachschlagen: Brief und Merkkarte', docs: ['m1', 'merkkarte'] },
      passes: [{ id: 'beo', label: 'Beobachtung', tag: 'Beobachtung' },
               { id: 'deu', label: 'Deutung', tag: 'Deutung' },
               { id: 'beh', label: 'Behauptung', tag: 'Behauptung' }],
      segments: [
        { id: 't1', nr: '1', text: 'Mein Welpe hat kurzes Fell.' },
        { id: 't2', nr: '2', text: 'Ihr Zuchtbuch muss falsch sein.' },
        { id: 't3', nr: '3', text: 'Sein Vater ist langhaarig, seine Mutter kurzhaarig.' },
        { id: 't4', nr: '4', text: 'Die Welpen hätten Fell mittlerer Länge haben müssen.' },
        { id: 't5', nr: '5', text: 'Das lange Fell des Vaters ist einfach nicht weitergegeben worden.' }
      ],
      hash: '5fb549de71f2448a14e317f4f2684f31793b6a50b38899bdcb3275bc45a8d39d',
      passHash: { beo: '46ee84f2083520f49e40ec30141394ecb2160a750de54790f0d5d260a313c254', deu: 'a045763a297d01a825843a69fc4679b28daa8fc3916b83b5306770bf82ea10dd', beh: '426d69602646b387230621816c806042f80e5aeaed900615efdc02cd32898161' },
      hints: ['Trennt, was man sehen kann, von dem, was jemand daraus schließt.',
              'Eine Behauptung nennt keinen Beleg.',
              'Fragt bei jedem Satz: Könnte das so im Zuchtbuch stehen?'],
      rescue: 'QmVvYmFjaHR1bmc6IFNhdHogMSB1bmQgU2F0eiAzLiBEZXV0dW5nOiBTYXR6IDQgdW5kIFNhdHogNS4gQmVoYXVwdHVuZzogU2F0eiAyLg==',
      rescueTask: 'Schreibt die fünf Sätze ins Logbuch und setzt vor jeden B für Beobachtung, D für Deutung oder H für Behauptung.',
      onSolve: { docs: ['m2'], message: { from: 'kemal', text: 'Prüfen wir, was wirklich im Buch steht.' }, then: 'probe-wuerfe-tabelle' } },

    'probe-wuerfe-tabelle': { id: 'probe-wuerfe-tabelle', type: 'tabelle', title: 'Was sagen die Würfe?',
      prompt: 'Lest das Zuchtbuch m2. Beurteilt jede Aussage an jedem Beleg. Tippt eine Zelle so oft an, bis die passende Angabe dort steht.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 1', docs: ['m2'] },
      cornerLabel: 'Aussage',
      rows: [
        { id: 'a', label: 'A: Alle Welpen haben Fell mittlerer Länge.' },
        { id: 'b', label: 'B: Bei allen Welpen setzt sich das Fell eines Elternteils durch.' },
        { id: 'c', label: 'C: Die Anlage für langes Fell ist in den Welpen verloren gegangen.' }
      ],
      cols: [
        { id: 'e1', short: 'E1', label: 'E1: Alle 24 Welpen sind kurzhaarig.' },
        { id: 'e2', short: 'E2', label: 'E2: Die Würfe haben 7 bis 9 Welpen.' },
        { id: 'e3', short: 'E3', label: 'E3: Über die Nachkommen der Welpen steht noch nichts im Zuchtbuch.' }
      ],
      states: [{ id: 'st', label: 'stützt' }, { id: 'wi', label: 'widerspricht' }, { id: 'ne', label: 'nicht entscheidbar' }, { id: 'kb', label: 'kein Bezug' }],
      hash: '3a607a1559f6c8507d5200422d3401324e5be089c23e498212d1b4bd4c013f11',
      colHash: { e1: '8b245e35e9991524fa8b9fe723a02c9346c35ff3d28225405b2a9dc1ce42779c', e2: '664c47500bb206b741e0955087395140c0fb8bb9b1bfdc50ea98027ea05d0351', e3: '07235c587ce210026d7e0ea211c2096a1f646cc35af07193bf476067388a7922' },
      hints: ['Schaut nur auf das, was im Zuchtbuch steht.',
              'Fragt bei jeder Zelle: Was folgt aus dem Beleg für die Aussage, was folgt nicht?',
              'Zu Aussage C sagen die Zahlen nichts.'],
      rescue: 'RGllIHZpZXIgQW5nYWJlbiBzaW5kIHN0w7x0enQsIHdpZGVyc3ByaWNodCwgbmljaHQgZW50c2NoZWlkYmFyIHVuZCBrZWluIEJlenVnLiBFMTogQSB3aWRlcnNwcmljaHQsIEIgc3TDvHR6dCwgQyBuaWNodCBlbnRzY2hlaWRiYXIuIEUyOiBrZWluIEJlenVnIHp1IEEsIEIgdW5kIEMuIEUzOiBrZWluIEJlenVnIHp1IEEgdW5kIEIsIEMgbmljaHQgZW50c2NoZWlkYmFyLg==',
      rescueTask: 'Schreibt im Logbuch in eigenen Worten, warum Beleg E1 zu Aussage C nicht entscheidbar ist.',
      onSolve: { then: 'probe-wuerfe-zahl' } },

    'probe-wuerfe-zahl': { id: 'probe-wuerfe-zahl', type: 'code', inputmode: 'numeric', title: 'Langes Fell im Zuchtbuch',
      prompt: 'Bestimmt aus m2, wie viele der 24 Welpen langes Fell haben. Tragt nur die Zahl ein.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 1', docs: ['m2'] },
      hash: 'df71ce003180134461c721067e82d9570034abbc20cc76094facd4f1b264967b',
      hints: ['Zählt in der Spalte ‚langhaarig‘.', 'Addiert die drei Würfe.', 'Es sind keine.'],
      rescue: 'S2VpbmVyIGRlciAyNCBXZWxwZW4gaGF0IGxhbmdlcyBGZWxsOiAwLg==',
      rescueTask: 'Schreibt die Rechnung ins Logbuch.',
      onSolve: { fx: 'lock', fxTitle: 'Erkenntnis', fxText: 'Alle 24 Welpen sind kurzhaarig. Ob die Anlage für langes Fell verloren ist, folgt daraus nicht.', fxLamps: [],
        message: { from: 'kemal', text: 'Zwei Welpen aus diesen Würfen wurden verpaart. Seht euch den neuen Wurf an.' },
        image: { src: 'bilder/wurf-neu.jpg', alt: 'Zwei kurzhaarige Eltern mit einem langhaarigen Welpen im Wurf' },
        message2: { from: 'kemal', text: 'Woher kommt der?' } } },

    /* ---------------- Mission P2 ---------------- */
    'probe-hyp-zahl': { id: 'probe-hyp-zahl', type: 'code', inputmode: 'decimal', title: 'Kurz zu lang',
      prompt: 'Berechnet aus allen sechs Würfen in m3, wie viele kurzhaarige Welpen auf einen langhaarigen kommen (kurz geteilt durch lang, auf eine ganze Zahl gerundet). Tragt nur die Zahl ein.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 2', docs: ['m3'] },
      hash: ['038a73c1c362444ae7aeb35cb42bde18b45636b77fd084f1effbc59dbb516270', '65f0aa96cc714995560df38a6730f1221f787e1991e69634e45e5cf904046eef', 'f0ba5b7fd8d177f297052898e07fd9f6eff0700d3a1700f94115ac934d83f077'],
      hints: ['Ein Wurf allein ist zu wenig. Zählt alles zusammen.',
              'Teilt die größere Summe durch die kleinere.',
              '31 kurzhaarige und 9 langhaarige Welpen. Das Ergebnis liegt knapp über 3.'],
      rescue: 'MzEga3VyemhhYXJpZ2UgZ2V0ZWlsdCBkdXJjaCA5IGxhbmdoYWFyaWdlIFdlbHBlbiBlcmdpYnQgZXR3YSAzLDQsIGdlcnVuZGV0IDMu',
      rescueTask: 'Rechnet im Logbuch und schreibt das Ergebnis auf.',
      onSolve: { then: 'probe-hyp-beleg' } },

    'probe-hyp-beleg': { id: 'probe-hyp-beleg', type: 'pick', count: 1, title: 'Welcher Beleg?',
      prompt: 'Wählt den Beleg, der die Hypothese H1 „Die Anlage ist verloren“ widerlegt.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 2', docs: ['m3'] },
      cards: [
        { id: 'b1', label: 'In den Würfen gibt es 9 langhaarige Welpen.' },
        { id: 'b2', label: 'Die meisten Welpen sind kurzhaarig.' },
        { id: 'b3', label: 'Die Würfe sind unterschiedlich groß.' },
        { id: 'b4', label: 'Alle Eltern waren kurzhaarig.' }
      ],
      button: 'Beleg prüfen',
      hash: '2d018b69a95af2762206d3ad47704c228df31ada26653abafb3804bd427c0670',
      hints: ['Welche Hypothese kann ein langhaariger Welpe nicht stehen lassen?',
              'Sucht den Beleg, der etwas Neues zeigt, nicht das Bekannte.',
              'Es geht um die langhaarigen Welpen.'],
      rescue: 'RGVyIEJlbGVnIGlzdDogSW4gZGVuIFfDvHJmZW4gZ2lidCBlcyA5IGxhbmdoYWFyaWdlIFdlbHBlbi4=',
      rescueTask: 'Schreibt auf, welche Hypothese ihr streicht und warum.',
      onSolve: { message: { from: 'kemal', text: 'Dann war die Anlage die ganze Zeit da. Aber ein Züchter sieht das anders.' }, then: 'probe-einspruch-markup' } },

    'probe-einspruch-markup': { id: 'probe-einspruch-markup', type: 'markup', title: 'Einspruch des Züchters',
      prompt: 'Lest den Einspruch. Markiert den Satz, der den Daten in m3 widerspricht.',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 2', docs: ['m3'] },
      passes: [{ id: 'wi', label: 'Widerspruch', tag: 'Widerspruch' }],
      segments: [
        { id: 's1', nr: '1', text: 'Ich züchte seit 30 Jahren.' },
        { id: 's2', nr: '2', text: 'Kurzes Fell ist stärker.' },
        { id: 's3', nr: '3', text: 'Deshalb verschwinden langhaarige Welpen aus der Zucht.' },
        { id: 's4', nr: '4', text: 'Das Zuchtbuch muss falsch sein.' }
      ],
      hash: 'be75a7bdf8c376c937c50b5b28835a122183c659172982efdb83f3721553a7a3',
      passHash: { wi: '8ffd14e172c46b8a85a94d8173c43d2df666ee13a2f58dbb429e1d5c61418c96' },
      hints: ['Welcher Satz passt nicht zu den 9 langhaarigen Welpen?',
              'Es geht um das, was mit den langhaarigen Welpen passiert.',
              'Er beginnt mit ‚Deshalb‘.'],
      rescue: 'U2F0eiAzIHdpZGVyc3ByaWNodCBkZW4gRGF0ZW46IOKAnkRlc2hhbGIgdmVyc2Nod2luZGVuIGxhbmdoYWFyaWdlIFdlbHBlbiBhdXMgZGVyIFp1Y2h0LuKAnA==',
      rescueTask: 'Schreibt den Satz ab und nennt die Zahl aus m3, die ihm widerspricht.',
      onSolve: { then: 'probe-einspruch-skizze' } },

    'probe-einspruch-skizze': { id: 'probe-einspruch-skizze', type: 'net', title: 'Wo ist die Anlage geblieben?',
      prompt: 'Erklärt mit Pfeilen, wo die Anlage für langes Fell geblieben ist.',
      stageClass: 'narrow',
      items: [
        { id: 'a', tag: 'A', label: 'kurzhaarige Eltern' },
        { id: 'b', tag: 'B', label: 'Anlage für langes Fell' },
        { id: 'c', tag: 'C', label: 'neuer Wurf' },
        { id: 'd', tag: 'D', label: 'zwei Anlagen für langes Fell' },
        { id: 'e', tag: 'E', label: 'langhaariger Welpe' },
        { id: 'f', tag: 'F', label: 'Anlage verloren' },
        { id: 'g', tag: 'G', label: 'Fell mischt sich' }
      ],
      /* drei Reihen, nicht in Lösungsreihenfolge; Pfeile der Lösung kreuzen keine Karte */
      layout: { b: [17, 14], g: [50, 14], d: [83, 14], a: [25, 50], c: [75, 50], e: [30, 86], f: [70, 86] },
      minEdges: 4, edgeCount: 4,
      hash: '773fc0af0919806a2c38a2595c5d17f800bc453ea92ee18cd316bedf82f99ad2',
      edgeHash: ['e256015ce9b391bc117a3a00c98f8d8b33e680a212dba52c3881a1fe31326ad3', '121b2c816ca7560566c0d9fdfde41917792f0a580984b527861ec8bfff68c737', 'cca76d0069d6aba55f9a982ccb4b9222c739b67ebfed3672d9409772e73e08f4', '3cd5881fb922bcc8b569a458cea2bf7c179c5afe7be4ac31b55918f1ec641ee8'],
      hints: ['Wo war die Anlage in der ersten Generation?',
              'Die Anlage war da, aber man hat sie nicht gesehen.',
              'Elternpaar, Anlage, neuer Wurf, zwei Anlagen, langhaariger Welpe: in dieser Reihenfolge.'],
      rescue: 'RGllIFBmZWlsZTogQSDihpIgQiwgQiDihpIgQywgQyDihpIgRCwgRCDihpIgRS4=',
      rescueTask: 'Zeichnet die Skizze ins Logbuch und schreibt unter jeden Pfeil, was er bedeutet.',
      onSolve: { fx: 'lock', fxTitle: 'Erkenntnis', fxText: 'Die Anlage für langes Fell war die ganze Zeit da. Man konnte sie nur nicht sehen.', fxLamps: [],
        message: { from: 'kemal', text: 'Das hat schon vor 160 Jahren jemand herausgefunden, bei Erbsen. Sein Name war Gregor Mendel.' },
        message2: { from: 'kemal', text: 'In der nächsten Stunde gebt ihr euren Regeln Namen.' } } }
  }
});
