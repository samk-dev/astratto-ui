export default defineAppConfig({
  app: {
    name: 'Astratto UI',
    description: '',
    mainNavigation: [
      {
        label: 'Documentation',
        href: '/docs',
        iconLeading: 'file-text',
        iconTrailing: '',
        target: '_self'
      },
      {
        label: 'Theme Builder',
        href: '/',
        iconLeading: 'settings',
        iconTrailing: '',
        target: '_self'
      },
      {
        label: 'Changelog',
        href: 'https://github.com/samk-dev/astratto-ui/CHANGELOG.md',
        iconLeading: 'git-branch',
        iconTrailing: '',
        target: '_blank'
      }
    ],
    git: {
      service: 'github',
      url: 'https://github.com/samk-dev/astratto-ui',
      urlDocs: 'https://github.com/samk-dev/astratto-ui/docs'
    },
    uikitUrl: 'https://getuikit.com',
    nuxtUrl: 'https://nuxt.com'
  },
  pages: {
    index: {
      blocks: {
        hero: {
          title: 'Astratto UI',
          description: '',
          cta: [
            {
              label: 'Get Started',
              href: '/docs',
              iconLeading: '',
              iconTrailing: 'arrow-right'
            },
            {
              label: 'Features',
              href: '#features',
              iconLeading: '',
              iconTrailing: 'arrow-down'
            }
          ],
          command: 'pnpm install -D @samk-dev/astratto-ui'
        },
        features: [],
        credits: []
      }
    }
  },
  docs: {}
})
