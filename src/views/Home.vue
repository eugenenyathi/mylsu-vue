<template>
	<h1>Welcome home</h1>
	<button class="front-btn" @click="handleLogout()">Logout</button>
</template>

<script setup>
import useLogout from "../composables/useLogout.js";

const { logout } = useLogout();

const handleLogout = () => {
	logout();
};
</script>
