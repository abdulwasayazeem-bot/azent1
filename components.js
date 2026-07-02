// ── AZEEM ENTERPRISES – SHARED COMPONENTS ──
// Call injectLayout(activePage) at bottom of each page body.
// activePage: 'home' | 'products' | 'about' | 'contact' | 'career' | 'industries'

function injectLayout(activePage) {
  injectTopbar();
  injectHeader(activePage);
  injectFooter();
  injectWAFloat();
  initMobileNav();
  initSlider();   // only runs if #slides exists
}

/* ── TOPBAR ── */
function injectTopbar() {
  const t = document.createElement('div');
  t.className = 'topbar';
  t.innerHTML = `<div class="inner">
    <div class="topbar-left">
      <span>📞 <a href="tel:+92213xxxxxxx">021-3XXXXXXX</a></span>
      <span>📱 <a href="tel:+923xxxxxxxxx">0300-XXXXXXX</a></span>
      <span>✉️ <a href="mailto:info@azeementerprises.com">info@azeementerprises.com</a></span>
      <span>📍 Karachi, Pakistan</span>
    </div>
    <div class="topbar-right">
      <a href="#">LinkedIn</a>
      <a href="#">Facebook</a>
      <a href="#">Instagram</a>
      <a href="https://wa.me/923xxxxxxxxx" target="_blank">WhatsApp</a>
    </div>
  </div>`;
  document.body.prepend(t);
}

/* ── HEADER ── */
function injectHeader(activePage) {
  const pages = { home:'index.html', products:'products.html', industries:'industries.html', about:'about.html', contact:'contact.html', career:'career.html' };
  const isActive = (p) => activePage === p ? 'class="active"' : '';
  const h = document.createElement('header');
  h.innerHTML = `
  <div class="header-inner">
    <a href="index.html" class="logo">AZEEM<span>.</span></a>
    <nav>
      <a href="index.html" ${isActive('home')}>Home</a>
      <div class="nav-dropdown">
        <a href="products.html" ${isActive('products')}>Products</a>
        <div class="dropdown-menu">

          <div class="sub-dropdown">
            <a href="products.html" class="sub-trigger">📦 Packaging <span class="sub-arrow">›</span></a>
            <div class="sub-menu">
              <a href="product-pvc-film.html">Transparent Soft PVC Film</a>
              <a href="product-eva-film.html">EVA Film</a>
              <a href="product-pvc-rigid.html">PVC Rigid Film</a>
              <a href="product-cling-film.html">Cling Film</a>
              <a href="product-stretch-film.html">Stretch Film</a>
              <a href="product-bubble-wrap.html">Bubble Wrap</a>
              <a href="product-zippers.html">Zippers</a>
            </div>
          </div>

          <div class="sub-dropdown">
            <a href="products.html" class="sub-trigger">🧵 Non Woven Fabric <span class="sub-arrow">›</span></a>
            <div class="sub-menu">
              <a href="product-laminated-nonwoven.html">Laminated Non Woven Fabric</a>
              <a href="product-nonwoven.html">Spunbond Non Woven Fabric</a>
            </div>
          </div>

          <div class="sub-dropdown">
            <a href="product-synthetic-leather.html" class="sub-trigger">🪑 Synthetic Leather <span class="sub-arrow">›</span></a>
            <div class="sub-menu">
              <a href="product-synthetic-leather.html">PVC / PU Synthetic Leather</a>
            </div>
          </div>

          <div class="sub-dropdown">
            <a href="textile/index.html" class="sub-trigger">🏠 Home Textile <span class="sub-arrow">›</span></a>
            <div class="sub-menu">
              <a href="textile/index.html">Home Textile</a>
            </div>
          </div>

          <div class="sub-dropdown">
            <a href="products.html" class="sub-trigger">🎨 PVC Décor &amp; Signage <span class="sub-arrow">›</span></a>
            <div class="sub-menu">
              <a href="product-printed-pvc.html">Printed &amp; Embossed PVC Films</a>
              <a href="product-pvc-flooring.html">PVC Vinyl Flooring</a>
              <a href="product-panaflex.html">PVC Flex Vinyl (Panaflex)</a>
            </div>
          </div>

        </div>
      </div>
      <a href="industries.html" ${isActive('industries')}>Industries</a>
      <a href="about.html" ${isActive('about')}>About Us</a>
      <a href="contact.html" ${isActive('contact')}>Contact Us</a>
      <a href="career.html" ${isActive('career')}>Career</a>
      <a href="contact.html" class="btn-quote">Get a Quote</a>
    </nav>
    <label for="mob-toggle" class="hamburger"><span></span><span></span><span></span></label>
  </div>
  <input type="checkbox" id="mob-toggle"/>
  <div class="mobile-nav">
    <a href="index.html">Home</a>
    <a href="products.html" style="font-weight:700;color:var(--navy);">Products</a>
    <a href="products.html" style="padding-left:16px;font-size:.82rem;color:var(--muted);">— Packaging</a>
    <a href="products.html" style="padding-left:16px;font-size:.82rem;color:var(--muted);">— Non Woven Fabric</a>
    <a href="product-synthetic-leather.html" style="padding-left:16px;font-size:.82rem;color:var(--muted);">— Synthetic Leather</a>
    <a href="textile/index.html" style="padding-left:16px;font-size:.82rem;color:var(--muted);">— Home Textile</a>
    <a href="products.html" style="padding-left:16px;font-size:.82rem;color:var(--muted);">— PVC Décor &amp; Signage</a>
    <a href="industries.html">Industries</a>
    <a href="about.html">About Us</a>
    <a href="contact.html">Contact Us</a>
    <a href="career.html">Career</a>
    <a href="contact.html" style="color:var(--accent);font-weight:700">Get a Quote</a>
  </div>`;
  document.body.insertBefore(h, document.body.children[1]);
}

