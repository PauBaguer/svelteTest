<script lang="ts">
	import Card from '@smui/card';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Button, { Label } from '@smui/button';

	let username = '';
	let password = '';

	function login() {}
</script>

<div class="card-display">
	<div><h1>Welcome to BookHub</h1></div>
	<div class="card-container">
		<Card padded>
			<h4>Login</h4>
			<Textfield class="shaped-outlined" variant="outlined" bind:value={username} label="Username">
				<Icon class="material-icons" slot="trailingIcon">person</Icon>
				<HelperText slot="helper">Enter your account username!</HelperText>
			</Textfield>
			<Textfield class="shaped-outlined" variant="outlined" bind:value={password} label="Password">
				<Icon class="material-icons" slot="trailingIcon">key</Icon>
				<HelperText slot="helper">Enter your accound password!</HelperText>
			</Textfield>
			<Button on:click={login} variant="raised">
				<Label>Login</Label>
			</Button>
		</Card>
	</div>
</div>

<style>
	.card-display {
		text-align: center;
		font: 1em roboto;
		position: absolute;
		top: 0px;
		bottom: 0px;
		right: 0px;
		left: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		flex-direction: column;
	}
</style>
