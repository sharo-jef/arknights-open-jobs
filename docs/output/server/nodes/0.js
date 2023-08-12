import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.e4e3aaa4.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d545fc7a.js"];
export const stylesheets = ["_app/immutable/assets/0.9b78a908.css"];
export const fonts = [];
