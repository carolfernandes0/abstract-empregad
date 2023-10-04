import { Assalariado } from "./src/model/Assalariado";

const a1 = new Assalariado(`Miroslav Klose`, `201420142014`,1500);

a1.setNome(`Carolina`);
a1.setCpf(`2020202020`);
a1.setSalario(1700);
console.log(`Nome: ${a1.getNome()}, CPF: ${a1.getCPF()}`);
console.log(`Salário: ${a1.getSalario()}`);
console.log(`Vencimento: ${a1.vencimento()}`);