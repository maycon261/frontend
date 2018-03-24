
/**
 * Interface que representa a entidade CLIENTE 
 * Ela e persistida em tempo de execucao
 *
 * @author maycon
 */
export interface Client {
  cpf?: string;
  nome_cliente?: string;
  endereco?: string;
  estado?: string;
  municipio?: string;
  telefone?: string;
  email?: string;
  senha?: string;
 } 