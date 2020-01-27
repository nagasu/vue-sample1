<template>
  <div>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot v-bind:user="user">default</slot>
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SlotItem extends Vue {
  user = {
    name: 'nagasu'
  }
}
</script>
