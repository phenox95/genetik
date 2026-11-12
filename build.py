#!/usr/bin/env python3
"""Erzeugt raumN/raumN.js aus _quelle/raumN.src.js: ersetzt Marker H (Hash) durch SHA-256 und Marker B (Text) durch Base64.
Die Normalisierung entspricht der Engine (norm): Großbuchstaben, Ä/Ö/Ü/ß aufgelöst, nur A-Z und 0-9."""
import hashlib, base64, re, sys, pathlib
root = pathlib.Path(__file__).parent

def norm(s):
    s = s.upper().replace('Ä', 'AE').replace('Ö', 'OE').replace('Ü', 'UE').replace('ẞ', 'SS')
    return re.sub(r'[^A-Z0-9]', '', s)

def h(m):
    return hashlib.sha256(('tresor|' + m.group(1) + '|' + norm(m.group(2))).encode('utf-8')).hexdigest()

def b(m):
    return base64.b64encode(m.group(1).encode('utf-8')).decode('ascii')

head = '/* AUTOMATISCH ERZEUGT aus _quelle/%s (build.py). Nicht von Hand ändern. Lösungen nur als Hash. */\n'
for src in sorted((root / '_quelle').glob('raum*.src.js')):
    name = src.name.replace('.src.js', '')
    out = re.sub(r'\{\{H:([^:}]+):([^}]*)\}\}', h, src.read_text(encoding='utf-8'))
    out = re.sub(r'\{\{B:([^}]*)\}\}', b, out)
    if '{{' in out:
        sys.exit('Übrig gebliebener Marker in %s: %s' % (src.name, out[out.index('{{'):][:80]))
    (root / name).mkdir(exist_ok=True)
    (root / name / (name + '.js')).write_text(head % src.name + out, encoding='utf-8')
    print(name + '/' + name + '.js geschrieben,', len(out), 'Zeichen')
