<script lang="ts">
	import Card from '@smui/card';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Button, { Label } from '@smui/button';
	import Auth from '../services/axios';

	let username = '';
	let password = '';

	async function login() {
		let res = await Auth.login(username, password);
		console.log(res);
		if (res.status === 200) {
			console.log('logged in');
			location.href = '/main';
		}
	}
</script>

<div class="card-display">
	<div><h3 class="white-text">Welcome to BookHub</h3></div>
	<div class="card-container">
		<Card padded>
			<h4>Login</h4>
			<Textfield class="shaped-outlined" variant="outlined" bind:value={username} label="Username">
				<Icon class="material-icons" slot="trailingIcon">person</Icon>
				<HelperText slot="helper">Enter your account username!</HelperText>
			</Textfield>
			<Textfield
				class="shaped-outlined"
				variant="outlined"
				bind:value={password}
				type="password"
				label="Password"
			>
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
	.white-text {
		color: #fff;
	}
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
