'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "57aa363d30231d7c2b4a3a1c9cdd2a79",
"version.json": "57fc3294622b9656e71cec02f04c1737",
"index.html": "f279088447382730f43b84a32952d7b6",
"/": "f279088447382730f43b84a32952d7b6",
"main.dart.js": "7bf86d7ae0d6d658e9104a3fe74174f7",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "10cb41995e9a7784463d7be31b1fb8f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e46c34e720f5fc8d60b00514646adfc",
".git/config": "b1327c3f305f39dfcbc83dad9e89c954",
".git/objects/pack/pack-5dadbc1c67fc63f82b3b8234b4c9b7cfdc522ca4.pack": "6c35bcdc34c732533d7a84c131a6cfab",
".git/objects/pack/pack-5dadbc1c67fc63f82b3b8234b4c9b7cfdc522ca4.idx": "bd81dd2b60e7f19b2d31f0a1ab81f66b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ee7f21ec489bf66d4b00b671cd3bbb9",
".git/logs/refs/heads/main": "1ee7f21ec489bf66d4b00b671cd3bbb9",
".git/logs/refs/remotes/origin/HEAD": "1ee7f21ec489bf66d4b00b671cd3bbb9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4b2fd96e1427a8252cab85481a1fd970",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "e036d9a41aa85d64f5427571676fde32",
".git/packed-refs": "949000f0db31c1eee6d89df4b6439f31",
"assets/AssetManifest.json": "4277ee0d5d1406c06d2926eceaa9c5f7",
"assets/NOTICES": "b424a63bd65c6ee3f49372923fed11a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "648531337b38d6fd272e83a65515adf0",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_offline_point_x2.png": "b06a0e72176ce0d5b3b6a7aa1d7f3db3",
"assets/packages/charby_common_ui/lib/assets/icons/stations/socket_x3.png": "59294c131d3784123bb8fbb69d8c90ca",
"assets/packages/charby_common_ui/lib/assets/icons/stations/service_point_x2.png": "7808293c622676afeede00a9f9ae529e",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_busy_custom_x3.png": "97ea287e4a6d137b90df2326bd34d1a4",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_busy_custom_x3.png": "24d84840d3308bdf958912da186be233",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_busy_point_x2.png": "6e141e325214ecc8e17c3a211bc10a7c",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_busy_api_x3.png": "f5896a466dd4c85bae902b083f44defd",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_free_custom_x3.png": "af31d7bc7e2469cc2db9dbc6a7cd9133",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_offline_api_x3.png": "f293f4dc709f248df4695561ae8a27cd",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_offline_custom_x3.png": "721be348ff6bf151b8bf1b404a218cc4",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_free_api_x3.png": "351d3f71fad1070a6857e0473a8080fd",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_offline_api_x3.png": "9a604fc990ca6342c5cfba62bcf1f93f",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_free_custom_x3.png": "bac6e2079e4f2f7eae15bd3f4991a2b6",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_free_point_x2.png": "a636a186c12192b055c1b2ed82b7ba9d",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_offline_point_x2.png": "d79e9bad864453bc20c6a72c520e309f",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_busy_point_x2.png": "4abb7fd1cd3499308159e7f316d4a6d1",
"assets/packages/charby_common_ui/lib/assets/icons/stations/ac_free_api_x3.png": "95b7c4071e0afee58caae6c7bd2dcdfa",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_free_point_x2.png": "acec18174d37ff6b9633270662b39f28",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_busy_api_x3.png": "84eb59e02f3500dc0ac3c135c0964309",
"assets/packages/charby_common_ui/lib/assets/icons/stations/dc_offline_custom_x3.png": "d836188f6130578dcff0b6af80cf59c8",
"assets/packages/charby_common_ui/lib/assets/icons/information.svg": "ad0a11cd4a146d8a39d8a3c9b60d6338",
"assets/packages/charby_common_ui/lib/assets/icons/add_location.svg": "be8f614b975b00ed14c39386c7374ff3",
"assets/packages/charby_common_ui/lib/assets/icons/plus.svg": "072d9e94da57f9d72880a701d6d7f0de",
"assets/packages/charby_common_ui/lib/assets/icons/geoposition.svg": "dc60b874874cabe7a3cbb8170514aadf",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/profile_disabled.svg": "0bf3e8b97a42b5a950a59871397242e0",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/home_disabled.svg": "c7747ac53b57aedf5c9c5e424193d03f",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/news_disabled.svg": "5ab66a85183fb6a922e8f168a0c597ff",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/home_enabled.svg": "73805787fc418c4421f91309b4d3fffc",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/chat_enabled.svg": "2e7d353521b7391dea96ab0553f1c76d",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/chat_disabled.svg": "37b268f1a9f61bd57a6bba054e5058b2",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/news_enabled.svg": "e711378efebfbe719e659e71e2a55345",
"assets/packages/charby_common_ui/lib/assets/icons/navigation_bar/profile_enabled.svg": "1e7e872c6d30d052ec3ae5fffc322e72",
"assets/packages/charby_common_ui/lib/assets/icons/location.svg": "c1406bef13a12eeb162b433ff5d97809",
"assets/packages/charby_common_ui/lib/assets/icons/filter.svg": "fb88107ba075174ae6a357969fb8e7de",
"assets/packages/charby_common_ui/lib/assets/icons/minus.svg": "7dc057bfad080d14ea39fe1f6d9974bf",
"assets/packages/charby_common_ui/lib/assets/icons/heart.svg": "8038c59ee8f2bae9edfc20429bf972c2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "61a1eb87e17f049ad81efbec850793c0",
"assets/fonts/MaterialIcons-Regular.otf": "d02998dca9e9b272be1448114e1ea553",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
