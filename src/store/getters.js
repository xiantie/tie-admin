import { MAIN_COLOR } from '@/constant'
import { getItem } from '@/utils/storage'
import { generateColors } from '@/utils/theme'
const getters = {
  userInfo: (state) => state.user.userInfo,
  cssVar: (state) => {
    return {
      ...state.theme.variables,
      ...generateColors(getItem(MAIN_COLOR))
    }
  },
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
