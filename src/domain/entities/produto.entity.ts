import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cliente } from "./cliente.entity";
import { Compra } from "./compra.entity";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    idProduto: string;

    @Column()
    nome: string;

    @Column()
    qtdestoque: number;

    @Column()
    preco: number;

    @JoinColumn({ name: "CompraId", referencedColumnName: "idCompra" })
    @ManyToOne(type => Compra, compra => compra.Produtos)
    Compra: Compra;

}