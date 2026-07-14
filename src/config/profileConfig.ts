import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/Linpianpian.jpg",

	// 名字
	name: "橘子·露菲亚·柯尔",

	// 个人签名
	bio: "你好啊，旅人，不一起喝杯茶吗？",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qun.qq.com/universal-share/share?ac=1&authKey=RYwpvGL8CHxaRgsiv6lPUVWyDrsNyZXOg37jhR1LQPA8jNxp%2B5bd90SvqtWQfVf9&busi_data=eyJncm91cENvZGUiOiI0Nzg0NzE4MzciLCJ0b2tlbiI6Ikd5NllUQmhycG9TVnFORU1Jelh0NDZiL3pqTEhlcEltaG5keGZJK1lNWVVMbTFaT2dPYjgrcSsxUndRTktsaUciLCJ1aW4iOiI0Njg1OTU4MzEifQ==&data=daYe02mis7uazS2560851W4FyidHh2nESIyb-OcWmGppP7XenTw9zj4e3Ceu0sWaoLGCcyVWxM8jwEgJFIRyxQ&svctype=4&tempid=h5_group_info",
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/PmaruOrange",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:468595831@qq.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
