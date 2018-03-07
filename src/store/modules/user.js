/**
 * User Store Module
 */

import firebase from 'firebase'

export default {
  namespaced: true,
  state: {
    connected: false,
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    role: 'guest',
    permissions: {
      start_run: false,
      end_run: false,
      force_start_run: false,
      force_end_run: false,
      create_runners: false,
      create_coordinators: false,
      create_admin: false,
      destroy_runners: false,
      destroy_coordinators: false,
      destroy_admin: false
    }
  },
  getters: {
    fullName: state => {
      return `${state.firstname} ${state.lastname}`
    }
  },
  mutations: {
    CONNECT (state, user) {
      state.connected = true
    },
    DISCONNECT (state) {
      state.connected = false
    },
    SET_USER_DATAS (state, user) {
      state = user
    }
  },
  actions: {
    /**
     * Login the user in firebase with email and pass
     * This method don't verify the consitency of the datas
     * @param { dispatch, commit } context Auto injected by vuex, we use the ES2015 argument destructuring
     * @param { email, pass } playload Datas required for the user login
     */
    login ({ dispatch, commit }, { email, pass }) {
      return new Promise((resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, pass)
          .then(
            function (user) {
              commit('CONNECT')
              resolve(user)
            }
          ).catch(
            function (err) {
              reject(err)
            }
          )
      })
    },
    fetchUser ({ state, commit, rootState }) {
      //
    },
    editUser ({ state, commit, rootState }) {
      //
    }
  }
}
