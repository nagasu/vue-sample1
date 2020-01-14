<template>
  <div class="home">
    <wrapper>
      <template v-slot:header>
        <h1>Header</h1>
      </template>

      <p>aaaa</p>
      <p>bbbb</p>

      <template v-slot:footer>
        <p>Footer</p>
      </template>
    </wrapper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src
import Wrapper from '@/components/slot/Wrapper.vue'

@Component({
  components: {
    HelloWorld,
    Wrapper
  }
})
export default class Home extends Vue {}
</script>
