/** @type {import('jest').Config} */
module.exports = {
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    testMatch: ['**/*.test.ts', '**/*.spec.ts'],
    transform: {
        '^.+\\.ts$': [
            'ts-jest',
            {
                // Hybrid module kind (nodenext) warning; isolatedModules is left off for Nest's decorator metadata.
                diagnostics: { ignoreCodes: [151002] },
            },
        ],
    },
};
