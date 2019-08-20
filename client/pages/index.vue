<template>
<section class="container-fluid">
    <div class="row jumbo-row">
        <b-jumbotron class="w-100" header="User centric websites and apps" lead="Promoting ethical solutions to empower users">
            <p>We are a user experience design and development agency based in South Wales</p>
            <b-button class="btn btn-brand" href="#">More Info</b-button>
        </b-jumbotron>
    </div>
    <div class="row h-100">
        <div class="col-md-12">
            <h1 id="title" class="mt-3 mb-1">{{ homes[0].title }}</h1>
            <h3 class="mb-3">{{ homes[0].subheading }}</h3>
            <hr>
        </div>

    </div>
    <div class="d-md-flex">

        <div class="panel" v-for="article in articles" :key="article.id">
            <h4>{{ article.title }}</h4>
            <p>{{ article.subheading || 'No description provided' }}</p>
            <nuxt-link :to="{ name: 'id', params: { id: article.id, title: article.title, subheading: article.subheading, bodycopy: article.bodycopy}}" class="btn btn-brand">Read more</nuxt-link>
        </div>
    </div>
</section>
</template>

<style lang="scss">
.wrapper {
    display: flex;
    flex-wrap: wrap;
}

.panel {
    /* needed for the flex layout*/
    margin-left: 5px;
    margin-right: 5px;
    min-width: 33%;
    flex: 1 1 33%;
    background-color: #f6cc9b;
    color: #312633;
    border-radius: 0;
    padding: 20px;
    margin-bottom: 10px;
}

.wrapper>* {
    background-color: #f6cc9b;
    color: #312633;
    border-radius: 0;
    padding: 20px;
    margin-bottom: 10px;
}
</style>

<style lang="scss">

.btn-primary {
    @include btn-primary();
}

;

.footer {
    @include footer();
}

;
</style>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)
export default {
    data() {
        return {
            query: ''
        }
    },
    computed: {
        articles() {
            return this.$store.getters['articles/list']
        },
        homes() {
            return this.$store.getters['homes/list']
        }
    },
    async fetch({
        store
    }) {
        store.commit('articles/emptyList')
        store.commit('homes/emptyList')
        const response = await strapi.request('post', '/graphql', {
            data: {
                query: `query {
            articles (limit: 3) {
              id
              title
              subheading
              bodycopy
            }
            homes {
              id
              title
              subheading
            }
          }
          `
            }
        })
        response.data.articles.forEach(article => {
            store.commit('articles/add', {
                id: article.id,
                ...article
            })
        })
        response.data.homes.forEach(home => {
            store.commit('homes/add', {
                id: home.id,
                ...home
            })
        })
    }
}
</script>
