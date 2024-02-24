'use strict';

module.exports = {

  types: [
    {value: ':tada: init',                       name: '初始化:  初次提交'},
    {value: ':sparkles: feat',                   name: '特性:    一个新的特性'},
    {value: ':bug: fix',                         name: '修复:    修复一个Bug'},
    {value: ':ambulance: fix-big',               name: '修复:    修复重大Bug，重要补丁'},
    {value: ':memo: docs',                       name: '文档:    变更的只有文档'},
    {value: ':lipstick: UI',                     name: 'UI:      更新 UI 和样式文件'},
    {value: ':art: style',                       name: '格式:    不影响代码含义的更改(空格, 分号等格式修复)'},
    {value: ':recycle: refactor',                name: '重构:    代码重构，注意和特性、修复区分开'},
    {value: ':bento: add',                       name: '添加:    添加代码或文件'},
    {value: ':fire: delete',                     name: '删除:    移除代码或文件'},
    {value: ':zap: perf',                        name: '性能:    提升性能'},
    {value: ':white_check_mark: test',           name: '测试:    添加一个测试'},
    {value: ':package: build',                   name: '构建:    变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）'},
    {value: ':green_heart: ci',                  name: '配置:    更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等'},
    {value: ':wrench: chore',                    name: '工具:    开发工具变动(构建、脚手架工具等)'},
    {value: ':lock: safe',                       name: '安全:    修复安全问题'},
    {value: ':clown_face: merge-conflict',       name: '冲突:    解决冲突'},
    {value: ':twisted_rightwards_arrows: merge', name: '合并:    合并分支'},
    {value: ':rewind: revert',                   name: '回滚:    代码回退'},
    {value: ':construction: WIP',                name: '开发:    开发中'},
    {value: ':bookmark: public',                 name: '发行:    发行/版本'},
  ],

  scopes: [
    {name: '代码'},
    {name: '配置'},
    {name: '版本'},
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: 'TICKET-',
  ticketNumberRegExp: '\\d{1,5}',

  // it needs to match the value for field type. Eg.: 'fix'
  scopeOverrides: {
    // fix: [
    //   {name: 'merge'},
    //   {name: 'style'},
    //   {name: 'e2eTest'},
    //   {name: 'unitTest'}
    // ]
  },
  // override the messages, defaults are as follows
  messages: {
    type: '选择一种你的提交类型:',
    scope: '选择一个scope (可选):',
    // used if allowCustomScopes is true
    customScope: '此更改的范围:',
    subject: '短说明:\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },

  allowCustomScopes: true,
  allowBreakingChanges: [
    ':sparkles: feat',
    ':bug: fix',
    ':ambulance: fix-big',
    // ':memo: docs',
    ':lipstick: UI',
    ':art: style',
    ':recycle: refactor',
    ':bento: add',
    ':fire: delete',
    ':zap: perf',
    ':white_check_mark: test',
    ':package: build',
    ':green_heart: ci',
    ':wrench: chore',
    ':lock: safe',
    // ':clown_face: merge-conflict',
    ':twisted_rightwards_arrows: merge',
    ':rewind: revert',
    ':construction: WIP',
  ],
  // skip any questions you want
  skipQuestions: [],

  // limit subject length
  subjectLimit: 100,
  breaklineChar: '|', // It is supported for fields body and footer.
  footerPrefix : 'ISSUES CLOSED:',
  askForBreakingChangeFirst : false, // default is false
};
