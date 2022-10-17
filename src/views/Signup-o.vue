<template>
	<div class="signup-container">
		<form>
			<div class="segment">
				<h2 class="signup-header">Signup</h2>
				<div class="form-control">
					<BaseInput
						class="signup-input"
						:value="studentNumber"
						@input="updateStNumber"
						text="Student Number"
					/>
				</div>
				<div class="form-control">
					<BaseInput
						text="Password"
						class="signup-input"
						v-model="password"
					/>
				</div>
				<button class="signup-btn">Next</button>
			</div>
			<div class="segment">
				<h2 class="signup-header">Set a new password</h2>
				<div class="form-control">
					<BaseInput
						text="Password"
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
				<button class="signup-btn">Signup</button>
			</div>
		</form>
	</div>
</template>

<script setup></script>
