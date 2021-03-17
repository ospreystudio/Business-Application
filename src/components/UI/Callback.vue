<template>
    <div class="blurred-box">
    <span class="close-pop">
        <i class="material-icons" @click="closePopup">close</i>
    </span>

  <div class="info-box">
    <span class="logo-icon"></span>
    <div class="info"> Leave us the phone number and we'll call you back <br>   </div>
    <div class="phone">Phone </div> 
    <div><input class="user-phone" type="text" />
    <button type="submit" class="message-submit" @click="addMessage">Send</button> 

    </div>
  

  </div>
</div>
</template>


<script>
export default {
    name: 'Callback',
    methods: {
            closePopup() {
            this.$emit('closePopup')
        }
    }
}
</script>







<style lang="scss" scoped>

.message-submit {
    position: absolute;
    width: 50px;
    height: 20px;
    z-index: 1;
    top: 110px;
    right: 90px;
    color: #fff;
    border: none;
    background: #114F8A;
    font-size: 10px;
    text-transform: uppercase;
    line-height: 1;
    padding: 6px 10px; 
    border-radius: 10px;
    cursor: pointer;
  


    
    &:hover {
      background: #0487E5;
    }
  }


.blurred-box{
position: fixed;
  z-index: 20;
  width: 550px;
  height: 250px;
  left: 50%;
  top: 40%;


 transform: translate(-50%, -40%);
 border-radius: 20px;
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
 border-radius: 20px;
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

 input.user-phone{
  width: 170px;
  height: 30px;
  opacity: 0.4;
  border-radius: 2px;
  padding: 5px 15px;
  margin: 30px;
  margin-left: 50px;
 border-radius: 20px;
} 

.phone {
    position: absolute;
    float: right;
    color: white;
    left: 35%;
    top: 75%;
    transform: translate(-50%, -50%);
}

</style>