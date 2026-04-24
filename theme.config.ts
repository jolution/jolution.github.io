import { defineThemeConfig } from '@utils/defineThemeConfig'

export default defineThemeConfig({
  name: 'Jolution',
  id: 'jolution.github.io',
  logo: null,
  seo: {
    title: 'Jolution',
    description:
      'jolution – digitale Lösungen und Web-Entwicklung.',
    author: 'jolution',
    image: null,
  },
  colors: {
    primary: '#0099cc',
    secondary: '#337ab7',
    neutral: '#292c2f',
    outline: '#ff9900',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Go to our GitHub profile, opens in new tab',
        href: 'https://github.com/jolution',
        icon: 'lucide:github',
        external: true,
        excludeFromLauncher: true,
      },
      {
        type: 'link',
        label: 'Go to our Instagram profile, opens in new tab',
        href: 'https://www.instagram.com/jolution/',
        icon: 'lucide:instagram',
        external: true,
        excludeFromLauncher: true,
      },
    ],
  },
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/jolution',
      icon: 'lucide:github',
    },
  ],
})
