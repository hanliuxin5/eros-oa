// appBoard，mediator 不建议进行修改 如果修改了 也请对应修改
module.exports = {
    'eslint': false,
    'webpackWarnings': false,
    'exports': [
        // appBoard
        'js/config/index.js',
        // mediator
        'js/mediator/index.vue',
        // oa
        'js/pages/oa/test.vue',
        'js/pages/oa/module/contacts/department.vue',
        'js/pages/oa/module/contacts/organize.vue',
        'js/pages/oa/module/contacts/group.vue'

    ],
    'alias': {
        'Components': 'js/components',
        'Common': 'js/common',
        'Config': 'js/config',
        'Widget': 'js/widget',
        'Pages': 'js/pages',
        'Utils': 'js/utils'
    },
    // 'diff': {
    //     'pwd': '/Users/yangmingzhe/Work/opensource/eros-diff-folder',
    //     'proxy': 'https://app.weex-eros.com/source'
    // },
    'server': {
        'path': './',
        'port': 8889
    },
    // 'mockServer': {
    //     'port': 52077,
    //     'mockDir': './dist/mock'
    // },
    'socketServer': {
        'port': 8890,
        'switch': true
    }
}
