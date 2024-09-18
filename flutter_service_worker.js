'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "87f836f092d3292d097b55d40d43be7e",
"version.json": "57fc3294622b9656e71cec02f04c1737",
"index.html": "d0b903619d7cb9fbfaff1880473e9d18",
"/": "d0b903619d7cb9fbfaff1880473e9d18",
"main.dart.js": "9130234794dae3287cdd6e8522e7515f",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "8e46c34e720f5fc8d60b00514646adfc",
".git/ORIG_HEAD": "673bb6b8ddb312cfdf842a61d4dd29a9",
".git/config": "164dc548294c8df377fd6151f6948bf2",
".git/objects/3e/b52a3e2a52ce6b373a6a998c4cac43c012c36e": "5966dbf914b2bbfbb72686007a2d885f",
".git/objects/6a/564684e8fa52feb2eb142570d22c59cca9e337": "f99bed04f08332b6dbbc3636eb59e446",
".git/objects/32/1b5413f92e352f2db74f1b06b4e2afe56c7aa8": "0cac66d121037fbe38d0aedae90744c8",
".git/objects/35/4ce7c6681bb85b9a876b21355b6a0ea7a78037": "35cc6787d63b53348cf76d2ac1025eaf",
".git/objects/69/455af047069ce8bdd987a5cbfe0b62ff2536f7": "f9e1423c23d95490b8c151480f05f2ed",
".git/objects/51/6fd89edb74eb453fc57946e224ff2d64e4b528": "00f20c4939a56f74c9651cc712178a49",
".git/objects/3d/31080fbc97ea70f23ab427b6147223f46d112b": "35796b70ccf583856bcc690a7ed4baaa",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/93/fe02f56ec6f534bfcd53be10556ae8a1f26ebc": "3b745a06141a02782d9458e2bada632d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/0acd22a7a6da363256ea163749901a246b3003": "a2ad36d8f76fa0c0119dd941dba7fd8f",
".git/objects/0e/36dff84e28f798e5e52f5d11b7bc5c544c978a": "ecee1e0a86ed1d2ec204aa85e9f6adeb",
".git/objects/0e/d9979d1ff41305d746b4e882246bd76ac39218": "ef9477678f67bf5fb959616b6b9af632",
".git/objects/33/fd113d822ef257ea84cbc28d9d7b43aa3dd158": "61db5ebd343491ab5690866af3dc8b38",
".git/objects/9c/f8450bbbb2c3ac4135243e0979e0347e4fcd28": "6326911b2a1553e4b0886541ecc3892a",
".git/objects/a3/a337b46c5f75fea8eefb8341b018df18591ad7": "86507de75061bc0cf70c70ac7634e232",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/3b5f845a822eb188ceefb3be2629b60656487c": "8fbe72f11e75ead9a24c5b3ecf9fd779",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a4f2b78aa120f741f6a292d781e5dd42db973e": "f190e15dd92a2c6363cdb89ecdc67092",
".git/objects/e2/27bbae04a9d8051e5e3a1e792e5087d67420d4": "2584e68077db824e5ea398df91cb280f",
".git/objects/f4/eee289904dfcd50cf54dd7c87552b56faf9b31": "fd1283eb2d0e0d4b7e75cb975fb6df7c",
".git/objects/f3/a59608a043e6db9c67a9c1571910e05f8ad8bf": "3b05f935ebd4663dc1d861aa191254a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b37f918636f48a625c05a3ac23efb936a05271": "7c72802fdc6ba4c6b76e74b080c3de90",
".git/objects/c7/2eacbda169d20fa747dd27962f6b72876ec3b8": "0f32daef37ff6442ed4709f6b8988b69",
".git/objects/c7/3769c513ec155fcb1d6669d495bde215a2cbab": "175bec4330e97b5859f43a0d054f9d63",
".git/objects/c7/3269546c11c34bce64f8816b122004e3e0caa2": "62be923b37eca4b2a3529f9d13136144",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/8c34565ffeffad1c61e3f2a6e8c4b99fe8bc9e": "83f30d608465b42298b9963b6c9db428",
".git/objects/cf/ebdbd89cff196aef75ef5d2ca66e74535f402e": "517a3af694f9f352c1671437fc2e868c",
".git/objects/ca/2993c5f5c7db88470ae72dc8778b2efc18e6ed": "f8cd7f2a5b542da7af1a9d9b4fba1761",
".git/objects/ca/3ac713c79cf2ca9ce1b0f67266bc1bcd85f2c6": "e95d27dd061341f6b15a8aaad282fc4a",
".git/objects/20/4be3c95069cae84758aafa5d210a2a47b28696": "260f5f087c8a4d983a47b6ce1ed96f8f",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/4a926a8171d97ba126f4d395d27e2b276cc1c4": "7e40b2c851506f7bbb00907437c07761",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/18/a8feae5b84d7e7ec6ab41b234b12b76805c66d": "4a2669c45e6e8c6a78638f2eca2fafc7",
".git/objects/pack/pack-5dadbc1c67fc63f82b3b8234b4c9b7cfdc522ca4.pack": "6c35bcdc34c732533d7a84c131a6cfab",
".git/objects/pack/pack-5dadbc1c67fc63f82b3b8234b4c9b7cfdc522ca4.idx": "bd81dd2b60e7f19b2d31f0a1ab81f66b",
".git/objects/42/46818935a27ff33bd4821e27e91ffb939d5a08": "997ec8fe8084159c931726f9616f0e50",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/0b0ba5b530e471cb85b0441016513cb32baada": "210ad299276703936185db27e25e7794",
".git/objects/80/fc8b223cb9345d894ce7090d11f3969a95a55b": "dcc376d66c90cd8d1ccfdaea45f2fdd9",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/f47d77771abf31b0b0433ce691a52e5f08a80b": "daf362ae5906c35be3ca5ea84072b097",
".git/objects/6e/cc9371c5f862da6fb27d7bf2b67f32df3afd47": "48ba3d545e5e47871acfc243607219e5",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5d/90d58ac3e64fc792176d53faa6731d5a1b97cc": "134df075279915c19411384b471cdc8a",
".git/objects/31/88c38c87e017c2b1ffd52849516dbd10bc7f4d": "204ee842760eef8a2a237539c4bda3eb",
".git/objects/65/ce35d8b3936104a9bf58471dea68adfd868d0f": "98ace8d5573e7362944554e353b87a31",
".git/objects/54/2d21ebb9ff773c5342902269f8e1d3e0e951f2": "2c7e612023b0f6df0b0dc7f88b8abd2b",
".git/objects/6d/120529ad9d8a2464c375d86343a9158d9cc522": "2fde256dddeeae925374f08e3eb38cb7",
".git/objects/63/c6d285fe5834f46f57bbad39e4ea0423cdcb95": "bf84911a4aafa35c9a95cfce334d1ab9",
".git/objects/0a/432e93e064295d12d89c214c46382612346cef": "6f00efe51fcc92727f6cc65bc7299669",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/e2bce5158637d3968c6fd1c1929d2d21b68e87": "9241150d716ae7234f3a74a7218ae3a6",
".git/objects/b6/c97602242c5b0ba7bf99f0fe6de2014c75dfd4": "2312dc95e589a00b0a3c01580c0bd1aa",
".git/objects/b6/73fab6c00200b4ac77387075554f1db41e37aa": "42929db2d46b64660ac4947a83c4a10f",
".git/objects/d2/114f051a48b22b4b3565c89e81045ab3abe823": "d1dff7738a5b77828c63596deb8e6602",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b8e9bce96745debc097ae68f34df7eaf6f8269": "7c09f2df14a15bd8e4696000b7d55ebb",
".git/objects/b0/8987b634c7de6f18b2fabab3d5770143cd3a27": "8259bfd525fd75e7467adc8c00078769",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/9ac7f8e2abced8f6b62ef9eae0450c84a5802e": "5a5e39d653bfbe49abe9a89121dcdaa0",
".git/objects/a1/920c6c011d305f0ab428a49e78be946ff7eb6b": "36d742b699bebf19f847a35689192f67",
".git/objects/ea/f984e52832e3358a8a2ccdcf71acc8e346d816": "3a124f23992e04013cb302ec71da7fd9",
".git/objects/cc/3c42f5fc07d7c33a670fb63f54050eb1d76cca": "f23742d87410cbb6c2469370cbf3e981",
".git/objects/e6/f82259bec04b0201e0cc8850bed16f7a0f9618": "d25d3ecd5107b77872fe418239a05d61",
".git/objects/e8/f9e755ad498564e6a212a4c05e66c999c4dfcb": "41bfab626b545da807e64bd056dba9cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/532dfadde43da1992b1c09bba883a905f99717": "28bb16f6b06531911f0fd487922a3589",
".git/objects/1e/261802ac4be0de480c1e3045a5d071aa7a8508": "bb4bedd4125c581a15dfb836a8308138",
".git/objects/84/b3040a013ecfba32673b90375722e202f31e2f": "ed6d0cf4268bc20e1a869bc477437a0f",
".git/objects/12/a88dcd04f949f5f4eeadeab39bea0ec13cc555": "8a92f6246bb5b13d878c88da8b6a7107",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/8b/2153344be68334552ba13084924f4c93ab7434": "8568728c26abcd2c6bce79875c790b7f",
".git/objects/7a/7ca9b8edff83c4d4f041d0efc44034d0cc4fb5": "511cdda0884caaa3fd8eb6b55d608ccb",
".git/objects/8e/0e082d1e850a1b668a094a397c0a96260a7361": "2821d3bf45e7df03fe015881bae3a38c",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "de4c39e1eadd4fdd4db79c16bfb23861",
".git/logs/refs/heads/develop": "7dd461dd3bd3a98b8e5fe257bc3bf71f",
".git/logs/refs/heads/main": "228bf608427bb5730667a24165d06dd8",
".git/logs/refs/remotes/origin/develop": "71bd3f0d9a9b34f25b6be161a946708c",
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
".git/refs/heads/develop": "673bb6b8ddb312cfdf842a61d4dd29a9",
".git/refs/heads/main": "673bb6b8ddb312cfdf842a61d4dd29a9",
".git/refs/remotes/origin/develop": "673bb6b8ddb312cfdf842a61d4dd29a9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/index": "1072f7655f1e19bb84c8034d07b91e1f",
".git/packed-refs": "949000f0db31c1eee6d89df4b6439f31",
".git/COMMIT_EDITMSG": "523f7f8a2368d300345949dfb006cae4",
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
