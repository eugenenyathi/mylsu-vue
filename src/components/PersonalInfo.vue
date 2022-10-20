<template>
	<form class="signup-form personal-info" @submit.prevent="handleSubmit">
		<h2 class="header">Hello, Signup here!</h2>
		<div class="signup-control">
			<label for="studentNumber">Student Number</label>
			<input
				type="text"
				:class="{
					'signup-input': !error.studentNumber,
					'signup-input error shake':
						error.studentNumber || error.axios,
				}"
				id="studentNumber"
				v-model="studentNumber"
			/>
		</div>
		<div class="signup-control">
			<label for="nationalId">National ID</label>
			<input
				type="text"
				:class="{
					'signup-input': !error.nationalId,
					'signup-input error shake': error.nationalId || error.axios,
				}"
				id="nationalId"
				v-model="nationalId"
			/>
		</div>
		<button class="signup-btn" :disabled="isLoading">Next</button>
		<p class="pop-back">
			<ButtonIcon iconName="fa-solid fa-chevron-left" />
			<router-link :to="{ name: 'Login' }">Go back</router-link>
		</p>
	</form>
</template>

<script setup>
import { BaseButton, ButtonIcon } from "../base/";
import useValidator from "../composables/useValidator.js";
import useSignup from "../composables/useSignup.js";

import { ref, reactive } from "vue";

const studentNumber = ref("L0202783T");
const nationalId = ref("79-171724W21");
const error = reactive({
	studentNumber: false,
	nationalId: false,
	axios: false,
});
const { validateStNumber, validateNationalID } = useValidator();
const { isLoading, verifyIdentity } = useSignup(error);

const emit = defineEmits(["signal"]);
const router = useRouter();

const handleSubmit = async () => {
	//validate inputs
	if (!validateStNumber(studentNumber.value)) {
		error.studentNumber = true;
		console.log("error -st");
	}

	if (!validateNationalID(nationalId.value)) {
		error.nationalId = true;
		console.log("error -nat");
	}

	//send the data to the backend
	// await verifyIdentity(studentNumber.value, nationalId.value);
	//send event to parent element only if there are no errors
	if (!error.axios) emit("signal");
};
</script>
