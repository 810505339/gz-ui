<script setup lang="ts">
import { defineProps, defineEmits, ref, useSlots, computed } from 'vue'
type TargetElement = HTMLInputElement | HTMLTextAreaElement
//props
const props = withDefaults(defineProps<{
  placeholder?: string
  value?: string
  type?: string
  showPassword?: boolean
  disabled?: boolean
  clearable?: boolean,
  size: 'sm' | 'lg',
  readonly?: boolean
}>(), {
  type: 'text',
  disabled: false,
  clearable: false,
  size: 'sm',
  readonly: false
})
//emit
const emits = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'focus', event: FocusEvent): void
  (e: 'blur', event: FocusEvent): void
}>()
//slot
const slot = useSlots()

//data
const focused = ref(false)
//是否显示密码
const passwordVisible = ref(false)



//fn
const handleFocus = (event: FocusEvent) => {
  focused.value = true
  emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  focused.value = false

  emits('blur', event)
}
const handleInput = (event: Event) => {
  const value = (event.target as TargetElement).value
  emits('update:value', value)
}
//点击显示密码
const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value

}

function handleClearVisible() {
  emits('update:value', '')
}


//是否显示内置图标
const suffixVisible = computed(() => {
  return !!slot.suffix || props.showPassword || props.clearable
})

//切换密码图标
const passwordIcon = computed(() =>
  passwordVisible.value ? `i-heroicons-eye` : `i-heroicons-eye-slash`
)
//是否显示密码图标
const showPwdVisible = computed(() => {
  return props.showPassword && !props.disabled && props.value
})

//是否显示clear
const showClearVisible = computed(() => {
  return props.clearable && props.value
})


///classFn

function disabledClass() {
  return `${props.disabled ? 'cursor-not-allowed select-none' : ''}`
}

console.log(props.disabled);

</script>
<template>
  <div inline-flex :class="disabledClass()" relative border-box w="100%">
    <div px2 py1px inline-flex items-center justify-center flex-grow rounded border="~" transition shadow-sm
      hover="border-violet-500" :class="[focused ? 'border-violet-500' : '']">
      <span inline-flex items-center justify-center pr2 v-if="slot.prefix">
        <slot name="prefix">


        </slot>
      </span>

      <input outline-none :placeholder="placeholder" w="100%" placeholder-text-gray-4 placeholder-text-sm
        :type="showPassword ? (passwordVisible ? 'text' : 'password') : type" :value="value" @focus="handleFocus"
        @blur="handleBlur" @input="handleInput" :disabled="disabled" :class="disabledClass()" :readonly="readonly" />

      <span inline-flex items-center justify-center pl2 cursor-pointer v-if="suffixVisible">
        <slot name="suffix">
          <i :class="passwordIcon" v-if="showPwdVisible" @click="handlePasswordVisible" inline-block text-sm></i>
          <i i-heroicons-x-mark v-if="showClearVisible" @click="handleClearVisible" inline-block text-sm></i>
        </slot>
      </span>

    </div>
  </div>
</template>
