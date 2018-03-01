<template>
  <div class="hello">
    <button
      class="button is-primary is-medium"
      @click="cardModal()">
      Launch card modal (Component)
    </button>
  </div>
</template>

<script>
import LoginForm from './authentication/LoginForm'

export default {
  name: 'HelloWorld',
  components: { LoginForm },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    cardModal () {
      this.$modal.open({
        parent: this,
        component: LoginForm,
        hasModalCard: true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
