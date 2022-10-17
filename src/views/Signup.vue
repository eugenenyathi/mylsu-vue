<template>
	<div class="signup-container">
		<h2 class="header">{{ formTitles[page] }}</h2>
		<PersonalInfo v-if="!page" @firstPage="sendFirstLoad(data)" />
		<SetNewPassword v-else />
	</div>
</template>

<script setup>
import PersonalInfo from "../components/PersonalInfo.vue";
import SetNewPassword from "../components/SetNewPassword.vue";
import { BaseButton } from "../base/";

import { ref, inject } from "vue";

const formTitles = ref(["Hello, Signup here!", "Set new password"]);
const page = ref(0);

const studentNumber = ref("");
const nationalId = ref("");

const sendFirstLoad = (data) => {
	console.log(data);
};
</script>
