
export const getPath= (path)=>{
    if(path.includes('/teaming'))
        return path;
    return '/teaming'+ path;
};

