import { AbstractControl, Validators } from "@angular/forms";
import { isCPF } from 'brazilian-values';

export class CpfValidator {
  constructor() {}

  /**
   * Valida se o CPF é valido. Deve-se ser informado o cpf sem máscara.
  */
  static isValidCpf() {
    return (control: AbstractControl): Validators | null => {
      const cpf = control.value.replace(/\D/g, '');
      if (!isCPF(cpf) && control.dirty) { //Se o CPF for inválido e o formcontrol estiver dirty
        return { cpfNotValid: true };
      }
      return null;
      };
  }
}
