<template>
  <nav class="navbar">
    <div class="container">

      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            src="static/img/buefy-logo.png"
            alt="Buefy">
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <b-dropdown
            v-model="navigation"
            position="is-bottom-left">
            <a
              slot="trigger"
              class="navbar-item">
              <span>Menu</span>
              <b-icon icon="menu-down"/>
            </a>

            <b-dropdown-item custom>
              Logged as
              <b>Rafael Beraldo</b>
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item has-link>
              <a
                href="https://google.com"
                target="_blank">
                <b-icon icon="link"/>
                Google (link)
              </a>
            </b-dropdown-item>
            <b-dropdown-item value="home">
              <b-icon icon="home"/>
              Home
            </b-dropdown-item>
            <b-dropdown-item value="products">
              <b-icon icon="cart"/>
              Products
            </b-dropdown-item>
            <b-dropdown-item
              value="blog"
              disabled>
              <b-icon icon="book-open"/>
              Blog
            </b-dropdown-item>
            <hr class="dropdown-divider">
            <b-dropdown-item value="settings">
              <b-icon icon="settings"/>
              Settings
            </b-dropdown-item>
            <b-dropdown-item value="logout">
              <b-icon icon="logout"/>
              Logout
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation'
}
</script>
