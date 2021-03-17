<template>
     <div class="container">

     <Header/>
    <div class="content"> 

      <Navbar/> 
            <main class="hotel-view">
                     <div class="gallery">
                                   <figure class="gallery__item">
                            <img src="@/img/page-2/artboard-3.png" alt="Photo of work 3" class="gallery__photo">
                        </figure>
                        <figure class="gallery__item">
                            <img src="@/img/page-2/artboard-1.png" alt="Photo of work 1" class="gallery__photo">
                        </figure> 
                  
                       
                           <figure class="gallery__item">
                            <img src="@/img/page-2/artboard-2.png" alt="Photo of work 2" class="gallery__photo">
                        </figure>
                     
                    </div>  

                    <div class="overview">
                        <h1 class="overview__heading">
                              программирование
                        </h1>

                        <div class="overview__stars">
                            <svg class="overview__icon-star">
                                <use xlink:href="@/img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlink:href="@/img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlink:href="@/img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlink:href="@/img/sprite.svg#icon-star"></use>
                            </svg>
                            <svg class="overview__icon-star">
                                <use xlink:href="@/img/sprite.svg#icon-star"></use>
                            </svg>
                        </div>

                        <div class="overview__location">
                            <svg class="overview__icon-location">
                                <use xlink:href="@/img/sprite.svg#icon-location-pin"></use>
                            </svg>
                            <button class="btn-inline">Russia, Samara</button>
                        </div>

                        <div class="overview__rating">
                            <div class="overview__rating-average">9.7</div>
                            <div class="overview__rating-count">429 votes</div>
                        </div>
                    </div>

                    <div class="detail">
                        <div class="description">
                            <p class="paragraph">
                              Наши программисты работают на языках <span class="colortext"> JavaScript </span> и <span class="colortext">  Vue.js </span><br>         <br> 
                               <span class="colortext"> Vuex </span> — библиотека для приложений на Vue.js <br> <br> 
                              <span class="colortext"> Firebase  </span> -  облачная СУБД класса NoSQL, позволяющая разработчикам приложений хранить и синхронизировать данные между несколькими клиентами. <br> <br> 
                              <span class="colortext"> Vuetify </span>  - фреймворк  для создания богатых и интересных веб-приложений, используя спецификацию Material Design. <br> <br> 
                              Вёрстка web-сайтов  <span class="colortext"> HTML5, CSS3, SASS </span> 
                            </p>
          
                   
                            
         
                     
                                           <div class="cta">
                            <h2 class="cta__book-now">
                              Связаться с нами
                            </h2>
                             <button class="btn" @click.prevent="$router.push({name: 'Contacts'})" >
                                <span class="btn__visible">Контакты</span>
                                <span class="btn__invisible">Contacts</span>
                            </button>
                        </div>
                        </div>
                        

                        <div class="user-reviews">
                            <figure class="review">
                                <blockquote class="review__text">
                                   Заказывал фирменный логотип для своего бизнеса. Всё сделали быстро и на высшем уровне!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-1.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Nick Smith</p>
                                        <p class="review__user-date">Feb 23rd, 2017</p>
                                    </div>
                                    <div class="review__rating">9.8</div>
                                </figcaption>
                            </figure>

                            <figure class="review">
                                <blockquote class="review__text">
                                         Заказывала небольшой магазинчик одежды на WordPress. Магазин работает великолепно. Спасибо!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-2.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Mary Thomas</p>
                                        <p class="review__user-date">Sept 13th, 2018</p>
                                    </div>
                                    <div class="review__rating">9.3</div>
                                </figcaption>
                            </figure>

                                     <figure class="review">
                                <blockquote class="review__text">
                               Нужно было проверить и дописать код на Java Script. Коллектив отлично справился с задачей!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-7.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Jessica Johnson</p>
                                        <p class="review__user-date">June 29th, 2019</p>
                                    </div>
                                    <div class="review__rating">9.7</div>
                                </figcaption>
                            </figure>

                            <button class="btn-inline">Show all <span>&rarr;</span></button>


                        </div>


                    </div>


                </main>

    </div>
    </div>

