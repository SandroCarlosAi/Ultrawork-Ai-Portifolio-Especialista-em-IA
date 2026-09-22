# Sandro Carlos Silva — UltraWork AI

Portfólio de **Sandro Carlos Silva**, CEO da UltraWork AI — especialista em
Inteligência Artificial aplicada a negócios. Belo Horizonte, MG.

🔗 **Site no ar:** https://ultraworkai.com.br/

---

## Sobre o projeto

Site de página única, sem framework e sem etapa de build: um `index.html` com
CSS e JavaScript embutidos. A escolha é deliberada — carrega em uma requisição,
não tem dependência para quebrar e publica direto pelo GitHub Pages.

**Estrutura:** hero · manifesto · sobre · projetos · impacto · diferenciais ·
visão · contato

## Stack

| Item | Escolha |
|---|---|
| Marcação | HTML5 semântico, arquivo único |
| Estilo | CSS puro com tokens em `:root` |
| Tipografia | Cormorant Garamond (serifada) + DM Sans (sans) |
| Animação | `IntersectionObserver` nativo para revelar seções |
| 3D | WebGL escrito à mão, sem biblioteca (~6 KB) |
| Imagens | 15 em WebP, todas lazy (382 KB) — o resto é tipografia, SVG e partículas |
| Publicação | GitHub Pages |

## A marca

O símbolo "U" aparece em três lugares, sempre vetorial ou procedural:

- **Navegação e rodapé** — SVG inline com as duas faces (grafite/azul) e
  circuitos luminosos, ~1,5 KB
- **Hero** — nuvem de partículas 3D que chega montada no símbolo e se dissolve
  em nó e constelação conforme a página rola
- **`marca/ultrawork-logo.png`** — referência de identidade, **não usada na
  página** (1,78 MB: 20× o site inteiro)

Regras de uso do azul da marca: veja [DESIGN.md](DESIGN.md) §2.

## Rodar localmente

Como não há build, basta abrir o arquivo:

```bash
git clone https://github.com/SandroCarlosAi/Ultrawork-Ai-Portifolio-Especialista-em-IA.git
cd Ultrawork-Ai-Portifolio-Especialista-em-IA
start index.html      # Windows
```

Para testar com servidor (recomendado, evita restrição de origem):

```bash
npx serve .           # abre em http://localhost:3000
```

## Diretrizes visuais

Antes de alterar qualquer tela, leia o **[DESIGN.md](DESIGN.md)**: paleta,
tipografia, espaçamento, movimento e regras de acessibilidade. Nenhuma cor,
fonte ou espaçamento fora daquele sistema entra no site.

## Contato

[WhatsApp](https://wa.me/5531991801259) · Belo Horizonte, MG
