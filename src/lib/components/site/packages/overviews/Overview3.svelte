<script>
	import PackageTemplate from '$lib/components/templates/element/package_template.svelte';
	import { get_price_string } from '$lib/scripts/universal/asset_library/prices';
</script>

<PackageTemplate
	title={'3 Sky Pakete nach Wahl - Individuell zusammenstellbar für ihre Bedürfnisse'}
	points={[
		'Programmvielfalt mit zahlreichen hochwertigen deutschen Pay-TV Sendern im Entertainment Paket',
		'Nationaler oder internationaler Live-Sport im Fußball-Bundesliga oder Sport Paket',
		'Sky Entertainment als Grundpaket immer inklusive',
		'2 Pakete wahlweise aus Cinema, Sport und/oder Fußball-Bundesliga und Kids inkl. HD',
		'Sky Q Receiver mit 1TB Festplatte, Ultra HD fähig und Sky On Demand',
		'Sky Go, Sky Kids App - einfach jederzeit auf tausende Titel zugreifen!',
		`UHD optional für ${get_price_string(['uhd'], 'jahr')} mtl.`
	]}
	price_asset_ids={['entertainmentplus', 'cinema', 'sport']}
/>
