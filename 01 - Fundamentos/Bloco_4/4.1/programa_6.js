let peca = "rei";
switch(peca.toLowerCase()){
    case "peão":
        console.log("peão - > 1 casa a frente");
        break;
    case "bispo":
        console.log("bispo - > diagonais");
        break;
    case "cavalo":
        console.log("cavalo - > movimento em L");
        break;
    case "torre":
        console.log("torre - > horizontal e vertical");
        break;
    case "dama":
        console.log("dama - > todas as direções");
        break;
    case "rei":
        console.log("rei - > 1 casa em todas as direções");
        break;
    default:
        console.log("Essa peça não existe, ainda!");
        break;
}