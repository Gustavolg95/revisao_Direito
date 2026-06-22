// ── TABS ──
function trocarAba(aba) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(aba).classList.add('active');
  event.target.classList.add('active');
}

// ── ACCORDION ──
function toggle(id) {
  const item = document.getElementById(id);
  const body = item.querySelector('.acc-body');
  const isOpen = item.classList.contains('open');
  // fechar todos
  document.querySelectorAll('.acc-item').forEach(i => {
    i.classList.remove('open');
    i.querySelector('.acc-body').style.maxHeight = '0';
  });
  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

// ── QUESTÕES ──
const questoes = [
  {
    q: "Segundo Bittar (2021), toda descrição do conceito de sistema jurídico apresenta dois traços internos comuns. Quais são eles?",
    opts: [
      "Coerência e completude",
      "Ordenação e unidade",
      "Hierarquia e validade",
      "Eficácia e vigência"
    ],
    certa: 1,
    exp: "Bittar, seguindo Claus Wilhelm Canaris, identifica que todo sistema jurídico, independentemente da definição doutrinária adotada, apresenta: 1) ordenação (ou organização) e 2) unidade (ou centralidade)."
  },
  {
    q: "A Teoria do Ordenamento Jurídico, introduzida pelo positivismo jurídico, surgiu da necessidade de dar unidade às normas jurídicas esparsas. Segundo Bobbio (2006), qual era o seu principal objetivo?",
    opts: [
      "Ampliar o papel do juiz na criação do direito",
      "Permitir o diálogo entre fontes jurídicas distintas",
      "Evitar incerteza e arbítrio no ordenamento",
      "Reconhecer as lacunas como inerentes ao sistema"
    ],
    certa: 2,
    exp: "Bobbio (2006, p. 197-198) aponta que a Teoria do Ordenamento Jurídico surgiu da necessidade de dar unidade às normas esparsas, com o objetivo de evitar incerteza e arbítrio no ordenamento."
  },
  {
    q: "Na teoria de Kelsen, a 'Grundnorm' (Norma Fundamental) cumpre um papel central. Qual afirmação a descreve corretamente?",
    opts: [
      "É a Constituição Federal, positivada pelo poder constituinte originário",
      "É uma norma pressuposta que não deriva de outra norma, evitando regressão infinita na busca de fundamento",
      "É a norma infraconstitucional que dá suporte às demais normas do sistema",
      "É editada pelo Poder Judiciário para garantir a autonomia do sistema"
    ],
    certa: 1,
    exp: "A Grundnorm kelseniana não é a Constituição positiva. É uma norma pressuposta (não positivada), que serve de fundamento último de validade do sistema, evitando que a busca por fundamento regresse ao infinito."
  },
  {
    q: "O conflito entre a Lei Municipal nº 101/2025 (lazer infantil em todas as praças) e a Lei Municipal nº 102/2025 (silêncio na Praça das Palmeiras) apresentado no caso prático é um exemplo de:",
    opts: [
      "Lacuna ontológica",
      "Antinomia imprópria de princípios",
      "Antinomia própria — conflito formal entre normas",
      "Lacuna técnica por ausência de regulamentação"
    ],
    certa: 2,
    exp: "O caso da praça é uma antinomia própria: há contradição formal entre as normas — para obedecer uma (instalar brinquedos), é necessário desobedecer a outra (proibição de ruído). Não se trata de lacuna nem de antinomia imprópria."
  },
  {
    q: "Segundo Bobbio, para resolver antinomias jurídicas, a jurisprudência consolidou três critérios tradicionais. O enunciado 'lex specialis derogat legi generali' corresponde ao critério:",
    opts: [
      "Cronológico",
      "Hierárquico",
      "De especialidade",
      "De ponderação"
    ],
    certa: 2,
    exp: "'Lex specialis derogat legi generali' (a lei especial derroga a lei geral) é a máxima do critério de especialidade, que se baseia no grau de especialização da matéria regulada."
  },
  {
    q: "Ao analisar um conflito entre uma norma superior-anterior e uma norma inferior-posterior, qual metacritério deve prevalecer?",
    opts: [
      "O cronológico, pois a norma posterior é mais atual",
      "O hierárquico, pois norma superior não pode ser ab-rogada por norma inferior",
      "O de especialidade, pois deve-se analisar o conteúdo da norma",
      "O de ponderação, pois ambos os critérios têm igual peso"
    ],
    certa: 1,
    exp: "Quando o critério cronológico e o hierárquico colidem, prevalece o hierárquico. Permitir que norma inferior posterior revogue norma superior esvaziaria o princípio da hierarquia normativa (Lex posterior inferiori non derogat priori superiori)."
  },
  {
    q: "A técnica do 'diálogo das fontes', desenvolvida por Erik Jayme e recepcionada no Brasil por Claudia Lima Marques, representa uma inovação em relação aos critérios tradicionais de solução de antinomias porque:",
    opts: [
      "Elimina a necessidade de aplicação dos critérios cronológico, hierárquico e de especialidade",
      "Substitui a noção de conflito entre leis pela de coordenação, orientada pela proteção dos direitos fundamentais",
      "Determina sempre a prevalência do Código de Defesa do Consumidor sobre outras normas",
      "Exige a revogação expressa de uma das normas em conflito antes da aplicação"
    ],
    certa: 1,
    exp: "O diálogo das fontes não elimina os critérios tradicionais, mas os reformula (coerência, complementação, adaptação) e substitui a lógica do conflito pela de coordenação, orientada pela efetivação dos direitos e valores fundamentais."
  },
  {
    q: "Uma norma constitucional que reconhece direito à aposentadoria especial, mas depende de lei regulamentadora que o legislador não editou, gerando impossibilidade de fruição do direito, configura:",
    opts: [
      "Lacuna axiológica",
      "Lacuna de conflito",
      "Lacuna técnica",
      "Antinomia total-parcial"
    ],
    certa: 2,
    exp: "A lacuna técnica ocorre quando falta norma cuja presença é condição necessária para a eficácia de outra norma (geralmente superior). A ausência de lei regulamentadora que viabilize o exercício de direito constitucional é o exemplo clássico."
  },
  {
    q: "O art. 140 do CPC determina que 'o juiz não se exime de decidir sob a alegação de lacuna ou obscuridade do ordenamento jurídico'. Esse dispositivo relaciona-se diretamente com qual propriedade do sistema jurídico?",
    opts: [
      "Unidade — o direito deve ser visto como todo integrado",
      "Coerência — eliminação de antinomias",
      "Completude — a proibição do non liquet e a obrigação de sempre julgar",
      "Hierarquia — subordinação das normas inferiores às superiores"
    ],
    certa: 2,
    exp: "A completude, para Bobbio, exige que: (1) o juiz seja obrigado a julgar todas as controvérsias (proibição do non liquet) e (2) julgue com base em norma pertencente ao sistema. O art. 140 do CPC é expressão direta dessa exigência."
  },
  {
    q: "Sobre os tipos de lacuna classificados por Bobbio, assinale a alternativa CORRETA:",
    opts: [
      "Lacuna real é aquela que depende de um juízo de valor do julgador sobre a injustiça da norma existente",
      "Lacuna subjetiva é causada pelo desenvolvimento das relações sociais, independentemente da vontade do legislador",
      "Lacuna voluntária é aquela deixada de propósito pelo legislador, confiando ao juiz a regulação caso a caso",
      "Lacuna inter legem ocorre quando as regras são muito particulares e não compreendem todos os casos"
    ],
    certa: 2,
    exp: "Lacuna voluntária é aquela deixada intencionalmente pelo legislador quando a matéria é muito complexa, confiando-a à interpretação do juiz caso a caso. Já a lacuna real é a ausência fática de normas; a subjetiva é imputável ao legislador; a inter legem surge quando normas muito gerais revelam vazios internos."
  }
];

let qAtual = 0;
let respostas = [];
let respondeu = false;

function iniciarSimulado() {
  document.getElementById('sim-intro').style.display = 'none';
  document.getElementById('sim-quiz').style.display = 'block';
  qAtual = 0;
  respostas = [];
  renderQuestao();
}

function renderQuestao() {
  respondeu = false;
  const total = questoes.length;
  const q = questoes[qAtual];
  document.getElementById('barra').style.width = ((qAtual / total) * 100) + '%';
  document.getElementById('contador').textContent = `Questão ${qAtual + 1} de ${total}`;
  document.getElementById('btn-prox').style.display = 'none';

  const letras = ['A', 'B', 'C', 'D'];
  const html = `
    <div class="q-card">
      <div class="q-num">Questão ${qAtual + 1}</div>
      <div class="q-text">${q.q}</div>
      <div class="q-options" id="opts">
        ${q.opts.map((o, i) => `
          <button class="q-opt" onclick="responder(${i})" id="opt${i}">
            <span class="letra">${letras[i]}</span>
            <span>${o}</span>
          </button>
        `).join('')}
      </div>
      <div class="feedback" id="feedback"></div>
    </div>
  `;
  document.getElementById('area-questao').innerHTML = html;
}

function responder(idx) {
  if (respondeu) return;
  respondeu = true;
  const q = questoes[qAtual];
  const acertou = idx === q.certa;
  respostas.push({ q: q.q, minha: idx, certa: q.certa, opts: q.opts, exp: q.exp, acertou });

  document.querySelectorAll('.q-opt').forEach(b => b.disabled = true);
  document.getElementById(`opt${q.certa}`).classList.add('certa');
  if (!acertou) document.getElementById(`opt${idx}`).classList.add('errada');

  const fb = document.getElementById('feedback');
  fb.classList.add('show');
  if (acertou) {
    fb.classList.add('acerto');
    fb.innerHTML = `<strong>✅ Correto!</strong>${q.exp}`;
  } else {
    fb.classList.add('erro');
    fb.innerHTML = `<strong>❌ Incorreto.</strong>${q.exp}`;
  }
  document.getElementById('btn-prox').style.display = 'block';
  document.getElementById('btn-prox').textContent = qAtual < questoes.length - 1 ? 'Próxima →' : 'Ver resultado';
}

function proximaQuestao() {
  qAtual++;
  if (qAtual < questoes.length) {
    renderQuestao();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById('sim-quiz').style.display = 'none';
  const res = document.getElementById('sim-resultado');
  res.style.display = 'block';
  const acertos = respostas.filter(r => r.acertou).length;
  document.getElementById('score-num').textContent = acertos;
  document.getElementById('score-total').textContent = `de ${questoes.length}`;

  let msg, sub;
  const pct = acertos / questoes.length;
  if (pct >= .9) { msg = '🏆 Excelente!'; sub = 'Você dominou o conteúdo de Direito como Sistema!'; }
  else if (pct >= .7) { msg = '🎯 Muito bom!'; sub = 'Revise os tópicos das questões erradas e você vai arrasar!'; }
  else if (pct >= .5) { msg = '📚 Continue estudando!'; sub = 'Releia o resumo com atenção e tente novamente.'; }
  else { msg = '💪 Não desanime!'; sub = 'Revise toda a unidade e refaça o simulado. Você consegue!'; }

  document.getElementById('resultado-msg').textContent = msg;
  document.getElementById('resultado-sub').textContent = sub;

  const letras = ['A', 'B', 'C', 'D'];
  const reviewHtml = respostas.map((r, i) => `
    <div class="review-item">
      <div class="r-q"><strong>Q${i + 1}.</strong> ${r.q}</div>
      <div class="r-sua ${r.acertou ? 'ok' : 'nok'}">
        ${r.acertou ? '✅' : '❌'} Sua resposta: ${letras[r.minha]} — ${r.opts[r.minha]}
      </div>
      ${!r.acertou ? `<div class="r-certa">✔ Correta: ${letras[r.certa]} — ${r.opts[r.certa]}</div>` : ''}
      <div class="r-exp">${r.exp}</div>
    </div>
  `).join('');
  document.getElementById('review').innerHTML = `<h3 style="margin-bottom:1rem;font-family:'Playfair Display',serif">Revisão das questões</h3>${reviewHtml}`;
}

function reiniciar() {
  document.getElementById('sim-resultado').style.display = 'none';
  document.getElementById('sim-intro').style.display = 'block';
}