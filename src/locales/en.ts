export default {
  common: {
    add: 'Add',
    addSuccess: 'Add Success',
    edit: 'Edit',
    editSuccess: 'Edit Success',
    delete: 'Delete',
    deleteSuccess: 'Delete Success',
    save: 'Save',
    saveSuccess: 'Save Success',
    reset: 'Reset',
    action: 'Action',
    export: 'Export',
    exportSuccess: 'Export Success',
    import: 'Import',
    importSuccess: 'Import Success',
    clear: 'Clear',
    clearSuccess: 'Clear Success',
    yes: 'Yes',
    no: 'No',
    confirm: 'Confirm',
    download: 'Download',
    noData: 'No Data',
    wrong: 'Something went wrong, please try again later.',
    success: 'Success',
    failed: 'Failed',
    verify: 'Verify',
    goToHomepage: 'Go to Homepage',
  },
  chat: {
    placeholder: 'Ask me anything...(Shift + Enter = line break)',
    placeholderMobile: 'Ask me anything...',
    copy: 'Copy',
    copied: 'Copied',
    copyCode: 'Copy Code',
    clearChat: 'Clear Chat',
    clearChatConfirm: 'Are you sure to clear this chat?',
    exportImage: 'Export Image',
    exportImageConfirm: 'Are you sure to export this chat to png?',
    exportSuccess: 'Export Success',
    exportFailed: 'Export Failed',
    usingContext: 'Context Mode',
    turnOnContext: 'In the current mode, sending messages will carry previous chat records.',
    turnOffContext: 'In the current mode, sending messages will not carry previous chat records.',
    deleteMessage: 'Delete Message',
    deleteMessageConfirm: 'Are you sure to delete this message?',
    deleteHistoryConfirm: 'Are you sure to clear this history?',
    clearHistoryConfirm: 'Are you sure to clear chat history?',
  },
  setting: {
    setting: 'Setting',
    general: 'General',
    config: 'Config',
    avatarLink: 'Avatar Link',
    name: 'Name',
    description: 'Description',
    resetUserInfo: 'Reset UserInfo',
    chatHistory: 'ChatHistory',
    theme: 'Theme',
    language: 'Language',
    api: 'API',
    reverseProxy: 'Reverse Proxy',
    timeout: 'Timeout',
    socks: 'Socks',
    httpsProxy: 'HTTPS Proxy',
  },
  store: {
    local: 'Local',
    online: 'Online',
    title: 'Title',
    description: 'Description',
    clearStoreConfirm: 'Whether to clear the data?',
    importPlaceholder: 'Please paste the JSON data here',
    addRepeatTitleTips: 'Title duplicate, please re-enter',
    addRepeatContentTips: 'Content duplicate: {msg}, please re-enter',
    editRepeatTitleTips: 'Title conflict, please revise',
    editRepeatContentTips: 'Content conflict {msg} , please re-modify',
    importError: 'Key value mismatch',
    importRepeatTitle: 'Title repeatedly skipped: {msg}',
    importRepeatContent: 'Content is repeatedly skipped: {msg}',
    onlineImportWarning: 'Note: Please check the JSON file source!',
    downloadError: 'Please check the network status and JSON file validity',
  },
  auth: {
    signInTo: 'Sign in to {appName}',
    signIn: 'Sign in',
    verificationCode: 'Verification Code',
    sendCode: 'Send Code',
    login: 'Login',
    continue: 'Continue',
    invalidVerificationCode: 'Invalid verification code',
    verificationCodeSent: 'Verification code sent',
    pleaseTryAgainLater: 'Please try again later',
    invalidVerificationCodeOrExpired: 'Invalid verification code or expired',
    invalidEmailLinkOrExpired: 'Invalid email link or expired',
    phoneNumber: 'Phone Number',
    logout: 'Logout',
    signInWithGoogle: 'Sign in with Google',
    or: 'Or',
    signInWithEmail: 'Sign in with Email',
    signInWithPhone: 'Sign in with Phone',
    rememberMe: 'Remember me',
    sendLoginLink: 'Send Login Link',
    email: 'Email',
    loginLinkSent: 'Login link sent',
    finishSignInTo: 'Finish Sign In to {0}',
    finishSignIn: 'Finish Sign In',
    finishSignInRequiredEmailTips: 'Opened link in another browser? Re-enter your email to complete sign-in.',
    welcomeBack: 'Welcome back',
    returnToSignInPage: 'Return to sign-in page',
    waitSecondsToSendMail: 'Wait {seconds} seconds to send email',
    signInTips: 'Welcome to {appName}. Sign in to continue, or a new account will be created automatically.',
  },
  admin: {
    userManagement: 'User Management',
    systemSettings: 'System Settings',
    enable: 'Enable',
    disable: 'Disable',
    delete: 'Delete',
    disabled: 'Disabled',
    enabled: 'Enabled',
    uid: 'UID',
    email: 'Email',
    phoneNumber: 'Phone Number',
    displayName: 'Display Name',
    creationTime: 'Creation Time',
    lastSignInTime: 'Last Sign In Time',
    signInMethod: 'Sign In Method',
    status: 'Status',
    action: 'Action',
    deleteUserConfirmTips: 'Deleted users will be automatically added to the blacklist and won\'t be able to log in again. Are you sure you want to delete?',
    numberOfActiveUsersIn24Hours: 'Number of Active Users in 24 Hours',
    numberOfAllUsers: 'Number of All Users',
    avatar: 'Avatar',
    mostPopularSignInMethod: 'Most Popular Sign-in Method',
    googlecom: 'Google',
    password: 'Email',
    phone: 'Phone',
    githubcom: 'Github',
    microsoftcom: 'Microsoft',
    configureBlacklist: 'Configure Blacklist',
    configureBlacklistTips: 'Users in the blacklist will not be able to log in. One email per line, support regular expression.',
    configureWhitelist: 'Configure Whitelist',
    configureWhitelistTips: 'Users not in the whitelist will not be able to log in. One email per line, support regular expression.',
    configureOpenaiApiKey: 'Configure OpenAI API Key',
    configureOpenaiApiKeyTips: 'Your OpenAI Key will be securely stored and won\'t be returned to the client side after submission. Get your key from https://platform.openai.com/account/api-keys',
    update: 'Update',
    tagsInputPlaceholder: 'Enter and press Return to add',
  },
}
