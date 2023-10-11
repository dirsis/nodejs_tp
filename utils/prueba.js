const suma = (lista) => {
    const total = lista.reduce( function (acumulador, elemento) {
        return acumulador + elemento;
    },0)
    return total;
}



function compara(a, b) {
    if (a==b){
        return true
    }else{
        return false
    }
}
function dato(a) {
    return a;
}

module.exports = {suma,compara,dato};
