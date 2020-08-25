import {
  SET_AUTH_TOKEN,
  DESTROY_AUTH_TOKEN,
  SET_LOGIN_INFO,
  DESTROY_LOGIN_INFO,
  SET_BOARD_LIST,
  SET_BOARD
} from '@/store/mutation-types.js'

import axios from 'axios'
import cookies from 'vue-cookies'

export default {
  [SET_AUTH_TOKEN] (state, accessToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
    cookies.set('jwt', accessToken, '24h')
  },
  [DESTROY_AUTH_TOKEN] (state) {
    delete axios.defaults.headers.common.Authorization
    cookies.remove('jwt')
  },
  [SET_LOGIN_INFO] (state, data) {
    console.log('SET_LOGIN_INFO')
    state.isLogin = true
    state.loginInfo = data
  },
  [DESTROY_LOGIN_INFO] (state, data) {
    state.isLogin = false
    state.loginInfo = null
  },
  [SET_BOARD_LIST] (state, data) {
    state.boardList = data
  },
  [SET_BOARD] (state, data) {
    state.board = data
  }
}
