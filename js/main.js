/* =============================================================
   טרוינר · גלבר · אלוני — סקריפט משותף לכל העמודים
   מזריק את ה-Header / תפריט / Footer המשותפים, ומפעיל את ההתנהגויות.
   * לוגו TG נטען מ-images/logo.png (ו-logo-light.png לפוטר) — להחלפה שנה כאן בלבד.
   * תפריט הניווט מוגדר פעם אחת במערך NAV (ללא "בית" — הלוגו מוביל לדף הבית).
   ============================================================= */
(function () {
  'use strict';

  var TEL = 'tel:+97236888699';
  var MAIL = 'mailto:guy@tg-cpa.co.il';

  /* ---- אייקונים ---- */
  var icoPhone = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>';
  var icoMail = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>';
  var icoPin = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>';
  var icoLi = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0ZM.5 8h4V24h-4V8Zm7.5 0h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.86-2.75 3.78V24H8V8Z"/></svg>';
  var icoFb = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"/></svg>';
  var icoSend = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
  var icoClose = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  var icoAccess = '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="3.9" r="2.1"/><path d="M21 8.7c0 .58-.49 1.03-1.07.96L15 9.02v3.1l2.4 7.05a1.15 1.15 0 0 1-2.17.74L12.6 14h-1.2l-2.63 5.9a1.15 1.15 0 0 1-2.17-.73L9 12.12V9.02l-4.93.64A.97.97 0 0 1 3 8.7c0-.5.38-.91.87-.96L11 6.9h2l7.13.84c.49.05.87.46.87.96Z"/></svg>';
  var icoReset = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 2.6-6.4L3 8"/><path d="M3 3v5h5"/></svg>';

  /* ---- ניווט (ללא "בית" — לחיצה על הלוגו מובילה הביתה) ---- */
  var NAV = [
    ['about.html', 'אודות'],
    ['services.html', 'שירותים'],
    ['why.html', 'למה אנחנו'],
    ['process.html', 'תהליך העבודה'],
    ['team.html', 'השותפים']
  ];
  var page = location.pathname.split('/').pop() || 'index.html';
  if (!page) page = 'index.html';
  function act(href) { return href === page ? ' class="active"' : ''; }

  var navLinks = NAV.map(function (n) {
    return '<a href="' + n[0] + '"' + act(n[0]) + '>' + n[1] + '</a>';
  }).join('');
  var mNavLinks = NAV.map(function (n, i) {
    return '<a href="' + n[0] + '"' + act(n[0]) + '>' + n[1] + ' <span>' + ('0' + (i + 1)).slice(-2) + '</span></a>';
  }).join('');
  var footNav = NAV.map(function (n) {
    return '<li><a href="' + n[0] + '">' + n[1] + '</a></li>';
  }).join('');

  /* ---- לוגו (ללא טקסט בהדר; להחלפת הלוגו הרשמי — שנה את ה-src) ---- */
  var logoHeader = '<a class="logo" href="index.html" aria-label="טרוינר גלבר אלוני — רואי חשבון — דף הבית">' +
    '<span class="mark"><img src="images/logo.png" alt="טרוינר גלבר אלוני — רואי חשבון"></span>' +
    '<span class="txt"><b>טרוינר גלבר אלוני</b><small>משרד רואי חשבון</small></span></a>';
  var logoFooter = '<a class="logo" href="index.html">' +
    '<span class="mark"><img src="images/logo-light.png" alt="טרוינר גלבר אלוני"></span>' +
    '<span class="txt"><b>טרוינר · גלבר · אלוני</b><small>רואי חשבון</small></span></a>';

  /* ---- מקטעי ה-chrome ---- */
  var header =
    '<header class="site-header" id="header">' +
      '<div class="topline"></div>' +
      '<div class="wrap"><div class="bar">' +
        '<div class="bar-main">' +
          '<button class="menu-toggle" id="menuToggle" aria-label="תפריט" aria-expanded="false"><span></span><span></span><span></span></button>' +
          logoHeader +
          '<nav class="nav" aria-label="ניווט ראשי">' + navLinks + '</nav>' +
        '</div>' +
        '<div class="header-cta">' +
          '<a class="btn btn-primary" href="contact.html">יצירת קשר ' + icoSend + '</a>' +
        '</div>' +
      '</div></div></header>';

  var mobileNav =
    '<div class="drawer-backdrop" id="drawerBackdrop"></div>' +
    '<aside class="drawer" id="mobileNav" aria-label="תפריט ניווט">' +
      '<div class="drawer-head">' +
        '<span class="drawer-logo"><img src="images/logo.png" alt="טרוינר גלבר אלוני"><b>טרוינר גלבר אלוני</b></span>' +
        '<button class="drawer-close" id="drawerClose" aria-label="סגירת תפריט">' + icoClose + '</button>' +
      '</div>' +
      '<nav class="drawer-nav">' + navLinks + '</nav>' +
      '<div class="drawer-cta"><a class="btn btn-gold" href="contact.html">יצירת קשר ' + icoSend + '</a></div>' +
      '<div class="drawer-foot">' +
        '<a href="' + MAIL + '">' + icoMail + 'guy@tg-cpa.co.il</a>' +
        '<span>' + icoPin + 'בית עובד 8, תל אביב · סניף נתניה</span>' +
      '</div>' +
    '</aside>';

  var footer =
    '<footer class="footer"><div class="wrap"><h2 class="footer-title">מפת האתר</h2><div class="cols">' +
      '<div>' + logoFooter +
        '<p class="f-about">משרד רואי חשבון המלווה חברות, עסקים ועצמאים מאז 1996 — בביקורת, ייעוץ מס, הנהלת חשבונות וליווי עסקי אישי. סניפים בתל אביב ובנתניה.</p>' +
        '<div class="foot-social">' +
          '<a href="#" aria-label="לינקדאין">' + icoLi + '</a>' +
          '<a href="#" aria-label="פייסבוק">' + icoFb + '</a>' +
          '<a href="' + MAIL + '" aria-label="אימייל">' + icoMail + '</a>' +
        '</div>' +
      '</div>' +
      '<div><h4>ניווט</h4><ul>' + footNav + '</ul></div>' +
      '<div><h4>שירותים</h4><ul>' +
        '<li><a href="services.html">ביקורת ודוחות כספיים</a></li>' +
        '<li><a href="services.html">ייעוץ ותכנון מס</a></li>' +
        '<li><a href="services.html">הנהלת חשבונות ושכר</a></li>' +
        '<li><a href="services.html">ייצוג מול הרשויות</a></li>' +
        '<li><a href="services.html">ליווי עסקי</a></li>' +
      '</ul></div>' +
      '<div><h4>פרטי קשר</h4><ul class="f-contact">' +
        '<li>' + icoPin + '<span>בית עובד 8, תל אביב-יפו<br>סניף נוסף בנתניה</span></li>' +
        '<li>' + icoPhone + '<a href="' + TEL + '">03-688-8699</a></li>' +
        '<li>' + icoMail + '<a href="' + MAIL + '">guy@tg-cpa.co.il</a></li>' +
      '</ul></div>' +
    '</div>' +
    '<div class="foot-bottom">' +
      '<div class="foot-line">' +
        '<span class="foot-copy">© <span id="year"></span> כל הזכויות שמורות לטרוינר, גלבר, אלוני — רואי חשבון</span>' +
        '<span class="foot-legal"><a class="leg" href="accessibility.html">הצהרת נגישות</a><a class="leg" href="privacy.html">מדיניות פרטיות</a></span>' +
        '<span class="credit">עיצוב ובנייה ע״י: <a href="https://ombee.co.il" target="_blank" rel="noopener"><img class="credit-logo" src="images/ombee-logo-gold.png" alt="OMBee · עיצוב ובנייה"></a></span>' +
      '</div>' +
    '</div></div></footer>';

  var skip = '<a class="skip" href="#main">דלג לתוכן המרכזי</a>';

  /* ---- הזרקה ---- */
  document.body.insertAdjacentHTML('afterbegin', skip + header + mobileNav);
  var main = document.getElementById('main');
  if (main) main.insertAdjacentHTML('afterend', footer);
  else document.body.insertAdjacentHTML('beforeend', footer);

  /* ---- שנה בפוטר ---- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- תפריט נייד ---- */
  var body = document.body;
  var mt = document.getElementById('menuToggle');
  function closeDrawer() { body.classList.remove('nav-open'); if (mt) mt.setAttribute('aria-expanded', false); }
  function openDrawer() { body.classList.add('nav-open'); if (mt) mt.setAttribute('aria-expanded', true); }
  if (mt) mt.addEventListener('click', function () { body.classList.contains('nav-open') ? closeDrawer() : openDrawer(); });
  var dClose = document.getElementById('drawerClose'); if (dClose) dClose.addEventListener('click', closeDrawer);
  var dBack = document.getElementById('drawerBackdrop'); if (dBack) dBack.addEventListener('click', closeDrawer);
  document.querySelectorAll('#mobileNav a').forEach(function (a) { a.addEventListener('click', closeDrawer); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeDrawer(); });

  /* ---- הדר דביק + כפתור חיוג צף ---- */
  var headerEl = document.getElementById('header');
  function onScroll() {
    var y = window.scrollY;
    if (headerEl) headerEl.classList.toggle('scrolled', y > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---- חשיפה בגלילה ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- מוני ספירה ---- */
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target, target = +el.dataset.count, suffix = el.dataset.suffix || '';
        var cur = 0, step = Math.max(1, Math.ceil(target / 40));
        (function tick() {
          cur += step;
          if (cur >= target) { el.textContent = target + suffix; }
          else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
        })();
        cio.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(function (c) { cio.observe(c); });
  }

  /* ---- טופס יצירת קשר (הדגמת צד-לקוח בלבד) ---- */
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var name = form.name.value.trim(), phone = form.phone.value.trim();
      if (!name || !phone) {
        form.querySelector('#name').style.borderColor = name ? '' : 'crimson';
        form.querySelector('#phone').style.borderColor = phone ? '' : 'crimson';
        return;
      }
      /* TODO: חיבור אמיתי לשרת / שירות דוא"ל */
      var ok = document.getElementById('formOk');
      if (ok) ok.classList.add('show');
      form.querySelectorAll('input,select,textarea,button').forEach(function (el) { el.disabled = true; });
    });
  }

  /* ===== accessibility widget ===== */
  var A11Y = [
    {cls:'a11y-contrast',label:'ניגודיות',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor"/></svg>'},
    {cls:'a11y-bigtext',label:'טקסט גדול',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 19 9 5l6 14M5.2 14.5h7.6"/><path d="M16.5 10h5M19 10v9M16.5 19h5"/></svg>'},
    {cls:'a11y-links',label:'הדגשת קישורים',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 1 0-7-7l-1.5 1.5"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 1 0 7 7l1.5-1.5"/></svg>'},
    {cls:'a11y-spacing',label:'ריווח טקסט',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M3 5h18M3 19h18M8 9 5 12l3 3M16 9l3 3-3 3M6 12h12"/></svg>'},
    {cls:'a11y-lineheight',label:'גובה שורה',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M9 6h12M9 12h12M9 18h12M4 4v16M2 6l2-2 2 2M2 18l2 2 2-2"/></svg>'},
    {cls:'a11y-dyslexia',label:'תמיכה בדיסלקציה',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>'},
    {cls:'a11y-readable',label:'גופן קריא',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 7V5h14v2M12 5v14M9 19h6"/></svg>'},
    {cls:'a11y-grayscale',label:'רוויה',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M12 3s7 6.4 7 11a7 7 0 0 1-14 0c0-4.6 7-11 7-11Z"/></svg>'},
    {cls:'a11y-align-left',label:'יישור טקסט',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M4 6h16M4 12h12M4 18h16"/></svg>'},
    {cls:'a11y-noimg',label:'הסתרת תמונות',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m4 19 6-6 3 3"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m3 3 18 18"/></svg>'},
    {cls:'a11y-noanim',label:'ביטול הנפשות',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="9"/><path d="M10 9v6M14 9v6"/></svg>'},
    {cls:'a11y-cursor',label:'סמן גדול',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M5 3l15 7-6.5 2.2L11 19z"/></svg>'},
    {cls:'a11y-focus',label:'הדגשת מיקוד',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="12" cy="12" r="7"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/></svg>'},
    {cls:'a11y-headings',label:'הדגשת כותרות',icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="M6 4v16M18 4v16M6 12h12"/></svg>'}
  ];
  var a11yOpts = A11Y.map(function (o) { return '<button type="button" class="a11y-opt" data-cls="' + o.cls + '" aria-pressed="false">' + o.icon + '<span>' + o.label + '</span></button>'; }).join('');
  var a11yHtml =
    '<button class="a11y-fab" id="a11yFab" aria-label="פתיחת תפריט נגישות" aria-haspopup="dialog">' + icoAccess + '</button>' +
    '<div class="a11y-panel" id="a11yPanel" role="dialog" aria-label="הגדרות נגישות">' +
      '<div class="a11y-head"><h2>' + icoAccess + 'נגישות</h2><button class="a11y-x" id="a11yX" aria-label="סגירת תפריט נגישות">' + icoClose + '</button></div>' +
      '<div class="a11y-body"><div class="a11y-grid">' + a11yOpts + '</div></div>' +
      '<div class="a11y-foot">' +
        '<button type="button" class="a11y-reset" id="a11yReset">' + icoReset + 'איפוס הגדרות נגישות</button>' +
        '<div class="a11y-links"><a href="accessibility.html">הצהרת נגישות</a><a href="privacy.html">מדיניות פרטיות</a></div>' +
      '</div>' +
    '</div>';
  document.body.insertAdjacentHTML('beforeend', a11yHtml);

  var A11Y_KEY = 'tg-a11y';
  function a11yGet() { try { return JSON.parse(localStorage.getItem(A11Y_KEY)) || {}; } catch (e) { return {}; } }
  function a11ySave(s) { try { localStorage.setItem(A11Y_KEY, JSON.stringify(s)); } catch (e) {} }
  function a11yApply() {
    var s = a11yGet();
    A11Y.forEach(function (o) { body.classList.toggle(o.cls, !!s[o.cls]); });
    document.querySelectorAll('.a11y-opt').forEach(function (b) { var on = !!s[b.dataset.cls]; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
  }
  document.querySelectorAll('.a11y-opt').forEach(function (b) {
    b.addEventListener('click', function () { var s = a11yGet(); s[b.dataset.cls] = !s[b.dataset.cls]; a11ySave(s); a11yApply(); });
  });
  var aFab = document.getElementById('a11yFab'), aX = document.getElementById('a11yX'), aReset = document.getElementById('a11yReset');
  if (aFab) aFab.addEventListener('click', function () { body.classList.toggle('a11y-open'); });
  if (aX) aX.addEventListener('click', function () { body.classList.remove('a11y-open'); });
  if (aReset) aReset.addEventListener('click', function () { a11ySave({}); a11yApply(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') body.classList.remove('a11y-open'); });
  a11yApply();
})();
