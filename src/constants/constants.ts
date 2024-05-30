export const IS_MOBILE = window.innerWidth < parseInt("960px");

export const PROJECTS = [
  {
    itemImageSrc:
      "/assets/sites/ayakashi.png",
    thumbnailImageSrc:
      "/assets/sites/ayakashi.png",
    title: "Ayakashi Project",
    type: "Website",
    stack: "Typescript, React, Material-UI",
    link: "https://www.ayakashi-project.lauramathieu.com/",
    mobile: false,
  },
  {
    itemImageSrc:
      "/assets/sites/jdrg.png",
    thumbnailImageSrc:
      "/assets/sites/jdrg.png",
    title: "Mundi Bellum",
    type: "Web application",
    stack: "Typescript, React, Material-UI, Node.js, NestJs, MongoDB",
    link: "https://www.mundi-bellum.lauramathieu.com/",
    mobile: false,
  },
  {
    itemImageSrc:
      "/assets/sites/randoms-phone.png",
    thumbnailImageSrc:
      "/assets/sites/randoms.png",
    title: "Useless Randoms",
    type: "Mobile Application",
    stack: "Typescript, Ionic, Capacitor",
    link: "https://useless-randoms.lauramathieu.com/",
    mobile: true,
    app: "/assets/apps/useless-randoms.apk"
  },
];
