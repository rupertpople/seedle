module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:cypress/recommended"
    ],
    
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest"
    },
    "plugins": [
        "react" 
    ],
    "rules": {
        // "react/react-in-jsx-scope": "off",
        // "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    },
    "settings": {
        react: {
          version: "detect"
        }
      }
}
