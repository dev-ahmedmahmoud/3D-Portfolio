import localFont from "next/font/local";

const menu = "/icons/menu.svg";
const close = "/icons/close.svg";

const threejs = "/imgs/tech/threejs.svg";
const logo = "/imgs/logo.webp";

const unity = "/imgs/tech/unity.webp";
const openxr = "/imgs/tech/openxr.webp";
const androidxr = "/imgs/tech/androidxr.webp";
const webxr = "/imgs/tech/webxr.webp";
const realitykit = "/imgs/tech/realitykit.webp";
const arvr = "/imgs/arvr.webp";
const creator = "/imgs/creator.webp";
const mobile = "/imgs/mobile.webp";
const web = "/imgs/web.webp";
const github = "/imgs/github.webp";
const css = "/imgs/tech/css.webp";
const git = "/imgs/tech/git.webp";
const html = "/imgs/tech/html.webp";
const javascript = "/imgs/tech/javascript.webp";
const reactjs = "/imgs/tech/reactjs.webp";
const redux = "/imgs/tech/redux.webp";
const tailwind = "/imgs/tech/tailwind.webp";
const typescript = "/imgs/tech/typescript.webp";
const syncology = "/imgs/company/syncology.webp";
const unitedprint = "/imgs/company/unitedprint.webp";
const upwork = "/imgs/company/upwork.webp";
const xr = "/imgs/company/xr.webp";
const carrent = "/imgs/carrent.webp";
const jobit = "/imgs/jobit.webp";
const projectPortfolio = "/imgs/projectPortfolio.webp";
const person = "/imgs/person.webp";
const germany = "/imgs/germany.webp";
const us = "/imgs/us.webp";

const geistSansLoader = localFont({
  src: "fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistSans = geistSansLoader.variable;
const geistMonoLoader = localFont({
  src: "fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistMono = geistMonoLoader.variable;

export {
  logo,
  arvr,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  unity,
  androidxr,
  git,
  html,
  javascript,
  webxr,
  realitykit,
  openxr,
  reactjs,
  redux,
  tailwind,
  typescript,
  threejs,
  syncology,
  upwork,
  unitedprint,
  xr,
  carrent,
  jobit,
  projectPortfolio,
  geistSans,
  geistMono,
  person,
  germany,
  us,
};
