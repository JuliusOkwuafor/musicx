// This is the service worker for the SongPay PWA

const CACHE_NAME = "songpay-v1"
const urlsToCache = [
  "/",
  "/manifest.json",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/songpayindex.jpg",
  "/forartists.png",
  "/forlisteners.png",
  "/profileimage.png",
  "/latestupload image.png",
  "/feedbackusericon.png",
  "/songsimages.png",
]

// Install a service worker
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...")
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Caching app shell and content")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Cache and return requests
self.addEventListener("fetch", (event) => {
  console.log("Service Worker: Fetching", event.request.url)
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Cache hit - return response
      if (response) {
        console.log("Service Worker: Using cached version of", event.request.url)
        return response
      }

      // Not in cache - fetch from network
      console.log("Service Worker: Fetching resource from network", event.request.url)
      return fetch(event.request).then((response) => {
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response
        }

        // Clone the response as it's a stream and can only be consumed once
        const responseToCache = response.clone()

        caches.open(CACHE_NAME).then((cache) => {
          console.log("Service Worker: Caching new resource", event.request.url)
          cache.put(event.request, responseToCache)
        })

        return response
      })
    }),
  )
})

// Update a service worker
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...")
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log("Service Worker: Deleting old cache", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Handle push notifications
self.addEventListener("push", (event) => {
  console.log("Service Worker: Push Received")

  const title = "SongPay"
  const options = {
    body: event.data ? event.data.text() : "New notification from SongPay",
    icon: "/icon-192x192.png",
    badge: "/icon-192x192.png",
  }

  event.waitUntil(self.registration.showNotification(title, options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  console.log("Service Worker: Notification click received")

  event.notification.close()

  event.waitUntil(clients.openWindow("/"))
})

console.log("Service Worker: Registered")

