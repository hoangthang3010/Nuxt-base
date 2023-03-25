// import Vue from 'vue'
// import { Language } from '~/utils/constants'

// const dateByJapan = ['月', '火', '水', '木', '金', '土', '日']

// const price = Vue.filter('price', function (value) {
//   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
// })

// const formatPrice = Vue.filter('formatPrice', function (value) {
//   if (!value && value !== 0) return 0
//   return $nuxt
//     .$t('format.price')
//     .replace(
//       'xxx,xxx',
//       $nuxt.$store.getters['location/getLocale'] === Language.EN ? parseFloat(value)?.toFixed(2) : Math.floor(value)
//     )
//     .toString()
//     .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
//     .replace('.00', '')
// })

// const formatTime = Vue.filter('formatTime', function (date) {
//   // MMM DD, YYYY at h:mm A
//   if (date) {
//     return $nuxt.$store.getters['location/getLocale'] === Language.EN
//       ? $nuxt.$dayjs(date).format('MMM DD, YYYY - HH:mm')
//       : $nuxt.$dayjs(date).format('YYYY/MM/DD HH:mm')
//   }
//   return ''
// })

// const formatDate = Vue.filter('formatDate', function (date) {
//   if (date) {
//     return $nuxt.$store.getters['location/getLocale'] === Language.EN
//       ? $nuxt.$dayjs(date).format('MMM DD, YYYY')
//       : $nuxt.$dayjs(date).format('YYYY/MM/DD')
//   }
//   return ''
// })

// const formatDays = Vue.filter('formatDays', function (date) {
//   const dateIndex = $nuxt.$dayjs(date)
//   if (date) {
//     return $nuxt.$store.getters['location/getLocale'] === Language.EN
//       ? $nuxt.$dayjs(date).format('MMM DD, YYYY HH:mm (ddd)')
//       : `${$nuxt.$dayjs(date).format('YYYY年MM月DD日 HH:mm')} (${dateByJapan[dateIndex.day() - 1]})`
//   }
//   return ''
// })

// export default { price, formatPrice, formatTime, formatDate, formatDays }
