<template>
  <div>
    <slot-item>
      <template v-slot:header>
        this is header
      </template>

      <template v-slot="{ user: person }">
        @{{ person.name }}
      </template>

      <template v-slot:footer>
        this is footer
      </template>
    </slot-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SlotItem from '@/components/atoms/SlotItem.vue'

@Component({
  components: {
    SlotItem
  }
})
export default class Slot extends Vue {}
</script>
