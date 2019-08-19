<template>
    <section class="container-fluid">
    <div class="row jumbo-row">
  <b-jumbotron class="w-100" header="User driven design, test and development" lead="Promoting ethical solutions to empower users">
    <p>We are a user experience design and development agency based in South Wales</p>
    <b-button class="btn btn-brand"  href="#">Speak to us ...</b-button>
  </b-jumbotron>
  </div>
      <div class="row h-100">
      <div class="col-md-12">
        <hr>
              </div>
    </div>
    <div class="d-md-flex">
</div>
  </section>
</template>

<style>
    
    
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
<style lang="scss">
    .card {
        @include card();
    }
    
    ;
    .btn-primary {
        @include btn-primary();
    }
    ;
    .footer {
        @include footer();
    }
    ;
</style>