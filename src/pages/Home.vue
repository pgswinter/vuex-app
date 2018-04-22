<template>
    <!-- <cart :cart="cart"></cart> -->
    <product-list></product-list>
</template>

<script>
import ProductList from '../components/products/ProductList'
export default {
  name: 'Home',
  components:{
    ProductList
  }
}
</script>