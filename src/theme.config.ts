import { defineThemeConfig } from './types'

export default defineThemeConfig({
  site: 'https://blog.neonpie.xyz',
  title: "Neon Pie's Blog",
  description:
    'The awesome technical blog of Neonpie will help you understand more and be less frustrated with new tech.',
  author: 'Neon Pie',
  navbarItems: [
    { label: 'Blog', href: '/posts' },
    { label: 'Projects', href: '/projects' },
    { label: 'Tags', href: '/tags' },
    { label: 'About', href: '/about' },
    {
      label: 'Other pages',
      children: [
        { label: 'Landing page', href: '/' },
        { label: '404 page', href: '/404' },
        { label: 'Author: Neon Pie', href: '/authors/neonpie' },
        { label: 'Tag: documentation', href: '/tags/documentation' }
      ]
    }
  ],
  footerItems: [
    {
      icon: 'tabler--brand-github',
      href: 'https://github.com/neonpie',
      label: 'Github'
    },
    {
      icon: 'tabler--brand-youtube',
      href: 'https://www.youtube.com/channel/UCV3-2vJmpa4hzbjEhNMNs9w',
      label: 'YouTube'
    },
    {
      icon: 'tabler--rss',
      href: '/feed.xml',
      label: 'RSS feed'
    }
  ],

  // optional settings
  locale: 'en',
  mode: 'dark',
  modeToggle: true,
  colorScheme: 'scheme-mono',
  openGraphImage: undefined,
  postsPerPage: 4,
  projectsPerPage: 3,
  scrollProgress: false,
  scrollToTop: true,
  tagIcons: {
    tailwindcss: 'tabler--brand-tailwind',
    astro: 'tabler--brand-astro',
    documentation: 'tabler--book'
  },
  shikiThemes: {
    light: 'vitesse-light',
    dark: 'vitesse-black'
  }
})
