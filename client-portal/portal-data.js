// Datos estáticos del MVP (demo + estructura para clientes reales).
// Para cada cliente real: agregás un objeto con id, name, key, links, kpis y tablas.

window.PORTAL_DATA = {
  clients: [
    {
      id: "demo",
      name: "Cliente Demo (Ejemplo)",
      key: "demo123",
      weekLabel: "Semana 07 · 2026",
      lastUpdated: "2026-02-17",
      subtitle: "Ejemplo realista para CTA: “Ver reporte (ejemplo)”.",
      kpis: [
        { k: "Posts publicados", v: "14", s: "+2 vs semana anterior" },
        { k: "Views totales", v: "128.4K", s: "Prom: 9.1K por post" },
        { k: "ER (interacciones/views)", v: "6.2%", s: "↑ por hooks más directos" },
        { k: "Clicks al link", v: "1,042", s: "CTR aprox: 0.81%" },
        { k: "Leads", v: "37", s: "Click→Lead: 3.55%" },
        { k: "Turnos/Calls", v: "8", s: "Calendly/WhatsApp" },
        { k: "CPA estimado", v: "—", s: "MVP: completar luego" },
        { k: "ROI (proxy)", v: "↑", s: "Se valida con ventas reales" }
      ],
      whatWorked: [
        "Hooks con dolor explícito + promesa concreta en 2–3s.",
        "Clips con cortes rápidos (cada 1–2s) y subtítulos grandes.",
        "Series: “Errores típicos” (episodios 1/2/3) mejoró retención."
      ],
      whatChanges: [
        "Reducir intros: ir directo al ejemplo en el segundo 0–1.",
        "A/B de 2 variantes de hook por tema (hXX_v1, hXX_v2).",
        "Duplicar formato ganador y pausar los de < p25 views."
      ],
      topPosts: [
        { network: "TikTok", account: "@demo.tt", hook: "3 errores que te hacen perder clientes", views: 34120, er: "7.1%", url: "https://example.com/post1" },
        { network: "Instagram", account: "@demo.ig", hook: "Si vendés X, esto te está frenando", views: 28110, er: "6.4%", url: "https://example.com/post2" },
        { network: "YouTube", account: "@demo.yt", hook: "Esto te ahorra 10 horas/semana", views: 22340, er: "5.8%", url: "https://example.com/post3" }
      ],
      analytics: [
        { network: "TikTok", account: "@demo.tt", url: "https://www.tiktok.com/analytics", note: "Abrir en la cuenta correcta." },
        { network: "Instagram", account: "@demo.ig", url: "https://www.instagram.com/accounts/insights/", note: "Requiere cuenta profesional." },
        { network: "YouTube", account: "@demo.yt", url: "https://studio.youtube.com/", note: "Ver ‘Analytics’ → ‘Contenido’." },
        { network: "Facebook", account: "@demo.fb", url: "https://business.facebook.com/latest/insights", note: "Si usan Meta Business Suite." }
      ],
      calendar: [
        { date: "2026-02-10", network: "TikTok", topic: "Errores comunes", hook: "3 errores que te hacen perder clientes", status: "Publicado", postUrl: "https://example.com/post1", shortlink: "https://bit.ly/demo-h03v1" },
        { date: "2026-02-11", network: "Instagram", topic: "Caso real", hook: "Cómo duplicamos consultas en 7 días", status: "Publicado", postUrl: "https://example.com/post2", shortlink: "https://bit.ly/demo-h07v1" },
        { date: "2026-02-12", network: "YouTube", topic: "Tutorial", hook: "Esto te ahorra 10 horas/semana", status: "Publicado", postUrl: "https://example.com/post3", shortlink: "https://bit.ly/demo-h09v1" },
        { date: "2026-02-13", network: "TikTok", topic: "Objeciones", hook: "Si pensás esto, estás perdiendo plata", status: "Programado", postUrl: "", shortlink: "https://bit.ly/demo-h12v1" }
      ],
      leads: [
        { date: "2026-02-11", source: "instagram", campaign: "demo_servicios_2026-02", content: "ig_demo__serie_errores__h03__v1", channel: "whatsapp", status: "Nuevo", note: "Pregunta por precios" },
        { date: "2026-02-12", source: "tiktok", campaign: "demo_servicios_2026-02", content: "tt_demo__objeciones__h12__v1", channel: "calendly", status: "Contactado", note: "Agendó call" },
        { date: "2026-02-13", source: "youtube", campaign: "demo_servicios_2026-02", content: "yt_demo__tutorial__h09__v1", channel: "form", status: "Calificado", note: "Tiene presupuesto" }
      ],
      deliverables: [
        { title: "Drive · Assets", desc: "Carpeta con videos, subtítulos y creatividades.", url: "https://drive.google.com/" },
        { title: "Reporte semanal (PDF/Link)", desc: "Resumen: qué funcionó / qué se cambia / plan semana próxima.", url: "https://example.com/reporte-semanal" },
        { title: "Calendario editorial", desc: "Planificación por red con hooks y estados.", url: "https://example.com/calendario" }
      ],
      sla: [
        "Entregas: 1–2 piezas/día (según plan).",
        "Revisión: 1 ronda incluida por pieza (texto/hook).",
        "Reporte: semanal (lunes o viernes).",
        "Canales: WhatsApp + email.",
        "No se garantizan resultados (depende del mercado y plataforma)."
      ],
      tos: [
        "No phone-farm.",
        "No compra de seguidores/engagement.",
        "No automatizaciones prohibidas por ToS.",
        "Accesos con 2FA y mínimo privilegio.",
        "Cuentas y propiedad: siempre del cliente."
      ]
    }
  ]
};
