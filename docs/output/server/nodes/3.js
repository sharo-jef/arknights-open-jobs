import * as universal from '../entries/pages/public-recruitment/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/public-recruitment/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/public-recruitment/+page.ts";
export const imports = ["_app/immutable/nodes/3.dff3b558.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d545fc7a.js"];
export const stylesheets = [];
export const fonts = [];
