import { ActionInterface } from 'assets/interface'

const config = {
  baseUrl: 'https://www.fastmock.site/mock/ffb77a979ff0f5a28b06472b4eec5a0a/example',
  globalLoading: false
}

function configReducer(state: any = { ...config }, action: ActionInterface) {
  let UpdateConfig = 'UpdateConfig'
  switch (action.type) {
    case UpdateConfig:
      let result = { ...state, ...action.payload }
      return result
    default:
      return state
  }
}

export default configReducer