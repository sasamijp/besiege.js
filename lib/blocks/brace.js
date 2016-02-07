'use strict';

const Block = require('../block.js');

class Brace extends Block {
	constructor (option) {
		if(option.start != undefined && option.end != undefined){
			super({
				id: 7,
				position: option.start.position,
				rotation: option.rotation,
				scale: option.scale,
				vector3: {
					x: option.end.position['x'] - option.start.position['x'],
					y: option.end.position['y'] - option.start.position['y'],
					z: option.end.position['z'] - option.start.position['z']
				}
			});
		}else{
			super({
				id: 7,
				position: option.position,
				rotation: option.rotation,
				scale: option.scale,
				vector3: option.vector3
			});
		}
	}

}

module.exports = Brace;
