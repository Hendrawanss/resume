(function () {
  const $ = (id) => document.getElementById(id);
  const root = document.documentElement;

  const esc = (s) => String(s)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

  const get = (obj, path) => path.split(".").reduce((o, k) => (o == null ? o : o[k]), obj);

  const ICONS = {
    github: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A12 12 0 0 0 0 12.6c0 5.35 3.44 9.88 8.2 11.48.6.1.82-.27.82-.58v-2.2c-3.34.74-4.04-1.44-4.04-1.44-.55-1.4-1.33-1.78-1.33-1.78-1.09-.76.08-.74.08-.74 1.2.09 1.84 1.26 1.84 1.26 1.07 1.86 2.8 1.32 3.49 1.01.1-.79.42-1.32.76-1.63-2.66-.31-5.47-1.36-5.47-6.04 0-1.33.47-2.42 1.24-3.28-.13-.31-.54-1.55.12-3.23 0 0 1-.33 3.3 1.25a11.3 11.3 0 0 1 6 0c2.3-1.58 3.3-1.25 3.3-1.25.66 1.68.25 2.92.12 3.23.77.86 1.24 1.95 1.24 3.28 0 4.69-2.81 5.72-5.49 6.03.43.38.82 1.12.82 2.26v3.35c0 .32.21.69.83.58A12.02 12.02 0 0 0 24 12.6 12 12 0 0 0 12 .5z"/></svg>',
    linkedin: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    external: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>'
  };

  /* ---------- Tema ---------- */
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("theme"); } catch (e) {}
  if (savedTheme) root.setAttribute("data-theme", savedTheme);
  $("themeToggle").addEventListener("click", () => {
    const current = root.getAttribute("data-theme")
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Bahasa ---------- */
  let lang = (() => {
    try {
      const s = localStorage.getItem("lang");
      if (s && PORTFOLIO[s]) return s;
    } catch (e) {}
    const nav = (navigator.language || "id").toLowerCase();
    return nav.startsWith("id") ? "id" : (PORTFOLIO.en ? "en" : "id");
  })();

  const langToggle = $("langToggle");
  langToggle.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-lang]");
    if (!btn || !PORTFOLIO[btn.dataset.lang] || btn.dataset.lang === lang) return;
    lang = btn.dataset.lang;
    try { localStorage.setItem("lang", lang); } catch (e2) {}
    render();
  });

  /* ---------- Navigasi ---------- */
  const navToggle = $("navToggle");
  const navLinks = $("navLinks");
  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(open));
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );

  const header = document.querySelector(".site-header");
  const onScroll = () => header.classList.toggle("scrolled", scrollY > 10);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  const linkMap = new Map(
    [...navLinks.querySelectorAll('a[href^="#"]')].map((a) => [a.getAttribute("href").slice(1), a])
  );
  const sectionObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const link = linkMap.get(e.target.id);
      if (link && e.isIntersecting) {
        linkMap.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach((s) => sectionObs.observe(s));

  /* ---------- Reveal saat scroll ---------- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  const observeReveal = () =>
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObs.observe(el));

  /* ---------- Efek ketik blok kode (sekali, kode sama di semua bahasa) ---------- */
  const codeEl = $("heroCode");
  const codeText = (PORTFOLIO[lang].heroCode || []).join("\n");
  let ci = 0;
  (function type() {
    if (ci <= codeText.length) {
      codeEl.textContent = codeText.slice(0, ci++);
      setTimeout(type, 18);
    }
  })();

  /* ---------- Proyek ---------- */
  const filterBar = $("filterBar");
  const projectsGrid = $("projectsGrid");
  const CAT_HUE = { Fintech: "accent", Enterprise: "accent-4", Website: "accent-2" };

  const renderProjects = (cat) => {
    const d = PORTFOLIO[lang];
    const list = cat === "*" ? d.projects : d.projects.filter((pr) => pr.category === cat);
    projectsGrid.innerHTML = list.map((pr, idx) => `
      <article class="project-card reveal${pr.featured ? " featured" : ""}" style="--c: var(--${CAT_HUE[pr.category] || "accent-4"})">
        <div class="project-cover">
          <span class="project-index">${String(idx + 1).padStart(2, "0")}</span>
          <span class="project-cat">${esc(pr.category)}</span>
        </div>
        <div class="project-body">
          <div class="project-head">
            <h3>${esc(pr.title)}</h3>
            <div class="project-links">
              ${pr.repo ? `<a href="${esc(pr.repo)}" target="_blank" rel="noopener" aria-label="${esc(d.ui.repo)}" title="${esc(d.ui.repo)}">${ICONS.github}</a>` : ""}
              ${pr.demo ? `<a href="${esc(pr.demo)}" target="_blank" rel="noopener" aria-label="${esc(d.ui.demo)}" title="${esc(d.ui.demo)}">${ICONS.external}</a>` : ""}
            </div>
          </div>
          <p>${esc(pr.description)}</p>
          <ul class="tags small">${pr.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        </div>
      </article>`).join("");
    observeReveal();
  };

  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    filterBar.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.cat);
  });

  /* ---------- Form kontak ---------- */
  const form = $("contactForm");
  const note = $("formNote");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { ui, profile: p } = PORTFOLIO[lang];
    note.textContent = "";
    note.className = "form-note";
    if (!form.checkValidity()) {
      note.textContent = ui.contact.invalid;
      note.classList.add("error");
      return;
    }
    const data = Object.fromEntries(new FormData(form));
    if (!p.formEndpoint) {
      const emailContact = p.contacts.find((c) => c.label === "Email");
      const mailTo = emailContact ? emailContact.value : "";
      const subject = encodeURIComponent(ui.contact.subject + " " + data.nama);
      const body = encodeURIComponent(ui.contact.name + ": " + data.nama + "\n" + ui.contact.email + ": " + data.email + "\n\n" + data.pesan);
      location.href = "mailto:" + mailTo + "?subject=" + subject + "&body=" + body;
      note.textContent = ui.contact.openingMail;
      return;
    }
    const btn = form.querySelector("button[type=submit]");
    btn.disabled = true;
    try {
      const res = await fetch(p.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      note.textContent = ui.contact.sent;
      note.classList.add("success");
    } catch (err) {
      note.textContent = ui.contact.failed;
      note.classList.add("error");
    } finally {
      btn.disabled = false;
    }
  });

  /* ---------- Render semua konten sesuai bahasa ---------- */
  function render() {
    const d = PORTFOLIO[lang];
    const p = d.profile;
    const ui = d.ui;

    root.setAttribute("lang", lang);
    document.title = p.name + " - " + ui.portfolio;
    langToggle.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.lang === lang));

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = get(ui, el.dataset.i18n);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const v = get(ui, el.dataset.i18nPlaceholder);
      if (v != null) el.placeholder = v;
    });

    // Hero
    $("heroName").textContent = p.shortName || p.name;
    $("heroRole").textContent = p.role;
    $("heroTagline").textContent = p.tagline;
    $("heroStatus").textContent = p.status;
    $("footerName").textContent = p.name;
    $("heroSocials").innerHTML = p.socials.map((s) =>
      `<a href="${esc(s.url)}" target="_blank" rel="noopener" aria-label="${esc(s.label)}" title="${esc(s.label)}">${ICONS[s.icon] || esc(s.label)}</a>`
    ).join("");

    // Marquee: semua skill, digandakan supaya loop mulus
    const items = d.skills.flatMap((g) => g.items);
    const marqueeHtml = items.map((it) => `<span>${esc(it)}</span><i>&#10022;</i>`).join("");
    $("marqueeTrack").innerHTML = marqueeHtml + marqueeHtml;

    // Tentang
    $("aboutPhoto").src = p.photo;
    $("aboutPhoto").alt = p.name;
    $("aboutText").innerHTML = p.about.map((t, i) => `<p class="${i === 0 ? "first" : ""}">${esc(t)}</p>`).join("");
    $("stats").innerHTML = p.stats.map((s) =>
      `<div class="stat reveal"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`
    ).join("");

    // Keahlian (bento)
    $("skillsGrid").innerHTML = d.skills.map((g, i) => `
      <div class="skill-card reveal">
        <div class="skill-head"><span class="skill-idx">${String(i + 1).padStart(2, "0")}</span><h3>${esc(g.group)}</h3></div>
        <ul class="tags">${g.items.map((it) => `<li>${esc(it)}</li>`).join("")}</ul>
      </div>`).join("");

    // Proyek
    const categories = [...new Set(d.projects.map((pr) => pr.category))];
    filterBar.innerHTML =
      `<button type="button" class="chip active" data-cat="*">${esc(ui.filterAll)}</button>` +
      categories.map((c) => `<button type="button" class="chip" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
    renderProjects("*");

    // Pengalaman
    $("timeline").innerHTML = d.experience.map((x) => `
      <li class="timeline-item reveal">
        <span class="timeline-period">${esc(x.period)}</span>
        <div class="timeline-body">
          <h3>${esc(x.role)}</h3>
          <p class="company">${esc(x.company)}${x.location ? ` &middot; ${esc(x.location)}` : ""}</p>
          <ul>${x.points.map((pt) => `<li>${esc(pt)}</li>`).join("")}</ul>
        </div>
      </li>`).join("");

    // Pendidikan
    $("eduGrid").innerHTML = (d.education || []).map((e) => `
      <div class="edu-card reveal">
        <span class="edu-period">${esc(e.period)}</span>
        <h3>${esc(e.degree)}</h3>
        <p>${esc(e.school)}</p>
      </div>`).join("");

    // Kontak
    $("contactList").innerHTML = p.contacts.map((c) => `
      <li>
        <span class="contact-label">${esc(c.label)}</span>
        ${c.href ? `<a href="${esc(c.href)}" target="_blank" rel="noopener">${esc(c.value)}</a>` : `<span>${esc(c.value)}</span>`}
      </li>`).join("");

    note.textContent = "";
    observeReveal();
  }

  render();
  $("year").textContent = new Date().getFullYear();
})();
