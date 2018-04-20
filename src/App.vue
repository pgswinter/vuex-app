<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <!-- {{firstProduct}} -->
    <!-- {{selectAllProduct}} -->
    <!-- {{selectProductById}} -->
    <!-- <button @click="addProduct">Add Product</button> -->
    <!-- <button @click="getProduct">Get Product</button> -->
    
      <ul>
        <li v-for="product in products">
          <router-link :to="'/details/'+product.id" class="product-link">
            <div class="product__description">
              <div class="product__info">
                <small>{{product.manufacturer.name}}</small>
                <h4>{{product.name}}</h4>
              </div>
              <div class="product__price-cart">
                ${{product.price}}
              </div>
            </div>
            <button v-if="isAdding" class="button" @click="addToCart"><i class="fa fa-cart-plus"></i> Add to Cart</button>
            <button v-else class="button button-danger" @click="removeFromCart(product.id)"><i class="fa fa-trash"></i> Remove from Cart</button>
          </router-link>
        </li>
      </ul>
    
  </div>
</template>

<script>
import {ADD_TO_CART,REMOVE_FROM_CART} from './store/mutation-types'
export default {
  name: 'App',
  created () {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts')
    }
  },
  data () {
    return {
      cart: this.$store.state.cart
    }
  },
  computed:{
    firstProduct(){
      return this.$store.state.cart[0]
    },
    products(){
      return this.$store.getters.allProducts
    },
    selectProductById(){
      return this.$store.getters.selectProductById(1)
    },
    isAdding () {
      return this.cart.indexOf(this.product) < 0
    }
  },
  methods:{
    addProduct(product){
      product = {
        id: 4,
        name: 'XXX Phone',
        price: 700,
        image: 'http://www.brandsmartusa.com/images/product/large/20222515.jpg',
        description: 'There is XXX Phone',
        manufacturer: {
          id: 2,
          name: 'Sony'
        }
      }
      this.$store.commit('ADD_PRODUCT',product)
    },
    addToCart () {
      this.$store.commit(ADD_TO_CART, this.product)
    },
    removeFromCart (id) {
      this.$store.commit(REMOVE_FROM_CART, id)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
