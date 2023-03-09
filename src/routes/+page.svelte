<script lang="ts">
	import { enhance } from '$app/forms';

	export let form;
</script>

<section>
	<h1>argot</h1>
	<h2>o melhor jeito de entender as ruas da França</h2>

	<form method="POST" use:enhance>
		<label>
			termo:
			<input type="text" name="argot" placeholder="exemplo: ça roule?" />
		</label>

		<button>submit</button>
	</form>

	{#if form?.data}
		<pre>{JSON.stringify(form.data, null, 2)}</pre>
	{/if}
</section>

<style>
	section {
		min-height: 98vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		text-align: left;
	}

	h1 {
		font-size: clamp(5rem, 10vw, 10rem);
		margin: 0;
		text-align: center;
	}

	h2 {
		font-size: clamp(1.5rem, 5vw, 2.5rem);
		line-height: 1.15;
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		align-items: flex-start;
		padding-top: 4rem;
	}

	label {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		font-weight: bold;
		font-size: clamp(1.5rem, 2vw, 2rem);
	}

	input {
		background: none;
		border: none;
		border-bottom: 1px solid black;
		font-size: clamp(2.5rem, 5vw, 10rem);
		flex: 1;
	}

	button {
		border: unset;
		background: none;
		font-size: 2rem;
		cursor: pointer;
		font-weight: bold;
		background: black;
		color: white;
		padding: 0.5rem 1rem;
		margin-left: auto;
	}
</style>