</template>


<script>
import Home from '../../views/Header.vue'
import Navbar from '../../views/Navbar.vue'
import Header from '../../views/Header.vue'
export default {
      components: {
    Header,
    Navbar,
    Home
  },
    data() {
        return {

        }
    }
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

    @media only screen and (max-width: $bp-largest) {
        margin: 0;
        max-width: 100%;
        width: 100%;
    }
}

.content {
    display: flex;

    @media only screen and (max-width: $bp-medium) {
        flex-direction: column;
    }
}


.hotel-view {
    background-color: #fff;

    flex: 1;
}

.detail {
    font-size: 1.4rem;
    display: flex;
    padding: 4.5rem;
    background-color: var(--color-grey-light-1);
    border-bottom: var(--line);

    @media only screen and (max-width: $bp-medium) {
        padding: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
        flex-direction: column;
    }
}

.description {
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding: 3rem;
    flex: 0 0 60%;
    margin-right: 4.5rem;

    @media only screen and (max-width: $bp-medium) {
        padding: 2rem;
        margin-right: 3rem;
    }

    @media only screen and (max-width: $bp-small) {
        margin-right: 0;
        margin-bottom: 3rem;
    }
}

.user-reviews {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
}



////////////////////////////////////////
// GALLERY
.gallery {
    display: flex;

    &__photo {
        width: 100%;
        display: block;
    }
}


////////////////////////////////////////
// HOTEL OVERVIEW
.overview {
    display: flex;
    align-items: center;
    border-bottom: var(--line);

    &__heading {
        font-size: 2.25rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 1.5rem 3rem;

        @media only screen and (max-width: $bp-small) {
            font-size: 1.8rem;
            padding: 1.25rem 2rem;
        }
    }

    &__stars {
        margin-right: auto;
        display: flex;
    }

    &__icon-star,
    &__icon-location {
        width: 1.75rem;
        height: 1.75rem;
        fill: var(--color-primary);
    }

    &__location {
        font-size: 1.2rem;
        display: flex;
        vertical-align: center;
    }

    &__icon-location {
        margin-right: .5rem;
    }

    &__rating {
        background-color: var(--color-primary);
        color: #fff;
        margin-left: 3rem;
        padding: 0 2.25rem;
        align-self: stretch;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @media only screen and (max-width: $bp-small) {
            padding: 0 1.5rem;
        }
    }

    &__rating-average {
        font-size: 2.25rem;
        font-weight: 300;
        margin-bottom: -3px;

        @media only screen and (max-width: $bp-small) {
            font-size: 1.8rem;
        }
    }

    &__rating-count {
        font-size: .8rem;
        text-transform: uppercase;

        @media only screen and (max-width: $bp-small) {
            font-size: .5rem;
        }
    }
}



////////////////////////////////////////
// BUTTON INLINE
.btn-inline {
    border: none;
    color: var(--color-primary);
    font-size: inherit;
    border-bottom: 1px solid currentColor;
    padding-bottom: 2px;
    display: inline-block;
    background-color: transparent;
    cursor: pointer;
    transition: all .2s;

    & span {
        margin-left: 3px;
        transition: margin-left .2s;
    }

    &:hover {
        color: var(--color-grey-dark-1);

        span {
            margin-left: 8px;
        }
    }

    &:focus {
        outline: none;
        animation: pulsate 1s infinite;
    }
}

@keyframes pulsate {
    0% {
        transform: scale(1);
        box-shadow: none;
    }

    50% {
        transform: scale(1.05);
        box-shadow: 0 1rem 4rem rgba(0,0,0,.25);
    }

    100% {
        transform: scale(1);
        box-shadow: none;
    }
}

////////////////////////////////////////
// PARAGRAPH
.paragraph:not(:last-of-type) {
    margin-bottom: 2rem;
}



