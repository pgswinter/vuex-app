<template>
  <div v-if="cart.length > 0">
    <div class="title">
      <h1><i class="fa fa-superpowers"></i> Your Cart</h1>
    </div>
    <template v-for="product in cart">
      <product-detail :product="product" :key="product.id"></product-detail>
    </template>
  </div>
  <div v-else class="title"><h1><i class="fa fa-superpowers"></i> Your Cart is Empty</h1></div>
</template>

<script>
import ProductDetail from '../components/products/ProductDetail'
export default {
  data(){
    return {
      cart: this.$store.state.cart
    }
  },
  components:{
    ProductDetail
  }
}
</script>
