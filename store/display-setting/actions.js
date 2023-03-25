import get from 'lodash/get'
export default {
  async getCategories({ commit }) {
    try {
      const response = await this.$adminApi.category.getCategoryTreeName()

      commit('SET_CATEGORIES', get(response, 'data.data', []))
    } catch {
      commit('SET_CATEGORIES', [])
    }
  },
  async getPopular({ commit }) {
    try {
      const response = await this.$adminApi.displaySetting.getListPopular()

      commit('SET_POPULAR', get(response, 'data.data', {}))
    } catch {
      commit('SET_POPULAR', {})
    }
  },
  async getRecommend({ commit }) {
    try {
      const response = await this.$adminApi.displaySetting.getListRecommend()

      commit('SET_RECOMMEND', get(response, 'data.data', {}))
    } catch {
      commit('SET_RECOMMEND', {})
    }
  },
  async getMunicipalities({ commit }, payload) {
    try {
      const response = await this.$adminApi.municipality.getMunicipalityList(payload)

      return get(response, 'data.data', {})
    } catch {
      return {}
    }
  },
  async getProductStatus({ commit }) {
    try {
      const response = await this.$adminApi.admin.getProductStatusList()

      commit('SET_PRODUCT_STATUS', get(response, 'data.data', []))
    } catch {
      commit('SET_PRODUCT_STATUS', [])
    }
  },
  async getDonationUseCategories({ commit }) {
    try {
      const response = await this.$adminApi.admin.getDonationUseCategoryList()
      commit('SET_DONATION_USE_CATEGORY_LIST', get(response, 'data.data', []))
    } catch (error) {
      commit('SET_DONATION_USE_CATEGORY_LIST', [])
    }
  },
}
