module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "no-use-before-define": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "quotes": [
      2,
      "single",
      { "avoidEscape": true, "allowTemplateLiterals": true }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": "80"
      }
    ]
  }
}
