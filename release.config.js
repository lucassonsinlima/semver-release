const defaultRules = require('@semantic-release/commit-analyzer/lib/default-release-rules.js')

module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
        preset: 'angular',
        releaseRules: [
          ...defaultRules,
          { release: 'patch' }
        ],
    }],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/git', {
      assets: [
        'dist/**/*.{js,css}',
        'package.json',
        'package-lock.json'
      ],
      message: 'perf(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
    }],
    '@semantic-release/npm',
    '@semantic-release/github'
  ],
}