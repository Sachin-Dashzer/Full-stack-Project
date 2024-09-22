class apiError extends Error {

    constructor(
        statusCode ,
        massage = "Something went Wrong",
        errors = [],
        stack = ""
    ){
        super(massage),
        this.statusCode = statusCode,
        this.massage = massage,
        this.errors = errors,
        this.success = false

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)

        }
        
    }


}

export{apiError}