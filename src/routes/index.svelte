<script lang="ts">
	import Card from '@smui/card';
	import Textfield from '@smui/textfield';
	import Icon from '@smui/textfield/icon';
	import HelperText from '@smui/textfield/helper-text';
	import Button, { Label } from '@smui/button';
	import Banner, { CloseReason } from '@smui/banner';
</script>

<div class="header">
	<a href="/">
		<img src="/logo.png" alt="BookHub" width="120px" />
	</a>
	<div>
		<Button color="secondary" on:click={() => (location.href = '/login')} variant="outlined">
			<Label>Login</Label>
		</Button>
		<Button color="secondary" on:click={() => (location.href = '/login')} variant="outlined">
			<Label>Register</Label>
		</Button>
	</div>
</div>

<div class="card-display">
	<div>
		<h1 class="mdc-typography--headline3 white-text">Welcome to BookHub!</h1>
	</div>
	<h5 class="white-text">the reader's social network</h5>
</div>

<style>
	.white-text {
		color: #fff;
	}

	.header {
		top: 0px;
		background-color: #2996fc;
		right: 0px;
		left: 0px;
		position: absolute;
		z-index: 100;
		display: flex;

		justify-content: space-between;
		align-items: center;

		padding: 10px 10px 10px 10px;
		gap: 10px;
	}

	img {
		flex: none;
	}
	.card-display {
		text-align: center;

		font-size: xx-large;
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
