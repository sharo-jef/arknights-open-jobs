

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0ce1493a.js","_app/immutable/chunks/scheduler.e108d1fd.js","_app/immutable/chunks/index.d545fc7a.js","_app/immutable/chunks/singletons.47426bdd.js"];
export const stylesheets = [];
export const fonts = [];
