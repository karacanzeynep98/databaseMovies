<template>
    <div class = "movies-container">
        <div v-for="movie in searchMovies" :key = "movie.id">
            <b-button v-b-toggle="'collapse' + movie.id" size="sm" squared variant="outline-danger"> {{movie.title}} </b-button>
            <b-collapse :id="'collapse' + movie.id">
                <b-card> 
                    <p class="card-text"> Movie title is {{movie.title}} </p>
                    <p class="card-text"> Movie id is {{movie.id}} </p>
                    <p class="card-text"> Is it an adult movie?: {{movie.adult}} </p>
                    <p class="card-text"> Movie original language is: {{movie.original_language}} </p>
                    <p class="card-text"> Movie details is: {{movie.overview}} </p>
                </b-card>
            </b-collapse>
        </div>
    </div>
</template>

<script>

// import MovieDetails? from './CenturyDetails.vue'

export default {
    name: "listMovies",
    props: ["searchForm"],
    components: {
        // MovieDetails,
    },
    async mounted() {
        //get URL
        this.searchMovies = await getMovieResults(this.searchForm);

        alert(JSON.stringify(this.searchMovies));
    },
    data() {
        return {
            searchMovies:[],
    }
  }
}

//Makes the Api call first to my server than to Harvard API
async function getQueryObjects(object_url) {
    //making calls to MY API
    const response = await fetch(object_url);
    const data = await response.json();

    alert('DID I GET DATA');
    alert(data);

    return data;
}

async function getMovieResults(queryObject){

    let endpoint = '/getMovies';

    //GET THE URL OUT OF THE INPUTS
    let object_url = getQueryURL(queryObject, endpoint);

    alert('THIS IS MY QUERY URL');
    alert(JSON.stringify(object_url));

    //DO THE API CALL AND GET AN ARRAY OF OBJECTS (LIST OF OBJECTS)
    const listMovies = await getQueryObjects(object_url);

    return listMovies;

}

function getQueryURL(query, endpoint) {

    let object_query_URL = 'http://localhost:3000' + endpoint;

    let object_url = new URL(object_query_URL); //url object

    Object.keys(query).forEach(key => {
        if(query[key]){
            object_url.searchParams.append(key, query[key]);
        }
    });

    return object_url;
}




</script>