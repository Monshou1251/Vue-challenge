<template>
  <div class="sidebar_content">
    <div class="links">
      <a
        href="https://twitter.com/famous_painting"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="line_class_rsb">
          <svg-icon
            type="mdi"
            :path="mdiTwitter"
            class="icons_rsb custom-router-link"
          ></svg-icon>
        </div>
      </a>

      <a
        href="https://www.facebook.com/groups/354416731325230/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="line_class_rsb">
          <svg-icon
            type="mdi"
            :path="mdiFacebook"
            class="icons_rsb custom-router-link"
          ></svg-icon>
        </div>
      </a>

      <a
        href="https://www.instagram.com/contemporaryfinearts/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="line_class_rsb">
          <svg-icon
            type="mdi"
            :path="mdiInstagram"
            class="icons_rsb custom-router-link"
          ></svg-icon>
        </div>
      </a>

      <a
        href="https://ru.pinterest.com/sleighneusch/fine-art/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="line_class_rsb">
          <svg-icon
            type="mdi"
            :path="mdiPinterest"
            class="icons_rsb custom-router-link"
          ></svg-icon>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import SvgIcon from "@jamescoyle/vue-icon";
// import { mdiAccount } from "@mdi/js";
import {
  mdiDatabaseExportOutline,
  mdiTwitter,
  mdiPinterest,
  mdiSourcePull,
  mdiCalendarCollapseHorizontalOutline,
  mdiFacebook,
  mdiInstagram,
} from "@mdi/js";
export default {
  name: "Side-bar",
  components: {
    SvgIcon,
  },
  setup() {
    const isActive = ref(false);

    const handleClick = () => {
      isActive.value = true;

      setTimeout(() => {
        isActive.value = false;
      }, 50);
    };

    return {
      path: mdiDatabaseExportOutline,
      mdiPinterest,
      mdiSourcePull,
      mdiCalendarCollapseHorizontalOutline,
      mdiTwitter,
      mdiFacebook,
      mdiInstagram,
      handleClick,
      isActive,
    };
  },
};
</script>

<style>
.sidebar_content {
  overflow: hidden;
}

.custom-router-link {
  color: inherit;
  text-decoration: none;
  display: inline-block;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
  &.active-effect {
    transform: scale(1);
  }
}

.custom-icon {
  &.active-effect {
    transform: scale(1.1);
  }
}

.icon-container {
  width: 24px;
  height: 24px;
  transition: transform 0.3s ease;
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left: 10px; */
  list-style: none;
  text-decoration: none;
  font-family: system-ui;
  font-weight: 500;
  color: #444746;
  height: 50px;
}

.line_class_rsb {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0;
  align-items: center;
  border-radius: 10px 0px 0px 10px;
  transition: background-color 0s;
  /* height: 30px; */
}

.text_class {
  display: flex;
  margin-left: 8px;
  align-items: center;
}

.icons_rsb {
  /* display: flex; */
  margin-left: 10px;
  margin-right: 10px;
  cursor: pointer;
}

a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  text-decoration: none;
}
</style>
