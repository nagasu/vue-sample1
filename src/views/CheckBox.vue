<template>
  <div class="checkbox">
    <div>チェックボックス</div>
    <div>
      <atom-check-box v-model="checked1" label="テスト1" />
      <atom-check-box v-model="checked2" label="テスト2" />
    </div>
    <div>
      <atom-check-box v-model="selected" value="a" label="配列テスト1" />
      <atom-check-box v-model="selected" value="b" label="配列テスト2" />
      <atom-check-box v-model="selected" value="c" label="配列テスト3" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AtomCheckBox from "@/components/atoms/AtomCheckBox.vue";

@Component({
  components: {
    AtomCheckBox
  }
})
export default class CheckBox extends Vue {
  checked1: boolean = false;
  checked2: boolean = false;
  selected: string[] = ["a"];
}
</script>
