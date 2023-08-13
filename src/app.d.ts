// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	type Character = {
		'名前': string;
		'レアリティ': number;
		'タイプ': string;
		'上級エリート': boolean;
		'初期': boolean;
		'近距離': boolean;
		'遠距離': boolean;
		'火力': boolean;
		'生存': boolean;
		'防御': boolean;
		'治療': boolean;
		'支援': boolean;
		'範囲攻撃': boolean;
		'減速': boolean;
		'牽制': boolean;
		'弱化': boolean;
		'COST回復': boolean;
		'強制移動': boolean;
		'爆発力': boolean;
		'召喚': boolean;
		'高速再配置': boolean;
		'ロボット': boolean;
		'追加日': Date;
	};

	type CharacterRaw = {
		'名前': string;
		'レアリティ': string;
		'タイプ': string;
		'上級エリート': string;
		'初期': string;
		'近距離': string;
		'遠距離': string;
		'火力': string;
		'生存': string;
		'防御': string;
		'治療': string;
		'支援': string;
		'範囲攻撃': string;
		'減速': string;
		'牽制': string;
		'弱化': string;
		'COST回復': string;
		'強制移動': string;
		'爆発力': string;
		'召喚': string;
		'高速再配置': string;
		'ロボット': string;
		'追加日': string;
	};
}

export {};
