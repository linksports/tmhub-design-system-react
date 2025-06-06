import type { Meta, StoryFn } from "@storybook/react";
import { colorValues, iconSizeValues } from "../Icons.types";
import SportIcon from "./SportIcon";
import { sportIdComponentMap } from "./SportIcon.types";

const sportIdToJapaneseName: Record<number, string> = {
  1: "その他",
  2: "フットサル",
  3: "サッカー",
  4: "女子ラクロス",
  5: "男子ラクロス",
  6: "野球",
  7: "アンプティサッカー",
  8: "ビーチサッカー",
  9: "サイクルサッカー",
  10: "ハンドボール",
  11: "車椅子ハンドボール",
  12: "ロールボール",
  13: "フィールドホッケー",
  14: "アイスホッケー",
  15: "パラアイスホッケー",
  16: "バンディ",
  17: "シンティ",
  18: "フロアボール",
  19: "フロアホッケー",
  20: "ローラーホッケー",
  21: "インラインホッケー",
  22: "ブルームボール",
  23: "リンゲット",
  24: "コーフボール",
  25: "ネットボール",
  26: "リングボール",
  27: "ポロ",
  28: "水球",
  29: "カヌーポロ",
  30: "サイクルポロ",
  31: "ハードコートバイクポロ",
  32: "アルティメット",
  33: "ビーチアルティメット",
  34: "オーストラリアンフットボール",
  35: "バスケットボール",
  36: "ビーチバスケットボール",
  37: "ウォーターバスケットボール",
  38: "車椅子バスケットボール",
  39: "ゲーリックフットボール",
  40: "ハーリング",
  41: "チュックボール",
  42: "アメリカンフットボール",
  43: "カナディアンフットボール",
  44: "タッチフットボール",
  45: "フラッグフットボール",
  46: "ラグビー",
  47: "ウィルチェアーラグビー",
  48: "タッチラグビー",
  49: "タグラグビー",
  50: "オズタグ",
  51: "電動車椅子サッカー",
  52: "ゴールボール",
  53: "ミニバスケットボール",
  54: "3x3バスケットボール",
  1000: "バレーボール",
  1001: "9人制バレーボール",
  1002: "ビーチバレーボール",
  1003: "ビリボール",
  1004: "ボサボール",
  1005: "エクアボレー",
  1006: "ファウストボール",
  1007: "フットバッグネット",
  1008: "フットバレー",
  1009: "フーヴァーボール",
  1010: "インディアカ",
  1011: "ペテカ",
  1012: "セパタクロー",
  1013: "スノーバレーボール",
  1014: "スローボール",
  1015: "ウォーリーボール",
  1016: "タスポニー",
  1017: "ビーチチュックボール",
  1018: "ウォールハンドボール",
  1019: "ママさんバレー",
  2000: "バドミントン",
  2001: "ボールバドミントン",
  2002: "バスクペロタ",
  2003: "フロンテニス",
  2004: "シャレ",
  2005: "ハイアライ",
  2006: "ビーチテニス",
  2007: "ミニテン",
  2008: "パデル",
  2009: "パレタフロントン",
  2010: "ペロタミシュテカ",
  2011: "ピックルボール",
  2012: "プラットフォームテニス",
  2013: "キアンボール",
  2014: "ラケットボール",
  2015: "ラケッツ",
  2016: "リアルテニス",
  2017: "軟式テニス",
  2018: "スピードボール",
  2019: "クロスミントン",
  2020: "スカッシュ",
  2021: "ハードボールスカッシュ",
  2022: "スカッシュテニス",
  2023: "スティッケ",
  2024: "卓球",
  2025: "テニス",
  2026: "エスキーテニス",
  2027: "バウンドテニス",
  2028: "フリーテニス",
  2029: "新卓球",
  3000: "剣道",
  3001: "なぎなた",
  3002: "柔道",
  3003: "空手道",
  3004: "相撲",
  10000: "ソフトボール",
};

const meta: Meta<typeof SportIcon> = {
  component: SportIcon,
  title: "Components/Icons/SportIcon",
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    sportId: {
      control: "select",
      options: Object.keys(sportIdComponentMap).map(
        (sportId) => `${sportId}: ${sportIdToJapaneseName[Number(sportId)]}`
      ),
      mapping: Object.fromEntries(
        Object.keys(sportIdToJapaneseName).map((sportId) => [
          `${sportId}: ${sportIdToJapaneseName[Number(sportId)]}`,
          Number(sportId),
        ])
      ),
      description: "sportId",
      table: {
        type: { summary: "number" },
      },
    },
    size: {
      control: "radio",
      options: iconSizeValues,
      description: "サイズ",
      table: {
        type: { summary: iconSizeValues.join("|") },
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: colorValues,
      description: "アイコンカラー",
      table: {
        type: { summary: colorValues.join("|") },
        defaultValue: { summary: "primary" },
      },
    },
  },
};

export default meta;

const Template: StoryFn<typeof SportIcon> = (args) => <SportIcon {...args} />;
export const Default = Template.bind({});
