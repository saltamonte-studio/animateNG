import { trigger } from '@angular/animations';
import { AnimateGallery } from './animations.component';

//: AnimationEntryMetadata


export const AnimateNG =  => {
//export const AnimateNG = (duration: string|number = 500, delay: string|number = 0, easing: string = 'ease-in-out') => {


	return trigger('animateGallery', [
			...AnimateGallery()
	]);
};