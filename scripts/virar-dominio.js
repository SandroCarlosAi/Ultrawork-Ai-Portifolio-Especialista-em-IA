#!/usr/bin/env node
/**
 * Vira o site para o domínio próprio, de uma vez só.
 *
 * Roda SÓ depois que o DNS de ultraworkai.com.br apontar para o
 * GitHub Pages. Antes disso, criar o arquivo CNAME faz o GitHub
 * redirecionar o endereço .github.io para o domínio — que ainda serve
 * o site antigo. O resultado seria ficar sem nenhum endereço no ar.
 *
 *   node scripts/virar-dominio.js --conferir   (só checa, não altera)
 *   node scripts/virar-dominio.js              (checa e, se ok, aplica)
 *   node scripts/virar-dominio.js --forcar     (aplica sem checar)
 *
 * O que ele faz:
 *   1. confirma que o DNS já aponta para o GitHub Pages
 *   2. cria o arquivo CNAME
 *   3. troca todas as URLs do index.html para o domínio
 *   4. atualiza robots.txt e sitemap.xml (com a data de hoje)
 */

const fs = require('fs');
const path = require('path');
const dns = require('dns').promises;

const RAIZ = path.resolve(__dirname, '..');
const DOMINIO = 'ultraworkai.com.br';  // dominio da empresa; tem e-mail Google Workspace (MX) que NAO pode ser tocado
const ANTIGA = 'https://sandrocarlosai.github.io/Ultrawork-Ai-Portifolio-Especialista-em-IA/';
const NOVA = `https://${DOMINIO}/`;
const IPS_PAGES = ['185.199.108.153', '185.199.109.153', '185.199.110.153', '185.199.111.153'];

const args = process.argv.slice(2);
const soConferir = args.includes('--conferir');
const forcar = args.includes('--forcar');

async function conferirDNS() {
  let ips;
  try {
    ips = await dns.resolve4(DOMINIO);
  } catch (e) {
    return { ok: false, motivo: `não consegui resolver ${DOMINIO}: ${e.code || e.message}` };
  }
  const certos = ips.filter(ip => IPS_PAGES.includes(ip));
  if (certos.length === 0) {
    return { ok: false, motivo: `aponta para ${ips.join(', ')} — ainda não é o GitHub Pages`, ips };
  }
  return { ok: true, motivo: `${certos.length} de 4 IPs do GitHub Pages respondendo`, ips };
}

function trocarArquivo(rel, pares) {
  const p = path.join(RAIZ, rel);
  if (!fs.existsSync(p)) { console.log(`  · ${rel} não existe, pulando`); return 0; }
  let s = fs.readFileSync(p, 'utf8');
  let n = 0;
  for (const [de, para] of pares) {
    const antes = s;
    s = s.split(de).join(para);
    if (s !== antes) n += antes.split(de).length - 1;
  }
  if (n) { fs.writeFileSync(p, s); console.log(`  + ${rel}: ${n} troca(s)`); }
  else console.log(`  · ${rel}: nada a trocar`);
  return n;
}

(async () => {
  console.log(`\nVirada para ${DOMINIO}\n${'─'.repeat(44)}`);

  if (!forcar) {
    const r = await conferirDNS();
    console.log(`DNS: ${r.ok ? 'PRONTO' : 'AINDA NÃO'} — ${r.motivo}`);
    if (!r.ok) {
      console.log('\nNada foi alterado. Rode de novo quando o DNS propagar,');
      console.log('ou use --forcar se souber o que está fazendo.\n');
      process.exit(1);
    }
  }
  if (soConferir) { console.log('\n(--conferir: nada foi alterado)\n'); process.exit(0); }

  console.log('\nAplicando:');

  fs.writeFileSync(path.join(RAIZ, 'CNAME'), DOMINIO + '\n');
  console.log('  + CNAME criado');

  trocarArquivo('index.html', [[ANTIGA, NOVA]]);
  trocarArquivo('robots.txt', [[ANTIGA, NOVA]]);
  trocarArquivo('README.md', [[ANTIGA, NOVA]]);

  const hoje = new Date().toISOString().slice(0, 10);
  fs.writeFileSync(path.join(RAIZ, 'sitemap.xml'),
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${NOVA}</loc>
    <lastmod>${hoje}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`);
  console.log(`  + sitemap.xml regerado (${hoje})`);

  const resto = fs.readFileSync(path.join(RAIZ, 'index.html'), 'utf8')
    .match(/sandrocarlosai\.github\.io/g);
  console.log(`\nSobrou apontando para o github.io: ${resto ? resto.length : 0}`);
  console.log('\nFalta commitar e dar push. No GitHub, confirme:');
  console.log('  Settings → Pages → Custom domain → Enforce HTTPS\n');
})();
