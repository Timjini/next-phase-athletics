import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@react-google-maps/api$': '<rootDir>/__mocks__/@react-google-maps/api.ts',
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        // Enable JSX processing
        babelConfig: {
          presets: ['@babel/preset-react']
        }
      }
    ]
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-google-maps/api)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/dist/'],
};

export default config;