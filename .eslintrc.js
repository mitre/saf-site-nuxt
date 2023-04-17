module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'plugin:vue/essential',
    './node_modules/eslint-config-airbnb-base/rules/best-practices.js',
    './node_modules/eslint-config-airbnb-base/rules/errors.js',
    './node_modules/eslint-config-airbnb-base/rules/es6.js',
    './node_modules/eslint-config-airbnb-base/rules/imports.js',
    './node_modules/eslint-config-airbnb-base/rules/node.js',
    './node_modules/eslint-config-airbnb-base/rules/strict.js',
    './node_modules/eslint-config-airbnb-base/rules/style.js',
    './node_modules/eslint-config-airbnb-base/rules/variables.js',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'prettier' // Make sure this is the last
  ],
  plugins: ['vue'],
  globals: {
    // Add GraphQL functions as globals to fix no-undef eslint errors
    GqlGetBlogDataFromAuthor: 'readonly',
    GqlGetBlogDataFromID: 'readonly',
    GqlGetBlogAuthor: 'readonly',
    GqlBlogPosts: 'readonly',
    GqlGetIndexDocumentation: 'readonly',
    GqlGetDocumentation: 'readonly',
    GqlGetFaqByQuestionNumber: 'readonly',
    GqlGetTrainingData: 'readonly',
    GqlGetScheduleData: 'readonly',
    GqlGetGuidanceDataFromID: 'readonly',
    GqlGetValidateData: 'readonly',
    GqlGetHardenData: 'readonly',
    GqlFAQs: 'readonly',
    useNuxtApp: 'readonly',
    useRoute: 'readonly',
    useAsyncData: 'readonly',
    navigateTo: 'readonly',
    nextTick: 'readonly',
    onBeforeUnmount: 'readonly',
    onMounted: 'readonly',
    reactive: 'readonly',
    ref: 'readonly',
    toRefs: 'readonly'
  },
  overrides: [
    {
      files: ['*.{ts,tsx}'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended']
    }
  ],
  // add your custom rules here
  rules: {}
};
