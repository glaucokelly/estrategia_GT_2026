# ESPECIFICAÇÃO COMPLETA: Página Estratégica GT Soluções Logísticas

> Este documento é a especificação para construir uma página web (GitHub Pages) com conteúdo estratégico para o CEO do Grupo Toniato.
> Use este arquivo como referência única. Todo o conteúdo, design, estrutura e dados dos gráficos estão aqui.

---

## INFORMAÇÕES TÉCNICAS

### Stack
- HTML + CSS + JavaScript puro (GitHub Pages, sem framework)
- Gráficos: Chart.js ou D3.js (linha neon, barras neon, donut)
- Scroll suave com Intersection Observer para animações de entrada
- Responsivo: mobile first, breakpoint principal em 768px

### Imagens (pasta /assets/images/)
- `hero-cd.png` — Foto aérea do centro de distribuição (usar como hero/capa)
- `caminhao-scania.jpg` — Caminhão Scania com marca Toniato na estrada
- `foto-antiga.jpg` — Foto P&B da Transportes Toniato original (anos 70/80)
- `time-celebrando.jpg` — Equipe GT celebrando em frente ao galpão
- `logo-gt.png` — Logo GT (G cinza + T azul) com fundo transparente
- `logo-grupo-toniato.jpeg` — Logo "GRUPO TONIATO" texto completo

### Paleta de Cores
```css
:root {
  --bg-primary: #0A0A0B;
  --bg-secondary: #111113;
  --bg-card: #161618;
  --bg-card-hover: #1C1C1F;
  --text-primary: #FAFAFA;
  --text-secondary: #A1A1AA;
  --text-muted: #52525B;
  --gt-blue: #1B3A6B;       /* azul escuro da marca GT */
  --neon-blue: #3B82F6;     /* gráficos, destaques de mercado */
  --neon-green: #10B981;    /* dados positivos, potências */
  --neon-red: #EF4444;      /* dados de urgência, riscos */
  --neon-amber: #F59E0B;    /* dados de atenção */
  --border: #27272A;
  --gradient-hero: linear-gradient(to left, transparent 30%, rgba(10,10,11,0.85) 70%, rgba(10,10,11,0.95) 100%);
}
```

### Tipografia
- Títulos: fonte moderna sem serifa, peso 700. Sugestão: "Plus Jakarta Sans" ou "DM Sans" (Google Fonts)
- Corpo: mesma família, peso 400/500
- Números grandes (cards de dados): peso 800, tamanho grande (48px+ desktop, 32px+ mobile)
- Fontes de gráficos/referências: peso 400, tamanho pequeno (11px-12px), cor var(--text-muted)
- SEM TRAVESSÕES em nenhum lugar do conteúdo. Usar dois pontos, vírgula ou ponto final.

---

## ESTRUTURA E CONTEÚDO

### MENU LATERAL (desktop) / MENU HAMBÚRGUER (mobile)

Menu fixo na lateral esquerda (desktop) com os nomes das seções como âncoras. No mobile, vira ícone hambúrguer no topo que abre menu overlay.

```
Itens do menu:
• Início
• O mercado agora
• A posição da GT
• O que pode ser feito
• Visão 2030
• Fontes
```

Logo GT pequeno no topo do menu (desktop) ou no header (mobile).

---

### SEÇÃO 0: HERO (Capa)

**Imagem:** `hero-cd.png` (foto aérea do CD) como background, cobrindo 100% da viewport.

**Overlay:** Gradiente da direita para a esquerda (lado direito da foto visível, lado esquerdo escurecido para o texto).

**Conteúdo (posicionado à esquerda, sobre a sombra):**

Logo GT pequeno no canto superior esquerdo.

Título principal (fonte branca, grande, moderna):
```
Análise estratégica
Grupo Toniato
```

Subtítulo (fonte menor, cor var(--text-secondary)):
```
Inteligência de mercado, posicionamento competitivo
e oportunidades mapeadas para os próximos anos.
```

Botão ou indicador de scroll para baixo (seta animada ou texto "Role para explorar").

**Altura:** 100vh (tela cheia).

