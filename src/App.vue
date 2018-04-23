<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav__left clearfix">
          <li><router-link to="/"><i class="fa fa-home"></i> Home</router-link></li>
          <li><router-link to="/admin"><i class="fa fa-user"></i> Admin</router-link></li>
        </ul>
        <ul class="nav__right">
          <li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Cart ({{cartItemsCount}})</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import toastr from 'toastr'
import {
  ERROR_MSG,
  ADD_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  REMOVE_PRODUCT_SUCCESS
} from './store/mutation-types'
export default {
  name: 'App',
  data () {
    return {
      cartItems: this.$store.state.cart
    }
  },
  created () {
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
            toastr.error(mutation.payload.content, mutation.payload.title)
            break
          case ADD_PRODUCT_SUCCESS:
            toastr.success('Product created.', 'Success!')
            break
          case UPDATE_PRODUCT_SUCCESS:
            toastr.success('Product updated.', 'Success!')
            break
          case REMOVE_PRODUCT_SUCCESS:
            toastr.warning('Product deleted.', 'Deleted!')
            break
        }
      }
    })
  },
  computed: {
    cartItemsCount () {
      return this.cartItems.length
    },
    showLoader () {
      return this.$store.state.showLoader
    }
  }
}
</script>

<style>
  ul li{
    list-style-type: none;
  }
  a,a:hover{
    color: #000;
    text-decoration: none;
  }
  .container{
    position: relative;
  }
  .imagefix img{
    display: block;
    width: 100%;
  }
  .clearfix:before,
  .clearfix:after{
    display: block;
    content: '';
    clear: both;
  }
  .container .nav__left{
    background-color: #333;
    padding-left: 0;
  }
  .container .nav__left li{
    float: left;
    border-right: 1px solid rgba(0,0,0,0.8);
  }
  .container .nav__right{
    position: absolute;
    top: 0;
    right: 15px;
  }
  .container .nav__left li a,
  .container .nav__right li a{
    color: #fff;
    padding: 20px 30px;
    display: block;
  }
  .btn-style,.btn-style:hover,.btn-style:checked,.btn-style:focus,
  .btn-style-o,.btn-style-o:hover,.btn-style-o:checked,.btn-style-o:focus{
    background-color: yellow;
    border: none;
    border-radius: 20px;
    text-align: center;
    text-transform: uppercase;
    box-shadow: none;
    padding: 10px 20px;
    cursor: pointer;
  }
  .btn-style-o,.btn-style-o:hover,.btn-style-o:checked,.btn-style-o:focus{
    background-color: transparent;
    border: 1px solid #000;
  }
</style>