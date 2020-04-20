<template>
  <b-container>
    <nuxt-child/>
    <b-row>
      <h1>{{ user.profile.real_name }}</h1>
      <img :src="user.profile.image_512" />
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
