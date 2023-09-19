<template>
    <div class="1">
        <h2>Submit Queries Here</h2>
        
        <form @submit.prevent="addPost">
            <label for="name"> Name:</label>
            <input type="text" v-model="post_name" required>
            <br>
            <label for="email"> Email:</label>
            <input type="text" v-model="post_email" required>
            <br>
            <label for="message"> Message: </label>
            <textarea v-model="post_message" required></textarea>
            <br>
            <input class="button" type="submit" v-show="post_name!='' && post_email!='' && post_message!=''" @click="addPost" value="Submit">
        </form>
    </div>

    <div class="2">
        <h2>This is the message board</h2>

        <p v-if="list.length==0">The message board is currently empty</p>
        <p v-if="list.length!=0">There are currently {{ list.length }} message/s</p>
        <p v-if="list.length>5">Response may be delayed due to the large number of messages</p>

        <ul>
            <li v-for="post in list" :key="post.id">
            <p>{{ post.name }}</p>
            <p><button class="cross" type="submit" @click="removePost(post.id)">X</button> {{ post.message }}</p>
            <br>
            <br>
            </li>
        </ul>
    </div>
</template>

<script>
    let postId = 0;

    export default {
        data () {
            return {
            post_name: '',
            post_email: '',
            post_message: '',
            list: []
            }
        },
        methods: {
            addPost() {
            this.list.push({
                id: postId++,
                name: this.post_name,
                email: this.post_email,
                message: this.post_message
            })
            this.post_name = "";
            this.post_email = "";
            this.post_message = "";
            },
            removePost(id) {
            this.list = this.list.filter((t) => t.id !== id)
            }
        }
    }
</script>