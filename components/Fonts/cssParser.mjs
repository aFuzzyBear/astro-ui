export function parseCss(text) {
	let tokenizer = /([\s\S]+?)\{([\s\S]*?)\}/gi,
		rules = [],
		rule, token;
	//text = text.replace(/\/\*[\s\S]*?\*\//g, '');
	while ( (token=tokenizer.exec(text)) ) {
		style = parseRule( token[2].trim() );
		let comment = token[1].trim().split(' */')[0].split('/* ')[1];
		rule = {
			selector : token[1].trim().replace(/\s*\,\s*/, ', ').trim().replace(/\/\*[\s\S]*?\*\//g, '').replace(/\r?\n|\r/g, ''),
			style : style,
			comment: comment,
		};
		rules.push(rule);
	}
	return rules;
}

export function stringify(css){
	let text = '';
	let keys = Object.keys(css);
	for(let i = 0; i < keys.length; i++){
		let extObjName = Object.getOwnPropertyNames(css[keys[i]]);
		extObjName.forEach(val => {
			if(!(css[keys[i]][val] instanceof Object)){
				text += css[keys[i]][val] + '{\n'
			} else {
				let intObjName = Object.getOwnPropertyNames(css[keys[i]][val]);
				intObjName.forEach(val2 => {
					text += ' ' + val2 + ': ' + css[keys[i]][val][val2] + ';\n';
				})	
				text += '}\n';
			}
		});
	}
	return text;
}

function parseRule(css) {
	let tokenizer = /\s*([a-z\-]+)\s*:\s*((?:[^;]*url\(.*?\)[^;]*|[^;]*)*)\s*(?:;|$)/gi,
		obj = {},
		token;
	while ( (token=tokenizer.exec(css)) ) {
		obj[token[1].toLowerCase()] = token[2];
	}
	return obj;
}