**Mobile:** Mesma estrutura mas com gradient mais forte (texto precisa de mais contraste em tela pequena).

---

### SEÇÃO 1: O QUE VOCÊ VAI ENCONTRAR AQUI

**Fundo:** var(--bg-primary) sólido.

**Conteúdo:** Parágrafo único, centralizado, tipografia grande (20px desktop, 16px mobile), largura máxima 680px.

```
O setor de logística está passando pela maior transformação
tecnológica das últimas décadas. A maioria das empresas ainda
não percebeu. Algumas estão se movimentando. Poucas já têm
as peças certas na mão.

Este documento reúne dados de mercado, inteligência competitiva
e um plano de ação construído a partir de pesquisa em mais de
15 fontes internacionais especializadas. O objetivo: mostrar
onde está o espaço, quem está se movendo e o que pode ser feito agora.
```

**Visual:** Texto com animação de fade-in ao entrar na viewport. Sem gráficos, sem imagens. Limpo.

---

### SEÇÃO 2: O MERCADO AGORA

**Título da seção:** "O mercado agora"
**Fundo:** var(--bg-primary)

#### Card 2.1: Dado de impacto
Número grande centralizado com contexto.

```
Número: 13%
Texto: dos operadores logísticos no mundo reportam resultado
financeiro concreto com o uso de inteligência artificial.
Os outros 87% ainda estão testando ou nem começaram.
Fonte: Pesquisa global com mais de 180 líderes do setor, 2026
```

Visual: "13%" em tamanho enorme (72px+), cor var(--neon-blue), com o "87%" em var(--neon-red) quando mencionado no texto.

#### Gráfico 2.2: Mercado de IA em gestão de cadeia logística
```
Tipo: Linha
Estilo: Linha neon azul (var(--neon-blue)) com glow/shadow, pontos marcados
Fundo do gráfico: transparente ou var(--bg-secondary)
Eixo X: 2025, 2026, 2027, 2028, 2029, 2030
Eixo Y: US$ bilhões
Dados: 2 | 8 | 16 | 27 | 39 | 53
Label: "Projeção de gastos globais com IA aplicada a gestão de cadeia logística"
Fonte (abaixo do gráfico): "Gartner, abril 2026"
```

Animação: a linha desenha progressivamente quando entra na viewport.

#### Gráfico 2.3: Impacto da manutenção preditiva
```
Tipo: Barras horizontais
Estilo: Barras neon verde (var(--neon-green))
Dados:
  "Produtividade" → +25%
  "Paradas imprevistas" → -70% (cor var(--neon-red) invertido, mostrando redução)
  "Custos de manutenção" → -25% (cor var(--neon-red) invertido)
Label: "Impacto documentado da manutenção preditiva em frotas"
Fonte: "Deloitte"
```

#### Card 2.4: Caso real (interativo)
Dois cards lado a lado (ou empilhados no mobile):

```
Card esquerdo:
  Número: US$ 2.400
  Contexto: custo do reparo preventivo em 3 caminhões com falha prevista
  Detalhe (aparece ao passar o mouse ou tocar): "Modelos de IA detectaram
  degradação simultânea no sistema de refrigeração de 3 caminhões na mesma
  rota. Os veículos foram direcionados para manutenção preventiva durante
  parada programada."

Card direito:
  Número: US$ 187.000
  Contexto: custo projetado se a falha tivesse acontecido na estrada
  Detalhe (hover/toque): "Guincho, carga parada, multas por atraso,
  danos secundários ao motor e perda de janela de entrega ao cliente."

Fonte: OxMaint, 2026
```

Segundo dado abaixo: "Em outra operação, 80 caminhões monitorados geraram economia de US$ 1 milhão em 4 meses." (FleetRabbit, 2026)

#### Gráfico 2.5: Causas de atraso em manutenção de frota
```
Tipo: Donut
Estilo: Segmentos neon
Dados:
  31,5% — Falhas de comunicação (var(--neon-blue))
  27,4% — Técnico indisponível (var(--neon-amber))
  25,2% — Serviços não programados (var(--neon-red))
  15,9% — Outros (var(--text-muted))
Label: "Principais causas de atraso na manutenção de frotas"
Fonte: "Pesquisa com mais de 600 profissionais de gestão de frota, 2026"
```

