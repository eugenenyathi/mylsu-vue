<template>
	<template v-if="text">
		<label>{{ text }}</label>
		<input
			:="$attrs"
			type="text"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</template>
	<template v-else>
		<input
			:="$attrs"
			type="text"
			@input="$emit('update:modelValue', $event.target.value)"
		/>
	</template>
</template>

<script setup>
const props = defineProps({ modelValue: String, text: String });
</script>
