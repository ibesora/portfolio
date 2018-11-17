import CategoryData from './categoryData.js';

const CG = new CategoryData(1, "Computer graphics", "cg");
const Web = new CategoryData(2, "Web development", "webdev");
const WebApps = new CategoryData(2, "Web applications", "webapps");
const App = new CategoryData(3, "App development", "app");
const Other = new CategoryData(500, "Other", "other");

export { CG, WebApps, App, Web, Other };