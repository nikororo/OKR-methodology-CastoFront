<template>
    <div>
        <Head/>
        <div class="row no-gutter">
            <toolBar/>
        </div>
    </div>
</template>
<script>
    import Head from './Head'
    import ToolBar from './ToolBar'

    export default {
        name: 'Home',
        components: {
            Head, ToolBar
        }
    }
</script>
