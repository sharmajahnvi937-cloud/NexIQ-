/* ============================================
   NEXIQ — Chart.js Configurations
   ============================================ */

// Global Chart.js defaults
function setChartDefaults() {
  if (typeof Chart === 'undefined') return;

  Chart.defaults.color = '#A0A0B8';
  Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.06)';
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.padding = 20;
  Chart.defaults.plugins.tooltip.backgroundColor = 'rgba(10, 10, 26, 0.95)';
  Chart.defaults.plugins.tooltip.borderColor = 'rgba(108, 92, 231, 0.3)';
  Chart.defaults.plugins.tooltip.borderWidth = 1;
  Chart.defaults.plugins.tooltip.cornerRadius = 8;
  Chart.defaults.plugins.tooltip.padding = 12;
  Chart.defaults.plugins.tooltip.titleFont = { size: 13, weight: '600' };
  Chart.defaults.plugins.tooltip.bodyFont = { size: 12 };
  Chart.defaults.animation.duration = 1200;
  Chart.defaults.animation.easing = 'easeOutQuart';
}

// Color palette
const CHART_COLORS = {
  primary: '#6C5CE7',
  primaryLight: 'rgba(108, 92, 231, 0.2)',
  secondary: '#00CEC9',
  secondaryLight: 'rgba(0, 206, 201, 0.2)',
  accent: '#FD79A8',
  accentLight: 'rgba(253, 121, 168, 0.2)',
  success: '#00B894',
  successLight: 'rgba(0, 184, 148, 0.2)',
  warning: '#FDCB6E',
  warningLight: 'rgba(253, 203, 110, 0.2)',
  danger: '#FF6B6B',
  dangerLight: 'rgba(255, 107, 107, 0.2)',
  info: '#74b9ff',
  infoLight: 'rgba(116, 185, 255, 0.2)',
  palette: ['#6C5CE7', '#00CEC9', '#FD79A8', '#FDCB6E', '#00B894', '#74b9ff', '#FF6B6B', '#a29bfe']
};

// Gradient helper
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

function createAreaGradient(ctx, color) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 300);
  gradient.addColorStop(0, color.replace(')', ', 0.4)').replace('rgb', 'rgba'));
  gradient.addColorStop(1, color.replace(')', ', 0.0)').replace('rgb', 'rgba'));
  return gradient;
}

/* ---------- Line Chart ---------- */
function createLineChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;

  const defaults = {
    labels: [],
    datasets: [],
    title: '',
    yLabel: '',
    fill: true
  };

  const opts = { ...defaults, ...config };

  return new Chart(ctx, {
    type: 'line',
    data: {
      labels: opts.labels,
      datasets: opts.datasets.map((ds, i) => ({
        label: ds.label,
        data: ds.data,
        borderColor: ds.color || CHART_COLORS.palette[i],
        backgroundColor: opts.fill
          ? hexToRgba(ds.color || CHART_COLORS.palette[i], 0.1)
          : 'transparent',
        borderWidth: 2.5,
        fill: opts.fill,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
        pointBackgroundColor: ds.color || CHART_COLORS.palette[i],
        pointBorderColor: '#0a0a1a',
        pointBorderWidth: 2,
        ...ds
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false
      },
      plugins: {
        title: {
          display: !!opts.title,
          text: opts.title,
          font: { size: 14, weight: '600', family: "'Outfit', sans-serif" },
          padding: { bottom: 20 }
        },
        legend: {
          position: 'top',
          align: 'end'
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { font: { size: 11 } }
        },
        y: {
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { font: { size: 11 } },
          title: {
            display: !!opts.yLabel,
            text: opts.yLabel,
            font: { size: 12 }
          }
        }
      }
    }
  });
}

/* ---------- Bar Chart ---------- */
function createBarChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;

  const defaults = {
    labels: [],
    datasets: [],
    title: '',
    horizontal: false,
    stacked: false
  };

  const opts = { ...defaults, ...config };

  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: opts.labels,
      datasets: opts.datasets.map((ds, i) => ({
        label: ds.label,
        data: ds.data,
        backgroundColor: ds.colors || hexToRgba(ds.color || CHART_COLORS.palette[i], 0.7),
        borderColor: ds.color || CHART_COLORS.palette[i],
        borderWidth: 1,
        borderRadius: 6,
        borderSkipped: false,
        maxBarThickness: 50,
        ...ds
      }))
    },
    options: {
      indexAxis: opts.horizontal ? 'y' : 'x',
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: !!opts.title,
          text: opts.title,
          font: { size: 14, weight: '600', family: "'Outfit', sans-serif" },
          padding: { bottom: 20 }
        },
        legend: {
          display: opts.datasets.length > 1,
          position: 'top',
          align: 'end'
        }
      },
      scales: {
        x: {
          stacked: opts.stacked,
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { font: { size: 11 } }
        },
        y: {
          stacked: opts.stacked,
          grid: { color: 'rgba(255, 255, 255, 0.04)' },
          ticks: { font: { size: 11 } }
        }
      }
    }
  });
}

