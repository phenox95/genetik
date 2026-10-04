#!/usr/bin/env node
/* Erzeugt aus einer Quelldatei (*.src.js, nicht auf GitHub) die deployte Raumdatei.
   {{H:id:Lösung}}  → SHA-256 von 'tresor|id|NORM(Lösung)', wie check() in der Engine
   {{B:Text}}       → Base64 (UTF-8), für Notfalltexte
   Aufruf: node tools/build.js quellen/probe.src.js probe/verein/probe.js */
'use strict';
var fs = require('fs'), crypto = require('crypto');

function norm(s) {
  return String(s).toUpperCase()
    .replace(/Ä/g, 'AE').replace(/Ö/g, 'OE').replace(/Ü/g, 'UE').replace(/ẞ/g, 'SS')
    .replace(/[^A-Z0-9]/g, '');
}
function hash(id, answer) { return crypto.createHash('sha256').update('tresor|' + id + '|' + norm(answer), 'utf8').digest('hex'); }

var src = process.argv[2], out = process.argv[3];
if (!src || !out) { console.error('Aufruf: node tools/build.js <quelle.src.js> <ziel.js>'); process.exit(1); }
var text = fs.readFileSync(src, 'utf8'), n = 0;
text = text.replace(/\{\{H:([^:}]+):([^}]*)\}\}/g, function (m, id, ans) { n++; return hash(id, ans); });
text = text.replace(/\{\{B:([^}]*)\}\}/g, function (m, t) { n++; return Buffer.from(t, 'utf8').toString('base64'); });
/* Kommentarzeilen mit LÖSUNG: … stehen nur in der Quelle */
text = text.split('\n').filter(function (l) { return !/^\s*\/\/\s*LÖSUNG:/.test(l); }).join('\n');
if (/\{\{[HB]:/.test(text)) { console.error('Nicht ersetzter Platzhalter gefunden.'); process.exit(1); }
text = text.replace(/^/, '/* ERZEUGT mit tools/build.js. Nicht von Hand ändern. */\n');
fs.writeFileSync(out, text);
console.log(out + ': ' + n + ' Platzhalter ersetzt.');
