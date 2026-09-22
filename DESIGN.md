# DESIGN.md — Sistema visual UltraWork AI

Documento normativo. Nenhuma cor, fonte, espaçamento ou animação entra no site
sem estar aqui. Leia antes de criar ou editar qualquer tela.

---

## 1. Conceito: Amanhecer → Noite

O site **desce da luz para o escuro** conforme a pessoa rola a página.

Abre em off-white editorial — sóbrio, legível, humano: quem é o Sandro.
Termina em palco preto — imersivo, técnico, luminoso: o que a IA faz.

A transição não é enfeite, é argumento: reproduz a própria narrativa do site,
da pessoa para a máquina.

**Isto já existe no site — só não está declarado.** As seções `impacto` e `cta`
já usam `background: var(--ink)` e já acendem o verde neon `#4ade9a` (contraste
**11,45:1** sobre esse fundo, excelente). O que falta é tornar o movimento
deliberado e contínuo, em vez de dois blocos escuros isolados no meio de uma
página clara.

Referência de origem: era-residence.com (transição dia/noite por rolagem).

### Mapa dos palcos

| Seção | Palco | Papel |
|---|---|---|
| hero, manifesto, sobre | CLARO | Apresentação, leitura confortável |
| projetos | TRANSIÇÃO | Cruzamento gradual |
| impacto, diferenciais, visão, cta | ESCURO | Prova, números, imersão |

---

## 2. Paleta

Todo par de texto/fundo abaixo foi calculado pela fórmula WCAG 2.1. Nenhum
valor entra sem passar em **AA (4,5:1)** para texto corrido.

### Palco claro

| Token | Hex | Contraste vs `--bg` | Uso |
|---|---|---|---|
| `--bg` | `#fafaf8` | — | Fundo base |
| `--bg-2` | `#f3f3f0` | — | Superfície recuada |
| `--ink` | `#0e0e0c` | **18,49:1** | Títulos, texto principal |
| `--ink-2` | `#2c2c28` | **13,41:1** | Texto secundário |
| `--muted` | `#6f6f67` | **4,85:1** | Apoio, legendas |
| `--green` | `#1a6644` | **6,64:1** | Ação, links, destaque |
| `--line` | `rgba(14,14,12,0.10)` | — | Divisórias |

> **Corrigido:** `--muted` era `#8a8a82` (3,33:1, reprovava em 15 usos).
> **Removido:** `--muted2` `#b8b8b0` (1,91:1, reprovava em 4 usos).

### Texto translúcido no escuro — opacidade mínima

Branco translúcido sobre `--ink`/`--stage` é o padrão atual do site, e é onde
estão as piores falhas medidas:

| Seletor | Alpha atual | Contraste | Situação |
|---|---|---|---|
| `.impacto-l` | `0.38` | 3,46:1 | Reprova |
| `.impacto-copy .section-label` | `0.35` | 3,11:1 | Reprova |
| `.cta-tag` | `0.35` | 3,11:1 | Reprova |
| `.cta-sub` | `0.45` | 4,37:1 | Reprova por pouco |

**Regra: opacidade mínima `0.55`** para qualquer texto sobre palco escuro
(6,04:1). Abaixo disso, só elemento decorativo sem informação.

### Palco escuro

| Token | Hex | Contraste vs `--stage` | Uso |
|---|---|---|---|
| `--stage` | `#0b0b0a` | — | Fundo do palco |
| `--stage-2` | `#161614` | — | Cartão elevado |
| `--on-stage` | `#f5f5f0` | **18,00:1** | Títulos no escuro |
| `--on-stage-2` | `#a8a89e` | **8,21:1** | Texto secundário |
| `--stage3` | `#1e1e1b` | — | Superfície elevada (hover) |
| `--glow` | `#4ade9a` | **11,45:1** | Números, dados, sinal vivo |
| `--line-stage` | `rgba(245,245,240,0.12)` | — | Divisórias |
| `--dusk` | `#8f8f86` | — | Meio-tom da travessia (só no gradiente) |

