const allOperators = [
  {
    "id": "char_285_medic2",
    "name": "Lancet-2",
    "rarity": "TIER_11",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_286_cast3",
    "name": "Castle-3",
    "rarity": "TIER_11",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_376_therex",
    "name": "THRM-EX",
    "rarity": "TIER_11",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_4000_jnight",
    "name": "ジャスティスナイト",
    "rarity": "TIER_11",
    "class": "狙撃",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_4077_palico",
    "name": "テラ大陸調査団",
    "rarity": "TIER_11",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_4091_ulika",
    "name": "U-Official",
    "rarity": "TIER_11",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_4093_frston",
    "name": "Friston-3",
    "rarity": "TIER_11",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_4136_phonor",
    "name": "PhonoR-0",
    "rarity": "TIER_11",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_4188_confes",
    "name": "CONFESS-47",
    "rarity": "TIER_11",
    "class": "先鋒",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_502_nblade",
    "name": "ヤトウ",
    "rarity": "TIER_21",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_500_noirc",
    "name": "ノイルホーン",
    "rarity": "TIER_21",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_503_rang",
    "name": "レンジャー",
    "rarity": "TIER_21",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_501_durin",
    "name": "ドゥリン",
    "rarity": "TIER_21",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_009_12fce",
    "name": "12F",
    "rarity": "TIER_21",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_123_fang",
    "name": "フェン",
    "rarity": "TIER_31",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_240_wyvern",
    "name": "バニラ",
    "rarity": "TIER_31",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_192_falco",
    "name": "プリュム",
    "rarity": "TIER_31",
    "class": "先鋒",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_208_melan",
    "name": "メランサ",
    "rarity": "TIER_31",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_281_popka",
    "name": "ポプカル",
    "rarity": "TIER_31",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_209_ardign",
    "name": "カーディ",
    "rarity": "TIER_31",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_122_beagle",
    "name": "ビーグル",
    "rarity": "TIER_31",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_284_spot",
    "name": "スポット",
    "rarity": "TIER_31",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_124_kroos",
    "name": "クルース",
    "rarity": "TIER_31",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_211_adnach",
    "name": "アドナキエル",
    "rarity": "TIER_31",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_121_lava",
    "name": "ラヴァ",
    "rarity": "TIER_31",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_120_hibisc",
    "name": "ハイビスカス",
    "rarity": "TIER_31",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_212_ansel",
    "name": "アンセル",
    "rarity": "TIER_31",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_210_stward",
    "name": "スチュワード",
    "rarity": "TIER_31",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_278_orchid",
    "name": "オーキッド",
    "rarity": "TIER_31",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_141_nights",
    "name": "ヘイズ",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_109_fmout",
    "name": "ギターノ",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "sami"
  },
  {
    "id": "char_253_greyy",
    "name": "グレイ",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "bolivar"
  },
  {
    "id": "char_328_cammou",
    "name": "カシャ",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_469_indigo",
    "name": "インディゴ",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "iberia"
  },
  {
    "id": "char_4004_pudd",
    "name": "プリン",
    "rarity": "TIER_41",
    "class": "術師",
    "faction": "columbia"
  },
  {
    "id": "char_235_jesica",
    "name": "ジェシカ",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_126_shotst",
    "name": "メテオ",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_190_clour",
    "name": "ヴァーミル",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "siracusa"
  },
  {
    "id": "char_133_mm",
    "name": "メイ",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_118_yuki",
    "name": "シラユキ",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "higashi"
  },
  {
    "id": "char_440_pinecn",
    "name": "パインコーン",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_302_glaze",
    "name": "アンブリエル",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_366_acdrop",
    "name": "アシッドドロップ",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_4062_totter",
    "name": "トター",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "sargon"
  },
  {
    "id": "char_4100_caper",
    "name": "ケイパー",
    "rarity": "TIER_41",
    "class": "狙撃",
    "faction": "bolivar"
  },
  {
    "id": "char_198_blackd",
    "name": "クーリエ",
    "rarity": "TIER_41",
    "class": "先鋒",
    "faction": "カランド貿易"
  },
  {
    "id": "char_149_scave",
    "name": "スカベンジャー",
    "rarity": "TIER_41",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_290_vigna",
    "name": "ヴィグナ",
    "rarity": "TIER_41",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_151_myrtle",
    "name": "テンニンカ",
    "rarity": "TIER_41",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_452_bstalk",
    "name": "ビーンストーク",
    "rarity": "TIER_41",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_130_doberm",
    "name": "ドーベルマン",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_289_gyuki",
    "name": "マトイマル",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "higashi"
  },
  {
    "id": "char_159_peacok",
    "name": "コンビクション",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "minos"
  },
  {
    "id": "char_193_frostl",
    "name": "フロストリーフ",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_127_estell",
    "name": "エステル",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "sargon"
  },
  {
    "id": "char_185_frncat",
    "name": "ムース",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_301_cutter",
    "name": "カッター",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_337_utage",
    "name": "ウタゲ",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "higashi"
  },
  {
    "id": "char_271_spikes",
    "name": "アレーン",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_4067_lolxh",
    "name": "羅小黒",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_4063_quartz",
    "name": "クォーツ",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_491_humus",
    "name": "ヒューマス",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_445_wscoot",
    "name": "ウィンドスクート",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_237_gravel",
    "name": "グラベル",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_272_strong",
    "name": "ジェイ",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_236_rope",
    "name": "ロープ",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_117_myrrh",
    "name": "ミルラ",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_187_ccheal",
    "name": "ガヴィル",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_298_susuro",
    "name": "ススーロ",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_181_flower",
    "name": "パフューマー",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_385_finlpp",
    "name": "セイリュウ",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "yan"
  },
  {
    "id": "char_4041_chnut",
    "name": "チェストナット",
    "rarity": "TIER_41",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_199_yak",
    "name": "マッターホルン",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "カランド貿易"
  },
  {
    "id": "char_150_snakek",
    "name": "クオーラ",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "columbia"
  },
  {
    "id": "char_381_bubble",
    "name": "バブル",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "sargon"
  },
  {
    "id": "char_4130_luton",
    "name": "ルトナダ",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "bolivar"
  },
  {
    "id": "char_196_sunbr",
    "name": "グム",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "ウルサス"
  },
  {
    "id": "char_260_durnar",
    "name": "ジュナー",
    "rarity": "TIER_41",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_110_deepcl",
    "name": "ディピカ",
    "rarity": "TIER_41",
    "class": "補助",
    "faction": "egir"
  },
  {
    "id": "char_183_skgoat",
    "name": "アーススピリット",
    "rarity": "TIER_41",
    "class": "補助",
    "faction": "leithanien"
  },
  {
    "id": "char_258_podego",
    "name": "ポデンコ",
    "rarity": "TIER_41",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_484_robrta",
    "name": "ロベルタ",
    "rarity": "TIER_41",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_355_ethan",
    "name": "イーサン",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_277_sqrrel",
    "name": "ショウ",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_4107_vrdant",
    "name": "ヴァーダント",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4165_ctrail",
    "name": "コントレイル",
    "rarity": "TIER_41",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_128_plosis",
    "name": "フィリオプシス",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "columbia"
  },
  {
    "id": "char_275_breeze",
    "name": "ブリーズ",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4163_rosesa",
    "name": "ローズソルト",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "iberia"
  },
  {
    "id": "char_115_headbr",
    "name": "ズィマー",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ウルサス"
  },
  {
    "id": "char_102_texas",
    "name": "テキサス",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "龍門"
  },
  {
    "id": "char_349_chiave",
    "name": "キアーベ",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "siracusa"
  },
  {
    "id": "char_488_buildr",
    "name": "ポンシラス",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_4023_rfalcn",
    "name": "ケストレル",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "sargon"
  },
  {
    "id": "char_4199_makiri",
    "name": "マツキリ",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "higashi"
  },
  {
    "id": "char_261_sddrag",
    "name": "リード",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_496_wildmn",
    "name": "ワイルドメイン",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_1036_fang2",
    "name": "歴陣鋭槍フェン",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_401_elysm",
    "name": "エリジウム",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_4119_wanqin",
    "name": "ワンチィン",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "yan"
  },
  {
    "id": "char_476_blkngt",
    "name": "ブラックナイト",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "rim"
  },
  {
    "id": "char_4147_mitm",
    "name": "ミトム",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_497_ctable",
    "name": "カンタービレ",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ロドス"
  },
  {
    "id": "char_4017_puzzle",
    "name": "パズル",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4144_chilc",
    "name": "チルチャック",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "その他"
  },
  {
    "id": "char_4052_surfer",
    "name": "サーファー",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_308_swire",
    "name": "スワイヤー",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "龍門"
  },
  {
    "id": "char_265_sophia",
    "name": "ウィスラッシュ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_4106_bryota",
    "name": "ブライオファイタ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_4125_rdoc",
    "name": "Doc",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "その他"
  },
  {
    "id": "char_106_franka",
    "name": "フランカ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_131_flameb",
    "name": "エンカク",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_154_morgan",
    "name": "モーガン",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4142_laios",
    "name": "ライオス",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "その他"
  },
  {
    "id": "char_155_tiger",
    "name": "インドラ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_415_flint",
    "name": "フリント",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "sargon"
  },
  {
    "id": "char_157_dagda",
    "name": "ダグザ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_140_whitew",
    "name": "ラップランド",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "siracusa"
  },
  {
    "id": "char_294_ayer",
    "name": "エアースカーペ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "rim"
  },
  {
    "id": "char_194_leto",
    "name": "リェータ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ウルサス"
  },
  {
    "id": "char_4083_chimes",
    "name": "ウィンドチャイム",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_252_bibeak",
    "name": "バイビーク",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "sami"
  },
  {
    "id": "char_459_tachak",
    "name": "Tachanka",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "その他"
  },
  {
    "id": "char_143_ghost",
    "name": "スペクター",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "egir"
  },
  {
    "id": "char_356_broca",
    "name": "ブローカ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "siracusa"
  },
  {
    "id": "char_4126_fuze",
    "name": "Fuze",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "その他"
  },
  {
    "id": "char_274_astesi",
    "name": "アステシア",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_333_sidero",
    "name": "シデロカ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "minos"
  },
  {
    "id": "char_475_akafyu",
    "name": "アカフユ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "higashi"
  },
  {
    "id": "char_1030_noirc2",
    "name": "レウスSノイルホーン",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_421_crow",
    "name": "ラ・プルマ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "bolivar"
  },
  {
    "id": "char_4066_highmo",
    "name": "ハイモア",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "iberia"
  },
  {
    "id": "char_486_takila",
    "name": "テキーラ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "bolivar"
  },
  {
    "id": "char_4131_odda",
    "name": "オッダ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_4187_graceb",
    "name": "グレースベアラー",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "bolivar"
  },
  {
    "id": "char_129_bluep",
    "name": "アズリウス",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "iberia"
  },
  {
    "id": "char_204_platnm",
    "name": "プラチナ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_367_swllow",
    "name": "グレースロート",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_365_aprl",
    "name": "エイプリル",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "rim"
  },
  {
    "id": "char_1021_kroos2",
    "name": "寒芒クルース",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_498_inside",
    "name": "インサイダー",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_219_meteo",
    "name": "メテオリーテ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_379_sesa",
    "name": "シェーシャ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "sargon"
  },
  {
    "id": "char_4078_bdhkgt",
    "name": "ジエユン",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "yan"
  },
  {
    "id": "char_279_excu",
    "name": "イグゼキュター",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_346_aosta",
    "name": "アオスタ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "siracusa"
  },
  {
    "id": "char_4203_kichi",
    "name": "キチセイ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "higashi"
  },
  {
    "id": "char_002_amiya",
    "name": "アーミヤ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_405_absin",
    "name": "アブサント",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ウルサス"
  },
  {
    "id": "char_411_tomimi",
    "name": "トミミ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "sargon"
  },
  {
    "id": "char_466_qanik",
    "name": "カニパラート",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "sami"
  },
  {
    "id": "char_166_skfire",
    "name": "スカイフレア",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_306_leizi",
    "name": "レイズ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "yan"
  },
  {
    "id": "char_135_halo",
    "name": "アステジーニ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "columbia"
  },
  {
    "id": "char_344_beewax",
    "name": "ビーズワクス",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "sargon"
  },
  {
    "id": "char_373_lionhd",
    "name": "レオンハルト",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "rim"
  },
  {
    "id": "char_341_sntlla",
    "name": "サンタラ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "sami"
  },
  {
    "id": "char_388_mint",
    "name": "ミント",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_338_iris",
    "name": "アイリス",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_297_hamoni",
    "name": "ハーモニー",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4110_delphn",
    "name": "デルフィーン",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_1011_lava2",
    "name": "炎獄ラヴァ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_489_serum",
    "name": "コロセラム",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "columbia"
  },
  {
    "id": "char_446_aroma",
    "name": "アロマ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "siracusa"
  },
  {
    "id": "char_4013_kjera",
    "name": "イェラ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "カランド貿易"
  },
  {
    "id": "char_4040_rockr",
    "name": "ロックロック",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4054_malist",
    "name": "ミニマリスト",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "sargon"
  },
  {
    "id": "char_499_kaitou",
    "name": "ディアマンテ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "leithanien"
  },
  {
    "id": "char_4081_warmy",
    "name": "ウォーミー",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "rim"
  },
  {
    "id": "char_4198_christ",
    "name": "ミス・クリスティーン",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4164_tecno",
    "name": "テクノ",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "bolivar"
  },
  {
    "id": "char_242_otter",
    "name": "メイヤー",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_336_folivo",
    "name": "シーン",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "sargon"
  },
  {
    "id": "char_4140_lasher",
    "name": "サンドレコナー",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "sargon"
  },
  {
    "id": "char_108_silent",
    "name": "サイレンス",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "columbia"
  },
  {
    "id": "char_171_bldsk",
    "name": "ワルファリン",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_345_folnic",
    "name": "フォリニック",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_4196_reckpr",
    "name": "レコードキーパー",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "yan"
  },
  {
    "id": "char_348_ceylon",
    "name": "セイロン",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "columbia"
  },
  {
    "id": "char_436_whispr",
    "name": "ウィスパーレイン",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "iberia"
  },
  {
    "id": "char_4173_nowell",
    "name": "ノウエル",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_402_tuye",
    "name": "トゥイエ",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "sargon"
  },
  {
    "id": "char_473_mberry",
    "name": "マルベリー",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "yan"
  },
  {
    "id": "char_449_glider",
    "name": "ハニーベリー",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "rim"
  },
  {
    "id": "char_4114_harold",
    "name": "ハロルド",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_1024_hbisc2",
    "name": "濯塵ハイビスカス",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_494_vendla",
    "name": "ヴァンデラ",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4071_peper",
    "name": "パプリカ",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_4139_papyrs",
    "name": "パピルス",
    "rarity": "TIER_51",
    "class": "医療",
    "faction": "sargon"
  },
  {
    "id": "char_148_nearl",
    "name": "ニアール",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "その他"
  },
  {
    "id": "char_226_hmau",
    "name": "ウン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "龍門"
  },
  {
    "id": "char_4109_baslin",
    "name": "ベースライン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "leithanien"
  },
  {
    "id": "char_4143_sensi",
    "name": "センシ",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "その他"
  },
  {
    "id": "char_144_red",
    "name": "レッド",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_243_waaifu",
    "name": "ワイフー",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_214_kafka",
    "name": "カフカ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_455_nothin",
    "name": "ウユウ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "yan"
  },
  {
    "id": "char_4155_talr",
    "name": "フィグリーノ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "siracusa"
  },
  {
    "id": "char_107_liskam",
    "name": "リスカム",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "columbia"
  },
  {
    "id": "char_4137_udflow",
    "name": "アンダーフロー",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "egir"
  },
  {
    "id": "char_201_moeshd",
    "name": "クロワッサン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "龍門"
  },
  {
    "id": "char_325_bison",
    "name": "バイソン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "龍門"
  },
  {
    "id": "char_163_hpsts",
    "name": "ヴァルカン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "minos"
  },
  {
    "id": "char_378_asbest",
    "name": "アスベストス",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "rim"
  },
  {
    "id": "char_4025_aprot2",
    "name": "シャレム",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4047_pianst",
    "name": "ツェルニー",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "leithanien"
  },
  {
    "id": "char_457_blitz",
    "name": "Blitz",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "その他"
  },
  {
    "id": "char_304_zebra",
    "name": "ヘビーレイン",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_431_ashlok",
    "name": "アッシュロック",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_493_firwhl",
    "name": "ファイヤーホイッスル",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "rim"
  },
  {
    "id": "char_422_aurora",
    "name": "オーロラ",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "カランド貿易"
  },
  {
    "id": "char_464_cement",
    "name": "セメント",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "rim"
  },
  {
    "id": "char_4148_philae",
    "name": "フィラエ",
    "rarity": "TIER_51",
    "class": "重装",
    "faction": "sargon"
  },
  {
    "id": "char_145_prove",
    "name": "プロヴァンス",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "siracusa"
  },
  {
    "id": "char_4006_melnte",
    "name": "メラナイト",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_158_milu",
    "name": "ファイヤーウォッチ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_218_cuttle",
    "name": "アンドレアナ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "egir"
  },
  {
    "id": "char_4014_lunacu",
    "name": "ルナカブ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "siracusa"
  },
  {
    "id": "char_363_toddi",
    "name": "トギフォンス",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4043_erato",
    "name": "エラト",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "minos"
  },
  {
    "id": "char_1027_greyy2",
    "name": "承曦グレイ",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_4104_coldst",
    "name": "コールドショット",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_4177_brigid",
    "name": "ブリギッド",
    "rarity": "TIER_51",
    "class": "狙撃",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4015_spuria",
    "name": "スプリア",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_173_slchan",
    "name": "クリフハート",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "カランド貿易"
  },
  {
    "id": "char_383_snsant",
    "name": "スノーズント",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_4105_almond",
    "name": "アーモンド",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_174_slbell",
    "name": "プラマニクス",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "カランド貿易"
  },
  {
    "id": "char_254_vodfox",
    "name": "シャマレ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "siracusa"
  },
  {
    "id": "char_4079_haini",
    "name": "ルシーラ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "egir"
  },
  {
    "id": "char_195_glassb",
    "name": "イースチナ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "ウルサス"
  },
  {
    "id": "char_326_glacus",
    "name": "グラウコス",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "iberia"
  },
  {
    "id": "char_4032_provs",
    "name": "プロヴァイゾ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_4122_grabds",
    "name": "グレインバッズ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "yan"
  },
  {
    "id": "char_433_windft",
    "name": "ウインドフリット",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_4162_cathy",
    "name": "キャサリン",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4178_alanna",
    "name": "アランナ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "rim"
  },
  {
    "id": "char_101_sora",
    "name": "ソラ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "龍門"
  },
  {
    "id": "char_4045_heidi",
    "name": "ハイディ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_343_tknogi",
    "name": "ツキノギ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "higashi"
  },
  {
    "id": "char_4019_ncdeer",
    "name": "九色鹿",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "yan"
  },
  {
    "id": "char_492_quercu",
    "name": "クエルクス",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_4172_xingzh",
    "name": "シィンズゥ",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "yan"
  },
  {
    "id": "char_4102_threye",
    "name": "ヴァラルクビン",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "sami"
  },
  {
    "id": "char_487_bobb",
    "name": "ボビング",
    "rarity": "TIER_51",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_215_mantic",
    "name": "マンティコア",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "sargon"
  },
  {
    "id": "char_478_kirara",
    "name": "キララ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "higashi"
  },
  {
    "id": "char_241_panda",
    "name": "エフイーター",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_4036_forcer",
    "name": "エンフォーサー",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_451_robin",
    "name": "ロビン",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_458_rfrost",
    "name": "Frost",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "その他"
  },
  {
    "id": "char_4171_wulfen",
    "name": "ウルフェナイト",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "sargon"
  },
  {
    "id": "char_369_bena",
    "name": "ベナ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4016_kazema",
    "name": "カゼマル",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "higashi"
  },
  {
    "id": "char_4124_iana",
    "name": "Iana",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "その他"
  },
  {
    "id": "char_4151_tinman",
    "name": "ブリキ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_4191_tippi",
    "name": "ティッピ",
    "rarity": "TIER_51",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_103_angel",
    "name": "エクシア",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "龍門"
  },
  {
    "id": "char_332_archet",
    "name": "アルケット",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_456_ash",
    "name": "Ash",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "その他"
  },
  {
    "id": "char_340_shwaz",
    "name": "シュヴァルツ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "columbia"
  },
  {
    "id": "char_4055_bgsnow",
    "name": "パゼオンカ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_430_fartth",
    "name": "ファートゥース",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_4193_lemuen",
    "name": "レミュアン",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_113_cqbw",
    "name": "W",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "その他"
  },
  {
    "id": "char_300_phenxi",
    "name": "フィアメッタ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_197_poca",
    "name": "ロサ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ウルサス"
  },
  {
    "id": "char_2012_typhon",
    "name": "ティフォン",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "sami"
  },
  {
    "id": "char_391_rosmon",
    "name": "ロスモンティス",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_1035_wisdel",
    "name": "ウィシャデル",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "その他"
  },
  {
    "id": "char_1013_chen2",
    "name": "遊龍チェン",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_4117_ray",
    "name": "レイ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "rim"
  },
  {
    "id": "char_4138_narant",
    "name": "ナラントゥヤ",
    "rarity": "TIER_61",
    "class": "狙撃",
    "faction": "sargon"
  },
  {
    "id": "char_112_siege",
    "name": "シージ",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_222_bpipe",
    "name": "バグパイプ",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_362_saga",
    "name": "サガ",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "higashi"
  },
  {
    "id": "char_4026_vulpis",
    "name": "ウルピスフォリア",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "siracusa"
  },
  {
    "id": "char_479_sleach",
    "name": "サイラッハ",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_420_flamtl",
    "name": "フレイムテイル",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_427_vigil",
    "name": "ヴィジェル",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "siracusa"
  },
  {
    "id": "char_249_mlyss",
    "name": "ミュルジス",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "columbia"
  },
  {
    "id": "char_4087_ines",
    "name": "イネス",
    "rarity": "TIER_61",
    "class": "先鋒",
    "faction": "その他"
  },
  {
    "id": "char_134_ifrit",
    "name": "イフリータ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "columbia"
  },
  {
    "id": "char_213_mostma",
    "name": "モスティマ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_180_amgoat",
    "name": "エイヤフィヤトラ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "leithanien"
  },
  {
    "id": "char_2013_cerber",
    "name": "ケオベ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_4027_heyak",
    "name": "ホルハイヤ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "columbia"
  },
  {
    "id": "char_4133_logos",
    "name": "ロゴス",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_2015_dusk",
    "name": "シー",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "yan"
  },
  {
    "id": "char_4141_marcil",
    "name": "マルシル",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "その他"
  },
  {
    "id": "char_472_pasngr",
    "name": "パッセンジャー",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "sargon"
  },
  {
    "id": "char_426_billro",
    "name": "カーネリアン",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "leithanien"
  },
  {
    "id": "char_4080_lin",
    "name": "リン",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "龍門"
  },
  {
    "id": "char_377_gdglow",
    "name": "ゴールデングロー",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_1038_whitw2",
    "name": "荒蕪ラップランド",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "siracusa"
  },
  {
    "id": "char_4046_ebnhlz",
    "name": "エーベンホルツ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "leithanien"
  },
  {
    "id": "char_4146_nymph",
    "name": "ニンフ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_1040_blaze2",
    "name": "熾炎ブレイズ",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ロドス"
  },
  {
    "id": "char_450_necras",
    "name": "ネクラス",
    "rarity": "TIER_61",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_206_gnosis",
    "name": "ノーシス",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "カランド貿易"
  },
  {
    "id": "char_291_aglina",
    "name": "アンジェリーナ",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "siracusa"
  },
  {
    "id": "char_358_lisa",
    "name": "スズラン",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "siracusa"
  },
  {
    "id": "char_248_mgllan",
    "name": "マゼラン",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_4195_radian",
    "name": "レイディアン",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_1012_skadi2",
    "name": "濁心スカジ",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "egir"
  },
  {
    "id": "char_4134_cetsyr",
    "name": "シヴィライト・エテルナ",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "ロドス"
  },
  {
    "id": "char_1031_slent2",
    "name": "淬羽サイレンス",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "columbia"
  },
  {
    "id": "char_4202_haruka",
    "name": "ハルカ",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "higashi"
  },
  {
    "id": "char_2023_ling",
    "name": "リィン",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "yan"
  },
  {
    "id": "char_4072_ironmn",
    "name": "ステインレス",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_245_cello",
    "name": "ヴィルトゥオーサ",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_1042_phatm2",
    "name": "トラゴーディア",
    "rarity": "TIER_61",
    "class": "補助",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_250_phatom",
    "name": "ファントム",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_1028_texas2",
    "name": "血掟テキサス",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_1029_yato2",
    "name": "キリンRヤトウ",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_1502_crosly",
    "name": "クラウンスレイヤー",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_322_lmlee",
    "name": "リー",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_1033_swire2",
    "name": "琳琅スワイヤー",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_400_weedy",
    "name": "ウィーディ",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_225_haak",
    "name": "ア",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_1041_angel2",
    "name": "新約エクシア",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "龍門"
  },
  {
    "id": "char_474_glady",
    "name": "グレイディーア",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "egir"
  },
  {
    "id": "char_437_mizuki",
    "name": "ミヅキ",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "higashi"
  },
  {
    "id": "char_4132_ascln",
    "name": "アスカロン",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "ロドス"
  },
  {
    "id": "char_1023_ghost2",
    "name": "帰溟スペクター",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "egir"
  },
  {
    "id": "char_4048_doroth",
    "name": "ドロシー",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "columbia"
  },
  {
    "id": "char_4123_ela",
    "name": "Ela",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "その他"
  },
  {
    "id": "char_1039_thorn2",
    "name": "引星ソーンズ",
    "rarity": "TIER_61",
    "class": "特殊",
    "faction": "iberia"
  },
  {
    "id": "char_147_shining",
    "name": "シャイニング",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "その他"
  },
  {
    "id": "char_179_cgbird",
    "name": "ナイチンゲール",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "その他"
  },
  {
    "id": "char_003_kalts",
    "name": "ケルシー",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_4042_lumen",
    "name": "ルーメン",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "iberia"
  },
  {
    "id": "char_1016_agoat2",
    "name": "純燼エイヤフィヤトラ",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "leithanien"
  },
  {
    "id": "char_1020_reed2",
    "name": "焔影リード",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_4179_monstr",
    "name": "Mon3tr",
    "rarity": "TIER_61",
    "class": "医療",
    "faction": "ロドス"
  },
  {
    "id": "char_136_hsguma",
    "name": "ホシグマ",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "龍門"
  },
  {
    "id": "char_202_demkni",
    "name": "サリア",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "columbia"
  },
  {
    "id": "char_423_blemsh",
    "name": "ブレミシャイン",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_2025_shu",
    "name": "シュウ",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "yan"
  },
  {
    "id": "char_2014_nian",
    "name": "ニェン",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "yan"
  },
  {
    "id": "char_311_mudrok",
    "name": "マドロック",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "ロドス"
  },
  {
    "id": "char_4065_judge",
    "name": "ペナンス",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "siracusa"
  },
  {
    "id": "char_416_zumama",
    "name": "ユーネクテス",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "sargon"
  },
  {
    "id": "char_4039_horn",
    "name": "ホルン",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_1034_jesca2",
    "name": "滌火ジェシカ",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "columbia"
  },
  {
    "id": "char_4194_rmixer",
    "name": "サンクタ・ミキサー",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_2026_yu",
    "name": "ユー",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "yan"
  },
  {
    "id": "char_1044_hsgma2",
    "name": "斬業ホシグマ",
    "rarity": "TIER_61",
    "class": "重装",
    "faction": "龍門"
  },
  {
    "id": "char_264_f12yin",
    "name": "マウンテン",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_2024_chyue",
    "name": "チョンユエ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_172_svrash",
    "name": "シルバーアッシュ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "カランド貿易"
  },
  {
    "id": "char_293_thorns",
    "name": "ソーンズ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "iberia"
  },
  {
    "id": "char_4082_qiubai",
    "name": "チューバイ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_4088_hodrer",
    "name": "ヘドリー",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "その他"
  },
  {
    "id": "char_4145_ulpia",
    "name": "ウルピアヌス",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "egir"
  },
  {
    "id": "char_4058_pepe",
    "name": "ペペ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "sargon"
  },
  {
    "id": "char_010_chen",
    "name": "チェン",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "龍門"
  },
  {
    "id": "char_4009_irene",
    "name": "アイリーニ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "iberia"
  },
  {
    "id": "char_4116_blkkgt",
    "name": "デーゲンブレヒャー",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "カランド貿易"
  },
  {
    "id": "char_017_huang",
    "name": "ブレイズ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_1026_gvial2",
    "name": "百錬ガヴィル",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_350_surtr",
    "name": "スルト",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_4098_vvana",
    "name": "ヴィヴィアナ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "leithanien"
  },
  {
    "id": "char_1019_siege2",
    "name": "ヴィーナ・ヴィクトリア",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_188_helage",
    "name": "ヘラグ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ウルサス"
  },
  {
    "id": "char_4121_zuole",
    "name": "ズオ・ラウ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_485_pallas",
    "name": "パラス",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "minos"
  },
  {
    "id": "char_1014_nearl2",
    "name": "耀騎士ニアール",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_4011_lessng",
    "name": "レッシング",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "leithanien"
  },
  {
    "id": "char_1032_excu2",
    "name": "聖約イグゼキュター",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ラテラーノ"
  },
  {
    "id": "char_4010_etlchi",
    "name": "エンテレケイア",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_4064_mlynar",
    "name": "ムリナール",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "カジミエーシュ"
  },
  {
    "id": "char_1043_leizi2",
    "name": "司霆レイズ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "yan"
  },
  {
    "id": "char_230_savage",
    "name": "サベージ",
    "rarity": "TIER_51",
    "class": "前衛",
    "faction": "rim"
  },
  {
    "id": "char_282_catap",
    "name": "カタパルト",
    "rarity": "TIER_31",
    "class": "狙撃",
    "faction": "ロドス"
  },
  {
    "id": "char_283_midn",
    "name": "ミッドナイト",
    "rarity": "TIER_31",
    "class": "前衛",
    "faction": "ロドス"
  },
  {
    "id": "char_137_brownb",
    "name": "ビーハンター",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "ウルサス"
  },
  {
    "id": "char_347_jaksel",
    "name": "ジャッキー",
    "rarity": "TIER_41",
    "class": "前衛",
    "faction": "columbia"
  },
  {
    "id": "char_164_nightm",
    "name": "ナイトメア",
    "rarity": "TIER_51",
    "class": "術師",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_220_grani",
    "name": "グラニ",
    "rarity": "TIER_51",
    "class": "先鋒",
    "faction": "ヴィクトリア"
  },
  {
    "id": "char_263_skadi",
    "name": "スカジ",
    "rarity": "TIER_61",
    "class": "前衛",
    "faction": "egir"
  }
];
export default allOperators;