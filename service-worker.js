/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f180224b96644794043ab71096d30ae7"
  },
  {
    "url": "about.html",
    "revision": "91ad9817c04e06f44a7eee85b6906877"
  },
  {
    "url": "assets/css/0.styles.cb17708e.css",
    "revision": "6b2a985a3f203f03b9bd3bd9cb932341"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/xuexi.2647f4dc.jpg",
    "revision": "2647f4dc306c93c6a1148bd67dcf725f"
  },
  {
    "url": "assets/js/10.935a26d4.js",
    "revision": "6abe1c5cd91b87c2cfde1ad1cfce69fb"
  },
  {
    "url": "assets/js/11.613ba195.js",
    "revision": "1df33a3161bb29facd34ea656f0585fc"
  },
  {
    "url": "assets/js/12.bd336d8b.js",
    "revision": "48b6a538e1b635bbf0d53f9f04f11afc"
  },
  {
    "url": "assets/js/13.ed873a06.js",
    "revision": "482b36891bfee3a9fb1ac9954fe0eec2"
  },
  {
    "url": "assets/js/14.03e74162.js",
    "revision": "448ce9b31c7afbb862f3f0f576100b34"
  },
  {
    "url": "assets/js/15.d0711422.js",
    "revision": "a9888b214cc3a093467dafb8e3abc891"
  },
  {
    "url": "assets/js/16.8db17d51.js",
    "revision": "df7b8c7ef2de916641e77c173424726e"
  },
  {
    "url": "assets/js/2.b6ba7a93.js",
    "revision": "9986cc0c886d4ec2df304a4b89c6a143"
  },
  {
    "url": "assets/js/3.998446c7.js",
    "revision": "91c8b26e0f928c33ba5eae376025b3f1"
  },
  {
    "url": "assets/js/4.536068bf.js",
    "revision": "69920bf482a0f8ea36e57fc4bcd2a5ac"
  },
  {
    "url": "assets/js/5.072f9cc9.js",
    "revision": "7e4c22ec040ad00f8daa70e421e46e33"
  },
  {
    "url": "assets/js/6.66d86581.js",
    "revision": "cc490423aeb18a6aa4e2e34fe5693dfd"
  },
  {
    "url": "assets/js/7.17daa4b6.js",
    "revision": "a6555bf8898a8c287cfa494eb1a34612"
  },
  {
    "url": "assets/js/8.04dd1fc5.js",
    "revision": "2531574756dc1795e80149399a302629"
  },
  {
    "url": "assets/js/9.b109992e.js",
    "revision": "d98071c362113e46653fac36aa10f270"
  },
  {
    "url": "assets/js/app.8d807ad8.js",
    "revision": "3c0aace254cd6f90c0797e7348e102c9"
  },
  {
    "url": "bg.jpg",
    "revision": "cc2da2f51d96b85118fa29a53ae38737"
  },
  {
    "url": "blog.png",
    "revision": "db744813fb0b891bd723f17e8f803092"
  },
  {
    "url": "blog/index.html",
    "revision": "dd5ce56d4fdd670231502e6262721a64"
  },
  {
    "url": "blog/start.html",
    "revision": "7bbef825d80338fff16b2d6cc87ce4f8"
  },
  {
    "url": "blog/watcher.html",
    "revision": "1e4a454cf86b725ac19f66a6b6b09d75"
  },
  {
    "url": "contact.html",
    "revision": "5a350d6c0b29c1e820c75d2d89fee5de"
  },
  {
    "url": "halcon.png",
    "revision": "bb5f582c1f76db5cc8b75f0c025f94f4"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "8e571a251b36cddc940c9563ec21e819"
  },
  {
    "url": "icons/android-chrome-60x60.png",
    "revision": "edcb0c1caf34ac76a491b52a3ceb2bc6"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "e484b6fa3308cad21215e2e2f7419b06"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "5930b81bbae412766cd2ff7971aca4e5"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "30c4049112fbf2f54793f301522a8678"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "8b20efac67c2e2429263d40ae37da135"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "94b44de321972b5e4fd1525f23d6482a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "5930b81bbae412766cd2ff7971aca4e5"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "f412c1fdf9e2f2d2f9f5e9de0521a543"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "3c915277e88a8eae231c1965b08dfc28"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "5678119c38a5fe33a2f8d25f7d63e2d9"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "5930b81bbae412766cd2ff7971aca4e5"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a675c565bacaeb1b39495ec525ea82f1"
  },
  {
    "url": "index.html",
    "revision": "ce081fcbc078e00b668461d545c688e9"
  },
  {
    "url": "life/index.html",
    "revision": "4bd9d81014703c88585f7f012c2e705e"
  },
  {
    "url": "live2d/miku/assets/moc/miku.2048/texture_00.png",
    "revision": "f69191e3aa1aa64d66bef43d38bb45e8"
  },
  {
    "url": "logo.png",
    "revision": "de102efec534f8d2c599d76d5716f8d7"
  },
  {
    "url": "workbox-sw.js",
    "revision": "34852ac8346c8e5109a6fb7c564fd0eb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
