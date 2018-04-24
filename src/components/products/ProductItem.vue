<template>
  <div class="product">
    <router-link :to="'/details/'+product.id" class="product-link clearfix">
      <div class="product__image imagefix">
        <img
          class="img-responsive" :src="product.image" alt="">
      </div>
      <div class="product__description">
        <div class="product__info">
          <small>{{product.manufacturer.name}}</small>
          <h4>{{product.name}}</h4>
        </div>
        <div class="product__price-cart">
          ${{product.price}}
        </div>
      </div>
    </router-link>
    <div class="product__action clearfix">
      <product-button :product="product"></product-button>
    </div>
  </div>
</template>

<script>
  import ProductButton from './ProductButton.vue'
  export default {
    name: 'product-item',
    props: ['product'],
    components: {
      'product-button': ProductButton
    }
  }
</script>
