<template>
  <div id="app">
    <app-navigation/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import AppNavigation from './components/layouts/AppNavigation'
import AppFooter from './components/layouts/AppFooter'

export default {
  name: 'App',
  components: { AppNavigation, AppFooter }
}
</script>
