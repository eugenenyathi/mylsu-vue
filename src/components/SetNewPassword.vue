<template>
	<div class="form-control">
		<BaseInput text="Password" class="signup-input" v-model="password" />
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
</template>
