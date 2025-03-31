# 🚀 DncWeather - Consulta de Endereços e Previsão do Tempo

Este projeto é uma aplicação web que permite ao usuário consultar informações de endereço a partir de um 
CEP e obter a previsão do tempo com base em coordenadas geográficas (latitude e longitude). 
O projeto foi desenvolvido utilizando **HTML**, **CSS**, **JavaScript** e **Bootstrap** para estilização e responsividade.

## 🌍 Acesse o Projeto
🔗 [Clique aqui para acessar](https://rodrigo-falcao.github.io/Projeto-DNC/)

## 📌 Funcionalidades

- **Consulta de Endereço por CEP**:
  - O usuário pode inserir um CEP e visualizar informações como logradouro, bairro, localidade/UF e região.
  
- **Previsão do Tempo**:
  - O usuário pode inserir latitude e longitude para obter a previsão de temperatura e umidade relativa do ar.

- **Responsividade**:
  - O layout é adaptado para diferentes tamanhos de tela (mobile, tablet e desktop).
  - Em dispositivos móveis, os resultados são exibidos em formato de coluna.
  - Em dispositivos maiores, os resultados são exibidos em formato de tabela.

## 🛠️Tecnologias Utilizadas

- **HTML5**: Estrutura do projeto.
- **CSS3**: Estilização personalizada.
- **Bootstrap 5**: Framework CSS para responsividade e componentes prontos.
- **JavaScript**: Lógica para consumo de APIs e manipulação do DOM.
- **APIs Utilizadas**:
  - [ViaCEP](https://viacep.com.br/): Para consulta de informações de endereço.
  - [Open-Meteo](https://open-meteo.com/): Para consulta de previsão do tempo.



## 📱 Detalhes de Implementação e Responsividade
1. Consulta de Endereço por CEP
O usuário insere o CEP no campo de entrada.
A função getAdressbyCep consome a API do ViaCEP e exibe os resultados no layout responsivo:
Mobile: Resultados exibidos em formato de coluna.
Desktop: Resultados exibidos em formato de tabela.
2. Previsão do Tempo
O usuário insere latitude e longitude nos campos de entrada.
A função getWeather consome a API Open-Meteo e exibe a previsão de temperatura e umidade.
3. Responsividade
Utilização de classes do Bootstrap como d-block, d-md-none, d-none, d-md-block para alternar entre layouts.
Uso de container, row, col e table-responsive para garantir que o layout se adapte a diferentes tamanhos de tela.

## 💡Exemplo de Uso
### Consulta de Endereço:

- Insira um CEP válido no campo "Digite o CEP".
- Clique no botão "Acessar".
- Os resultados serão exibidos abaixo.
### Previsão do Tempo:

- Insira latitude e longitude nos campos correspondentes.
- Clique no botão "Acessar".
- A previsão de temperatura e umidade será exibida.

É necessário inserir todas as informações para que o resultado apareça por completo!

🔹 **Projeto criado para aprendizado e prática!** 🚀 Sinta-se à vontade para contribuir ou sugerir melhorias. 😊

## 📸Screenshots
<p align="center">
  <img src="https://github.com/user-attachments/assets/0636028d-8b91-45dd-8dbd-c47a43611645" alt="Screenshot do projeto">
</p>