### Como a travessia é implementada

**Nunca por porcentagem da página.** Cada seção escura declara o próprio
`background: var(--stage)`, e uma faixa `.travessia` de altura
`clamp(120px, 22vh, 260px)` faz o degradê entre `#projetos` e `#impacto`.

Medido: a página tem 8.082px e `#impacto` começa em 5.200px — **64,3%**.
Um gradiente fixo em 58% escureceria 512px cedo demais e jogaria texto claro
sobre fundo claro. A posição das seções muda com o conteúdo; a faixa dedicada
não erra nunca.

**Preto quente, não puro.** `#0b0b0a` em vez de `#000000`: conversa com o
off-white da marca. Preto puro ao lado de off-white parece erro de impressão.

### Exceção de marca — o azul UltraWork

A logo tem azul elétrico. O site não. Isso **não é um conflito a resolver
pintando um dos dois**: é a distinção normal entre paleta de marca e paleta
de produto. O azul entra como exceção documentada.

| Token | Hex | Contraste | Onde vive |
|---|---|---|---|
| `--marca-azul` | `#0b63d6` | **5,33:1** sobre `--bg` | Logo, palco claro |
| `--marca-azul-noite` | `#4da6ff` | **7,70:1** sobre `--stage` | Logo, palco escuro |
| `--marca-grafite` | `#3a3a36` | — | Face esquerda do símbolo |
| `--marca-prata` | `#c9c9c2` | — | Contorno e brilho metálico |
| `--marca-circuito` | `#bfe3ff` | — | Traços de circuito |
| `--marca-no` | `#eaf5ff` | — | Nós do circuito |

**Proibido** usar qualquer um destes em botão, link, fundo, texto corrido ou
destaque. Eles existem só onde a marca existe: navegação, rodapé e o símbolo
tridimensional. A cor de ação continua sendo `--green` / `--glow`.

Nenhum azul único passava em AA nos dois palcos — por isso são dois, espelhando
o par `--green`/`--glow` que o site já usa.

### A marca em três dimensões

O símbolo não é uma imagem colada: é uma das formas da nuvem de partículas do
hero. Quem chega vê **o "U" montado** à direita, com as duas faces da marca —
grafite à esquerda, azul à direita, divididas pela mesma diagonal do logotipo.
Ao rolar, ele se dissolve em torus knot e depois em constelação.

- **Slot `a` do shader** = marca · **`u`** = nó · **`b`** = constelação
- A geometria vem de amostragem por rejeição no mesmo perfil do SVG
  (externo `1.0`, interno `0.60`), extrudada em Z
- Com a marca montada, a nuvem quase não respira nem gira: marca é para ser
  lida, não para piscar

**O PNG de 2K da logo (1,78 MB) nunca entra na página** — pesa 20 vezes o site
inteiro (88 KB) e serrilha ao escalar. Fica em `marca/` como referência. Na tela, a
marca é SVG (~1,5 KB) e partículas (0 KB de rede).

### Regras de cor

- `--green` **só** no palco claro. `--glow` **só** no palco escuro. Nunca troque.
- Acento sinaliza ação ou dado — nunca decora fundo, nunca pinta seção inteira.
- Sem gradiente em componente de interface. Gradiente só em visual procedural
  (partículas, shader).
- **Proibido** gradiente roxo-azul, ícone em círculo colorido, cards idênticos
  em grade — o padrão "cara de IA".

---

## 3. Tipografia

Mantida a dupla atual — ela já é boa e é a identidade do Sandro.

| Família | Papel |
|---|---|
| **Cormorant Garamond** (300–600) | Display, títulos, ênfase em itálico |
| **DM Sans** (300–500) | Corpo, navegação, rótulos, dados |

### Escala (proporção 1,25 — terça maior)

