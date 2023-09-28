import useData from "./useData";

interface PlatformProps{
    id : number;
    name : string;
    slug : string
}

const usePlatform = () => useData<PlatformProps>('/platforms/lists/parents')
export default usePlatform;