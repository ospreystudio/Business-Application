<template>
     <header class="header">
            <router-link :to="{ name: 'Main' }"><img src="@/img/logo.png" alt="osprey logo" class="logo"></router-link>


        
              
          
 <!-- @savePhone="saveInfoPhone" -->
         
            <nav class="user-nav_2">
         
                 
                  <router-link :to="{ name: 'Main' }">    <div class="flag">       <img src="@/img/Russia.png"></div>  </router-link>
                 
                     <router-link :to="{ name: 'Enmain' }">  <div class="flag"> <img src="@/img/United-Kingdom.png"> </div> </router-link>
            </nav>
                
            
                <nav class="user-nav">
   
                      <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                    <use xlink:href="@/img/spritesocial.svg#icon-telegram"></use> 
                    </svg>
              </div>
                   <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                        <use xlink:href="@/img/spritesocial.svg#icon-vk"></use>
                    </svg>
              </div>
              <div class="user-nav__icon-box">
                       <svg class="user-nav__icon">
                        <use xlink:href="@/img/spritesocial.svg#icon-instagram"></use>
                    </svg>
              </div>
                <div class="user-nav__icon-box">
                    <svg class="user-nav__icon">
                        <use xlink:href="@/img/spritesocial.svg#icon-facebook"></use>
                    </svg>
              </div>
                <div class="user-nav__icon-box ">
              

                  
                </div>
            </nav>
                    
         
        </header>
</template>


<script>

import Contacts from '../components/layuot/Contacts.vue'
export default {
    components: {
        Contacts
    },
    
    data() {
        return {
        isInfoPopupVisible: false,
          phone: {
            phonenumber:''
			},
             
        }
    }, 
    methods: {


	}	

}
    






</script>


<style lang="scss" scoped>

.blink {
animation-name: blinker;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  animation-duration: 2s;
  -webkit-animation-name: blinker;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: cubic-bezier(1.0,0,0,1.0);
  -webkit-animation-duration: 1.5s;
}
 



ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 1 1rem;
    padding: 0.4rem;
}


.active {
    background-color: var(--color-primary-light);
}

.header {
    font-size: 1.4rem;
    height: 7rem;
    background-color: #fff;
    border-bottom: var(--line);

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: $bp-smallest) {
        flex-wrap: wrap;
        align-content: space-around;
        height: 11rem;
    }
}




////////////////////////////////////////
// SEARCH
// .search {
//     flex: 0 0 10%;

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     @media only screen and (max-width: $bp-smallest) {
//         order: 1;
//         flex: 0 0 100%;
//         background-color: var(--color-grey-light-2);
//     }

//     &__input {
//         font-family: inherit;
//         font-size: inherit;
//         color: inherit;
//         background-color: var(--color-grey-light-2);
//         border: none;
//         padding: .7rem 2rem;
//         border-radius: 100px;
//         width: 90%;
//         transition: all .2s;
//         margin-right: -3.25rem;

//         &:focus {
//             outline: none;
//             width: 100%;
//             background-color: var(--color-grey-light-3);
//         }

//         &::-webkit-input-placeholder {
//             font-weight: 100;
//             color: var(--color-grey-light-4);
//         }
//     }

//     &__input:focus + &__button {
//         background-color: var(--color-grey-light-3);
//     }

//     &__button {
//         border: none;
//         background-color: var(--color-grey-light-2);

//         &:focus {
//             outline: none;
//         }

//         &:active {
//             transform: translateY(2px);
//         }
//     }

//     &__icon {
//         height: 2rem;
//         width: 2rem;
//         fill: var(--color-grey-dark-3);
//     }
// }

////////////////////////////////////////
// USER NAVIGATION


.side-nav__icon {
    height: 2.25rem;
    width: 2.25rem;
}

.user-nav {
    align-self: stretch;
    
    display: flex;
    align-items: center;

    & > * {
        padding: 0 2rem;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    }

    & > *:hover {
        background-color: var(--color-grey-light-3);
    }

    &__icon-box {
        position: relative;
    
    }

    &__icon {
        height: 2.25rem;
        width: 2.25rem;
        fill: var(--color-grey-dark-2);
    }

    // &__notification {
    //     font-size: .8rem;
    //     height: 1.75rem;
    //     width: 1.75rem;
    //     border-radius: 50%;
    //     background-color: var(--color-primary);
    //     color: #fff;
    //     position: absolute;
    //     top: 1.5rem;
    //     right: 1.1rem;

    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    // }

    // &__user-photo {
    //     height: 3.75rem;
    //     border-radius: 50%;
    //     margin-right: 1rem;
    // }

}

.user-nav_2 {
    align-self: stretch;
    display: flex;
    align-items: center;
}
.logo {
    height: 5.25rem;
    margin-left: 3.5rem;
}

//////////////////////////////////////////////
/////////////////FLAGS


.flag {

    height: 50px;
    weight: 40px;
    flex: 0 0 18%;
    margin-right:20px;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}

.user-flag {
    align-self: stretch;
    display: flex;
    align-items: center;

       & > * {
     
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
    }

    //   & > *:hover {
    //     background-color: var(--color-grey-light-3);
    // }

      & > *:hover {
        background-color: var(--color-primary-light);
    }

    &__icon-box {
        position: relative;
    }

    &__icon {
        height: 2.25rem;
        width: 2.25rem;
        fill: var(--color-grey-dark-2);
    }

    

}
  

</style>