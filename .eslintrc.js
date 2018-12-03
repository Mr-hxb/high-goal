// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
	},
	extends: [
		// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
		// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
		'plugin:vue/essential',
		// https://github.com/standard/standard/blob/master/docs/RULES-en.md
		'standard'
	],
	// required to lint *.vue files
	plugins: [
		'vue'
	],
	// add your custom rules here
	rules: {
		// allow async-await
		'generator-star-spacing': 'off',
		// allow debugger during development
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'quotes': [2, 'single'], // 建议使用单引号
		'semi': [2, 'always'], // 语句强制分号结尾
		'indent': [2, 4, { 'SwitchCase': 1 }], // 缩进风格, switch, case中使用缩进

		'space-before-function-paren': [2, {
			'anonymous': 'always',
			'named': 'never'
		}], // 函数定义时括号前面有2空格（匿名函数需要，命名函数不需要）

		'vue/html-indent': [
			'error',
			4, // 缩进4个空格
			{
				'attribute': 1,
				'closeBracket': 0,
				'alignAttributesVertically': true,
				'ignores': []
			}
		] // 在<template>中强制执行一致的缩进
	}
}
