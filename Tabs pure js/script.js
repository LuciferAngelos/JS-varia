let links = document.querySelectorAll('.tabs-links li');
let content = document.querySelectorAll('.tabs-content li');

for(let i = 0; i < links.length; i++){
	(
		function (i){
			let link = links[i];
			link.onclick = function(){
				for (let j = 0; j < content.length; j++){
					let opacity = window.getComputedStyle(content[j]).opacity;

					if (opacity == '1'){
						content[j].style.opacity = '0';
					}
				}

				content[i].style.opacity = '1'
			}
		}
	) (i)
}