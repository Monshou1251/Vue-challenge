<template>
  <div class="main-body">
    <div class="grid-container__main">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main class="content">
        <div class="account-page">
          <h1>Account Page</h1>
          <div class="user-info">
            <p><strong>Username:</strong> {{ username }}</p>
            <p><strong>Email:</strong> {{ email }}</p>
            <p><strong>Register Date:</strong> {{ currentDate }}</p>
            <p><strong>Comments Left:</strong> {{ commentsLeft }}</p>
            <p><strong>Posts Made:</strong> {{ postsMade }}</p>
          </div>
          <div class="change-user-info">
            <h2>Change User Information</h2>
            <div class="input-field">
              <input
                class="styled-input"
                type="text"
                id="newUsername"
                v-model="newUsername"
                placeholder="Enter new username"
              />
              <button class="styled-button" @click="updateUsername">
                Save Username
              </button>
            </div>
            <div class="input-field">
              <input
                class="styled-input"
                type="email"
                id="newEmail"
                v-model="newEmail"
                placeholder="Enter new email"
              />
              <button class="styled-button" @click="updateEmail">
                Save Email
              </button>
            </div>
          </div>
          <div class="saved-pictures">
            <h2>Saved Pictures</h2>
            <div class="picture-row">
              <div
                class="picture"
                v-for="image in lastFiveImages"
                :key="image.id"
              >
                <div class="image-container">
                  <img
                    class="picture-img"
                    :src="require(`@/assets/gallery/${image.src}`)"
                    :alt="image.alt"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="thin-sidebar">
        <SidebarRight></SidebarRight>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import SidebarRight from "@/components/SidebarRight.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  components: {
    Navbar,
    SidebarRight,
  },
  setup() {
    const store = useStore();

    const images = [
      { id: 1, src: "8.jpg", alt: "Image 1" },
      { id: 2, src: "7.jpg", alt: "Image 2" },
      { id: 2, src: "10.jpg", alt: "Image 2" },
      { id: 2, src: "11.jpg", alt: "Image 2" },
    ];

    const lastFiveImages = computed(() => images.slice(-5));

    const username = computed(() => store.state.user.username);
    const email = computed(() => store.state.user.email);
    const currentDate = computed(() => {
      const now = new Date();
      const options = { year: "numeric", month: "long", day: "numeric" };
      return now.toLocaleDateString("en-US", options);
    });

    const commentsLeft = ref(Math.floor(Math.random() * 100));
    const postsMade = ref(Math.floor(Math.random() * 50));

    const newUsername = ref("");
    const newEmail = ref("");

    const updateUsername = () => {
      if (newUsername.value) {
        store.commit("updateUsername", newUsername.value);
      }
    };

    const updateEmail = () => {
      if (newEmail.value) {
        store.commit("updateEmail", newEmail.value);
      }
    };

    return {
      username,
      email,
      currentDate,
      commentsLeft,
      postsMade,
      newUsername,
      newEmail,
      updateUsername,
      updateEmail,
      images,
      lastFiveImages,
    };
  },
};
</script>
<style scoped>
.main-body {
  font-family: system-ui;
  font-weight: 400;
  color: #444746;
  background-color: #e8f0f58a;
}

.grid-container__main {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    "header header"
    "content thin-sidebar";
  height: 100vh;
  min-height: max-content;
  width: 100%;
  overflow: auto;
}
header {
  grid-area: header;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  grid-area: content;
  background-color: #ffffffc9;
  border-radius: 10px;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
}

.thin-sidebar {
  grid-area: thin-sidebar;
}

.picture-row {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

.image-container {
  width: 200px;
  height: 350px;
  border: 1px solid #ddd;
  margin: 5px;
  border-radius: 15px;
  overflow: hidden;
}

.picture-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 150px;
}

.button:hover {
  background-color: #0056b3;
}
</style>
