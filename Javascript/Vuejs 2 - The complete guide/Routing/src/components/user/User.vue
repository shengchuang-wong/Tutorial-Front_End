<template>
    <div>
        <h1>The User Page</h1>
        <hr>
        <button @click="navigateToHome" class="btn">Go to Home</button>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            // this.$router.push({ path: '/' });
            this.$router.push({ name: 'home' });
        }
    }
}
</script>
