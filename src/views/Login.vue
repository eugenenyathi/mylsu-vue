<template>
	<section class="signin-container">
		<div class="logo-wrapper">
			<img :src="logo" alt="lupane-logo" class="logo-img" />
		</div>
		<form @submit.prevent="handleLogin">
			<div class="form-control">
				<BaseInput
					:class="{
						'signin-input': !error.stNumber,
						'signin-input error shake':
							error.stNumber || error.axios,
					}"
					placeholder="Student Number"
					:value="studentNumber"
					@input="updateStNumber($event)"
				/>
			</div>
			<div class="form-control last-child">
				<BaseInput
					:type="pwdInputType"
					:class="{
						'signin-input': !error.password,
						'signin-input error shake':
							error.password || error.axios,
					}"
					placeholder="Password"
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

			<router-link
				:to="{ name: 'ResetPassword' }"
				class="forgot-password"
			>
				Forgot Password?
			</router-link>

			<button class="login-btn" :disabled="isLoading">Sign In</button>

			<router-link :to="{ name: 'Signup' }" class="create-account">
				Dont't have an account?
			</router-link>
		</form>
	</section>

	<footer class="footer">
		<p>
			Lupane State University &copy; {{ footerYear }}. All Rights
			Reserved.
		</p>
	</footer>
</template>

<script setup>
//components
import { BaseButton, BaseInput, ButtonIcon } from "../base/";
//composables
import useLogin from "../composables/useLogin.js";
import useValidator from "../composables/useValidator.js";
//helpers
import getFooterYear from "../helpers/getFooterYear.js";

import { ref, reactive } from "vue";
import { useStore } from "vuex";

//assets
const logo = require("../assets/lupane.png");

const studentNumber = ref("L0202783T");
const password = ref("password123");
const pwdInputType = ref("password");
const showPassword = ref(false);

const footerYear = getFooterYear();

const error = reactive({ stNumber: false, password: false, axios: false });

const { validateStNumber, validatePassword } = useValidator();
const { isLoading, login } = useLogin(error);

const updateStNumber = (event) => {
	studentNumber.value = event.target.value.toUpperCase();
};

const togglePassword = () => {
	showPassword.value = !showPassword.value;

	if (pwdInputType.value === "password") pwdInputType.value = "text";
	else pwdInputType.value = "password";
};

const handleLogin = async () => {
	if (!validateStNumber(studentNumber.value)) {
		error.stNumber = true;
	}
	if (!validatePassword(password.value)) {
		error.password = true;
	}

	//if there are no errors, well let's proceed!
	await login(studentNumber.value, password.value);
};
</script>
