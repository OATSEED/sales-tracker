// Service worker เปล่าๆ ไว้เพื่อให้เบราว์เซอร์มองว่าเว็บนี้ "ติดตั้งเป็นแอปได้" (installable)
// ไม่ได้ทำ offline caching เต็มรูปแบบ เพราะแอปต้องออนไลน์เพื่อดึงข้อมูลจาก Google Sheet อยู่แล้ว

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // ปล่อยให้ทุก request ทำงานตามปกติ (ผ่านเน็ตเวิร์กจริง)
  event.respondWith(fetch(event.request));
});
