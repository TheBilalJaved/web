'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "9ff61782790b37d646c35c40ffdec876",
"version.json": "fc27cfab7e4529f5251437866c706cbd",
"index.html": "8f9380fdc2639e283a45e721c71c40d0",
"/": "8f9380fdc2639e283a45e721c71c40d0",
"main.dart.js": "04f747a6ab9f69b0c59a711998f790ad",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "0484d8f7daa040404a9bda0266d917d3",
"icons/Icon-192.png": "e1023cf531efaf009447978678f43ba0",
"icons/Icon-maskable-192.png": "e1023cf531efaf009447978678f43ba0",
"icons/Icon-maskable-512.png": "3f664292764b920acf71136a88b38e2f",
"icons/Icon-512.png": "3f664292764b920acf71136a88b38e2f",
"manifest.json": "2bee2f00bd4c7a75ffa4b69bc3d70b62",
"assets/AssetManifest.json": "30e8bfdd65b0a6e05036e90a96ca2a43",
"assets/NOTICES": "14bb8d06235009949545d1c5e2d2b3dd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "eb1dfd35d89be8a70c558d6967b275af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "0ed00a2a642032c6968a211fee577f8d",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "20032aca2a012055c3fdb72c9711f279",
"assets/fonts/MaterialIcons-Regular.otf": "4036252dc2f61f757897a86475f1ef7b",
"assets/assets/images/gallery.png": "2d4d35e2d7231367cde28743e1874bd5",
"assets/assets/images/back_img1.png": "ad5816fd1a154f26d6f42a71700b015f",
"assets/assets/images/setting.png": "a1740efe3c8832bdf7d95b2d91105f66",
"assets/assets/images/message-text.png": "b9caf127c69c9be840579c4314d7a79c",
"assets/assets/images/status2.png": "f4513978fd04defbac830e978c4d2658",
"assets/assets/icons/silent.png": "8b9e4ea87036e465dff57ca7807e8b28",
"assets/assets/icons/chat1.png": "de8ef84f495cb3bcfc6d04e239afb8c1",
"assets/assets/icons/search-normal.png": "0c7ec9c7f8d0a6dde6f55e7e1286c868",
"assets/assets/icons/mice_off.png": "daac9891843be2133a4ecba248499268",
"assets/assets/icons/contact_s.png": "e8d0b62317ec8ba6d19acf24aeb70d37",
"assets/assets/icons/v_camera.png": "117f974dcd13cd49fa9ef35f06667100",
"assets/assets/icons/icon.png": "b959ff758e27fe64ad19837f3dd77e05",
"assets/assets/icons/profile_dark.png": "8951106504344b05cc1fd48c89cafaf5",
"assets/assets/icons/volume_off.png": "2bfecd94ad29e893bb6f668ca09e2c37",
"assets/assets/icons/call_s.png": "8e456e8647f7f7d2b74279e8c2618b0b",
"assets/assets/icons/outgoing_video_call.png": "9d364e66a55450aeb867332acbce1590",
"assets/assets/icons/profile-add.png": "981f4d71a4318a64a51e0184574df5d9",
"assets/assets/icons/gallery.png": "aa46298ec925f60763f81f969e8ba261",
"assets/assets/icons/status_s.png": "bd2ac00e20bb3d685164d872b90cebc9",
"assets/assets/icons/missed_video_call.png": "1b63ac5482137695d23682620c938634",
"assets/assets/icons/camera_off.png": "47810af7279592cfbfba4a4d8e88025e",
"assets/assets/icons/profile_outline.png": "81bd67b6977857360e295aa1e9fd74d3",
"assets/assets/icons/file_icon.png": "7e14b602a8f1bf1c67b5d9f72ca5efa6",
"assets/assets/icons/sms-notification.svg": "b1d1ebc7175588b98cc2f4407c385ea1",
"assets/assets/icons/chats_outline.png": "da9bb6db1a2042bab63dad5f5d667fff",
"assets/assets/icons/setting1.png": "6776abd6fa6f536e173f38a9d5536907",
"assets/assets/icons/camera_on.png": "3709f906eefc27e66f3ee1e6ab04db8a",
"assets/assets/icons/iac.png": "2af80766a3b66ced6349670f3e66b57f",
"assets/assets/icons/sms-notification.png": "185df32d924c4b267259cf9e38028af9",
"assets/assets/icons/volume_on.png": "34332427b76ff335aa2c426f8fd77a41",
"assets/assets/icons/Add_icon.png": "cdf362ce032a2b648cdf894ce5ad2423",
"assets/assets/icons/call_reject.png": "32e2a106e2323b302c7b7c0a88c958af",
"assets/assets/icons/incoming_video_call.png": "410ba243e2ebaccf62f02180a402d95f",
"assets/assets/icons/oac.png": "1d8d25273537a3b8756fa41cb5e83313",
"assets/assets/icons/roted.png": "55e97b69a8cfc67cc0207e045a7f934b",
"assets/assets/icons/mac.png": "f7ebb361e893155db26f3d53bf754bcd",
"assets/assets/icons/call1.png": "f61ff8a4bd568c5c398124b593195dbe",
"assets/assets/icons/mice_on.png": "29ee11024afccd46214ff378c68df8c1",
"assets/assets/icons/search.png": "c6028f16f9649239f3294e27092d6b25",
"assets/assets/icons/profile_s.png": "b24d86e221ce3e042f29b386a5fbc204",
"assets/assets/icons/call_confirm.png": "33b42aaa0da9839079b837fad56054e3",
"assets/assets/icons/call_end.png": "3749156653790471c3c0361280548b83",
"assets/assets/icons/ivc.png": "1bfba027275a5d707e5855738627a97e",
"assets/assets/icons/block.png": "5737edc4f230fcc4833dee7f2aa664f1",
"assets/assets/icons/missed_audio_call.png": "2c0e7879f82d702b70e9f4e37d3d5c3c",
"assets/assets/icons/missed_call_icons.png": "cb0ef42f01aa61cb43bc704b3c5c39cb",
"assets/assets/icons/image_icon.png": "229f522e79bf3f33aad4d037d039a96d",
"assets/assets/icons/video-camera.png": "d14158b7a5359e4959b9768c9e1f5020",
"assets/assets/icons/Loader.json": "938f0466dc7d65cdf04884fec710ec43",
"assets/assets/icons/location_icon.png": "b5e6bdec8cd0290968f393e6e494085c",
"assets/assets/icons/video_icon.png": "f87224c4cad5134a8e3bffa40b508745",
"assets/assets/icons/ovc.png": "c5eaf537461943cbeaa71d7d0024c3c4",
"assets/assets/icons/mvc.png": "18a3babb06eca0f60dabf09f985936ed",
"assets/assets/icons/eye.png": "061dd7ac861f8787de5b468fde2427f5",
"assets/assets/icons/outgoing_audio_call.png": "33cbb22103d953842ebf716a933e1344",
"assets/assets/icons/phone.png": "b4c94e8c31c1a93ca8f52981e8c363ea",
"assets/assets/icons/delete.png": "d46c61de038bb893bd01a31b2de2e0f6",
"assets/assets/icons/contact1.png": "050c45b7ef2dfbb86e42073b939e43ec",
"assets/assets/icons/incoming_audio_call.png": "ea103b594c96c9be76484948c4d85062",
"assets/assets/icons/Edit.png": "f37c7f0c0c4825ca2ee6a5a5daa05fc5",
"assets/assets/icons/upload_vec.png": "8a37a1b4a7313bc788addae0be9df62d",
"assets/assets/icons/more.png": "f0089fdea298ccf1305b6dc7e8d07ea2",
"assets/assets/icons/star2.png": "88891661c2aa31d3798b2e3a52a1f218",
"assets/assets/icons/chat_s.png": "c9ba0e718a1f9957358398f3074b40ce",
"assets/assets/icons/status1.png": "232b89b08ad5fb1237a6c93cf97df3b9",
"assets/assets/icons/Message.png": "9d9fa971f0abe49e0d64b862ca35b1a9",
"assets/assets/icons/report.png": "9af9382f37e7a361c413c6059dccc162",
"assets/assets/icons/sms@2x.png": "1246a38f73511ef0edfe0acbe3716eb4",
"assets/assets/icons/copy.png": "91eb2f8b2e7cfb280108ce9e3b48c031",
"assets/assets/icons/people.png": "b1d1718a4dcbcaac6dcbfaf73e879be1",
"assets/assets/icons/mic.png": "2182d42d1a0aeedb7aafa137a3e946e8",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
