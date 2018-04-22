<template>
  <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
  <button v-else class="button button-danger" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</button>
</template>

<script>
import {ADD_TO_CART,REMOVE_FROM_CART} from '../../store/mutation-types'
export default {
  props:['product'],
  name: 'ProductButton',
  data () {
    return {
      cart: this.$store.state.cart
    }
  },
  // computed using calculate + query schema
  computed:{
    isAdding () {
      return this.cart.indexOf(this.product) < 0
    }
  },
  // methods using process actions and mutations
  methods:{
    addToCart () {
      this.$store.commit('ADD_TO_CART', this.product)
    },
    removeFromCart (id) {
      this.$store.commit('REMOVE_FROM_CART', id)
    }
  }
}
</script>
