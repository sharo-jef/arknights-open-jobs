import { c as create_ssr_component, b as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h6 class="border-bottom pb-2 mb-0" data-svelte-h="svelte-uf4mcg">公開求人ツール</h6> <div class="d-flex text-muted pt-3"><div class="pb-3 mb-0 small lh-sm w-100">${escape(JSON.stringify(data.data))}</div></div>`;
});
export {
  Page as default
};
