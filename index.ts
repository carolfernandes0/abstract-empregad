import { Assalariado } from "./src/model/Assalariado";
import { Comissionado } from "./src/model/Comissionado";
import { Horista } from "./src/model/Horista";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`,1500);

a1.setNome(`Carolina`);
a1.setCpf(`2020202020`);
a1.setSalario(1700);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCpf()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);

const c1 = new Comissionado (`Slipkot`,`661661661`, 4000,0.10);
c1.setNome(`Stratovarius`);
c1.setCpf(`763392883`);
c1.setTotalvendas(3200);
c1.setTaxaComissao(0.09);
console.log(`Nome: ${c1.getNome()}, Cpf: ${c1.getCpf()}`);
console.log(`comissão: ${c1.getTaxaComissao()} total vendas: ${c1.getTotalvendas()}`);
console.log(`Vencimento: ${c1.vencimento()}`);

const h1 = new Horista (`Ronaldo`, `88992`,5, 39);
h1.setNome(`durval`);
h1.setCpf(`303921`);
h1.setValorHora(3);
h1.setHorasTrabalhadas(12);
console.log(`Nome: ${h1.getNome()}, CPF: ${h1.getCpf()}`);
console.log(` Valor Hora: ${h1.getValorHora()}, Horas Trabalhadas: ${h1.getHorasTrabalhadas()}`);
console.log(`Vencimento: ${h1.vencimento()}`);

