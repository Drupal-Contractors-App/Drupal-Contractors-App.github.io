<template>
  <b-container>
    <nuxt-child/>
    <b-row>
      <h1>{{ user.name }}</h1>
      <img :src="user.image" />
      <p><a v-if="user.linkedin" :href="user.linkedin">LinkedIn</a></p>
      <p><a v-if="user.drupal" :href="user.drupal">Drupal.org</a></p>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String
  },
  computed: {
    user() {
      return this.$store.getters.getUser(this.$route.params.id)
    }
  },
}
</script>
