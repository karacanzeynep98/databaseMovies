<template>
  <div>
    <p>Search Movies by properties</p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-1" label="Title:" label-for="input-1" :invalid-feedback="invalidFeedback">
        <b-form-input id="input-1" v-model="form.title" placeholder="Enter movie name"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Popularity > :" label-for="input-5" :invalid-feedback="invalidFeedback">
        <b-form-input id="input-2" v-model="form.popularity" placeholder="Enter popularity"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Vote Average:" label-for="input-2" :invalid-feedback="invalidFeedback">
        <b-form-input id="input-2" v-model="form.vote_avg" placeholder="Enter vote average"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Original Language:" label-for="input-3" :invalid-feedback="invalidFeedback">
        <b-form-input id="input-3" v-model="form.original_language" placeholder="Enter genre"> </b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Budget:" label-for="input-3" :invalid-feedback="invalidFeedback">
        <b-form-input id="input-3" v-model="form.budget" placeholder="Enter genre"> </b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
    <listMovies v-if="isPopulated" v-bind:searchForm="form"/>
    
  </div>
</template>

<script>

import listMovies from './listMovies.vue'

export default {
    computed: {
        invalidFeedback() {
        if (this.form.title.length >= 4 || this.form.popularity.length >= 4 || this.form.vote_avg.length >= 4 || this.form.original_language.length >= 4 || this.form.budget.length >= 4) {
          return ''
        } else {
          return 'Please enter something'
        }
      }
    },
    components: {
        listMovies,
    },
    data() {
      return {
        form: {
          title: '',
          popularity: '',
          vote_avg: '',
          original_language: '',
          budget: ''
        },
        show: true,
        isPopulated: false, 
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        alert("You submitted a form!");
        this.isPopulated = true;
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.title = ''
        this.form.popularity = ''
        this.form.vote_avg = ''
        this.form.original_language = ''
        this.form.budget = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
          this.isPopulated = false
        })
      },
    },
}





</script>

