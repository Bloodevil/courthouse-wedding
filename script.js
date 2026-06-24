/* ─── Wedding Invitation Script ─── */

// ── Intro → Card transition
function openCard() {
  const overlay = document.getElementById('introOverlay');
  const card    = document.getElementById('mainCard');
  overlay.classList.add('fade-out');
  card.classList.add('visible');
  setTimeout(() => { overlay.style.display = 'none'; }, 900);
}



// ── Toast notification
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}

// ── Copy account number
function copyAccount(number, btn) {
  navigator.clipboard.writeText(number).then(() => {
    btn.classList.add('copied');
    btn.querySelector('span') && (btn.querySelector('span').textContent = '복사됨');
    showToast('계좌번호가 복사되었습니다 ✓');
    setTimeout(() => {
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback
    const el = document.createElement('textarea');
    el.value = number;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('계좌번호가 복사되었습니다 ✓');
  });
}

// ── Copy page URL
function copyUrl() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    showToast('링크가 복사되었습니다 ✓');
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = url;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('링크가 복사되었습니다 ✓');
  });
}

// ── Phone call
function tel(number) {
  window.location.href = `tel:${number.replace(/-/g,'')}`;
}

// ── Open Kakao Channel Chat
function openKakao(id) {
  window.open(`http://pf.kakao.com/${id}/chat`, '_blank');
}

// ── Kakao map
function openKakaoMap() {
  window.open('https://map.kakao.com/?q=그랜드+인터컨티넨탈+서울+파르나스', '_blank');
}

// ── Naver map
function openNaverMap() {
  window.open('https://map.naver.com/v5/search/그랜드+인터컨티넨탈+서울+파르나스', '_blank');
}

// ── Kakao share (placeholder)
function shareKakao() {
  showToast('카카오 공유 기능은 SDK 연동 후 사용 가능합니다');
}



// ── Scroll fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('section, .account-card, .transport-item, .message-item')
  .forEach(el => {
    el.classList.add('fade-in-up');
    observer.observe(el);
  });

// ── Lightbox for Gallery
var galleryImages = [
  'gallery-1.jpg',
  'gallery-2.jpg',
  'gallery-3.jpg',
  'gallery-4.jpg',
  'gallery-5.jpg',
  'gallery-7.jpg'
];
var currentLightboxIndex = 0;

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightbox();
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

function changeLightboxImage(direction) {
  currentLightboxIndex += direction;
  if (currentLightboxIndex < 0) {
    currentLightboxIndex = galleryImages.length - 1;
  } else if (currentLightboxIndex >= galleryImages.length) {
    currentLightboxIndex = 0;
  }
  updateLightbox();
}

function updateLightbox() {
  const img = document.getElementById('lightboxImg');
  const counter = document.getElementById('lightboxCounter');
  img.src = galleryImages[currentLightboxIndex];
  counter.textContent = `${currentLightboxIndex + 1} / ${galleryImages.length}`;
}

// ── Language Toggle
function setLang(lang) {
  if (lang === 'en') {
    document.documentElement.classList.add('en');
    document.getElementById('btnEn').classList.add('active');
    document.getElementById('btnKo').classList.remove('active');
  } else {
    document.documentElement.classList.remove('en');
    document.getElementById('btnKo').classList.add('active');
    document.getElementById('btnEn').classList.remove('active');
  }
}
