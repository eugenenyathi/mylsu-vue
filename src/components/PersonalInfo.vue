<template>
	<form class="signup-form personal-info" @submit.prevent="handleSubmit">
		<h2 class="header">Hello, Signup here!</h2>
		<div class="signup-control">
			<label for="studentNumber">Student Number</label>
			<input
				type="text"
				:class="{
					'signup-input': !error.studentNumber,
					'signup-input error shake': error.studentNumber,
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
					'signup-input error shake': error.nationalId,
				}"
				id="nationalId"
				v-model="nationalId"
			/>
		</div>
		<button class="signup-btn" :disabled="isLoading">Next</button>
	</form>
</template>

<script setup>
import { BaseButton } from "../base/";
import useValidator from "../composables/useValidator.js";
import { ref, reactive } from "vue";

const studentNumber = ref("L0202783T");
const nationalId = ref("79-171724W21");
const error = reactive({ studentNumber: false, nationalId: false });
const isLoading = ref(false);
const { validateStNumber, validateNationalID } = useValidator();
const emit = defineEmits(["signal"]);

const handleSubmit = () => {
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
	console.log("Let's Go");

	//send event to parent element only if
	//the user details are valid
	emit("signal");
};
</script>
