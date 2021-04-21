<template>
  <div id="app">
    <header class="header">
      <img class="header__img" src="./assets/Logo_Game_of_Thrones.png" alt="logo">
      <h4 class="header__subhed">more characters you know</h4>
    </header>
    <div class="content">
    <router-view></router-view>
  </div>
  </div>
</template>


<style lang="scss">

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    background-color:rgb(248, 248, 245);
    color: rgb(37, 37, 37)
    
  }
  .header{
    text-align: center;
    border-bottom:1px solid #535554;
    margin-bottom: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);

    &__img{
      width:40%
    }
    &__subhed{
      font-style: normal;
      font-weight: 200;
      text-transform: uppercase;
      transform: translateY(-70%);
    }
  }
  .content{
    display: flex;
    justify-content: center;
  }
</style>
