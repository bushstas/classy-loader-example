import React from 'react';
import Button from '../../ui/Button';

import './index.scss';

export default class App extends React.PureComponent {  
 	render() {
 		let classes = ".some-class";
		return (
			<div class="self">
				<h1 class="title">
					Classy Loader is awesome!
				</h1>
				<Button	classes="$classes button::standart">
					Push me
				</Button>
			</div>
    	)
  	}
}