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
    "revision": "e5187e073b68fec7a451d9fb4b78d243"
  },
  {
    "url": "assets/css/0.styles.a4d9bff8.css",
    "revision": "47ad92bb4e1910bf8a121d88f708f9f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.56c2e67f.js",
    "revision": "093eedeb69737e1fa45b27d7db7c0ca3"
  },
  {
    "url": "assets/js/11.8401a708.js",
    "revision": "15b230a780cfee86ae8027d05692928e"
  },
  {
    "url": "assets/js/12.b8b981a4.js",
    "revision": "ad6704f3dd6396c22160384de864a0f2"
  },
  {
    "url": "assets/js/13.361b8bc5.js",
    "revision": "9b2c0862c5e96594eec8948bd314c1a9"
  },
  {
    "url": "assets/js/14.8e2ab8bb.js",
    "revision": "6cae60e1371f89fbc1232de40cc484e0"
  },
  {
    "url": "assets/js/15.cdde43f1.js",
    "revision": "04da3fa6d6cd9703535153b28e1d4e25"
  },
  {
    "url": "assets/js/16.3706b9a7.js",
    "revision": "75ff7750a068e08310acd36959fae959"
  },
  {
    "url": "assets/js/17.0d1cbd09.js",
    "revision": "9ce1900962be94dde2d54119234619d2"
  },
  {
    "url": "assets/js/18.37ab9cee.js",
    "revision": "a31fc85200443cf2faf9caa0b5ce31aa"
  },
  {
    "url": "assets/js/19.bd77326d.js",
    "revision": "b9bc10b99d2629467dfba05f0c09978e"
  },
  {
    "url": "assets/js/2.dfadd8ce.js",
    "revision": "10a4c820aab7971e39095b51452629fd"
  },
  {
    "url": "assets/js/20.36b96394.js",
    "revision": "55dc247961f93b76ab3d76f7255b5806"
  },
  {
    "url": "assets/js/3.a0651c09.js",
    "revision": "16240fa4969a41682ae2d20f5b793a31"
  },
  {
    "url": "assets/js/4.6e334a9b.js",
    "revision": "a8dabba7705b71a60d1d88474014c8ca"
  },
  {
    "url": "assets/js/5.5d843e41.js",
    "revision": "a844d2119bf41742609998dd4f030a06"
  },
  {
    "url": "assets/js/6.983cff3d.js",
    "revision": "827e3c5c0e9fd36173da20408e16ac77"
  },
  {
    "url": "assets/js/7.d84190d7.js",
    "revision": "9e7352b2a5f20677cfeccc3bc6684263"
  },
  {
    "url": "assets/js/8.2c215bcb.js",
    "revision": "3f5c0c5e0d6209f78d6390c379935838"
  },
  {
    "url": "assets/js/9.2a35f5d2.js",
    "revision": "79dc77df0c6a97b9df5d5f2ebb8ab272"
  },
  {
    "url": "assets/js/app.c66e0e21.js",
    "revision": "01404f36a8d34e60b06e7b635d19036a"
  },
  {
    "url": "compatibility.html",
    "revision": "70137d5d523f56200c48eba1be3f5e9d"
  },
  {
    "url": "database.html",
    "revision": "5083168a2932b034d44044568fe0683c"
  },
  {
    "url": "develop.html",
    "revision": "eba033677067218c807bbdd0559d7987"
  },
  {
    "url": "en/compatibility.html",
    "revision": "0dab120200b97f7b8d201486e38b9fd7"
  },
  {
    "url": "en/database.html",
    "revision": "28cf80e98dbb6cf8dccffd742b92161a"
  },
  {
    "url": "en/example.html",
    "revision": "92de16fe22fef7d33e45eaaeccf1e3e0"
  },
  {
    "url": "en/faq.html",
    "revision": "968ebee4f0d6d8f0312c6da1e30f7467"
  },
  {
    "url": "en/index.html",
    "revision": "1e86c3480b198d5369bbbf9ce54e0648"
  },
  {
    "url": "en/siterule.html",
    "revision": "450c881341474dcd5467e4fc43404eb0"
  },
  {
    "url": "example.html",
    "revision": "723c6eb5860f8a21a0dd6b63dd57b450"
  },
  {
    "url": "faq.html",
    "revision": "df7fd5a8e7fd95e151112b514e1b2deb"
  },
  {
    "url": "image/example/baidu.png",
    "revision": "4402e5935ca77f66e70f6c2f315af694"
  },
  {
    "url": "image/example/google.png",
    "revision": "11613e2fec311e270ac9003dbd1da54e"
  },
  {
    "url": "image/example/hhmm.png",
    "revision": "e4bda310ad173720a7088fba64e22549"
  },
  {
    "url": "image/example/xkcd.png",
    "revision": "603585728294aa3713aa8c088ed0996d"
  },
  {
    "url": "index.html",
    "revision": "622a1795013b77709a425d46e9ca1e61"
  },
  {
    "url": "logo.png",
    "revision": "e479687dc946957a8d4f8dcec2a8f382"
  },
  {
    "url": "siterule.html",
    "revision": "3db0e06f2c11a7a3d659175b5b8f0d7d"
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
