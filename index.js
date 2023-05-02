function receivesAFunction(callback){
    callback()

}
function returnsANamedFunction(){
    return function named(){
        return 1
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        return 1
    }
}