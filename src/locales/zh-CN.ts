export default {
  common: {
    add: '添加',
    addSuccess: '添加成功',
    edit: '编辑',
    editSuccess: '编辑成功',
    delete: '删除',
    deleteSuccess: '删除成功',
    save: '保存',
    saveSuccess: '保存成功',
    reset: '重置',
    action: '操作',
    export: '导出',
    exportSuccess: '导出成功',
    import: '导入',
    importSuccess: '导入成功',
    clear: '清空',
    clearSuccess: '清空成功',
    yes: '是',
    no: '否',
    confirm: '确定',
    download: '下载',
    noData: '暂无数据',
    wrong: '好像出错了，请稍后再试。',
    success: '操作成功',
    failed: '操作失败',
    verify: '验证',
    goToHomepage: '返回首页',
  },
  chat: {
    placeholder: '来说点什么吧...（Shift + Enter = 换行）',
    placeholderMobile: '来说点什么...',
    copy: '复制',
    copied: '复制成功',
    copyCode: '复制代码',
    clearChat: '清空会话',
    clearChatConfirm: '是否清空会话?',
    exportImage: '保存会话到图片',
    exportImageConfirm: '是否将会话保存为图片?',
    exportSuccess: '保存成功',
    exportFailed: '保存失败',
    usingContext: '上下文模式',
    turnOnContext: '当前模式下, 发送消息会携带之前的聊天记录',
    turnOffContext: '当前模式下, 发送消息不会携带之前的聊天记录',
    deleteMessage: '删除消息',
    deleteMessageConfirm: '是否删除此消息?',
    deleteHistoryConfirm: '确定删除此记录?',
    clearHistoryConfirm: '确定清空聊天记录?',
  },
  setting: {
    setting: '设置',
    general: '总览',
    config: '配置',
    avatarLink: '头像链接',
    name: '名称',
    description: '描述',
    resetUserInfo: '重置用户信息',
    chatHistory: '聊天记录',
    theme: '主题',
    language: '语言',
    api: 'API',
    reverseProxy: '反向代理',
    timeout: '超时',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
  },
  store: {
    local: '本地',
    online: '在线',
    title: '标题',
    description: '描述',
    clearStoreConfirm: '是否清空数据？',
    importPlaceholder: '请粘贴 JSON 数据到此处',
    addRepeatTitleTips: '标题重复，请重新输入',
    addRepeatContentTips: '内容重复：{msg}，请重新输入',
    editRepeatTitleTips: '标题冲突，请重新修改',
    editRepeatContentTips: '内容冲突{msg} ，请重新修改',
    importError: '键值不匹配',
    importRepeatTitle: '标题重复跳过：{msg}',
    importRepeatContent: '内容重复跳过：{msg}',
    onlineImportWarning: '注意：请检查 JSON 文件来源！',
    downloadError: '请检查网络状态与 JSON 文件有效性',
  },
  auth: {
    signInTo: '登录{appName}',
    signIn: '登录',
    verificationCode: '验证码',
    sendCode: '发送验证码',
    login: '登录',
    continue: '继续',
    invalidVerificationCode: '验证码无效',
    verificationCodeSent: '验证码已发送',
    pleaseTryAgainLater: '请稍后再试',
    invalidVerificationCodeOrExpired: '验证码无效或已过期',
    invalidEmailLinkOrExpired: '链接无效或已过期',
    phoneNumber: '手机号码',
    logout: '退出登录',
    signInWithGoogle: '使用 Google 账号登录',
    or: '或',
    signInWithEmail: '使用邮箱登录',
    signInWithPhone: '使用手机号登录',
    rememberMe: '记住我',
    sendLoginLink: '发送登录链接',
    email: '邮箱',
    loginLinkSent: '登录链接已发送',
    finishSignInTo: '完成 {0} 登录',
    finishSignIn: '完成登录',
    finishSignInRequiredEmailTips: '在其他浏览器打开链接？重新输入邮箱完成登录。',
    welcomeBack: '欢迎回来',
    returnToSignInPage: '返回登录页面',
    waitSecondsToSendMail: '请等待 {seconds} 秒后再次发送邮件',
    signInTips: '欢迎来到 {appName}，请登录以继续，若无账号将自动为您注册。',
  },
  admin: {
    userManagement: '用户管理',
    systemSettings: '系统设置',
    enable: '启用',
    disable: '禁用',
    disabled: '禁用中',
    enabled: '启用中',
    delete: '删除',
    uid: 'UID',
    email: '邮箱',
    phoneNumber: '手机号',
    displayName: '显示名称',
    creationTime: '创建时间',
    lastSignInTime: '最后登录时间',
    signInMethod: '登录方式',
    status: '状态',
    action: '操作',
    deleteUserConfirmTips: '删除的用户将自动加入黑名单，无法再次登录，是否确认删除？',
    numberOfActiveUsersIn24Hours: '24小时内活跃用户数',
    numberOfAllUsers: '总用户数',
    avatar: '头像',
    mostPopularSignInMethod: '最受欢迎的登录方式',
    googlecom: 'Google',
    password: '邮箱',
    phone: '手机号',
    githubcom: 'Github',
    microsoftcom: 'Microsoft',
    configureBlacklist: '配置黑名单',
    configureBlacklistTips: '黑名单中的用户将无法登录，一行一个邮箱，支持正则表达式。',
    configureWhitelist: '配置白名单',
    configureWhitelistTips: '白名单之外的用户将无法登录，一行一个邮箱，支持正则表达式。',
    configureOpenaiApiKey: '配置 OpenAI API Key',
    configureOpenaiApiKeyTips: '您的 OpenAI Key 将会被安全存储，提交后不会再返回至客户端，在这里获取您的 OpenAI Key：https://platform.openai.com/account/api-keys',
    update: '更新',
    tagsInputPlaceholder: '输入并按回车键添加',
  },
}
