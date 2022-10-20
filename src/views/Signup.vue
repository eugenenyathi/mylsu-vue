<template>
	<div class="signup-container">
		<PersonalInfo v-if="!page" @signal="signal()" />
		<SetNewPassword v-else />
	</div>
</template>

<script setup>
import PersonalInfo from "../components/PersonalInfo.vue";
import SetNewPassword from "../components/SetNewPassword.vue";
import { BaseButton } from "../base/";

import { ref, inject } from "vue";

const page = ref(0);

const studentNumber = ref("");
const nationalId = ref("");

const signal = () => {
	page.value = true;
};
</script>
