module.exports = {
  roots: ['<rootDir>'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  globals: {
    __DEV__: true,
    'ts-jest': {
      diagnostics: false
    }
  },
  moduleNameMapper: {
    'react-live-route': '<rootDir>/src'
  }
}
