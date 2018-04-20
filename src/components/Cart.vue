<template>
  <div class="detail">
    <h2>Cart</h2>
    <div v-for="product in cart">
      <div class="product-details__description">
        <small>{{product.manufacturer && product.manufacturer.name}}</small>
        <h3>{{product.name}}</h3>
        <p>
          {{product.description}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data(){
    return {
      cart: this.$store.state.cart
    }
  }
}
</script>
