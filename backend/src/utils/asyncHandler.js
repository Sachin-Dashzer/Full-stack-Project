

const asyncHandler = (resolveHandler)=> async(req , res , next)=>{

    try{
        await resolveHandler(req , res , next)
    }
    catch(err){
        next(err);
    }

}


export default asyncHandler;


// const asyncHandler = (resolveHandler)=> (req, res, next)=>{

//     Promise.resolve(resolveHandler(req, res, next)).catch((err)=> next(err))
// }