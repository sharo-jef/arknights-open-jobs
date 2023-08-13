import type { PageLoad } from './$types';

import { browser } from '$app/environment';
import { base } from '$app/paths';
import { parse } from 'csv-parse/browser/esm/sync';

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
        '追加日': new Date(`${character['追加日'].replace(/\//g, '-')}T00:00:00+0900`),
      })),
  })
  : ({ data: [] })) satisfies PageLoad;
