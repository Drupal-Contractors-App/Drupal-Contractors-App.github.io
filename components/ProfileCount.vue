<template>
  <b-container>
    <b-row>
      <h1>Profile Count: {{ memberCount }}</h1>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ProfileCount',
  props: {
    count: String
  },
  computed: {
    memberCount() {
      return this.$store.getters["getMemberCount"]
    }
  },
}
</script>
