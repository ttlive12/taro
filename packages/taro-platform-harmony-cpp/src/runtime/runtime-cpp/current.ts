import { TaroNativeModule } from './harmony-library'

export const context: any = {
  resolver: null,
  value: null
}

export const uiContext: any = {
  resolver: null,
  value: null
}

export const Current: any = {
  app: null,
  entryAsync: null,
  isDebug: false,
  get uiContext () {
    return uiContext.value
  },
  set uiContext (e) {
    uiContext.resolver(e)
  },
  router: {},
  taro: {},
  contextPromise: new Promise(resolve => {
    context.resolver = resolve

    return resolve
  }).then(e => {
    context.value = e

    return e
  }),
  uiContextPromise: new Promise(resolve => {
    uiContext.resolver = resolve

    return resolve
  }).then((e) => {
    uiContext.value = e

    return e
  }),
  nativeModule: TaroNativeModule,
  createHarmonyElement: null,
  audioSessionManager: null
}

export const getCurrentInstance = () => Current
