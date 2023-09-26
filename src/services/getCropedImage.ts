const getCropedImage = (url : string)=> {
    const req = 'media/'
    const target = url.indexOf(req) + req.length
    return url.slice(0,target) + 'crop/600/400/' + url.slice(target)
}
export default getCropedImage;