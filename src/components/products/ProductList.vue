<template>
    <ul class="product-list clearfix">
      <li v-for="product in products" class="col-lg-6 col-md-4 col-sm-6 col-xs-12">
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

<style>
  .product-list{
    flex-wrap: wrap;
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
  }
  .product-list .product{
    margin-bottom: 3em;
  }
  .product-list .product .product-link{
    display: block;
  }
  .product-list .product .product-link .product__image{
    width: 50%;
    display: block;
    float: left;
  }
  .product-list .product .product-link .product__description{
    width: 50%;
    float: left;
  }
  .product-list .product .product-link .product__description .product__info h4{
    font-size: 1em;
  }
  .product-list .product .product__action button{
    width: 222px;
    margin: 2em auto;
    display: block;
  }
</style>
