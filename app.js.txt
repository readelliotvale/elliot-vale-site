(function () {
  const S = window.SITE;

  // Fill brand + footer
  document.getElementById("brandName").textContent = S.name;
  document.getElementById("brandTag").textContent = S.taglineShort;
  document.getElementById("markText").textContent = S.initials;
  document.getElementById("footName").textContent = S.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Mobile menu toggle
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (btn && menu) {
    btn.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  }

  // Footer links
  const footLinks = document.getElementById("footLinks");
  footLinks.innerHTML = S.contact.socials
    .map((x) => `<a href="${x.href}" target="_blank" rel="noopener">${x.label}</a>`)
    .join(" · ") + ` · <a href="#top">Back to top</a>`;

  // Schema
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: S.name,
    jobTitle: "Author",
    genre: ["Thriller", "Police Procedural"],
    sameAs: S.contact.socials.map((s) => s.href)
  };
  document.getElementById("schemaPerson").textContent = JSON.stringify(schema);

  // Build page content
  const app = document.getElementById("app");

  const hero = `
    <section class="heroWrap">
      <div class="hero">
        <div class="heroVisual" role="img" aria-label="Abstract winter-noir header"></div>
        <div class="heroContent">
          <p class="kicker">${escapeHtml(S.heroKicker)}</p>
          <h1>${escapeHtml(S.heroHeadline)}</h1>
          <p class="tagline">${escapeHtml(S.heroSubhead)}</p>
          <div class="ctaRow">
            <a class="btn primary" href="#books">Books / WIP</a>
            <a class="btn" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </section>
  `;

  const books = `
    <section id="books">
      <div class="sectionTitle">
        <h2>Books / WIP</h2>
        <div class="hint">A clean, professional snapshot.</div>
      </div>

      <div class="grid">
        <div class="card bookCard col-12">
          <div class="cover" aria-label="Cover placeholder">${escapeHtml(S.book.title).toUpperCase()}</div>
          <div>
            <div class="statusPill">${escapeHtml(S.book.status)}</div>
            <h3 class="bookTitle">${escapeHtml(S.book.title)}</h3>
            <p class="bookMeta">${escapeHtml(S.book.meta)}</p>
            <p class="bookBlurb">${escapeHtml(S.book.blurb)}</p>

            <div class="ctaRow">
              ${S.book.buttons
                .map((b) => {
                  const cls = b.primary ? "btn primary" : "btn";
                  return `<a class="${cls}" href="${b.href}">${escapeHtml(b.label)}</a>`;
                })
                .join("")}
            </div>

            <div class="list" aria-label="Tags">
              ${S.book.tags.map(t => `<span class="pill ${t.includes("Noir") ? "accent" : ""}">${escapeHtml(t)}</span>`).join("")}
            </div>
          </div>
        </div>

        <div class="card pad col-6">
          <div class="sectionTitle" style="margin:0 0 8px">
            <h2 style="font-size:16px; margin:0">Newsletter</h2>
            <div class="hint">Coming soon</div>
          </div>
          <p class="muted" style="margin:0">
            Updates will be available soon (new work, announcements, and release info).
          </p>
        </div>

        <div class="card pad col-6">
          <div class="sectionTitle" style="margin:0 0 8px">
            <h2 style="font-size:16px; margin:0">For Industry</h2>
            <div class="hint">Private comps (off-site)</div>
          </div>
          <p class="muted" style="margin:0">
            Comparable titles are kept private, as requested.
          </p>
        </div>
      </div>
    </section>
  `;

  const about = `
    <section id="about">
      <div class="sectionTitle">
        <h2>${escapeHtml(S.about.title)}</h2>
        <div class="hint">Pen-name safe.</div>
      </div>

      <div class="grid">
        <div class="card pad col-7">
          ${S.about.paragraphs.map(p => `<p class="muted" style="margin:0 0 10px">${escapeHtml(p)}</p>`).join("")}
          <p class="muted" style="margin:0">
            <span style="color: rgba(233,238,243,0.88); font-weight:800;">Note:</span>
            This page is intentionally minimal and professional.
          </p>
        </div>

        <div class="card pad col-5">
          <div class="sectionTitle" style="margin:0 0 8px">
            <h2 style="font-size:16px; margin:0">Quick Facts</h2>
            <div class="hint">At a glance</div>
          </div>
          <div class="muted" style="font-size:14px">
            ${S.about.quickFacts.map(q => `
              <div style="padding:10px 0; border-top:1px solid rgba(233,238,243,0.08)">
                <div style="font-weight:800; color: rgba(233,238,243,0.88)">${escapeHtml(q.label)}</div>
                <div>${escapeHtml(q.value)}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `;

  const contact = `
    <section id="contact">
      <div class="sectionTitle">
        <h2>${escapeHtml(S.contact.title)}</h2>
        <div class="hint">Form + social</div>
      </div>

      <div class="grid">
        <div class="card pad col-6">
          <p class="muted" style="margin:0 0 10px">
            For rights, interviews, events, or general inquiries:
          </p>
          <p style="margin:0 0 12px">
            <a class="btn primary" href="mailto:${encodeURIComponent(S.contact.email)}">Email ${escapeHtml(S.contact.email)}</a>
          </p>

          <div class="sectionTitle" style="margin:18px 0 8px">
            <h2 style="font-size:16px; margin:0">Social</h2>
            <div class="hint">Follow</div>
          </div>
          <div class="ctaRow">
            ${S.contact.socials.map(s => `<a class="btn" href="${s.href}" target="_blank" rel="noopener">${escapeHtml(s.label)}</a>`).join("")}
          </div>

          <p class="muted" style="margin:14px 0 0; font-size:13px">
            ${escapeHtml(S.contact.formNote)}
          </p>
        </div>

        <div class="card pad col-6">
          <form class="formRow" method="POST" action="${S.contact.formAction || ""}" onsubmit="return handleSubmit(event)">
            <div>
              <label for="name">Name</label>
              <input id="name" name="name" autocomplete="name" required />
            </div>
            <div>
              <label for="email">Email</label>
              <input id="email" name="email" type="email" autocomplete="email" required />
            </div>
            <div>
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button class="btn primary" type="submit">Send</button>
            <div class="muted" style="font-size:12px; margin-top:6px">
              If the form isn’t wired yet, it will prompt you to email instead.
            </div>
          </form>
        </div>
      </div>
    </section>
  `;

  app.innerHTML = hero + books + about + contact;

  // Form handler: if no endpoint yet, fall back to mailto
  window.handleSubmit = function (e) {
    if (!S.contact.formAction) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const subject = encodeURIComponent(`Website message from ${name || "Reader"}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      window.location.href = `mailto:${S.contact.email}?subject=${subject}&body=${body}`;
      return false;
    }
    return true;
  };

  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }
})();
