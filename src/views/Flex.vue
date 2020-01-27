<template>
  <div class="container">
    <div class="item item1">
      <div>Item 1</div>
    </div>
    <div class="item item2">Item 2</div>
    <div class="item item3">Item 3</div>
<!--    <div class="item">Item 4</div>-->
<!--    <div class="item">Item 5</div>-->
<!--    <div class="item">Item 6</div>-->
<!--    <div class="item">Item 7</div>-->
<!--    <div class="item">Item 8</div>-->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class Flex extends Vue {}
</script>

<style lang="scss">
.container {
  margin-top: 20px;
  border: solid 1px grey;
  height: 300px;
  .item {
    border: solid 1px cornflowerblue;
    width: 100%;
    height: 100%;
    flex-basis: auto;
    /*height: 100px;*/
  }
}

.container {
  display: flex;
  /*flex-direction: row;*/
  /*flex-wrap: nowrap;*/
  flex-flow: column nowrap;
  /*justify-content: space-between;*/
  /*align-items: center;*/
  /*align-content: center;*/

  .item {
    /*align-self: flex-end;*/
    display: flex;
    align-items: center;
  }
}
</style>
