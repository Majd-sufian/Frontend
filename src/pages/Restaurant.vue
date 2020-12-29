<template>
  <div class="restaurant">
    <button class="restaurant__back__home">
      <router-link to="/">BACK TO HOME</router-link>
    </button>

    <br />
    <br />
    <br />

    <div class="restaurant__info">
      <h1>{{ restaurant.name }}</h1>
      <span>- {{ restaurant.address }}</span>
      <div class="restaurant__actions">
        <button class="home__user_button" @click="updateRestaurant">Edit</button>
        <button class="home__user_button">Delete</button>
      </div>
    </div>

    <br />
    <br />
    <div class="restaurant__desc">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like).
      </p>
    </div>
    <br />
    <br />
    <div class="restaurant__comments">
      <h1>Coomments</h1>
      <ul v-for="(comment ,idx) in this.restaurant.comments" :key="idx">
        <dl>- {{comment.content}}</dl>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
  data() {
    return {
      restaurant: []
    };
  },
  methods: {
    updateRestaurant() {
      const id = this.$route.params.id;
      Vue.axios.patch(
        `http://localhost:3000/api/v1/restaurants/${id}`,
        { restaurant: { name: "my res", address: "Jerusalem" } },
        {
          headers: {
            "Content-Type": "application/json",
            "X-User-Email": "mail@gmail.com",
            "X-User-Token": "Wgx6uP9ZXhriHpD3ub_v"
          }
        }
      );
    }
    // deleteRestaurant() {
    //   Vue.axios.delete(`http://localhost:3000/api/v1/restaurants/${id}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-User-Email": "mail@gmail.com",
    //       "X-User-Token": "Wgx6uP9ZXhriHpD3ub_v"
    //     }
    //   });
    //   this.$router.push("http://localhost:8080/");
    // }
  },
  mounted() {
    const id = this.$route.params.id;
    Vue.axios
      .get(`http://localhost:3000/api/v1/restaurants/${id}`)
      .then(response => {
        this.restaurant = response.data;
      });
  }
};
</script>
<style scoped>
.restaurant {
  margin: 40px;
}
.restaurant__info {
  /* margin: 20px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.home__user_button {
  margin-right: 10px;
}
</style>