Interatividade: ao passar o mouse ou tocar em cada segmento, destaca e mostra o label com percentual.

---

### SEÇÃO 3: A POSIÇÃO DA GT

**Título da seção:** "Onde a GT já está na frente"
**Fundo:** var(--bg-primary)

#### Bloco 3.1: Texto narrativo com foto

**Imagem:** `foto-antiga.jpg` (P&B) posicionada à direita (desktop) ou acima (mobile), com borda arredondada e leve glow var(--gt-blue).

**Texto (à esquerda):**
```
Uma empresa fundada em 1974 no interior do Rio de Janeiro, que
começou transportando tintas e vernizes e se especializou em
produtos químicos perigosos. Hoje opera com mais de 700 veículos
em mais de 16 unidades pelo Brasil. Atende Bayer há mais de 20
anos, Evonik há mais de 30 e Kemira há 50.

Em 2017, fundou um braço de tecnologia que desenvolveu um agente
de inteligência artificial próprio, um sistema de gestão de
transporte com mais de 10 anos de maturidade e uma torre de
controle logístico com IA. Tudo isso construído de dentro para fora.

Numa pesquisa global com mais de 180 líderes do setor (2026),
apenas 13% dos operadores logísticos no mundo declararam ter
resultado financeiro concreto com IA. A GT está nesse grupo.
```

#### Bloco 3.2: Matriz competitiva (interativa)

Grid visual (não tabela HTML). 5 linhas x 5 colunas.

```
Colunas (cabeçalho):
  GT | Operador A | Operador B | Operador C | Multinacional

Nota: não nomear concorrentes. Usar descrições no hover/toque:
  Operador A → "Maior operador logístico do Brasil. Receita superior a R$ 10 bilhões. Listado em bolsa. Opera em 9 países."
  Operador B → "Líder em logística automotiva. Listado em bolsa. Braço de inovação com startups."
  Operador C → "Frota de mais de 3.300 veículos. Especialista em petroquímico e agro."
  Multinacional → "Operador global. 22 mil funcionários no Brasil. Plano de dobrar operação em 5 anos."

Linhas:
  "IA nativa no sistema de gestão"     → GT: ✅ | A: ✗ | B: ✗ | C: ✗ | Multi: ✅
  "Torre de controle com IA"           → GT: ✅ | A: ✗ | B: ✗ | C: ✗ | Multi: ✅
  "IA integrada ao WhatsApp"           → GT: ✅ | A: ✗ | B: ✗ | C: ✗ | Multi: ✗
  "Tecnologia vendável a terceiros"    → GT: ✅ | A: ✗ | B: ✗ | C: ✗ | Multi: ✗
  "Foco 100% em químico como negócio principal" → GT: ✅ | A: ✗ | B: ✗ | C: ✗ | Multi: ✗
```

Visual: ✅ em cor var(--neon-green), ✗ em var(--neon-red) opaco. Hover em cada coluna destaca e mostra card com descrição do concorrente.

Mobile: scroll horizontal na tabela ou colapsar em cards.

#### Bloco 3.3: Reconhecimentos
Cards horizontais (scroll horizontal no mobile):

```
Card 1: "Parceiro Ouro" | Bayer 2025
Card 2: "Supply Chain Award" | Evonik 2025
Card 3: "Armazém Seguro 1º lugar" | Corteva 2024
Card 4: "Excelência em transporte químico" | Abiquim 2026
Card 5: "Finalista executivo do ano" | Prêmio nacional de logística 2025
```

Visual: cards com borda neon sutil, ícone de troféu/selo, fundo var(--bg-card).

#### Bloco 3.4: Ecossistema tecnológico

Diagrama visual simples:

```
Centro: "GT Soluções Logísticas" (operação)
Ao redor, conectados por linhas:
  → "IA conversacional (110 idiomas, integrada ao WhatsApp)"
  → "Sistema de gestão de transporte (9 módulos, 10+ anos)"
  → "Torre de controle logístico (gestão de exceções por IA)"
  → "Auditoria de fretes com IA"
  → "Plataforma de emissões (protocolo GHG)"
  → "13 agentes de IA personalizáveis por cliente"

Rodapé: "Parceiros de infraestrutura: AWS, Google Cloud, Microsoft"
```

