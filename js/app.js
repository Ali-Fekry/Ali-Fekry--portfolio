/**
 * ALI FEKRY MOHAMED - SOC ANALYST PORTFOLIO APPLICATION LOGIC
 * High-performance vanilla JavaScript powering interactive SOC visualizations.
 */

document.addEventListener("DOMContentLoaded", () => {
  // SVG Icon Helper
  function getIcon(name, size = 18, className = "") {
    const icons = {
      shield: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
      terminal: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`,
      activity: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
      alertTriangle: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
      checkCircle: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
      network: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V8"/></svg>`,
      server: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      lock: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
      search: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
      mail: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      phone: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
      mapPin: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
      fileText: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
      download: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
      externalLink: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
      copy: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
      chevronRight: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
      arrowRight: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
      github: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
      linkedin: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
      cpu: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>`,
      eye: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
      crosshair: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/></svg>`,
      bookOpen: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
      award: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
      send: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
      close: `<svg width="${size}" height="${size}" class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`
    };
    return icons[name] || "";
  }

  // Toast Notification Helper
  const toastEl = document.getElementById("toastNotice");
  const toastText = document.getElementById("toastText");
  let toastTimeout = null;

  function showToast(message) {
    if (!toastEl) return;
    toastText.textContent = message;
    toastEl.classList.add("show");
    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove("show");
    }, 3200);
  }

  // Clipboard Helper
  function copyToClipboard(text, successMsg = "Copied to clipboard!") {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMsg);
    }).catch(() => {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      showToast(successMsg);
    });
  }

  // Setup Global Click Handlers for Copy Buttons
  document.querySelectorAll("[data-copy]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const val = btn.getAttribute("data-copy");
      const label = btn.getAttribute("data-copy-label") || "Text";
      copyToClipboard(val, `Copied ${label} to clipboard!`);
    });
  });

  // Sticky Nav Shadow & Active Spy
  const siteNav = document.getElementById("siteNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 30) {
      siteNav.classList.add("scrolled");
    } else {
      siteNav.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobileToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");
    });
    mobileMenu.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
      });
    });
  }

  // ==========================================================================
  // MINIATURE SOC DASHBOARD LOGIC
  // ==========================================================================
  const alertContainer = document.getElementById("socAlertList");
  const alertFilters = document.querySelectorAll(".soc-filter-btn");
  let currentAlertFilter = "all";
  let activeAlertsState = [...PORTFOLIO_DATA.socDashboard.alerts];

  function renderAlertList() {
    if (!alertContainer) return;
    alertContainer.innerHTML = "";

    const filtered = activeAlertsState.filter(a => {
      if (currentAlertFilter === "all") return true;
      if (currentAlertFilter === "critical") return a.severity.toLowerCase() === "critical";
      if (currentAlertFilter === "high") return a.severity.toLowerCase() === "high";
      if (currentAlertFilter === "medium") return a.severity.toLowerCase() === "medium";
      if (currentAlertFilter === "investigating") return a.status.toLowerCase() === "investigating";
      if (currentAlertFilter === "resolved") return a.status.toLowerCase() === "resolved";
      return true;
    });

    if (filtered.length === 0) {
      alertContainer.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
          No simulated alerts matching the filter '${currentAlertFilter}'.
        </div>
      `;
      return;
    }

    filtered.forEach(alert => {
      const card = document.createElement("div");
      card.className = `alert-card ${alert.severity.toLowerCase()}`;
      card.innerHTML = `
        <div class="alert-card-header">
          <div class="alert-threat-name">
            ${getIcon(alert.severity === "CRITICAL" ? "alertTriangle" : "activity", 16, alert.severity === "CRITICAL" ? "text-red" : "text-cyan")}
            <span>${alert.threat}</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">[${alert.id}]</span>
          </div>
          <div class="alert-badges">
            <span class="badge-severity ${alert.severity.toLowerCase()}">${alert.severity}</span>
            <span class="badge-status ${alert.status.toLowerCase()}">${alert.status}</span>
          </div>
        </div>
        <div class="alert-ioc-summary">
          <strong>IOC:</strong> ${alert.ioc}
        </div>
        <div class="alert-footer-meta">
          <span><strong>Sensor:</strong> ${alert.source}</span>
          <span><strong>Activity:</strong> ${alert.timestamp} • Click to Inspect</span>
        </div>
      `;
      card.addEventListener("click", () => openAlertModal(alert));
      alertContainer.appendChild(card);
    });
  }

  alertFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      alertFilters.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAlertFilter = btn.getAttribute("data-filter");
      renderAlertList();
    });
  });

  // Alert Modal
  const alertModalBackdrop = document.getElementById("alertModal");
  const modalThreatTitle = document.getElementById("modalThreatTitle");
  const modalAlertId = document.getElementById("modalAlertId");
  const modalSeverityBadge = document.getElementById("modalSeverityBadge");
  const modalStatusBadge = document.getElementById("modalStatusBadge");
  const modalSensor = document.getElementById("modalSensor");
  const modalMitre = document.getElementById("modalMitre");
  const modalLogSnippet = document.getElementById("modalLogSnippet");
  const modalInvestigationSteps = document.getElementById("modalInvestigationSteps");
  const modalContainment = document.getElementById("modalContainment");
  const toggleAlertStatusBtn = document.getElementById("toggleAlertStatusBtn");
  const copyLogBtn = document.getElementById("copyLogBtn");
  let currentViewingAlert = null;

  function openAlertModal(alert) {
    currentViewingAlert = alert;
    if (!alertModalBackdrop) return;

    modalThreatTitle.textContent = alert.threat;
    modalAlertId.textContent = alert.id;
    modalSeverityBadge.className = `badge-severity ${alert.severity.toLowerCase()}`;
    modalSeverityBadge.textContent = alert.severity;
    
    updateModalStatusView(alert.status);
    
    modalSensor.textContent = alert.source;
    modalMitre.textContent = alert.mitre;
    modalLogSnippet.textContent = alert.logSnippet;
    modalContainment.textContent = alert.containment;

    modalInvestigationSteps.innerHTML = "";
    alert.investigationSteps.forEach(step => {
      const li = document.createElement("li");
      li.style.marginBottom = "0.35rem";
      li.textContent = step;
      modalInvestigationSteps.appendChild(li);
    });

    alertModalBackdrop.classList.add("open");
  }

  function updateModalStatusView(status) {
    modalStatusBadge.className = `badge-status ${status.toLowerCase()}`;
    modalStatusBadge.textContent = status;
    if (toggleAlertStatusBtn) {
      if (status.toLowerCase() === "investigating") {
        toggleAlertStatusBtn.textContent = "Mark as Resolved";
        toggleAlertStatusBtn.className = "btn btn-emerald btn-sm";
      } else {
        toggleAlertStatusBtn.textContent = "Reopen Investigation";
        toggleAlertStatusBtn.className = "btn btn-secondary btn-sm";
      }
    }
  }

  if (toggleAlertStatusBtn) {
    toggleAlertStatusBtn.addEventListener("click", () => {
      if (!currentViewingAlert) return;
      const newStatus = currentViewingAlert.status === "Investigating" ? "Resolved" : "Investigating";
      currentViewingAlert.status = newStatus;
      updateModalStatusView(newStatus);
      renderAlertList();
      showToast(`Alert ${currentViewingAlert.id} status updated to ${newStatus}`);
    });
  }

  if (copyLogBtn) {
    copyLogBtn.addEventListener("click", () => {
      if (currentViewingAlert) {
        copyToClipboard(currentViewingAlert.logSnippet, "Raw log snippet copied!");
      }
    });
  }

  document.querySelectorAll("[data-close-modal]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (alertModalBackdrop) alertModalBackdrop.classList.remove("open");
      const recruiterModal = document.getElementById("recruiterModal");
      if (recruiterModal) recruiterModal.classList.remove("open");
    });
  });

  if (alertModalBackdrop) {
    alertModalBackdrop.addEventListener("click", (e) => {
      if (e.target === alertModalBackdrop) {
        alertModalBackdrop.classList.remove("open");
      }
    });
  }

  // ==========================================================================
  // SKILLS & TOOLKIT RENDERER
  // ==========================================================================
  const skillsContainer = document.getElementById("skillsDisplayGrid");
  const skillTabs = document.querySelectorAll(".skills-tab-btn");
  const skillSearchInput = document.getElementById("skillSearchInput");
  let activeSkillCategory = "all";

  function getMergedSkills() {
    const s = PORTFOLIO_DATA.skills;
    const items = [];
    s.secOps.forEach(item => items.push({ ...item, category: "secOps", catName: "Security Operations" }));
    s.networking.forEach(item => items.push({ ...item, category: "networking", catName: "Networking" }));
    s.threats.forEach(item => items.push({ ...item, category: "threats", catName: "Threats & Attacks", level: item.type }));
    s.tools.forEach(item => items.push({ ...item, category: "tools", catName: "Security Tools", level: item.category, desc: item.useCase }));
    s.frameworks.forEach(item => items.push({ ...item, category: "frameworks", catName: "Frameworks", level: item.focus }));
    return items;
  }

  function renderSkills() {
    if (!skillsContainer) return;
    skillsContainer.innerHTML = "";
    const query = (skillSearchInput ? skillSearchInput.value : "").trim().toLowerCase();
    const all = getMergedSkills();

    const filtered = all.filter(sk => {
      const matchCat = activeSkillCategory === "all" || 
                       (activeSkillCategory === "secOps" && sk.category === "secOps") ||
                       (activeSkillCategory === "networking" && sk.category === "networking") ||
                       (activeSkillCategory === "threats" && sk.category === "threats") ||
                       (activeSkillCategory === "tools" && (sk.category === "tools" || sk.category === "frameworks"));

      const matchQuery = !query || 
                         sk.name.toLowerCase().includes(query) || 
                         sk.desc.toLowerCase().includes(query) ||
                         (sk.catName && sk.catName.toLowerCase().includes(query));

      return matchCat && matchQuery;
    });

    if (filtered.length === 0) {
      skillsContainer.innerHTML = `
        <div style="grid-column: 1/-1; padding: 2.5rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono);">
          No technical skills found matching your query "${query}".
        </div>
      `;
      return;
    }

    filtered.forEach(sk => {
      const card = document.createElement("div");
      card.className = "skill-pill-card";
      card.innerHTML = `
        <div class="skill-card-top">
          <span class="skill-card-title">${sk.name}</span>
          <span class="skill-card-badge">${sk.level || sk.catName}</span>
        </div>
        <div class="skill-card-desc">${sk.desc}</div>
      `;
      skillsContainer.appendChild(card);
    });
  }

  skillTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      skillTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeSkillCategory = btn.getAttribute("data-category");
      renderSkills();
    });
  });

  if (skillSearchInput) {
    skillSearchInput.addEventListener("input", () => {
      renderSkills();
    });
  }

  // ==========================================================================
  // HANDS-ON INVESTIGATION LAB RENDERER
  // ==========================================================================
  const labNavList = document.getElementById("labNavList");
  const labDetailTitle = document.getElementById("labDetailTitle");
  const labDetailBadge = document.getElementById("labDetailBadge");
  const labDetailDesc = document.getElementById("labDetailDesc");
  const labStepsContainer = document.getElementById("labWorkflowSteps");
  let activeLabId = PORTFOLIO_DATA.handsOnLabs[0].id;

  function renderLabSelector() {
    if (!labNavList) return;
    labNavList.innerHTML = "";

    PORTFOLIO_DATA.handsOnLabs.forEach(lab => {
      const btn = document.createElement("button");
      btn.className = `lab-nav-item ${lab.id === activeLabId ? "active" : ""}`;
      btn.innerHTML = `
        <span class="lab-nav-icon">${getIcon("shield", 18)}</span>
        <span class="lab-nav-title">${lab.title}</span>
      `;
      btn.addEventListener("click", () => {
        activeLabId = lab.id;
        document.querySelectorAll(".lab-nav-item").forEach(el => el.classList.remove("active"));
        btn.classList.add("active");
        renderLabDetail();
      });
      labNavList.appendChild(btn);
    });
  }

  function renderLabDetail() {
    const lab = PORTFOLIO_DATA.handsOnLabs.find(l => l.id === activeLabId) || PORTFOLIO_DATA.handsOnLabs[0];
    if (!labDetailTitle) return;

    labDetailTitle.textContent = lab.title;
    labDetailBadge.textContent = lab.badge;
    labDetailDesc.textContent = lab.description;

    labStepsContainer.innerHTML = "";
    lab.workflow.forEach((step, idx) => {
      const stepRow = document.createElement("div");
      stepRow.className = "workflow-step-item";
      stepRow.innerHTML = `
        <div class="step-marker">${idx + 1}</div>
        <div class="step-content">
          <div class="step-label">${step.label}</div>
          <div class="step-text">${step.text}</div>
        </div>
      `;
      labStepsContainer.appendChild(stepRow);
    });
  }

  // ==========================================================================
  // 7-STAGE SOC ALERT TRIAGE STEPPER
  // ==========================================================================
  const stepperNav = document.getElementById("triageStepperNav");
  const triageStepNumber = document.getElementById("triageStepNumber");
  const triageStepName = document.getElementById("triageStepName");
  const triageStepDesc = document.getElementById("triageStepDesc");
  const triageStepAction = document.getElementById("triageStepAction");
  const triagePrevBtn = document.getElementById("triagePrevBtn");
  const triageNextBtn = document.getElementById("triageNextBtn");
  let currentTriageStep = 1;

  function renderTriageStepper() {
    if (!stepperNav) return;
    stepperNav.innerHTML = "";

    PORTFOLIO_DATA.triageWorkflow.forEach(item => {
      const btn = document.createElement("button");
      const isActive = item.step === currentTriageStep;
      const isCompleted = item.step < currentTriageStep;
      btn.className = `stepper-btn ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`;
      btn.innerHTML = `
        <div class="stepper-circle">${item.step}</div>
        <div class="stepper-title">${item.name}</div>
      `;
      btn.addEventListener("click", () => {
        currentTriageStep = item.step;
        updateTriageDisplay();
      });
      stepperNav.appendChild(btn);
    });

    updateTriageDisplay();
  }

  function updateTriageDisplay() {
    const current = PORTFOLIO_DATA.triageWorkflow.find(w => w.step === currentTriageStep) || PORTFOLIO_DATA.triageWorkflow[0];
    if (!triageStepNumber) return;

    triageStepNumber.textContent = `STAGE 0${current.step} / 07`;
    triageStepName.textContent = current.name;
    triageStepDesc.textContent = current.desc;
    triageStepAction.textContent = current.action;

    // Update buttons
    if (triagePrevBtn) triagePrevBtn.disabled = currentTriageStep === 1;
    if (triageNextBtn) triageNextBtn.disabled = currentTriageStep === PORTFOLIO_DATA.triageWorkflow.length;

    // Update classes
    document.querySelectorAll(".stepper-btn").forEach((btn, idx) => {
      const stepNum = idx + 1;
      btn.classList.toggle("active", stepNum === currentTriageStep);
      btn.classList.toggle("completed", stepNum < currentTriageStep);
    });
  }

  if (triagePrevBtn) {
    triagePrevBtn.addEventListener("click", () => {
      if (currentTriageStep > 1) {
        currentTriageStep--;
        updateTriageDisplay();
      }
    });
  }

  if (triageNextBtn) {
    triageNextBtn.addEventListener("click", () => {
      if (currentTriageStep < PORTFOLIO_DATA.triageWorkflow.length) {
        currentTriageStep++;
        updateTriageDisplay();
      }
    });
  }

  // ==========================================================================
  // CASE STUDIES RENDERER
  // ==========================================================================
  const caseStudiesGrid = document.getElementById("caseStudiesGrid");

  function renderCaseStudies() {
    if (!caseStudiesGrid) return;
    caseStudiesGrid.innerHTML = "";

    PORTFOLIO_DATA.caseStudies.forEach(cs => {
      const card = document.createElement("div");
      card.className = "case-card";
      card.innerHTML = `
        <div class="case-header">
          <div>
            <span class="badge-severity ${cs.severity.toLowerCase()}">${cs.severity} Severity</span>
            <h3 class="case-title" style="margin-top: 0.5rem;">${cs.title}</h3>
          </div>
          <span class="badge-status investigating" style="margin-top: 0.2rem;">${cs.badge}</span>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("alertTriangle", 14)}
            <span>Threat Identification</span>
          </div>
          <div class="case-field-val" style="font-weight: 600; color: var(--text-primary);">${cs.threat}</div>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("activity", 14)}
            <span>Key Indicators (IOCs)</span>
          </div>
          <div class="ioc-badge-list">
            ${cs.indicators.map(ioc => `<div class="ioc-pill"><span>•</span> <span>${ioc}</span></div>`).join("")}
          </div>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("terminal", 14)}
            <span>Investigation Workflow</span>
          </div>
          <div class="case-field-val">${cs.investigation}</div>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("crosshair", 14)}
            <span>MITRE ATT&CK Mapping</span>
          </div>
          <div class="case-field-val" style="font-family: var(--font-mono); color: var(--text-cyan); font-size: 0.8125rem;">${cs.mitreMapping}</div>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("shield", 14)}
            <span>Containment & Mitigation</span>
          </div>
          <div class="case-field-val">${cs.response}</div>
        </div>

        <div class="case-field-block">
          <div class="case-field-label">
            ${getIcon("checkCircle", 14)}
            <span>Outcome</span>
          </div>
          <div class="case-field-val" style="color: var(--accent-emerald); font-weight: 500;">${cs.outcome}</div>
        </div>

        <div class="case-placeholder-box">
          <em>[Notice] ${cs.placeholderNotice}</em>
        </div>
      `;
      caseStudiesGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // VISUAL NETWORKING EXPLORER
  // ==========================================================================
  const networkGridDiagram = document.getElementById("networkGridDiagram");
  const netNodeName = document.getElementById("netNodeName");
  const netNodeLayer = document.getElementById("netNodeLayer");
  const netNodeRole = document.getElementById("netNodeRole");
  const netNodeSocPerspective = document.getElementById("netNodeSocPerspective");
  const netNodeProtocols = document.getElementById("netNodeProtocols");
  let activeNetNodeId = PORTFOLIO_DATA.networkingNodes[0].id;

  function renderNetworkDiagram() {
    if (!networkGridDiagram) return;
    networkGridDiagram.innerHTML = "";

    PORTFOLIO_DATA.networkingNodes.forEach(node => {
      const btn = document.createElement("button");
      btn.className = `network-node-btn ${node.id === activeNetNodeId ? "active" : ""}`;
      btn.innerHTML = `
        <div class="node-icon-wrap">${getIcon("network", 20)}</div>
        <div class="node-text-wrap">
          <span class="node-name">${node.name}</span>
          <span class="node-layer">${node.layer}</span>
        </div>
      `;
      btn.addEventListener("click", () => {
        activeNetNodeId = node.id;
        document.querySelectorAll(".network-node-btn").forEach(el => el.classList.remove("active"));
        btn.classList.add("active");
        updateNetNodeDetail();
      });
      networkGridDiagram.appendChild(btn);
    });

    updateNetNodeDetail();
  }

  function updateNetNodeDetail() {
    const node = PORTFOLIO_DATA.networkingNodes.find(n => n.id === activeNetNodeId) || PORTFOLIO_DATA.networkingNodes[0];
    if (!netNodeName) return;

    netNodeName.textContent = node.name;
    netNodeLayer.textContent = node.layer;
    netNodeRole.textContent = node.role;
    netNodeSocPerspective.textContent = node.socPerspective;

    netNodeProtocols.innerHTML = "";
    node.protocols.forEach(proto => {
      const span = document.createElement("span");
      span.className = "hero-badge";
      span.style.fontSize = "0.75rem";
      span.textContent = proto;
      netNodeProtocols.appendChild(span);
    });
  }

  // ==========================================================================
  // MITRE ATT&CK SECTION
  // ==========================================================================
  const mitreGrid = document.getElementById("mitreGrid");

  function renderMitreMatrix() {
    if (!mitreGrid) return;
    mitreGrid.innerHTML = "";

    PORTFOLIO_DATA.mitreTechniques.forEach(t => {
      const card = document.createElement("div");
      card.className = "mitre-card";
      card.innerHTML = `
        <div class="mitre-card-top">
          <span class="mitre-tid">${t.id}</span>
          <span class="mitre-tactic-name">${t.tactic}</span>
        </div>
        <div class="mitre-technique-name">${t.name}</div>
        <p style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 0.5rem;">${t.description}</p>
        
        <div style="margin-top: auto; border-top: 1px dashed var(--border-subtle); padding-top: 0.75rem;">
          <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--accent-cyan); font-weight: 700; margin-bottom: 0.25rem;">
            ALI'S DETECTION & INVESTIGATION APPROACH:
          </div>
          <div style="font-size: 0.8125rem; color: var(--text-primary); line-height: 1.4;">${t.aliApproach}</div>
          <div style="font-family: var(--font-mono); font-size: 0.6875rem; color: var(--text-muted); margin-top: 0.4rem;">
            <strong>Telemetry:</strong> ${t.telemetrySource}
          </div>
        </div>
      `;
      mitreGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // CAREER TIMELINE RENDERER
  // ==========================================================================
  const timelineContainer = document.getElementById("careerTimelineFlow");

  function renderCareerTimeline() {
    if (!timelineContainer) return;
    timelineContainer.innerHTML = "";

    PORTFOLIO_DATA.careerTimeline.forEach(item => {
      const node = document.createElement("div");
      node.className = "timeline-node";
      node.innerHTML = `
        <div class="timeline-bullet"></div>
        <div class="timeline-card">
          <div class="timeline-period">${item.period} • ${item.badge}</div>
          <h3 class="timeline-title">${item.title}</h3>
          <div class="timeline-institution">${item.institution} — <strong>${item.grade}</strong></div>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${item.description}</p>
        </div>
      `;
      timelineContainer.appendChild(node);
    });
  }

  // ==========================================================================
  // TRAINING & COURSES RENDERER (Strictly Honest Credentials)
  // ==========================================================================
  const certsContainer = document.getElementById("coursesCertsGrid");
  const labsContainer = document.getElementById("coursesLabsGrid");
  const foundationsContainer = document.getElementById("coursesFoundationsGrid");

  function renderCourses() {
    const data = PORTFOLIO_DATA.trainingAndCourses;

    if (certsContainer) {
      certsContainer.innerHTML = "";
      data.certifications.forEach(c => {
        const card = document.createElement("div");
        card.className = "course-card certified";
        card.innerHTML = `
          <div class="badge-course-type cert">
            ${getIcon("award", 12)} ${c.badge}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary);">${c.title}</h3>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent-emerald);">${c.provider}</div>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${c.description}</p>
        `;
        certsContainer.appendChild(card);
      });
    }

    if (labsContainer) {
      labsContainer.innerHTML = "";
      data.handsOnPrograms.forEach(c => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
          <div class="badge-course-type lab">
            ${getIcon("terminal", 12)} ${c.badge}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary);">${c.title}</h3>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--accent-cyan);">${c.provider}</div>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${c.description}</p>
        `;
        labsContainer.appendChild(card);
      });
    }

    if (foundationsContainer) {
      foundationsContainer.innerHTML = "";
      data.conceptualFoundations.forEach(c => {
        const card = document.createElement("div");
        card.className = "course-card";
        card.innerHTML = `
          <div class="badge-course-type concept">
            ${getIcon("bookOpen", 12)} ${c.badge}
          </div>
          <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--text-primary);">${c.title}</h3>
          <div style="font-family: var(--font-mono); font-size: 0.8125rem; color: var(--text-muted);">${c.provider}</div>
          <p style="font-size: 0.875rem; color: var(--text-secondary); line-height: 1.5;">${c.description}</p>
        `;
        foundationsContainer.appendChild(card);
      });
    }
  }

  // ==========================================================================
  // RECRUITER 30-SECOND FAST TRACK MODAL
  // ==========================================================================
  const recruiterModal = document.getElementById("recruiterModal");
  const openRecruiterBtns = document.querySelectorAll(".btn-open-recruiter");

  openRecruiterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (recruiterModal) recruiterModal.classList.add("open");
    });
  });

  if (recruiterModal) {
    recruiterModal.addEventListener("click", (e) => {
      if (e.target === recruiterModal) {
        recruiterModal.classList.remove("open");
      }
    });
  }

  // ==========================================================================
  // CONTACT FORM LOGIC
  // ==========================================================================
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const senderName = document.getElementById("senderName").value.trim();
      const senderEmail = document.getElementById("senderEmail").value.trim();
      const senderSubject = document.getElementById("senderSubject").value.trim() || "SOC Analyst Opportunity";
      const senderMessage = document.getElementById("senderMessage").value.trim();

      if (!senderName || !senderEmail || !senderMessage) {
        showToast("Please fill in all required fields.");
        return;
      }

      const emailBody = `Name: ${senderName}\nEmail: ${senderEmail}\n\nMessage:\n${senderMessage}`;
      const mailtoLink = `mailto:aly.fekry10@gmail.com?subject=${encodeURIComponent(senderSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Copy message to clipboard for convenience
      copyToClipboard(emailBody, "Message prepared! Opening mail client...");
      
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 500);
    });
  }

  // INITIALIZE ALL SECTIONS
  renderAlertList();
  renderSkills();
  renderLabSelector();
  renderLabDetail();
  renderTriageStepper();
  renderCaseStudies();
  renderNetworkDiagram();
  renderMitreMatrix();
  renderCareerTimeline();
  renderCourses();

  console.log("Ali Fekry SOC Portfolio Initialized Successfully.");
});
