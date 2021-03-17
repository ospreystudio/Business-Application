<template>

                
             <nav class="sidebar">
                <ul class="side-nav">
                     <router-link :to="{ name: 'Main' }">
                    <li class="side-nav__item " @click="activate('home')" :class="{active: activeOption === 'home' }">
                        <a href="#" class="side-nav__link">
                             <span><svg class="side-nav__icon">
                                <use xlink:href="@/img/sprite.svg#icon-home"></use>
                            </svg>
                             Home </span>
                        </a>
                    </li>
                    </router-link>
                 <router-link :to="{ name: 'Develop' }">
                    <li class="side-nav__item" @click="activate('dev')" :class="{active: activeOption === 'dev' }" >

                        <a href="#" class="side-nav__link" >
                           <span >   <svg class="side-nav__icon" >
                                <use xlink:href="@/img/sprite.svg#icon-laptop"></use>
                            </svg>
                            Web Development</span>
                        </a>
                    </li>
                    </router-link>
                 <router-link :to="{ name: 'UxUi' }"> 
                    <li class="side-nav__item" @click="activate('UxUi')" :class="{active: activeOption === 'UxUi' }">
                        <a href="#" class="side-nav__link">
                            <span><svg class="side-nav__icon">
                                <use xlink:href="@/img/sprite.svg#icon-leaf"></use>
                            </svg>
                                  UX/UI </span>
                        </a>
                    </li>
                    </router-link>
                    <router-link :to="{ name: 'Video' }"> 
                    <li class="side-nav__item" @click="activate('video')" :class="{active: activeOption === 'video' }">
                        <a href="#" class="side-nav__link">
                             <span> <svg class="side-nav__icon">
                                <use xlink:href="@/img/sprite.svg#icon-video"></use>
                            </svg>
                             Video Design </span>
                        </a>
                    </li>
                    </router-link>
                    <router-link :to="{ name: 'Design' }">
                    <li class="side-nav__item" @click="activate('design')" :class="{active: activeOption === 'design' }">
                        <a href="#" class="side-nav__link">
                            <svg class="side-nav__icon">
                                <use xlink:href="@/img/sprite.svg#icon-round-brush"></use>
                            </svg>
                         <span>  Graphic Design </span>
                        </a>
                    </li>
                     </router-link>

                     <router-link :to="{ name: 'Vacancy' }">
                    <li class="side-nav__item" @click="activate('vacancy')" :class="{active: activeOption === 'vacancy' }">
                        <a href="#" class="side-nav__link">
                            <svg class="side-nav__icon">
                                <use xlink:href="@/img/sprite-2.svg#icon-megaphone"></use>
                            </svg>
                         <span>  Vacancy </span>
                        </a>
                    </li>
                    </router-link>
                
                   <router-link :to="{ name: 'Contacts' }">
                    <li class="side-nav__item" @click="activate('contacts')" :class="{active: activeOption === 'contacts' }">
                        <a href="#" class="side-nav__link">
                          <svg class="side-nav__icon" @click="showPopupInfo">
                        <use xlink:href="@/img/sprite-2.svg#icon-phone" ></use>
                         </svg>
                         <span>  Сontacts </span>
                        </a>
                    </li>
                    </router-link>
                  
                </ul>
        
      
                <div class="legal">
                    &copy; 2021 All rights reserved.
                </div>
            </nav>
</template>

<script>

export default {
    name: "Header",
    Components: {

    },
data() {
    return {
          activeOption: null,
          showPopupInfo: true
        }
    },
  methods: {
        activate(option) {
            this.activeOption = option;
        },
    }   
}
</script>


<style style lang="scss">

.active {
    background-color: var(--color-primary-light);
}

.sidebar {
    background-color: var(--color-grey-dark-1);

    flex: 0 0 18%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

////////////////////////////////////////
// SIDE NAVIGATION
.side-nav {
    font-size: 1.2rem;
    list-style: none;
    margin-top: 3.5rem;

    @media only screen and (max-width: $bp-medium) {
        display: flex;
        margin: 0;
    }

    &__item {
        position: relative;

        &:not(:last-child) {
            margin-bottom: .5rem;

            @media only screen and (max-width: $bp-medium) {
                margin: 0;
            }
        }

        @media only screen and (max-width: $bp-medium) {
            flex: 1;
        }
    }

    &__item::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 3px;
        background-color: var(--color-primary);
        transform: scaleY(0);
        transition: transform .2s,
                    width .4s cubic-bezier(1,0,0,1) .2s,
                    background-color .1s;
    }

    &__item:hover::before,
    &__item--active::before {
        transform: scaleY(1);
        width: 100%;
    }

    &__item:active::before {
        background-color: var(--color-primary-light);
    }

    &__link:link,
    &__link:visited {
        color: var(--color-grey-light-1);
        text-decoration: none;
        text-transform: uppercase;
        display: block;
        padding: 1.5rem 3rem;
        position: relative;
        z-index: 10;

        display: flex;
        align-items: center;

        @media only screen and (max-width: $bp-medium) {
            justify-content: center;
            padding: 2rem;
        }

        @media only screen and (max-width: $bp-small) {
            flex-direction: column;
            padding: 1.5rem .5rem;
        }
    }

    &__icon {
        width: 1.75rem;
        height: 1.75rem;
        margin-right: 2rem;
        fill: currentColor;

        @media only screen and (max-width: $bp-small) {
            margin-right: 0;
            margin-bottom: .7rem;
            width: 1.5rem;
            height: 1.5rem;
        }
    }
}


////////////////////////////////////////
// LEGAL TEXT
.legal {
    font-size: 1.2rem;
    color: var(--color-grey-light-4);
    text-align: center;
    padding: 2.5rem;

    @media only screen and (max-width: $bp-medium) {
        display: none;
    }
}

</style>
