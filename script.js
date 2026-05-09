'use strict';

/* ============================================================
   UTILITÁRIOS
   ============================================================ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

/* ============================================================
   MENU HAMBÚRGUER
   ============================================================ */
(function initMenu() {
  const btn     = $('#hamburger');
  const overlay = $('#menuOverlay');
  const links   = $$('.mobile-nav .nav-link');

  function toggle(open) {
    btn.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    overlay.setAttribute('aria-hidden', !open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', () => toggle(!btn.classList.contains('open')));

  links.forEach(a => a.addEventListener('click', () => toggle(false)));

  overlay.addEventListener('click', e => {
    if (e.target === overlay) toggle(false);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') toggle(false);
  });
})();

/* ============================================================
   SCROLL SPY: destaca item ativo no menu lateral
   ============================================================ */
(function initScrollSpy() {
  const sections = $$('section[id]');
  const navLinks = $$('.sidebar-nav .nav-link');

  function onScroll() {
    const scrollY = window.scrollY + window.innerHeight * 0.35;
    let current = sections[0]?.id ?? '';

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    navLinks.forEach(a => {
      a.classList.toggle('active', a.dataset.section === current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ============================================================
   PARALLAX HERO
   ============================================================ */
(function initParallax() {
  const heroBg = $('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    heroBg.style.transform = `scale(1.05) translateY(${y * 0.25}px)`;
  }, { passive: true });
})();

/* ============================================================
   ANIMAÇÕES DE ENTRADA (Intersection Observer)
   ============================================================ */
(function initAnimations() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );

  $$('.animate-in').forEach(el => observer.observe(el));
})();

/* ============================================================
   CONTAGEM ANIMADA DE NÚMEROS
   ============================================================ */
(function initCounters() {
  const counters = $$('.count-up');

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (!e.isIntersecting) return;
      observer.unobserve(e.target);
      animateCount(e.target);
    }),
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));

  function animateCount(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix ?? '';
    const duration = 1200;
    const start = performance.now();

    function frame(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
  }
})();

/* ============================================================
   FLIP CARDS (caso real)
   ============================================================ */
(function initFlipCards() {
  $$('.case-card').forEach(card => {
    function toggle() {
      card.classList.toggle('flipped');
    }
    card.addEventListener('click', toggle);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });
  });
})();

/* ============================================================
   TOOLTIP DA MATRIZ COMPETITIVA
   ============================================================ */
(function initMatrixTips() {
  const tipCard = $('#matrixTip');
  const headers = $$('.comp-col[data-tip]');

  function show(text) {
    tipCard.textContent = text;
    tipCard.classList.add('visible');
  }

  function hide() {
    tipCard.classList.remove('visible');
    tipCard.textContent = '';
  }

  headers.forEach(h => {
    h.addEventListener('mouseenter', () => show(h.dataset.tip));
    h.addEventListener('mouseleave', hide);
    h.addEventListener('focus',      () => show(h.dataset.tip));
    h.addEventListener('blur',       hide);
    h.addEventListener('click',      () => {
      if (tipCard.classList.contains('visible') && tipCard.textContent === h.dataset.tip) {
        hide();
      } else {
        show(h.dataset.tip);
      }
    });
  });
})();

/* ============================================================
   PLUGIN NEON GLOW PARA CHART.JS
   ============================================================ */
const neonGlowPlugin = {
  id: 'neonGlow',
  beforeDatasetsDraw(chart) {
    chart.ctx.save();
  },
  beforeDatasetDraw(chart, args) {
    const ds = chart.data.datasets[args.index];
    const color = ds.glowColor ?? ds.borderColor;
    if (!color) return;
    chart.ctx.shadowColor = color;
    chart.ctx.shadowBlur  = 14;
  },
  afterDatasetDraw(chart) {
    chart.ctx.shadowColor = 'transparent';
    chart.ctx.shadowBlur  = 0;
  },
  afterDatasetsDraw(chart) {
    chart.ctx.restore();
  }
};

Chart.register(neonGlowPlugin);

/* ============================================================
   CONFIGURAÇÃO GLOBAL DO CHART.JS
   ============================================================ */
Chart.defaults.color            = '#52525B';
Chart.defaults.font.family      = "'Plus Jakarta Sans', system-ui, sans-serif";
Chart.defaults.font.size        = 12;
Chart.defaults.borderColor      = '#27272A';

/* ============================================================
   HELPER: criar gráfico quando elemento entra na viewport
   ============================================================ */
function onVisible(canvasId, callback) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  let created = false;
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !created) {
      created = true;
      observer.disconnect();
      callback(canvas);
    }
  }, { threshold: 0.2 });

  observer.observe(canvas);
}

/* ============================================================
   DADOS COMPARTILHADOS
   ============================================================ */
const iaLabels = ['2025', '2026', '2027', '2028', '2029', '2030'];
const iaData   = [2, 8, 16, 27, 39, 53];

const fillAlpha = {
  '#3B82F6': 'rgba(59,130,246,0.09)',
  '#10B981': 'rgba(16,185,129,0.09)',
};

