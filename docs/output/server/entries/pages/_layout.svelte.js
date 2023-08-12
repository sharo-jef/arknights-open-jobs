import { c as create_ssr_component, e as each, b as escape, d as add_attribute, v as validate_component } from "../../chunks/ssr.js";
import { B as BROWSER } from "../../chunks/prod-ssr.js";
const browser = BROWSER;
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const routes = [
    { path: "/", name: "Top", id: "nav-0" },
    {
      path: "/public-recruitment",
      name: "公開求人ツール",
      id: "nav-1"
    }
  ];
  let selected = browser;
  return `<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation"><div class="container-fluid"><a class="navbar-brand" href="/" data-svelte-h="svelte-mw9zxu">Arknights Tools</a> <button class="navbar-toggler p-0 border-0" type="button" data-bs-toggle="offcanvas" aria-label="Toggle navigation" data-svelte-h="svelte-1d9q7n4"><span class="navbar-toggler-icon"></span></button> <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault"><ul class="navbar-nav me-auto mb-2 mb-lg-0">${each(routes, (route, i) => {
    return `<li class="nav-item"><a class="${"nav-link " + escape(selected === route.id ? "active" : "", true)}" aria-current="page"${add_attribute("href", route.path, 0)}${add_attribute("id", route.id, 0)}>${escape(route.name)}</a> </li>`;
  })} </ul> </div></div></nav>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{padding-top:56px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})} <main class="container"><div class="my-3 p-3 bg-body rounded shadow-sm">${slots.default ? slots.default({}) : ``}</div> </main>`;
});
export {
  Layout as default
};
