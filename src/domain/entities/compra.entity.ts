import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, RelationId } from "typeorm";
import { Cliente } from "./cliente.entity";
import { Produto } from "./produto.entity";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    idCompra:string

    @JoinColumn({ name: "ClienteId", referencedColumnName: "idCliente" })
    @ManyToOne(type => Cliente, cliente => cliente.Compras)
    Cliente: Cliente;

    @RelationId((compra: Compra) => compra.Cliente)
    ClienteId: string;

    @Column({ type: "date" })
    ReleaseDate: Date;

    @Column()
    ProdutoId: string;

    @OneToMany(type => Produto, produto => produto.Compra)
    Produtos: Produto[];

    @Column()
    valor:number;

    @Column()
    qtdDeprodutos:number;
    
}