# CLAUDE.md — Portfólio UltraWork AI

## Regra número um

**Leia o [DESIGN.md](DESIGN.md) antes de criar ou editar qualquer tela.**

Nenhuma cor, fonte, tamanho, espaçamento, raio ou animação entra neste site sem
estar declarado lá. Valor solto no CSS é defeito, não atalho.

## O projeto

Portfólio de página única de Sandro Carlos Silva (UltraWork AI). Um `index.html`
com CSS e JS embutidos. Sem framework, sem build, sem dependência. Publicado no
GitHub Pages.

Essa simplicidade é uma decisão, não uma limitação. Não introduza framework,
bundler ou gerenciador de pacotes sem pedir.

## Antes de dar qualquer tarefa por pronta

1. **375px.** Abra em 375px de largura. Se quebra lá, não está pronto.
2. **Contraste.** Todo par texto/fundo novo precisa passar em AA (4,5:1).
   Calcule, não estime. Sobre palco escuro, opacidade mínima `0.55`.
3. **Movimento reduzido.** Com `prefers-reduced-motion: reduce`, o site fica
   legível e bonito, só parado.
4. **Teclado.** Foco visível em todo elemento interativo. Nunca `outline: none`
   sem substituto.
5. **Orçamento.** Peso total ≤ 500 KB, JS ≤ 120 KB, LCP ≤ 2s no 4G.

## Nunca faça sem perguntar

- Alterar ou remover o link do WhatsApp (`wa.me/5531991801259`) — é a única
  ação de conversão do site.
- Mexer no `<title>` ou nas metatags.
- Adicionar vídeo ou fotografia. O site tem zero `<img>` de propósito; movimento
  vem de geometria procedural na GPU. Veja DESIGN.md §7.
- Usar o azul da marca (`--marca-azul`, `--marca-azul-noite`) fora da logo.
  É exceção de marca, não cor de interface. Ação continua sendo `--green`/`--glow`.
- Trocar o SVG da marca pelo PNG de `marca/ultrawork-logo.png`. O PNG é
  referência de identidade (1,78 MB); na tela a marca é vetor e partículas.
- Alterar a geometria do símbolo "U" — nem no SVG, nem na amostragem 3D.
  Proporção externa `1.0` / interna `0.60` é a identidade da marca.
- Inventar número, cliente, depoimento, prêmio ou porcentagem. Sem dado real,
  marque `[PREENCHER]`.
- Commit na `main` ou deploy.

## Dados pendentes de confirmação

Os números do hero ainda não foram confirmados pelo Sandro:

- `10+` projetos com IA
- `7+` agentes construídos

Não os aumente, não os arredonde, não os use em outras seções até confirmação.

## Convenções de código

- Português do Brasil no conteúdo e nos comentários.
- Classes em kebab-case, seguindo o padrão de seção existente
  (`hero-title`, `impacto-n`, `cta-sub`).
- Tokens CSS em `:root`, nomes semânticos (`--ink`, `--stage`), nunca
  descritivos de cor (`--verde-claro`).
- HTML semântico: `<section>` com `id`, um `<h1>` só, hierarquia sem pular nível.
