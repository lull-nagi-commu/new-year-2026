# New Year 2026
## Github Pages
> Github Actionsにて自動デプロイをしています。

[https://lull-nagi-commu.github.io/new-year-2026/](https://lull-nagi-commu.github.io/new-year-2026/)

## 開発フロー
1. `main`ブランチから開発ブランチを作成
    - ブランチ命名規則
        - 新機能: `feat/xxx`
        - 修正: `fix/xxx`
        - 内部修正: `chore/xxx`
        - リファクタリング: `refactor/xxx`
2. 開発
    1. はじめに`npm install`を実行
    2. SCSSファイルを修正したら`npm run build:css`を実行
3. 「開発ブランチ → `staging`ブランチ」のPR作成
4. マージ
5. Github Actionsにて`src/styles/scss/*.scss`を`src/styles/*.css`へコンパイル
6. Github Actionsにて自動的にPR作成し、`staging`ブランチから`main`ブランチへマージ
    - コンフリクト回避
7. Github Pagesへ自動デプロイ
