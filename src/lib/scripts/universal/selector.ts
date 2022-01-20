import type { package_id } from './assets/packages';
import type { receive_id } from './assets/receive_type';
import type { asset_id } from './asset_ids';


interface sub_selector_type {
	required: boolean;
	word: asset_id;
}
export type selector = Array<sub_selector_type>;

export function matches_selector(words: asset_id, chosen_selector: selector): boolean {
	chosen_selector.forEach((sub_selector) => {
		const contained = words.includes(sub_selector.word);
		if (!sub_selector.required === contained) {
			return false;
		}
	});
	return true;
}
