<template>
  <div class="content-main">
    <div class="area area1">
      <div class="content-wrapper">
        <div class="text-content">
          <h1>Welcome to the Fine Art Gallery Blog</h1>
          <p>
            Welcome to the Fine Art Gallery Blog, a portal to the world of art.
            Immerse in classical and contemporary masterpieces, where creativity
            knows no bounds. Join us as we curate fine artworks and share their
            stories.
          </p>
          <!-- Add more text content as needed -->
        </div>
        <div
          class="picture-content"
          style="
            width: 50%;
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <div
            class="picture"
            style="width: 100%; max-height: 100%; object-fit: contain"
          >
            <img
              class="hover-zoom"
              src="@/assets/gallery/15.jpg"
              alt="Image 1"
              style="width: 100%; max-height: 100%; object-fit: contain"
            />
            <div class="picture-note">
              The Great Wave off Kanagawa, Hokusai, 1831
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="area area1">
      <div class="content-wrapper">
        <div
          class="picture-content"
          style="
            width: 50%;
            padding: 20px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
          "
        >
          <div
            class="picture"
            style="width: 100%; max-height: 100%; object-fit: contain"
          >
            <img
              class="hover-zoom"
              src="@/assets/gallery/25.jpg"
              alt="Image 1"
              style="width: 100%; max-height: 100%; object-fit: contain"
            />
            <div class="picture-note">
              The face of Venus, Sandro Botticelli, 1480s
            </div>
          </div>
        </div>
        <div class="text-content">
          <p>
            Discover new artists redefining art's boundaries. Dive into
            creativity and explore dynamic artistry. Our mission is to unveil
            the stories behind masterpieces, enriching your artistic journey.
          </p>
        </div>
      </div>
    </div>

    <div class="hint" hidden="true">
      It is always a bad idea to leave development admin credentials as it is,
      moreover, use weak password
      <a href="/payload.txt" target="_blank">Open Text File</a>
    </div>

    <div class="area area2">
      <div class="registration-form">
        <div>
          <h2 class="login-sign">Login</h2>

          <form @submit.prevent="submitForm">
            <label for="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              v-model="inputData.username"
              placeholder="Username"
              required
              :class="{ 'input-failed': loginFailed }"
            />
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              v-model="inputData.password"
              placeholder="Password"
              required
              :class="{ 'input-failed': loginFailed }"
            />
            <!-- <button type="submit" v-if="mode === 'register'">Register</button> -->
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import axios from "axios";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const mode = ref("register");
    const loginFailed = ref(false);

    const inputData = {
      username: "",
      password: "",
    };

    const toggleMode = (selectedMode) => {
      mode.value = selectedMode;
    };

    const submitForm = () => {
      const loginData = {
        username: inputData.username,
        password: inputData.password,
      };

      console.log("Logging in with data:", loginData);
      axios
        .post("user_login", loginData)
        .then((response) => {
          if (response.data.error) {
            console.log("Wrong credentials");
            loginFailed.value = true;
            setTimeout(() => {
              loginFailed.value = false;
            }, 4000);
          } else {
            store.dispatch("registerUser", loginData.username);
            localStorage.setItem("username", loginData.username);
            router.push({
              name: "MainPage",
            });
          }
        })
        .catch((error) => {
          console.log(error);
          loginFailed.value = true;
          setTimeout(() => {
            loginFailed.value = false;
          }, 4000);
        });
    };

    return {
      mode,
      inputData,
      toggleMode,
      submitForm,
      loginFailed,
    };
  },
};
</script>

<style scoped>
.content-main {
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  flex-direction: column;
  justify-self: center;
  padding-left: 100px;
  padding-right: 100px;
  max-width: 1000px;
  padding-top: 40px;
  background-color: rgba(250, 235, 215, 0.566);
}

.input-failed {
  outline: 2px solid #f4433693;
  border-radius: 5px;
  /* transition: outline 1s ease; */
}

p {
  font-size: 18px;
}

.area {
  /* padding: 20px; */
  box-sizing: border-box;
  overflow: hidden;
  flex: 1;
}

.area1 {
  height: 200px;
  overflow: hidden;
  border-bottom: 1px solid #3333332a;
}

.registration-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
}

form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
  /* margin: 0 auto; */
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
  /* width: 240px; */
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.login-sign {
  display: flex;
  justify-content: center;
  align-items: center;
}

.switcher {
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
}

.switcher h2 {
  padding: 5px 10px;
  cursor: pointer;
  color: #33333325;
}

.switcher h2.active {
  color: #333;
  font-weight: bold;
}

.content-wrapper {
  display: flex;
  height: 400px;
}

.text-content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  /* overflow: auto; */
  width: 50%;
}

.picture-content {
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  width: 50%;
  box-sizing: border-box;
}

.picture {
  /* display: flex; */
  /* justify-content: center; */
  overflow: hidden;
  max-height: 100%;
}

.picture-note {
  font-size: 12px;
  color: #33333393;
}

img {
  max-width: 100%;
  height: auto;
  overflow: hidden;
  /* filter: blur(20px); */
}
</style>
