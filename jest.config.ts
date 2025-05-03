import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@react-google-maps/api$': '<rootDir>/__mocks__/@react-google-maps/api.ts',
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.test.json',
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