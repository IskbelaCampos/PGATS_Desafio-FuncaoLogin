import {realizarLogin} from '../src/loginUsuarios.js';
import assert from 'node:assert';

describe('Validar dados de Login', function() {
    it('Validar que mensagem de Login realizado é retornado com sucesso', function(){
        const emailInformado = 'teresa@test.com';
        const senhaInformada = 987456;
        const retornoDaFuncao = realizarLogin(emailInformado,senhaInformada);
        assert.equal(retornoDaFuncao, 'Login realizado com Sucesso');
    });

     it('Validar que é disputada uma mensagem de credencias expirada', function(){
        const emailInformado = 'isabel@test.com';
        const senhaInformada = 759514;
        const retornoDaFuncao = realizarLogin(emailInformado,senhaInformada);
        assert.equal(retornoDaFuncao, 'Credenciais expiradas');
    });    
    
     it('Validar que é disputada uma mensagem de Usuario não encontrado', function(){
        const emailInformado = 'catarina@test.com';
        const senhaInformada = 759514;
        const retornoDaFuncao = realizarLogin(emailInformado,senhaInformada);
        assert.equal(retornoDaFuncao, 'Usuario não encontrado');
    });
    
     it('Validar que mensagem de Login realizado é retornado com sucesso', function(){
        const emailInformado = 'teresa@test.com';
        const senhaInformada = 987457;
        const retornoDaFuncao = realizarLogin(emailInformado,senhaInformada);
        assert.equal(retornoDaFuncao, 'Senha invalida');
    });

});