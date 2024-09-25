<template>
    <div style="margin-top:10%">
    <h1 class="text-center text-dark" v-if="post">{{ post[0].title }}</h1>
    <div class="text-justify" v-if="post" v-html="post[0].content">
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            post: null
        }
    },
    async mounted(){
        const slug = this.$route.params.slug;
        await fetch('/json/posts.json')
        .then((responses) => responses.json())
        .then((data)=>{
            console.log(data)
            const filteredPost = data.filter(post => post.slug === slug);
            this.post = filteredPost;
        })
        
    }
}
</script>

<style scoped>
h2,h3,h4{
    color:black;
}
</style>