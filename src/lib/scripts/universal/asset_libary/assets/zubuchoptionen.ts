import { dynamic_to_static_assets } from '../priceable_asset_types';
import type { Priceable_Asset } from '../priceable_asset_types';

enum zubuchoption_id_enum {
	uhd,
	dazn,
	multiscreen,
	kids,
	trendsports,
	plus18,
	netflixstandard,
	netflixpremium
}
export type zubuchoption_id = keyof typeof zubuchoption_id_enum;

const zubuchoption_image_location = '/images/assets/zubuchoptionen/';

export const zubuchoptionen_assets: Array<
	Priceable_Asset<zubuchoption_id>
> = dynamic_to_static_assets([
	{
		id: 'uhd',
		price: 5,
		text: `UHD`,
		selector: {
			descriptor: [
				{
					required: false,
					word: 'internet'
				}
			],
			type: 'AND'
		},
		note: '[TODO]',
		image: `${zubuchoption_image_location}uhd.png`
	},
	{
		id: 'dazn',
		price: { jahr: 12.5, monat: 14.99 },
		text: 'DAZN',
		note: '[TODO]',
		image: `${zubuchoption_image_location}dazn.svg`
	},
	{
		id: 'multiscreen',
		price: 10,
		text: 'Multiscreen',
		note: '[TODO]',
		image: `${zubuchoption_image_location}multiscreen.png`
	},
	{
		id: 'kids',
		price: 5,
		text: 'Kids',
		note: '[TODO]',
		image: `${zubuchoption_image_location}kids.png`
	},
	{
		id: 'trendsports',
		price: 5.99,
		text: 'trendSports',
		note: '[TODO]',
		image: `${zubuchoption_image_location}trendsports.png`
	},
	{
		id: 'plus18',
		price: 0,
		text: '18+ für Blue Movie',
		note: '[TODO]',
		image: `${zubuchoption_image_location}plus18.png`
	},
	{
		id: 'netflixstandard',
		price: 5,
		text: 'Netflix Standard-Abo',
		note: '[TODO]',
		image: `${zubuchoption_image_location}NetflixSDHD.png`,
		selector: {
			descriptor: [
				{
					required: false,
					word: 'netflixpremium'
				}
			],
			type: 'AND'
		}
	},
	{
		id: 'netflixpremium',
		price: 10,
		text: 'Netflix Premium-Abo',
		note: '[TODO]',
		image: `${zubuchoption_image_location}NetflixSDHD.png`,
		selector: {
			descriptor: [
				{
					required: false,
					word: 'netflixstandard'
				}
			],
			type: 'AND'
		}
	}
]);