---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const coreMembers = [ 
	{
		avatar: 'https://gadgetbridge.org/assets/static/screenshots/graphic/pairing.png',
		name: 'gadgetbridge',
		links: [
		  { 
	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/app/gadgetbridge.nightly_0.87.1.apk' }
		]
	},
	
  ]
const partners = [	
		{
		avatar: 'https://watch.townwang.com/watch/theme/3D机械苍穹/img.png',
		name: '3D机械苍穹',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/3D机械苍穹/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/3D建模动态/img.png',
		name: '3D建模动态',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/3D建模动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/3D麒麟机械/img.png',
		name: '3D麒麟机械',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/3D麒麟机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/GT系列玺佳10in1/img.png',
		name: 'GT系列玺佳10in1',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/GT系列玺佳10in1/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/蹦迪太空人2/img.png',
		name: '蹦迪太空人2',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/蹦迪太空人2/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/超强商务/img.png',
		name: '超强商务',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/超强商务/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/超清机械夜光/img.png',
		name: '超清机械夜光',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/超清机械夜光/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/动态麒麟机械/img.png',
		name: '动态麒麟机械',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/动态麒麟机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/动态极奢绿鬼/img.png',
		name: '动态极奢绿鬼',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/动态极奢绿鬼/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/多彩情绪/img.png',
		name: '多彩情绪',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/多彩情绪/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/多色复古棱晶/img.png',
		name: '多色复古棱晶',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/多色复古棱晶/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/飞龙承运换景/img.png',
		name: '飞龙承运换景',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/飞龙承运换景/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/高山吸金纳福/img.png',
		name: '高山吸金纳福',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/高山吸金纳福/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/航空宇航员/img.png',
		name: '航空宇航员',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/航空宇航员/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/机甲游龙/img.png',
		name: '机甲游龙',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/机甲游龙/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/极境征途/img.png',
		name: '极境征途',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/极境征途/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/精英高端机械/img.png',
		name: '精英高端机械',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/精英高端机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/蓝龙机械动态/img.png',
		name: '蓝龙机械动态',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/蓝龙机械动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/亮橙动态机械/img.png',
		name: '亮橙动态机械',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/亮橙动态机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/梦幻宇宙动态/img.png',
		name: '梦幻宇宙动态',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/梦幻宇宙动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/破晓雪山徒步/img.png',
		name: '破晓雪山徒步',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/破晓雪山徒步/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/情绪小毛崽/img.png',
		name: '情绪小毛崽',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/情绪小毛崽/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全景城市天气/img.png',
		name: '全景城市天气',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/全景城市天气/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全景星际双模/img.png',
		name: '全景星际双模',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/全景星际双模/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全能超级桌面/img.png',
		name: '全能超级桌面',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/全能超级桌面/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/商务机械黄黑/img.png',
		name: '商务机械黄黑',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/商务机械黄黑/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/奢华绿鬼新版/img.png',
		name: '奢华绿鬼新版',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/奢华绿鬼新版/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/至尊斗战圣佛/img.png',
		name: '至尊斗战圣佛',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/至尊斗战圣佛/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/智能银河商务/img.png',
		name: '智能银河商务',
		links: [
		  { 	icon: {
  svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Download</title><path d="M19 9h-4V4H9v5H5l7 7 7-7zM4 19v2h16v-2H4z" fill="currentColor"/><path d="M12 13l-4-4h3V3h2v6h3l-4 4z" fill="currentColor"/></svg>'
}, link: 'https://watch.townwang.com/watch/theme/智能银河商务/download.hwt' }
		]
	}
	]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>App</template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members="coreMembers" />
  <VPTeamPageSection>
    <template #title>watch theme</template>
    <template #members>
      <VPTeamMembers size="small" :members="partners" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
