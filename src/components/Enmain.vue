<template>
     <div class="container">

     <Enheader/>
    <div class="content"> 

      <Enavbar/> 
      <Enhome/> 

    </div>
    </div>

</template>


<script>
import Enhome from '../views/Enhome.vue'
import Enheader from '../views/Enheader.vue'
import Enavbar from '../views/Enavbar.vue'
export default {
      components: {
    Enheader,
    Enavbar,
    Enhome
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