<template>
    <ul>
      <li v-for="product in products">
        <product-item :product="product"></product-item>
      </li>
    </ul>
</template>

<script>
import ProductItem from './ProductItem'
export default {
  name: 'ProductList',
  // created using when load trigger event load page
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  computed:{
    products(){
      return this.$store.getters.allProducts
    }
  },
  components:{
    ProductItem
  }
}
</script>
