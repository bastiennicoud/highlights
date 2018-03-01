<template>
  <form action="">
    <div
      class="modal-card"
      style="width: auto">
      <header class="modal-card-head">
        <p class="modal-card-title">Login</p>
      </header>
      <section class="modal-card-body">
        <b-field label="Email">
          <b-input
            :value="email"
            type="email"
            placeholder="Your email"
            required/>
        </b-field>

        <b-field label="Password">
          <b-input
            :value="password"
            type="password"
            password-reveal
            placeholder="Your password"
            required/>
        </b-field>

        <b-checkbox>Remember me</b-checkbox>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button"
          type="button"
          @click="$parent.close()">Close</button>
        <button class="button is-primary">Login</button>
      </footer>
    </div>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: {
    email: {
      type: String,
      default: 'tutu'
    },
    password: {
      type: String,
      default: 'tutu'
    }
  }
}
</script>
