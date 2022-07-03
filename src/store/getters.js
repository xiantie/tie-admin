import variables from '@/styles/variables.module.scss'
const getters = {
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => variables,
  language: (state) => state.app.language,
  /**
   * @returns true 表示已存在用户信息
   */
  hasUserInfo: (state) => {
    return JSON.stringify(state.user.userInfo) !== '{}'
  },
  token: (state) => state.user.token,
  sidebarOpened: (state) => state.app.sidebarOpened,
  mainColor: (state) => state.theme.mainColor
}
export default getters
