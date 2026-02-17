(function () {
  const $ = (id) => document.getElementById(id);

  const els = {
    clientSelect: $("clientSelect"),
    clientKey: $("clientKey"),
    btnEnter: $("btnEnter"),
    btnDemo: $("btnDemo"),
    btnCopyPrivateLink: $("btnCopyPrivateLink"),
    clientPill: $("clientPill"),
    clientTitle: $("clientTitle"),
    clientSubtitle: $("clientSubtitle"),
    weekLabel: $("weekLabel"),
    lastUpdated: $("lastUpdated"),
    kpiGrid: $("kpiGrid"),
    whatWorked: $("whatWorked"),
    whatChanges: $("whatChanges"),
    topPostsTable: $("topPostsTable").querySelector("tbody"),
    analyticsTable: $("analyticsTable").querySelector("tbody"),
    calendarTable: $("calendarTable").querySelector("tbody"),
    leadsTable: $("leadsTable").querySelector("tbody"),
    deliverablesList: $("deliverablesList"),
    slaList: $("slaList"),
    tosList: $("tosList"),
    year: $("year")
  };

  const state = { client: null };

  function parseQuery() {
    const p = new URLSearchParams(window.location.search);
    return { c: (p.get("c") || "").trim(), k: (p.get("k") || "").trim() };
  }

  function setYear() {
    if (els.year) els.year.textContent = String(new Date().getFullYear());
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function fmtNum(n) {
    if (typeof n !== "number") return escapeHtml(String(n));
    return n.toLocaleString("es-AR");
  }

  function setClientSelect() {
    const clients = window.PORTAL_DATA?.clients || [];
    if (!els.clientSelect) return;
    els.clientSelect.innerHTML = clients
      .map((c) => `<option value="${escapeHtml(c.id)}">${escapeHtml(c.name)}</option>`)
      .join("");
  }

  function findClient(clientId) {
    const clients = window.PORTAL_DATA?.clients || [];
    return clients.find((c) => c.id === clientId) || null;
  }

  function badge(status) {
    const s = String(status || "").toLowerCase();
    if (s.includes("public")) return `<span class="badge badge--pub">Publicado</span>`;
    if (s.includes("program")) return `<span class="badge badge--sch">Programado</span>`;
    return `<span class="badge badge--draft">Borrador</span>`;
  }

  function clearTables() {
    els.topPostsTable.innerHTML = "";
    els.analyticsTable.innerHTML = "";
    els.calendarTable.innerHTML = "";
    els.leadsTable.innerHTML = "";
  }

  function renderClient(c) {
    state.client = c;

    els.clientPill.textContent = `Cliente: ${c.name}`;
    els.clientTitle.textContent = c.name;
    els.clientSubtitle.textContent = c.subtitle || "Portal del Cliente";
    els.weekLabel.textContent = c.weekLabel || "—";
    els.lastUpdated.textContent = c.lastUpdated || "—";

    els.kpiGrid.innerHTML = (c.kpis || [])
      .map((k) => `
        <div class="kpi">
          <div class="kpi__k">${escapeHtml(k.k)}</div>
          <div class="kpi__v">${escapeHtml(k.v)}</div>
          <div class="kpi__s">${escapeHtml(k.s || "")}</div>
        </div>
      `)
      .join("");

    els.whatWorked.innerHTML = (c.whatWorked || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    els.whatChanges.innerHTML = (c.whatChanges || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");

    clearTables();

    (c.topPosts || []).forEach((p) => {
      const link = p.url
        ? `<a class="link" href="${escapeHtml(p.url)}" target="_blank" rel="noreferrer">Ver</a>`
        : "—";
      els.topPostsTable.insertAdjacentHTML(
        "beforeend",
        `<tr>
          <td>${escapeHtml(p.network)}</td>
          <td>${escapeHtml(p.account)}</td>
          <td>${escapeHtml(p.hook)}</td>
          <td>${fmtNum(p.views)}</td>
          <td>${escapeHtml(p.er)}</td>
          <td>${link}</td>
        </tr>`
      );
    });

    (c.analytics || []).forEach((a) => {
      els.analyticsTable.insertAdjacentHTML(
        "beforeend",
        `<tr>
          <td>${escapeHtml(a.network)}</td>
          <td>${escapeHtml(a.account)}</td>
          <td><a class="link" href="${escapeHtml(a.url)}" target="_blank" rel="noreferrer">Abrir panel</a></td>
          <td>${escapeHtml(a.note || "")}</td>
        </tr>`
      );
    });

    (c.calendar || []).forEach((r) => {
      const post = r.postUrl
        ? `<a class="link" href="${escapeHtml(r.postUrl)}" target="_blank" rel="noreferrer">Post</a>`
        : "—";
      const sl = r.shortlink
        ? `<a class="link" href="${escapeHtml(r.shortlink)}" target="_blank" rel="noreferrer">${escapeHtml(r.shortlink)}</a>`
        : "—";
      els.calendarTable.insertAdjacentHTML(
        "beforeend",
        `<tr>
          <td>${escapeHtml(r.date)}</td>
          <td>${escapeHtml(r.network)}</td>
          <td>${escapeHtml(r.topic)}</td>
          <td>${escapeHtml(r.hook)}</td>
          <td>${badge(r.status)}</td>
          <td>${post}</td>
          <td>${sl}</td>
        </tr>`
      );
    });

    (c.leads || []).forEach((l) => {
      els.leadsTable.insertAdjacentHTML(
        "beforeend",
        `<tr>
          <td>${escapeHtml(l.date)}</td>
          <td>${escapeHtml(l.source)}</td>
          <td>${escapeHtml(l.campaign)}</td>
          <td><code>${escapeHtml(l.content)}</code></td>
          <td>${escapeHtml(l.channel)}</td>
          <td>${escapeHtml(l.status)}</td>
          <td>${escapeHtml(l.note || "")}</td>
        </tr>`
      );
    });

    els.deliverablesList.innerHTML = (c.deliverables || [])
      .map((d) => `
        <div class="tile">
          <div class="tile__t">${escapeHtml(d.title)}</div>
          <div class="tile__d">${escapeHtml(d.desc || "")}</div>
          ${state.client?.id === "demo"
  ? `<span class="tile__a tile__a--disabled" title="No disponible en demo">Abrir</span>`
  : `<a class="tile__a" href="${escapeHtml(d.url)}" target="_blank" rel="noreferrer">Abrir</a>`
}
        </div>
      `)
      .join("");

    els.slaList.innerHTML = (c.sla || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
    els.tosList.innerHTML = (c.tos || []).map((t) => `<li>${escapeHtml(t)}</li>`).join("");
  }

  function tryAutoLoginFromUrl() {
    const q = parseQuery();
    if (!q.c) return;
    const client = findClient(q.c);
    if (!client) return;

    els.clientSelect.value = client.id;
    els.clientKey.value = q.k || "";

    if (q.k && q.k === client.key) renderClient(client);
  }

  function enter() {
    const clientId = els.clientSelect.value;
    const key = (els.clientKey.value || "").trim();
    const client = findClient(clientId);

    if (!client) return alert("Cliente no encontrado.");
    if (key !== client.key) return alert("Clave incorrecta (MVP).");

    const next = `${window.location.pathname}?c=${encodeURIComponent(client.id)}&k=${encodeURIComponent(key)}`;
    window.history.replaceState({}, "", next);
    renderClient(client);
    window.location.hash = "#resumen";
  }

  function loadDemo() {
    const demo = findClient("demo");
    if (!demo) return;
    els.clientSelect.value = "demo";
    els.clientKey.value = demo.key;

    const next = `${window.location.pathname}?c=demo&k=${encodeURIComponent(demo.key)}`;
    window.history.replaceState({}, "", next);
    renderClient(demo);
    window.location.hash = "#resumen";
  }

  async function copyPrivateLink() {
    const c = state.client;
    if (!c) return alert("Primero ingresá a un cliente (o cargá el demo).");

    const url = `${window.location.origin}${window.location.pathname}?c=${encodeURIComponent(c.id)}&k=${encodeURIComponent(c.key)}`;

    try {
      await navigator.clipboard.writeText(url);
      alert("Link copiado.");
    } catch {
      prompt("Copiá el link:", url);
    }
  }

  function bind() {
    els.btnEnter.addEventListener("click", enter);
    els.btnDemo.addEventListener("click", loadDemo);
    els.btnCopyPrivateLink.addEventListener("click", copyPrivateLink);

    // Marcar activo en el menú al click
    document.querySelectorAll(".nav__item").forEach((a) => {
      a.addEventListener("click", () => {
        document.querySelectorAll(".nav__item").forEach(x => x.classList.remove("is-active"));
        a.classList.add("is-active");
      });
    });
  }

  setYear();
  setClientSelect();
  bind();
  tryAutoLoginFromUrl();

  // Activo por defecto
  const firstNav = document.querySelector('.nav__item[href="#resumen"]');
  if (firstNav) firstNav.classList.add("is-active");
})();