<script lang="ts">
	//import InputField from '$lib/components/layout_components/input_field.svelte';
	import KontaktForm from '$lib/components/site/routes/kontakt/contact_form.svelte';
</script>

<div>
	<h1 class="main_title">Kontakt</h1>
	<div class="side_alignment">
		<div class="side_text_container">
			<p>
				<b>
					Wir helfen Ihnen gerne weiter - sowohl per E-Mail und Kontaktformular rund um die Uhr als
					auch per Telefon zum Festnetzpreis.
				</b>
			</p>
			<p>
				Sie möchten gerne persönlich mit uns sprechen? Wir sind Montag bis Freitag von 10:00 bis
				18:00 Uhr telefonisch erreichbar. Zu anderen Zeiten auch gerne mittels Rückruf, wenn sie uns
				Ihren Kontaktwunsch mitteilen.
			</p>
			<ul>
				<li><b>Telefon: </b>02381-9874699</li>
				<li><b>Fax: </b>0321 - 2111 6558</li>
				<li><b>E-Mail: </b><a href="mailto://info@tagaro.de">info@tagaro.de</a></li>
				<li><b>Internet: </b><a sveltekit:prefetch href="https://tagaro.de">www.tagaro.de</a></li>
			</ul>
		</div>
		<KontaktForm />
	</div>
</div>

<style lang="scss">
	@import '../../lib/style/gradient_text.scss';
	.side_text_container {
		min-width: 50%;
	}
	.side_alignment {
		display: flex;
		justify-content: center;
		gap: 30px;
		max-width: min(90%, 1000px);
		margin: 60px auto;
	}
	.main_title {
		text-align: center;
		font-size: 40px;
		margin-bottom: 50px;
	}

	* {
		line-height: 30px;
	}
	p {
		margin-top: 0px;
		margin-bottom: 30px;
	}
	ul {
		list-style: none;
		padding-left: 0px;
	}

	h1 {
		@include gradient-text;
		padding-bottom: 10px;
	}
</style>
