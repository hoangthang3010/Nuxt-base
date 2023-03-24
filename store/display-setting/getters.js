import get from 'lodash/get'
import cloneDeep from 'lodash/cloneDeep'
export default {
  // ============ POPULAR ============ //
  popular_categories(state) {
    return get(state, 'popular.popular_categories', [])
  },
  popular_municipalities(state) {
    return get(state, 'popular.popular_municipalities', [])
  },
  popular_gifts(state) {
    return get(state, 'popular.popular_return_gifts', {})
  },
  // ============ END POPULAR ============ //

  // ============ RECOMMEND ============ //
  recommend_categories(state) {
    return get(state, 'recommend.recommend_categories', [])
  },
  recommend_donation_usages(state) {
    return get(state, 'recommend.recommend_donation_usages', {})
  },
  recommend_donation_usages_items(state) {
    return get(state, 'recommend.recommend_donation_usages.donation_usages', [])
  },
  recommend_municipalities(state) {
    return get(state, 'recommend.recommend_municipalities.municipalities', [])
  },
  recommend_return_gifts(state) {
    return get(state, 'recommend.recommend_return_gifts.products', [])
  },
  // ============ END RECOMMEND ============ //

  // ============ PRODUCT STATUS ============ //
  productStatus(state) {
    const data = get(state, 'productStatus', []).map((p) => ({
      label: p?.name,
      value: p?.id,
      status: false,
    }))
    return data
  },
  // ============ END PRODUCT STATUS ============ //

  // ============ CATEGORY LIST ============ //
  categoryList(state) {
    const result = get(state, 'categories', []).map((item) => ({
      ...item,
      disabled: false,
    }))
    // Init 'disabled' key
    return result
  },
  // ============ END CATEGORY LIST ============ //

  // ============ DONATION USE CATEGORY LIST ============ //
  donationUseCategoryList(state) {
    const result = get(state, 'donationUseCategories', [])
      .filter((d) => d?.id !== 99999 || d?.name !== 'Uncategorized')
      .map((item) => ({
        label: item?.name,
        value: item?.id,
        status: false,
      }))

    return result
  },
  // ============ DONATION USE CATEGORY LIST ============ //

  // ============ DATA PAYLOAD ============ //
  recommendationData(state) {
    const payload = cloneDeep(state.recommendationData)

    const recommend_categories = payload.recommend_categories.filter(
      (cat) => cat.category_id
    )

    payload.recommend_categories = recommend_categories

    return payload
  },

  popularData(state) {
    const payload = cloneDeep(state.popularData)

    // Parse categories
    const categoriesFiltered = payload.popular_categories.filter(
      (cat) => cat.category_id
    )

    const categories = categoriesFiltered.map((item) => ({
      is_automatic: item.is_automatic,
      category_id: item.category_id,
      product_ids: item.is_automatic ? [] : item.product_ids,
    }))

    payload.popular_categories = categories

    return payload
  },
  // ============ END DATA PAYLOAD ============ //
}
