module.exports = {
  useTabs: false, // Indent lines with tabs instead of spaces.
  tabWidth: 2, // Specify the number of spaces per indentation-level.
  singleQuote: true, // Use single quotes instead of double quotes.

  printWidth: 1000,
  /**
   * Print trailing commas wherever possible.
   * Valid options:
   *   - "none" - no trailing commas
   *   - "es5" - trailing commas where valid in ES5 (objects, arrays, etc)
   *   - "all" - trailing commas wherever possible (function arguments)
   */
  trailingComma: 'none',
  /**
   * Do not print spaces between brackets.
   * If true, puts the > of a multi-line jsx element at the end of the last line instead of being
   * alone on the next line
   */
  bracketSameLine: false,
  semi: false,
  /**
   * Add additional logging from prettierrc (not prettier itself).
   * Defaults to false
   * Valid options:
   * - true - enable additional logging
   * - false - disable additional logging
   */
  rcVerbose: true,

  /**
   * Print spaces between brackets in object literals.

    Valid options:

    true - Example: { foo: bar }.
    false - Example: {foo: bar}.
   */
  bracketSpacing: true,
  arrowParens: 'always',
  enableDebugLogs: true,
  jsxSingleQuote: true,
}
