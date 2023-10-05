<template>
  <div class="main-body">
    <div class="grid-container__main">
      <header>
        <nav>
          <Navbar></Navbar>
          <NavbarBottom></NavbarBottom>
        </nav>
      </header>
      <main class="content">
        <LoginContent></LoginContent>
      </main>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import NavbarBottom from "@/components/NavbarBottom.vue";
import Footer from "@/components/Footer.vue";
import LoginContent from "@/components/LoginContent.vue";

export default {
  components: {
    Navbar,
    NavbarBottom,
    Footer,
    LoginContent,
  },
  computed: {},
  setup() {
    return {};
  },
};
</script>
<style scoped>
.main-body {
  font-family: system-ui;
  font-weight: 400;
  color: #444746;
}

.grid-container__main {
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
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
  justify-self: center;
  align-items: center;
  grid-area: content;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
  max-width: 1200px;
}

.footer {
  grid-area: footer;
}
</style>
