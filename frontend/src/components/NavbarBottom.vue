<template>
  <div class="flex-container">
    <div class="item2">
      <router-link class="plain-link" to="/">Fine Art Gallery</router-link>
    </div>

    <div class="item3">
      <div class="home">
        <router-link class="plain-link" to="/">Home</router-link>
      </div>
      <div class="home">
        <router-link class="plain-link" to="/">About</router-link>
      </div>

      <div class="home" v-if="isLoggedIn">User: {{ useritem2 }}</div>
      <div class="home" v-if="isLoggedIn">
        <a class="plain-link" @click="logoutUser">Logout</a>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  item2: "Nav-bar",
  setup() {
    const store = useStore();
    const router = useRouter();

    const useritem2 = computed(() => store.getters.getUsername);

    const isLoggedIn = computed(() => !!useritem2.value);

    const logoutUser = () => {
      store.dispatch("clearUserData");
      localStorage.removeItem("username");
      router.push("/");
    };

    return {
      useritem2,
      isLoggedIn,
      logoutUser,
    };
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: 100;
  font-size: 16px;
  color: #444746;
  position: relative;
}

.item2 {
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 32px;
  cursor: pointer;
  font-weight: 600;
  color: #444746;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.item3 {
  display: flex;
  flex-direction: row;
  gap: 15px;
  cursor: pointer;
  margin-right: 10px;
  margin-left: auto;
  font-size: 16px;
}

.plain-link {
  text-decoration: none;
  color: inherit;
}

.home {
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
}

.header_button:hover {
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.185);
}
</style>