Visual: diagrama minimalista com linhas neon, nodes arredondados, estilo tech.

---

### SEÇÃO 4: O QUE PODE SER FEITO

**Título da seção:** "O que pode ser feito hoje"
**Fundo:** var(--bg-primary)

#### Bloco 4.1: Comunicação motorista com IA

**Texto:**
```
O motorista é o sensor mais importante da operação. Se ele percebe
um problema no caminhão (barulho, vazamento, desgaste), na maioria
das vezes só consegue reportar quando chega ao destino. Com um canal
de inteligência artificial integrado ao WhatsApp, ele envia uma foto
e uma descrição. A IA classifica a urgência, identifica o tipo de
problema e aciona o mecânico mais próximo da rota se for grave. Se
não for, agenda o reparo no destino com a peça já solicitada. O tempo
entre "percebeu o problema" e "alguém foi acionado" cai de horas
para minutos.
```

**Dado de contexto:** "31,5% dos atrasos em manutenção de frota são causados por falhas de comunicação entre o motorista e a base." (Pesquisa com 600+ profissionais, 2026)

#### Bloco 4.2: Manutenção preditiva

**Fluxo visual "Antes vs. Depois":**

```
ANTES (fundo com tom vermelho sutil):
  Caminhão quebra → Guincho acionado → Entrega atrasada →
  Cliente insatisfeito → Custo alto

DEPOIS (fundo com tom verde sutil):
  Sistema prevê falha → Reparo agendado → Peça já disponível →
  Frota reorganizada → Zero impacto na entrega
```

Visual: dois blocos lado a lado (desktop) ou empilhados (mobile) com ícones simples em cada etapa. Setas conectando as etapas.

**Texto:**
```
Com mais de 700 veículos operando (a maioria com sensores embarcados
de fábrica), já existe uma base de dados capaz de alimentar modelos
de previsão de falhas. Temperatura do motor, pressão do óleo,
voltagem da bateria, desgaste de freios. O sistema identifica padrões
semanas antes da falha acontecer e aciona a cadeia de manutenção:
solicita a peça, reserva o mecânico, reorganiza a frota para que o
caminhão parado não comprometa nenhuma entrega.
```

**Dado:** "Nenhum concorrente nacional no setor oferece manutenção preditiva com IA integrada ao sistema de gestão de transporte."

#### Bloco 4.3: O time que já sabe a resposta

**Imagem:** `time-celebrando.jpg` como background com overlay escuro, texto sobre.

**Texto:**
```
Uma empresa com mais de mil colaboradores, muitos com anos e até
décadas na mesma operação. Eles conhecem cada detalhe, cada problema
recorrente, cada solução que nunca foi implementada porque não
existia a ferramenta.

Não se trata de substituir ninguém. Se trata de dar a essas pessoas
a capacidade de resolver o que elas sempre souberam que precisava
ser resolvido. Problemas empurrados há anos dentro de qualquer empresa
grande do setor agora podem ser endereçados pelo próprio time que
convive com eles todo dia.

Inteligência artificial não traz o conhecimento. O conhecimento já
existe. IA destrava ele.
```

**Cards de vagas reais (pesquisa LinkedIn):**
```
Grid de cards pequenos:
  Assistente Operacional | Paulínia, SP
  Analista de Faturamento | Santos, SP
  Assistente Operacional | Rio de Janeiro
  Assistente de Expedição | Paulínia, SP
  Assistente de Logística | Guarulhos, SP
  Técnico de Segurança | Paulínia, SP
  Assistente Operacional | Viana, ES
  Líder de Portaria | Paulínia, SP
```

**Texto abaixo dos cards:**
```
Vagas reais identificadas durante a pesquisa. Funções operacionais
em unidades que estão crescendo. Cada uma delas representa um
processo que pode ter sua produtividade amplificada. Crescer a
operação sem multiplicar o custo operacional na mesma proporção.
Isso é escalar de verdade.
```

