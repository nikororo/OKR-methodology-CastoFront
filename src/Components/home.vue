<template>
    <div>
        <Head/>
        <div class="row">
            <toolBar/>
        </div>
    </div>
</template>
<script>
    import Head from './Head'
    import ToolBar from './toolBar'

    export default {
        name: 'home',
        components: {
            Head, ToolBar
        }
    }
</script>

<style>
    .row {
        margin: 0;
    }
</style>