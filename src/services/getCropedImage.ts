import image from '../assets/no-image-placeholder-6f3882e0.webp'
const getCropedImage = (url : string)=> {
    if(!url) return image;
    const req = 'media/'
    const target = url.indexOf(req) + req.length
    return url.slice(0,target) + 'crop/600/400/' + url.slice(target)
}
export default getCropedImage;