/* =============================================================
   טרוינר · גלבר · אלוני — סקריפט משותף לכל העמודים
   מזריק את ה-Header / תפריט / Footer המשותפים, ומפעיל את ההתנהגויות.
   * לוגו TG נטען מ-images/logo-tg-cpa.png (ו-logo-light.png לפוטר) — להחלפה שנה כאן בלבד.
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
    '<span class="mark"><img src="images/logo-tg-cpa.png" alt="טרוינר גלבר אלוני — רואי חשבון"></span>' +
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
        '<span class="drawer-logo"><img src="images/logo-tg-cpa.png" alt="טרוינר גלבר אלוני"><b>טרוינר גלבר אלוני</b></span>' +
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

  /* ---- תוכן מוצג מיד, ללא אנימציית כניסה (שום דבר לא זז ברענון) ---- */
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });

  /* ---- מספרי סטטיסטיקה מוצגים מיד (ללא ספירה) ---- */
  document.querySelectorAll('[data-count]').forEach(function (el) { el.textContent = el.dataset.count + (el.dataset.suffix || ''); });

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

})();
