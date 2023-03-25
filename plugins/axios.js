import Auth from '~/api/auth'

export default function ({ $axios, redirect, app, store, $config: { API_URL } }, inject) {
  const adminInstance = $axios.create()

  adminInstance.setBaseURL(API_URL)

  adminInstance.onError((error) => {
    if (error.response === undefined) {
      // show network error
      const isShowNetworkError = store.state.notification.showNetworkError
      if (!isShowNetworkError) {
        store.dispatch('notification/setNetworkError', true, {
          root: true,
        })
      }
      throw error
    }

    // Handle other types of errors (e.g., redirect to login on 401 errors)
    redirectPage(error)

    throw error
  })

  function redirectPage(error) {
    const code = parseInt(error.response && error.response.status)
    if (code === 404 || code === 403) {
      redirect('/404')
    }
    if (code === 401) {
      redirect('/401')
    }
  }

  const adminFactories = {
    auth: Auth(adminInstance),
  }

  inject('adminInstance', adminInstance)
  inject('adminApi', adminFactories)
}
