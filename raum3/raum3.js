/* AUTOMATISCH ERZEUGT aus _quelle/raum3.src.js (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */
/* Der Hundezuchtverein · Raum 3 „Das Gartenbuch“ (Zwinger-Stube) · Mission 3 (Stand 12.11.2026)
   QUELLDATEI MIT LÖSUNGEN. Nicht auf GitHub. Aus dieser Datei erzeugt build.py die öffentliche Datei raum3/raum3.js.
   Marker H (doppelte Klammern, Hash-ID, Antwort) werden zum SHA-256-Hash, Marker B (Text) wird zu Base64.
   Eigenständiges Spiel, kein Evolutions-Inhalt. Testet die Engine für das Evolutionsspiel.
   Inhalt: Mendels Methode und echte Zahlen, Stammbaum mit Genotypen, Einspruch des Züchters, Skizze mit dem Modell.
   Schreibweise ab hier (Teil 4): K (kurz, dominant) und k (lang, rezessiv). In Teil 2 und Raum 2 stand dafür l.
   Mendels Zahlen und Voraussetzungen sind am Originaltext geprüft (Bateson-Übersetzung, MendelWeb) und in eigenen Worten wiedergegeben. */
TRESOR.room({
  base: '../',
  id: 'raum3',
  version: 'Testraum Mendel V11 · Raum 3 · 12.11.2026',
  title: 'Das Gartenbuch',
  subtitle: 'Genetik · Mendels Methode und der Einspruch',
  image: '../bilder/stube.jpg',
  imageAlt: 'Ein nüchterner Raum: links ein hohes Bücherregal mit einem dunkelroten Buch, in der Mitte ein Fenster über einer Holzkiste mit drei schlafenden Welpen, rechts ein blaugrauer Tisch mit Stuhl und einem Blatt Papier.',
  size: [1024, 768],
  flashlight: false,
  unlockMode: 'auto',
  wall: true,
  audioLabel: 'Aufnahme anhören',

  caseText: function (T) {
    var t = 'Ihr kennt jetzt Mendels Regeln, die Fachwörter und das Kreuzungsquadrat. Im Gartenbuch steht, wie Mendel gearbeitet hat. Danach prüft ihr Frau Sommers Stammbaum und den Einspruch eines Züchters. Das Modell ist vereinfacht: ein Gen mit zwei Allelen.';
    if (T.isSolved('probe-erbsen-zahlen')) t += '\n\nIhr habt gesehen, dass einzelne Pflanzen stark von 3 zu 1 abweichen und erst viele Pflanzen zusammen nah an 3 zu 1 liegen.';
    if (T.isSolved('probe-stammbaum-test')) t += '\n\nIhr habt Genotypen im Stammbaum bestimmt und zwischen sicher und sehr wahrscheinlich unterschieden.';
    return t;
  },

  end: { title: 'Teil 5 des Gutachtens fertig', text: 'Sichert jetzt euren Spielstand. Im Unterricht schreibt ihr Teil 6, die Empfehlung an den Vorstand.' },

  missions: [
    { id: 'mendel-3', title: 'Mission 3 · Das Gartenbuch und der Einspruch', unlock: '71613c23187370dea0d87624b154ec0d2e88ee0866e85d15ae335d4a573e1bdd',
      intro: { from: 'kemal', text: 'Willkommen zurück. Teil 4 habt ihr im Unterricht geschrieben: Mendels Regeln, Fachwörter und Kreuzungsquadrate. Jetzt kommt Teil 5.\n\nIm Regal steht das Gartenbuch: Es fasst zusammen, wie Mendel gearbeitet hat. Danach schaut ihr euch Frau Sommers Stammbaum an. Zum Schluss widerspricht ein Züchter.\n\nAb jetzt schreiben wir die Allele so: K für kurz und k für lang. Bisher stand dafür l. Habt ihr eure Regeln im Logbuch? Dann könnt ihr starten.' },
      requires: ['probe-methode', 'probe-erbsen-zahlen', 'probe-stammbaum', 'probe-stammbaum-test', 'probe-einspruch-markup', 'probe-einspruch-skizze'],
      doneTitle: 'Mission 3 abgeschlossen · Teil 5 fertig',
      doneText: 'Teil 5 des Gutachtens ist fertig. Ihr habt Mendels Methode und seine Zahlen ausgewertet, im Stammbaum Genotypen bestimmt und den Einspruch des Züchters mit den Regeln widerlegt. Das Gutachten kann sich auf Beobachtungen stützen, und es sagt, wo es nur Wahrscheinlichkeiten gibt.\n\nSchreibt die Skizze und eure Erklärung ins Logbuch. Teil 6 folgt im Unterricht: Eure Empfehlung an den Vorstand.' }
  ],

  hotspots: [
    { id: 'regal', label: 'Regal mit dem Gartenbuch', rect: [4, 10, 26.5, 75.5], states: [
      { if: { unlocked: 'mendel-3', notFound: 'gartenbuch' }, action: { type: 'doc', doc: 'gartenbuch' } },
      { if: { unlocked: 'mendel-3', notSolved: 'probe-methode' }, action: { type: 'puzzle', puzzle: 'probe-methode' } },
      { if: { unlocked: 'mendel-3', solved: 'probe-methode', notSolved: 'probe-erbsen-zahlen' }, action: { type: 'puzzle', puzzle: 'probe-erbsen-zahlen' } },
      { if: { solved: 'probe-erbsen-zahlen' }, action: { type: 'docs', title: 'Gartenbuch', docs: ['gartenbuch', 'erbsenzahlen'] } },
      { action: { type: 'text', text: 'Im Regal steht ein dunkelrotes Buch, das Gartenbuch. Startet zuerst die Mission.' } } ] },
    { id: 'wurfkiste', label: 'Wurfkiste mit dem Stammbaum', rect: [31.5, 68, 37, 27], states: [
      { if: { solved: 'probe-erbsen-zahlen', notFound: 'stammbaum' }, action: { type: 'doc', doc: 'stammbaum' } },
      { if: { solved: 'probe-erbsen-zahlen', notSolved: 'probe-stammbaum' }, action: { type: 'puzzle', puzzle: 'probe-stammbaum' } },
      { if: { solved: 'probe-stammbaum', notSolved: 'probe-stammbaum-test' }, action: { type: 'puzzle', puzzle: 'probe-stammbaum-test' } },
      { if: { solved: 'probe-stammbaum-test' }, action: { type: 'docs', title: 'Stammbaum und Zuchtbuch', docs: ['stammbaum', 'm2', 'foto-wurf-neu', 'auftrag', 'begriffe', 'm4'] } },
      { action: { type: 'text', text: 'In der Wurfkiste liegt Frau Sommers Stammbaum. Lest zuerst das Gartenbuch im Regal und löst die Aufgaben dort.' } } ] },
    { id: 'zuechter', label: 'Pult des Züchters', rect: [70, 52.5, 30, 43], states: [
      { if: { solved: 'probe-stammbaum-test', notSolved: 'probe-einspruch-markup' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-markup' } },
      { if: { solved: 'probe-einspruch-markup', notSolved: 'probe-einspruch-skizze' }, action: { type: 'puzzle', puzzle: 'probe-einspruch-skizze' } },
      { if: { solved: 'probe-einspruch-skizze' }, action: { type: 'doc', doc: 'm3' } },
      { action: { type: 'text', text: 'Hier liegt der Einspruch eines Züchters. Erst muss der Stammbaum geklärt sein.' } } ] }
  ],

  docs: {
    'auftrag': { title: 'Auftrag des Vorstands', tag: 'Auftrag (nachempfunden)', style: 'paper',
      text: 'Der Vorstand bittet euch um ein Gutachten zum Zuchtbuch.\n\nTeil 1 (im Spiel): Was behauptet Frau Sommer, und was steht im Zuchtbuch?\nTeil 2 (im Unterricht): Welche Erklärungen sind denkbar?\nTeil 3 (im Spiel): Was zeigen eure eigenen Zuchtversuche?\nTeil 4 (im Unterricht): Welche Regeln erkennt ihr?\nTeil 5 (im Spiel): Was sagen die Daten zum Einspruch des Züchters?\nTeil 6 (im Unterricht): Eure Empfehlung an den Vorstand.\n\nDanach entscheidet der Vorstand, ob das Zuchtbuch geändert wird.' },
    'begriffe': { title: 'Begriffskarte', tag: 'Karte', style: 'paper',
      text: 'Gen: Ein Abschnitt der Erbinformation, der ein Merkmal beeinflusst, hier die Felllänge.\nAllel: Eine Form dieses Gens. Im Modell gibt es zwei Allele: K (kurz) und k (lang).\nGenotyp: Die Allele eines Tieres, zum Beispiel Kk.\nPhänotyp: Das sichtbare Merkmal, zum Beispiel kurzes Fell.\nreinerbig: Beide Allele sind gleich (KK oder kk). mischerbig: Die Allele sind verschieden (Kk).\ndominant: Das Allel, dessen Merkmal sich bei Mischerbigen zeigt (K). rezessiv: Das Allel, dessen Merkmal nur bei zwei gleichen Allelen erscheint (k).\nBeobachtung: Man kann es sehen oder messen. Ableitung: Eine Schlussfolgerung aus Beobachtungen. Sie kann sehr wahrscheinlich sein, ohne sicher zu sein.\nVereinfachtes Modell: ein Gen mit zwei Allelen. Bei echten Hunden spielen für das Fell mehrere Gene eine Rolle.' },
    'm4': { title: 'M4 · Modellkarte (erweitert)', tag: 'Karte aus dem Unterricht', style: 'paper',
      text: '1. Gene liegen auf Chromosomen. Jedes Gen kommt in verschiedenen Formen vor: den Allelen.\n2. Eine Körperzelle hat Chromosomenpaare: eines von der Mutter, eines vom Vater. Also zwei Allele für das Fell.\n3. In der Meiose werden die homologen Chromosomen getrennt. Jede Keimzelle erhält nur ein Allel.\n4. Bei der Befruchtung kommen zwei Keimzellen zusammen, zufällig.\n5. Schreibweise: dominante Allele mit Großbuchstaben, rezessive mit dem passenden Kleinbuchstaben: K (kurz) und k (lang). Bisher stand dafür l.\n6. Langes Fell zeigt ein Tier nur bei kk. KK und Kk haben kurzes Fell.\n7. Das Modell ist vereinfacht: ein Gen mit zwei Allelen.' },
    'gartenbuch': { title: 'Das Gartenbuch · Mendels Methode', tag: 'Zusammenfassung (in eigenen Worten)', style: 'paper',
      text: 'Gregor Mendel (1822 bis 1884) war Augustinermönch in Brünn. Von 1856 an kreuzte er Erbsenpflanzen und zählte die Nachkommen. Seine Ergebnisse trug er im Februar und März 1865 im Naturforschenden Verein vor, 1866 wurden sie gedruckt.\n\nMendel stellte drei Voraussetzungen an seine Versuchspflanzen:\n1. Die Pflanzen müssen Merkmale haben, die sich deutlich unterscheiden und über Generationen gleich bleiben.\n2. Die Blüten der Kreuzungen müssen sich vor fremdem Pollen schützen lassen.\n3. Die Kreuzungen und ihre Nachkommen müssen fruchtbar sein.\n\nErbsen erfüllten alle drei. Mendel untersuchte sieben Merkmale, zum Beispiel Form und Farbe der Samen oder die Länge des Stängels. Jedes Merkmal untersuchte er einzeln und zählte jede Pflanze.\n\nÜber alle sieben Versuche lag das Verhältnis der Merkmale in der zweiten Generation im Mittel bei 2,98 zu 1.' },
    'erbsenzahlen': { title: 'Mendels Zahlen: Form der Samen', tag: 'Zahlen aus Mendels Arbeit', style: 'paper',
      text: 'Zweite Generation, Form der Samen. Die ersten zehn Pflanzen und die Summe aller 253 Pflanzen.\n\nBeispieldaten wie in Mendels Arbeit (Zahlen am Originaltext geprüft).',
      table: { head: ['Pflanze', 'runde Samen', 'runzelige Samen'], rows: [['1', '45', '12'], ['2', '27', '8'], ['3', '24', '7'], ['4', '19', '10'], ['5', '32', '11'], ['6', '26', '6'], ['7', '88', '24'], ['8', '22', '10'], ['9', '28', '6'], ['10', '25', '7'], ['alle 253 Pflanzen', '5474', '1850']] } },
    'stammbaum': { title: 'Stammbaum von Frau Sommers Welpen', tag: 'Stammbaum (nachempfunden)', style: 'paper', image: '../bilder/stammbaum.png',
      text: 'Der Vater ist langhaarig, die Mutter kurzhaarig. Der Welpe von Frau Sommer und seine Geschwister sind kurzhaarig. Gefüllte Symbole stehen für langhaarig, leere für kurzhaarig.' },
    'm2': { title: 'M2 · Zuchtbuch, Teil 1 (Würfe der Käuferin)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern stammen aus reinen Zuchtlinien: je zehn Generationen nur kurzhaarig bzw. nur langhaarig. Ein Gentest bestätigt: In den Elterntieren steckt nur die Anlage für ihre eigene Fellart.\n\nBeispieldaten, für dieses Spiel nachempfunden.',
      table: { head: ['Wurf', 'Welpen kurzhaarig', 'Welpen langhaarig'], rows: [['1', '8', '0'], ['2', '9', '0'], ['3', '7', '0']] } },
    'foto-wurf-neu': { title: 'Foto: der neue Wurf', tag: 'Foto (KI-Bild)', style: 'paper', image: '../bilder/wurf-gemischt.jpg',
      text: 'Zwei kurzhaarige Welpen aus Teil 1 wurden verpaart. Im neuen Wurf ist ein Welpe mit langem Fell. Die Elterntiere haben beide kurzes Fell.' },
    'm3': { title: 'M3 · Zuchtbuch, Teil 2 (sechs Beispielwürfe)', tag: 'Zuchtbuch (nachempfunden, Beispieldaten)', style: 'paper',
      text: 'Die Eltern dieser sechs Würfe sind kurzhaarige Welpen aus Teil 1, jeweils aus verschiedenen, nicht miteinander verwandten Würfen.\n\nBeispieldaten, für dieses Spiel nachempfunden (sechs Beispielwürfe).',
      table: { head: ['Wurf', 'kurzhaarig', 'langhaarig'], rows: [['1', '5', '1'], ['2', '6', '1'], ['3', '3', '2'], ['4', '6', '2'], ['5', '5', '1'], ['6', '6', '2']] } }
  },

  puzzles: {
    /* ---------------- Gartenbuch: Methode und Zahlen ---------------- */
    'probe-methode': { id: 'probe-methode', type: 'pick', count: 3, title: 'Warum Erbsen?',
      ref: { title: 'Zum Nachschlagen: Das Gartenbuch', docs: ['gartenbuch'] },
      prompt: 'Lest das Gartenbuch. Wählt die drei Voraussetzungen, die Mendel an seine Versuchspflanzen stellte.',
      cards: [
        { id: 'c1', tag: 'A', label: 'Die Merkmale unterscheiden sich deutlich und bleiben über Generationen gleich.' },
        { id: 'c2', tag: 'B', label: 'Die Blüten der Kreuzungen lassen sich vor fremdem Pollen schützen.' },
        { id: 'c3', tag: 'C', label: 'Die Kreuzungen und ihre Nachkommen sind fruchtbar.' },
        { id: 'c4', tag: 'D', label: 'Die Pflanzen sind selten und deshalb wertvoll.' },
        { id: 'c5', tag: 'E', label: 'Die Pflanzen haben nur ein einziges Merkmal.' },
        { id: 'c6', tag: 'F', label: 'Die Pflanzen wachsen nur im Klostergarten.' }
      ],
      traps: [
        { id: 'c4', text: 'Nichts passiert. Steht im Gartenbuch etwas über den Wert der Pflanzen?' },
        { id: 'c5', text: 'Nichts passiert. Wie viele Merkmale hat Mendel untersucht?' },
        { id: 'c6', text: 'Nichts passiert. Mendel suchte eine Pflanzengruppe, die für Versuche geeignet ist, nicht einen Ort.' }
      ],
      hash: '2ed52f231a32d0809e647bafeaf9459a03ad4b38f08c5392ca25976fe094c939',
      wrongText: 'Nichts passiert. Im Gartenbuch stehen genau drei Voraussetzungen.',
      hints: ['Suche im Gartenbuch die Zeile „Mendel stellte drei Voraussetzungen …“.',
              'Die drei Voraussetzungen sind nummeriert.',
              'Es geht um gleichbleibende Merkmale, Schutz vor fremdem Pollen und fruchtbare Nachkommen.'],
      rescue: 'TWVuZGVsIHN0ZWxsdGUgZHJlaSBWb3JhdXNzZXR6dW5nZW46IEVyc3RlbnMgZGV1dGxpY2ggdmVyc2NoaWVkZW5lIE1lcmttYWxlLCBkaWUgw7xiZXIgR2VuZXJhdGlvbmVuIGdsZWljaCBibGVpYmVuLiBad2VpdGVucyBCbMO8dGVuLCBkaWUgc2ljaCB2b3IgZnJlbWRlbSBQb2xsZW4gc2Now7x0emVuIGxhc3Nlbi4gRHJpdHRlbnMgZnJ1Y2h0YmFyZSBLcmV1enVuZ2VuIHVuZCBOYWNoa29tbWVuLiBEaWUgS2FydGVuIEEsIEIgdW5kIEMgbmVubmVuIHNpZS4=',
      rescueTask: 'Schreibt die drei Voraussetzungen ins Logbuch und erklärt, warum ohne die zweite Voraussetzung die Zahlen unsicher wären.',
      onSolve: { wall: [{ id: 'w-methode', title: 'Mendels Voraussetzungen', tag: 'Ergebnis', kind: 'ergebnis', text: 'Merkmale deutlich und konstant, Schutz vor fremdem Pollen, fruchtbare Nachkommen. Erbsen erfüllten alle drei.' }], then: 'probe-erbsen-zahlen' } },

    'probe-erbsen-zahlen': { id: 'probe-erbsen-zahlen', type: 'pick', count: 1, title: 'Mendels Zahlen',
      ref: { title: 'Zum Nachschlagen: Mendels Zahlen', docs: ['erbsenzahlen'] },
      prompt: 'Berechnet für Pflanze 4 das Verhältnis runde zu runzeligen Samen (19 zu 10) und für alle 253 Pflanzen (5474 zu 1850). Wählt die Aussage, die zu den Zahlen passt.',
      cards: [
        { id: 'd1', tag: 'A', label: 'Einzelne Pflanzen weichen stark von 3 zu 1 ab. Erst die Summe vieler Pflanzen liegt nahe bei 3 zu 1.' },
        { id: 'd2', tag: 'B', label: 'Mendel hat sich bei Pflanze 4 verzählt.' },
        { id: 'd3', tag: 'C', label: 'Das Verhältnis 3 zu 1 stimmt nur bei Pflanze 7.' },
        { id: 'd4', tag: 'D', label: 'Die Spaltungsregel gilt für Erbsen nicht.' }
      ],
      traps: [
        { id: 'd2', text: 'Nichts passiert. Eine Abweichung ist kein Zählfehler. Einzelne Würfe oder Pflanzen streuen immer.' },
        { id: 'd3', text: 'Nichts passiert. Rechnet nach: Pflanze 7 hat 88 zu 24, das sind etwa 3,7 zu 1.' },
        { id: 'd4', text: 'Nichts passiert. Für alle 253 Pflanzen liegt das Verhältnis bei 2,96 zu 1.' }
      ],
      hash: '3c28f70cca71857433ba5eadfa8e55e80c6463310db72a58b2872f106b24c3f9',
      wrongText: 'Nichts passiert. Vergleicht das Verhältnis einer einzelnen Pflanze mit dem aller Pflanzen.',
      hints: ['Pflanze 4: 19 geteilt durch 10. Alle Pflanzen: 5474 geteilt durch 1850.',
              'Das Ergebnis für Pflanze 4 liegt weit unter 3, das für alle Pflanzen knapp darunter.',
              'Denkt an eure Würfe im Zuchtlabor: Einzelne Würfe streuten, die Summe lag näher an 3 zu 1.'],
      rescue: 'UGZsYW56ZSA0IGhhdCAxOSBydW5kZSB1bmQgMTAgcnVuemVsaWdlIFNhbWVuLCBkYXMgc2luZCAxLDkgenUgMS4gQWxsZSAyNTMgUGZsYW56ZW4genVzYW1tZW4gaGFiZW4gNTQ3NCB6dSAxODUwLCBkYXMgc2luZCAyLDk2IHp1IDEuIEVpbnplbG5lIFBmbGFuemVuIHN0cmV1ZW4gc3RhcmssIGRpZSBTdW1tZSB2aWVsZXIgUGZsYW56ZW4gbGllZ3QgbmFoZSBhbiAzIHp1IDEuIERhcnVtIHrDpGhsdGUgTWVuZGVsIHNvIHZpZWxlIFBmbGFuemVuLg==',
      rescueTask: 'Berechnet beide Verhältnisse im Logbuch und erklärt, warum Mendel viele Pflanzen zählen musste.',
      onSolve: { message: { from: 'kemal', text: 'Das kennt ihr aus dem Zuchtlabor: Einzelne Würfe weichen ab, viele Würfe zusammen liegen nahe am erwarteten Verhältnis. Mendel hat das genau so gemacht, nur mit Erbsen und von Hand.\n\nJetzt zu Frau Sommers Welpen: Schaut euch den Stammbaum in der Wurfkiste an.' },
        wall: [{ id: 'w-zahlen', title: 'Viele Pflanzen, gute Zahlen', tag: 'Ergebnis', kind: 'ergebnis', text: 'Pflanze 4: 1,9 zu 1. Alle 253 Pflanzen: 2,96 zu 1. Je mehr Daten, desto näher am erwarteten Verhältnis.' }], then: 'probe-stammbaum' } },

    /* ---------------- Stammbaum: Genotypen ---------------- */
    'probe-stammbaum': { id: 'probe-stammbaum', type: 'tabelle', title: 'Genotypen im Stammbaum',
      ref: { title: 'Zum Nachschlagen: Stammbaum und Begriffe', docs: ['stammbaum', 'begriffe'] },
      prompt: 'Bestimmt für jedes Tier im Stammbaum den Genotyp. Wählt „nicht sicher“, wenn der Stammbaum allein nicht ausreicht. Tippt eine Zelle so oft an, bis die passende Angabe dort steht.',
      cornerLabel: 'Tier',
      rows: [{ id: 'vater', label: 'Vater (langhaarig)' }, { id: 'mutter', label: 'Mutter (kurzhaarig)' }, { id: 'welpe', label: 'Welpe (kurzhaarig)' }],
      cols: [{ id: 'g', label: 'Genotyp' }],
      states: [{ id: 'a', label: 'KK' }, { id: 'b', label: 'Kk' }, { id: 'c', label: 'kk' }, { id: 'n', label: 'nicht sicher' }],
      colHash: { g: '58764d4e5453534712a73898cfa3458ca6bd1ccece958f0e30ff2866e4f6ea31' },
      hash: 'e2d37049b77e669bb6348604c610bda9e716281f9ef8030b8434d7baa73e2646',
      wrongText: 'Nichts passiert. Fragt bei jedem Tier: Welche Allele müssen es haben, damit sein Aussehen zustande kommt?',
      hints: ['Langes Fell zeigt sich nur bei zwei gleichen rezessiven Allelen.',
              'Der Welpe bekommt ein Allel vom Vater. Welches?',
              'Die Mutter ist kurzhaarig: KK und Kk sehen gleich aus. Reicht der Stammbaum allein, um das zu entscheiden?'],
      rescue: 'RGVyIFZhdGVyIGlzdCBsYW5naGFhcmlnLCBhbHNvIGtrLiBEZXIgV2VscGUgYmVrb21tdCB2b20gVmF0ZXIgay4gRXIgaXN0IGt1cnpoYWFyaWcsIGFsc28gbXVzcyBlciBLIHZvbiBkZXIgTXV0dGVyIGhhYmVuOiBLay4gRGllIE11dHRlciBpc3Qga3VyemhhYXJpZywgaGF0IGFsc28gbWluZGVzdGVucyBlaW4gSy4gT2IgS0sgb2RlciBLaywgc2FndCBkZXIgU3RhbW1iYXVtIGFsbGVpbiBuaWNodDogbmljaHQgc2ljaGVyLg==',
      rescueTask: 'Schreibt die drei Genotypen ins Logbuch und begründet jeden mit einem Satz. Erklärt, warum die Mutter „nicht sicher“ ist.',
      onSolve: { wall: [{ id: 'w-stammbaum', title: 'Genotypen im Stammbaum', tag: 'Ergebnis', kind: 'ergebnis', text: 'Vater kk (sicher). Welpe Kk (sicher). Mutter KK oder Kk (nicht sicher).' }], then: 'probe-stammbaum-test' } },

    'probe-stammbaum-test': { id: 'probe-stammbaum-test', type: 'pick', count: 1, title: 'Ist die Mutter KK?',
      ref: { title: 'Zum Nachschlagen: Zuchtbuch, Teil 1', docs: ['m2', 'stammbaum'] },
      prompt: 'Die Mutter ist kurzhaarig, ihr Genotyp ist nach dem Stammbaum nicht sicher. Wählt die Begründung, die am besten stützt, dass sie KK ist. Nutzt das Zuchtbuch, Teil 1.',
      cards: [
        { id: 's1', tag: 'A', label: 'Die Mutter ist kurzhaarig, also hat sie KK.' },
        { id: 's2', tag: 'B', label: 'Alle 24 Welpen mit dem langhaarigen Vater sind kurzhaarig. Hätte die Mutter Kk, wäre etwa die Hälfte langhaarig.' },
        { id: 's3', tag: 'C', label: 'Der Vater ist langhaarig, also muss die Mutter KK sein.' },
        { id: 's4', tag: 'D', label: 'Die Welpen sehen der Mutter ähnlich, das ist ein Beweis.' }
      ],
      traps: [
        { id: 's1', text: 'Nichts passiert. Auch ein Tier mit Kk hat kurzes Fell.' },
        { id: 's3', text: 'Nichts passiert. Der Vater sagt nichts darüber, welche Allele die Mutter hat.' },
        { id: 's4', text: 'Nichts passiert. Ähnlichkeit im Aussehen zeigt die Allele nicht.' }
      ],
      hash: '6f35d1e439a7b26dd6905d3284edf1d36a3fbbe5f9138ff9e54ab41bddd76b0e',
      wrongText: 'Nichts passiert. Sucht die Begründung, die sich auf die Zahlen im Zuchtbuch stützt.',
      hints: ['Die Verpaarung Mutter mit dem langhaarigen Vater (kk) ist eine Testverpaarung. Was würde bei Kk herauskommen?',
              'Bei Kk × kk wäre etwa die Hälfte der Welpen kk und damit langhaarig.',
              'Im Zuchtbuch, Teil 1, steht in der Spalte „Welpen langhaarig“ bei allen drei Würfen dieselbe Zahl.'],
      rescue: 'TXV0dGVyIHVuZCBWYXRlciBoYWJlbiAyNCBXZWxwZW4uIFfDpHJlIGRpZSBNdXR0ZXIgS2ssIGjDpHR0ZSBqZWRlciBXZWxwZSBtaXQgZGVyIFdhaHJzY2hlaW5saWNoa2VpdCAxIHp1IDIgbGFuZ2VzIEZlbGwsIG7DpG1saWNoIGJlaSBray4gRGFzcyBhbGxlIDI0IGt1cnpoYWFyaWcgc2luZCwgd8OkcmUgZGFubiBleHRyZW0gdW53YWhyc2NoZWlubGljaCwgZXR3YSAxIHp1IDE3IE1pbGxpb25lbi4gQWxzbyBpc3QgS0sgc2VociB3YWhyc2NoZWlubGljaC4gRWluIEJld2VpcyBpc3QgZXMgbmljaHQu',
      rescueTask: 'Erklärt im Logbuch mit einem Kreuzungsquadrat Kk × kk, warum 24 kurzhaarige Welpen die Mutter als KK sehr wahrscheinlich machen, aber nicht beweisen.',
      onSolve: { message: { from: 'kemal', text: 'Das ist sehr sicher, aber kein Beweis: Wäre die Mutter Kk, würde jeder Welpe mit der Wahrscheinlichkeit 1 zu 2 langhaarig. Alle 24 kurzhaarig zu bekommen, wäre ein Zufall von etwa 1 zu 17 Millionen.\n\nUnterscheidet in eurem Gutachten immer: Was habt ihr beobachtet, und was folgt daraus nur sehr wahrscheinlich?' },
        wall: [{ id: 'w-mutter', title: 'Genotyp der Mutter', tag: 'Ergebnis', kind: 'ergebnis', text: 'Beobachtung: Alle 24 Welpen mit dem langhaarigen Vater sind kurzhaarig. Ableitung: Die Mutter ist sehr wahrscheinlich KK, sicher ist es nicht.' }], then: 'probe-einspruch-markup' } },

    /* ---------------- Der Einspruch ---------------- */
    'probe-einspruch-markup': { id: 'probe-einspruch-markup', type: 'markup', title: 'Der Einspruch',
      ref: { title: 'Zum Nachschlagen: M3 · Zuchtbuch, Teil 2', docs: ['m3'] },
      prompt: 'Ein Züchter widerspricht dem Gutachten. Prüft jeden Satz an M3 (sechs Beispielwürfe): Er wird durch M3 gestützt, durch M3 widerlegt oder lässt sich mit M3 nicht prüfen.',
      passes: [{ id: 'ges', label: 'gestützt', tag: 'gestützt', hint: 'Die Zahlen in M3 passen zu diesem Satz.' },
               { id: 'wid', label: 'widerlegt', tag: 'widerlegt', hint: 'Die Zahlen in M3 passen nicht zu diesem Satz.' },
               { id: 'nic', label: 'nicht prüfbar', tag: 'nicht prüfbar', hint: 'M3 sagt dazu nichts.' }],
      segments: [
        { id: 'z4', nr: 'S1', text: '„Langhaarige Hunde sind außerdem weniger gesund.“' },
        { id: 'z5', nr: 'S2', text: '„In den sechs Würfen sind die meisten Welpen kurzhaarig.“' },
        { id: 'z2', nr: 'S3', text: '„Kurzes Fell ist stärker.“' },
        { id: 'z3', nr: 'S4', text: '„Deshalb verschwinden langhaarige Welpen aus der Zucht.“' },
        { id: 'z6', nr: 'S5', text: '„Langhaarige Welpen sind deutlich seltener als kurzhaarige.“' },
        { id: 'z1', nr: 'S6', text: '„Ich züchte seit 30 Jahren.“' }
      ],
      hash: 'c05e23c16478dc8b18f07b75c0042432a609620199b35d4737ce38261b4264f0',
      passHash: { ges: '62d3cd656f20a909e17398afb9f8f24fc13cc6c6ac087eee79921d7b3fbd89f8', wid: 'cd3c53f42e95717078cf778522a7d73182eee385032e99e09123b34aa6800a4f', nic: '64bc1b36f517763fe4e443a1a3bf51db5540d00ed4ab7a91333325eca3a625a3' },
      wrongText: 'Nichts passiert. Mindestens eine Zuordnung passt nicht.',
      hints: ['Prüft jeden Satz an den Zahlen in M3: 31 kurzhaarige und 9 langhaarige Welpen.',
              '„Dominant“ ist nicht dasselbe wie „stärker“ oder „häufiger“.',
              'Ein Satz wird widerlegt, zwei werden gestützt, drei lassen sich mit M3 nicht prüfen.'],
      rescue: 'R2VzdMO8dHp0IHdlcmRlbiBTMiAoMzEgdm9uIDQwIFdlbHBlbiBzaW5kIGt1cnpoYWFyaWcpIHVuZCBTNSAoOSB2b24gNDAgc2luZCBsYW5naGFhcmlnKS4gV2lkZXJsZWd0IHdpcmQgUzQ6IEluIE0zIGdpYnQgZXMgOSBsYW5naGFhcmlnZSBXZWxwZW4sIHNpZSB2ZXJzY2h3aW5kZW4gYWxzbyBuaWNodC4gTmljaHQgcHLDvGZiYXIgc2luZCBTMSAoR2VzdW5kaGVpdCksIFMzIChTdMOkcmtlKSB1bmQgUzYgKEVyZmFocnVuZyk6IE0zIHrDpGhsdCBudXIgRmVsbC4gRG9taW5hbnQgaGVpw590IG5pY2h0IHN0w6Rya2VyLg==',
      rescueTask: 'Schreibt den widerlegten Satz ab und nennt die Zahl aus M3, die ihm widerspricht. Erklärt, warum dominant nicht stärker bedeutet.',
      onSolve: { text: 'Der Einspruch ist geprüft. Jetzt zeigt ihr mit dem Modell, wo das Allel für langes Fell geblieben ist.', then: 'probe-einspruch-skizze' } },

    'probe-einspruch-skizze': { id: 'probe-einspruch-skizze', type: 'net', title: 'Wo ist das Allel geblieben?',
      ref: { title: 'Zum Nachschlagen: M4 · Modellkarte', docs: ['m4'] },
      prompt: 'Wendet das Modell aus M4 an: Erklärt mit Pfeilen, wie aus zwei kurzhaarigen Elterntieren ein langhaariger Welpe entstehen kann. Ein Pfeil zeigt, was woraus folgt.',
      items: [
        { id: 'a', tag: 'A', label: 'Elterntier 1: Kk (kurzhaarig)' },
        { id: 'b', tag: 'B', label: 'Elterntier 2: Kk (kurzhaarig)' },
        { id: 'c', tag: 'C', label: 'Elterntier 1 gibt k weiter' },
        { id: 'd', tag: 'D', label: 'Elterntier 2 gibt k weiter' },
        { id: 'e', tag: 'E', label: 'Welpe hat kk' },
        { id: 'f', tag: 'F', label: 'Welpe hat langes Fell' },
        { id: 'g', tag: 'G', label: 'Das Allel k ist verloren' },
        { id: 'h', tag: 'H', label: 'Das Fell der Eltern mischt sich' }
      ],
      slots: [[16, 15], [16, 85], [50, 15], [50, 85], [84, 50], [50, 50], [16, 50], [84, 15]], height: 460,
      minEdges: 5, edgeCount: 5,
      edgeHash: ['78b825113091b3cf7a0c1c1f03dcc8648ef8daeb99f3904a8695017e903d91a1', '962dadcb0c9b3b91ce173097be56f1fb873249c58baf2e4367c8f5a360587698', 'e49eec27c04ddea38253694342ee453cd60505be0d0a234b2a9d5edc0fb51e56', '3cd5881fb922bcc8b569a458cea2bf7c179c5afe7be4ac31b55918f1ec641ee8', '78c8b509361839cf82a4d430eca867f3487977d0c222ecad2c8b6b51811bcd24'],
      hash: '3e5a51524bdaacafe3ecbf3274f6663145e6e72657d489d769526b41adee32d7',
      wrongText: 'Nichts passiert. Fragt: Was gibt jedes Elterntier weiter, und was entsteht daraus?',
      hints: ['Beginnt bei den Elterntieren: Was gibt jedes von ihnen an den Welpen weiter?',
              'Langes Fell zeigt ein Welpe nur, wenn er zwei k hat.',
              'In einer Karte laufen zwei Pfeile zusammen.'],
      rescue: 'SmVkZXMgRWx0ZXJudGllciBoYXQgSyB1bmQgayB1bmQgZ2lidCB6dWbDpGxsaWcgZWluZXMgZGVyIGJlaWRlbiBBbGxlbGUgd2VpdGVyLiBHZWJlbiBiZWlkZSBrIHdlaXRlciwgaGF0IGRlciBXZWxwZSBrayB1bmQgZGFtaXQgbGFuZ2VzIEZlbGwuIERpZSBLYXJ0ZW4g4oCeRGFzIEFsbGVsIGsgaXN0IHZlcmxvcmVu4oCcIHVuZCDigJ5EYXMgRmVsbCBkZXIgRWx0ZXJuIG1pc2NodCBzaWNo4oCcIGdlaMO2cmVuIG5pY2h0IGRhenUu',
      rescueTask: 'Zeichnet die Skizze ins Logbuch und schreibt unter jeden Pfeil, was er bedeutet. Ergänzt das Kreuzungsquadrat Kk × Kk.',
      onSolve: { message: { from: 'kemal', text: 'Teil 5 des Gutachtens steht. Das Allel für langes Fell war die ganze Zeit da. Man hat es bei den kurzhaarigen Eltern nur nicht gesehen, genau wie in eurem Zuchtlabor und in Mendels Erbsengarten.\n\nTeil 6, eure Empfehlung an den Vorstand, schreibt ihr im Unterricht. Jede Aussage darin braucht einen Beleg, und ihr sagt, wo eine Aussage nur sehr wahrscheinlich ist.' },
        wall: [{ id: 'w-skizze', title: 'Wo das Allel geblieben ist', tag: 'Ergebnis', kind: 'ergebnis', text: 'Beide Elterntiere: Kk, kurzes Fell. Jedes gibt k weiter. Welpe: kk. Ergebnis: langes Fell.' }] } }
  }
});
