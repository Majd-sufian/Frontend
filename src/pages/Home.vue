<template>
  <div class="home">
    <User />
    <!-- <div class="home__user">
      <button
        onclick="document.getElementById('id01').style.display='block'"
        style="width:auto;"
      >
        Login
      </button>

      <div id="id01" class="modal">
        <form
          class="modal-content animate"
          action="/action_page.php"
          method="post"
        >
          <div class="container">
            <label for="uname"><b>Username</b></label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <label for="psw"><b>Password</b></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember me
            </label>
          </div>

          <div class="container" style="background-color:#f1f1f1">
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              class="cancelbtn"
            >
              Cancel
            </button>
            <span class="psw">Forgot <a href="#">password?</a></span>
          </div>
        </form>
      </div>
      <button class="home__user_button">Sign In</button>
      <button class="home__user_button">Sign Up</button>
    </div> -->
    <div class="home_restaurants">
      <ul>
        <dl>- <router-link to="/restaurant/4">Ithaa</router-link></dl>
        <dl>
          - <router-link to="/restaurant/4">Dinner in the Sky</router-link>
        </dl>
        <dl>
          - <router-link to="/restaurant/4">Parallax Restaurant</router-link>
        </dl>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home",
  methods: {
    ...mapActions({ addJoke: "setCurrentJoke" }),
    // addJoke() {
    // this.$store.dispatch("setCurrentJoke");
    // this.setCurrentJoke();
    // }
  },
  computed: {
    ...mapGetters({ joke: "getCurrentJoke" }),
    // joke() {
    // return this.getCurrentJoke;
    // }
  },
  // mounted() {
  // this.joke = this.$store.getters.getCurrentJoke;
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
