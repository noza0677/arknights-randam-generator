const allOperators = [
  {
    "id": "char_002_amiya",
    "name": "アーミヤ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_003_kalts",
    "name": "ケルシー",
    "class": "医療",
    "rarity": "TIER_6"
  },
  {
    "id": "char_009_12fce",
    "name": "12F",
    "class": "術師",
    "rarity": "TIER_2"
  },
  {
    "id": "char_010_chen",
    "name": "チェン",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_017_huang",
    "name": "ブレイズ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_101_sora",
    "name": "ソラ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_102_texas",
    "name": "テキサス",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_103_angel",
    "name": "エクシア",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_106_franka",
    "name": "フランカ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_107_liskam",
    "name": "リスカム",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_108_silent",
    "name": "サイレンス",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_109_fmout",
    "name": "ギターノ",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_110_deepcl",
    "name": "ディピカ",
    "class": "補助",
    "rarity": "TIER_4"
  },
  {
    "id": "char_112_siege",
    "name": "シージ",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_113_cqbw",
    "name": "W",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_115_headbr",
    "name": "ズィマー",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_117_myrrh",
    "name": "ミルラ",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_118_yuki",
    "name": "シラユキ",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_120_hibisc",
    "name": "ハイビスカス",
    "class": "医療",
    "rarity": "TIER_3"
  },
  {
    "id": "char_121_lava",
    "name": "ラヴァ",
    "class": "術師",
    "rarity": "TIER_3"
  },
  {
    "id": "char_122_beagle",
    "name": "ビーグル",
    "class": "重装",
    "rarity": "TIER_3"
  },
  {
    "id": "char_123_fang",
    "name": "フェン",
    "class": "先鋒",
    "rarity": "TIER_3"
  },
  {
    "id": "char_124_kroos",
    "name": "クルース",
    "class": "狙撃",
    "rarity": "TIER_3"
  },
  {
    "id": "char_126_shotst",
    "name": "メテオ",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_127_estell",
    "name": "エステル",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_128_plosis",
    "name": "フィリオプシス",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_129_bluep",
    "name": "アズリウス",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_130_doberm",
    "name": "ドーベルマン",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_131_flameb",
    "name": "エンカク",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_133_mm",
    "name": "メイ",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_134_ifrit",
    "name": "イフリータ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_135_halo",
    "name": "アステジーニ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_136_hsguma",
    "name": "ホシグマ",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_137_brownb",
    "name": "ビーハンター",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_140_whitew",
    "name": "ラップランド",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_141_nights",
    "name": "ヘイズ",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_143_ghost",
    "name": "スペクター",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_144_red",
    "name": "レッド",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_145_prove",
    "name": "プロヴァンス",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_147_shining",
    "name": "シャイニング",
    "class": "医療",
    "rarity": "TIER_6"
  },
  {
    "id": "char_148_nearl",
    "name": "ニアール",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_149_scave",
    "name": "スカベンジャー",
    "class": "先鋒",
    "rarity": "TIER_4"
  },
  {
    "id": "char_1502_crosly",
    "name": "クラウンスレイヤー",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_150_snakek",
    "name": "クオーラ",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_151_myrtle",
    "name": "テンニンカ",
    "class": "先鋒",
    "rarity": "TIER_4"
  },
  {
    "id": "char_154_morgan",
    "name": "モーガン",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_155_tiger",
    "name": "インドラ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_157_dagda",
    "name": "ダグザ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_158_milu",
    "name": "ファイヤーウォッチ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_159_peacok",
    "name": "コンビクション",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_163_hpsts",
    "name": "ヴァルカン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_164_nightm",
    "name": "ナイトメア",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_166_skfire",
    "name": "スカイフレア",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_171_bldsk",
    "name": "ワルファリン",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_172_svrash",
    "name": "シルバーアッシュ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_173_slchan",
    "name": "クリフハート",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_174_slbell",
    "name": "プラマニクス",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_179_cgbird",
    "name": "ナイチンゲール",
    "class": "医療",
    "rarity": "TIER_6"
  },
  {
    "id": "char_180_amgoat",
    "name": "エイヤフィヤトラ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_181_flower",
    "name": "パフューマー",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_183_skgoat",
    "name": "アーススピリット",
    "class": "補助",
    "rarity": "TIER_4"
  },
  {
    "id": "char_185_frncat",
    "name": "ムース",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_187_ccheal",
    "name": "ガヴィル",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_188_helage",
    "name": "ヘラグ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_190_clour",
    "name": "ヴァーミル",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_192_falco",
    "name": "プリュム",
    "class": "先鋒",
    "rarity": "TIER_3"
  },
  {
    "id": "char_193_frostl",
    "name": "フロストリーフ",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_194_leto",
    "name": "リェータ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_195_glassb",
    "name": "イースチナ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_196_sunbr",
    "name": "グム",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_197_poca",
    "name": "ロサ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_198_blackd",
    "name": "クーリエ",
    "class": "先鋒",
    "rarity": "TIER_4"
  },
  {
    "id": "char_199_yak",
    "name": "マッターホルン",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_2012_typhon",
    "name": "ティフォン",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2013_cerber",
    "name": "ケオベ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2014_nian",
    "name": "ニェン",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2015_dusk",
    "name": "シー",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_201_moeshd",
    "name": "クロワッサン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_2023_ling",
    "name": "リィン",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2024_chyue",
    "name": "チョンユエ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2025_shu",
    "name": "シュウ",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_2026_yu",
    "name": "ユー",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_202_demkni",
    "name": "サリア",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_204_platnm",
    "name": "プラチナ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_206_gnosis",
    "name": "ノーシス",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_208_melan",
    "name": "メランサ",
    "class": "前衛",
    "rarity": "TIER_3"
  },
  {
    "id": "char_209_ardign",
    "name": "カーディ",
    "class": "重装",
    "rarity": "TIER_3"
  },
  {
    "id": "char_210_stward",
    "name": "スチュワード",
    "class": "術師",
    "rarity": "TIER_3"
  },
  {
    "id": "char_211_adnach",
    "name": "アドナキエル",
    "class": "狙撃",
    "rarity": "TIER_3"
  },
  {
    "id": "char_212_ansel",
    "name": "アンセル",
    "class": "医療",
    "rarity": "TIER_3"
  },
  {
    "id": "char_213_mostma",
    "name": "モスティマ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_214_kafka",
    "name": "カフカ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_215_mantic",
    "name": "マンティコア",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_218_cuttle",
    "name": "アンドレアナ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_219_meteo",
    "name": "メテオリーテ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_220_grani",
    "name": "グラニ",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_222_bpipe",
    "name": "バグパイプ",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_225_haak",
    "name": "ア",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_226_hmau",
    "name": "ウン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_230_savage",
    "name": "サベージ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_235_jesica",
    "name": "ジェシカ",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_236_rope",
    "name": "ロープ",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_237_gravel",
    "name": "グラベル",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_240_wyvern",
    "name": "バニラ",
    "class": "先鋒",
    "rarity": "TIER_3"
  },
  {
    "id": "char_241_panda",
    "name": "エフイーター",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_242_otter",
    "name": "メイヤー",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_243_waaifu",
    "name": "ワイフー",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_245_cello",
    "name": "ヴィルトゥオーサ",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_248_mgllan",
    "name": "マゼラン",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_249_mlyss",
    "name": "ミュルジス",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_250_phatom",
    "name": "ファントム",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_252_bibeak",
    "name": "バイビーク",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_253_greyy",
    "name": "グレイ",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_254_vodfox",
    "name": "シャマレ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_258_podego",
    "name": "ポデンコ",
    "class": "補助",
    "rarity": "TIER_4"
  },
  {
    "id": "char_260_durnar",
    "name": "ジュナー",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_261_sddrag",
    "name": "リード",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_263_skadi",
    "name": "スカジ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_264_f12yin",
    "name": "マウンテン",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_265_sophia",
    "name": "ウィスラッシュ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_271_spikes",
    "name": "アレーン",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_272_strong",
    "name": "ジェイ",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_274_astesi",
    "name": "アステシア",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_275_breeze",
    "name": "ブリーズ",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_277_sqrrel",
    "name": "ショウ",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_278_orchid",
    "name": "オーキッド",
    "class": "補助",
    "rarity": "TIER_3"
  },
  {
    "id": "char_279_excu",
    "name": "イグゼキュター",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_281_popka",
    "name": "ポプカル",
    "class": "前衛",
    "rarity": "TIER_3"
  },
  {
    "id": "char_282_catap",
    "name": "カタパルト",
    "class": "狙撃",
    "rarity": "TIER_3"
  },
  {
    "id": "char_283_midn",
    "name": "ミッドナイト",
    "class": "前衛",
    "rarity": "TIER_3"
  },
  {
    "id": "char_284_spot",
    "name": "スポット",
    "class": "重装",
    "rarity": "TIER_3"
  },
  {
    "id": "char_285_medic2",
    "name": "Lancet-2",
    "class": "医療",
    "rarity": "TIER_1"
  },
  {
    "id": "char_286_cast3",
    "name": "Castle-3",
    "class": "前衛",
    "rarity": "TIER_1"
  },
  {
    "id": "char_289_gyuki",
    "name": "マトイマル",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_290_vigna",
    "name": "ヴィグナ",
    "class": "先鋒",
    "rarity": "TIER_4"
  },
  {
    "id": "char_291_aglina",
    "name": "アンジェリーナ",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_293_thorns",
    "name": "ソーンズ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_294_ayer",
    "name": "エアースカーペ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_297_hamoni",
    "name": "ハーモニー",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_298_susuro",
    "name": "ススーロ",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_300_phenxi",
    "name": "フィアメッタ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_301_cutter",
    "name": "カッター",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_302_glaze",
    "name": "アンブリエル",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_304_zebra",
    "name": "ヘビーレイン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_306_leizi",
    "name": "レイズ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_308_swire",
    "name": "スワイヤー",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_311_mudrok",
    "name": "マドロック",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_322_lmlee",
    "name": "リー",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_325_bison",
    "name": "バイソン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_326_glacus",
    "name": "グラウコス",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_328_cammou",
    "name": "カシャ",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_332_archet",
    "name": "アルケット",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_333_sidero",
    "name": "シデロカ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_336_folivo",
    "name": "シーン",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_337_utage",
    "name": "ウタゲ",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_338_iris",
    "name": "アイリス",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_340_shwaz",
    "name": "シュヴァルツ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_341_sntlla",
    "name": "サンタラ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_343_tknogi",
    "name": "ツキノギ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_344_beewax",
    "name": "ビーズワクス",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_345_folnic",
    "name": "フォリニック",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_346_aosta",
    "name": "アオスタ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_347_jaksel",
    "name": "ジャッキー",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_348_ceylon",
    "name": "セイロン",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_349_chiave",
    "name": "キアーベ",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_350_surtr",
    "name": "スルト",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_355_ethan",
    "name": "イーサン",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_356_broca",
    "name": "ブローカ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_358_lisa",
    "name": "スズラン",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_362_saga",
    "name": "サガ",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_363_toddi",
    "name": "トギフォンス",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_365_aprl",
    "name": "エイプリル",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_366_acdrop",
    "name": "アシッドドロップ",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_367_swllow",
    "name": "グレースロート",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_369_bena",
    "name": "ベナ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_373_lionhd",
    "name": "レオンハルト",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_376_therex",
    "name": "THRM-EX",
    "class": "特殊",
    "rarity": "TIER_1"
  },
  {
    "id": "char_377_gdglow",
    "name": "ゴールデングロー",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_378_asbest",
    "name": "アスベストス",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_379_sesa",
    "name": "シェーシャ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_381_bubble",
    "name": "バブル",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_383_snsant",
    "name": "スノーズント",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_385_finlpp",
    "name": "セイリュウ",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_388_mint",
    "name": "ミント",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_391_rosmon",
    "name": "ロスモンティス",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4000_jnight",
    "name": "ジャスティスナイト",
    "class": "狙撃",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4004_pudd",
    "name": "プリン",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4006_melnte",
    "name": "メラナイト",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4009_irene",
    "name": "アイリーニ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_400_weedy",
    "name": "ウィーディ",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4010_etlchi",
    "name": "エンテレケイア",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4011_lessng",
    "name": "レッシング",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4013_kjera",
    "name": "イェラ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4014_lunacu",
    "name": "ルナカブ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4015_spuria",
    "name": "スプリア",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4016_kazema",
    "name": "カゼマル",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4017_puzzle",
    "name": "パズル",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4019_ncdeer",
    "name": "九色鹿",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_401_elysm",
    "name": "エリジウム",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4023_rfalcn",
    "name": "ケストレル",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4025_aprot2",
    "name": "シャレム",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4026_vulpis",
    "name": "ウルピスフォリア",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4027_heyak",
    "name": "ホルハイヤ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_402_tuye",
    "name": "トゥイエ",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4032_provs",
    "name": "プロヴァイゾ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4036_forcer",
    "name": "エンフォーサー",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4039_horn",
    "name": "ホルン",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4040_rockr",
    "name": "ロックロック",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4041_chnut",
    "name": "チェストナット",
    "class": "医療",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4042_lumen",
    "name": "ルーメン",
    "class": "医療",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4043_erato",
    "name": "エラト",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4045_heidi",
    "name": "ハイディ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4046_ebnhlz",
    "name": "エーベンホルツ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4047_pianst",
    "name": "ツェルニー",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4048_doroth",
    "name": "ドロシー",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4052_surfer",
    "name": "サーファー",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4054_malist",
    "name": "ミニマリスト",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4055_bgsnow",
    "name": "パゼオンカ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4058_pepe",
    "name": "ペペ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_405_absin",
    "name": "アブサント",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4062_totter",
    "name": "トター",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4063_quartz",
    "name": "クォーツ",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4064_mlynar",
    "name": "ムリナール",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4065_judge",
    "name": "ペナンス",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4066_highmo",
    "name": "ハイモア",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4067_lolxh",
    "name": "羅小黒",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4071_peper",
    "name": "パプリカ",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4072_ironmn",
    "name": "ステインレス",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4077_palico",
    "name": "テラ大陸調査団",
    "class": "狙撃",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4078_bdhkgt",
    "name": "ジエユン",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4079_haini",
    "name": "ルシーラ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4080_lin",
    "name": "リン",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4081_warmy",
    "name": "ウォーミー",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4082_qiubai",
    "name": "チューバイ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4083_chimes",
    "name": "ウィンドチャイム",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4087_ines",
    "name": "イネス",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4088_hodrer",
    "name": "ヘドリー",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4091_ulika",
    "name": "U-Official",
    "class": "補助",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4093_frston",
    "name": "Friston-3",
    "class": "重装",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4098_vvana",
    "name": "ヴィヴィアナ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4100_caper",
    "name": "ケイパー",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4102_threye",
    "name": "ヴァラルクビン",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4104_coldst",
    "name": "コールドショット",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4105_almond",
    "name": "アーモンド",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4106_bryota",
    "name": "ブライオファイタ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4107_vrdant",
    "name": "ヴァーダント",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4109_baslin",
    "name": "ベースライン",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4110_delphn",
    "name": "デルフィーン",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4114_harold",
    "name": "ハロルド",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4116_blkkgt",
    "name": "デーゲンブレヒャー",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4117_ray",
    "name": "レイ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4119_wanqin",
    "name": "ワンチィン",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_411_tomimi",
    "name": "トミミ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4121_zuole",
    "name": "ズオ・ラウ",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4122_grabds",
    "name": "グレインバッズ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4123_ela",
    "name": "Ela",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4124_iana",
    "name": "Iana",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4125_rdoc",
    "name": "Doc",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4126_fuze",
    "name": "Fuze",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4130_luton",
    "name": "ルトナダ",
    "class": "重装",
    "rarity": "TIER_4"
  },
  {
    "id": "char_4131_odda",
    "name": "オッダ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4132_ascln",
    "name": "アスカロン",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4133_logos",
    "name": "ロゴス",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4134_cetsyr",
    "name": "シヴィライト・エテルナ",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4136_phonor",
    "name": "PhonoR-0",
    "class": "補助",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4137_udflow",
    "name": "アンダーフロー",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4138_narant",
    "name": "ナラントゥヤ",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4139_papyrs",
    "name": "パピルス",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4140_lasher",
    "name": "サンドレコナー",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4141_marcil",
    "name": "マルシル",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4142_laios",
    "name": "ライオス",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4143_sensi",
    "name": "センシ",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4144_chilc",
    "name": "チルチャック",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4145_ulpia",
    "name": "ウルピアヌス",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4146_nymph",
    "name": "ニンフ",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4147_mitm",
    "name": "ミトム",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4148_philae",
    "name": "フィラエ",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4151_tinman",
    "name": "ブリキ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4155_talr",
    "name": "フィグリーノ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_415_flint",
    "name": "フリント",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4162_cathy",
    "name": "キャサリン",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4163_rosesa",
    "name": "ローズソルト",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4164_tecno",
    "name": "テクノ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4165_ctrail",
    "name": "コントレイル",
    "class": "特殊",
    "rarity": "TIER_4"
  },
  {
    "id": "char_416_zumama",
    "name": "ユーネクテス",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4171_wulfen",
    "name": "ウルフェナイト",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4172_xingzh",
    "name": "シィンズゥ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4173_nowell",
    "name": "ノウエル",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4177_brigid",
    "name": "ブリギッド",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4178_alanna",
    "name": "アランナ",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4179_monstr",
    "name": "Mon3tr",
    "class": "医療",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4182_oblvns",
    "name": "豊川祥子",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4183_mortis",
    "name": "若葉睦",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4184_dolris",
    "name": "三角初華",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4185_amoris",
    "name": "祐天寺にゃむ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4186_tmoris",
    "name": "八幡海鈴",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4187_graceb",
    "name": "グレースベアラー",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4188_confes",
    "name": "CONFESS-47",
    "class": "先鋒",
    "rarity": "TIER_1"
  },
  {
    "id": "char_4191_tippi",
    "name": "ティッピ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4193_lemuen",
    "name": "レミュアン",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4194_rmixer",
    "name": "サンクタ・ミキサー",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4195_radian",
    "name": "レイディアン",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4196_reckpr",
    "name": "レコードキーパー",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4198_christ",
    "name": "ミス・クリスティーン",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4199_makiri",
    "name": "マツキリ",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_4202_haruka",
    "name": "ハルカ",
    "class": "補助",
    "rarity": "TIER_6"
  },
  {
    "id": "char_4203_kichi",
    "name": "キチセイ",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_420_flamtl",
    "name": "フレイムテイル",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_421_crow",
    "name": "ラ・プルマ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_422_aurora",
    "name": "オーロラ",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_423_blemsh",
    "name": "ブレミシャイン",
    "class": "重装",
    "rarity": "TIER_6"
  },
  {
    "id": "char_426_billro",
    "name": "カーネリアン",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_427_vigil",
    "name": "ヴィジェル",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_430_fartth",
    "name": "ファートゥース",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_431_ashlok",
    "name": "アッシュロック",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_433_windft",
    "name": "ウインドフリット",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_436_whispr",
    "name": "ウィスパーレイン",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_437_mizuki",
    "name": "ミヅキ",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_440_pinecn",
    "name": "パインコーン",
    "class": "狙撃",
    "rarity": "TIER_4"
  },
  {
    "id": "char_445_wscoot",
    "name": "ウィンドスクート",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_446_aroma",
    "name": "アロマ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_449_glider",
    "name": "ハニーベリー",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_450_necras",
    "name": "ネクラス",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_451_robin",
    "name": "ロビン",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_452_bstalk",
    "name": "ビーンストーク",
    "class": "先鋒",
    "rarity": "TIER_4"
  },
  {
    "id": "char_455_nothin",
    "name": "ウユウ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_456_ash",
    "name": "Ash",
    "class": "狙撃",
    "rarity": "TIER_6"
  },
  {
    "id": "char_457_blitz",
    "name": "Blitz",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_458_rfrost",
    "name": "Frost",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_459_tachak",
    "name": "Tachanka",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_464_cement",
    "name": "セメント",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_466_qanik",
    "name": "カニパラート",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_469_indigo",
    "name": "インディゴ",
    "class": "術師",
    "rarity": "TIER_4"
  },
  {
    "id": "char_472_pasngr",
    "name": "パッセンジャー",
    "class": "術師",
    "rarity": "TIER_6"
  },
  {
    "id": "char_473_mberry",
    "name": "マルベリー",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_474_glady",
    "name": "グレイディーア",
    "class": "特殊",
    "rarity": "TIER_6"
  },
  {
    "id": "char_475_akafyu",
    "name": "アカフユ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_476_blkngt",
    "name": "ブラックナイト",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_478_kirara",
    "name": "キララ",
    "class": "特殊",
    "rarity": "TIER_5"
  },
  {
    "id": "char_479_sleach",
    "name": "サイラッハ",
    "class": "先鋒",
    "rarity": "TIER_6"
  },
  {
    "id": "char_484_robrta",
    "name": "ロベルタ",
    "class": "補助",
    "rarity": "TIER_4"
  },
  {
    "id": "char_485_pallas",
    "name": "パラス",
    "class": "前衛",
    "rarity": "TIER_6"
  },
  {
    "id": "char_486_takila",
    "name": "テキーラ",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_487_bobb",
    "name": "ボビング",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_488_buildr",
    "name": "ポンシラス",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_489_serum",
    "name": "コロセラム",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_491_humus",
    "name": "ヒューマス",
    "class": "前衛",
    "rarity": "TIER_4"
  },
  {
    "id": "char_492_quercu",
    "name": "クエルクス",
    "class": "補助",
    "rarity": "TIER_5"
  },
  {
    "id": "char_493_firwhl",
    "name": "ファイヤーホイッスル",
    "class": "重装",
    "rarity": "TIER_5"
  },
  {
    "id": "char_494_vendla",
    "name": "ヴァンデラ",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_496_wildmn",
    "name": "ワイルドメイン",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_497_ctable",
    "name": "カンタービレ",
    "class": "先鋒",
    "rarity": "TIER_5"
  },
  {
    "id": "char_498_inside",
    "name": "インサイダー",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_499_kaitou",
    "name": "ディアマンテ",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_500_noirc",
    "name": "ノイルホーン",
    "class": "重装",
    "rarity": "TIER_2"
  },
  {
    "id": "char_501_durin",
    "name": "ドゥリン",
    "class": "術師",
    "rarity": "TIER_2"
  },
  {
    "id": "char_502_nblade",
    "name": "ヤトウ",
    "class": "先鋒",
    "rarity": "TIER_2"
  },
  {
    "id": "char_503_rang",
    "name": "レンジャー",
    "class": "狙撃",
    "rarity": "TIER_2"
  },
  {
    "id": "char_504_rguard",
    "name": "予備隊員-近距離",
    "class": "先鋒",
    "rarity": "TIER_3"
  },
  {
    "id": "char_505_rcast",
    "name": "予備隊員-術師",
    "class": "術師",
    "rarity": "TIER_3"
  },
  {
    "id": "char_506_rmedic",
    "name": "予備隊員-支援",
    "class": "医療",
    "rarity": "TIER_3"
  },
  {
    "id": "char_507_rsnipe",
    "name": "予備隊員-狙撃",
    "class": "狙撃",
    "rarity": "TIER_3"
  },
  {
    "id": "char_508_aguard",
    "name": "Sharp",
    "class": "前衛",
    "rarity": "TIER_5"
  },
  {
    "id": "char_509_acast",
    "name": "Pith",
    "class": "術師",
    "rarity": "TIER_5"
  },
  {
    "id": "char_510_amedic",
    "name": "Touch",
    "class": "医療",
    "rarity": "TIER_5"
  },
  {
    "id": "char_511_asnipe",
    "name": "Stormeye",
    "class": "狙撃",
    "rarity": "TIER_5"
  },
  {
    "id": "char_512_aprot",
    "name": "シャレム",
    "class": "重装",
    "rarity": "TIER_5"
  },
];

export default allOperators;