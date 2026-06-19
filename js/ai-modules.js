/* ============================================
   NEXIQ — AI Module Simulations
   ============================================ */

/* ---------- Brand Success Predictor ---------- */
function runBrandSuccessPredictor(brand) {
  const data = NEXIQ_DATA.aiModules.brandSuccessPredictor;
  const output = document.getElementById('ai-output-brand-success');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Analyzing brand data...</div>';

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Analysis Complete</span>
          <span class="text-muted" style="font-size: 12px;">Confidence: ${data.sample.confidence}%</span>
        </div>
        <div class="ai-prediction-score">
          <div class="prediction-circle" style="--score: ${data.sample.prediction}">
            <span class="score-number">${data.sample.prediction}%</span>
            <span class="score-label">Success Probability</span>
          </div>
        </div>
        <div class="ai-factors">
          ${data.sample.factors.map(f => `
            <div class="factor-row">
              <span class="factor-name">${f.name}</span>
              <div class="factor-bar-wrapper">
                <div class="factor-bar" style="width: ${f.score}%; background: ${f.impact === 'high' ? 'var(--grad-primary)' : 'var(--grad-success)'}"></div>
              </div>
              <span class="factor-score">${f.score}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 1500);
}

/* ---------- Creator ROI Analyzer ---------- */
function runCreatorROIAnalyzer(creator) {
  const data = NEXIQ_DATA.aiModules.creatorROIAnalyzer;
  const output = document.getElementById('ai-output-creator-roi');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Calculating ROI metrics...</div>';

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Analysis Complete</span>
          <span class="text-muted" style="font-size: 12px;">Confidence: ${data.sample.confidence}%</span>
        </div>
        <div class="ai-roi-display">
          <div class="roi-big-number">${data.sample.predictedROI}%</div>
          <div class="roi-sublabel">Predicted ROI for next campaign</div>
        </div>
        <div class="ai-breakdown">
          <h4 style="font-size: 14px; margin-bottom: 12px;">ROI Breakdown</h4>
          ${data.sample.breakdown.map(item => `
            <div class="breakdown-item">
              <span class="breakdown-label">${item.metric}</span>
              <span class="breakdown-value" style="color: var(--clr-secondary)">${item.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 1500);
}

/* ---------- Audience Trust Analyzer ---------- */
function runAudienceTrustAnalyzer(creator) {
  const data = NEXIQ_DATA.aiModules.audienceTrustAnalyzer;
  const output = document.getElementById('ai-output-audience-trust');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Analyzing audience trust signals...</div>';

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Analysis Complete</span>
          <span class="text-muted" style="font-size: 12px;">Trust Score: ${data.sample.trustScore}/100</span>
        </div>
        <div class="ai-trust-metrics">
          ${data.sample.metrics.map(m => `
            <div class="trust-metric-row">
              <div class="trust-metric-info">
                <span class="trust-metric-name">${m.name}</span>
                <span class="trust-trend ${m.trend}">
                  ${m.trend === 'up' ? '↑' : m.trend === 'down' ? '↓' : '→'} ${m.trend}
                </span>
              </div>
              <div class="trust-meter">
                <div class="trust-meter-fill" style="width: ${m.value}%"></div>
              </div>
              <span class="trust-metric-val">${m.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 1500);
}

/* ---------- Compatibility Engine ---------- */
function runCompatibilityEngine() {
  const data = NEXIQ_DATA.aiModules.compatibilityEngine;
  const output = document.getElementById('ai-output-compatibility');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Computing compatibility scores...</div>';

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Matches Found</span>
        </div>
        <div class="ai-matches">
          ${data.sample.matches.map(m => `
            <div class="match-item">
              <div class="match-pair">
                <span class="match-entity">${m.brand}</span>
                <span class="match-connector">×</span>
                <span class="match-entity">${m.creator}</span>
              </div>
              <div class="match-details">
                <div class="match-score-display ${m.score >= 90 ? 'excellent' : m.score >= 80 ? 'good' : 'fair'}">
                  ${m.score}%
                </div>
                <div class="match-factors-list">
                  ${m.factors.map(f => `<span class="badge badge-primary">${f}</span>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 2000);
}

/* ---------- Product Quality Assessment ---------- */
function runProductQualityAssessment() {
  const data = NEXIQ_DATA.aiModules.productQualityEngine;
  const output = document.getElementById('ai-output-product-quality');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Assessing product quality dimensions...</div>';

  setTimeout(() => {
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Assessment Complete</span>
          <span class="text-muted" style="font-size: 12px;">Overall: ${data.sample.overallScore}/100</span>
        </div>
        <div class="quality-product-name">${data.sample.product}</div>
        <div class="quality-dimensions">
          ${data.sample.dimensions.map(d => `
            <div class="quality-dim">
              <div class="quality-dim-header">
                <span>${d.name}</span>
                <span class="quality-dim-score">${d.score}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill ${d.score >= 90 ? '' : d.score >= 80 ? 'teal' : 'warm'}" style="width: ${d.score}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 1500);
}

/* ---------- Reputation Impact Simulator ---------- */
function runReputationSimulator() {
  const data = NEXIQ_DATA.aiModules.reputationSimulator;
  const output = document.getElementById('ai-output-reputation');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Simulating reputation impact...</div>';

  setTimeout(() => {
    const s = data.sample;
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Simulation Complete</span>
        </div>
        <div class="sim-scenario">${s.scenario}</div>
        <div class="sim-impacts">
          <div class="sim-impact-card">
            <div class="sim-label">Brand Reputation</div>
            <div class="sim-before-after">
              <span class="sim-before">${s.brandImpact.before}</span>
              <span class="sim-arrow">→</span>
              <span class="sim-after">${s.brandImpact.after}</span>
            </div>
            <span class="badge badge-success">${s.brandImpact.change}</span>
          </div>
          <div class="sim-impact-card">
            <div class="sim-label">Creator Reputation</div>
            <div class="sim-before-after">
              <span class="sim-before">${s.creatorImpact.before}</span>
              <span class="sim-arrow">→</span>
              <span class="sim-after">${s.creatorImpact.after}</span>
            </div>
            <span class="badge badge-success">${s.creatorImpact.change}</span>
          </div>
        </div>
        <div class="sim-risks">
          <h4 style="font-size: 14px; margin-bottom: 8px;">Risk Assessment</h4>
          ${s.risks.map(r => `
            <div class="sim-risk-item">
              <span class="badge ${r.type === 'Minimal' ? 'badge-success' : 'badge-warning'}">${r.type}</span>
              <span style="font-size: 13px; color: var(--clr-text-secondary)">${r.description}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }, 1800);
}

/* ---------- Statistical Performance Analyzer ---------- */
function runStatisticalAnalyzer() {
  const data = NEXIQ_DATA.aiModules.statisticalAnalyzer;
  const output = document.getElementById('ai-output-statistical');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Running statistical analysis...</div>';

  setTimeout(() => {
    const m = data.sample.metrics;
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Analysis Complete</span>
        </div>
        <div class="stat-grid-mini">
          <div class="stat-mini">
            <div class="stat-mini-value">${m.meanROI}%</div>
            <div class="stat-mini-label">Mean ROI</div>
          </div>
          <div class="stat-mini">
            <div class="stat-mini-value">${m.medianROI}%</div>
            <div class="stat-mini-label">Median ROI</div>
          </div>
          <div class="stat-mini">
            <div class="stat-mini-value">±${m.stdDeviation}</div>
            <div class="stat-mini-label">Std Deviation</div>
          </div>
          <div class="stat-mini">
            <div class="stat-mini-value" style="color: var(--clr-success)">↑ ${m.projectedGrowth}</div>
            <div class="stat-mini-label">Projected Growth</div>
          </div>
        </div>
        <div class="stat-extra">
          <div class="stat-extra-item">
            <span>Trend Direction:</span>
            <span class="badge badge-success">${m.trendDirection}</span>
          </div>
          <div class="stat-extra-item">
            <span>95% Confidence Interval:</span>
            <span style="color: var(--clr-secondary)">${m.confidenceInterval}</span>
          </div>
        </div>
      </div>
    `;
  }, 1500);
}

/* ---------- Campaign Outcome Predictor ---------- */
function runCampaignPredictor() {
  const data = NEXIQ_DATA.aiModules.campaignPredictor;
  const output = document.getElementById('ai-output-campaign');
  if (!output) return;

  output.innerHTML = '<div class="ai-loading">Predicting campaign outcomes...</div>';

  setTimeout(() => {
    const p = data.sample.predictions;
    output.innerHTML = `
      <div class="ai-result animate-fade-in">
        <div class="ai-result-header">
          <span class="badge badge-success">Prediction Ready</span>
        </div>
        <div class="campaign-prediction-name">${data.sample.campaign}</div>
        <div class="prediction-grid">
          <div class="prediction-item">
            <div class="prediction-icon">🎯</div>
            <div class="prediction-val">${p.successProbability}%</div>
            <div class="prediction-label">Success Rate</div>
          </div>
          <div class="prediction-item">
            <div class="prediction-icon">💰</div>
            <div class="prediction-val">${p.estimatedROI}%</div>
            <div class="prediction-label">Est. ROI</div>
          </div>
          <div class="prediction-item">
            <div class="prediction-icon">👥</div>
            <div class="prediction-val">${(p.estimatedReach/1000000).toFixed(1)}M</div>
            <div class="prediction-label">Est. Reach</div>
          </div>
          <div class="prediction-item">
            <div class="prediction-icon">💬</div>
            <div class="prediction-val">${(p.estimatedEngagement/1000).toFixed(0)}K</div>
            <div class="prediction-label">Est. Engagement</div>
          </div>
          <div class="prediction-item">
            <div class="prediction-icon">🛒</div>
            <div class="prediction-val">${(p.estimatedConversions/1000).toFixed(1)}K</div>
            <div class="prediction-label">Est. Conversions</div>
          </div>
          <div class="prediction-item">
            <div class="prediction-icon">⏱️</div>
            <div class="prediction-val">${p.timeToROI}</div>
            <div class="prediction-label">Time to ROI</div>
          </div>
        </div>
      </div>
    `;
  }, 1800);
}

/* ---------- Run All Modules ---------- */
function runAllAIModules() {
  runBrandSuccessPredictor();
  runCreatorROIAnalyzer();
  runAudienceTrustAnalyzer();
  runCompatibilityEngine();
  runProductQualityAssessment();
  runReputationSimulator();
  runStatisticalAnalyzer();
  runCampaignPredictor();
}
