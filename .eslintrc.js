module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:nuxt/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: [],
    // add your custom rules here
    rules: {
        '@typescript-eslint/no-unused-vars': 1,
    },
};
