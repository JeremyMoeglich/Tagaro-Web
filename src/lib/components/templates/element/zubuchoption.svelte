<script>
	export let image;
	//export let title;
</script>

<div class="main_alignment">
	<img src={image} alt="" />
	<p>
		<slot />
	</p>
</div>

<style lang="scss">
	@import 'lib/style/gradient_text.scss';
	img {
		width: min(100px, 33.33vw);
	}
	.main_alignment {
		display: flex;
		align-items: center;
		gap: 50px;
		background-color: rgb(231, 229, 229);
		--width: min(800px, 90vw);
		max-width: var(--width);
		min-width: var(--width);
		padding: 20px 40px;
		border-radius: 8px;
	}
	p {
		font-size: 17px;
	}
</style>
