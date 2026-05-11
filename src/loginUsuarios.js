const login = [
    {
        nome: 'Teresa Santos',
        email: 'teresa@test.com',
        senha: 987456,
        expirado: false
    },
    {
        nome: 'Isabel Costa',
        email: 'isabel@test.com',
        senha: 759514,
        expirado: true
    },
]

export function realizarLogin(emailInformado, senhaInformada) {
   for (let i = 0; i < login.length; i++) {
       
         if (login[i].email != emailInformado && login[i].senha == senhaInformada) {
                return 'Usuario não encontrado';
         }
         if (login[i].email == emailInformado && login[i].senha != senhaInformada) {
                return 'Senha invalida';
         }
         if (login[i].email == emailInformado && login[i].senha == senhaInformada) {
            
            if (login[i].expirado == true) {
                return 'Credenciais expiradas';
         }
                return 'Login realizado com Sucesso';
         }
    }
}  
