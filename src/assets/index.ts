import localFont from "next/font/local";

const menu = "/icons/menu.svg";
const close = "/icons/close.svg";

const threejs = "/imgs/tech/threejs.svg";
const logo = "/imgs/logo.svg";

const unity = "/imgs/tech/unity.png";
const openxr = "/imgs/tech/openxr.png";
const androidxr = "/imgs/tech/androidxr.png";
const webxr = "/imgs/tech/webxr.png";
const realitykit = "/imgs/tech/realitykit.png";
const arvr = "/imgs/arvr.png";
const creator = "/imgs/creator.png";
const mobile = "/imgs/mobile.png";
const web = "/imgs/web.png";
const github = "/imgs/github.png";
const css = "/imgs/tech/css.png";
const git = "/imgs/tech/git.png";
const html = "/imgs/tech/html.png";
const javascript = "/imgs/tech/javascript.png";
const reactjs = "/imgs/tech/reactjs.png";
const redux = "/imgs/tech/redux.png";
const tailwind = "/imgs/tech/tailwind.png";
const typescript = "/imgs/tech/typescript.png";
const syncology = "/imgs/company/syncology.png";
const unitedprint = "/imgs/company/unitedprint.png";
const upwork = "/imgs/company/upwork.png";
const xr = "/imgs/company/xr.png";
const carrent = "/imgs/carrent.png";
const jobit = "/imgs/jobit.png";
const projectPortfolio = "/imgs/projectPortfolio.png";
const person = "/imgs/person.png";
const germany = "/imgs/germany.png";
const us = "/imgs/us.png";

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
