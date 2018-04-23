<template>
  <div>
    <div class="admin-new">
      <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <ul class="admin-menu clearfix">
            <li><router-link to="/admin">View Products</router-link></li>
            <li><router-link to="/admin/new">New Product</router-link></li>
          </ul>
        </div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name: 'Admin'
  }
</script>
<style>
  .admin-menu{
    display: -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
  }
  .admin-menu li{
    flex: 0 0 50%;
    background-color: #333;
    border-right: 1px solid rgba(0,0,0,0.8);
  }
  .admin-menu li a{
    color: #fff;
    padding: 20px 60px;
    display: block;
    text-transform: uppercase;
  }
</style>
