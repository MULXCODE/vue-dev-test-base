import { createLogger } from 'vuex'
import { STORAGE_KEY } from './mutations'

const localStoragePlugin = (store: { subscribe: (arg0: (mutation: any, { breeds }: any) => void) => void }) => {
  store.subscribe((mutation: any, { breeds }: any) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(breeds))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]