/* AUTOMATISCH ERZEUGT aus _quelle/raum2.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 2 „Das Zuchtlabor“ · Mission 2 (Stand 02.11.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum2/raum2.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Inhalt: Die Klasse erzeugt selbst Vererbungsdaten (Reinzucht, Kreuzung, Spaltung, Testkreuzung), bevor die Regeln im Unterricht benannt werden.
   Hinweis: Die Erbgänge der Zuchttiere (Modell mit zwei Anlagen K und l) stehen im Modell weiter unten im Klartext. */
TRESOR.room({
  base: '../',
  id: 'raum2',
  version: 'Testraum Mendel V11 · Raum 2 · 02.11.2026',
  title: 'Das Zuchtlabor',
  subtitle: 'Genetik · Eigene Zuchtversuche',
  image: '../bilder/labor.jpg',
  imageAlt: 'Ein nüchternes Zuchtlabor: links ein Schreibtisch mit Computer und Stuhl, in der Mitte vier Gehege mit Gittertüren unter einem Fenster, rechts ein hohes Bücherregal mit einem dunkelroten Buch.',
  size: [1024, 768],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Das Zuchtbuch zeigt nur, was passiert ist. Das Zuchtlabor des Vereins simuliert Verpaarungen am Computer. So könnt ihr selbst Würfe erzeugen und auswerten. Ihr wollt wissen: Wo war die Anlage für langes Fell?';
    if (T.isSolved('lab-aussage1')) t += '\n\nIhr habt Reinzucht und Kreuzung ausprobiert und gesehen, was die erste Generation zeigt.';
    if (T.isSolved('lab-aussage2')) t += '\n\nIhr habt die zweite Generation erzeugt: Das lange Fell ist zurück.';
    if (T.isSolved('lab-aussage3')) t += '\n\nIhr habt mit einer Testverpaarung erkannt, welcher Rüde die Anlage für langes Fell trägt.';
    return t;
  },

  end: { title: 'Teil 3 des Gutachtens fertig', text: 'Sichert jetzt euren Spielstand. Im Unterricht schreibt ihr Teil 4: Regeln und Fachwörter. Danach geht es im dritten Raum weiter.' },

  /* Zuchtmodell: Jedes Tier hat zwei Anlagen (K = kurz, l = lang) und gibt zufällig eine weiter. Kurzes Fell zeigt, wer mindestens ein K hat. */
  models: {
    kreuzung: function (st, rnd) {
      var GENO = { bruno: 'KK', fritzi: 'KK', luna: 'll', max: 'll', mia: 'll', ben: 'Kl', emma: 'Kl', ida: 'Kl', tom: 'Kl', rex: 'Kl', hektor: 'KK' };
      var NAME = { bruno: 'Bruno', fritzi: 'Fritzi', luna: 'Luna', max: 'Max', mia: 'Mia', ben: 'Ben', emma: 'Emma', ida: 'Ida', tom: 'Tom', rex: 'Rex', hektor: 'Hektor' };
      var parts = (st.paar || (st.ruede + '-' + st.huendin)).split('-');
      function gib(id) { return GENO[id].charAt(rnd() < 0.5 ? 0 : 1); }
      var kurz = 0, lang = 0, i, a;
      for (i = 0; i < 8; i++) { a = gib(parts[0]) + gib(parts[1]); if (a.indexOf('K') !== -1) kurz++; else lang++; }
      var label = NAME[parts[0]] + ' × ' + NAME[parts[1]];
      return { table: { head: ['Verpaarung', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [[label, String(kurz), String(lang)]] },
               summary: label + ': ' + kurz + ' kurzhaarig, ' + lang + ' langhaarig' };
    }
  },

  missions: [
    { id: 'mendel-2', title: 'Mission 2 · Das Zuchtlabor', unlock: 'a288344dcdd1700dc9fa508bb526e866679d864a8867162a1df62a45c387b304',
      intro: { from: 'kemal', text: 'Willkommen zurück. Teil 2 habt ihr im Unterricht geschrieben: Hypothesen und ein Münzmodell. Jetzt kommt Teil 3: Im Zuchtlabor des Vereins simuliert der Computer Verpaarungen.\n\nEin Zufallsverfahren bildet nach, welche Anlage jedes Elterntier weitergibt, so wie eure Münzen. Deshalb bekommt jedes Team etwas andere Zahlen, und ein einzelner Wurf ist keine feste Vorhersage.\n\nDas Modell ist vereinfacht: ein Gen mit zwei Anlagen. Bei echten Hunden spielen für das Fell mehrere Gene eine Rolle.\n\nHabt ihr eure Hypothesen H1 und H2 und die Modellkarte M4 im Logbuch? Dann könnt ihr starten.' },
      requires: ['lab-versuch1', 'lab-aussage1', 'lab-versuch2', 'lab-aussage2', 'lab-versuch3', 'lab-aussage3'],
      doneTitle: 'Mission 2 abgeschlossen',
      doneText: 'Teil 3 des Gutachtens ist fertig. Ihr habt selbst drei Dinge erzeugt: Nachkommen aus Reinzucht und Kreuzung sehen einheitlich aus, in der nächsten Generation taucht das verdeckte Merkmal wieder auf, und mit einer Testverpaarung erkennt man, was in einem Tier steckt.\n\nIm Unterricht schreibt ihr Teil 4: Dort gebt ihr euren Ergebnissen Namen.' }
  ],

  hotspots: [
    { id: 'planer', label: 'Zuchtplaner am Computer', rect: [0, 41, 29, 59], states: [
      { if: { unlocked: 'mendel-2', notSolved: 'lab-versuch1' }, action: { type: 'puzzle', puzzle: 'lab-versuch1' } },
      { if: { solved: 'lab-versuch1', notSolved: 'lab-aussage1' }, action: { type: 'puzzle', puzzle: 'lab-aussage1' } },
      { if: { solved: 'lab-aussage1', notSolved: 'lab-versuch2' }, action: { type: 'puzzle', puzzle: 'lab-versuch2' } },
      { if: { solved: 'lab-versuch2', notSolved: 'lab-aussage2' }, action: { type: 'puzzle', puzzle: 'lab-aussage2' } },
      { if: { solved: 'lab-aussage2', notSolved: 'lab-versuch3' }, action: { type: 'puzzle', puzzle: 'lab-versuch3' } },
      { if: { solved: 'lab-versuch3', notSolved: 'lab-aussage3' }, action: { type: 'puzzle', puzzle: 'lab-aussage3' } },
      { if: { solved: 'lab-aussage3' }, action: { type: 'text', text: 'Alle Versuche sind abgeschlossen. Eure Datenkarten hängen an der Sammelwand.' } },
      { action: { type: 'text', text: 'Der Zuchtplaner ist gesperrt. Startet zuerst die Mission.' } } ] },
    { id: 'gehege', label: 'Gehege mit den Zuchttieren', rect: [29, 45.5, 43, 30.5], action: { type: 'doc', doc: 'tiere' } },
    { id: 'laborbuch', label: 'Laborbuch im Regal', rect: [73, 8.5, 27, 80], action: { type: 'docs', title: 'Laborbuch', docs: ['auftrag', 'begriffe', 'm4', 'tiere'] } }
  ],

  docs: {
    'auftrag': { title: 'Auftrag des Vorstands', tag: 'Auftrag (nachempfunden)', style: 'paper',
      text: 'Der Vorstand bittet euch um ein Gutachten zum Zuchtbuch.\n\nTeil 1 (im Spiel): Was behauptet Frau Sommer, und was steht im Zuchtbuch?\nTeil 2 (im Unterricht): Welche Erklärungen sind denkbar?\nTeil 3 (im Spiel): Was zeigen eure eigenen Zuchtversuche?\nTeil 4 (im Unterricht): Welche Regeln erkennt ihr?\nTeil 5 (im Spiel): Was sagen die Daten zum Einspruch des Züchters?\nTeil 6 (im Unterricht): Eure Empfehlung an den Vorstand.\n\nDanach entscheidet der Vorstand, ob das Zuchtbuch geändert wird.' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Behauptung: Jemand sagt etwas, ohne einen Beleg zu nennen.\nBeobachtung: Man kann es sehen oder messen.\nDeutung: Eine Erklärung dafür, warum etwas so ist.\nHypothese: Eine Vermutung, die man prüfen kann.\nAnlage: Das, was in einem Tier festlegt, welches Fell es bekommt. Der Fachbegriff dafür heißt Allel (mehr dazu im Unterricht).\nGen und Allel: Ein Gen ist ein Abschnitt der Erbinformation, der ein Merkmal beeinflusst, hier die Felllänge. Ein Allel ist eine Form dieses Gens. Im Modell gibt es zwei Allele: K (kurz) und l (lang).\nSimulation: Ein Computer bildet mit Zufall nach, wie Allele weitergegeben werden. Ergebnisse streuen.\nGutachten: Eine begründete Einschätzung für den Vorstand.' },
    'm4': { title: 'M4 · Modellkarte aus dem Unterricht', tag: 'Karte', style: 'paper',
      text: '1. Jeder Welpe bekommt von jedem Elterntier eine Anlage.\n2. Jedes Elterntier hat zwei Anlagen für das Fell und gibt davon eine weiter, zufällig.\n3. Anlage K = kurzes Fell, Anlage l = langes Fell.\n4. Langes Fell zeigt ein Welpe nur, wenn er zweimal l hat.\n5. Das Modell ist vereinfacht: ein Gen mit zwei Allelen. Bei echten Hunden spielen für das Fell mehrere Gene eine Rolle.' },
    'tiere': { title: 'Die Zuchttiere des Vereins', tag: 'Tierliste (nachempfunden)', style: 'paper',
      text: 'Bruno (Rüde): kurzhaarig, reine Zuchtlinie (zehn Generationen nur kurzhaarig)\nFritzi (Hündin): kurzhaarig, reine Zuchtlinie\nMax (Rüde): langhaarig, reine Zuchtlinie (zehn Generationen nur langhaarig)\nLuna (Hündin): langhaarig, reine Zuchtlinie\nMia (Hündin): langhaarig, reine Zuchtlinie\n\nBen (Rüde) und Emma (Hündin): kurzhaarige Welpen aus einem Wurf von Bruno und Luna\nIda (Hündin) und Tom (Rüde): kurzhaarige Welpen aus einem Wurf von Fritzi und Max\n\nRex und Hektor (Rüden): kurzhaarig, Eltern unbekannt\n\nBeispieldaten, für dieses Spiel nachempfunden.' }
  },

  puzzles: {
    /* ---------------- Versuch 1: Reinzucht und Kreuzung ---------------- */
    'lab-versuch1': { id: 'lab-versuch1', type: 'sim', model: 'kreuzung', title: 'Versuch 1: Reinzucht und Kreuzung',
      prompt: 'Simuliert Verpaarungen der Zuchttiere und wertet die Würfe aus. Jede Verpaarung ergibt einen simulierten Wurf mit 8 Welpen.\n\nFührt jede der drei Verpaarungen mindestens einmal durch und speichert die Läufe. Die Tierliste liegt im Laborbuch.',
      controls: [
        { id: 'paar', label: 'Verpaarung', short: 'Paar', options: [
          { id: 'bruno-fritzi', label: 'Bruno × Fritzi (beide kurzhaarig)' },
          { id: 'max-luna', label: 'Max × Luna (beide langhaarig)' },
          { id: 'bruno-luna', label: 'Bruno × Luna (kurzhaarig × langhaarig)' } ] }
      ],
      need: { min: 3, per: { control: 'paar', min: 1 } },
      startText: 'Wählt eine Verpaarung und startet den Versuch. Gezählt werden kurzhaarige und langhaarige Welpen im Wurf.',
      runLabel: 'Verpaaren',
      dataNote: 'Simulierte Daten: Zufallsverfahren, jedes Team erhält andere Zahlen.',
      cardTag: 'Datenkarte (Simulation)',
      needText: 'Speichert zuerst drei Läufe, je einen für jede Verpaarung.',
      button: 'Versuch abschließen',
      hints: ['Wählt eine Verpaarung, startet den Versuch und speichert den Lauf. Dann die nächste Verpaarung.',
              'Ihr braucht drei gespeicherte Läufe: je einen für jede der drei Verpaarungen.',
              'Bruno × Fritzi, Max × Luna und Bruno × Luna: jeweils verpaaren und speichern.'],
      rescue: 'SWNoIGhhYmUgZGllIGRyZWkgVmVycGFhcnVuZ2VuIGbDvHIgZXVjaCBsYXVmZW4gbGFzc2VuLiBEaWUgRGF0ZW5rYXJ0ZW4gaMOkbmdlbiBhbiBkZXIgU2FtbWVsd2FuZC4=',
      rescueTask: 'Schreibt die Ergebnisse der drei Verpaarungen als kleine Tabelle ins Logbuch und beschreibt, was ihr seht.',
      onSolve: { then: 'lab-aussage1' } },

    'lab-aussage1': { id: 'lab-aussage1', type: 'pick', count: 1, title: 'Was zeigt Versuch 1?',
      prompt: 'Wählt die Aussage, die zu euren gespeicherten Läufen aus Versuch 1 passt.',
      cards: [
        { id: 'c1', tag: 'A', label: 'Verpaart man ein kurzhaariges mit einem langhaarigen Tier, haben alle Welpen kurzes Fell.' },
        { id: 'c2', tag: 'B', label: 'Verpaart man ein kurzhaariges mit einem langhaarigen Tier, haben alle Welpen Fell mittlerer Länge.' },
        { id: 'c3', tag: 'C', label: 'Verpaart man ein kurzhaariges mit einem langhaarigen Tier, ist etwa die Hälfte der Welpen langhaarig.' },
        { id: 'c4', tag: 'D', label: 'Zwei kurzhaarige Tiere haben manchmal langhaarige Welpen.' }
      ],
      traps: [
        { id: 'c2', text: 'Nichts passiert. Habt ihr in den Läufen Welpen mit mittlerer Länge gesehen?' },
        { id: 'c3', text: 'Nichts passiert. Schaut in den Lauf Bruno × Luna.' },
        { id: 'c4', text: 'Nichts passiert. Bruno × Fritzi ergab nur kurzhaarige Welpen.' }
      ],
      hash: '0d76f5e2a53df52613152471354ddb483c979dca6c3a6b9d4efd0647e8a12a3a',
      wrongText: 'Nichts passiert. Vergleicht die drei Läufe an der Sammelwand.',
      hints: ['Schaut an der Sammelwand, was bei Bruno × Luna herauskommt.',
              'Zählt in diesen Läufen die langhaarigen Welpen.',
              'Es gibt keinen Lauf mit langhaarigen Welpen und keinen mit mittlerer Länge.'],
      rescue: 'QmVpIEJydW5vIMOXIEx1bmEgc2luZCBhbGxlIFdlbHBlbiBrdXJ6aGFhcmlnLiBXZWRlciBsYW5naGFhcmlnZSBXZWxwZW4gbm9jaCBXZWxwZW4gbWl0IG1pdHRsZXJlciBMw6RuZ2Uga29tbWVuIHZvci4gWndlaSBrdXJ6aGFhcmlnZSBUaWVyZSBhdXMgUmVpbnp1Y2h0IChCcnVubyDDlyBGcml0emkpIGhhYmVuIG51ciBrdXJ6aGFhcmlnZSBXZWxwZW4sIHp3ZWkgbGFuZ2hhYXJpZ2UgKE1heCDDlyBMdW5hKSBudXIgbGFuZ2hhYXJpZ2Uu',
      rescueTask: 'Schreibt auf, was die vier Verpaarungen zeigen, und erklärt Aussage A mit euren Zahlen.',
      onSolve: { message: { from: 'kemal', text: 'Das Ergebnis hat gleich einen Namen, aber erst im Unterricht. Merkt euch: Bei den Welpen sieht man nur das Fell, nicht, was in ihnen steckt.\n\nDer Verein hat vier der kurzhaarigen Welpen behalten: Ben und Emma stammen aus einem Wurf von Bruno und Luna, Ida und Tom aus einem zweiten Wurf von Fritzi und Max. Paare aus verschiedenen Würfen sind nicht miteinander verwandt. Verpaart sie jetzt.' },
        wall: [{ id: 'w-lab1', title: 'Kurzhaarig × langhaarig', tag: 'Ergebnis', kind: 'ergebnis', text: 'Bruno × Luna: alle Welpen kurzhaarig. Keine Welpen mit mittlerer Länge. Reinzucht bleibt rein: Bruno × Fritzi nur kurzhaarig, Max × Luna nur langhaarig.' }], then: 'lab-versuch2' } },

    /* ---------------- Versuch 2: Die zweite Generation ---------------- */
    'lab-versuch2': { id: 'lab-versuch2', type: 'sim', model: 'kreuzung', title: 'Versuch 2: Die zweite Generation',
      prompt: 'Ben und Emma (aus einem Wurf von Bruno und Luna) sowie Ida und Tom (aus einem Wurf von Fritzi und Max) sind kurzhaarig. Verpaart Ben mit Ida und Tom mit Emma: Die Tiere stammen aus verschiedenen Würfen und sind nicht miteinander verwandt.\n\nSpeichert mindestens fünf Läufe. Je mehr Welpen ihr habt, desto besser lässt sich das Ergebnis auswerten.',
      controls: [
        { id: 'paar', label: 'Verpaarung', short: 'Paar', options: [
          { id: 'ben-ida', label: 'Ben × Ida' },
          { id: 'tom-emma', label: 'Tom × Emma' } ] }
      ],
      need: { min: 5 },
      startText: 'Wählt eine Verpaarung und startet den Versuch. Ihr dürft jede Verpaarung mehrfach durchführen.',
      runLabel: 'Verpaaren',
      dataNote: 'Simulierte Daten: Zufallsverfahren, jedes Team erhält andere Zahlen.',
      cardTag: 'Datenkarte (Simulation)',
      needText: 'Speichert zuerst fünf Läufe.',
      button: 'Versuch abschließen',
      hints: ['Verpaart Ben mit Ida und Tom mit Emma, startet jeden Versuch und speichert den Lauf.',
              'Ihr braucht fünf gespeicherte Läufe. Beide Verpaarungen dürft ihr wiederholen.',
              'Ein Lauf ist ein Wurf mit 8 Welpen. Fünf Läufe ergeben 40 Welpen.'],
      rescue: 'SWNoIGhhYmUgZsO8bmYgVmVycGFhcnVuZ2VuIGbDvHIgZXVjaCBsYXVmZW4gbGFzc2VuLiBEaWUgRGF0ZW5rYXJ0ZW4gaMOkbmdlbiBhbiBkZXIgU2FtbWVsd2FuZC4=',
      rescueTask: 'Schreibt die Zahlen aller Läufe in eine Tabelle ins Logbuch und rechnet die Summen aus.',
      onSolve: { then: 'lab-aussage2' } },

    'lab-aussage2': { id: 'lab-aussage2', type: 'pick', count: 1, title: 'Was zeigt Versuch 2?',
      prompt: 'Zählt die kurzhaarigen und die langhaarigen Welpen aller gespeicherten Läufe aus Versuch 2 zusammen. Wählt das Verhältnis kurzhaarig zu langhaarig, das am besten zu euren Zahlen passt.',
      cards: [
        { id: 'v1', tag: 'A', label: 'etwa 1 zu 1' },
        { id: 'v2', tag: 'B', label: 'etwa 3 zu 1' },
        { id: 'v3', tag: 'C', label: 'etwa 9 zu 1' },
        { id: 'v4', tag: 'D', label: 'etwa 1 zu 3' }
      ],
      traps: [
        { id: 'v1', text: 'Nichts passiert. Rechnet die Welpen aller Läufe zusammen: Sind es gleich viele kurzhaarige und langhaarige?' },
        { id: 'v3', text: 'Nichts passiert. So wenige langhaarige Welpen habt ihr nicht gezählt.' },
        { id: 'v4', text: 'Nichts passiert. Welche Fellart ist häufiger?' }
      ],
      hash: '0a5e3a1fbc99f2292f1e303045e7a16ff1b10028b3f1f33d2a41dbeada4af2dc',
      wrongText: 'Nichts passiert. Addiert zuerst alle kurzhaarigen und alle langhaarigen Welpen und teilt dann.',
      hints: ['Addiert aus allen Läufen die kurzhaarigen Welpen und die langhaarigen Welpen getrennt.',
              'Teilt die größere Summe durch die kleinere.',
              'Das Ergebnis liegt knapp über 3.'],
      rescue: 'WsOkaGx0IGlociBhbGxlIEzDpHVmZSB6dXNhbW1lbiwgc2luZCBldHdhIGRyZWkgdm9uIHZpZXIgV2VscGVuIGt1cnpoYWFyaWcgdW5kIGVpbmVyIHZvbiB2aWVyIGlzdCBsYW5naGFhcmlnLiBEYXMgVmVyaMOkbHRuaXMgbGllZ3QgYmVpIGV0d2EgMyB6dSAxLiBFaW56ZWxuZSBMw6R1ZmUgc3RyZXVlbiBzdGFyaywgZGllIFN1bW1lIGxpZWd0IG7DpGhlciBhbiBkaWVzZW0gV2VydC4=',
      rescueTask: 'Schreibt die Summen und das Verhältnis ins Logbuch. Beurteilt, warum einzelne Läufe vom Verhältnis abweichen.',
      onSolve: { message: { from: 'kemal', text: 'Die langhaarigen Welpen sind also nicht verschwunden. In der zweiten Generation tauchen sie wieder auf.\n\nBei zwei Tieren mit K und l erwarten wir etwa drei kurzhaarige auf einen langhaarigen Welpen, also etwa 3 zu 1. Einzelne Würfe weichen davon ab. Je mehr Welpen ihr zählt, desto näher liegt das Ergebnis meist an diesem Verhältnis.\n\nEs bleibt eine Frage für das Gutachten: Wie erkennt man bei einem kurzhaarigen Tier, ob in ihm die Anlage für langes Fell steckt? Der Verein hat zwei Rüden, Rex und Hektor.' },
        wall: [{ id: 'w-lab2', title: 'Die zweite Generation', tag: 'Ergebnis', kind: 'ergebnis', text: 'Kurzhaarig × kurzhaarig (Welpen der Reinzuchten, aus verschiedenen Würfen): etwa drei Viertel kurzhaarig, etwa ein Viertel langhaarig, also etwa 3 zu 1 (erwartet, einzelne Würfe weichen ab).' }], then: 'lab-versuch3' } },

    /* ---------------- Versuch 3: Testverpaarung ---------------- */
    'lab-versuch3': { id: 'lab-versuch3', type: 'sim', model: 'kreuzung', title: 'Versuch 3: Die Testverpaarung',
      prompt: 'Die Rüden Rex und Hektor sind beide kurzhaarig. Ihre Eltern sind unbekannt. Der Verein will wissen, welcher von beiden die Anlage für langes Fell trägt.\n\nVerpaart jeden Rüden mit einer langhaarigen Hündin, mindestens zweimal, und speichert die Läufe.',
      controls: [
        { id: 'ruede', label: 'Rüde', short: 'Rüde', options: [{ id: 'rex', label: 'Rex' }, { id: 'hektor', label: 'Hektor' }] },
        { id: 'huendin', label: 'Hündin (langhaarig)', short: 'Hündin', options: [{ id: 'luna', label: 'Luna' }, { id: 'mia', label: 'Mia' }] }
      ],
      need: { min: 4, per: { control: 'ruede', min: 2 } },
      startText: 'Wählt einen Rüden und eine Hündin und startet den Versuch.',
      runLabel: 'Verpaaren',
      dataNote: 'Simulierte Daten: Zufallsverfahren, jedes Team erhält andere Zahlen.',
      cardTag: 'Datenkarte (Simulation)',
      needText: 'Speichert zuerst vier Läufe, je zwei mit Rex und zwei mit Hektor.',
      button: 'Versuch abschließen',
      hints: ['Verpaart zuerst Rex zweimal, dann Hektor zweimal. Speichert jeden Lauf.',
              'Ihr braucht vier gespeicherte Läufe: zwei mit Rex und zwei mit Hektor.',
              'Die Hündin darf Luna oder Mia sein, beide sind langhaarig.'],
      rescue: 'SWNoIGhhYmUgdmllciBWZXJwYWFydW5nZW4gZsO8ciBldWNoIGxhdWZlbiBsYXNzZW4sIHp3ZWkgbWl0IFJleCB1bmQgendlaSBtaXQgSGVrdG9yLiBEaWUgRGF0ZW5rYXJ0ZW4gaMOkbmdlbiBhbiBkZXIgU2FtbWVsd2FuZC4=',
      rescueTask: 'Schreibt die Zahlen der Läufe für beide Rüden in eine Tabelle ins Logbuch.',
      onSolve: { then: 'lab-aussage3' } },

    'lab-aussage3': { id: 'lab-aussage3', type: 'pick', count: 1, title: 'Wer trägt die Anlage?',
      prompt: 'Wählt die Aussage, die zu euren gespeicherten Läufen aus Versuch 3 passt. Beide Rüden sind kurzhaarig. Unterscheidet, was sicher folgt und was nur sehr wahrscheinlich ist.',
      cards: [
        { id: 'a1', tag: 'A', label: 'Rex trägt die Anlage für langes Fell. Bei Hektor spricht alles dagegen, völlig sicher ist das aber nicht.' },
        { id: 'a2', tag: 'B', label: 'Hektor trägt die Anlage für langes Fell, Rex nicht.' },
        { id: 'a3', tag: 'C', label: 'Beide Rüden tragen die Anlage für langes Fell.' },
        { id: 'a4', tag: 'D', label: 'Kein Rüde trägt die Anlage für langes Fell.' }
      ],
      traps: [
        { id: 'a2', text: 'Nichts passiert. Bei wem tauchen langhaarige Welpen auf, bei Rex oder bei Hektor?' },
        { id: 'a3', text: 'Nichts passiert. Hat einer der beiden Rüden nur kurzhaarige Welpen?' },
        { id: 'a4', text: 'Nichts passiert. Gibt es unter den Welpen langhaarige?' }
      ],
      hash: 'b1f187875ffe112f99d75fa44e03b08a3645dcf1d8cef1ad14e4e142a70191ae',
      wrongText: 'Nichts passiert. Vergleicht die Läufe von Rex mit denen von Hektor.',
      hints: ['Schaut an der Sammelwand, bei welchem Rüden langhaarige Welpen auftauchen.',
              'Eine langhaarige Hündin gibt immer die Anlage l weiter. Ein langhaariger Welpe braucht zweimal l.',
              'Bei einem der beiden Rüden gibt es in allen Läufen nur kurzhaarige Welpen.'],
      rescue: 'QmVpIFJleCB0YXVjaGVuIGxhbmdoYWFyaWdlIFdlbHBlbiBhdWYuIEVpbiBsYW5naGFhcmlnZXIgV2VscGUgYnJhdWNodCBsIHVuZCBsLiBEaWUgSMO8bmRpbiBnaWJ0IGwgd2VpdGVyLCBhbHNvIG11c3MgUmV4IGwgdHJhZ2VuOiBEYXMgaXN0IHNpY2hlci4gQmVpIEhla3RvciBnYWIgZXMgbnVyIGt1cnpoYWFyaWdlIFdlbHBlbi4gRGFzIHNwcmljaHQgZsO8ciBLIHVuZCBLLCBiZXdlaXN0IGVzIGFiZXIgbmljaHQ6IEjDpHR0ZSBIZWt0b3IgSyB1bmQgbCwgd8OkcmUgamVkZXIgV2VscGUgbWl0IGRlciBXYWhyc2NoZWlubGljaGtlaXQgMSB6dSAyIGt1cnpoYWFyaWcuIEJlaSAxNiBXZWxwZW4gb2huZSBlaW5lbiBsYW5naGFhcmlnZW4gd8OkcmUgZGFzIHNlaHIgdW53YWhyc2NoZWlubGljaCAoZXR3YSAxIHp1IDY1LjAwMCksIGFiZXIgbmljaHQgdW5tw7ZnbGljaC4=',
      rescueTask: 'Erklärt im Logbuch, woran man erkennt, dass Rex die Anlage l trägt, obwohl er kurzhaarig ist, und beurteilt, wie sicher die Aussage über Hektor ist.',
      onSolve: { message: { from: 'kemal', text: 'Teil 3 des Gutachtens steht. Bei Rex folgt aus den Läufen sicher, dass er die Anlage für langes Fell trägt. Bei Hektor ist es nur sehr wahrscheinlich, dass er sie nicht trägt: Eine Stichprobe liefert keine absolute Sicherheit.\n\nIhr habt selbst drei Dinge erzeugt: Nachkommen aus Reinzucht und Kreuzung sehen einheitlich aus, in der nächsten Generation taucht das verdeckte Merkmal wieder auf, und mit einer Testverpaarung erkennt man, was in einem Tier steckt.\n\nDas hat vor rund 160 Jahren schon jemand bei Erbsen herausgefunden. Er war Mönch und hieß Gregor Mendel.\n\nIm Unterricht schreibt ihr Teil 4 und gebt euren Ergebnissen Namen.' },
        wall: [{ id: 'w-lab3', title: 'Die Testverpaarung', tag: 'Ergebnis', kind: 'ergebnis', text: 'Rex × langhaarige Hündin: langhaarige Welpen tauchen auf. Hektor × langhaarige Hündin: nur kurzhaarige Welpen. Rex trägt die Anlage für langes Fell (sicher). Hektor trägt sie sehr wahrscheinlich nicht, ganz sicher ist das bei einer Stichprobe nicht.' }] } }
  }
});
