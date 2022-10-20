<template>
	<form class="signup-form set-password" @submit.prevent="handleSubmit">
		<h2 class="header">Set new password</h2>
		<div class="signup-control">
			<BaseInput
				text="Password"
				class="signup-input"
				v-model="password"
			/>
			<ButtonIcon
				v-if="!showPassword"
				class="eye-icon"
				iconName="fa-solid fa-eye"
				@btnFn="togglePassword"
			/>
			<ButtonIcon
				v-else
				class="eye-icon"
				iconName="fa-solid fa-eye-slash"
				@btnFn="togglePassword"
			/>
		</div>
		<button class="front-btn">Submit</button>
	</form>
</template>

<script setup>
import { BaseButton, BaseInput, ButtonIcon } from "../base/";
import { ref } from "vue";

const showPassword = ref(false);
const password = ref("");

const togglePassword = () => {
	console.log("togglePassword");
};
</script>
