import { defineConfig } from 'vitepress'

export default defineConfig({
title: "watch Theme",
themeConfig: {
logo: { src: '/logo.svg', width: 24, height: 24 },
socialLinks: [
      { icon: 'github', link: 'https://github.com/Townwang' }
    ],
sitemap: {
		hostname: 'https://townwang.com'
	},
footer: {
      copyright: "Copyright  © 2012-2025 <a href='https://github.com/Townwang'>Townwang</a>"
    },
  }, 
lang: "zh-Hans",
base: '/'})
