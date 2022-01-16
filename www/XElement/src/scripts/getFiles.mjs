import fs from 'fs'
import path from 'path'

let files = []
const getFilesRecursively = (dir)=>{
    const filesInDir = fs.readdirSync(dir)
    for(const file of filesInDir){
        const absolute = path.join(dir,file)
        if(fs.statSync(absolute).isDirectory()){
            getFilesRecursively(absolute)
        }else{
            files.push(absolute)
        }
    }
}
export default getFiles = (dir)=>{
    getFilesRecursively(dir)
    return files
}