<template>
  <div class="wrapper">
    <div class="row-container">
      <div class="col-container">
        <div class="item item1">
          <div>Item 1</div>
        </div>
      </div>
      <div class="col-container">
        <div class="item item1">
          <div>Item 1</div>
        </div>
        <div class="item item2">Item 2</div>
      </div>
      <div class="col-container">
        <div class="item item1">
          <div>Item 1</div>
        </div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Flex extends Vue {}
</script>

<style lang="scss">
.wrapper {
  margin-top: 20px;
}

.row-container {
  display: flex;

  border: solid 1px black;
}

.col-container {
  display: flex;
  flex-flow: column nowrap;

  border: solid 1px grey;
  width: 100%;
  height: 100px;

  .item {
    display: flex;
    align-items: center;

    border: solid 1px cornflowerblue;
    width: 100%;
    height: 100%;
  }
}
</style>
