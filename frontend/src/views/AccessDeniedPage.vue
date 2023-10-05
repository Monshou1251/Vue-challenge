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
        <div class="not-allowed">
          <h1>Access Denied</h1>
          <p>Sorry, you don't have permission to access this page.</p>
          <p>Please contact your administrator for assistance.</p>
        </div>
      </main>

      <div class="thin-sidebar">
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import NavbarBottom from "@/components/NavbarBottom.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
    NavbarBottom,
  },
  setup() {},
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
  min-width: 600px;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
}

.footer {
  grid-area: footer;
  height: 100%;
}

.not-allowed {
  text-align: center;
  margin: 20px;
  background-color: #f44336;
  color: #fff;
  border-radius: 5px;
  width: 100%;
}

.not-allowed h1 {
  font-size: 24px;
  margin-bottom: 10px;
}

.not-allowed p {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
