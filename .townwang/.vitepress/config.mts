import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Watch Theme",
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }] ,
      ['link',{ rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }],
  ],
  description: "A hub for diverse Android open-source projects. For more open-source content, search the official account 👉 'OpenApe'",
    themeConfig: {
      logo: { src: '/logo.svg', width: 24, height: 24 },
	sitemap: {
		hostname: 'https://watch.townwang.com'
	},
    footer: {
      copyright: "Copyright  © 2012-2025 <a href='https://github.com/Townwang'>Townwang</a>"
    },
  }
})
