import { trigger } from '@angular/animations';
import { AnimateGallery } from './animations.component';

//: AnimationEntryMetadata


export const AnimateNG = (duration: string|number = 500, delay: string|number = 0, easing: string = 'ease-in-out') => {

	let timing: string = [
			typeof(duration) === 'number' ? `${duration}ms` : duration,
			typeof(delay) === 'number' ? `${delay}ms` : delay,
			easing
	].join(' ');

	return trigger('animateGallery', [
			...AnimateGallery(timing)
	]);
};