'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dbb8028132fbb59825e9a4245597b583",
"version.json": "fc27cfab7e4529f5251437866c706cbd",
"index.html": "8f9380fdc2639e283a45e721c71c40d0",
"/": "8f9380fdc2639e283a45e721c71c40d0",
"main.dart.js": "5b0a7a52d9d1e7d4edafd099817349c7",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "0484d8f7daa040404a9bda0266d917d3",
"icons/Icon-192.png": "e1023cf531efaf009447978678f43ba0",
"icons/Icon-maskable-192.png": "e1023cf531efaf009447978678f43ba0",
"icons/Icon-maskable-512.png": "3f664292764b920acf71136a88b38e2f",
"icons/Icon-512.png": "3f664292764b920acf71136a88b38e2f",
"manifest.json": "2bee2f00bd4c7a75ffa4b69bc3d70b62",
"assets/AssetManifest.json": "c1bc9a96af597cbb27aa820b3dd7a905",
"assets/NOTICES": "ab16fa9b71e2dded588a9a905e5c8bbd",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "fbaf7a721b5a14b2b5b89239ec2d6acd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b347f89b83cb4ef44db18c594dfdba4d",
"assets/packages/enough_giphy_flutter/assets/attribution.gif": "d6fbf239f7c01fef9be3d0e06bc82375",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/any_link_preview/lib/assets/giphy.gif": "b0db8189c4cfba8340d61b1e72b1acdc",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "e9b89d9a2f5964227df5bc2a1c0022e5",
"assets/fonts/MaterialIcons-Regular.otf": "479b17e7a7a9d2a7190b9d8c571de733",
"assets/assets/images/share2.png": "c7ccba6d66a86a488abbc0190ec848b4",
"assets/assets/images/Chat1.png": "29f720eef89ece1bbc78e8d9afe62ee9",
"assets/assets/images/Video_Call.png": "1220eff09760e735352c008b79d7270d",
"assets/assets/images/gear.png": "df3382b5c4b37521c5be749eb993ae44",
"assets/assets/images/no_block_contact.png": "4406a9ec3816d04689149f5e021608a6",
"assets/assets/images/true.png": "c9384fb2bf2b063698f3cec33b11bf33",
"assets/assets/images/profile%2520(1).png": "8a073a60cbe87a654b075c52218ccdb7",
"assets/assets/images/Chevron%2520Right.png": "8b96473ba22618156f5630d22d70aba3",
"assets/assets/images/check.png": "edd00f488c4fee4e285257e0e4f9e2cb",
"assets/assets/images/Icon_chat_gray.png": "07d49db748a06ecfd7e3163524f8d60d",
"assets/assets/images/arrow-right-play.png": "79d677e9189b70915d583c8adc9fb767",
"assets/assets/images/new-add.png": "cd57ae8bd918f2d47fe82034c42df3da",
"assets/assets/images/call_1.png": "631e3646f08895e34910c1718b214dd2",
"assets/assets/images/puse_audio.png": "d8311c06737a4c24431c83feaf1cb395",
"assets/assets/images/share1.png": "f460327a105197ce199110f2dd048974",
"assets/assets/images/block1.png": "f85835e054b13f25655645c19db4603a",
"assets/assets/images/search-normal.png": "a3a5db640e4d8e879068c39f61ada714",
"assets/assets/images/chat2.png": "446a97b35393d260f84f1e9f18e29b32",
"assets/assets/images/profile-image.jpg": "e556a23941a27731fbf0aaa9aa751f98",
"assets/assets/images/arrow_right.png": "29a214d3c617c6cb511e59c225e47ac0",
"assets/assets/images/muted.png": "a684e44bd60165b88a6a90a5be955564",
"assets/assets/images/gif.png": "2ee5c91d5b7f1f58f470a0d757a7d2fe",
"assets/assets/images/paperclip-2.png": "47a5291947705cda2d5984a6c1b3402d",
"assets/assets/images/archive2.png": "f04c3f46326168473c16272ffbab8f81",
"assets/assets/images/Icon_camera_black.png": "dadb7c35815e84d88188391ffd141985",
"assets/assets/images/sms.png": "7fb1dc050be3ae893adbdefa4408727d",
"assets/assets/images/video_1.png": "ffcece0fa6cafe1559f277bc887e8cd8",
"assets/assets/images/Video_calling_icon.png": "c10415a1e50c40860ad42f41119373c6",
"assets/assets/images/volume.png": "ebef99261a5b1fd6fd3ce2040277c49f",
"assets/assets/images/pin.png": "fb274203acd72313c6d55f5b81d77f6a",
"assets/assets/images/camera1.png": "d7a7ea8c3326f821dde325f2a862fd92",
"assets/assets/images/gallery.png": "2d4d35e2d7231367cde28743e1874bd5",
"assets/assets/images/grey_call.png": "6b4dd412571bcda000542a2b023d0ed1",
"assets/assets/images/incoming.png": "465f7318a43fcad1fc576713bf34716e",
"assets/assets/images/location_for_google.png": "426112f32e9f976fc55951a79ad23af4",
"assets/assets/images/Mic_off_icon.png": "b9314280eb86e52329565b3256f32860",
"assets/assets/images/video_fill.png": "d33e9f25463e6f3e91ce57c6312a0e48",
"assets/assets/images/app_icon.png": "9d4804e0b68409ff7ab619852c8d7d7f",
"assets/assets/images/camera2.png": "0d8e1f5baa83d24a79e6b5991d49068d",
"assets/assets/images/back_img1%2520(2).png": "fec7754bf837ab64825e2551e261b396",
"assets/assets/images/link.png": "1ab055c04c7d2eacc9dc7cda0ac6bddf",
"assets/assets/images/call-outgoing.png": "88e8e004d65b95dbe2ec8e827fd59d2d",
"assets/assets/images/microphone-2.png": "f443a49a2d7a6af7491a8d69da28aab5",
"assets/assets/images/no_contact_found.png": "623cfe00c6b2468612e8f65bddf4a948",
"assets/assets/images/doc.png": "bf22ccf31e3d3c80b7a821fa33002846",
"assets/assets/images/location1.png": "d53a2981dcfb027e494d8d66e7222aac",
"assets/assets/images/Icon_call_black.png": "13585f2684f2a7688fe43135705689e9",
"assets/assets/images/play_audio.png": "55c9915c2b7c3a0a9a0f11a1ef4a6b2a",
"assets/assets/images/splash_screen_1.png": "f6d8277fe376d21a65fa47e1846a2e25",
"assets/assets/images/video_call_icon.png": "5c5ed70deaf314177719ce738c1cbd4d",
"assets/assets/images/stop-circle.svg": "6737c7ae30c3eddc1ae56380e72d4f9f",
"assets/assets/images/empty_stared_list.png": "61ea6cf409dcb3b7e7b78ce46ead9191",
"assets/assets/images/sms-notification.png": "185df32d924c4b267259cf9e38028af9",
"assets/assets/images/empty_block.png": "c75455411ce5847978798ee14a8895ee",
"assets/assets/images/share_icon.png": "16b88e0cfca9b40b4bd0181743e642b6",
"assets/assets/images/rotate.png": "19f68ecf18414f4b3f77543a40434572",
"assets/assets/images/call-remove.png": "3c8f597dc26290e37c39017aa5fd0362",
"assets/assets/images/location2.png": "3db10b883ee09f2de281fb405d1ac0a6",
"assets/assets/images/crosswhite.png": "308c3d93446812a06ad2bbbe1cb6290c",
"assets/assets/images/logout.png": "874a52d57c213cbd837a4ca3738db0b5",
"assets/assets/images/splash_screen_2.png": "139d031c331ae62c24302ffbca61721f",
"assets/assets/images/shot.png": "de28f6b42af981d58761e96e2813d2fd",
"assets/assets/images/chat_back_img.png": "2e845b7dfc765885c1d2d82a82cf351a",
"assets/assets/images/forward1.png": "efd331854ac5022f0d6e1f6474b6b871",
"assets/assets/images/no_contact_found_1.png": "fefe849949fa10b4a9262c7b30d78360",
"assets/assets/images/edit-2.png": "edaccd878aff951a5fb4488cc4deda8a",
"assets/assets/images/user.png": "5bc51e0038be25c828e1f38479311bf0",
"assets/assets/images/back_img.png": "9d93f19207142eec6cf7a99ec1171217",
"assets/assets/images/reply.png": "939e1420ac4ad1bc06c8e880f669d5ed",
"assets/assets/images/loca1.png": "20cc35f08b7e89fe3dfe6f3e887522e2",
"assets/assets/images/starfill.png": "474e632c766428a86c0caa91b247200e",
"assets/assets/images/back_img1.png": "ad5816fd1a154f26d6f42a71700b015f",
"assets/assets/images/loading.gif": "3f899a790ab677acd5762723b7743334",
"assets/assets/images/edit-1.png": "80cb3429d17773f677468dacc733390b",
"assets/assets/images/starUnfill.png": "2f4895924dbc4e9dca9019110a394323",
"assets/assets/images/cont1.png": "660529e53aa3a04c49e699d682ca8982",
"assets/assets/images/videoo.png": "b03fb2fc7c5c8d5522153763ff3465dd",
"assets/assets/images/Video%25203.png": "079f5d62c333c8b042fa63f53a974c21",
"assets/assets/images/end.png": "032946aeaa79c332eaa239220cf6d177",
"assets/assets/images/like.png": "a87a7f51628c18f62a355b6500361c9a",
"assets/assets/images/send1.png": "880f4b22a1715851929c2ff47734ca1d",
"assets/assets/images/back_img2.png": "67063da6788f6ee9b336ae4d81d86b15",
"assets/assets/images/gallery1.png": "a746c5ec371a145eb187d78676b16456",
"assets/assets/images/cam.png": "53e5103bddc6c126f186db95e700e250",
"assets/assets/images/contact.png": "762242d614ee4e88789952aaa2884078",
"assets/assets/images/search.png": "6a33edb47b23e31aae28ff2a4b402170",
"assets/assets/images/message_icon.png": "59a151ccc9582ea895444a794a10c71f",
"assets/assets/images/image_2.png": "4ca16653eb0a341c7a8a11d2162dccff",
"assets/assets/images/no_contact.png": "82163cb52a13d2718ee70ab93d95a3fd",
"assets/assets/images/unarchive.png": "33156ff25260f60ef380aeeb8159bd92",
"assets/assets/images/moon.png": "632501576cd06ab8a7809919e9ae1907",
"assets/assets/images/block.png": "c1ad2d7181ace4bab61597d73ffceba3",
"assets/assets/images/gif1.png": "3ac6d50273dbf273a3cb73adb876133e",
"assets/assets/images/message-text.svg": "9f305d84de93d15037f3814cab59afe8",
"assets/assets/images/image_1.png": "3fc019eb837c0e22f1da585a8835ed73",
"assets/assets/images/error404.png": "acf334d45b7dc8847a2d56a1edf56366",
"assets/assets/images/callVector.png": "6b312ae0979a86f0a5f16367bd5f058e",
"assets/assets/images/forward.png": "5d4472870ed6932ab8abafeb92dc01fb",
"assets/assets/images/logo.png": "6e8d67ee69482cae67411bedfeb3f67e",
"assets/assets/images/Call%2520Missed.png": "6f316883da8a0f8fba1fc1f9fb828c0b",
"assets/assets/images/video_gallery.png": "0ea1f52678f025e79000bd2bcab9b277",
"assets/assets/images/arrow-left.png": "6a515eee7c5db98286ee0b3208cecac2",
"assets/assets/images/doc1.png": "b3806d57c0ecb919d0dccd4bdbb84415",
"assets/assets/images/camblue.png": "6ab735d1d23795c92ca120d9ec5a2cfd",
"assets/assets/images/start_conversation_bleep.png": "3d16e5ca5b142debee67473bf6af1160",
"assets/assets/images/welcome-cropped%2520(3).svg": "fae5dc9a542484ca825c6e79bbca56d3",
"assets/assets/images/manu.png": "d2f3e19e6ba261eae392ae35137854d0",
"assets/assets/images/start_chat.gif": "3b352901fa5625bad060104d62f72820",
"assets/assets/images/comment.png": "e343ae95694f54949a1d4e6cc96b99ec",
"assets/assets/images/videocall_missed.png": "898f3d724f73b690acab9175ea89a5fe",
"assets/assets/images/album.png": "5feaacace86f84b5b349023a4562bb1b",
"assets/assets/images/video.png": "ffcece0fa6cafe1559f277bc887e8cd8",
"assets/assets/images/language-square.png": "985e3b44d0cf9dc0e586f2b2447572fd",
"assets/assets/images/trash1.png": "54a98cb9a2c66935d4d6b343cad9d082",
"assets/assets/images/docs.png": "0e78dd81ce571392b6114b95396f34e2",
"assets/assets/images/eye.png": "87e3c4a5829caaa3f042d03137ae7198",
"assets/assets/images/location.png": "1b84773d380649a4cd6d9b0e8764d83a",
"assets/assets/images/icon_camera_grey.png": "2711cef2892883191a50b967f1403cc8",
"assets/assets/images/video1.png": "e8d52ad70efa6ee2ec40024d70a16945",
"assets/assets/images/call-incoming.png": "9b38679829a86a163ee507444492a840",
"assets/assets/images/call.png": "22c8b50ab1f13348bcd871d10abd11ac",
"assets/assets/images/Add%2520Contacts.png": "53481b0b11c9291a5dca936f5da7c444",
"assets/assets/images/delete.png": "2f09c470b38cb36b5ba3aacbb414efcb",
"assets/assets/images/app_logo.png": "a2bffe1cbb73bb76cad3da55f50110fa",
"assets/assets/images/call_blue.png": "999cba452e581f9d97fa63ce18cf352a",
"assets/assets/images/faceLock.png": "60bdd3e6bd3c847aafda8e7639d3509b",
"assets/assets/images/star-slash.png": "e29c9216b139c23869fea2186a308b06",
"assets/assets/images/back_img1%2520(1).png": "fec7754bf837ab64825e2551e261b396",
"assets/assets/images/pdf.png": "540749ab4fad60f61272039069fab6a8",
"assets/assets/images/NotRecive.png": "011a27cdc17cef32ed93a1b0ad14b132",
"assets/assets/images/edit.png": "ea274324f3f257f6441c8b959a4aad62",
"assets/assets/images/group1.png": "070746a4921d820d72c0d632e9b85a22",
"assets/assets/images/contacts.png": "d421bcfe3c0deae78f32d11df8b936f1",
"assets/assets/images/trash.png": "753b98da33508a1c6f4fff983c77a3fa",
"assets/assets/images/india.png": "f76499d064909344014eeb6c3df6fab6",
"assets/assets/images/no_internet1.png": "47740fe6575db57687f3f11280aab70b",
"assets/assets/images/about.png": "65e38e18546b2562a99a17d244d06180",
"assets/assets/images/error-image.png": "d92c3b396abfd61ace753ac1ada50522",
"assets/assets/images/voice.png": "81a4aae9f3b8e908a6c314a91ea93629",
"assets/assets/images/speaker.png": "207a6577e4810c5676ac95aa2c28a608",
"assets/assets/images/group_user.png": "afc541ac45359cdfc025b064750f4dfc",
"assets/assets/images/gif-file.png": "6ef1a5223d06cb0eb99edbac3f5bbac1",
"assets/assets/images/Call_end_icon.png": "032946aeaa79c332eaa239220cf6d177",
"assets/assets/images/camera.png": "8b071c970b39d00c910b3fb066c5d8a9",
"assets/assets/images/document-text.png": "1949e3d7d2768cdee53a02f3af8c789d",
"assets/assets/images/verify.png": "96a0d4bacc03272dfb9226b5d5a94f66",
"assets/assets/images/status1.png": "58ed82a91e76968385844c7007dff97c",
"assets/assets/images/chat.png": "6f56bfedb0d0de91c622b81a214f29af",
"assets/assets/images/photos.png": "e73ad8e75850de5e13eec51bc150a87b",
"assets/assets/images/cut_call.png": "b2769cb40a458ee16841d68e8eeee524",
"assets/assets/images/send.png": "107a55dac5f9a34058006fe307bfc5b7",
"assets/assets/images/play1.png": "186f858a4306f81639ccc5f61f5d0d68",
"assets/assets/images/smartLock.png": "e19dbdaaa93bef077dfbf7f0b617fe91",
"assets/assets/images/play.png": "75ded872d72ebf20ad6baec2fc5c5f17",
"assets/assets/images/setting.png": "a1740efe3c8832bdf7d95b2d91105f66",
"assets/assets/images/splash_logo.png": "550a1bdbcaa01a693a9a617ed81331b6",
"assets/assets/images/start_conversation.png": "81404a72f4bf70106e57e03ac5bdcd4c",
"assets/assets/images/right.png": "08b348175786bfe171bde55eb7129fe3",
"assets/assets/images/no_call_history.png": "f7cda5028f85010189a5de45fa860741",
"assets/assets/images/message-text.png": "b9caf127c69c9be840579c4314d7a79c",
"assets/assets/images/status2.png": "f4513978fd04defbac830e978c4d2658",
"assets/assets/images/attribution.gif": "d6fbf239f7c01fef9be3d0e06bc82375",
"assets/assets/images/reload.png": "a7f4ce0e7ec33b6fafe47599f4369a93",
"assets/assets/images/play2.png": "bb3af72af8a5e1df7afd28999c3fb5e7",
"assets/assets/images/copy.png": "817412898495530099df4c50af7fd43a",
"assets/assets/images/welcome.png": "a9f0ac982cf43d08e7e3cb3d573223ff",
"assets/assets/images/bg.png": "091b24dce0b3391a4b7352a3bb6e560e",
"assets/assets/images/flip_camera.png": "0f416a8cb5c95a93e802bd986f337ad8",
"assets/assets/images/edit_pen.png": "864c386d64c020b87211651ad53726e6",
"assets/assets/images/mic.png": "8878d3d43698823ab1d82261bb422ee8",
"assets/assets/audio/notification.mp3": "0b3954ea2e90483ad16ec93c03b166c5",
"assets/assets/audio/ringtone.mp3": "e35421ef3ac77d6d44e1db9c72e7e48d",
"assets/assets/audio/calling.wav": "7478dbb5492ff3b58e3c9e428c85daa4",
"assets/assets/audio/calling.mp3": "4fd08d09801a16458de914493aa4ef42",
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
"assets/assets/Lottie%2520ANIMATION/CHATS.lottie": "5a0ad1462d968a834a9c780d27f350a1",
"assets/assets/Lottie%2520ANIMATION/CHATS.json": "328834b6e416406035277dda0e7fe50f",
"assets/assets/Lottie%2520ANIMATION/caller_bg_animation.json": "f2d8a21c943d06e1810c61df1f11e43e",
"assets/assets/Lottie%2520ANIMATION/call_recieve_animation.json": "2260f2a8b668042eaca06a3fcf06b84b",
"assets/assets/Lottie%2520ANIMATION/voice_record_animation.json": "f2fda2e1b70a314c5105b19fc4d9daf8",
"assets/assets/Lottie%2520ANIMATION/mic.json": "a058a9a8946e9145ff5e12f1a5436f70",
"assets/assets/Lottie%2520ANIMATION/call_cut_animation.json": "f994ba79e1a70ac4aebbf9be060bd237",
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
