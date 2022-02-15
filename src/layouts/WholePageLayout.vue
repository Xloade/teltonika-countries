<template>
  <div class="navbar">
      <a href="/">
          <img src="/images/Vector.svg" alt="">
      </a>
  </div>
  <div class="container">
    <slot name="header"/>
    <slot name="body"/>
  </div>
</template>

<script>
export default {
  name:"WholePageLayout"
}
</script>

<style>
/* removing margin from body */
  body{
    margin: 0px;
    margin-bottom: 20px;
    overflow-x: hidden;
  }
  /* navbar styling */
  .navbar{
      width: 100%;
      background-color: #0054A6;
  }
  .navbar img{
      width: 142.77px;
      height: 28px;
      margin: 20px 20px 20px 0px;
  }
  /* Responsive styling */
  /* Phones */ 
  @media only screen and (min-width : 0px) {
    .container{
        margin: 0px 20px;
    }
    .navbar img{
        margin-left: 20px;
    }
  }

  /* Small Devices, Tablets */
  /* Bootstrap equivalent usage: 'col-sm-' */
  @media only screen and (min-width : 768px) {
    .container{
        margin: 0px 100px;
    }
    .navbar img{
        margin-left: 100px;
    }
  }

  /* Medium Devices, Desktops */
  @media only screen and (min-width : 992px) {
    .container{
        margin: 0px 200px;
    }
  }

  /* Large Devices, Wide Screens */
  /* Bootstrap equivalent usage: 'col-lg-' */
  @media only screen and (min-width : 1200px) {
    .container{
        margin: 0px 367px;
    }
  }
</style>