| Passo | Tamanho | Peso | Entrelinha | Tracking | Uso |
|---|---|---|---|---|---|
| `display` | `clamp(2.75rem, 7.2vw, 6.25rem)` | 400 | 0,95 | −0,035em | Hero |

> `11vw` estourava a tela: a 1440px dava 158px por linha e jogava os botões
> para fora da primeira dobra. Medido no navegador, não estimado.
| `h1` | `clamp(2.5rem, 6vw, 5rem)` | 400 | 1,0 | −0,03em | Abertura de seção |
| `h2` | `clamp(1.75rem, 3.5vw, 3rem)` | 400 | 1,1 | −0,02em | Subseção |
| `h3` | `1.5rem` | 500 | 1,2 | −0,01em | Cartão |
| `body-lg` | `1.125rem` | 300 | 1,6 | 0 | Parágrafo de destaque |
| `body` | `1rem` | 300 | 1,65 | 0 | Corpo |
| `label` | `0.8125rem` | 500 | 1,3 | 0,12em | Rótulo em caixa alta |
| `caption` | `0.75rem` | 400 | 1,4 | 0,05em | Legenda |

**Hierarquia por escala, não por peso.** As três referências do Refero
(Dala, Apple, Auros) convergem nisso: nenhuma usa peso 700 em display. Tracking
negativo agressivo comprime o título em bloco escultural.

**Nunca** abaixo de `0.75rem`. **Nunca** peso 600+ em tamanho de display.

---

## 4. Grade e espaçamento

Base **8px**. Escala: `4 · 8 · 16 · 24 · 32 · 48 · 64 · 96 · 128 · 192`

| Medida | Valor |
|---|---|
| Largura máxima de conteúdo | `1280px` |
| Margem lateral | `6vw` (mín. `20px`, máx. `96px`) |
| Respiro entre seções | `clamp(96px, 12vh, 192px)` |
| Preenchimento de cartão | `32px` (`24px` no celular) |
| Espaço entre elementos | `16–24px` |

---

## 5. Raios e elevação

| Elemento | Raio |
|---|---|
| Cartão, moldura de mídia | `20px` |
| Botão | `9999px` (pílula) |
| Campo, etiqueta | `8px` |

### Sem sombra. Nenhuma.

As **seis** referências analisadas dispensam sombra — Apple e Auros dizem isso
explicitamente na spec. Profundidade vem de:

1. mudança de superfície (`--bg` → `--bg-2`, `--stage` → `--stage-2`)
2. filete de 1px (`--line`)
3. espaço em branco
4. no palco escuro: luz própria (`--glow` com `filter: blur()`)

Sombra é papel empilhado. Este site é luz e vidro.

---

## 6. Movimento

### Durações e curvas

| Papel | Duração | Curva |
|---|---|---|
| Microinteração (hover, foco) | `180ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Transição de estado | `320ms` | `cubic-bezier(0.4, 0, 0.2, 1)` |
| Revelação por rolagem | `800ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Entrada do hero | `1000ms` | `cubic-bezier(0.16, 1, 0.3, 1)` |

### O que anima

- Revelação de seção: opacidade + `translateY(24px)`, escalonada em 60ms
- Título do hero: entrada por linha, atraso de 120ms entre elas
- Contadores: sobem uma vez, ao entrar na tela
- Parallax: **máximo 12%** de deslocamento — acima disso embrulha o estômago
- Travessia dia/noite: interpolação das variáveis por progresso de rolagem

### O que NÃO anima

- O `<h1>` do hero e o botão de ação não podem esperar animação para serem
  lidos. Entram junto com a página.
- Texto corrido não sobe letra por letra.
- Nada pisca, nada pula, nada roda em laço eterno sem pausa.

### Acessibilidade do movimento — obrigatório

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Com movimento reduzido: tudo visível em estado final, WebGL desligado, marquee
parado. O site continua bonito — só fica quieto.

---

