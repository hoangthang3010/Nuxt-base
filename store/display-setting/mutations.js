export default {
  SET_CATEGORIES(state, data) {
    state.categories = data || []
  },
  SET_POPULAR(state, data) {
    state.popular = data || {}
  },
  SET_RECOMMEND(state, data) {
    state.recommend = data || {}
  },
  SET_MUNICIPALITIES(state, data) {
    state.municipalities = data || []
  },
  SET_PRODUCT_STATUS(state, data) {
    state.productStatus = data || []
  },
  SET_DONATION_USE_CATEGORY_LIST(state, data) {
    state.donationUseCategories = data || []
  },
  // RECOMMENDATION DATA
  SET_RECOMMENDATION_DATA(state, payload) {
    Object.assign(state.recommendationData, payload)
  },
  ADD_RECOMMENDATION_DATA_CATEGORIES(state, payload) {
    state.recommendationData.recommend_categories.push(payload)
  },
  UPDATE_RECOMMENDATION_DATA_CATEGORIES(
    state,
    { category_id, product_ids, index }
  ) {
    let catIndex = state.recommendationData.recommend_categories.findIndex(
      (cat) => cat.category_id === category_id
    )

    if (index !== undefined) {
      catIndex = index
    }

    state.recommendationData.recommend_categories.splice(catIndex, 1, {
      category_id,
      product_ids,
    })
  },
  DELETE_RECOMMENDATION_DATA_CATEGORIES(state, index) {
    state.recommendationData.recommend_categories.splice(index, 1)
  },

  // POPULAR DATA
  SET_POPULAR_DATA(state, payload) {
    Object.assign(state.popularData, payload)
  },
  ADD_POPULAR_DATA_CATEGORIES(state, payload) {
    state.popularData.popular_categories.push(payload)
  },
  UPDATE_POPULAR_DATA_CATEGORIES(
    state,
    { category_id, product_ids, is_automatic, index }
  ) {
    state.popularData.popular_categories.splice(index, 1, {
      is_automatic,
      category_id,
      product_ids,
    })
  },
  DELETE_POPULAR_DATA_CATEGORIES(state, index) {
    state.popularData.popular_categories.splice(index, 1)
  },
  UPDATE_POPULAR_DATA_MUNICIPALITIES(state, { index, payload }) {
    state.popularData.popular_municipalities.splice(index, 1, payload)
  },

  SET_WATCH_RESET_POPULAR_DATA(state) {
    state.watchResetPopularData = !state.watchResetPopularData
  },

  SET_WATCH_RESET_RECOMMENDATION_DATA(state) {
    state.watchResetRecommendationData = !state.watchResetRecommendationData
  },
}
