**SSE With NodeJS Events**

Esta aplicação utiliza o módulo de eventos do NodeJS para emitir eventos utilizando SSE, de forma assincrona.

No exemplo, tenho uma rota como fonte de eventos /sse-events

e uma rota aleatoria /notify-client, que quando recebe uma requisição, emite para os clientes conectados à rota /sse-events.

Para executar essa aplicação:

1. Clone o repositorio:
   `git clone https://github.com/jrafael29/sse-with-nodejs-events.git`

2. Instale as dependencias do npm:
   `npm install`

3. Inicie a aplicação:
   `npm start`

4. Inicie o frontend (client/index.html)

Ao fazer uma requisição GET na /notify-client, o cliente (index.html) deveria exibir um console.log, com o conteudo referente ao acesso à rota /notify-client
