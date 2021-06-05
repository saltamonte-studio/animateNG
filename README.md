# AnimateNG
Animations for Angular projects. They are very easy to add and use in any project.

## Demo
https://saltamonte-studio.github.io/animateNG/

## How to use?

`1` Add this file to your project. Contains a constant with all animations<br>
https://github.com/saltamonte-studio/animateNG/blob/master/src/app/animations/animations.component.ts


`2` Import into the decorator of the component that you want to animate the constant `AnimateGallery`<br>

```
import { AnimateGallery } from '../animations/animations.component';
@Component({
	...
	animations: [AnimateGallery]
})
```


`3` Add animations to the template
```
<div [@animateGallery]="state">Elemento a animar</div>
```

## Possible states
### Fades
 - fadeIn
 - fadeOut
### Slides
 - slideInLeft
 - slideOutLeft
 - slideInRight
 - slideOutRight
 - slideInDown
 - slideOutDown
 - slideInUp
 - slideOutUp

 - turnInDown
 - turnOutDown
 - turnInUp
 - turnOutUp
### Atention
 - wobble
 - swing
 - buzz
### Accordion
 - accordionOpen
 - accordionClose
 - bounceInDown
			



