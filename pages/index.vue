<template>
  <div>
    <h1>Events</h1>
    <EventCard
      v-for="(event, index) in events"
      :key="index"
      :event="event"
      :data-index="index"
    />
  </div>
</template>
<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard,
  },
  async fetch({ store }) {
    await store.dispatch('event/fetchEvents')
  },
  computed: mapState({
    // eslint-disable-next-line prettier/prettier
    events: state => state.event.events,
  }),
}
</script>
