O projeto consiste em um app desenvolvido em react-native para a busca e detalhamentos de frutas tropicais;

Rotas:

-A rotas da aplicação consistem em duas telas com atividades diferentes;
-A primeira tela da aplicação estão visiveis todas das frutas tropicais disponibilizadas pela aplicação e uma caixa de busca logo acima com um botão de pesquisa no lado;
-A partir do momento que o usuário digita o nome da fruta (em inglês) e pressiona no botão de pesquisar (representado por uma lupa), a aplicação faz um filtro e devolve apenas a fruta pesquisada que pode ser selecionada e home.js/Home é encaminhado para a tela home.js/Details;
-Na tela inicial também é possível o usuário pressionar na fruta que deseja e da tela home.js/Home é encaminhado para a tela home.js/Details, nesta teram detalhes da fruta selecionada e todas as informações contidas na API (http://tropicalfruitandveg.com/api/tfvjsonapi.php?tfvitem=xxxx);
-Da tela de home.js/Details é possível retornar a tela home.js/Home pois o react-native após a criação das rotas já disponibiliza essa função de retorno.


Comandos necessários para rodar a aplicação:

no windows é necessário além das configurações de privacidade no powershell e as variaveis de ambiente utilizasse os comandos:
 choco install -y nodejs.install python2 jdk8
 npm install -q react-native-cli
 react-native run-android

 no linux é um caminho menos trabalhoso 
 npm install ou yarn install  da sua preferência nesse projeto especificadamente utilizei o yarn
 react-native run-android


 Lembrando para efetuar a depuração no seu celular é necessário efetuar a liberação para a depuração nas "opções de desenvolvedor" em seu celular.


