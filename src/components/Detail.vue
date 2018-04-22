<template>
  <div class="detail">
    <h2>Detail Page</h2>
    <div :product="product">
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
  created () {
    if (!this.product.name) {
      this.$store.dispatch('productById', this.$route.params['id'])
    }
  },
  computed: {
    product () {
      const paramId = parseInt(this.$route.params['id'])
      return this.$store.getters.productById(paramId)
    }
  },
}
</script>
