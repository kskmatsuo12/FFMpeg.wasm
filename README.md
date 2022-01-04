# FFMpeg.wasm

FFMpeg.wasmを使うためには、

```
  header("Cross-Origin-Opener-Policy", "same-origin");
  header("Cross-Origin-Embedder-Policy", "require-corp");
```

をレスポンスヘッダーに載せる必要があるので、Expressを使っている。

（server.js参照）

ローカルサーバーを立てるコマンド

```
node ./server.js
```

public に全部ぶち込めばローカルサーバー以外通常のHTMLと同じ感覚で書けます
