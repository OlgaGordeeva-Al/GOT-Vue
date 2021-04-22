<template>
  <main class="persons-page">
    <router-link
      v-for="person in persons"
      v-bind:key="person.url"
      class="person-page__link"
      :to="{
        name: 'person',
        params: { id: person.url.split('/').slice(-1)[0] },
      }"
    >
      <div class="persons-page__card person-card">
        <img
          class="person-card__img"
          src="https://ocdn.eu/pulscms-transforms/1/KQ-k9kuTURBXy8yNWY4ZjE5ZC1hOWIwLTRmYTItOWEwMS05ZmQwMWU4M2U3MjQuanBlZ5GTBc0DFM0BvIGhMAE"
          alt="logo"
        />
        <h3 class="person-card__name">
          {{ person.name ? `name: ${person.name}` : "name: unknown" }}
        </h3>
        <p class="person-card__alias">{{ person.aliases[0] }}</p>
        <p class="person-card__titles">
          {{ person.titles[0]}}
        </p>
      </div>
    </router-link>
  </main>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],

  data() {
    return {
      person: null,
      endpoint: "https://www.anapioficeandfire.com/api/characters/",
    };
  },

  methods: {
    getPerson(id) {
      axios(this.endpoint + id)
        .then((response) => {
          this.person = response.data;
          console.log(this.person, this.endpoint + id);
        })
        .catch((error) => {
          console.log("something wrong");
          console.log(error);
        });
    },
  },

  created() {
    this.getPerson(this.id);
  },

  watch: {
    $route() {
      this.getPerson(this.id);
    },
  },
};
</script>

<script>
import axios from "axios";

export default {
  data() {
    return {
      persons: [],
      endpoint: "https://www.anapioficeandfire.com/api/characters",
    };
  },

  created() {
    this.getAllPersons();
  },

  methods: {
    getAllPersons() {
      axios
        .get(this.endpoint)
        .then((response) => {
          this.persons = response.data;
        })
        .catch((error) => {
          console.log("oooops");
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss">
.persons-page {
  background-color:rgb(248, 248, 245);
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px;
  
  a {
    text-decoration: none;
    color: rgb(37, 37, 37);

    &:hover,
    &:active{
      opacity: .9;
      color:rgb(24, 40, 119);
    }
  }
  
}
.person-card{
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 10px;
  background-color: rgba(185, 181, 181, 0.308);
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.4);

  &:hover{
    transform: scale(1.05) translateY(-0.5rem);
    transition: all .2s;
  }
  

  &__img {
    width: 100%;
    border-radius: 5px 5px 0 0;
    opacity: .9;
  }

  &__name {
    font-style: normal;
    font-weight: 500;
    margin-top: 35px;
    text-decoration: none;
  }

  &__alias{
    margin-top: 2px;
  }
}
</style>
