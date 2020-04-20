<template>
  <b-container>
    <ProfileCount />
    <b-row>
      <div
        class="col col-sm-4"
        v-for="user in getUsers"
        :key="user.id"
      >
        <b-card
          :title="user.profile.real_name"
          :img-src="user.profile.image_512"
          :img-alt="user.profile.real_name"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            An amazing developer waiting to make all your dreams come true!
          </b-card-text>
          <b-button :to="{ name: 'profile-id', params: { id: user.id } }" variant="primary">View Profile</b-button>
        </b-card>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'
import ProfileCount from '@/components/ProfileCount'

export default {
  name: 'Profiles',
  components: {
    ProfileCount,
  },
  props: {
    msg: String
  },
  computed: {
    ...mapGetters(['getUsers']),
  },
}
</script>
