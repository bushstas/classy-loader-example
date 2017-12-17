import React from 'react';

import './index.scss';

export default class Button  extends React.PureComponent {  
 	render() {
 		let {classes, children} = this.props;
 		let name = 'some-class-name';
		return (
			<button class="self $classes">
	        	{children}
	        	<div class=".name .$name ..$name">
	        		...
	        	</div>
	      	</button>
    	)
  	}
}