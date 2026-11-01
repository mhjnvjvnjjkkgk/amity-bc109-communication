// Amity University Kolkata - BC109 Interactive Learning Portal Controller (Expanded)
document.addEventListener('DOMContentLoaded', () => {
  // Global State
  const state = {
    currentView: 'module-1',
    currentTab: 'notes', // 'notes', 'questions', 'mcqs', 'blueprint', 'models', 'glossary', 'frameworks'
    qbFilter: 'all',
    glossaryCategory: 'all',
    searchQuery: '',
    masteredTopics: JSON.parse(localStorage.getItem('bc109_mastered') || '{}'),
    theme: localStorage.getItem('bc109_theme') || 'light',
    activeFlashcardIndex: 0,
    flashcardList: []
  };

  // DOM Elements
  const appContainer = document.getElementById('app');
  const sidebar = document.getElementById('sidebar');
  const mobileToggle = document.getElementById('mobileToggle');
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const searchInput = document.getElementById('globalSearchInput');
  const searchResultsOverlay = document.getElementById('searchResultsOverlay');
  const searchResultsContent = document.getElementById('searchResultsContent');
  const closeSearchBtn = document.getElementById('closeSearchBtn');
  const overallProgressFill = document.getElementById('overallProgressFill');
  const overallProgressText = document.getElementById('overallProgressText');
  const mainContent = document.getElementById('mainContent');
  const flashcardBtn = document.getElementById('flashcardBtn');
  const flashcardModal = document.getElementById('flashcardModal');
  const closeFlashcardBtn = document.getElementById('closeFlashcardBtn');
  const flashcardInner = document.getElementById('flashcardInner');
  const flashcardCounter = document.getElementById('flashcardCounter');
  const prevCardBtn = document.getElementById('prevCardBtn');
  const nextCardBtn = document.getElementById('nextCardBtn');
  const flipCardBtn = document.getElementById('flipCardBtn');
  const printNotesBtn = document.getElementById('printNotesBtn');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const sidebarCloseBtn = document.getElementById('sidebarCloseBtn');
  const bnavModules = document.getElementById('bnavModules');
  const bnavModels = document.getElementById('bnavModels');
  const bnavSearch = document.getElementById('bnavSearch');
  const bnavFlashcards = document.getElementById('bnavFlashcards');
  const bnavTheme = document.getElementById('bnavTheme');
  const bnavThemeIcon = document.getElementById('bnavThemeIcon');

  // Initialize Theme
  document.documentElement.setAttribute('data-theme', state.theme);
  updateThemeIcon();

  function updateThemeIcon() {
    if (state.theme === 'dark') {
      if (themeIcon) themeIcon.className = 'fas fa-sun';
      if (bnavThemeIcon) bnavThemeIcon.className = 'fas fa-sun';
    } else {
      if (themeIcon) themeIcon.className = 'fas fa-moon';
      if (bnavThemeIcon) bnavThemeIcon.className = 'fas fa-moon';
    }
  }

  function toggleAppTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', state.theme);
    localStorage.setItem('bc109_theme', state.theme);
    updateThemeIcon();
  }

  themeToggle.addEventListener('click', toggleAppTheme);
  if (bnavTheme) bnavTheme.addEventListener('click', toggleAppTheme);

  // Mobile Drawer Toggle
  function openMobileDrawer() {
    sidebar.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer() {
    sidebar.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  mobileToggle.addEventListener('click', () => {
    if (sidebar.classList.contains('open')) {
      closeMobileDrawer();
    } else {
      openMobileDrawer();
    }
  });

  if (sidebarCloseBtn) sidebarCloseBtn.addEventListener('click', closeMobileDrawer);
  if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeMobileDrawer);

  // Mobile Bottom Bar Navigation
  if (bnavModules) {
    bnavModules.addEventListener('click', () => {
      openMobileDrawer();
    });
  }

  if (bnavModels) {
    bnavModels.addEventListener('click', () => {
      closeMobileDrawer();
      navigateTo('glossary-models');
    });
  }

  if (bnavSearch) {
    bnavSearch.addEventListener('click', () => {
      closeMobileDrawer();
      if (searchInput) {
        searchInput.focus();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  if (bnavFlashcards) {
    bnavFlashcards.addEventListener('click', () => {
      closeMobileDrawer();
      flashcardBtn.click();
    });
  }

  // Navigation Items Click
  document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = item.getAttribute('data-view');
      navigateTo(targetView);
      if (window.innerWidth <= 992) {
        closeMobileDrawer();
      }
    });
  });

  function navigateTo(viewId) {
    state.currentView = viewId;
    state.currentTab = (viewId === 'glossary-models') ? 'models' : 'notes';
    state.qbFilter = 'all';

    // Update active nav item
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(el => {
      if (el.getAttribute('data-view') === viewId) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    renderCurrentView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Calculate Progress
  function updateProgress() {
    const allModules = [
      window.MODULE_1_DATA,
      window.MODULE_2_DATA,
      window.MODULE_3_DATA,
      window.MODULE_4_DATA,
      window.MODULE_5_DATA,
      window.MODULE_6_DATA
    ];

    let totalTopics = 0;
    let masteredCount = 0;

    allModules.forEach(mod => {
      if (mod && mod.topics) {
        mod.topics.forEach(t => {
          totalTopics++;
          if (state.masteredTopics[t.id]) {
            masteredCount++;
          }
        });
      }
    });

    const percent = totalTopics > 0 ? Math.round((masteredCount / totalTopics) * 100) : 0;
    if (overallProgressFill) overallProgressFill.style.width = percent + '%';
    if (overallProgressText) overallProgressText.textContent = `${masteredCount}/${totalTopics} Topics (${percent}%)`;
  }

  // Render Current View
  function renderCurrentView() {
    if (state.currentView.startsWith('module-')) {
      renderModuleView(state.currentView);
    } else if (state.currentView === 'case-study') {
      renderCaseStudyView();
    } else if (state.currentView === 'exam-psda') {
      renderExamPsdaView();
    } else if (state.currentView === 'glossary-models') {
      renderGlossaryModelsView();
    }
    updateProgress();
  }

  // Get module data helper
  function getModuleData(modId) {
    switch (modId) {
      case 'module-1': return window.MODULE_1_DATA;
      case 'module-2': return window.MODULE_2_DATA;
      case 'module-3': return window.MODULE_3_DATA;
      case 'module-4': return window.MODULE_4_DATA;
      case 'module-5': return window.MODULE_5_DATA;
      case 'module-6': return window.MODULE_6_DATA;
      default: return null;
    }
  }

  // Render Module View
  function renderModuleView(modId) {
    const data = getModuleData(modId);
    if (!data) return;

    let html = `
      <div class="hero-banner">
        <div class="hero-tag"><i class="fas fa-graduation-cap"></i> ${data.code} • Weightage: ${data.weightage}</div>
        <h1 class="hero-title">${data.title}</h1>
        <p class="hero-desc">${data.summary}</p>
        <div class="hero-meta-grid">
          <div class="meta-pill"><i class="fas fa-book-reader"></i> Topics: <strong>${data.topics.length}</strong></div>
          <div class="meta-pill"><i class="fas fa-question-circle"></i> Short/Long Questions: <strong>${data.questions.shortAnswer.length + data.questions.longEssay.length}</strong></div>
          <div class="meta-pill"><i class="fas fa-check-double"></i> Practice MCQs: <strong>${data.questions.mcqs.length}</strong></div>
        </div>
      </div>

      <!-- View Mode Tabs -->
      <div class="view-mode-tabs">
        <button class="view-tab ${state.currentTab === 'notes' ? 'active' : ''}" data-tab="notes">
          <i class="fas fa-file-alt"></i> Comprehensive Theory Notes (${data.topics.length})
        </button>
        <button class="view-tab ${state.currentTab === 'questions' ? 'active' : ''}" data-tab="questions">
          <i class="fas fa-clipboard-question"></i> Exam Question Bank (${data.questions.shortAnswer.length + data.questions.longEssay.length})
        </button>
        <button class="view-tab ${state.currentTab === 'mcqs' ? 'active' : ''}" data-tab="mcqs">
          <i class="fas fa-tasks"></i> Interactive MCQ Engine (${data.questions.mcqs.length})
        </button>
      </div>

      <div id="tabContentArea">
        ${state.currentTab === 'notes' ? renderNotes(data) : ''}
        ${state.currentTab === 'questions' ? renderQuestions(data) : ''}
        ${state.currentTab === 'mcqs' ? renderMCQs(data) : ''}
      </div>
    `;

    mainContent.innerHTML = html;

    // Attach Tab listeners
    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.currentTab = tab.getAttribute('data-tab');
        renderModuleView(modId);
      });
    });

    // Attach Mastered button listeners
    document.querySelectorAll('.btn-mastered').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const topicId = btn.getAttribute('data-topic-id');
        if (state.masteredTopics[topicId]) {
          delete state.masteredTopics[topicId];
          btn.classList.remove('mastered');
          btn.innerHTML = '<i class="far fa-circle"></i> Mark as Mastered';
        } else {
          state.masteredTopics[topicId] = true;
          btn.classList.add('mastered');
          btn.innerHTML = '<i class="fas fa-check-circle"></i> Mastered';
        }
        localStorage.setItem('bc109_mastered', JSON.stringify(state.masteredTopics));
        updateProgress();
      });
    });

    // Attach Question Accordion Listeners
    if (state.currentTab === 'questions') {
      attachQuestionAccordionListeners();
    }

    // Attach MCQ Option Listeners
    if (state.currentTab === 'mcqs') {
      attachMCQListeners(data);
    }
  }

  // Render Theory Notes
  function renderNotes(data) {
    let html = `<div class="notes-container">`;
    data.topics.forEach((topic, idx) => {
      const isMastered = !!state.masteredTopics[topic.id];
      html += `
        <div class="topic-card" id="${topic.id}">
          <div class="topic-header">
            <div>
              <div class="topic-badge-wrapper">
                <span class="badge badge-${topic.badgeColor || 'blue'}">${topic.badge}</span>
                <span style="font-size:12px; color:var(--text-muted);"><i class="far fa-clock"></i> ${topic.readTime}</span>
              </div>
              <h2 class="topic-title">${idx + 1}. ${topic.title}</h2>
            </div>
            <div class="topic-actions">
              <button class="btn-mastered ${isMastered ? 'mastered' : ''}" data-topic-id="${topic.id}">
                <i class="${isMastered ? 'fas fa-check-circle' : 'far fa-circle'}"></i> 
                ${isMastered ? 'Mastered' : 'Mark as Mastered'}
              </button>
            </div>
          </div>
          <div class="note-content">
            ${topic.content}
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  // Render Question Bank
  function renderQuestions(data) {
    let shortQs = data.questions.shortAnswer || [];
    let longQs = data.questions.longEssay || [];

    let filteredShort = shortQs;
    let filteredLong = longQs;

    if (state.qbFilter === '2m') {
      filteredShort = shortQs.filter(q => q.marks.includes('2'));
      filteredLong = [];
    } else if (state.qbFilter === '5m') {
      filteredShort = shortQs.filter(q => q.marks.includes('5'));
      filteredLong = [];
    } else if (state.qbFilter === 'long') {
      filteredShort = [];
      filteredLong = longQs;
    }

    let html = `
      <div class="qb-container">
        <div class="qb-filter-bar">
          <button class="qb-filter-btn ${state.qbFilter === 'all' ? 'active' : ''}" data-filter="all">All Questions (${shortQs.length + longQs.length})</button>
          <button class="qb-filter-btn ${state.qbFilter === '2m' ? 'active' : ''}" data-filter="2m">2 Marks (${shortQs.filter(q => q.marks.includes('2')).length})</button>
          <button class="qb-filter-btn ${state.qbFilter === '5m' ? 'active' : ''}" data-filter="5m">5 Marks (${shortQs.filter(q => q.marks.includes('5')).length})</button>
          <button class="qb-filter-btn ${state.qbFilter === 'long' ? 'active' : ''}" data-filter="long">10 / 15 Marks Essays (${longQs.length})</button>
        </div>
    `;

    if (filteredShort.length > 0) {
      html += `<h3 style="margin-top:10px; margin-bottom:14px; font-size:17px; color:var(--primary-light);"><i class="fas fa-pen-fancy"></i> Short & Analytical Questions</h3>`;
      filteredShort.forEach(q => {
        html += `
          <div class="question-card" id="${q.id}">
            <div class="question-header">
              <div>
                <div class="question-meta">
                  <span class="badge ${q.marks.includes('2') ? 'badge-blue' : 'badge-amber'}">${q.marks}</span>
                  <span class="badge badge-purple">${q.type}</span>
                </div>
                <div class="question-title">${q.question}</div>
              </div>
              <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div class="question-body">
              <span class="answer-badge"><i class="fas fa-check"></i> Standard Model Answer:</span>
              <div>${q.answer.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        `;
      });
    }

    if (filteredLong.length > 0) {
      html += `<h3 style="margin-top:24px; margin-bottom:14px; font-size:17px; color:var(--primary-light);"><i class="fas fa-scroll"></i> Comprehensive Long Essay & Case Analysis Questions</h3>`;
      filteredLong.forEach(q => {
        html += `
          <div class="question-card" id="${q.id}">
            <div class="question-header">
              <div>
                <div class="question-meta">
                  <span class="badge badge-green">${q.marks}</span>
                  <span class="badge badge-purple">${q.type}</span>
                </div>
                <div class="question-title">${q.question}</div>
              </div>
              <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
            </div>
            <div class="question-body">
              <span class="answer-badge"><i class="fas fa-graduation-cap"></i> Comprehensive Essay Breakdown & Marking Points:</span>
              <div style="margin-top:8px;">${q.answer.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    return html;
  }

  function attachQuestionAccordionListeners() {
    document.querySelectorAll('.question-header').forEach(header => {
      header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('open');
      });
    });

    document.querySelectorAll('.qb-filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.qbFilter = btn.getAttribute('data-filter');
        const container = document.getElementById('tabContentArea');
        const data = getModuleData(state.currentView);
        if (container && data) {
          container.innerHTML = renderQuestions(data);
          attachQuestionAccordionListeners();
        }
      });
    });
  }

  // Render MCQs
  function renderMCQs(data) {
    const mcqs = data.questions.mcqs || [];
    let html = `
      <div class="mcq-container">
        <div class="callout callout-info">
          <div class="callout-title"><i class="fas fa-info-circle"></i> Self-Testing Engine</div>
          <p>Select your answer for each question. Instant scoring and detailed conceptual explanations will reveal automatically.</p>
        </div>
    `;

    mcqs.forEach((mcq, idx) => {
      html += `
        <div class="mcq-card" id="${mcq.id}" data-correct="${mcq.correct}">
          <div class="question-meta">
            <span class="badge badge-blue">Question ${idx + 1} of ${mcqs.length}</span>
            <span class="badge badge-amber">Amity BC109 Standard</span>
          </div>
          <div class="mcq-question-text">${mcq.question}</div>
          <div class="mcq-options">
            ${mcq.options.map((opt, optIdx) => `
              <div class="mcq-option" data-opt-index="${optIdx}">
                <div class="option-prefix">${String.fromCharCode(65 + optIdx)}</div>
                <div>${opt}</div>
              </div>
            `).join('')}
          </div>
          <div class="mcq-feedback" id="feedback-${mcq.id}">
            <div class="feedback-text"></div>
            <div style="margin-top:6px; font-size:12.5px;"><strong>Explanation:</strong> ${mcq.explanation}</div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  function attachMCQListeners(data) {
    document.querySelectorAll('.mcq-card').forEach(card => {
      const correctIndex = parseInt(card.getAttribute('data-correct'), 10);
      const feedbackEl = card.querySelector('.mcq-feedback');
      const feedbackText = card.querySelector('.feedback-text');
      const options = card.querySelectorAll('.mcq-option');

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          if (card.classList.contains('answered')) return;
          card.classList.add('answered');

          const selectedIndex = parseInt(opt.getAttribute('data-opt-index'), 10);

          options.forEach(o => o.classList.add('locked'));

          if (selectedIndex === correctIndex) {
            opt.classList.add('correct');
            feedbackEl.className = 'mcq-feedback show success';
            feedbackText.innerHTML = '<i class="fas fa-check-circle"></i> <strong>Correct!</strong> Outstanding conceptual precision.';
          } else {
            opt.classList.add('incorrect');
            options[correctIndex].classList.add('correct');
            feedbackEl.className = 'mcq-feedback show error';
            feedbackText.innerHTML = `<i class="fas fa-times-circle"></i> <strong>Incorrect.</strong> The correct answer is <strong>Option ${String.fromCharCode(65 + correctIndex)}</strong>.`;
          }
        });
      });
    });
  }

  // Render Models & A-Z Glossary View
  function renderGlossaryModelsView() {
    const data = window.GLOSSARY_MODELS_DATA;
    if (!data) return;

    let html = `
      <div class="hero-banner" style="background: linear-gradient(135deg, #4338ca 0%, #1e1b4b 100%);">
        <div class="hero-tag"><i class="fas fa-book-atlas"></i> Academic Reference Suite</div>
        <h1 class="hero-title">${data.title}</h1>
        <p class="hero-desc">${data.subtitle}</p>
        <div class="hero-meta-grid">
          <div class="meta-pill"><i class="fas fa-sitemap"></i> Classical & Modern Models: <strong>${data.models.length}</strong></div>
          <div class="meta-pill"><i class="fas fa-brain"></i> Interpersonal Frameworks: <strong>${data.frameworks.length}</strong></div>
          <div class="meta-pill"><i class="fas fa-spell-check"></i> Vocabulary Glossary: <strong>${data.glossary.length}+ Terms</strong></div>
        </div>
      </div>

      <div class="view-mode-tabs">
        <button class="view-tab ${state.currentTab === 'models' ? 'active' : ''}" data-tab="models">
          <i class="fas fa-project-diagram"></i> Communication Models Encyclopedia (${data.models.length})
        </button>
        <button class="view-tab ${state.currentTab === 'frameworks' ? 'active' : ''}" data-tab="frameworks">
          <i class="fas fa-layer-group"></i> Psychological Frameworks (Johari Window & TA)
        </button>
        <button class="view-tab ${state.currentTab === 'glossary' ? 'active' : ''}" data-tab="glossary">
          <i class="fas fa-spell-check"></i> A-Z Communication Glossary (${data.glossary.length})
        </button>
      </div>

      <div id="tabContentArea">
        ${state.currentTab === 'models' ? renderModelsEncyclopedia(data) : ''}
        ${state.currentTab === 'frameworks' ? renderPsychologicalFrameworks(data) : ''}
        ${state.currentTab === 'glossary' ? renderGlossaryList(data) : ''}
      </div>
    `;

    mainContent.innerHTML = html;

    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.currentTab = tab.getAttribute('data-tab');
        renderGlossaryModelsView();
      });
    });

    if (state.currentTab === 'glossary') {
      attachGlossaryListeners(data);
    }
  }

  function renderModelsEncyclopedia(data) {
    let html = `<div class="notes-container">`;
    data.models.forEach((m, idx) => {
      html += `
        <div class="topic-card" id="${m.id}">
          <div class="topic-header">
            <div>
              <div class="topic-badge-wrapper">
                <span class="badge badge-purple">${m.period}</span>
                <span class="badge badge-blue">${m.orientation}</span>
              </div>
              <h2 class="topic-title">${idx + 1}. ${m.name}</h2>
            </div>
            <div style="font-size:12px; color:var(--accent-gold); font-weight:700;">
              <i class="fas fa-star"></i> ${m.examRelevance}
            </div>
          </div>
          <div class="note-content">
            <div class="diagram-box">
              <div class="diagram-title">Conceptual Architecture</div>
              <div style="text-align:center; font-weight:700; font-family:'JetBrains Mono', monospace; color:var(--primary-light); padding:10px;">
                ${m.diagram}
              </div>
            </div>
            <p>${m.description}</p>
            <div class="feature-grid" style="margin-top:16px;">
              <div class="feature-card">
                <div class="feature-card-header" style="color:var(--accent-emerald);"><i class="fas fa-thumbs-up"></i> Theoretical Strengths</div>
                <p>${m.strengths}</p>
              </div>
              <div class="feature-card">
                <div class="feature-card-header" style="color:var(--accent-rose);"><i class="fas fa-exclamation-circle"></i> Academic Criticisms</div>
                <p>${m.criticisms}</p>
              </div>
            </div>
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  function renderPsychologicalFrameworks(data) {
    let html = `<div class="notes-container">`;
    data.frameworks.forEach(fw => {
      html += `
        <div class="topic-card" id="${fw.id}">
          <div class="topic-header">
            <div>
              <span class="badge badge-green">Interpersonal Psychology</span>
              <h2 class="topic-title" style="margin-top:6px;">${fw.title}</h2>
              <div style="font-size:13.5px; color:var(--text-muted);">${fw.subtitle}</div>
            </div>
          </div>
          <div class="note-content">
      `;

      if (fw.quadrants) {
        html += `
          <div class="feature-grid">
            ${fw.quadrants.map(q => `
              <div class="feature-card" style="border-top:3px solid var(--primary-light);">
                <div class="feature-card-header">${q.name}</div>
                <div style="font-size:12px; margin-bottom:8px; color:var(--text-muted);">
                  Known to Self: <strong>${q.knownToSelf ? 'YES' : 'NO'}</strong> | Known to Others: <strong>${q.knownToOthers ? 'YES' : 'NO'}</strong>
                </div>
                <p>${q.desc}</p>
              </div>
            `).join('')}
          </div>
          <div class="callout callout-tip" style="margin-top:18px;">
            <div class="callout-title"><i class="fas fa-lightbulb"></i> Leadership Application</div>
            <p>${fw.leadershipApplication}</p>
          </div>
        `;
      }

      if (fw.egoStates) {
        html += `
          <h3>Three Structural Ego States:</h3>
          <div class="feature-grid">
            ${fw.egoStates.map(es => `
              <div class="feature-card">
                <div class="feature-card-header">${es.name}</div>
                <p><strong>Dynamics:</strong> ${es.types}</p>
                <p style="margin-top:6px; color:var(--primary-light);"><strong>Vocal Tone:</strong> ${es.voice}</p>
              </div>
            `).join('')}
          </div>
          <h3 style="margin-top:20px;">Transactional Flow Archetypes:</h3>
          <div class="feature-grid">
            ${fw.transactions.map(t => `
              <div class="feature-card">
                <div class="feature-card-header"><i class="fas fa-exchange-alt"></i> ${t.name}</div>
                <p>${t.desc}</p>
              </div>
            `).join('')}
          </div>
        `;
      }

      html += `
          </div>
        </div>
      `;
    });
    html += `</div>`;
    return html;
  }

  function renderGlossaryList(data) {
    let categories = ['all', 'Listening', 'Nonverbal', 'Rhetoric', 'Presentation', 'Barriers', 'Cross-Cultural', 'Persuasion', 'Semantics', 'Interpersonal', 'Organizational', 'Speaking'];
    
    let filtered = data.glossary;
    if (state.glossaryCategory !== 'all') {
      filtered = data.glossary.filter(g => g.category.toLowerCase() === state.glossaryCategory.toLowerCase());
    }

    let html = `
      <div class="qb-container">
        <div class="qb-filter-bar">
          ${categories.map(cat => `
            <button class="qb-filter-btn ${state.glossaryCategory === cat ? 'active' : ''}" data-cat="${cat}">
              ${cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          `).join('')}
        </div>
        <div style="font-size:13.5px; color:var(--text-muted); margin-bottom:12px;">Showing <strong>${filtered.length}</strong> glossary terms:</div>
        <div class="feature-grid">
          ${filtered.map(item => `
            <div class="feature-card" id="gloss-${item.term.toLowerCase().replace(/[^a-z0-9]/g, '-')}">
              <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                <span class="badge badge-blue">${item.category}</span>
                <span style="font-family:'JetBrains Mono', monospace; font-size:11.5px; color:var(--text-muted);">${item.phonetic}</span>
              </div>
              <h4 style="font-size:17px; font-weight:800; color:var(--primary-light); margin-bottom:6px;">${item.term}</h4>
              <p style="font-size:14px; margin-bottom:10px;">${item.def}</p>
              <div style="font-size:12.5px; color:var(--accent-emerald); border-top:1px dashed var(--border-color); padding-top:6px;">
                <i class="fas fa-briefcase"></i> <strong>Corporate Example:</strong> ${item.example}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    return html;
  }

  function attachGlossaryListeners(data) {
    document.querySelectorAll('.qb-filter-btn[data-cat]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.glossaryCategory = btn.getAttribute('data-cat');
        const container = document.getElementById('tabContentArea');
        if (container) {
          container.innerHTML = renderGlossaryList(data);
          attachGlossaryListeners(data);
        }
      });
    });
  }

  // Render Case Study View
  function renderCaseStudyView() {
    const cs = window.CASE_STUDY_DATA;
    if (!cs) return;

    let html = `
      <div class="hero-banner" style="background: linear-gradient(135deg, #064e3b 0%, #0f172a 100%);">
        <div class="hero-tag"><i class="fas fa-briefcase"></i> ${cs.code} • Comprehensive Strategic Analysis</div>
        <h1 class="hero-title">${cs.title}</h1>
        <p class="hero-desc">${cs.subtitle}</p>
        <div class="hero-meta-grid">
          <div class="meta-pill"><i class="fas fa-building"></i> Organization: <strong>${cs.organization}</strong></div>
          <div class="meta-pill"><i class="fas fa-user-tie"></i> Leadership: <strong>CEO ${cs.ceo}</strong></div>
          <div class="meta-pill"><i class="fas fa-list-check"></i> Analytical Questions: <strong>10 Fully Solved</strong></div>
          <div class="meta-pill"><i class="fas fa-map"></i> Blueprint: <strong>9 Complete Modules</strong></div>
        </div>
      </div>

      <div class="view-mode-tabs">
        <button class="view-tab ${state.currentTab === 'notes' ? 'active' : ''}" data-tab="notes">
          <i class="fas fa-question-circle"></i> 10 Analytical Case Questions & Solutions
        </button>
        <button class="view-tab ${state.currentTab === 'blueprint' ? 'active' : ''}" data-tab="blueprint">
          <i class="fas fa-file-contract"></i> Persuasive Strategy Blueprint (1,500 - 2,000 Words)
        </button>
      </div>

      <div id="tabContentArea">
        ${state.currentTab === 'notes' ? renderCaseQuestions(cs) : renderCaseBlueprint(cs)}
      </div>
    `;

    mainContent.innerHTML = html;

    document.querySelectorAll('.view-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        state.currentTab = tab.getAttribute('data-tab');
        renderCaseStudyView();
      });
    });

    if (state.currentTab === 'notes') {
      attachQuestionAccordionListeners();
    }
  }

  function renderCaseQuestions(cs) {
    let html = `
      <div class="qb-container">
        <div class="callout callout-info">
          <div class="callout-title"><i class="fas fa-info-circle"></i> Case Study Context: Project GreenShift 2030</div>
          <p>${cs.context}</p>
        </div>
    `;

    cs.analyticalQuestions.forEach(q => {
      html += `
        <div class="question-card open" id="${q.id}">
          <div class="question-header">
            <div>
              <div class="question-meta">
                <span class="badge badge-green">Question ${q.number}</span>
                <span class="badge badge-purple">Amity Case Solution</span>
              </div>
              <div class="question-title">${q.title}</div>
            </div>
            <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
          </div>
          <div class="question-body" style="display:block;">
            <span class="answer-badge"><i class="fas fa-award"></i> Comprehensive Diagnostic Solution:</span>
            <div style="margin-top:10px;">${q.solution}</div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  function renderCaseBlueprint(cs) {
    let bp = cs.blueprint;
    let html = `
      <div class="notes-container">
        <div class="callout callout-tip">
          <div class="callout-title"><i class="fas fa-check-circle"></i> Deliverable: ${bp.title}</div>
          <p>${bp.scope} — Fully structured according to Amity University curriculum guidelines.</p>
        </div>
    `;

    bp.sections.forEach(sec => {
      html += `
        <div class="topic-card" id="${sec.id}">
          <div class="topic-header">
            <div>
              <div class="topic-badge-wrapper">
                <span class="badge badge-blue">Blueprint Section</span>
                <span class="badge badge-green">Strategic Deliverable</span>
              </div>
              <h2 class="topic-title">${sec.title}</h2>
            </div>
          </div>
          <div class="note-content">
            ${sec.content}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // Render Exam & PSDA View
  function renderExamPsdaView() {
    const data = window.EXAM_PSDA_DATA;
    if (!data) return;

    let html = `
      <div class="hero-banner" style="background: linear-gradient(135deg, #312e81 0%, #0f172a 100%);">
        <div class="hero-tag"><i class="fas fa-shield-alt"></i> BC109 • Academic & Practical Toolkit</div>
        <h1 class="hero-title">${data.title}</h1>
        <p class="hero-desc">Complete examination grading architecture, Group Discussion (GD) masterplaybook, Professional Skill Development Activities (PSDA) practical guides, and a 50-mark End-Term Model Exam Paper.</p>
      </div>

      <div class="notes-container">
        <!-- Assessment Scheme Card -->
        <div class="topic-card">
          <div class="topic-header">
            <h2 class="topic-title"><i class="fas fa-chart-pie" style="color:var(--primary-light);"></i> ${data.evaluationScheme.title}</h2>
          </div>
          <div class="note-content">
            <p>The course evaluates students through Continuous Internal Assessment (50%) and the University End-Term Examination (50%):</p>
            <div class="table-responsive">
              <table class="content-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Weightage</th>
                    <th>Operational Description</th>
                  </tr>
                </thead>
                <tbody>
                  ${data.evaluationScheme.components.map(c => `
                    <tr>
                      <td><strong>${c.name}</strong></td>
                      <td><span class="badge badge-blue">${c.weightage}</span></td>
                      <td>${c.description}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- GD Playbook Card -->
        <div class="topic-card">
          <div class="topic-header">
            <h2 class="topic-title"><i class="fas fa-comments" style="color:var(--accent-emerald);"></i> ${data.gdPlaybook.title}</h2>
          </div>
          <div class="note-content">
            <h3>Evaluation Criteria for Group Discussions:</h3>
            <div class="feature-grid">
              ${data.gdPlaybook.coreEvaluationCriteria.map(ec => `
                <div class="feature-card">
                  <div class="feature-card-header"><i class="fas fa-check-circle"></i> ${ec.title}</div>
                  <p>${ec.desc}</p>
                </div>
              `).join('')}
            </div>

            <h3>Strategic Participant Roles:</h3>
            <div class="feature-grid">
              ${data.gdPlaybook.roles.map(r => `
                <div class="feature-card">
                  <div class="feature-card-header"><i class="fas fa-user-check"></i> ${r.role}</div>
                  <p>${r.tip}</p>
                </div>
              `).join('')}
            </div>

            <h3>Top 10 High-Probability GD Topics for BC109:</h3>
            <ol style="margin-top:12px; padding-left:22px;">
              ${data.gdPlaybook.trendingTopics.map(t => `<li style="margin-bottom:8px; font-weight:600;">${t}</li>`).join('')}
            </ol>
          </div>
        </div>

        <!-- PSDA Exercises Card -->
        <div class="topic-card">
          <div class="topic-header">
            <h2 class="topic-title"><i class="fas fa-laptop-code" style="color:var(--accent-gold);"></i> Professional Skill Development Activities (PSDA)</h2>
          </div>
          <div class="note-content">
            <div class="feature-grid">
              ${data.psdaExercises.map(ex => `
                <div class="feature-card">
                  <div class="feature-card-header"><i class="fas fa-rocket"></i> ${ex.title}</div>
                  <p><strong>Objective:</strong> ${ex.objective}</p>
                  <p style="margin-top:6px;"><strong>Simulation Scenario:</strong> ${ex.scenario}</p>
                  <p style="margin-top:6px; color:var(--accent-emerald);"><strong>Key Takeaway:</strong> ${ex.learningOutcomes}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Mock Exam Paper Card -->
        <div class="topic-card">
          <div class="topic-header">
            <h2 class="topic-title"><i class="fas fa-file-signature" style="color:var(--primary-light);"></i> ${data.mockExamPaper.title} (${data.mockExamPaper.totalMarks} Marks - ${data.mockExamPaper.duration})</h2>
          </div>
          <div class="note-content">
            ${data.mockExamPaper.sections.map(sec => `
              <div style="margin-top:20px; padding:16px; background:var(--bg-card-subtle); border-radius:var(--radius-md); border-left:4px solid var(--primary-light);">
                <h4 style="font-size:16px; margin-bottom:12px; color:var(--primary-light);">${sec.section}</h4>
                ${sec.questions.map(q => `
                  <div style="margin-bottom:16px; padding-bottom:12px; border-bottom:1px dashed var(--border-color);">
                    <div style="font-weight:700; color:var(--text-main); margin-bottom:6px;">${q.q}</div>
                    <div style="font-size:14px; color:var(--text-muted);"><strong>Model Answer:</strong> ${q.a}</div>
                  </div>
                `).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;

    mainContent.innerHTML = html;
  }

  // Global Search Engine
  function performGlobalSearch(query) {
    if (!query || query.trim().length < 2) {
      searchResultsOverlay.classList.remove('active');
      return;
    }

    const cleanQuery = query.toLowerCase().trim();
    const results = [];

    const allModules = [
      window.MODULE_1_DATA,
      window.MODULE_2_DATA,
      window.MODULE_3_DATA,
      window.MODULE_4_DATA,
      window.MODULE_5_DATA,
      window.MODULE_6_DATA
    ];

    allModules.forEach(mod => {
      if (!mod) return;
      // Search topics
      mod.topics.forEach(t => {
        if (t.title.toLowerCase().includes(cleanQuery) || t.content.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Theory Topic',
            module: mod.title,
            targetView: mod.id,
            targetTab: 'notes',
            targetId: t.id,
            title: t.title,
            snippet: getSnippet(t.content, cleanQuery)
          });
        }
      });

      // Search Questions
      const allQs = [...(mod.questions.shortAnswer || []), ...(mod.questions.longEssay || [])];
      allQs.forEach(q => {
        if (q.question.toLowerCase().includes(cleanQuery) || q.answer.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: `Question (${q.marks})`,
            module: mod.title,
            targetView: mod.id,
            targetTab: 'questions',
            targetId: q.id,
            title: q.question,
            snippet: getSnippet(q.answer, cleanQuery)
          });
        }
      });
    });

    // Search Models & Glossary
    if (window.GLOSSARY_MODELS_DATA) {
      const gmd = window.GLOSSARY_MODELS_DATA;
      gmd.models.forEach(m => {
        if (m.name.toLowerCase().includes(cleanQuery) || m.description.toLowerCase().includes(cleanQuery) || m.diagram.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Communication Model',
            module: 'Models Encyclopedia',
            targetView: 'glossary-models',
            targetTab: 'models',
            targetId: m.id,
            title: m.name,
            snippet: getSnippet(m.description, cleanQuery)
          });
        }
      });

      gmd.glossary.forEach(g => {
        if (g.term.toLowerCase().includes(cleanQuery) || g.def.toLowerCase().includes(cleanQuery) || g.example.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: `Glossary Term (${g.category})`,
            module: 'A-Z Glossary',
            targetView: 'glossary-models',
            targetTab: 'glossary',
            targetId: `gloss-${g.term.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
            title: `${g.term} ${g.phonetic}`,
            snippet: `${g.def} (Example: ${g.example})`
          });
        }
      });
    }

    // Search Case Study
    if (window.CASE_STUDY_DATA) {
      const cs = window.CASE_STUDY_DATA;
      cs.analyticalQuestions.forEach(q => {
        if (q.title.toLowerCase().includes(cleanQuery) || q.solution.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Case Study Question',
            module: cs.title,
            targetView: 'case-study',
            targetTab: 'notes',
            targetId: q.id,
            title: q.title,
            snippet: getSnippet(q.solution, cleanQuery)
          });
        }
      });

      cs.blueprint.sections.forEach(sec => {
        if (sec.title.toLowerCase().includes(cleanQuery) || sec.content.toLowerCase().includes(cleanQuery)) {
          results.push({
            type: 'Blueprint Section',
            module: cs.title,
            targetView: 'case-study',
            targetTab: 'blueprint',
            targetId: sec.id,
            title: sec.title,
            snippet: getSnippet(sec.content, cleanQuery)
          });
        }
      });
    }

    renderSearchResults(results, cleanQuery);
  }

  function getSnippet(htmlStr, query) {
    const text = htmlStr.replace(/<[^>]*>?/gm, '');
    const idx = text.toLowerCase().indexOf(query);
    if (idx === -1) return text.substring(0, 130) + '...';
    const start = Math.max(0, idx - 40);
    const end = Math.min(text.length, idx + query.length + 90);
    return (start > 0 ? '...' : '') + text.substring(start, end) + (end < text.length ? '...' : '');
  }

  function renderSearchResults(results, query) {
    searchResultsOverlay.classList.add('active');
    let html = `
      <div style="font-size:14px; color:var(--text-muted); margin-bottom:14px;">
        Found <strong>${results.length}</strong> matches for "<span style="color:var(--primary-light); font-weight:700;">${query}</span>":
      </div>
    `;

    if (results.length === 0) {
      html += `<p style="padding:20px; text-align:center; color:var(--text-muted);">No matching topics or questions found. Try refining your keywords (e.g., 'HURIER', 'Proxemics', 'Ethos', 'Grapevine', '7 Cs', 'Johari').</p>`;
    } else {
      results.slice(0, 30).forEach(res => {
        html += `
          <div class="search-result-item" data-view="${res.targetView}" data-tab="${res.targetTab}" data-target-id="${res.targetId}">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
              <span class="badge badge-blue">${res.type}</span>
              <span style="font-size:11px; color:var(--text-muted);">${res.module}</span>
            </div>
            <div style="font-weight:700; font-size:15px; margin-bottom:4px; color:var(--text-main);">${res.title}</div>
            <div style="font-size:13px; color:var(--text-muted); line-height:1.4;">${res.snippet}</div>
          </div>
        `;
      });
    }

    searchResultsContent.innerHTML = html;

    document.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        const view = item.getAttribute('data-view');
        const tab = item.getAttribute('data-tab');
        const targetId = item.getAttribute('data-target-id');

        searchResultsOverlay.classList.remove('active');
        state.currentTab = tab;
        navigateTo(view);

        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            if (el.classList.contains('question-card')) {
              el.classList.add('open');
            }
          }
        }, 300);
      });
    });
  }

  let debounceTimer;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      performGlobalSearch(e.target.value);
    }, 200);
  });

  closeSearchBtn.addEventListener('click', () => {
    searchResultsOverlay.classList.remove('active');
    searchInput.value = '';
  });

  // Flashcards Feature
  function buildFlashcards() {
    const cards = [];
    const allModules = [
      window.MODULE_1_DATA,
      window.MODULE_2_DATA,
      window.MODULE_3_DATA,
      window.MODULE_4_DATA,
      window.MODULE_5_DATA,
      window.MODULE_6_DATA
    ];

    allModules.forEach(mod => {
      if (!mod || !mod.questions) return;
      (mod.questions.shortAnswer || []).forEach(q => {
        cards.push({
          module: mod.title,
          type: q.marks,
          front: q.question,
          back: q.answer
        });
      });
    });

    if (window.GLOSSARY_MODELS_DATA) {
      window.GLOSSARY_MODELS_DATA.glossary.forEach(g => {
        cards.push({
          module: `A-Z Glossary (${g.category})`,
          type: "Key Concept",
          front: `Define and provide an example of: ${g.term} (${g.phonetic})`,
          back: `<strong>Definition:</strong> ${g.def}<br><br><strong>Example:</strong> ${g.example}`
        });
      });
    }

    state.flashcardList = cards;
  }

  flashcardBtn.addEventListener('click', () => {
    buildFlashcards();
    if (state.flashcardList.length === 0) return;
    state.activeFlashcardIndex = 0;
    renderFlashcard();
    flashcardModal.classList.add('active');
  });

  closeFlashcardBtn.addEventListener('click', () => {
    flashcardModal.classList.remove('active');
  });

  function renderFlashcard() {
    const card = state.flashcardList[state.activeFlashcardIndex];
    if (!card) return;

    flashcardCounter.textContent = `${state.activeFlashcardIndex + 1} / ${state.flashcardList.length}`;
    flashcardInner.setAttribute('data-side', 'front');
    flashcardInner.innerHTML = `
      <div style="font-size:12px; text-transform:uppercase; font-weight:800; color:var(--primary-light); margin-bottom:8px;">${card.module} • ${card.type}</div>
      <div style="font-size:18px; font-weight:700; color:var(--text-main);">${card.front}</div>
      <div style="margin-top:16px; font-size:12px; color:var(--text-muted);"><i class="fas fa-hand-pointer"></i> Click card or Flip button to reveal answer</div>
    `;
  }

  function flipFlashcard() {
    const side = flashcardInner.getAttribute('data-side');
    const card = state.flashcardList[state.activeFlashcardIndex];
    if (side === 'front') {
      flashcardInner.setAttribute('data-side', 'back');
      flashcardInner.innerHTML = `
        <div style="font-size:12px; text-transform:uppercase; font-weight:800; color:var(--accent-emerald); margin-bottom:8px;"><i class="fas fa-check-circle"></i> Model Answer</div>
        <div style="font-size:14px; line-height:1.65; color:var(--text-main); text-align:left;">${card.back}</div>
      `;
    } else {
      renderFlashcard();
    }
  }

  flashcardInner.addEventListener('click', flipFlashcard);
  flipCardBtn.addEventListener('click', flipFlashcard);

  prevCardBtn.addEventListener('click', () => {
    if (state.activeFlashcardIndex > 0) {
      state.activeFlashcardIndex--;
      renderFlashcard();
    }
  });

  nextCardBtn.addEventListener('click', () => {
    if (state.activeFlashcardIndex < state.flashcardList.length - 1) {
      state.activeFlashcardIndex++;
      renderFlashcard();
    }
  });

  // Print Notes
  printNotesBtn.addEventListener('click', () => {
    window.print();
  });

  // Initial Load
  navigateTo('module-1');
});
