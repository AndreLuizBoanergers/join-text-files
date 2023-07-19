const fs = require('fs');
const outPutFile = fs.createWriteStream('output.txt');
//crie pasta folder ou adicione novas  pasta alterando no array
const folder = ['folder'];

function start(){
	folder.forEach(folder=>{
	const files_folder = fs.readdirSync(folder)
	const files = []
	files_folder.forEach(file=>{
		if(file.endsWith('.txt')){
			files.push(`folder\/${file}`);
		}
	})
	const outPutFile = fs.createWriteStream('output.txt');
	files.forEach(file=>{
		const content = fs.readFileSync(file);
		outPutFile.write(content)
	})
	outPutFile.close()

})

}

start()
