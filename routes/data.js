// Could not fetch metadata for nodemailer@6.7.2 FetchError: request to https://registry.npmjs.org/nodemailer failed, reason: unable to get local issuer certificate

const data = [
  {
    id: 1,
    title:
      "The PS5 and Xbox Series X will be available for Walmart Plus members",
    image:
      "https://cdn.vox-cdn.com/thumbor/nZYgbShp5-9DaW3IRJzIU-eVwI0=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70236772/vpavic_4278_20201030_0247.10.jpg",
    author: "Alice Newcome-Beill",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/6/22821037/ps5-playstation-5-restock-available-walmart-plus-queue-deal-sale",
  },
  {
    id: 2,
    title:
      "Microsoft tempts software pirates with 50 percent discount on Office",
    image:
      "https://cdn.vox-cdn.com/thumbor/SMRIKWBUIR4ZjWHCflQBMLok6G8=/0x0:2040x1360/920x613/filters:focal(857x517:1183x843):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70248713/DSCF1179.0.0.jpg",
    author: "TOM WARREN",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/9/22825774/microsoft-office-pirated-software-discount-offer",
  },
  {
    id: 3,
    title: " MacOS 12.1 will fix the MacBook Pro’s menu bar issues",
    image:
      "https://media0.giphy.com/media/3ohhwfsweRaKsZo17W/giphy.webp?cid=ecf05e476ca9pjktju4f0zgl83bfarqizi5vks64ikpvn2om&rid=giphy.webp&ct=g",
    author: "Chaim Gartenberg",
    date: "3rd May 2021",
    path: "https://www.theverge.com/2021/12/8/22824702/apple-macos-12-1-update-macbook-pro-notch-m1-menu-bar-issue-fix",
  },
  {
    id: 4,
    title:
      "Twitter is testing a new way to let you add content warnings to posts",
    image:
      "https://cdn.vox-cdn.com/thumbor/_MmIawcEFIAS2l69gsm3ZOnZO4Y=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70245150/acastro_180827_1777_0004.0.jpg",
    author: "Emma Roth",
    date: "13th Febuary 2021",
    path: "https://www.theverge.com/2021/12/8/22823870/twitter-content-warning-test",
  },
  {
    id: 5,
    title: "Instagram head says it’s bringing back the chronological feed",
    image:
      "https://cdn.vox-cdn.com/thumbor/De2KwLGWbQUYp4JuarCigb7owDA=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70246745/acastro_190919_1777_instagram_0002.0.0.png",
    author: "Kim Lyons",
    date: "8th December 2021",
    path: "https://www.theverge.com/2021/12/8/22824609/instagram-chronological-feed-adam-mosseri",
  },
  {
    id: 6,
    title: "Amazon fined $1.3 billion for abusing market position in Italy",
    image:
      "https://cdn.vox-cdn.com/thumbor/h-42QN9CUF0-0EpagaLEQHvAmvU=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70248608/acastro_181114_1777_amazon_hq2_0003.0.jpg",
    author: "James Vincent",
    date: "9th December 2021",
    path: "https://www.theverge.com/2021/12/9/22825759/amazon-antitrust-fine-italy-1-3-billion",
  },
  {
    id: 7,
    title: "Oppo teases its first foldable, the Find N",
    image:
      "https://cdn.vox-cdn.com/thumbor/7YD1ZWO5bFDI2SCuaIPO1AenKsQ=/0x76:1446x889/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70248508/ezgif.com_gif_maker__7_.0.gif",
    author: "Jon Porter",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/9/22825716/oppo-find-n-foldable-inno-day-2021",
  },
  {
    id: 8,
    title: "Amazon’s Smart Thermostat is very affordable today",
    image:
      "https://cdn.vox-cdn.com/thumbor/yFwDjtCpPmvYyvPkWwgKkfCsa8w=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70244108/jtuohy_211115_4885_0006.0.jpg",
    author: "Sheena Vasani",
    date: "2nd August 2021",
    path: "https://www.theverge.com/good-deals/2021/12/8/22822289/amazon-thermostat-sonos-samsung-980-pro-razer-kishi-airpods-govee-deal-sale",
  },
  {
    id: 9,
    title: "Apple and Hyatt begin rolling out hotel keys in Apple Wallet",
    image:
      "https://cdn.vox-cdn.com/thumbor/T-XKYD5vEdA4Sh72bHdTiQN4zJw=/0x266:5100x3135/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70245866/apple_hyatt_hotel_keys.0.jpeg",
    author: "Emma Roth",
    date: "17th June 2021",
    path: "https://www.theverge.com/2021/12/8/22824367/apple-wallet-hyatt-hotel-key",
  },
  {
    id: 10,
    title: "WhatsApp launches cryptocurrency payments pilot in the US",
    image:
      "https://cdn.vox-cdn.com/thumbor/NJRYhNh3dAuhZM7KbPpBx8yqtYg=/0x88:1683x1035/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70248672/FGHzidMVcAEqPAY.0.jpg",
    author: "Jon Porter",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/9/22825766/whatsapp-novi-digital-payments-us-pilot-paxos-stablecoin",
  },
  {
    id: 11,
    title:
      "Microsoft is bringing back the weather widget on the Windows 11 taskbar",
    image: "null",
    author: "Tom Warren",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/9/22825760/microsoft-windows-11-weather-widget-taskbar-voice-access-features",
  },
  {
    id: 12,
    title: "Amazon is retiring Alexa — no, not that one",
    image:
      "https://cdn.vox-cdn.com/thumbor/cJVa0Hby7t9xyo016ISnCPHx2VA=/0x106:2040x1254/280x158/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70248592/acastro_180608_1777_net_neutrality_0001.0.jpg",
    author: "James Vincent",
    date: "23rd July 2021",
    path: "https://www.theverge.com/2021/12/9/22825744/amazon-retiring-alexa-web-ranking-sevice",
  },
];

module.exports = data;
