<template>
  <div class="home">
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Highlights
          </h1>
          <h2 class="subtitle">
            A simple wish app !
          </h2>
        </div>
      </div>
    </section>

    <section class="section">
      <b-field grouped>
        <b-input
          v-model="newComment.name"
          placeholder="Search..."
          expanded/>
        <b-input
          v-model="newComment.content"
          placeholder="Search..."
          expanded/>
        <p class="control">
          <button
            class="button is-primary"
            @click="addComment()">Add comment !</button>
        </p>
      </b-field>
    </section>

    <section class="section">
      <!-- <div
        v-for="comment in comments"
        :key="comment['.key']">
        <p><strong>{{ comment.name }}</strong></p>
        <p>{{ comment.content }}</p>
      </div> -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      newComment: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    addComment () {
      this.newComment.name = ''
      this.newComment.content = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
