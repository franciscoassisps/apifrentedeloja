export class CreateCompraDto{
    readonly idCliente:string;
    readonly idProduto:string
    readonly ReleaseDate: Date;
    readonly valor:number;
    readonly qtdDeprodutos:number;
}