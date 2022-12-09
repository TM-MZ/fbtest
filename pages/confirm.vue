<template>
<div class="confirm">
<div>
<h1>ログイン完了！！</h1>
<p>{{user.name}}</p>
<p>{{user.email}}</p>
</div>
</div>
</template>
<script>

export default defineComponent({
    props:{
        user:Object,
    }
})
</script>



<style scoped>
.confirm {
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
}
</style>