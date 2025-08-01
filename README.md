# Automação de testes com Cypress Performático e Confiável *(LumeStack)*

Este projeto foi realizado através do *bootcamp* da *LumeStack*. Através deste *bootcamp*, consegui realizar um teste **"híbrido"**, pois foi utilizado *front-end* e *back-end* para que o teste tenha uma performance melhor e também seja mais confiável, pois é realizado o login através do *back-end*, sendo necessário apenas os testes dentro do sistema (após logado) utilizando a parte *front-end*.

Após a finalização do *bootcamp*, o código todo estava dentro da ***spec.cy.js***, para melhorar a leitura, interpretação e manutenção futura, decidi melhorar a "formatação" do código, criando classes e importando-as para a ***spec.cy.js***, deixando assim toda a parte mais "crua" do código, dentro de classes e facilitando o entendimento futuro. Também adicionei ***newProduct.json*** e ***userData.json***, para que não seja necessário alterar através do ***spec.cy.js***, importando apenas as variáveis e, caso necessário, realizar a alteração em apenas um local.

Utilizei uma variável para reduzir a chamada de: ***userData.userAdmin***, sendo necessário apenas digitar ***adminAccount***, e também adicionei outra variável para reduzir a chamada de: ***newProduct.randomProduct***, sendo necessário apenas digitar ***product***,  facilitando também a leitura do código e chamada das variáveis dentro do ***userData.json*** e ***newProduct***(respectivamente). 

## Sobre o intuito deste teste:

O intuito deste teste é realizar o cadastro de um usuário como administrador, sendo realizado (*front-end*) e utilizando o **before** (antes de tudo), pegar o ***token*** gerado pelo usuário (*back-end*) e utilizar o token ao invés de realizar o **login** e aguardar uma reposta na parte **front-end**, sendo necessário apenas aguardar o tempo da **API** verificar se o token está correto.
