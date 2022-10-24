<template>
	<div :class="`alert alert-${type}`">{{ msg }}</div>
</template>

<script setup>
const props = defineProps({
	show: Boolean,
	msg: String,
	type: String,
});

const emit = defineEmits(["removeAlert"]);

const run = () => {
	const clear = setTimeout(() => {
		emit("removeAlert");
	}, 3000);

	return () => clearTimeout(clear);
};

run();
</script>
