class apiResponse extends response{

    constructor( statusCode , data , massage = true ){

        this.statusCode = statusCode , 
        this.data = data,
        this.massage = massage,
        this.success = statusCode < 400

    }
}

export{apiResponse}