<script lang="ts">
	import { email, phone_number } from '$lib/info';

	import { preferences_store } from '$lib/scripts/frontend/preferences';
	import { page } from '$app/stores';

	import { aboformular } from '$lib/scripts/frontend/urls';
	import ZumAboformularBar from './zum_aboformular_bar.svelte';
</script>

{#if $page.url.pathname !== aboformular}
	<ZumAboformularBar />
{/if}

<div class="side_alignment">
	<div class="infomationen">
		<h3>Infomationen</h3>
		<ul class="nopoint">
			<li><a href="/service/datenschutz">- Datenschutz -</a></li>
			<li><a href="/service/AGB">- AGB -</a></li>
			<li><a href="/service">- Service -</a></li>
			<li><a href="/service/impressum">- Impressum -</a></li>
			<li><a href="/service/widerrufsrecht">- Widerrufsrecht -</a></li>
		</ul>
	</div>
	<div class="sofortkontakt">
		<h3>Ihr Sofortkontakt</h3>
		<p>
			Montag - Freitag <br />
			10:00 - 18:00 Uhr <br />
			Per E-Mail 24 Stunden lang
		</p>
		<p>
			<a sveltekit:prefetch href={`tel:${phone_number}`}>Telefon: {phone_number}</a> <br />
			Fax: 0321 - 2111 6558 <br />
			<a sveltekit:prefetch href={`mailto://${email}`}>E-Mail: {email}</a>
		</p>
	</div>
	<div class="einkaufen">
		<h3>Sicher Einkaufen</h3>
		<img src="/images/badges/autorisiert.svg" alt="" />
		<img src="/images/badges/ssl.png" alt="" />
		<!-- <a
				href="https://www.trustami.com/erfahrung/tagaro-medienshop-bewertung"
				target="_blank"
				title="Klicken Sie für weitere Informationen"
				rel="noopener"
			>
				<img
					style="width: 70px;"
					src="https://cdn.trustami.com/userimages/100226/hdSeals/59e6544c53a49963318b4568.png?widget=true"
					alt="Trustami"
				/></a
			> -->
		{#if $preferences_store.socialmedia}
			{@html '<div class="widget_container_badge"></div>'}
		{/if}
	</div>
	{#if $preferences_store.socialmedia}
		<div class="social">
			<h3>Social Media</h3>
			<iframe
				src="/raw_components/page_plugin.html"
				frameborder="0"
				title="Tagaro Medienshop Facebook"
			/>
		</div>
	{/if}
</div>
<p class="copyright">© 2022 - TAGARO Medienshop Möglich & Möglich GbR</p>
<p class="notice">
	Alle Sky Marken sind Eigentum der Sky International AG und werden von der Sky Deutschland
	Fernsehen GmbH & Co. KG in Lizenz genutzt. Alle hier verwendeten Namen, Begriffe, Zeichen, Logos
	und Grafiken können Marken- oder Warenzeichen im Besitze ihrer rechtlichen Eigentümer sein und
	werden von uns ausschließlich zu Vermittlungs- und Visualisierungszwecken der einzelnen
	Abonnement-Angebote verwendet.
</p>

<style lang="scss">
	.side_alignment {
		margin-top: 60px;
		display: flex;
		max-width: 80vw;
		margin-left: auto;
		margin-right: auto;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
		gap: 30px;
		color: #545454;
	}
	.nopoint {
		list-style: none;
		padding-left: 0px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 18px;
		gap: 14px;
	}
	.nopoint a {
		padding: 10px;
	}
	a {
		text-decoration: none;
		color: #545454;
		&:hover {
			color: rgb(71, 118, 180);
		}
	}
	.side_alignment > div {
		min-width: min(300px, 90vw);
		max-width: 90vw;
	}
	h3 {
		font-size: 21px;
	}
	.copyright {
		text-align: center;
		margin-top: 30px;
	}
	.notice {
		text-align: center;
		margin-bottom: 10px;
		font-size: small;
		color: #afafaf;
		max-width: 80%;
		width: 1300px;
		margin-left: auto;
		margin-right: auto;
	}
</style>
