/* AUTOMATISCH ERZEUGT aus _quelle/raum1.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 1 „Das Vereinsbüro“ · Mission 1 (Stand 01.11.2026, nach Rätselsteckbrief vom 13.10.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum1/raum1.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Texte mit dem Vermerk ENTWURF stehen nicht im Steckbrief und brauchen die Freigabe der Lehrkraft. */
TRESOR.room({
  base: '../',
  id: 'raum1',
  version: 'Testraum Mendel V11 · Raum 1 · 01.11.2026',
  title: 'Das Vereinsbüro',
  subtitle: 'Genetik · Der Brief der Käuferin',
  image: '../bilder/buero.jpg',
  imageAlt: 'Ein nüchternes Büro: links ein dunkler Schreibtisch mit einem Blatt Papier und ein Regal, an der Wand zwei gerahmte Schwarzweißfotos, darunter ein niedriger Tisch mit aufgeschlagenem Buch, rechts ein grauer Sessel am Fenster.',
  size: [1024, 768],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Bei einem Zuchtbuch geht es um Genetik: Welche Merkmale geben Eltern an Nachkommen weiter? Eine Käuferin zweifelt am Zuchtbuch eines Hundezuchtvereins. Ihr Welpe ist kurzhaarig, der Vater aber langhaarig und die Mutter kurzhaarig. Das könne nicht stimmen.\n\nIhr prüft als Gutachterinnen und Gutachter, ob sie recht hat.';
    if (T.isSolved('probe-vererbung')) t += '\n\nIhr wisst jetzt, was ein vererbtes Merkmal ist und was nicht.';
    if (T.isSolved('probe-brief')) t += '\n\nIhr habt den Brief gelesen und getrennt, was die Käuferin sieht und was sie daraus macht.';
    if (T.isSolved('probe-wuerfe-zahl')) t += '\n\nIhr habt das Zuchtbuch geprüft. In den Würfen der Käuferin gibt es keinen langhaarigen Welpen. Zwei der Welpen wurden verpaart, und im neuen Wurf ist ein langhaariger Welpe.';
    return t;
  },

  end: { title: 'Teil 1 des Gutachtens fertig', text: 'Sichert jetzt euren Spielstand. Teil 2 schreibt ihr im Unterricht: Hypothesen und ein Münzmodell. Danach geht es im zweiten Raum weiter.' },

  missions: [
    { id: 'mendel-1', title: 'Mission 1 · Der Brief der Käuferin', unlock: '7794dcd432e29cbf025f430a0ddb233334c81dd3306b226d24b8878637f573c2',
      intro: { from: 'kemal', text: 'Teil 1 des Gutachtens. Bei einem Zuchtbuch geht es um Genetik: Welche Merkmale geben Eltern an ihre Nachkommen weiter, und welche nicht?\n\nIm Regal links liegt das Merkmalsblatt des Vereins. Lest es zuerst. Danach prüft ihr den Brief von Frau Sommer und wertet das Zuchtbuch aus.\n\nBrief, Zuchtbuch und Fotos sind nachempfunden und für dieses Spiel vereinfacht. Die Bilder sind KI-Bilder.' },
      requires: ['probe-vererbung', 'probe-brief', 'probe-wuerfe-tabelle', 'probe-wuerfe-zahl'],
      doneTitle: 'Mission 1 abgeschlossen',
      doneText: 'Teil 1 des Gutachtens ist fertig. Das Zuchtbuch ist nicht widerlegt: Alle Welpen sind kurzhaarig, und keiner hat Fell mittlerer Länge. Ob die Anlage für langes Fell verloren ist, sagen die Zahlen aber nicht.\n\nZwei dieser Welpen wurden später verpaart, und im neuen Wurf ist einer mit langem Fell. In der nächsten Unterrichtsstunde schreibt ihr Teil 2: Welche Erklärungen sind denkbar?' }
  ],

  hotspots: [
    { id: 'fotowand', label: 'Fotos der Elterntiere an der Wand', rect: [33.5, 14.5, 33.5, 25.5], action: { type: 'docs', title: 'Die Elterntiere', docs: ['foto-vater', 'foto-mutter'] } },
    { id: 'regal', label: 'Regal mit dem Merkmalsblatt', rect: [0, 27, 17.5, 26], states: [
      { if: { unlocked: 'mendel-1', notFound: 'grundlagen' }, action: { type: 'doc', doc: 'grundlagen' } },
      { if: { unlocked: 'mendel-1', notSolved: 'probe-vererbung' }, action: { type: 'puzzle', puzzle: 'probe-vererbung' } },
      { if: { solved: 'probe-vererbung' }, action: { type: 'doc', doc: 'grundlagen' } },
      { action: { type: 'text', text: 'Im Regal liegt ein Merkmalsblatt. Startet zuerst die Mission.' } } ] },
    { id: 'brief', label: 'Pult mit dem Brief der Käuferin', rect: [0, 53, 32.5, 47], states: [
      { if: { solved: 'probe-vererbung', notSolved: 'probe-brief' }, action: { type: 'puzzle', puzzle: 'probe-brief' } },
      { if: { solved: 'probe-brief' }, action: { type: 'docs', title: 'Auftrag, Brief, Foto und Begriffe', docs: ['auftrag', 'm1', 'foto-welpe', 'begriffe'] } },
      { action: { type: 'text', text: 'Auf dem Pult liegt ein Brief. Lest zuerst das Merkmalsblatt im Regal und löst die Aufgabe dazu.' } } ] },
    { id: 'zuchtbuch', label: 'Zuchtbuch, Teil 1', rect: [35.5, 56, 30.5, 20.5], states: [
      { if: { solved: 'probe-brief', notSolved: 'probe-wuerfe-tabelle' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-tabelle' } },
      { if: { solved: 'probe-wuerfe-tabelle', notSolved: 'probe-wuerfe-zahl' }, action: { type: 'puzzle', puzzle: 'probe-wuerfe-zahl' } },
      { if: { solved: 'probe-wuerfe-zahl' }, action: { type: 'docs', title: 'Zuchtbuch, Teil 1', docs: ['m2', 'foto-wurf', 'foto-wurf-neu'] } },
      { action: { type: 'text', text: 'Das Zuchtbuch ist zugeklappt. Lest zuerst den Brief der Käuferin und prüft ihn.' } } ] }
  ],

  docs: {
    'grundlagen': { title: 'Merkmalsblatt · Vererbung in Kürze', tag: 'Info (vereinfacht)', style: 'paper',
      text: 'Ein Merkmal ist eine Eigenschaft, die man sehen oder messen kann, zum Beispiel Fellfarbe, Fellänge oder Ohrform.\n\nManche Merkmale werden vererbt: Die Eltern geben Erbinformation an ihre Nachkommen weiter. Die Erbinformation legt fest, welche Merkmale ein Tier entwickeln kann. Eine Anlage ist ein Stück dieser Erbinformation, das ein Merkmal beeinflusst.\n\nAndere Merkmale entstehen durch die Umwelt oder durch Erfahrung, zum Beispiel eine Narbe nach einem Unfall oder ein erlernter Trick. Sie werden nicht vererbt.\n\nBei manchen Merkmalen wirken beides zusammen. Das Körpergewicht hängt von den Anlagen und vom Futter ab.\n\nDie Wissenschaft von der Vererbung heißt Genetik. Im Zuchtverein spielt sie jeden Tag eine Rolle: Wer Hunde verpaart, will wissen, welche Merkmale die Welpen bekommen.\n\nTippt danach noch einmal auf das Regal. Dort wartet eine Aufgabe.' },
    'auftrag': { title: 'Auftrag des Vorstands', tag: 'Auftrag (nachempfunden)', style: 'paper',
      text: 'Der Vorstand bittet euch um ein Gutachten zum Zuchtbuch.\n\nTeil 1 (im Spiel): Was behauptet Frau Sommer, und was steht im Zuchtbuch?\nTeil 2 (im Unterricht): Welche Erklärungen sind denkbar?\nTeil 3 (im Spiel): Was zeigen eure eigenen Zuchtversuche?\nTeil 4 (im Unterricht): Welche Regeln erkennt ihr?\nTeil 5 (im Spiel): Was sagen die Daten zum Einspruch des Züchters?\nTeil 6 (im Unterricht): Eure Empfehlung an den Vorstand.\n\nDanach entscheidet der Vorstand, ob das Zuchtbuch geändert wird.' },
    'm1': { title: 'M1 · Der Brief von Frau Sommer', tag: 'Brief (nachempfunden)', style: 'paper',
      text: 'Von: Frau Sommer\nAn: den Vorstand des Zuchtvereins\nBetreff: Rückforderung von 1.800 Euro\n\nSehr geehrter Vorstand,\n\n„Mein Welpe ist 12 Wochen alt und hat kurzes Fell.“\n„Laut Zuchtbuch ist sein Vater langhaarig, seine Mutter kurzhaarig.“\n„Auch die beiden Geschwister aus dem Wurf haben kurzes Fell.“\n„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“\n„Die Welpen hätten Fell mittlerer Länge haben müssen.“\n„Bei anderen Züchtern kommt so etwas nie vor.“\n„Ihr Zuchtbuch muss falsch sein.“\n„Der Verein hat mich getäuscht.“\n\nFrau Sommer' },
    'foto-welpe': { title: 'Foto: der Welpe der Käuferin', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/welpe-kurz.jpg',
      text: 'Der Welpe der Käuferin, etwa 10 Wochen alt.' },
    'foto-vater': { title: 'Foto: der Vater', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/dackel-lang.jpg',
      text: 'Der Vater des Welpen. Er stammt aus einer reinen Zuchtlinie: zehn Generationen nur langhaarig. Ein Gentest bestätigt: In ihm steckt nur die Anlage für langes Fell.' },
    'foto-mutter': { title: 'Foto: die Mutter', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/dackel-kurz.jpg',
      text: 'Die Mutter des Welpen. Sie stammt aus einer reinen Zuchtlinie: zehn Generationen nur kurzhaarig. Ein Gentest bestätigt: In ihr steckt nur die Anlage für kurzes Fell.' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann.\nAnlage: Das, was in einem Tier festlegt, welches Fell es bekommt. Den Fachbegriff dafür lernt ihr später.\nGutachten: Eine begründete Einschätzung für den Vorstand.' },
    'm2': { title: 'M2 · Zuchtbuch, Teil 1 (Würfe der Käuferin)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern stammen aus reinen Zuchtlinien: je zehn Generationen nur kurzhaarig bzw. nur langhaarig. Ein Gentest bestätigt: In den Elterntieren steckt nur die Anlage für ihre eigene Fellart.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'foto-wurf-neu': { title: 'Foto: der neue Wurf', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-gemischt.jpg',
      text: 'Zwei Welpen aus Teil 1 wurden verpaart. Im neuen Wurf ist ein Welpe mit langem Fell. Die Elterntiere haben beide kurzes Fell.' },
    'foto-wurf': { title: 'Foto: ein Wurf aus Teil 1', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-kurz.jpg',
      text: 'Ein Wurf aus dem Zuchtbuch, Teil 1. Alle Welpen haben kurzes Fell.' }
  },

  puzzles: {
    'probe-vererbung': { id: 'probe-vererbung', type: 'markup', title: 'Vererbt oder nicht?',
      ref: { title: 'Zum Nachschlagen: Merkmalsblatt', docs: ['grundlagen'] },
      prompt: 'Lest das Merkmalsblatt. Ordnet jedes Merkmal eines Hundes zu: vererbt, nicht vererbt oder beides.',
      passes: [{ id: 'ver', label: 'vererbt', tag: 'vererbt', hint: 'Die Eltern geben es an die Nachkommen weiter.' },
               { id: 'nic', label: 'nicht vererbt', tag: 'nicht vererbt', hint: 'Es entsteht erst durch Umwelt oder Erfahrung.' },
               { id: 'bei', label: 'beides', tag: 'beides', hint: 'Anlagen und Umwelt wirken zusammen.' }],
      segments: [
        { id: 'm3', nr: 'M1', text: 'Körpergewicht' },
        { id: 'm6', nr: 'M2', text: 'Das Kunststück „Sitz“' },
        { id: 'm1', nr: 'M3', text: 'Fellfarbe' },
        { id: 'm4', nr: 'M4', text: 'Name des Hundes' },
        { id: 'm5', nr: 'M5', text: 'Ohrform (hängend oder aufrecht)' },
        { id: 'm2', nr: 'M6', text: 'Narbe am Ohr nach einem Unfall' }
      ],
      hash: '6a6aee1e6e083715194126543b62c289bccfb36d1961fe0d2db3f819d351e161',
      passHash: { ver: '08447a5ace510d798a8cd070af0caffdb779fa047d71f1c534dfe15179e40f7f', nic: '7fba170ce48ab0ef99468f09295d672bd41718f8696e3be74453084cb88ef1ee', bei: '0d8e9ea49a7be3e23c8a9851477d048590c350f1a127c3b5b4f9c4b0184ad8d5' },
      wrongText: 'Nichts passiert. Mindestens eine Zuordnung passt nicht.',
      hints: ['Fragt bei jedem Merkmal: Geben die Eltern es an die Nachkommen weiter, oder entsteht es erst im Leben?',
              'Nur bei einem Merkmal wirken Anlagen und Umwelt zusammen.',
              'Zwei Merkmale werden vererbt, drei entstehen durch Umwelt oder Erfahrung, eines ist beides.'],
      rescue: 'VmVyZXJidCB3ZXJkZW4gZGllIEZlbGxmYXJiZSB1bmQgZGllIE9ocmZvcm0uIE5pY2h0IHZlcmVyYnQgd2VyZGVuIGRpZSBOYXJiZSwgZGVyIE5hbWUgdW5kIGRhcyBLdW5zdHN0w7xjazogU2llIGVudHN0ZWhlbiBkdXJjaCBlaW5lbiBVbmZhbGwsIGR1cmNoIE1lbnNjaGVuIG9kZXIgZHVyY2ggTGVybmVuLiBEYXMgS8O2cnBlcmdld2ljaHQgaMOkbmd0IHZvbiBkZW4gQW5sYWdlbiB1bmQgdm9tIEZ1dHRlciBhYiwgYWxzbyBiZWlkZXMu',
      rescueTask: 'Schreibt je ein weiteres Beispiel für ein vererbtes und ein nicht vererbtes Merkmal ins Logbuch und begründet beide.',
      onSolve: { message: { from: 'kemal', text: 'Genau darum geht es bei einem Zuchtbuch: um Merkmale, die von den Eltern auf die Welpen übergehen. Ob das Fell dazugehört, prüft ihr jetzt am Brief von Frau Sommer.' },
        wall: [{ id: 'w-vererbung', title: 'Vererbt oder nicht?', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'Vererbt: Fellfarbe, Ohrform. Nicht vererbt: Narbe, Name, Kunststück. Beides: Körpergewicht.' }], then: 'probe-brief' } },

    'probe-brief': { id: 'probe-brief', type: 'markup', title: 'Der Brief',
      ref: { title: 'Zum Nachschlagen: Begriffskarte', docs: ['begriffe'] },
      prompt: 'Lest den Brief M1. Ordnet jeden Satz zu: Beobachtung, Deutung oder Behauptung.',
      passes: [{ id: 'beo', label: 'Beobachtung', tag: 'Beobachtung', hint: 'Das lässt sich am Welpen oder im Zuchtbuch nachprüfen.' },
               { id: 'deu', label: 'Deutung', tag: 'Deutung', hint: 'Frau Sommer erklärt, warum etwas so ist.' },
               { id: 'beh', label: 'Behauptung', tag: 'Behauptung', hint: 'Sie sagt etwas, ohne einen Beleg zu nennen.' }],
      segments: [
        { id: 'b6', nr: 'S1', text: '„Ihr Zuchtbuch muss falsch sein.“' },
        { id: 'b3', nr: 'S2', text: '„Auch die beiden Geschwister aus dem Wurf haben kurzes Fell.“' },
        { id: 'b5', nr: 'S3', text: '„Die Welpen hätten Fell mittlerer Länge haben müssen.“' },
        { id: 'b8', nr: 'S4', text: '„Der Verein hat mich getäuscht.“' },
        { id: 'b1', nr: 'S5', text: '„Mein Welpe ist 12 Wochen alt und hat kurzes Fell.“' },
        { id: 'b4', nr: 'S6', text: '„Das lange Fell des Vaters ist einfach nicht weitergegeben worden.“' },
        { id: 'b7', nr: 'S7', text: '„Bei anderen Züchtern kommt so etwas nie vor.“' },
        { id: 'b2', nr: 'S8', text: '„Laut Zuchtbuch ist sein Vater langhaarig, seine Mutter kurzhaarig.“' }
      ],
      hash: '9f3f0ac05d05f64820a90b247d5f5836211944e54a3c931ec7bc910c2a90512e',
      passHash: { beo: 'f0889e00a9808ce785bca0699cd5aff01a734e644daf7d2721f82b9eb8023763', deu: '1dc00e1ec77196ba0635df61d68a55dad6b183e94721f607732ccd53f68f29be', beh: 'b5db2c3e50871dfa32a6e08d33a4f83270db9cb2fc19c26a72cf958aeae9a87f' },
      wrongText: 'Nichts passiert. Mindestens eine Zuordnung passt nicht.',
      hints: ['Prüft bei jedem Satz: Lässt sich das am Welpen oder im Zuchtbuch nachprüfen?',
              'Eine Deutung erklärt, warum etwas so ist. Eine Behauptung nennt keinen Beleg.',
              'Es sind drei Beobachtungen, zwei Deutungen und drei Behauptungen.'],
      rescue: 'QmVvYmFjaHR1bmdlbiBzaW5kIFMyLCBTNSB1bmQgUzg6IFNpZSBsYXNzZW4gc2ljaCBuYWNocHLDvGZlbi4gRGV1dHVuZ2VuIHNpbmQgUzMgdW5kIFM2OiBTaWUgZXJrbMOkcmVuLCB3YXJ1bSBldHdhcyBzbyBpc3QuIEJlaGF1cHR1bmdlbiBzaW5kIFMxLCBTNCB1bmQgUzc6IEVzIHdpcmQgZXR3YXMgZ2VzYWd0LCBhYmVyIGtlaW4gQmVsZWcgZ2VuYW5udC4=',
      rescueTask: 'Schreibt die acht Sätze ins Logbuch und setzt vor jeden B (Beobachtung), D (Deutung) oder H (Behauptung). Begründet je einen Satz.',
      onSolve: { message: { from: 'kemal', text: 'Frau Sommer hat drei Dinge gesehen, zwei erklärt und drei behauptet. Prüfen wir, was wirklich im Zuchtbuch steht.' },
        wall: [{ id: 'w-brief', title: 'Der Brief, getrennt', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'Beobachtung: Welpe kurzhaarig, Vater langhaarig, Mutter kurzhaarig, Geschwister kurzhaarig.\nDeutung: Das lange Fell wurde nicht weitergegeben. Es hätte mittlere Länge geben müssen.\nBehauptung: Das Zuchtbuch ist falsch. Bei anderen Züchtern passiert das nie. Der Verein hat getäuscht.' }], then: 'probe-wuerfe-tabelle' } },

    'probe-wuerfe-tabelle': { id: 'probe-wuerfe-tabelle', type: 'tabelle', title: 'Was sagen die Würfe wirklich?',
      ref: { title: 'Zum Nachschlagen: M2 · Zuchtbuch, Teil 1', docs: ['m2'] },
      prompt: 'Beurteilt jede Aussage an jedem Beleg. Tippt eine Zelle so oft an, bis die passende Angabe dort steht.\n\nAussage A: Alle Welpen haben Fell mittlerer Länge.\nAussage B: Bei allen Welpen setzt sich das Fell eines Elternteils durch.\nAussage C: Die Anlage für langes Fell ist in den Welpen verloren gegangen.\n\nBeleg E1: Alle 24 Welpen sind kurzhaarig.\nBeleg E2: Die Würfe haben 7 bis 9 Welpen.\nBeleg E3: Über die Nachkommen der Welpen steht noch nichts im Zuchtbuch.',
      cornerLabel: 'Aussage',
      rows: [{ id: 'a', label: 'A · Fell mittlerer Länge' }, { id: 'b', label: 'B · Fell eines Elternteils setzt sich durch' }, { id: 'c', label: 'C · Anlage ist verloren' }],
      cols: [{ id: 'e1', label: 'E1 · Alle 24 kurzhaarig' }, { id: 'e2', label: 'E2 · Würfe mit 7 bis 9 Welpen' }, { id: 'e3', label: 'E3 · Über Nachkommen steht nichts' }],
      states: [{ id: 's', label: 'stützt' }, { id: 'w', label: 'widerspricht' }, { id: 'n', label: 'nicht entscheidbar' }, { id: 'k', label: 'kein Bezug' }],
      colHash: { e1: '58f0ea5fcb7e345220f6a4d4bfa15aa19155def6c4547849fc9673bec5921710', e2: 'c34773cb720ce7d0b01d18cf23b1df22bc76811c3d4fb4921fecdd250ba58c7e', e3: '1f712e29bb5d8e799a33ff9fe147e972cb9b960248dc4c7db30c6955f4b693cb' },
      hash: 'ddc1998c473c79ea044d704abcec6d478258c32212435ff079583deadaa94c32',
      wrongText: 'Nichts passiert. Fragt bei jeder Zelle: Was folgt aus dem Beleg für die Aussage, was folgt nicht?',
      hints: ['Schaut nur auf das, was im Zuchtbuch steht.',
              'Fragt bei jeder Zelle: Was folgt aus dem Beleg für die Aussage, was folgt nicht?',
              'Zu Aussage C sagen die Zahlen nichts.'],
      rescue: 'QmVsZWcgRTEgKGFsbGUgMjQga3VyemhhYXJpZyk6IEEgd2lkZXJzcHJpY2h0LCBCIHN0w7x0enQsIEMgbmljaHQgZW50c2NoZWlkYmFyLiBCZWxlZyBFMiAoV3VyZmdyw7bDn2UpOiBrZWluIEJlenVnIHp1IEEsIEIgdW5kIEMuIEJlbGVnIEUzICjDvGJlciBkaWUgTmFjaGtvbW1lbiBzdGVodCBuaWNodHMpOiBrZWluIEJlenVnIHp1IEEgdW5kIEIsIGJlaSBDIG5pY2h0IGVudHNjaGVpZGJhci4=',
      rescueTask: 'Erklärt in eigenen Worten, warum E1 zu Aussage C nicht entscheidbar ist.',
      onSolve: { merksatz: 'Ein Beleg kann zu einer Aussage passen, ihr widersprechen oder nichts darüber sagen.',
        text: 'Die Tabelle hängt an der Sammelwand.',
        wall: [{ id: 'w-tabelle', title: 'Die Würfe und die drei Aussagen', tag: 'Ergebnis', kind: 'ergebnis',
          text: 'A (mittlere Länge): widerspricht dem Beleg „alle 24 kurzhaarig“.\nB (ein Elternteil setzt sich durch): wird gestützt.\nC (Anlage verloren): nicht entscheidbar. Dazu sagen die Zahlen nichts.' }], then: 'probe-wuerfe-zahl' } },

    'probe-wuerfe-zahl': { id: 'probe-wuerfe-zahl', type: 'code', inputmode: 'numeric', title: 'Wie viele langhaarig?',
      ref: { title: 'Zum Nachschlagen: M2 · Zuchtbuch, Teil 1', docs: ['m2'] },
      prompt: 'Bestimmt aus M2 den Anteil der langhaarigen Welpen an allen 24 Welpen in Prozent und tragt die Zahl ein.',
      placeholder: 'Zahl', button: 'Prüfen',
      hash: ['df71ce003180134461c721067e82d9570034abbc20cc76094facd4f1b264967b', '43684825781784a6c2aa2703d02dd78f42c4d475b15116f19265544115568f14'],
      wrongText: 'Nichts passiert. Gesucht ist ein Anteil in Prozent, bezogen auf alle 24 Welpen.',
      hints: ['Lest die Spalte „Welpen langhaarig“.', 'Zählt die Zahlen in dieser Spalte zusammen und setzt sie ins Verhältnis zu 24.', 'Es sind drei Würfe mit derselben Zahl.'],
      rescue: 'SW4gYWxsZW4gZHJlaSBXw7xyZmVuIHN0ZWh0IGluIGRlciBTcGFsdGUg4oCeV2VscGVuIGxhbmdoYWFyaWfigJwgZGllIFphaGwgMC4gVm9uIDI0IFdlbHBlbiBoYXQgYWxzbyBrZWluZXIgbGFuZ2VzIEZlbGwsIGRlciBBbnRlaWwgYmV0csOkZ3QgMCBQcm96ZW50Lg==',
      rescueTask: 'Schreibt die Rechnung ins Logbuch und erklärt, was 0 Prozent für Aussage C bedeutet und was nicht.',
      onSolve: { message: { from: 'kemal', text: 'Teil 1 steht. Zwei dieser Welpen wurden später verpaart, und im neuen Wurf ist ein Welpe mit langem Fell. Wo kommt das lange Fell her? Darüber schreibt ihr im Unterricht Teil 2.' },
        wall: [{ id: 'w-zahl', title: 'Welpen mit langem Fell in Teil 1', tag: 'Ergebnis', kind: 'ergebnis', text: '0 von 24 Welpen sind langhaarig.\n\nIm neuen Wurf der verpaarten Welpen ist ein langhaariger Welpe.' }] } },
  }
});
