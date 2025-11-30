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
		avatar: '/',
		name: 'gadgetbridge',
		links: [
		  { icon: {
		  svg: '<svg id="svg" fill="#000000" stroke="#000000" width="200px" height="200px" version="1.1" viewBox="144 144 512 512" xmlns="http://www.w3.org/2000/svg">
    <g id="IconSvg_bgCarrier" stroke-width="0"></g>
    <g id="IconSvg_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC"></g>
     <g id="IconSvg_iconCarrier">
      <path xmlns="http://www.w3.org/2000/svg" d="M21 12a9 9 0 1 0 -9 9"/>
<path xmlns="http://www.w3.org/2000/svg" d="M3.6 9h16.8"/>
<path xmlns="http://www.w3.org/2000/svg" d="M3.6 15h8.4"/>
<path xmlns="http://www.w3.org/2000/svg" d="M11.578 3a17 17 0 0 0 0 18"/>
<path xmlns="http://www.w3.org/2000/svg" d="M12.5 3c1.719 2.755 2.5 5.876 2.5 9"/>
<path xmlns="http://www.w3.org/2000/svg" d="M18 14v7m-3 -3l3 3l3 -3"/>

      </g>
      </svg>'
		  }, link: 'https://watch.townwang.com/watch/app/gadgetbridge.nightly_0.87.1.apk' }
		]
	},
	
  ]
const partners = [	
		{
		avatar: 'https://watch.townwang.com/watch/theme/3D机械苍穹/img.png',
		name: '3D机械苍穹',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/3D机械苍穹/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/3D建模动态/img.png',
		name: '3D建模动态',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/3D建模动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/3D麒麟机械/img.png',
		name: '3D麒麟机械',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/3D麒麟机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/GT系列玺佳10in1/img.png',
		name: 'GT系列玺佳10in1',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/GT系列玺佳10in1/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/蹦迪太空人2/img.png',
		name: '蹦迪太空人2',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/蹦迪太空人2/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/超强商务/img.png',
		name: '超强商务',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/超强商务/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/超清机械夜光/img.png',
		name: '超清机械夜光',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/超清机械夜光/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/动态麒麟机械/img.png',
		name: '动态麒麟机械',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/动态麒麟机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/动态极奢绿鬼/img.png',
		name: '动态极奢绿鬼',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/动态极奢绿鬼/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/多彩情绪/img.png',
		name: '多彩情绪',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/多彩情绪/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/多色复古棱晶/img.png',
		name: '多色复古棱晶',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/多色复古棱晶/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/飞龙承运换景/img.png',
		name: '飞龙承运换景',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/飞龙承运换景/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/高山吸金纳福/img.png',
		name: '高山吸金纳福',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/高山吸金纳福/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/航空宇航员/img.png',
		name: '航空宇航员',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/航空宇航员/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/机甲游龙/img.png',
		name: '机甲游龙',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/机甲游龙/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/极境征途/img.png',
		name: '极境征途',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/极境征途/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/精英高端机械/img.png',
		name: '精英高端机械',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/精英高端机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/蓝龙机械动态/img.png',
		name: '蓝龙机械动态',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/蓝龙机械动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/亮橙动态机械/img.png',
		name: '亮橙动态机械',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/亮橙动态机械/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/梦幻宇宙动态/img.png',
		name: '梦幻宇宙动态',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/梦幻宇宙动态/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/破晓雪山徒步/img.png',
		name: '破晓雪山徒步',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/破晓雪山徒步/download.hwt' }
		]
	},
	{
		avatar: 'https://watch.townwang.com/watch/theme/情绪小毛崽/img.png',
		name: '情绪小毛崽',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/情绪小毛崽/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全景城市天气/img.png',
		name: '全景城市天气',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/全景城市天气/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全景星际双模/img.png',
		name: '全景星际双模',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/全景星际双模/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/全能超级桌面/img.png',
		name: '全能超级桌面',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/全能超级桌面/download.hwt' }
		]
	},	
	{
		avatar: 'https://watch.townwang.com/watch/theme/商务机械黄黑/img.png',
		name: '商务机械黄黑',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/商务机械黄黑/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/奢华绿鬼新版/img.png',
		name: '奢华绿鬼新版',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/奢华绿鬼新版/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/至尊斗战圣佛/img.png',
		name: '至尊斗战圣佛',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/至尊斗战圣佛/download.hwt' }
		]
	},		
	{
		avatar: 'https://watch.townwang.com/watch/theme/智能银河商务/img.png',
		name: '智能银河商务',
		links: [
		  { icon: 'github', link: 'https://watch.townwang.com/watch/theme/智能银河商务/download.hwt' }
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
