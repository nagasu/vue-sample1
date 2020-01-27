<template>
  <label :class="classes">
    <input
      v-model="internalValue"
      type="checkbox"
      :name="name"
      :value="value"
    />{{ label }}
  </label>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  model: {
    prop: 'checked',
    event: 'change'
  }
})
export default class AtomCheckBox extends Vue {
  @Prop({ type: String })
  name!: string

  @Prop({ type: String })
  label!: string

  @Prop({ type: [Boolean, Array] })
  checked!: boolean | string[]

  @Prop({ type: String })
  value!: string

  @Prop({ type: Boolean, default: false })
  small!: boolean

  get internalValue(): boolean | string[] {
    return this.checked
  }

  set internalValue(newVal: boolean | string[]) {
    this.$emit('change', newVal)
  }

  get classes() {
    return {
      small: this.small
    }
  }
}
</script>

<style scoped lang="scss"></style>
