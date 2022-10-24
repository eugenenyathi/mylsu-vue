<template>
	<div class="signup-container">
		<PersonalInfo
			v-if="!page"
			@signal="signal()"
			header="Hello, Start here!"
		/>
		<SetNewPassword v-else @pop="pop()" />
	</div>
</template>

<script setup>
import PersonalInfo from "../components/PersonalInfo.vue";
import SetNewPassword from "../components/SetNewPassword.vue";
import { BaseButton } from "../base/";

import { ref, inject } from "vue";

const page = ref(false);

const studentNumber = ref("");
const nationalId = ref("");

const signal = () => {
	page.value = true;
};

const pop = () => {
	page.value = false;
};
</script>
