# Direito como Sistema — CEUB

Resumo interativo e simulado sobre a Unidade 3 da disciplina **Fundamentos do Direito**, baseado na apresentação da Prof.ª Luciana Barbosa Musse (CEUB 2026).

🔗 **[Acesse o site ao vivo](https://gustavolg95.github.io/revisao_Direito/)**

---

## Estrutura do projeto

```
direito-sistema/
├── index.html    # Estrutura da página (HTML)
├── style.css     # Estilos e layout (CSS)
├── script.js     # Lógica do simulado e acordeão (JavaScript)
└── README.md     # Este arquivo
```

---

## Como usar:

1. Baixe ou clone os arquivos para uma pasta local
2. Abra o arquivo `index.html` no navegador
3. Nenhuma instalação ou dependência é necessária — o projeto roda direto no navegador

> **Dica no VS Code:** instale a extensão **Live Server** (ritwickdey.LiveServer), clique com o botão direito no `index.html` e selecione *"Open with Live Server"* para ver as alterações em tempo real.

---

## Funcionalidades:

### Aba Resumo
- 10 tópicos organizados em acordeão expansível
- Conteúdo sobre: sistema jurídico, positivismo, teoria de Kelsen, unidade, coerência, antinomias, critérios de solução, diálogo das fontes, completude, lacunas e caso prático

### Aba Simulado
- 10 questões de múltipla escolha
- Feedback imediato com explicação a cada resposta
- Barra de progresso
- Resultado final com pontuação e revisão completa das questões

---

## Tecnologias utilizadas:

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura e conteúdo |
| CSS3 | Layout, variáveis de cor, animações |
| JavaScript (vanilla) | Lógica do simulado e acordeão |
| Google Fonts | Tipografia (Playfair Display + Inter) |

---

## Conteúdo abordado:

- O que é Sistema Jurídico (Bittar, Teixeira de Sousa)
- Positivismo × Pós-Positivismo
- Teoria de Kelsen e a Pirâmide Normativa (Grundnorm)
- Unidade do Ordenamento Jurídico (Carnelutti, Sgarbi)
- Coerência e Antinomias Jurídicas (Bobbio, Ferraz Jr.)
- Critérios para solução de antinomias (cronológico, especialidade, hierárquico)
- Diálogo das Fontes (Erik Jayme, Claudia Lima Marques)
- Ponderação de Princípios (Robert Alexy)
- Completude e Lacunas Jurídicas (Bobbio, Diniz, Sgarbi)
- Caso Prático: A Praça Silenciosa

---

## Como editar:

- **Adicionar questões:** edite o array `questoes` no arquivo `script.js`
- **Alterar cores:** edite as variáveis CSS em `:root` no arquivo `style.css`
- **Adicionar tópicos no resumo:** copie um bloco `.acc-item` no `index.html` e atribua um novo `id`

---

*Site desenvolvido para auxiliar nos estudos uma grande amiga no curso de Direito*
