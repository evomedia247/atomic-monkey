<template>
<section class="container-fluid">
    <div class="row  jumbo-row">
        <b-jumbotron class="w-100">
            <template slot="header">{{$route.params.title}}</template>
            <template slot="lead">
                {{$route.params.subheading}}
            </template>
        </b-jumbotron>
    </div>
    <div class="row h-100">
        <div class="col-md-12">
            <pre>
            {{$route.params.bodycopy}}
            </pre>
        </div>
    </div>
</section>
</template>

<style>
pre {
    display: block;
    font-family: 'Open Sans', sans-serif;
    white-space: pre-wrap;
    margin: 1em 0;
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
    /* Internet Explorer 5.5+ */

}
</style>
