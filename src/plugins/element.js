import store from '@/store'
import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
// import locale from 'element-plus/lib/locale/lang/zh-cn'

import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'

export default (app) => {
  app.use(ElementPlus, { locale: store.getters.language === 'en' ? en : zhCn })
}
