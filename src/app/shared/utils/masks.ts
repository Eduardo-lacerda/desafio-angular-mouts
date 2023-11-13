const patternsAndMasks ={
  "cpf":{
    pattern:[ /[0-9]/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'-',/\d/, /\d/],
    msg:"O CPF fornecido é inválido",

  },
  "cnpj":{
    pattern:[ /[0-9]/, /\d/,  '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/,'/', /\d/, /\d/, /\d/, /\d/,'-',/\d/, /\d/],
    msg:"O CNPJ fornecido é inválido",
  },
  "date":{
    pattern:[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
    msg:"A data fornecida é inválida",

  },
  "phone":{
    pattern:['(', /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/],
    msg:"O telefone fornecido é inválido",

  },
  "cellphone":{
    pattern:['(', /\d/, /\d/,')',' ',/\d/,/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/],
    msg:"O celular fornecido é inválido",

  },
  "ddd":{
    pattern:['(', /\d/, /\d/,')'],
    msg:"O DDD fornecido é inválido",

  },
  "cep":{
    pattern:[ /[0-9]/, /\d/,/\d/,/\d/,/\d/, '-', /\d/, /\d/, /\d/],
    msg:"O CEP fornecido é inválido",

  },
  "text": {
    pattern: (s: any) => Array.from(s).map(() => /^[a-zA-Z\u00C0-\u00FF-\s-']*$/i),
    msg:"A mensagem fornecida é inválida",

  },
  "number":{
    pattern: (s: any) => Array.from(s).map(() => /[0-9-\s]/i),
    msg:"O numero fornecido é inválido",

  },
  "textOnly":{
    pattern: (s: any) => Array.from(s).map(() => /^[a-zA-Z\u00C0-\u00FF-']*$/i),
    msg:"A mensagem fornecida é inválida",

  },
  "numberOnly":{
    pattern: (s: any) => Array.from(s).map(() => /[0-9]/i),
    msg:"O numero fornecido é inválido",

  },
  "cnae":{
    pattern:[/[0-9]/, /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-',/\d/, /\d/],
    msg:"O CNAE fornecido é inválido",

  },
  "uf":{
    pattern:[/[A-Za-z]/, /[A-Za-z]/],
    msg:"A UF fornecida é inválida",

  },
  "bank":{
    pattern:[/[A-Z0-9]/, /[0-9]/, /[0-9]/, /[a-z0-9]/],
    msg:"O banco fornecido é inválido",

  },
  "agency":{
    pattern:[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    msg:"A agência informada é inválida",

  },
  "currentAccount":{
    pattern:[/[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/, /[0-9]/],
    msg:"A conta corrente informada é inválida",

  }
}

export default patternsAndMasks;

