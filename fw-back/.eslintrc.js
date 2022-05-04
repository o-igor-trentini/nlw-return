module.exports = {
    env: {
        "es2021": true,
        "node": true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended",
        // "plugin:prettier/recommended",
        // "prettier/@typescript-eslint"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        "@typescript-eslint",
        "prettier"
    ],
    rules: {
        // "indent": [
        //     "error",
        //     "space"
        // ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "prettier/prettier": "error",
        // "import/extensions": [
        //     "error",
        //     "ignorePackages",
        //     {
        //         "ts": "never"
        //     }
        // ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
}
