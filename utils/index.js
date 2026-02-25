export function createPageUrl(pageName) {
  const map = {
    Home: "/",
    About: "/about",
    Skills: "/skills",
    Projects: "/projects",
    Contact: "/contact",
  };

  return map[pageName] || "/";
}