/* ── FOOTER ── */
function injectFooter() {
  const f = document.createElement('footer');
  f.innerHTML = `
  <div class="footer-grid">
    <div class="footer-brand">
      <a href="index.html" class="logo">AZEEM<span>.</span></a>
      <p>Pakistan's trusted trading partner for industrial films, nonwoven fabrics, synthetic leather, and packaging materials — serving manufacturers across the country for over 30 years.</p>
      <div class="social-links">
        <a href="#" class="social-link" title="LinkedIn">in</a>
        <a href="#" class="social-link" title="Facebook">fb</a>
        <a href="https://wa.me/923xxxxxxxxx" class="social-link" title="WhatsApp">wa</a>
        <a href="#" class="social-link" title="Instagram">ig</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="industries.html">Industries</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="career.html">Career</a></li>
        <li><a href="contact.html">Get a Quote</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Our Products</h4>
      <ul>
        <li><a href="product-pvc-film.html">Transparent PVC Film</a></li>
        <li><a href="product-nonwoven.html">Non Woven Fabric</a></li>
        <li><a href="product-synthetic-leather.html">Synthetic Leather</a></li>
        <li><a href="product-stretch-film.html">Stretch &amp; Cling Film</a></li>
        <li><a href="product-bubble-wrap.html">Bubble Wrap</a></li>
        <li><a href="product-panaflex.html">PVC Flex Vinyl</a></li>
        <li><a href="product-pvc-flooring.html">PVC Vinyl Flooring</a></li>
        <li><a href="product-zippers.html">Zippers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact Us</h4>
      <ul class="footer-contact">
        <li><span class="fi">📞</span><a href="tel:+92213xxxxxxx">021-3XXXXXXX</a></li>
        <li><span class="fi">📱</span><a href="tel:+923xxxxxxxxx">0300-XXXXXXX</a></li>
        <li><span class="fi">✉️</span><a href="mailto:info@azeementerprises.com">info@azeementerprises.com</a></li>
        <li><span class="fi">✉️</span><a href="mailto:sales@azeementerprises.com">sales@azeementerprises.com</a></li>
        <li><span class="fi">📍</span><span>Karachi, Pakistan</span></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2026 Azeem Enterprises. All Rights Reserved.</p>
    <div class="footer-bottom-links">
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Sitemap</a>
    </div>
  </div>`;
  document.body.appendChild(f);

  // Newsletter section injected just before footer
  const nl = document.createElement('div');
  nl.className = 'newsletter-section';
  nl.innerHTML = `<div class="newsletter-inner">
    <h2>Stay Updated</h2>
    <p>Subscribe to receive product updates, new arrivals, and industry news from Azeem Enterprises.</p>
    <form class="newsletter-form" onsubmit="return false;">
      <input type="email" placeholder="Enter your email address"/>
      <button type="submit">Subscribe</button>
    </form>
  </div>`;
  document.body.insertBefore(nl, f);
}

/* ── WHATSAPP FLOAT ── */
function injectWAFloat() {
  const wa = document.createElement('a');
  wa.href = 'https://wa.me/923xxxxxxxxx';
  wa.className = 'wa-float';
  wa.target = '_blank';
  wa.title = 'Chat on WhatsApp';
  wa.innerHTML = `<svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;
  document.body.appendChild(wa);
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  // already handled via CSS checkbox trick
}

/* ── HERO SLIDER (home page only) ── */
function initSlider() {
  const slidesEl = document.getElementById('slides');
  if (!slidesEl) return;
  const dotsEl = document.getElementById('dots');
  const total = slidesEl.children.length;
  let current = 0;
  for (let i = 0; i < total; i++) {
    const d = document.createElement('button');
    d.className = 'dot' + (i === 0 ? ' active' : '');
    d.addEventListener('click', () => goTo(i));
    dotsEl.appendChild(d);
  }
  function goTo(n) {
    current = (n + total) % total;
    slidesEl.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }
  window.changeSlide = (dir) => goTo(current + dir);
  setInterval(() => goTo(current + 1), 5500);
}
