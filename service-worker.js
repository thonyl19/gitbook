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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ad0c0508ab3157cef8bd6823a9f4f4d8"
  },
  {
    "url": "assets/css/0.styles.279d48d3.css",
    "revision": "88efb7e3f90495dafcdcfa8dbbd5fafa"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.e2cdaea2.js",
    "revision": "135ee78f4b08c92ca2818ff40dae7394"
  },
  {
    "url": "assets/js/3.8cb0be66.js",
    "revision": "7107a5ccdd54ad9532b894fae75a326f"
  },
  {
    "url": "assets/js/4.0f9a876c.js",
    "revision": "c8f8ca6fed34b582e82582ddb7e003fc"
  },
  {
    "url": "assets/js/5.7bdad05f.js",
    "revision": "a7f227b584c952a50b5d198946900102"
  },
  {
    "url": "assets/js/app.3950135c.js",
    "revision": "a133d7f2c632f882733a481408bd5a44"
  },
  {
    "url": "category/index.html",
    "revision": "78c163b9651dee6853d0529a93787eac"
  },
  {
    "url": "category/logs/index.html",
    "revision": "5c6fdfbd077f5e90fc5e0f32dedbd276"
  },
  {
    "url": "index.html",
    "revision": "322f1d8d0e9beccb8759761b7b3f27be"
  },
  {
    "url": "posts/20191018.html",
    "revision": "43b7ad951039a6fb887b911051be5cf1"
  },
  {
    "url": "posts/index.html",
    "revision": "6c928439ece14f0493bb76b3b5f5b262"
  },
  {
    "url": "tag/index.html",
    "revision": "59d687510ae011aebdec7ba5e40830d1"
  },
  {
    "url": "tag/site/index.html",
    "revision": "f680cee6faa13407b576814214e47f03"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
