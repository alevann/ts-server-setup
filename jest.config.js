module.exports = {
    coveragePathIgnorePatterns: [
        '/node_modules/',
        '/build/'
    ],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    coverageReporters: [
        'json-summary',
        'lcov',
        'text',
    ],
    testEnvironment: 'node',
    setupFiles: ['./src/ext.ts'],
    moduleNameMapper: {
        '@root/(.*)': '<rootDir>/$1',
        '@src/(.*)': '<rootDir>/src/$1'
    }
}