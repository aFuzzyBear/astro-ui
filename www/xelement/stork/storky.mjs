import glob from "fast-glob"
import fs from 'fs/promises'
let paths = await glob('../../docs/XElement/**/*.md')

function globby(){
    const slicer = '../../docs/XElement/'
    return paths.map(
        (slug) => {
         return ({
               slug: slug.slice(slicer.length,-3).split('/').slice(1).join('/').toLowerCase(),
               directory: slug.slice(slicer.length,-3).split('/')[0].toLowerCase(),
               path: new URL(`../${slug}`, import.meta.url).pathname,
        })}
   ).filter(({path})=>(!path.includes('README')))
}
const list = []
for(let route of globby()){
    const {
        slug,directory,path,
        }=route
    list.push({
        path,
        url:`${directory}/${slug}`,
        title:`${directory} ${slug.split('/').join(' ')}`,
        })
}
let reducing = list.reduce((result,current)=>{
        let entries = Object.entries(current)
        let mod = entries.reduce((acc,item,index)=>{
            let [key,value] = item
            acc += `${key} = '${value}'\n`
            return acc

        },"")
        result += `[[input.files]]\n${mod}\n`
        return result
    },'')

let literal = `
[input]
base_directory = "/docs/"
exclude_html_selector = "pre.language"
minimum_indexed_substring_length = 2
frontmatter_handling = "Omit"
stemming = "English"
title_boost = "Ridiculous"

${reducing}

[output]
excerpt_buffer = 5
save_nearest_html_id = true
`

async function writeToml(data){
    try {
        return await fs.writeFile(`public/stork.toml`,data,{encoding:'utf8'})
    } catch (error) {
        console.error("Error Writing the Toml File:",error);
    }
}
await writeToml(literal)
// console.log(literal)