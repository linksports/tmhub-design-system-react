import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./";
import { colorValues, iconSizeValues } from "./Icons.types";

const AddIcon = Icons.Iconography.Add;

export default {
  title: "Components/Icons",
  component: AddIcon,
  render: (args) => <AddIcon {...args} />,
  argTypes: {
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
  parameters: {
    chromatic: { disableSnapshot: true },
  },
} as Meta<typeof AddIcon>;

export const Iconography: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.Iconography).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};

export const SportIcons: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.SportIcons).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{`${name}(${
            componentToJapaneseName[name as keyof typeof Icons.SportIcons]
          })`}</span>
        </li>
      ))}
    </ul>
  ),
};

export const TeamnaviSportIcons: StoryObj<typeof AddIcon> = {
  render: (args) => (
    <ul style={{ display: "flex", flexFlow: "column", gap: "12px" }}>
      {Object.entries(Icons.TeamnaviSportIcons).map(([name, Icon]) => (
        <li key={name} style={{ display: "flex", alignItems: "center" }}>
          <Icon {...args} />
          <span style={{ marginLeft: 10 }}>{name}</span>
        </li>
      ))}
    </ul>
  ),
};

const componentToJapaneseName: Record<keyof typeof Icons.SportIcons, string> = {
  Lacrosse: "女子ラクロス/男子ラクロス",
  Qianball: "シャレ/キアンボール",
  // 以下は一意の和名
  Others: "その他",
  Futsal: "フットサル",
  Soccer: "サッカー",
  Baseball: "野球",
  AmputeeFootball: "アンプティサッカー",
  BeachSoccer: "ビーチサッカー",
  Radball: "サイクルサッカー",
  Handball: "ハンドボール",
  WheelchairHandball: "車椅子ハンドボール",
  RollBall: "ロールボール",
  FieldHockey: "フィールドホッケー",
  IceHockey: "アイスホッケー",
  SledgeHockey: "パラアイスホッケー",
  Bandy: "バンディ",
  Shinty: "シンティ",
  FloorBall: "フロアボール",
  FloorHockey: "フロアホッケー",
  QuadHockey: "ローラーホッケー",
  InlineHockey: "インラインホッケー",
  Broomball: "ブルームボール",
  Ringette: "リンゲット",
  Korfball: "コーフボール",
  Netball: "ネットボール",
  Ringball: "リングボール",
  Polo: "ポロ",
  WaterPolo: "水球",
  CanoePolo: "カヌーポロ",
  CyclePolo: "サイクルポロ",
  HardcourtBikePolo: "ハードコートバイクポロ",
  Ultimate: "アルティメット",
  BeachUltimate: "ビーチアルティメット",
  AustralianFootball: "オーストラリアンフットボール",
  Basketball: "バスケットボール",
  BeachBasketball: "ビーチバスケットボール",
  WaterBasketball: "ウォーターバスケットボール",
  WheelchairBasketball: "車椅子バスケットボール",
  GaelicFootball: "ゲーリックフットボール",
  Hurling: "ハーリング",
  Tchoukball: "チュックボール",
  AmericanFootball: "アメリカンフットボール",
  CanadianFootball: "カナディアンフットボール",
  TouchFootball: "タッチフットボール",
  FlagFootball: "フラッグフットボール",
  Rugby: "ラグビー",
  WheelchairRugby: "ウィルチェアーラグビー",
  TouchRugby: "タッチラグビー",
  TagRugby: "タグラグビー",
  Oztag: "オズタグ",
  PowerchairFootball: "電動車椅子サッカー",
  Goalball: "ゴールボール",
  MiniBasketball: "ミニバスケットボール",
  ThreeXThree: "3x3バスケットボール",
  Volleyball: "バレーボール",
  NineManVolleyball: "9人制バレーボール",
  BeachVolleyball: "ビーチバレーボール",
  Biribol: "ビリボール",
  Bossaball: "ボサボール",
  EcuaVolley: "エクアボレー",
  Fistball: "ファウストボール",
  FootbagNet: "フットバッグネット",
  Footvolley: "フットバレー",
  Hooverball: "フーヴァーボール",
  Indiaca: "インディアカ",
  Peteca: "ペテカ",
  SepakTakraw: "セパタクロー",
  SnowVolleyball: "スノーバレーボール",
  Throwball: "スローボール",
  Wallyball: "ウォーリーボール",
  Taspony: "タスポニー",
  BeachTchoukball: "ビーチチュックボール",
  WallHandball: "ウォールハンドボール",
  MotherSVolleyball: "ママさんバレー",
  Badminton: "バドミントン",
  BallBadminton: "ボールバドミントン",
  BasquePelota: "バスクペロタ",
  Frontenis: "フロンテニス",
  JaiAlai: "ハイアライ",
  BeachTennis: "ビーチテニス",
  Miniten: "ミニテン",
  Padel: "パデル",
  PaletaFronton: "パレタフロントン",
  PelotaMixteca: "ペロタミシュテカ",
  Pickleball: "ピックルボール",
  PlatformTennis: "プラットフォームテニス",
  Racquetball: "ラケットボール",
  Rackets: "ラケッツ",
  RealTennis: "リアルテニス",
  SoftTennis: "軟式テニス",
  SpeedBall: "スピードボール",
  Crossminton: "クロスミントン",
  Squash: "スカッシュ",
  HardballSquash: "ハードボールスカッシュ",
  SquashTennis: "スカッシュテニス",
  StickeTennis: "スティッケ",
  TableTennis: "卓球",
  Tennis: "テニス",
  EsciTennis: "エスキーテニス",
  BoundTennis: "バウンドテニス",
  FreeTennis: "フリーテニス",
  LargeBall: "新卓球",
  Kendo: "剣道",
  Naginata: "なぎなた",
  Judo: "柔道",
  Karatedo: "空手道",
  Sumo: "相撲",
  Softball: "ソフトボール",
};
