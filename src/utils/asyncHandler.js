
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res,next)).catch((error) => next(error))
    }
}


export { asyncHandler }



//Second Method to the above thing
// const asyncHandler = () => {}                            These three comments are the step by step 
// const asyncHandler = (funct) => () => {}                 explanation of below code   
// const asyncHandler = (funct) => async () => {}           

// const asyncHandler = (fn) => async (error, req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message:  error.message
//         })
//     }
// }

