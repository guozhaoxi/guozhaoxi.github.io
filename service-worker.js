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
    "revision": "4c5515445cf8900f63b73783ace2b4c8"
  },
  {
    "url": "about.html",
    "revision": "034877468b3de0c94f67a5d18af2dd6d"
  },
  {
    "url": "assets/css/0.styles.6a70634b.css",
    "revision": "e00ae3aa22c79bd13844cd05886e1383"
  },
  {
    "url": "assets/img/1116.2c7a8660.jpeg",
    "revision": "2c7a8660111d424f8648c47757174f65"
  },
  {
    "url": "assets/img/1570466251996_04-logical-concerns.54433a50.jpg",
    "revision": "54433a50cebed7530cdd9de9f57198c6"
  },
  {
    "url": "assets/img/gujiaping.c53e9b22.png",
    "revision": "c53e9b22b91e6982996c544ce6f21e5b"
  },
  {
    "url": "assets/img/image-20210903190021029.d7046896.png",
    "revision": "d7046896e9f45750964fc7f161db9bdf"
  },
  {
    "url": "assets/img/image-20210903193913261.2a109850.png",
    "revision": "2a1098502fac882179fe73e204dd4774"
  },
  {
    "url": "assets/img/image-20210904185336318.5d396afe.png",
    "revision": "5d396afe5512cc7fc14de23dd3abaf97"
  },
  {
    "url": "assets/img/image-20210904195026475.c8fbd5fb.png",
    "revision": "c8fbd5fb81863ec16325b7e0f8bef2f1"
  },
  {
    "url": "assets/img/image-20210904200638072.17bdae3d.png",
    "revision": "17bdae3dbbd3dbd9ff85fc19c842513a"
  },
  {
    "url": "assets/img/image-20210904200738067.382034b4.png",
    "revision": "382034b4c6e8b53ef05b6665d71b167e"
  },
  {
    "url": "assets/img/image-20210904201057594.65d51534.png",
    "revision": "65d5153437bf8bfe9695f200b8210ae5"
  },
  {
    "url": "assets/img/image-20210906202128323.54786b8b.png",
    "revision": "54786b8b60a0cc5423d877ba966ee18c"
  },
  {
    "url": "assets/img/image-20210907203504116.1a32ebb0.png",
    "revision": "1a32ebb01f1c1cee72dd4f54e9515e24"
  },
  {
    "url": "assets/img/image-20210908103648564.5f4b9cf7.png",
    "revision": "5f4b9cf72ec73bc3b1399c193006b617"
  },
  {
    "url": "assets/img/image-20210908104702818.665b685c.png",
    "revision": "665b685c93b7131c6861ea67d027b395"
  },
  {
    "url": "assets/img/image-20210908111515578.575e0e94.png",
    "revision": "575e0e941d7e08cb8f8e6a71724a2736"
  },
  {
    "url": "assets/img/image-20210908111550714.bd661255.png",
    "revision": "bd661255f041fdd8bcc91b90ee05bf48"
  },
  {
    "url": "assets/img/image-20210908111636178.97728b7d.png",
    "revision": "97728b7d748556bbc42044b63019532d"
  },
  {
    "url": "assets/img/image-20210908111752361.3cc04ddd.png",
    "revision": "3cc04dddcae291fb35c7da995c522d61"
  },
  {
    "url": "assets/img/image-20210908111836008.0d865856.png",
    "revision": "0d86585667ec90f528316e52a02f5f32"
  },
  {
    "url": "assets/img/image-20210910172808352.9142ca4a.png",
    "revision": "9142ca4a97aba45b265b7daa9642d618"
  },
  {
    "url": "assets/img/image-20210910172827207.46dbf9ab.png",
    "revision": "46dbf9abdb04202d0e34e0513dd44823"
  },
  {
    "url": "assets/img/image-20210911095711012.585f313a.png",
    "revision": "585f313ab8bd09a1c5b26c38f360bf66"
  },
  {
    "url": "assets/img/image-20210911111525589.bdb7aeae.png",
    "revision": "bdb7aeae527a2fdf1d495e0bcba4d4ce"
  },
  {
    "url": "assets/img/image-20210911111716595.5545e027.png",
    "revision": "5545e0278d536b3eb7690b8aa21da66f"
  },
  {
    "url": "assets/img/image-20210911112904783.c3c3a6a6.png",
    "revision": "c3c3a6a615a0804a7c2918c60e8b7e85"
  },
  {
    "url": "assets/img/image-20210911144540729.ccc634b9.png",
    "revision": "ccc634b9853f69bd72e1fab1d91dcf5c"
  },
  {
    "url": "assets/img/image-20210911144726082.36bd9bed.png",
    "revision": "36bd9bede9d9d7f168608bf42fe159bf"
  },
  {
    "url": "assets/img/image-20210911144958117.7deeb7be.png",
    "revision": "7deeb7be7061dcd0c576383579c3b810"
  },
  {
    "url": "assets/img/one.03379231.png",
    "revision": "0337923198928c33fed64b68828cc919"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/setState.7dd6c76b.png",
    "revision": "7dd6c76b7da2986701b1a9db3d5bdf09"
  },
  {
    "url": "assets/img/three.dd6afd8a.png",
    "revision": "dd6afd8a939ecb0a60fc04b95c77418e"
  },
  {
    "url": "assets/img/two.4222ac90.png",
    "revision": "4222ac90eb5e083c6a0df1969e480b07"
  },
  {
    "url": "assets/img/xuexi.2647f4dc.jpg",
    "revision": "2647f4dc306c93c6a1148bd67dcf725f"
  },
  {
    "url": "assets/js/10.960a6655.js",
    "revision": "d2e5712da0b025a711be5b94364bcb80"
  },
  {
    "url": "assets/js/11.3bde5e34.js",
    "revision": "e332883c7470a203983125aa75ca3945"
  },
  {
    "url": "assets/js/12.de934909.js",
    "revision": "372506fd5fd3596cc2178311a4113e14"
  },
  {
    "url": "assets/js/13.717e8502.js",
    "revision": "4d440a2a29bb60d646200296888a946e"
  },
  {
    "url": "assets/js/14.0b0f6fde.js",
    "revision": "d81c8666c36eb1969569e6d780a63982"
  },
  {
    "url": "assets/js/15.8723ac38.js",
    "revision": "c49908b552587bf8948bbcade7507620"
  },
  {
    "url": "assets/js/16.8db0111f.js",
    "revision": "c8f661c10efbf4a77991728e767fa92d"
  },
  {
    "url": "assets/js/17.70d1e644.js",
    "revision": "eda241984281d32c81f029674020dcb4"
  },
  {
    "url": "assets/js/18.e6853a29.js",
    "revision": "c7a0614b63f719a10cdc55b7ab54f9b9"
  },
  {
    "url": "assets/js/19.2fd51b30.js",
    "revision": "551611a663eedc45f7d00aabd52b5341"
  },
  {
    "url": "assets/js/2.6a99c285.js",
    "revision": "dd52409d8ba93fc5d0e61bc7fb2d7ff0"
  },
  {
    "url": "assets/js/20.c72340f4.js",
    "revision": "438b4e4ca2d4fd6ea1dfbbc82373811b"
  },
  {
    "url": "assets/js/21.9d0b3d30.js",
    "revision": "a79ba4c036db603b5ccfb1c36a07880c"
  },
  {
    "url": "assets/js/22.ce12d2f1.js",
    "revision": "ac2cf7cf42d6c0bcfb69ea815a0d7733"
  },
  {
    "url": "assets/js/23.cfdf6604.js",
    "revision": "98bba836ce92971f22e87209bd96b3c6"
  },
  {
    "url": "assets/js/24.6b70f8b5.js",
    "revision": "0ac93314509917355318bbb84045927a"
  },
  {
    "url": "assets/js/25.64dd0228.js",
    "revision": "83927f006ec725e8c8715d2a1354f731"
  },
  {
    "url": "assets/js/26.bd137f35.js",
    "revision": "56f6da162fb7a77fca5fe38f3b07eaec"
  },
  {
    "url": "assets/js/27.e091a131.js",
    "revision": "d6f7248bd4221f6424b559af75adacdd"
  },
  {
    "url": "assets/js/28.e0f88969.js",
    "revision": "8b922f76acb426dd090cefdd7f91ed62"
  },
  {
    "url": "assets/js/29.e3fdaaa2.js",
    "revision": "d1df1dc70413b0791757a9d0d3a87963"
  },
  {
    "url": "assets/js/3.7031cefa.js",
    "revision": "5ab5e79d63d9b55a4991714bad1fed2c"
  },
  {
    "url": "assets/js/30.115d56d0.js",
    "revision": "7898adee3965dacc2d81b644006c5213"
  },
  {
    "url": "assets/js/31.0c91284c.js",
    "revision": "2ec41c59b24aa9c0ec3a42bab7b8dd9b"
  },
  {
    "url": "assets/js/32.f436709f.js",
    "revision": "73f5364717870488df0baaf57a7afa99"
  },
  {
    "url": "assets/js/33.aec02913.js",
    "revision": "08c13fea24e1ba135ded349599077cd3"
  },
  {
    "url": "assets/js/34.5f0c80a1.js",
    "revision": "bd522a08e50702d190aee2c3efd4970c"
  },
  {
    "url": "assets/js/35.6c57a5b9.js",
    "revision": "b54fc1aca2b7811c113477093b3a6bd0"
  },
  {
    "url": "assets/js/36.874bc2bc.js",
    "revision": "c79800a1d664da8d4f82305050c913c9"
  },
  {
    "url": "assets/js/37.9d3e55d1.js",
    "revision": "670a3858d0f5b44be6ee367d9dbb2865"
  },
  {
    "url": "assets/js/38.664eac9a.js",
    "revision": "7dfd7d4d7e0241d04db82450b30f68a3"
  },
  {
    "url": "assets/js/39.38e15cf0.js",
    "revision": "5b5c82f026e10a1081f36ef5ea606cf7"
  },
  {
    "url": "assets/js/4.cf227334.js",
    "revision": "b9b85f5fb02b17bdd86f82bdc7913785"
  },
  {
    "url": "assets/js/40.1eb39796.js",
    "revision": "a7c74390851a70ab6dbbc45e278a009f"
  },
  {
    "url": "assets/js/41.21813454.js",
    "revision": "cc07d236b6914b1313626755dec6b054"
  },
  {
    "url": "assets/js/42.c366e57e.js",
    "revision": "cb75fb7de80b3dca43625808b873c7da"
  },
  {
    "url": "assets/js/43.2ed90fb6.js",
    "revision": "cc7cfade52c4c637f8cd21b475933412"
  },
  {
    "url": "assets/js/44.8b7ed554.js",
    "revision": "236f539cf03fdd7ee6a3cfbcf915c0d1"
  },
  {
    "url": "assets/js/45.e65eba18.js",
    "revision": "f0a34777ba6c83c7ae8a28885afd9a34"
  },
  {
    "url": "assets/js/46.e219420f.js",
    "revision": "9c922a828f25fd3e768e486598b91a5d"
  },
  {
    "url": "assets/js/47.47adaa89.js",
    "revision": "e369d72846a076c02eccf9c4c428c3b2"
  },
  {
    "url": "assets/js/48.1e2c3ed7.js",
    "revision": "f3ed716ebb2dfced7129b969b7a8dacb"
  },
  {
    "url": "assets/js/49.430a2613.js",
    "revision": "aadb3ced2cf64925ec4888c73ef066b0"
  },
  {
    "url": "assets/js/5.1f81c3e9.js",
    "revision": "f0924906c3b94092cda7c7b986f47053"
  },
  {
    "url": "assets/js/50.4cb51013.js",
    "revision": "886634d0c30c8fc41d93f8e5109656fd"
  },
  {
    "url": "assets/js/51.48e00036.js",
    "revision": "06946525a9e5efb9d9cb0c5d604d8700"
  },
  {
    "url": "assets/js/52.2e53b9ba.js",
    "revision": "7d49dc009f134d99d8237161b02473bd"
  },
  {
    "url": "assets/js/53.566a6fbd.js",
    "revision": "ac415be291c34cdbad1c6da70e326794"
  },
  {
    "url": "assets/js/54.740bb41a.js",
    "revision": "8c04bd41c29c89fd2fec35a298b852a1"
  },
  {
    "url": "assets/js/55.276e7e98.js",
    "revision": "b39a7455a1ddd56e94c741650d1eb525"
  },
  {
    "url": "assets/js/56.42aa3b98.js",
    "revision": "46c8a5cf26645367786a1a4e1dd07b05"
  },
  {
    "url": "assets/js/57.5c66fa93.js",
    "revision": "5abf42f89ee0c99255649d9a46ebbca4"
  },
  {
    "url": "assets/js/58.73423f17.js",
    "revision": "2b2d13fab415339045693fc0fc147013"
  },
  {
    "url": "assets/js/59.e9354a5e.js",
    "revision": "edd9efb3cb10e43eb86fd1ad2d8e4c66"
  },
  {
    "url": "assets/js/6.e00d9635.js",
    "revision": "40e3a35ba0def892ca936a552b57ded8"
  },
  {
    "url": "assets/js/60.d37d1a47.js",
    "revision": "0e7c30d9c903e78239a2d60969b3db2b"
  },
  {
    "url": "assets/js/61.5608bf0d.js",
    "revision": "3425753906630a5143e3b985df81e916"
  },
  {
    "url": "assets/js/62.e318dfd6.js",
    "revision": "d7643aadb71a25b14e6d8c6250237936"
  },
  {
    "url": "assets/js/63.74fca516.js",
    "revision": "40d0ae61cbb7de03a73541f2178b1404"
  },
  {
    "url": "assets/js/64.81eb34e4.js",
    "revision": "b1a7a42fe1a80e2dd340b5f00ac29ee1"
  },
  {
    "url": "assets/js/65.ef4b9d8a.js",
    "revision": "638620373ce886da6e46e72076b83a0b"
  },
  {
    "url": "assets/js/66.1ff64233.js",
    "revision": "a19db33bee9ab5a137fbbdc9255fd791"
  },
  {
    "url": "assets/js/67.89044667.js",
    "revision": "35e9d7fbea1f9c8ae65ed007cc439ed9"
  },
  {
    "url": "assets/js/7.f63888e1.js",
    "revision": "54dd3b5e04097b25162f37ffac6dc267"
  },
  {
    "url": "assets/js/8.396b1803.js",
    "revision": "fb189c5c7e0172f28f08d5651ac2c9d8"
  },
  {
    "url": "assets/js/9.97c83bcc.js",
    "revision": "b1f3e8aebb9a598ed3eca499c2d9eb14"
  },
  {
    "url": "assets/js/app.856bad6d.js",
    "revision": "c53a7fd2e2765de3cff5eeade7e06ad9"
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
    "revision": "ef807b900966f08d755c357a978bf811"
  },
  {
    "url": "blog/start.html",
    "revision": "6cae35fc8cf1fb1dc3a949bf4ead0a06"
  },
  {
    "url": "blog/watcher.html",
    "revision": "a946610a50240b99d6a8814518642ddb"
  },
  {
    "url": "cll/diary/diary.html",
    "revision": "2e34afec1e3badd9089bf8c2f89f8240"
  },
  {
    "url": "cll/index.html",
    "revision": "0e5aa86d176be11c312db1a3f9e9c3d9"
  },
  {
    "url": "cll/yujian/first.html",
    "revision": "65339a6edb2c1de19c5cdad0dfb26179"
  },
  {
    "url": "contact.html",
    "revision": "63305fcbcb01ae1c9a0f45f29cf4e8ee"
  },
  {
    "url": "document/index.html",
    "revision": "4024b23bf373b35885b0221fc324f27c"
  },
  {
    "url": "document/mingdu/admin.html",
    "revision": "559026a0c955670df6de2b375c8d0542"
  },
  {
    "url": "document/mingdu/driver.html",
    "revision": "54e26f62a66053e2c9ce78697c711d07"
  },
  {
    "url": "family/index.html",
    "revision": "eab3078f405c9135d64839bf82fa84ce"
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
    "url": "idea/family/first.html",
    "revision": "09c7c5f10a8ea5a38e4c916442bdd382"
  },
  {
    "url": "idea/index.html",
    "revision": "501b9b3acff93079d9d10f46fea8ecdb"
  },
  {
    "url": "idea/job/first.html",
    "revision": "4b5ba76fcc433b811306969c03b3e6fa"
  },
  {
    "url": "index.html",
    "revision": "fef029d6d712c2bf1711601601027f8e"
  },
  {
    "url": "life/index.html",
    "revision": "793652fb1c7a0ac2c2f614d9545b6334"
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
    "url": "logo.svg",
    "revision": "346e12ee28bb0e5f5600d47beb4c7a47"
  },
  {
    "url": "question/idea/error.html",
    "revision": "a443b7dec29a9e50f8d565f2dc7b2665"
  },
  {
    "url": "question/index.html",
    "revision": "afe04830bd60b5040af329369ee41953"
  },
  {
    "url": "question/library/error.html",
    "revision": "80013ebc14139a9265a6cc8c6032c511"
  },
  {
    "url": "read/fastandslow/first.html",
    "revision": "4fb7d02312c30466fa91c0b41710728d"
  },
  {
    "url": "read/index.html",
    "revision": "8d5d1ff8a2d7c95dd56ba7f641011593"
  },
  {
    "url": "study/css/first.html",
    "revision": "143dd33ee0cb05954ebb8d8e2bf789f5"
  },
  {
    "url": "study/design-mode/adapter.html",
    "revision": "caabe0a4c6a967f5374949d31f14021c"
  },
  {
    "url": "study/design-mode/watcher.html",
    "revision": "e3da4ac1892963ba5da184cca55c1ffd"
  },
  {
    "url": "study/html/first.html",
    "revision": "d44628dfefb13fca68e82122a8117e70"
  },
  {
    "url": "study/index.html",
    "revision": "e843bf79ec611fba2665d00f5f5a8320"
  },
  {
    "url": "study/js/first.html",
    "revision": "cdc90aab764b535ae37b92dbbbf9b41f"
  },
  {
    "url": "study/miniprogram/first.html",
    "revision": "7094b4438e41126234c577fd9e213c30"
  },
  {
    "url": "study/node/first.html",
    "revision": "82a189feb9447baa568f4df7a0f919cf"
  },
  {
    "url": "study/react/component.html",
    "revision": "9fdac445c9adf490244061e281fb1b66"
  },
  {
    "url": "study/react/first.html",
    "revision": "98e7d00f8ecca416e3106d92a129e948"
  },
  {
    "url": "study/react/lifeCycle.html",
    "revision": "c634f4046ea8233b23138a93fb1eb88c"
  },
  {
    "url": "study/react/props.html",
    "revision": "93efe9792b94c55654929588b4d9a8ad"
  },
  {
    "url": "study/react/state.html",
    "revision": "035206e173e8d198324a0fe843780cb6"
  },
  {
    "url": "study/typescript/first.html",
    "revision": "a3f7082b279148c54d02252d56a2abd9"
  },
  {
    "url": "study/vue/first.html",
    "revision": "f7948efa72ae487f5fe265a9995ec8ca"
  },
  {
    "url": "study/vue/layout.html",
    "revision": "416febdfed8ceab24f0814072591c47a"
  },
  {
    "url": "study/vue/login.html",
    "revision": "c1741c896ff2ec139de8cd1630c368e6"
  },
  {
    "url": "study/vue/nodes/图文课程/2-02：使用 vue-cli 创建项目.html",
    "revision": "6838ab60634155890738bc4772e7e560"
  },
  {
    "url": "study/vue/nodes/图文课程/2-03：升级最新的 vue 版本以支持 script setup 语法.html",
    "revision": "930efbda2a3014c51a3132c3ab7e3ae7"
  },
  {
    "url": "study/vue/nodes/图文课程/2-13：关于vetur检测 template的单一根元素的问题.html",
    "revision": "59098f10ec55c6272d0409a8d1f49d1a"
  },
  {
    "url": "study/vue/nodes/图文课程/element-plus.html",
    "revision": "541351ccc781bef257ca909c93f306ab"
  },
  {
    "url": "study/vue/nodes/图文课程/初始化项目结构.html",
    "revision": "0e0bced780c97edc232c4486e43d0e7e"
  },
  {
    "url": "study/vue/nodes/第一章：开篇.html",
    "revision": "5bbe698e2f2cfa7c45d376eeff2d607b"
  },
  {
    "url": "study/vue/nodes/第七章：权限架构处理之用户权限处理.html",
    "revision": "efe498df04bcdff69c13ab2e41b33d74"
  },
  {
    "url": "study/vue/nodes/第九章：动态表格渲染方案之文章排名业务实现.html",
    "revision": "3d7bff8280727a765c006bb8b11ee20f"
  },
  {
    "url": "study/vue/nodes/第五章：后台项目前端综合解决方案之通用功能开发.html",
    "revision": "a76c8d20e2045d834dd2efd2470692ab"
  },
  {
    "url": "study/vue/nodes/第八章：权限控制解决方案之分级分控权限管理.html",
    "revision": "f26f469944b81166053793288ffa38b1"
  },
  {
    "url": "study/vue/nodes/第六章：vue3+ElementPlus综合实现解决方案.html",
    "revision": "067a39b616c5c08d4ba15ba4c9d2e6bd"
  },
  {
    "url": "study/vue/nodes/第十一章：项目部署之通用方案.html",
    "revision": "2afa9d482499a980b0cf1cd0706e3aa9"
  },
  {
    "url": "study/vue/nodes/第十二章：课程总结.html",
    "revision": "925e89e97538b9a61ca55d857e1da88a"
  },
  {
    "url": "study/vue/nodes/第十章：富文本与markdown综合处理之创建文章.html",
    "revision": "d4c2adf2eb66d60744a1bf59fb44df53"
  },
  {
    "url": "study/vue/standard.html",
    "revision": "a2d855e61e9abdd304a31ff1019c69cf"
  },
  {
    "url": "study/webpack/first.html",
    "revision": "32c0af1a83d77825b24ac6893b8c1ae9"
  },
  {
    "url": "travel/index.html",
    "revision": "4c42e855d45494ec0981b2a41c69168c"
  },
  {
    "url": "travel/lijiang/first.html",
    "revision": "22fdbd7af97ae342155964f402f4f3c2"
  },
  {
    "url": "travel/zhangbei/first.html",
    "revision": "0c606f57362a726216dfcf671ade12de"
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