#### Bloco 4.4: Posicionamento

**Texto curto:**
```
Mais de 40% dos contratantes de logística já consideram o uso de
inteligência artificial como critério na hora de escolher um
operador. Se a empresa já tem a tecnologia mas não comunica, o
mercado não sabe.
```

Fonte: Pesquisa global com 180+ líderes, 2026

---

### SEÇÃO 5: VISÃO 2030

**Título da seção:** "Visão 2030"
**Fundo:** var(--bg-primary)

#### Bloco 5.1: Primeiro, o Brasil

**Imagem:** `caminhao-scania.jpg` como elemento visual (não background).

**Texto:**
```
A expansão nacional já está em curso. Novos centros de distribuição
no Centro-Oeste (Campo Verde, Dourados, Rio Verde), presença
identificada em Santos e Viana. O plano é presença nacional até 2030.

Quando a operação nacional se consolida e a tecnologia prova seu
valor em cada nova unidade, o próximo passo deixa de ser ambição
e passa a ser consequência.
```

#### Bloco 5.2: Paraguai

**Gráfico: Produção de soja do Paraguai**
```
Tipo: Linha
Estilo: Linha neon verde (var(--neon-green)) com glow
Eixo X: 2020, 2021, 2022, 2023, 2024, 2025, 2026 (proj.), 2030 (proj.), 2032 (proj.)
Eixo Y: Milhões de toneladas
Dados: 10.5, 10.0, 4.2, 10.0, 10.3, 10.0, 10.9, 11.5, 12.0
Label: "Produção de soja no Paraguai (milhões de toneladas)"
Fonte: "USDA, OECD"
Nota: 2022 foi seca histórica (queda para 4.2M), depois recuperação
```

Animação: linha desenha progressivamente.

**Texto:**
```
O Paraguai produz mais de 10 milhões de toneladas de soja por ano.
Para cada hectare plantado, são necessárias 2 a 3 aplicações de
agroquímicos. Quem fornece esses agroquímicos? Bayer, BASF, Corteva,
Syngenta. Os mesmos clientes que a GT atende no Brasil há décadas.

Não existe no Paraguai um operador logístico especializado em
transporte de cargas perigosas com o nível de tecnologia e
conformidade que essas multinacionais exigem. A infraestrutura
local é precária: o processamento industrial opera entre 50 e 80%
da capacidade por ineficiências logísticas.

A GT não precisa prospectar clientes no Paraguai. Precisa acompanhar
os que já tem.

O maior operador logístico do Brasil já opera lá, mas como
generalista. A GT entra como especialista. E quando a GT opera com
sua tecnologia, os concorrentes locais veem. E a GS vende para o
ecossistema que se forma ao redor.

O complexo sojero paraguaio gerou US$ 3,57 bilhões em exportações
em 2025. O sistema de gestão de transporte e a IA da GT já operam
em espanhol. São 110 idiomas disponíveis.
```

#### Bloco 5.3: Boston e Houston

**Gráfico: repetir/expandir o de US$ 2B → US$ 53B** (mesmos dados do Gráfico 2.2, mas agora contextualizado para a narrativa EUA)

**Texto:**
```
O comércio químico internacional cresceu 18% entre 2022 e 2024.
Nos Estados Unidos, 92% dos grandes contratantes de logística
química já operam em plataformas digitais. Mas os transportadores
de médio porte, especialmente os especializados em cargas perigosas,
ficaram para trás.

Não existe no mercado americano um sistema de gestão de transporte
construído especificamente para cargas perigosas com inteligência
artificial nativa. Esse é o espaço.

Duas bases, duas missões:

Boston: sede de desenvolvimento e inovação. O maior ecossistema
de biotecnologia e farmacêutico do mundo, que é a vertical
adjacente natural. Acesso a talento de inteligência artificial
nas melhores universidades do planeta. Um ecossistema maduro de
empresas de software, o mesmo que criou algumas das maiores
plataformas de tecnologia dos últimos anos. Investidores ativos
no setor. Uma sede em Boston posiciona a empresa de tecnologia
como empresa de tecnologia, ponto.

Houston: base comercial. A capital química dos Estados Unidos.
Onde estão as refinarias, as petroquímicas, os transportadores
de cargas perigosas e os clientes que a GT já conhece pelo nome:
Bayer, BASF, Dow, Corteva.

O desenvolvimento acontece no Brasil (custo em real), a receita
vem dos Estados Unidos (em dólar).
```

