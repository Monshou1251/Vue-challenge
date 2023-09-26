<template>
  <div class="main-body">
    <div class="grid-container__main">
      <header>
        <nav>
          <Navbar></Navbar>
        </nav>
      </header>
      <main class="content">
        <div class="not-allowed">
          <h1>Access Denied</h1>
          <p>Sorry, you don't have permission to access this page.</p>
          <p>Please contact your administrator for assistance.</p>
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

export default {
  components: {
    Navbar,
    SidebarRight,
  },
  setup() {},
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

.not-allowed {
  text-align: center;
  padding: 20px;
  background-color: #f44336;
  color: #fff;
  border-radius: 5px;
}

.not-allowed h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.not-allowed p {
  font-size: 16px;
  margin-bottom: 10px;
}
</style>
