# Arte_Sã
Projetinho Pessoal onde eu quero dar vida a uma tabela que usei há muitos anos, quando trabalhei como costureira/artesã.

✅ A tabela consiste em um cadastro simples de materia prima.

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 140146.png>)

✅ No momento do cadastro é possível colocar a metragem da largura do tecido e o seu valor, o comprimento seria necessário caso houvesse o controle de estoque. 

Porém não cheguei a concluir o controle de estoque, até por que isso acabaria "pedindo" um ambiente de vendas, então achei viável aguardar meu aprendizado para dar sequência a esse projeto.

A partir disso, é possível fazer o cálculo do consumo, tanto dos tecidos, quanto dos aviamentos.

✅ No caso dos aviamentos, é possível detalhar se é do tipo que vem em metros (elástico, viés) ou em unidades (zíper, botão) e o valor deles.

Também é possível informar quantidade, que ajuda muito a ter o valor de unidades, por exemplo os ilhóses, são geralmente vendidos a partir de mil unidades, essas mil unidades custam R$32,00, logo cada unidade vale R$0,032. Isso também seria interessante para um controle de estoque, mas como disse acima, não concluí essa parte.

✅ Após isso temos o cadasto do produto:

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 143912.png>)

Temos essa primeira parte onde informamos os tecidos a serem usados e a metragem usada nesse corte. Ela possui uma caixa de seleção que busca no cadastro dos tecidos todos os dados dos tecidos cadastrados:

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 140522.png>)

A artesã informa a metragem que vai ser usada e automaticamente ele calcula o valor do corte, considerando a altura e a largura do tecido escolhido:

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 140547.png>)

Ela inclui também todos os aviamentos, quantidades e embalagens a serem utilizadas. 

Aqui também temos caixas de seleção que buscam os dados de cada aviamento escolhido:

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 140616.png>)

✅ E por fim, ela informa as horas de produção, custos, taxas, lucro e etc. 

✅ Logo em sequência a tabela vai criando o preço de venda:

![alt text](<frontend/src/assets/Read.me/Captura de tela 2024-04-06 140651.png>)

💔 E foi aqui que percebi que eu cobrava um valor extremamente errado, não sei se essa forma de cálculo está 100% certa, mas ajudou  bastante minhas amigas artesãs.

💖 E o objetivo agora é transformar essa tabela em uma aplicação intuitiva com:

✅ Controle de estoque.

✅ Cadastro de clientes com campos para adicionar medidas e fotos, pois na confecção de corsets em específico, fazemos peças para todo o Brasil ou mundo, então usamos as fotos como paramêtro para conferir as medidas. Parece engraçado, mas sim, conseguimos analisar as medidas com o olhar.

✅ Ambiente para vendas.

📂 E quem sabe um dia, emissão de nota fiscal e por aí vai...

Vou usar o que aprendi na Imã Tech, e a principio já comecei com
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white) 
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)

E é isso.

Idealizadora:

![alt text](frontend/src/assets/Read.me/IMG_20230717_143847736~2-3.jpg)
### Aline Vieira