import { Component, OnInit } from '@angular/core';
import { StatesModel } from './demo.model';
import { AnimateGallery } from '../animations/animations.component';

@Component({
	selector: 'app-demo',
	templateUrl: './demo.component.html',
	styleUrls: ['./demo.component.scss'],
	animations: [AnimateGallery]
})
export class DemoComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	state: string = 'turnInUp'//'fadeIn'
	selectedState: string = this.state
	animationInProgress: boolean = false


	apliAnimation(animation: string): void {
		this.state = animation
		this.selectedState = animation
		console.log("state: ", this.state)
	}
	startAnimation() {
		this.animationInProgress = true
	}
	resetAnimation() {
		this.animationInProgress = false

		if (this.state != "") {
			setTimeout(() => {
				if (this.animationInProgress == false) {
					if(this.state.includes("Out")){
						this.state = "fadeIn"
					} else {
						this.state = "";
					}
					console.log("state: ", this.state)
				}
			}, 300)
		}
	}


	animations: StatesModel[]= [
		{
			groupTitle: "Fades",
			options: [
				"fadeIn",
				"fadeOut",
			]
		},{
			groupTitle: "Slides",
			options: [
				"slideInLeft",
				"slideOutLeft",
				"slideInRight",
				"slideOutRight",
				"slideInDown",
				"slideOutDown",
				"slideInUp",
				"slideOutUp",

				"turnInDown",
				"turnOutDown",
				"turnInUp",
				"turnOutUp",
			]
		},{
			groupTitle: "Atention",
			options: [
				"wobble",
				"swing",
				"buzz",
			]
		},{
			groupTitle: "Accordion",
			options: [
				"accordionOpen",
				"accordionClose",
				"bounceInDown",
			]
		}
	]

}
