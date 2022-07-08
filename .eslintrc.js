module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "react-hooks"],
  extends: ["react-app", "react-app/jest", "prettier"],
  // 체크에서 제외.
  ignorePatterns: ["node_modules/"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "warn",
      {
        additionalHooks: "useRecoilCallback",
      },
    ],
    // 화살표 함수에서 return 생략 가능하면 생략함.
    // ex. () => { return 5; } 대신 () => 5 형식 사용.
    "arrow-body-style": ["error", "as-needed"],
  },
};
