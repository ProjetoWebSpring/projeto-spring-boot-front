import "./lista.css";


export default function Lista() {
const produtos = [
{ id: 1, nome: "Play Station 5", marca: "Sony", preco: "4.000,00", estoque: 5, desc: "Video Game 1" },
{ id: 2, nome: "X Box One", marca: "Microsoft", preco: "3.500,00", estoque: 8, desc: "Video Game 2" },
{ id: 3, nome: "Nintendo Switch", marca: "Nintendo", preco: "2.500,00", estoque: 2, desc: "Video Game 3" },
];


return (
<article className="topo-lista">
<div className="lista-container">
<h1 className="titulo-lista">Lista de Produtos</h1>


<table className="tabela-lista">
<thead>
<tr>
<th>ID</th>
<th>Nome</th>
<th>Marca</th>
<th>Preço</th>
<th>Estoque</th>
<th>Descrição</th>
<th>Ações</th>
</tr>
</thead>


<tbody>
{produtos.map((p) => (
<tr key={p.id}>
<td>{p.id}</td>
<td>{p.nome}</td>
<td>{p.marca}</td>
<td>{p.preco}</td>
<td>
{p.estoque}
{p.estoque <= 3 && (
<span className="alerta-estoque">Estoque baixo</span>
)}
</td>
<td>{p.desc}</td>
<td>
<button className="btn-editar">Editar</button>
<button className="btn-excluir">Excluir</button>
</td>
</tr>
))}
</tbody>
</table>


<button className="add-produto-btn">Adicionar Produto</button>
</div>
</article>
);
}