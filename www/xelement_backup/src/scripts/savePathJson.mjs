// import fs from 'fs/promises'

//First I need to read the file 
const readJSON = async(filePath)=>{
    try {
        let json = await import(`${filePath}`).then(res=>res.default)
        // console.log(json)
        return json

    } catch (error) {
        console.error('Error Trying to read the JSON file:',error)
    }
}
// Add the object to the file
const dataFromFile = await readJSON('../config/docsRoutes.json') || {}
// console.log('data from JSON file:',dataFromFile)
const d = Object.entries(dataFromFile)
for(const [key,value] of d){
    console.log(key,value)

}

//Save the file to disk. 

const writeJSON = async (data,filepath)=>{
    try {
        const dataObj = {...dataFromFile} 
        console.log(JSON.stringify(dataObj,null,2))
        // const writer = await fs.writeFile(`${filepath}`,dataObj,'utf-8')       
    } catch (error) {
        console.error("Error Trying to write the JSON to file",error);
    }
}
// writeJSON({dir:['special']},'..config/searchIndex.json')