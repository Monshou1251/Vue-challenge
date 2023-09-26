<template>
  <div class="content-main">
    <div class="area area1">
      <h1>Welcome to the Art Gallery Blog</h1>
      <p>
        Explore the world of art, discover new artists, and immerse yourself in
        creativity. Our Art Gallery Blog is your gateway to a diverse and
        vibrant art scene. From classical masterpieces to contemporary marvels,
        we curate the finest artworks and share the stories behind them.
      </p>
      <p>
        Join our community of art enthusiasts and delve into a world where
        colors, shapes, and emotions come to life on canvas. Whether you're a
        seasoned art connoisseur or just starting your journey, our blog offers
        insights, interviews, and reviews that will spark your curiosity and
        deepen your appreciation for art in all its forms.
      </p>
      <p>
        From timeless classics to groundbreaking innovations, we cover it all.
        Our team of passionate writers and experts bring you the latest trends,
        exhibitions, and hidden gems from the art world. Explore the creativity
        of renowned artists and the up-and-coming talents who are redefining
        artistic boundaries.
      </p>

      <div class="registration-form">
        <h2>Register</h2>
        <form @submit.prevent="registerUser">
          <label for="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            v-model="user.username"
            placeholder="Enter your username"
            required
          />
          <label for="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="user.password"
            placeholder="Enter your password"
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
    <div class="area area2">
      <div class="picture-grid">
        <div class="limited-size">
          <div class="column">
            <div class="picture">
              <img src="@/assets/gallery/6.jpg" alt="Image 1" />
            </div>
          </div>
          <div class="column">
            <div class="picture">
              <img src="@/assets/gallery/1.jpg" alt="Image 1" />
            </div>
            <div class="picture">
              <img src="@/assets/gallery/2.jpg" alt="Image 2" />
            </div>
          </div>
          <div class="column">
            <div class="picture">
              <img src="@/assets/gallery/8.jpg" alt="Image 3" />
            </div>
            <div class="picture">
              <img src="@/assets/gallery/4.jpg" alt="Image 4" />
            </div>
          </div>
          <div class="column">
            <div class="picture">
              <img src="@/assets/gallery/5.jpg" alt="Image 3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const user = ref({
      username: "",
      password: "",
    });

    const store = useStore();
    const router = useRouter();

    const registerUser = () => {
      if (user.value.username.toLowerCase() === "admin") {
        // Prevent registration with the username "admin"
        alert("Username 'admin' is not allowed.");
        return;
      }

      store.dispatch("registerUser", user.value);
      router.push(`/account/${user.value.username}`);
    };

    return {
      user,
      registerUser,
    };
  },
};
</script>

<style scoped>
.content-main {
  padding-right: 20px;
  display: grid;
  grid-template-areas: "area1 area2";
  grid-template-columns: 40% 60%;
  grid-gap: 20px;
  height: 100%;
}

.area {
  padding: 20px;
  /* border: 1px solid #ddd; */
  /* background-color: #f9f9f9; */
  border-radius: 5px;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}

.area1 {
  grid-area: area1;
}

.area2 {
  grid-area: area2;
}

h1 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #333;
}

p {
  font-size: 16px;
  color: #555;
}

.registration-form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
}

label {
  font-size: 16px;
  margin-bottom: 6px;
  color: #333;
}

input {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 240px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}

.picture-grid {
  display: flex;
  justify-content: end;
  align-items: start;
  height: 100%;
}

.limited-size {
  max-width: 100%;
  display: flex;
  flex-direction: row;
}

.column {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
}

.picture {
  margin: 0;
  overflow: hidden;
  border-radius: 5px;
  max-height: 100%;
}

img {
  max-width: 100%;
  height: auto;
  border-radius: 15px;
}
</style>
