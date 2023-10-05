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
        <MainContent></MainContent>
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
import MainContent from "@/components/MainContent.vue";
//   import MainContent from "@/components/MainPage/MainContent.vue";
// import { ref } from "vue";

export default {
  components: {
    Navbar,
    NavbarBottom,
    Footer,
    MainContent,
  },
  computed: {},
  setup() {
    // const currentComponent = ref("StatisticPage");
    return {
      // currentComponent,
    };
  },
};
</script>
<style scoped>
.main-body {
  font-family: system-ui;
  font-weight: 400;
  color: #444746;
  /* background-color: #fffadd; */
}

.grid-container__main {
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: 250px auto 50px; /* Header and content auto-sized, footer 1 fractional unit */
  height: 100vh;
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
  background-color: rgba(250, 235, 215, 0.566);
}

.footer {
  grid-area: footer;
  height: 100%;
}
</style>
