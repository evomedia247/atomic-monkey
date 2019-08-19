<template>
  <section class="container-fluid">
  <div class="row jumbo-row">
<b-jumbotron class="w-100" header="Get in touch" lead="Lets chat, connect and start something great together">
  <p>Copy here..</p>
  <b-button class="btn btn-brand" href="#">More Info</b-button>
</b-jumbotron>
</div>
    <div class="row h-100">
    <div class="col-md-12">
      <h1 id="title" class="mt-3">We would love to hear from you</h1>      
    </div>
  </div>
</section>
</template>
<style lang="scss">
    .btn-primary {
        @include btn-primary();
    }
    
    .footer {
        @include footer();
    }
    
    .lead {
        font-family: 'Open Sans', sans-serif;
        font-size: 1.25rem;
    }
</style>
<script>
    export default {}
</script>