
# Desafio de Automação de Testes - Playwright 

Este repositório contém a solução que desenvolvi para o desafio de automação de testes utilizando Playwright para o site [SauceDemo](https://www.saucedemo.com/).<br/>
O projeto foi desenvolvido em Next.js e inclui uma série de testes end-to-end para validar funcionalidades essenciais da aplicação.

## Índice
<ul>
  <a href="#stack-utilizada"><li>Stack utilizada</li></a>
  <a href="#clonagem-e-instalação"><li>Clonagem e Instalação</li></a>
  <a href="#testes-implementados"><li>Testes Implementados</li></a>
  <a href="#como-rodar-os-testes"><li>Como Rodar os Testes</li></a>
  <a href="#contato"><li>Contato</li></a>
</ul>

## Stack utilizada

**Front-end:** React.js, Next.js, ESLint e Playwright


## Clonagem e Instalação

Requer [Node.js](https://nodejs.org/pt) intalado na máquina.

Clone o repositório em sua máquina.

```bash
git clone git@github.com:osmaclean/playwright-test-base.git
```

Instale as dependências da aplicação `playwright-test-base` com `npm i` ou `npm install`
    
## Testes Implementados

Os testes automatizados foram implementados para cobrir diferentes cenários no site SauceDemo, validando funcionalidades chave do fluxo da aplicação. Abaixo está a lista dos testes incluídos:

- Tentativa de compra com formulário vazio
- Continuar comprando
- Filtrar produtos por ordem crescente de nome
- Filtrar produtos por ordem decrescente de nome
- Filtrar produtos por preço (do menor para o maior)
- Filtrar produtos por preço (do maior para o menor)
- Compra de um produto
- Remover item do carrinho
- Login bem-sucedido
- Login com credenciais incorretas
- Logout da aplicação

## Como Rodar os Testes

Para rodar os testes automatizados com Playwright, siga os seguintes passos:

- 1 - Execute o comando para rodar os testes:

```bash
npx playwright test
```

- 2 - Para abrir o modo interativo do Playwright e visualizar os testes em execução:

```bash
npx playwright test --ui
```

- 3 - Para gerar um relatório após os testes:
```bash
npx playwright show-report
```
## Contato

Caso tenha alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato através do contatolucasmaclean@gmail.com.
