<template>

                <main class="hotel-view">
                    <div class="gallery">
                        <figure class="gallery__item">
                            <img src="@/img/page-1/art-1.png" alt="Photo of work 1" class="gallery__photo">
                        </figure>
                           <figure class="gallery__item">
                            <img src="@/img/page-1/art-2.png" alt="Photo of work 2" class="gallery__photo">
                        </figure>
                         <figure class="gallery__item">
                            <img src="@/img/page-1/art-3.png" alt="Photo of work 3" class="gallery__photo">
                        </figure>
                     
                       
                    </div>

                    <div class="overview">
                        <h1 class="overview__heading">
                             about company
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
                             <span class="colortext">OSPREY-IT </span> specializes in many areas of the IT industry. Our team does your work efficiently and quickly, meeting all the standards of your technical task.
If you find it difficult with the technical task, we will help you to make it! <br> <br> Our prices depend on the complexity of your technical task.
                               

                            </p>
                            <p class="paragraph">
                         
                            </p>
                            <ul class="list">
                                <li class="list__item colortext">Programming</li>
                                <li class="list__item colortext">Corporate logos</li>
                                <li class="list__item colortext">Product layouts</li>
                                <li class="list__item colortext">Branded UX and UI</li>
                                <li class="list__item colortext">Infographics</li>
                                <li class="list__item colortext">Web Applications</li>
                                <li class="list__item colortext">Graphic design</li>
                                <li class="list__item colortext">Video Graphics</li>
                            </ul>
                            <div class="recommend">
                                <p class="recommend__count">
                                    Elena and 4 other people recommend OSPREY-IT services.
                                </p>
                                <div class="recommend__friends">
                                    <img src="@/img/user-3.jpg" alt="Friend 1" class="recommend__photo">
                                    <img src="@/img/user-4.jpg" alt="Friend 2" class="recommend__photo">
                                    <img src="@/img/user-5.jpg" alt="Friend 3" class="recommend__photo">
                                    <img src="@/img/user-6.jpg" alt="Friend 4" class="recommend__photo">
                                </div>
                                
                            
         
                            </div>
                                           <div class="cta">
                            <h2 class="cta__book-now">
                                Contact us
                            </h2>
              <button class="btn" @click.prevent="$router.push({name: 'enContacts'})" >
                                <span class="btn__visible">Contact us</span>
                                <span class="btn__invisible">Contacts</span>
                            </button>
                        </div>
                        </div>
                        

                        <div class="user-reviews">
                            <figure class="review">
                                <blockquote class="review__text">
                                     I ordered a corporate logo for my business. Everything was done quickly and at the highest level!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-1.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Egor</p>
                                        <p class="review__user-date">February 23rd, 2017</p>
                                    </div>
                                    <div class="review__rating">9.8</div>
                                </figcaption>
                            </figure>

                            <figure class="review">
                                <blockquote class="review__text">
                                  I ordered a small clothing store on WordPress. The store works great. Thanks!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-2.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Elena</p>
                                        <p class="review__user-date">September 13th, 2018</p>
                                    </div>
                                    <div class="review__rating">9.3</div>
                                </figcaption>
                            </figure>

                                     <figure class="review">
                                <blockquote class="review__text">
                                  It was necessary to check and add the code in JavaScript. The team coped with the task perfectly!
                                </blockquote>
                                <figcaption class="review__user">
                                    <img src="@/img/user-7.jpg" alt="User 1" class="review__photo">
                                    <div class="review__user-box">
                                        <p class="review__user-name">Katrin</p>
                                        <p class="review__user-date">June 29th, 2019</p>
                                    </div>
                                    <div class="review__rating">9.7</div>
                                </figcaption>
                            </figure>

                            <button class="btn-inline">Show all <span>&rarr;</span></button>


                        </div>


                    </div>


                </main>
  

   
</template>

<script>
// @ is an alias to /src
// import Header from '../components/Header.vue';
// import Navbar from '../components/Navbar.vue';
// import View from '../components/View.vue';


export default {

  name: 'Home',
  components: {
      
   
  },
  data() {
    return {
  
    }
  }
}
</script>

<style scoped lang="scss">

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
        background-image: url(../img/chevron-thin-right.svg);
        background-size: cover;

        //Newer browsers - masks
        @supports (-webkit-mask-image: url()) or (mask-image: url()) {
            background-color: var(--color-primary);
            -webkit-mask-image: url(../img/chevron-thin-right.svg);
            -webkit-mask-size: cover;
            mask-image: url(../img/chevron-thin-right.svg);
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
