<template>
    <div class="blurred-box">
    <span class="close-pop">
        <i class="material-icons" @click="closePopup">close</i>
   </span>  
  <div class="info-box">
    <span class="logo-icon"></span>
    <div class="info"> Thanks for contacting us! <br>  <br> We will contact you as soon as possible </div>
  </div>
</div>
</template>


<script>

export default {

    methods:{
            closePopup() {
            this.$emit('closePopup')
            },
        }
    }

</script>


<style lang="scss" scoped>



.blurred-box{
  /* position: relative; */
  position: absolute;
  z-index: 20;
  width: 550px;
  height: 250px;
  left: 50%;
  top: 40%;
  border-radius: 20px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, .9);
  border-radius: 50px;
  overflow: hidden;
}
.close-pop {
   cursor: pointer;
    float: right;
    margin: 25px;
    color:white;
  

}

.blurred-box:after{
 content: '';
 width: 600px;
 height: 300px;
 background: inherit; 
 position: absolute;

 z-index: -2;
 left: -25px;
 right: 0;
 top: -25px;  
 bottom: 0;
 box-shadow: inset 0 0 0 200px rgba(255,255,255,0.05);
 filter: blur(10px);
 
}


/* Form which you dont need */
.info-box{
  position: relative;
  margin-top: 50px;
  text-align: center;

}
.info-box > *{
  display: inline-block;
  width: 200px;

}

.logo-icon{
position: absolute;
  width: 100px;
  height: 100px;
  left: 20%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-size: contain;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/osprey-30de4.appspot.com/o/logo.jpg?alt=media&token=2e7228d3-fd80-4712-879a-64442f26590a);
}

.info{
  margin-left: 100px;
  margin-top: 0px;
  color: white;
  font-size: 20px;

}

/* input.user-password{
  width: 120px;
  height: 18px;
  opacity: 0.4;
  border-radius: 2px;
  padding: 5px 15px;
  border: 0;
} */

</style>