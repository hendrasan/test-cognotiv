<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    id: string
    label: string
    modelValue: string
    type?: string
    placeholder?: string
  }>(),
  {
    type: 'text'
  }
)

const emit = defineEmits(['update:modelValue'])

const updateValue = (e: Event) => {
  emit('update:modelValue', (e.target as HTMLInputElement).value)
}
</script>

<template>
  <div class="space-y-2 lg:space-y-4">
    <label v-if="label" class="block font-bold text-neutral text-lg lg:text-2xl" :for="id">
      {{ label }}
    </label>
    <div class="relative">
      <input
        :id="id"
        v-bind="$attrs"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        @input="updateValue"
        class="w-full rounded-2xl bg-gray text-base lg:text-lg font-bold placeholder:text-[rgba(45,45,45,0.50)] py-4 px-4"
      />
    </div>
  </div>
</template>
