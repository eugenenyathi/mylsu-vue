<template>
	<form class="signup-form set-password" @submit.prevent="handleSubmit">
		<h2 class="header set-password">Set new password</h2>
		<div class="signup-control">
			<BaseInput
				text="New Password"
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
		<button class="signup-btn">Submit</button>

		<p class="pop-back">
			<ButtonIcon iconName="fa-solid fa-chevron-left" />
			<span @click="pop()">Go back</span>
		</p>
	</form>
</template>

<script setup>
import { BaseButton, BaseInput, ButtonIcon } from "../base/";
import { ref } from "vue";

const emit = defineEmits(["pop"]);

const showPassword = ref(false);
const password = ref("");

const togglePassword = () => {
	console.log("togglePassword");
};

const pop = () => {
	emit("pop");
};
</script>
