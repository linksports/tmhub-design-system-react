TeamHub Design System for ReactをNext.jsに適用するサンプル

## ライブラリのインストール

```
yarn add https://github.com/linksports/tmhub-design-system-react/
```

## Vanilla Extractの設定

基本的に [Vanilla Extract 公式](https://vanilla-extract.style/documentation/integrations/next/)
の手順に従って進めれば良いはずだが、一部ECSで使えないコードなども含まれているため記載しておく。


### プラグインのインストール

```
yarn add -D @vanilla-extract/next-plugin
```

### セットアップ

最新版であれば `next.config.mjs` が自動的に作られているはずなので、これを以下のように書き換える。

```
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['tmhub-design-system-react'],
};

export default withVanillaExtract(nextConfig);
```

他のプラグインやミドルウェアを併用するような場合、最終行あたりでネストさせる。

## プロバイダの組み込みとテーマ設定

`app/layout.tsx` あたりに組み込む。

```
import { DesignProvider } from 'tmhub-design-system-react';

// 中略

return (
  <html>
    <DesignProvider theme="teamhub" mode="auto" asChild>
      <body>
        {children}
      </body>
    </DesignProvider>
  </html>
);
```

プロバイダを挿入する位置はアプリケーションによって決めれば良いが、おそらく `asChild` で `body`
を乗っ取ってしまうのが一番簡単にページ全体に適用できる。

`Container` などをレイアウトに置くかなどは、アプリケーションのデザインによって決定。

## ページでのコンポーネント利用

呼び出して使うだけ。

```
import {
  Container,
  Button,
} from 'tmhub-design-system-react';

// 中略

return (
  <Container>
    <Button>Click!</Button>
  </Container>
);
```