---

### SEÇÃO 6: FONTES

**Título da seção:** "Fontes"
**Fundo:** var(--bg-secondary)

Lista limpa, organizada em 3 colunas (desktop) ou 1 coluna (mobile):

```
Coluna 1: Pesquisas de mercado
  • BCG + Alpega, pesquisa com 180+ líderes (março 2026)
  • Gartner, previsão de IA em cadeia logística (abril 2026)
  • MarketsandMarkets, automação logística global (maio 2026)
  • Capgemini Research Institute (2025)

Coluna 2: Dados de frota e operações
  • Fleetio, pesquisa com 600+ profissionais (2026)
  • Deloitte, manutenção preditiva
  • OxMaint, FleetRabbit, Intangles (2026)
  • Genial Investimentos, análise setorial

Coluna 3: Dados internacionais e da empresa
  • USDA Foreign Agricultural Service (Paraguai)
  • OECD, CAPPRO, Mordor Intelligence
  • Intel Market Research (logística química EUA)
  • grupotoniato.com.br, gs.com.vc, oisara.ai, webcol.systems
  • LinkedIn, Econodata, Receita Federal
```

**Rodapé:** "Pesquisa realizada em maio de 2026" + logo GT pequeno.

---

## ESPECIFICAÇÕES DE RESPONSIVIDADE

### Desktop (>768px)
- Menu lateral fixo à esquerda (largura ~200px)
- Conteúdo à direita com max-width ~900px
- Gráficos: 100% da largura do conteúdo
- Cards lado a lado (2 colunas)
- Imagens lado a lado com texto

### Mobile (<768px)
- Menu hambúrguer no topo (header fixo com logo + ícone)
- Menu overlay ao abrir (fundo escuro, links centralizados)
- Conteúdo em coluna única, padding lateral 20px
- Gráficos: 100% da largura, scroll horizontal se necessário
- Cards empilhados (1 coluna)
- Imagens acima do texto (full width)
- Hero: gradient mais forte para garantir legibilidade
- Números grandes: reduzir de 72px para 48px
- Matriz competitiva: scroll horizontal ou colapsar em accordion

---

## ESPECIFICAÇÕES DE ANIMAÇÃO

- Seções: fade-in + slide-up suave ao entrar na viewport (Intersection Observer)
- Gráficos de linha: a linha desenha progressivamente (animação de path)
- Números grandes: contagem animada de 0 até o valor (ex: 0 → 13%)
- Cards: leve scale-up no hover (1.02)
- Menu lateral: item ativo muda de cor conforme scroll (scroll spy)
- Hero: parallax sutil no scroll (imagem move mais devagar que o conteúdo)
- NÃO usar animações que atrasem a leitura. Tudo deve ser sutil e rápido (300-500ms).

---

## NOTAS IMPORTANTES PARA O CLAUDE CODE

1. Sem travessões no conteúdo. Usar dois pontos, vírgula ou ponto final.
2. Linguagem 100% em português. Sem termos em inglês no conteúdo visível.
3. Os concorrentes na matriz competitiva NÃO são nomeados. Usar descrições genéricas.
4. O número de colaboradores é "mais de mil" ou "entre 1.000 e 2.000". Não usar 2.300.
5. Quando falar de IA e colaboradores: não citar ferramentas específicas (SARA, WebCOL) nesse contexto. Falar de IA como capacidade geral que destrava o conhecimento que o time já tem.
6. Nas seções técnicas sobre a GS, aí sim citar SARA, WebCOL, Torre de Controle pelos nomes.
7. Prioridade em responsividade mobile. O CEO pode abrir no celular.
8. Gráficos com efeito neon: usar box-shadow com a cor do neon (ex: `box-shadow: 0 0 10px var(--neon-blue)`) e stroke com glow.
9. Performance: lazy load nas imagens, gráficos renderizam quando entram na viewport.
