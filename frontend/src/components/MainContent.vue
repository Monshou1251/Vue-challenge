<template>
  <div class="content-main">
    <div class="area area1">
      <div>
        <div>
          <h2>Explore Masterpieces</h2>
          <p>
            Explore a diverse collection of artworks from renowned artists. Use
            the search bar to find specific artists or
            <strong>keywords</strong>.
          </p>

          <p>Get started and immerse yourself in the world of art!</p>
        </div>
        <div class="search-section">
          <h3>How to Use the Search:</h3>
          <p>
            Enter an artist's name or keyword below and click 'Search' to find
            matching artworks.
          </p>
          <input
            type="text"
            id="userInput"
            v-model="userInput"
            placeholder="e.g., Sandro Botticelli"
          />
          <button @click="fetchData">Search</button>
        </div>
        <h2>Results: {{ userInput }}</h2>
        <ul>
          <li
            class="painting-sample"
            v-for="(painting, index) in results"
            :key="painting.id"
          >
            <h3>
              {{ painting.title }}
            </h3>
            <img
              :src="`http://localhost:8000/media/${painting.image_filename}`"
              alt="Painting"
            />
            <div>
              <!-- Show truncated description with "Show More" button -->
              <p
                v-if="
                  !showFullDescriptions[index] &&
                  painting.description.length > 100
                "
              >
                {{ painting.description.substring(0, 120) }}...
                <a class="toggle-button" @click="toggleDescription(index)"
                  >Show More</a
                >
              </p>
              <!-- Show full description when toggled -->
              <p v-else>
                {{ painting.description }}
                <a
                  class="toggle-button"
                  @click="toggleDescription(index, false)"
                  >Show Less</a
                >
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const userInput = ref("");
    const results = ref([]);
    const showFullDescriptions = ref([]);

    const fetchData = () => {
      const apiUrl = `/get_painting/?input=${userInput.value}`;
      axios
        .get(apiUrl)
        .then((response) => {
          const paintings = response.data.results;
          results.value = paintings;
          showFullDescriptions.value = Array(paintings.length).fill(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    const toggleDescription = (index) => {
      showFullDescriptions.value[index] = !showFullDescriptions.value[index];
    };

    onMounted(() => {
      userInput.value = "Gustav Klimt";
      fetchData();
    });

    return {
      userInput,
      results,
      fetchData,
      showFullDescriptions,
      toggleDescription,
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
  padding-top: 40px;
  padding-bottom: 40px;
  max-width: 1000px;
}

.painting-sample {
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 30px;
  margin: 10px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.toggle-button {
  display: flex;
  justify-content: flex-start;
  margin-top: 30px;
  cursor: pointer;
  font-size: 14px;
  color: #33333365;
  width: 80px;
}

.toggle-button:hover {
  color: #333;
}

li {
  list-style: none;
}

.painting-img {
  border-bottom: 1px solid #3333332a;
  padding: 10px;
}

p {
  font-size: 16px;
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
}

form {
  display: flex;
  flex-direction: column;
  min-width: 300px;
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
  min-width: 250px;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 5px;
}

button:hover {
  background-color: #555;
}

img {
  max-width: 100%;
  height: auto;
  overflow: hidden;
}
</style>
