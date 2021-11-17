# template-ts_jest_vscode

## About This Repository
This repository is intended to serve as a base for projects using Typescript. Development is assumed to be done using VisualStudioCode, and JEST is used as the testing framework. 
このリポジトリは、Typescriptを使ったプロジェクトのベースとなることを目的としています。開発は、VisualStudioCodeを使用することを前提とし、テストフレームワークとしてJESTを使用することを想定しています。

## Usage

### 開発中のテスト実行(ts-node使用)
```
npm run dev  
```

### 開発中のテスト実行+自動リスタート(ts-node-dev使用)
```
npm run dev:watch  
```

### TypeScript -> JavaScript に変換
```
npm run build
```

### 生成されたJavaScriptを実行
```
npm run start  
```
または  
```
npm start  
```

### 生成されたファイルを削除
```
npm run clean
```

### テストコードの一括実行(JEST)
```
npm test
```

## Usage (実行とデバッグ)

### ts-nodeでデバッグ
src/app.jsをデバッグモードで起動する。

### 現在のJESTファイルをデバッグ
エディタでアクティブになっているJESTファイルをデバッグ実行する。
