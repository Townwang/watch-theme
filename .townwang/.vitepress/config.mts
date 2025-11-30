import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "WatchTheme",
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }] ,
      ['link',{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
    themeConfig: {
      logo: { src: '/logo.svg', width: 24, height: 24 },
    nav: [
      { text: 'Home', link: 'https://townwang.com/'  ,target: '_self',rel: 'sponsored'},
	  { text: 'Watch', link: '/',  }
    ],
    socialLinks: [
	  { icon: 'github', link: 'https://github.com/Townwang' }
    ],
	sitemap: {
		hostname: 'https://watch.townwang.com'
	},
    footer: {
	  message: 'Released under the MIT License.',
      copyright: "Copyright  © 2012-2025 <a href='https://github.com/Townwang'>Townwang</a>"
    },
  }
})
