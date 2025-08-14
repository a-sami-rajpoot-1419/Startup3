module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-length': 'short',
    'selector-max-id': 0,
    'no-duplicate-selectors': true,
    'order/properties-alphabetical-order': null,
    'declaration-block-no-redundant-longhand-properties': true,
  'font-weight-notation': 'numeric',
  /* Relaxations for legacy refactor CSS (avoid 300+ noisy warnings) */
  'declaration-block-single-line-max-declarations': null,
  'media-feature-range-notation': null,
  'color-function-notation': null,
  'alpha-value-notation': null,
  'rule-empty-line-before': null,
  'at-rule-empty-line-before': null,
  'comment-empty-line-before': null,
  'no-descending-specificity': null,
  'selector-pseudo-element-colon-notation': null,
  'length-zero-no-unit': null,
  'shorthand-property-no-redundant-values': null,
  'font-family-name-quotes': null,
  'declaration-block-no-duplicate-properties': [true, { ignore: ['consecutive-duplicates-with-different-values'] }],
  },
  ignoreFiles: ['dist/**/*']
};
