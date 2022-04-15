<script lang="ts">
	import Card from '@smui/card';
	import Button, { Label } from '@smui/button';
	import { onMount } from 'svelte';
	import { Geolocation } from '@capacitor/geolocation';

	let L;
	let map;
	let marker;
	let location = '';
	async function getLocation() {
		console.log('===ENV===');
		console.log(import.meta);
		console.log('===ENV===');
		location = '';

		const res = await Geolocation.getCurrentPosition();
		console.log(res);
		location = `${res.coords.latitude}º, ${res.coords.longitude}º`;
		if (marker) marker.remove();
		marker = L.marker([res.coords.latitude, res.coords.longitude]).addTo(map);
		map.flyTo([res.coords.latitude, res.coords.longitude]);

		// if (navigator.geolocation) {
		// 	console.log('navigator.geolocation!');
		// 	navigator.geolocation.getCurrentPosition((position) => {
		// 		location = `${position.coords.latitude}º, ${position.coords.longitude}º`;

		// 		if (marker) marker.remove();
		// 		marker = L.marker([position.coords.latitude, position.coords.longitude]).addTo(map);
		// 		map.flyTo([position.coords.latitude, position.coords.longitude]);
		// 	});
		// }
	}

	onMount(async () => {
		//@ts-ignore
		L = window.L;
		map = L.map('map').setView([51.505, -0.09], 13);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
			foo: 'bar',
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	});
</script>

<div class="card-display">
	<div class="card-container">
		<Card padded>
			<h4>Get location</h4>
			<p>{location ? `Your coordinates are: ${location}` : location}</p>

			<div id="map" />

			<Button on:click={getLocation} variant="raised">
				<Label>Get location</Label>
			</Button>
		</Card>
	</div>
</div>

<style>
	#map {
		height: 50vh;
		width: 90vw;
		margin-bottom: 10px;
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
