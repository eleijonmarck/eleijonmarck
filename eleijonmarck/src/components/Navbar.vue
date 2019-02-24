<template>
    <div class="container">
        <div class="pure-menu pure-menu-horizontal">
            <a href="#" class="pure-menu-heading pure-menu-link"><router-link to="/">Home</router-link></a>
            <ul class="pure-menu-list">
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
                <li class="pure-menu-item"><a href="#" class="pure-menu-link"><router-link to="/blog">Blogs</router-link></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Navbar'
    }
</script>

<style scoped>
    .pure-menu {
        background-color: #E17842;
        text-align: center;
    }

    .pure-menu a {
        color: white;
    }
</style>