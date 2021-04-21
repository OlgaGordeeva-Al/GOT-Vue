<template lang="html">
  <div class="person-page" v-if="person">
    <h1 class="person-page__name">Name: {{ person.name? person.name:'unknown' }}</h1>
    <p class="person-page__info">Gender: {{ person.gender }}</p>
    <p class="person-page__info">Culture: {{ person.culture }}</p>
    <p class="person-page__info">Born: {{ person.born? person.born: 'unknown' }}</p>
    <p class="person-page__info">Died: {{ person.died? person.died:'unknown' }}</p>
    <h4>Titles and Aliases</h4>
    <p class="person-page__alias">{{ ...person.aliases }}</p>
    <p class="person-page__titles">{{ ...person.titles }}</p>
    <h4>In TV-series</h4>
    <p class="person-page__tvSeries">Seasons: {{ ...person.tvSeries }}</p>
    <p class="person-page__info">Actor(-s): {{ ...person.playedBy }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: ['id'],

    data() {
      return {
        person: null,
        endpoint: 'https://www.anapioficeandfire.com/api/characters/',
      }
    },

    methods: {
      getPerson(id) {
        axios(this.endpoint + id)
          .then(response => {
            this.person = response.data
            console.log(this.person, this.endpoint+id)
          })
          .catch( error => {
            console.log('something wrong');
            console.log(error)
          })
      }
    },
    
    created() {
      this.getPerson(this.id);
    },

    watch: {
      '$route'() {
        this.getPerson(this.id);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .person-page {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h4{
      margin-top: 40px;
      border-bottom:1px solid #535554;
    }

    &__name{
      font-weight: 400;
      border-bottom:1px solid #535554;
    }

    &__info{
      font-weight: 400;
    }
  }
  
</style>
