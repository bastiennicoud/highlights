<template>
  <div class="login">

    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Connexion
          </h1>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-half is-offset-one-quarter">
            <div class="card">

              <header class="card-header">
                <p class="card-header-title is-centered">
                  Connexion
                </p>
              </header>

              <div class="card-content">
                <b-field>
                  <b-input
                    v-model="loginDatas.email"
                    type="email"
                    size="is-medium"
                    maxlength="40"
                    max="40"
                    icon="account"
                    placeholder="Nom d'utilisateur"/>
                </b-field>
                <b-field>
                  <b-input
                    v-model="loginDatas.password"
                    type="password"
                    size="is-medium"
                    icon="lock-open"
                    placeholder="Mot de passe"
                    password-reveal/>
                </b-field>
                <b-field
                  grouped
                  position="is-centered">
                  <p class="control">
                    <button
                      class="button is-primary is-medium"
                      @click="signIn()">
                      Connexion !
                    </button>
                  </p>
                </b-field>
              </div>

              <footer class="card-footer">
                <p class="card-footer-item">
                  <span>
                    <a href="#">Réinitializer</a> mon mot de passe
                  </span>
                </p>
              </footer>

            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginDatas: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      this.$store.dispatch('user/login', {
        email: this.loginDatas.email,
        pass: this.loginDatas.password
      }).then((user) => {
        this.$toast.open({message: `Correctement connecté`})
      })
    },
    danger (msg) {
      this.$toast.open({
        duration: 3000,
        message: msg,
        type: 'is-danger'
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