/* ---------- Doughnut / Pie Chart ---------- */
function createDoughnutChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;

  const defaults = {
    labels: [],
    data: [],
    colors: CHART_COLORS.palette,
    title: '',
    cutout: '65%'
  };

  const opts = { ...defaults, ...config };

  return new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: opts.labels,
      datasets: [{
        data: opts.data,
        backgroundColor: opts.colors.map(c => hexToRgba(c, 0.8)),
        borderColor: opts.colors,
        borderWidth: 2,
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: opts.cutout,
      plugins: {
        title: {
          display: !!opts.title,
          text: opts.title,
          font: { size: 14, weight: '600', family: "'Outfit', sans-serif" },
          padding: { bottom: 20 }
        },
        legend: {
          position: 'bottom',
          labels: { padding: 16 }
        }
      }
    }
  });
}

function createPieChart(canvasId, config) {
  return createDoughnutChart(canvasId, { ...config, cutout: '0%' });
}

/* ---------- Radar Chart ---------- */
function createRadarChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;

  const defaults = {
    labels: [],
    datasets: [],
    title: ''
  };

  const opts = { ...defaults, ...config };

  return new Chart(ctx, {
    type: 'radar',
    data: {
      labels: opts.labels,
      datasets: opts.datasets.map((ds, i) => ({
        label: ds.label,
        data: ds.data,
        borderColor: ds.color || CHART_COLORS.palette[i],
        backgroundColor: hexToRgba(ds.color || CHART_COLORS.palette[i], 0.15),
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        pointBackgroundColor: ds.color || CHART_COLORS.palette[i],
        pointBorderColor: '#0a0a1a',
        pointBorderWidth: 2,
        ...ds
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: !!opts.title,
          text: opts.title,
          font: { size: 14, weight: '600', family: "'Outfit', sans-serif" },
          padding: { bottom: 20 }
        },
        legend: {
          position: 'top',
          align: 'end'
        }
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            backdropColor: 'transparent',
            font: { size: 10 }
          },
          grid: { color: 'rgba(255, 255, 255, 0.06)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.06)' },
          pointLabels: { font: { size: 11 } }
        }
      }
    }
  });
}

/* ---------- Polar Area Chart ---------- */
function createPolarChart(canvasId, config) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;

  const defaults = {
    labels: [],
    data: [],
    colors: CHART_COLORS.palette,
    title: ''
  };

  const opts = { ...defaults, ...config };

  return new Chart(ctx, {
    type: 'polarArea',
    data: {
      labels: opts.labels,
      datasets: [{
        data: opts.data,
        backgroundColor: opts.colors.map(c => hexToRgba(c, 0.6)),
        borderColor: opts.colors,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: !!opts.title,
          text: opts.title,
          font: { size: 14, weight: '600', family: "'Outfit', sans-serif" },
          padding: { bottom: 20 }
        },
        legend: {
          position: 'bottom',
          labels: { padding: 16 }
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.06)' },
          ticks: { backdropColor: 'transparent' }
        }
      }
    }
  });
}

/* ---------- Utility ---------- */
function hexToRgba(hex, alpha) {
  if (hex.startsWith('rgba') || hex.startsWith('rgb')) return hex;
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
