
const paths = Object.keys(import.meta.glob('../../../../../docs/XElement/**/*.md'))
    
const fetchData = async(path)=>{
    return await import(path).then(exports=>exports.frontmatter)
  }
export function globby(){
    const docdir = '../../../../../docs/XElement/'
    return paths.map(
        (slug) => {
         return ({
           params: {
               slug: slug.slice(docdir.length,-3).split('/').slice(1).join('/').toLowerCase(),
           },
           props: {
               slug: slug.slice(docdir.length,-3).split('/').slice(1).join('/').toLowerCase(),
               directory: slug.slice(docdir.length,-3).split('/').slice(0,1).join('/').toLowerCase(),
               path: new URL(slug, import.meta.url).pathname,
           },
       })}
   ).filter(
          x=>!(x.props.directory.includes('readme'))
           )
}

export default function filteredPaths(filterby:string){
    return globby().filter(x=>x.props.directory.includes(filterby))
}