import React from 'react';

import './index.scss';

export default class Button  extends React.PureComponent {  
 	render() {
let className = $classy(color, '..color-', ['red', 'green']);
className = $classy(number, '.color-', ['blue', 'yellow']);
className = $classy(number, '..', ['one', 'two']);
className = $classy(quality, '.', ['good', 'bad']);
className = $classy(name, '', ['John', 'Rick']);
 		let {classes, children} = this.props;
 		let name = 'aaa';
		return (
			<button class="  $$classes self $$a aaa $$b aaa">
	        	{children}
	        	<div class=".name .$name ..$name">
	        	</div>
	      	</button>
    	)
  	}
}