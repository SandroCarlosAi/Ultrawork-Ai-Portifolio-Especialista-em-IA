# DESIGN.md — Sistema visual UltraWork AI

Documento normativo. Nenhuma cor, fonte, espaçamento ou animação entra no site
sem estar aqui. Leia antes de criar ou editar qualquer tela.

---

## 1. Conceito: Palco único, escuro

**O site é preto do primeiro ao último pixel.** Não há travessia, não há metade
clara. Preto-azulado profundo, tipografia clara, e uma única cor viva: ciano
elétrico.

A direção não veio de referência de design — veio do repertório do Sandro:
Matrix, Exterminador do Futuro, sala de servidores, luz ciano no escuro. E bate
com a marca, que já é preta com azul elétrico e circuitos. A versão anterior
abria em off-white editorial; era bonita e era de outra pessoa.

### O que isso exige

Escuro perdoa menos que claro. Três regras que não existiam antes:

1. **Nada de preto puro.** `#070a0e` tem azul dentro. Preto puro num site
   cheio de luz ciano parece buraco, não profundidade.
2. **Profundidade por superfície, nunca por sombra.** Três níveis:
   `--bg` → `--bg2` → `--bg3`. Sombra não existe no escuro.
3. **Ciano só onde há ação ou dado.** Ciano em tudo vira ruído de neon.
   Ele marca o que se clica e o que se mede.

---

## 2. Paleta

Todos os pares foram calculados pela fórmula WCAG 2.1 sobre `--bg` `#070a0e`.

| Token | Hex | Contraste | Uso |
|---|---|---|---|
| `--bg` | `#070a0e` | — | Fundo, a página inteira |
| `--bg2` | `#0c1118` | — | Superfície recuada |
| `--bg3` | `#131a24` | — | Superfície elevada (hover) |
| `--ink` | `#eaf2fb` | **17,56:1** | Títulos e corpo |
| `--ink2` | `#b9c6d6` | **11,44:1** | Texto secundário |
| `--muted` | `#8fa0b4` | **7,42:1** | Apoio, legendas |
| `--green` / `--glow` | `#35d6ff` | **11,54:1** | **Ação e dado** |
| `--border` | `rgba(234,242,251,0.12)` | — | Divisórias |

> Os nomes `--green` e `--glow` foram mantidos de propósito: são referenciados
> em dezenas de regras, e o nome descreve o **papel** (cor de ação), não o
> matiz. Trocar o nome seria refatoração sem ganho.

Os aliases `--stage`, `--stage2`, `--on-stage` e `--on-stage2` continuam
existindo e apontam para os mesmos valores: o site todo é palco agora.

### Horizonte, não travessia

A faixa `.travessia` entre `#projetos` e `#impacto` deixou de ser um degradê
dia→noite. Virou um **horizonte de luz**: um brilho ciano rasante com uma linha
de 1px, marcando a virada da narrativa sem mudar o palco.

### Exceção de marca — o azul UltraWork

A logo tem azul elétrico, distinto do ciano de ação. Continua sendo exceção:

| Token | Hex | Contraste | Onde vive |
|---|---|---|---|
| `--marca-azul` | `#4da6ff` | **7,76:1** | Face direita do símbolo, "AI" |
| `--marca-grafite` | `#6b7787` | — | Face esquerda |
| `--marca-prata` | `#d7dee8` | — | Contorno metálico |
| `--marca-circuito` | `#bfe3ff` | — | Traços de circuito |

> **Clareado no escuro.** O grafite era `#3a3a36`, pensado para fundo claro.
> Sobre `#070a0e` ele sumia. Agora é `#6b7787`.

**Proibido** usar azul de marca em botão, link ou fundo. Ação é ciano.

### A marca em três dimensões

O símbolo não é imagem colada nem aproximação desenhada: as partículas são
**amostradas pixel a pixel do arquivo da logo** — forma E cor. Cada partícula
carrega a cor exata do ponto correspondente da marca, então o braço esquerdo
sai metálico e o direito sai azul com as trilhas de circuito.

Quem chega vê **a marca montada** à direita. Ao rolar, ela dissolve em torus
knot e depois em constelação.

**Por que data URI e não arquivo:** imagem carregada de `file://` contamina o
canvas e o navegador bloqueia a leitura de pixels — a marca real nunca
apareceria ao abrir o site do disco. Como data URI funciona em qualquer
contexto. Custo: 54 KB de base64; a página foi de 88 para 144 KB (teto 500).

A fonte é `marca/u-particulas.png` (182×196, fundo removido), extraída de
`marca/ultrawork-logo-3d.jpg`. **Se a logo mudar, regenere os dois** e refaça
o data URI — senão a nuvem segue mostrando a marca antiga.

- **Slot `a` do shader** = marca · **`u`** = nó · **`b`** = constelação
- Se a leitura de pixels falhar, entra uma marca procedural de reserva: o site
  nunca fica sem símbolo
- Nas outras duas formas, profundidade pela cor (claro ao fundo, ciano na
  frente), nunca por sombra

**O PNG de 2K da logo (1,78 MB) nunca entra na página** — pesa 20 vezes o site
inteiro e serrilha ao escalar. Fica em `marca/` como referência. Na tela, a
marca é SVG (~1,5 KB) e partículas (0 KB de rede).

### Regras de cor

- Ciano (`--green`/`--glow`) só em ação e dado. Nunca como fundo de seção.
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
