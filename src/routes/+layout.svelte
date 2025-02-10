<script lang="ts">
    import "semantic-ui-css/semantic.min.css";
    let { children } = $props();
</script>

<div class="full height">
    <div class="toc">
        <div class="ui inverted vertical menu" style="border-top-right-radius: 0; border-bottom-right-radius: 0;">
            <div class="header item">Taberin UI</div>
            <a class="item" href="#">Getting Started</a>
            <div class="item">
                <div class="header">Elements</div>
                <div class="menu">
                    <a class="item" href="/button">Button</a>
                </div>
            </div>
        </div>
    </div>
    <div class="article">
        <!-- Site content !-->
        <div class="container">
            {@render children()}
        </div>
    </div>
</div>

<style>
    .full.height {
        background-color: #ffffff;
    }
    .full.height > .toc {
        position: fixed;
        z-index: 1;
        background-color: #1b1c1d;
        width: 200px;
        -webkit-box-flex: 0;
        -webkit-flex: 0 0 auto;
        -ms-flex: 0 0 auto;
        flex: 0 0 auto;
    }
    .article {
        -webkit-box-flex: 1;
        -webkit-flex: 1 1 auto;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        min-width: 0px;
        margin-left: 210px;
    }
</style>
