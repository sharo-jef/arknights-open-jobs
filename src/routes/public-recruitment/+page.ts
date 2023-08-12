import type { PageLoad } from './$types';

import { browser } from '$app/environment';
import { base } from '$app/paths';
import { parse } from 'csv-parse/browser/esm/sync';

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
  '追加日': string;
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

export const load = (async ({ fetch }) => browser
  ? ({
    data: parse(await (await fetch(`${base}/public-recruitment.csv`)).text(), { columns: true })
      .map((character: CharacterRaw): Character => ({
        '名前': character['名前'],
        'レアリティ': +character['レアリティ'],
        'タイプ': `${character['タイプ']}タイプ`,
        '上級エリート': character['上級エリート'] === 'o',
        '初期': character['初期'] === 'o',
        '近距離': character['近距離'] === 'o',
        '遠距離': character['遠距離'] === 'o',
        '火力': character['火力'] === 'o',
        '生存': character['生存'] === 'o',
        '防御': character['防御'] === 'o',
        '治療': character['治療'] === 'o',
        '支援': character['支援'] === 'o',
        '範囲攻撃': character['範囲攻撃'] === 'o',
        '減速': character['減速'] === 'o',
        '牽制': character['牽制'] === 'o',
        '弱化': character['弱化'] === 'o',
        'COST回復': character['COST回復'] === 'o',
        '強制移動': character['強制移動'] === 'o',
        '爆発力': character['爆発力'] === 'o',
        '召喚': character['召喚'] === 'o',
        '高速再配置': character['高速再配置'] === 'o',
        'ロボット': character['ロボット'] === 'o',
        '追加日': character['追加日'],
      })),
  })
  : ({ data: [] })) satisfies PageLoad;
