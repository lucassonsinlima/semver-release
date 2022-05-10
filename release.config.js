/* eslint-disable */

const defaultRules = require('@semantic-release/commit-analyzer/lib/default-release-rules')

module.exports = {
  branches: ['main'],
  plugins: [
    ['@semantic-release/commit-analyzer', {
        preset: 'angular',
        releaseRules: [
          ...defaultRules,
          {
            type: 'build',
            scope: 'deps',
            release: 'patch'
          },
          {
            type: 'chore',
            scope: 'deps',
            release: 'patch'
          },
          { release: 'patch' }
        ],
    }],
    ['@semantic-release/release-notes-generator', {
      preset: 'conventionalcommits',
      presetConfig: {
        types: [
          {
            type: 'build',
            section: 'Dependencies and Other Build Updates',
            hidden: false
          },
          {
            type: 'chore',
            section: 'Small changes',
            hidden: false
          }
        ]
      },
      writerOpts: {
        commitsSort: ['subject', 'scope']
      }
    }],
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