////////////////////////////////////////
// LIST
.list {
    list-style: none;
    margin: 3rem 0;
    padding: 3rem 0;
    border-top: var(--line);
    border-bottom: var(--line);

    display: flex;
    flex-wrap: wrap;

    &__item {
        flex: 0 0 50%;
        margin-bottom: .7rem;
    }

    &__item::before {
        content: "";
        display: inline-block;
        height: 1rem;
        width: 1rem;
        margin-right: .7rem;

        // Older browsers
        background-image: url("/../img/chevron-thin-right.svg");
        background-size: cover;

        //Newer browsers - masks
        @supports (-webkit-mask-image: url()) or (mask-image: url()) {
            background-color: var(--color-primary);
            -webkit-mask-image: url("/../img/chevron-thin-right.svg");
            -webkit-mask-size: cover;
            mask-image: url("/../img/chevron-thin-right.svg");
            mask-size: cover;
            background-image: none;
        }
        
    }
}



////////////////////////////////////////
// RECOMMEND
.recommend {
    font-size: 1.3rem;
    color: var(--color-grey-dark-3);

    display: flex;
    align-items: center;

    &__count {
        margin-right: auto;
    }

    &__friends {
        display: flex;
    }

    &__photo {
        box-sizing: content-box;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        border: 3px solid #fff;

        &:not(:last-child) {
            margin-right: -2rem;
        }
    }
}


////////////////////////////////////////
// REVIEWS
.review {
    background-color: #fff;
    box-shadow: var(--shadow-light);
    padding: 3rem;
    margin-bottom: 3.5rem;
    position: relative;
    overflow: hidden;

    @media only screen and (max-width: $bp-medium) {
        padding: 2rem;
        margin-bottom: 3rem;
    }

    &__text {
        margin-bottom: 2rem;
        z-index: 10;
        position: relative;
    }

    &__user {
        display: flex;
        align-items: center;
    }

    &__photo {
        height: 4.5rem;
        width: 4.5rem;
        border-radius: 50%;
        margin-right: 1.5rem;
    }

    &__user-box {
        margin-right: auto;
    }

    &__user-name {
        font-size: 1.1rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: .4rem;
    }

    &__user-date {
        font-size: 1rem;
        color: var(--color-grey-dark-3);
    }

    &__rating {
        color: var(--color-primary);
        font-size: 2.2rem;
        font-weight: 300;
    }

    &::before {
        content: "\201C";
        position: absolute;
        top: -2.75rem;
        left: -1rem;
        line-height: 1;
        font-size: 20rem;
        color: var(--color-grey-light-2);
        font-family: sans-serif;
        z-index: 1;
    }
}


////////////////////////////////////////
// CALL TO ACTION
.cta {
    padding: 3.5rem 0;
    text-align: center;

    @media only screen and (max-width: $bp-medium) {
        padding: 2.5rem 0;
    }

    &__book-now {
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 2.5rem;
    }
}


////////////////////////////////////////
// CALL TO ACTION
.btn {
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
    border-radius: 100px;
    border: none;
    background-image: linear-gradient(to right, var(--color-primary-light), var(--color-primary-dark));
    color: #fff;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    & > * {
        display: inline-block;
        height: 100%;
        width: 100%;
        transition: all .2s;
    }

    &__visible {
        padding: 2rem 7.5rem;
    }

    &__invisible {
        position: absolute;
        padding: 2rem 0;
        left: 0;
        top: -100%;
    }

    &:hover {
        background-image: linear-gradient(to left, var(--color-primary-light), var(--color-primary-dark));
    }

    &:hover &__visible {
        transform: translateY(100%);
    }

    &:hover &__invisible {
        top: 0;
    }

    &:focus {
        outline: none;
        animation: pulsate 1s infinite;
    }
}

  .colortext {
     color: #0294ED; /* Красный цвет выделения */
   }


</style>