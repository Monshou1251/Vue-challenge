<template>
  <div class="flex-container">
    <div class="flex-item-logo">
      <img class="logo" src="@/assets/images4.png" alt="logo" />
    </div>
    <div class="name">Fine Art Gallery</div>
    <div class="flex-item item-2">
      <div class="home">
        <router-link class="plain-link" to="/">Home</router-link>
      </div>
      <div class="home">User: {{ $store.state.user.username }}</div>
      <div class="home">
        <div class="home">
          <router-link class="plain-link" to="/">Logout</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Nav-bar",
  setup() {
    const store = useStore();

    return {
      user: store.state.user,
    };
  },
};
</script>

<style scoped>
.flex-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 15px;
  padding-right: 25px;
  height: 50px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 100;
  font-size: 16px;
  color: #444746;
}

.name {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 22px;
}

.flex-item {
  display: flex;
  flex-direction: row;
}

.logo {
  display: flex;
  align-items: center;
  width: 80px;
  height: auto;
  opacity: 1;
}

.plain-link {
  text-decoration: none;
  color: inherit;
}

.item-2 {
  padding-left: 15px;
  gap: 15px;
  cursor: pointer;
}

.nav-links {
  color: rgb(0, 0, 0);
}

.home {
  transition: box-shadow 0.3s, transform 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
}

.nav-links:hover {
  color: rgba(0, 136, 169, 0.7);
}

.header_button {
  height: 25px;
  font-weight: 600;
  color: #f9f7f3;
  width: 60px;
  margin-bottom: 0;
  background-color: #e94f37;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 5px;
}

.header_button:hover {
  box-shadow: 2px 1px 2px 2px rgba(0, 0, 0, 0.185);
}
</style>
