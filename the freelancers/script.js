const data = [
  {
    id: 0,
    name: "10 x designers",
    category: "community",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64ec6a5c52ca9f8cc00f683d_10xdesigners%201-thumbnail-p-500.jpg",
  },
  {
    id: 1,
    name: "The Div Dive",
    category: "podcast",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64ec699ef67966391965dff4_div-dive-podcast-small.jpg",
  },
  {
    id: 2,
    name: "Relume AI",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64ec693cd3983303e56c4de5_relume-ai-thumbnail.svg",
  },
  {
    id: 3,
    name: "Proposal Outline Thread",
    category: "tweet",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64ec68c811b5ea96773e20a7_tweet-1694371417066737929%201-thumbnail-p-500.jpg",
  },
  {
    id: 4,
    name: "We Transfer",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64ec684b469d6a03a2c6a070_wetransfer-thumbnail.svg",
  },
  {
    id: 5,
    name: "10 x designers",
    category: "community",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e9c51df05b1f29c5e06f04_1password-thumbnail.svg",
  },
  {
    id: 6,
    name: "1 Password",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e9c51df05b1f29c5e06f04_1password-thumbnail.svg",
  },
  {
    id: 7,
    name: "Stellar",
    category: "community",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e32200583d65e57989137c_www.stellar-thumbnail-p-500.jpg",
  },
  {
    id: 8,
    name: "Briliant Freelancer",
    category: "Book",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e3216eacfebba9830feb7e_9780273744634.jpg",
  },
  {
    id: 9,
    name: "Brand Bird",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e32105d71082aaff6aa0b2_brandbird-thumbnail.svg",
  },
  {
    id: 10,
    name: "Panda Doc",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e320e9acfebba9830f1b1f_pandadoc-thumbnail.svg",
  },
  {
    id: 11,
    name: "Tracky",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e3200e830a9625877a9691_tracky-thumbnail.svg",
  },
  {
    id: 12,
    name: "Webflow Overflow",
    category: "podcast",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e31f7d9ab1e9abf5637dc5_webflow-overflow-podcast-small.jpg",
  },
  {
    id: 13,
    name: "Goind freelance and where you should start",
    category: "Article",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/647efb1672fa62a3b4baa268_www.bryntaylor.co.uk_writing_how-to-go-freelance-thumbnail-p-500.jpg",
  },
  {
    id: 14,
    name: "Hubspot",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e31f0b3755e53ae251e7b4_hubspot-thumbnail.svg",
  },
  {
    id: 15,
    name: "Google Drive",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64e9e923400c941a3b9026f2_google-drive-thumbnail.svg",
  },
  {
    id: 16,
    name: "Gardeners 2022 Perennial Report",
    category: "Article",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9d4f1d6d6a3ceb013ddcb_gardenernyc.notion%201-thumbnail-p-500.jpg",
  },
  {
    id: 17,
    name: "Future Loan",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9d3fdf2389076b0c36c46_future-learn-thumbnail.svg",
  },
  {
    id: 18,
    name: "Taking sick days as a freelancers",
    category: "article",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9cecc93483f0405d696fc_www.leapers-thumbnail.jpg",
  },
  {
    id: 19,
    name: "Coda",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9d0843431692037fd81cc_coda-thumbnail.svg",
  },
  {
    id: 20,
    name: "Financial security for freelancers",
    category: "article",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9cd5264a930ca3e39b252_dribbble-thumbnail-p-500.jpg",
  },
  {
    id: 21,
    name: "Google Workspace",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9d0269c479466aa5047fb_google-workspace-thumbnail.svg",
  },
  {
    id: 22,
    name: "Leapers",
    category: "community",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9caee55e0d58b02d989f0_www.leapers%201-thumbnail-p-500.jpg",
  },
  {
    id: 23,
    name: "MallerLite",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64d9ca7003a3998e7fc2bc67_mailerlite-thumbnail.svg",
  },
  {
    id: 24,
    name: "Unsplash",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b66e4d99e3c4ba82d19111_unsplash-thumbnail.svg",
  },
  {
    id: 25,
    name: "Linkedin",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b66af87445c8249ccd2b11_linkedin-thumbnail.svg",
  },
  {
    id: 26,
    name: "The Charisma Myth",
    category: "book",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b668266e64fe4278d51986_9780670922871.jpg",
  },
  {
    id: 27,
    name: "Anti Agency",
    category: "book",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b6646a62a7dbadcde9f691_9781949550627.jpg",
  },
  {
    id: 28,
    name: "Zapier",
    category: "tool",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b66247cbb311f07e1cd681_zapier-thumbnail.svg",
  },
  {
    id: 29,
    name: "Deep Work",
    category: "book",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64b64c12c9ad6b5c6ff89bfe_71yA4%2BMC46L._AC_UF1000%2C1000_QL80_.jpg",
  },
  {
    id: 30,
    name: "How to practise complicated projects",
    category: "video",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/6493ff73e6967eb6ad034d96_how-to-price-complicated-projects-thumbnail.jpg",
  },
  {
    id: 31,
    name: "How to price ongoing project",
    category: "video",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/6493fff35df34d5000cb489f_how-to-price-ongoing-work-thumbnail.jpg",
  },
  {
    id: 32,
    name: "Negotiationg for begineers",
    category: "video",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/648c2f389599271f54f26231_negotiating-for-begineers-thumbnail.jpg",
  },
  {
    id: 33,
    name: "15 rules for a killer portfolio",
    category: "tweet",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/648abbe906c63a5c7930503f_tweet-1632913462845140993-thumbnail-p-500.jpg",
  },
  {
    id: 34,
    name: "Behind the Studio",
    category: "podcast",
    thumbnail:
      "https://assets.website-files.com/63bc24277d11efd498c4b12c/64818a09a9f41af693053b10_behind-the-studio-small.jpg",
  },
];
const datatab = document.querySelector("#data");

const btns = document.querySelectorAll("#btn");
var filterData = data.filter((data) => data);
// console.log(filterData);
// filterData = data.filter((data) => {
//   return data.category === "article";
// });
// console.log(filterData);

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.value === "tools") {
      filterData = data.filter((data) => {
        return data.category === "tool";
      });
    }
  });
});

for (var i = 0; i < filterData.length; i++) {
  const d = document.createElement("div");

  d.innerHTML = `
<div class="h-[300px] flex justify-center items-center bg-[#F7F7F1] m-5 rounded-xl">

    <div class="w-full h-full flex justify-around flex-col items-center px-5">
        <div class="w-full flex justify-center items-center">
            <img class="h-40 object-contain" src = ${filterData[i].thumbnail} alt = ${filterData[i].name} />
        </div>
        <div class="w-full flex justify-between items-center">
            <p> ${filterData[i].name} <p>
            <p class="text-xs"> ${filterData[i].category} </p>
        </div>
    </div>

</div>

  `;
  datatab.appendChild(d);
}
