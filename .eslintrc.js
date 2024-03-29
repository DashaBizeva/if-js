module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["airbnb/base"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "eol-last": "off"
    }
};
