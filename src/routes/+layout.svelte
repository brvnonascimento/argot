<script>
	import './styles.css';
	import '@fontsource/bodoni-moda';
</script>

<main>
	<slot />
</main>

<footer />

<style>
	main {
		padding-left: 1rem;
		padding-right: 1rem;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