## 7. Efeitos avançados — orçamento e regras

**Regra mestra: efeito que atrasa a leitura é removido, por mais bonito que seja.**

### Orçamento de desempenho (inegociável)

| Métrica | Teto |
|---|---|
| Peso total, primeira visita | **≤ 500 KB** |
| HTML+CSS crítico | ≤ 60 KB |
| JS total | ≤ 120 KB |
| LCP no celular (4G) | ≤ 2,0 s |
| Quadros | 60 fps no desktop, 30 fps mínimo no celular |
| Lighthouse mobile | Performance ≥ 85 · Acessibilidade ≥ 90 |

### Catálogo autorizado

| Efeito | Técnica | Desktop | Celular |
|---|---|---|---|
| Cursor de máscara líquida | Shader WebGL sobre a mídia | ✅ | ❌ (sem cursor) |
| Desconstrução de imagem | Shader de deslocamento por ruído | ✅ | Estática |
| Explosão de partículas | GPU, `BufferGeometry` | ✅ | ≤ 30% das partículas |
| Cartão holográfico | Gradiente cônico CSS + `mix-blend-mode` | ✅ | ✅ (sem giroscópio) |
| Objeto 3D no hero | Geometria procedural, sem modelo externo | ✅ | Substituído por SVG |
| Rolagem suave | Lenis (~7 KB) | ✅ | ✅ |
| Parallax | `transform` no rAF | ✅ | Reduzido a 6% |

### Por que nada de vídeo nem fotografia

Um vídeo de hero custa 2–8 MB e destrói o LCP no 4G. **As referências mais
"milionárias" da lista não usam fotografia nenhuma** — a spec do Auros diz
literalmente: *"No photography, lifestyle imagery, or people. Pure data-graphics
and abstract forms."* Dala usa *"procedural particle visualizations"*.

O site atual tem **zero** tags `<img>`. Isso não é falta — é vantagem.

Movimento aqui vem de **geometria procedural gerada na GPU**: pesa ~40 KB de
código, roda a 60fps e nunca é um arquivo baixado. É assim que se tem imagem que
se desfaz e se reconstrói pesando menos que uma única foto.

### Degradação obrigatória

O site precisa estar **completo e bonito** sem nenhum efeito. Todo WebGL é
camada adicional, carregada depois do conteúdo, e desligada quando:

- não há suporte a WebGL
- `prefers-reduced-motion: reduce`
- largura < 768px (efeitos pesados)
- `navigator.hardwareConcurrency <= 4` ou `deviceMemory <= 4`
- a aba está em segundo plano (pausa o laço de render)

---

## 8. Botões e estados

| Estado | Regra |
|---|---|
| Padrão | Pílula, `--ink` sólido (claro) / `--glow` contornado (escuro) |
| Hover | Escala `1.02`, 180ms — nunca troca a cor de fundo por outra do sistema |
| Foco | `outline: 2px solid` acento, `outline-offset: 3px` — **nunca remover** |
| Ativo | Escala `0.98` |
| Toque | Alvo mínimo **44×44px**, sempre |

---

## 9. Mobile

Breakpoints: **375 · 768 · 1024 · 1440**

- Projeta-se para 375px primeiro. Se não funciona lá, não está pronto.
- Sem cursor personalizado. Sem hover como única forma de revelar informação.
- Sem rolagem horizontal — nenhuma exceção.
- Alvos de toque ≥ 44px com 8px de separação.
- Display do hero até `11vw`, para caber em 375px sem quebrar palavra.

---

## 10. Tom de voz

1. **Afirmação, não promessa.** "Sistemas que operam enquanto você dorme" —
   não "podemos ajudar a transformar seu negócio".
2. **Número concreto ou nada.** Sem dado real, corta a frase. Nunca invente
   cliente, prêmio ou porcentagem.
3. **Frase curta.** O título diz uma coisa só. Se precisa de vírgula para
   respirar, está longo.
