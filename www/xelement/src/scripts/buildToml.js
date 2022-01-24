// import * as fs from 'node:fs/promises'
import toml from 'toml-patch'
import path from 'path';

const tomlFilePath = path.join(process.cwd(),'/src/config/basic.toml')
const indexFilePath = path.join(process.cwd(),'/src/config/Stork.toml')

async function readToml(){
    try {
        return await fs.readFile(`${tomlFilePath}`,'utf8')
    } catch (error) {
        console.error("Error Reading Toml File:",error);
    }   
}
async function writeToml(data){
    try {
        // console.log("Data to write to file",typeof data,data)
        return await fs.writeFile(`${indexFilePath}`,data,{encoding:'utf8'})
    } catch (error) {
        console.error("Error Writing the Toml File:",error);
    }
}

let dataList = []
export default async function postFileIndexToToml(data) {
    
    dataList.push(data)
    const dataSet = [...new Set(dataList)]
    try {
    let filesString = ""
    let reducing = dataSet.reduce((result,current)=>{
        let entries = Object.entries(current)
        let mod = entries.reduce((acc,item,index)=>{
            let [key,value] = item
            acc += `${key} = '${value}'${(index === entries.length -1)?'':','}`
            return acc

        },"")
        result += `{${mod}},\n`
        return result
    },'')


    let literal = `
    [input]
    base_directory = "xelement-docs"
    url_prefix = "http://localhost:3000/docs/"
    exclude_html_selector = "pre.language"
    minimum_indexed_substring_length = 2
    frontmatter_handling = "Omit"
    stemming = "English"
    title_boost = "Ridiculous"
    files = [
        ${reducing}
    ]
    [output]
    excerpt_buffer = 5
    save_nearest_html_id = true
    `
    return await writeToml(literal)
          
    } catch (error) {
        console.error('Error Posting File index to TOML file',error)
    }
}
