<template>
     <div class="container">

     <Header/>
    <div class="content"> 

      <Navbar/> 
      <Home/> 

    </div>
    </div>

</template>


<script>
import Home from '../views/Home.vue'
import Header from '../views/Header.vue'
import Navbar from '../views/Navbar.vue'
export default {
      components: {
    Header,
    Navbar,
    Home
  },
    data() {
        return {
        }
       
    },
}
</script>

<style lang="scss">
////////////////////////////////
////LAYOUT
.container {
    max-width: 120rem;
    margin: 8rem auto;
    background-color: var(--color-grey-light-1);
    box-shadow: var(--shadow-dark);
    min-height: 50rem;
}
.content {
    display: flex;
    @media only screen and (max-width: $bp-medium) {
        flex-direction: column;
    }
}
</style>