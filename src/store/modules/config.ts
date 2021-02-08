import { ActionInterface } from 'assets/interface'

interface configInterface {
  baseUrl: string;
  globalLoading: boolean
}

const config = {
  baseUrl: 'https://www.fastmock.site/mock/ef6048adaa069773399c93c642e9ef02/api',
  globalLoading: false
}

function configReducer(state: configInterface = { ...config }, action: ActionInterface) {
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