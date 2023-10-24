import { Veiculo } from "./veiculo"; 

//classe carreta sendo criada herdando da SuperClasse
export class Carreta extends Veiculo{
    capacidadeCarga: number;
    cargaFria: boolean;

    constructor(marca: string, modelo: string, ano: number, capacidadeCarga: number, cargaFria: boolean) {
        
        super(marca, modelo, ano)//chamando os parâmetros da superclasse
        this.capacidadeCarga = capacidadeCarga
        this.cargaFria = cargaFria
    }
}
