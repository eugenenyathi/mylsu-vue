<template>
	<form class="signup-form set-password" @submit.prevent="handleSubmit">
		<h2 class="header set-password">Set new password</h2>
		<Alert
			v-if="error.show"
			:msg="error.msg"
			:type="error.type"
			@removeAlert="showError"
		/>
		<div class="signup-control">
			<BaseInput
				:type="pwdType"
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
		<button class="signup-btn" :disabled="isLoading">Submit</button>

		<p class="pop-back">
			<ButtonIcon iconName="fa-solid fa-chevron-left" />
			<router-link :to="{ name: 'Login' }">Go back</router-link>
		</p>
	</form>
</template>

<script setup>
import { BaseButton, BaseInput, ButtonIcon } from "../base/";

import Alert from "../components/Alert";

import useValidator from "../composables/useValidator.js";
import useSignup from "../composables/useSignup.js";
import isEmpty from "../helpers/isEmpty.js";

import { ref, reactive } from "vue";

const showPassword = ref(false);
const password = ref("password123");
const pwdType = ref("password");
const error = reactive({ show: false, msg: "", type: "" });
const { isLoading, signup } = useSignup(error);

const togglePassword = () => {
	showPassword.value = !showPassword.value;

	if (pwdType.value === "password") pwdType.value = "text";
	else pwdType.value = "password";
};

const showError = (show = false, msg, type) => {
	error.show = show;
	error.msg = msg;
	error.type = type;
};

const handleSubmit = async () => {
	if (isEmpty(password.value)) {
		return showError(true, "Password can not be empty!", "danger");
	}

	if (password.value.length < 8) {
		return showError(
			true,
			"Required minimum password length is 8",
			"danger"
		);
	}

	//send the data to the backend
	await signup(password.value);
};
</script>
