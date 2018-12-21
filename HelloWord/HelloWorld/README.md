# Como iniciei o projeto:
Usando esse [site](https://hackernoon.com/react-native-how-to-setup-your-first-app-a36c450a8a2f "site") como base, basicamente realizei 3 comandos:
- npm install -g react-native-cli
- react-native init HelloWorld
- cd HelloWorld


## Problemas e soluções

------------


#####  Problemas no **Visual** **Code**:
Estava dando problems no app.js então instalei uma [extensão](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode "extensão") para  ter suporte a linguagem flow


##### Para usar emulador com o comando react-native run-android:
Na pasta android, criei um arquivo chamado `local.properties` e dentro dele escrevi sdk.dir = |caminho para o sdk do Android Studio|
No meu caso ficou assim:
sdk.dir = /home/ramon/Android/