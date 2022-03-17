# AgendaJS

iniciando, realizar os comandos novamente ao reiniciar. 
OBS: COMANDOS UTILIZADOS NO LADO SERVIDOR

CONFIGURANDO O SSH
 `ssh-keygen 
 
eval $(ssh-agent) 

ssh-add ~/.ssh/id_rsa 

start ~/.ssh 
 
ssh 192.168.0.1 / dentro do projeto ``

 INSTALANDO O NODEJS DENTRO DO SERVIDOR
`
sudo apt i curl -y
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt i nodejs -y
`

 INSTALANDO O PM2. Um gerenciador de processos automatizado e avançado para aplicações Node.js em ambientes de produção. 
`sudo npm i -g pm2
pm2 start

pm2 start /home/JOHN/agenda/server.js --name Agenda
pm2 list

pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u JOHN --hp /home/JOHN
`

 === PROXY REVERSO ====
