export default () => ({
  categories: [],
  popular: {},
  recommend: {},
  municipalities: [],
  productStatus: [],
  donationUseCategories: [],
  recommendationData: {
    recommend_municipalities: {
      municipality_ids: [],
    },
    recommend_categories: [],
    recommend_return_gifts: {
      product_ids: [],
    },
    recommend_donation_usage: {
      donation_usages: [],
    },
  },

  popularData: {
    popular_categories: [],
    popular_municipalities: [],
    popular_return_gifts: {},
  },
  watchResetPopularData: false,
  watchResetRecommendationData: false,
})