function buildLineDatasets(data, color, label) {
  return [
    {
      label,
      data,
      borderColor:          color,
      borderWidth:          2.5,
      pointBackgroundColor: color,
      pointBorderColor:     '#0A0A0B',
      pointBorderWidth:     2,
      pointRadius:          5,
      pointHoverRadius:     7,
      tension:              0.4,
      fill:                 { target: 'origin', above: fillAlpha[color] ?? 'rgba(255,255,255,0.04)' },
      glowColor:            color,
    }
  ];
}

/* ============================================================
   GRÁFICO 2.2 — IA em logística (linha azul)
   ============================================================ */
onVisible('chartIA', canvas => {
  new Chart(canvas, {
    type: 'line',
    data: {
      labels:   iaLabels,
      datasets: buildLineDatasets(iaData, '#3B82F6', 'Gastos globais com IA em logística (US$ bi)')
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.2,
      animation: { duration: 1400, easing: 'easeInOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` US$ ${ctx.parsed.y} bilhões`
          }
        }
      },
      scales: {
        x: { grid: { color: '#27272A' } },
        y: {
          grid:  { color: '#27272A' },
          ticks: { callback: v => `US$ ${v}B` }
        }
      }
    }
  });
});

/* ============================================================
   GRÁFICO 2.3 — Manutenção preditiva (barras horizontais)
   ============================================================ */
onVisible('chartManutencao', canvas => {
  new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Produtividade', 'Paradas imprevistas', 'Custos de manutenção'],
      datasets: [{
        label: 'Variação (%)',
        data:  [25, -70, -25],
        backgroundColor: [
          'rgba(16,185,129,0.75)',
          'rgba(239,68,68,0.75)',
          'rgba(239,68,68,0.55)'
        ],
        borderColor: [
          '#10B981',
          '#EF4444',
          '#EF4444'
        ],
        borderWidth:  1.5,
        borderRadius: 6,
        glowColor:    '#10B981',
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      animation: { duration: 1000, easing: 'easeOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const v = ctx.parsed.x;
              return ` ${v > 0 ? '+' : ''}${v}%`;
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: '#27272A' },
          ticks: { callback: v => `${v > 0 ? '+' : ''}${v}%` }
        },
        y: { grid: { color: 'transparent' } }
      }
    }
  });
});

/* ============================================================
   GRÁFICO 2.5 — Donut: causas de atraso
   ============================================================ */
onVisible('chartDonut', canvas => {
  const labels = [
    'Falhas de comunicação',
    'Técnico indisponível',
    'Serviços não programados',
    'Outros'
  ];
  const data   = [31.5, 27.4, 25.2, 15.9];
  const colors = ['#3B82F6', '#F59E0B', '#EF4444', '#52525B'];

  new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor:      colors.map(c => c + 'CC'),
        borderColor:          colors,
        borderWidth:          2,
        hoverBackgroundColor: colors,
        hoverOffset:          8,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: '62%',
      animation: { duration: 1200, easing: 'easeInOutQuart' },
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            padding:   16,
            boxWidth:  12,
            font:      { size: 12 },
            color:     '#A1A1AA'
          }
        },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed}%`
          }
        }
      }
    }
  });
});

/* ============================================================
   GRÁFICO 5.2 — Soja Paraguai (linha verde)
   ============================================================ */
onVisible('chartParaguai', canvas => {
  new Chart(canvas, {
    type: 'line',
    data: {
      labels:   ['2020', '2021', '2022', '2023', '2024', '2025', '2026 (p)', '2030 (p)', '2032 (p)'],
      datasets: buildLineDatasets(
        [10.5, 10.0, 4.2, 10.0, 10.3, 10.0, 10.9, 11.5, 12.0],
        '#10B981',
        'Produção de soja (milhões de ton.)'
      )
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.2,
      animation: { duration: 1400, easing: 'easeInOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.parsed.y} milhões de toneladas`,
            afterLabel: ctx => ctx.parsed.y === 4.2 ? '  Seca histórica' : ''
          }
        }
      },
      scales: {
        x: { grid: { color: '#27272A' } },
        y: {
          grid:  { color: '#27272A' },
          ticks: { callback: v => `${v}M ton.` }
        }
      }
    }
  });
});

/* ============================================================
   GRÁFICO 5.3 — IA em logística (repetição com label diferente)
   ============================================================ */
onVisible('chartIA2', canvas => {
  new Chart(canvas, {
    type: 'line',
    data: {
      labels:   iaLabels,
      datasets: buildLineDatasets(iaData, '#3B82F6', 'Gastos globais com IA em logística (US$ bi)')
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 2.2,
      animation: { duration: 1400, easing: 'easeInOutQuart' },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` US$ ${ctx.parsed.y} bilhões`
          }
        }
      },
      scales: {
        x: { grid: { color: '#27272A' } },
        y: {
          grid:  { color: '#27272A' },
          ticks: { callback: v => `US$ ${v}B` }
        }
      }
    }
  });
});

/* ============================================================
   SCROLL SUAVE PARA ÂNCORAS (complementa scroll-behavior: smooth)
   ============================================================ */
$$('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.getElementById(a.getAttribute('href').slice(1));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
