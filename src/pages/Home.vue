<template>
  <div class="home">
    <ul v-for="({name, id},idx) in this.restaurants" :key="idx">
      <dl>
        <span>{{idx+1 }}-</span>
        <router-link :to="`/restaurant/${id}`">{{ name }}</router-link>
      </dl>
    </ul>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import Vue from "vue";

export default {
  name: "Home",
  data() {
    return {
      restaurants: []
    };
  },
  mounted() {
    Vue.axios.get("http://localhost:3000/api/v1/restaurants").then(response => {
      this.restaurants = response.data;
    });
  }
  // mounted: function() {
  // }
  // created() {
  //   // debugger;
  // },
  // computed: {
  //   // ...mapGetters({ restaurants: "getAllRestaurants" })
  //   ...mapActions({ restaurants: "setRestaurants" });
  //   debugger;
  // }
};
</script>

<style scoped>
.home {
  /* display: flex;
  flex-direction: column; */
  margin: 20px;
}
.home__user {
  text-align: right;
}
.home__user_button {
  padding: 5px;
  border: 1px solid black;
  margin: 5px;
}
.home__user_button:hover {
  background: black;
  color: wheat;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
  position: relative;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding-top: 60px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fefefe;
  margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
}

/* The Close Button (x) */
.close {
  position: absolute;
  right: 25px;
  top: 0;
  color: #000;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: red;
  cursor: pointer;
}

/* Add Zoom Animation */
.animate {
  -webkit-animation: animatezoom 0.6s;
  animation: animatezoom 0.6s;
}

@-webkit-keyframes animatezoom {
  from {
    -webkit-transform: scale(0);
  }
  to {
    -webkit-transform: scale(1);
  }
}

@keyframes animatezoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}
</style>
