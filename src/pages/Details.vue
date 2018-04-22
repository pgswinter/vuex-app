<template>
  <!--<transition-->
    <!--name="custom"-->
    <!--enter-active-class="animated zoomIn"-->
  <!--&gt;-->
  <div>
    <product-detail :product="product" :isAdding="true"></product-detail>
  </div>
  <!--</transition>-->
</template>

<script>
  import ProductDetail from '../components/products/ProductDetail'
  export default {
    created () {
      if (!this.product.name) {
        this.$store.dispatch('productById', this.$route.params['id'])
      }
    },
    computed: {
      product () {
        return this.$store.getters.productById(this.$route.params['id'])
      }
    },
    data () {
      return {
//        product: this.$store.getters.productById(this.$route.params['id'])
      }
    },
    components: {
      ProductDetail
    }
  }
</script>