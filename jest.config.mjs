export default {
    // テスト環境を指定
    testEnvironment: 'node',

    // ES Modulesを使用することを明示
    type: 'module',

    // トランスフォームを無効化（Pure ESM プロジェクトの場合）
    transform: {},

    // テストファイルのパターンを指定
    testMatch: ['**/*.test.js', '**/*.test.mjs'],

    // コードカバレッジの設定
    collectCoverage: true,
    coverageDirectory: 'coverage',

    // モジュールのファイル拡張子を指定
    moduleFileExtensions: ['js', 'mjs'],

    // テスト実行前の準備スクリプト（必要な場合）
    // setupFiles: ['<rootDir>/jest.setup.js'],

    // グローバルな設定（必要な場合）
    // globals: {},
};