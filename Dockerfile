# ベースイメージの設定
FROM node:20.17.0

# 作業ディレクトリの設定
WORKDIR /React-App

# パッケージのインストール
COPY React-App/package*.json .
RUN npm install

# アプリケーションコードのコピー
COPY React-App .

# アプリケーションのビルド
RUN npm run build

# サーバーの起動
CMD ["npm", "start"]
