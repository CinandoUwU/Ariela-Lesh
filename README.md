# 🦋 Ariela Lash Designer App

Aplicativo de gerenciamento de agenda e clientes para Ariela Lash Designer.

## 📱 Sobre o App

Este é um aplicativo mobile desenvolvido com **React Native** e **Expo** para gerenciar:
- 📅 **Agenda** de atendimentos
- 👥 **Clientes** e histórico
- 🔔 **Notificações** de lembretes
- 💾 **Banco de dados local** com SQLite

## 🚀 Instalação

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Expo CLI
- Para Android: Android Studio / dispositivo físico
- Para iOS: Xcode (apenas em macOS)

### Passos para instalar

1. Clone o repositório e navegue até a pasta:
```bash
cd c:\ariela-lash-app\ariel-lash-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o projeto:
```bash
npm start
```

## 📱 Rodando o App

### No Expo Go (desenvolvimento rápido)
```bash
npm start
```
- Escaneie o QR code com o app Expo Go (Android) ou Camera (iOS)

### Build de desenvolvimento
```bash
npx expo run:android
# ou
npx expo run:ios
```

### Build de produção com EAS
```bash
npm install -g eas-cli
eas login
eas build --platform android --profile production
```

## 🗂️ Estrutura do Projeto

```
ariel-lash-app/
├── screens/           # Telas do app
│   ├── HomeScreen.js      # Tela inicial com próximos atendimentos
│   ├── ClientesScreen.js  # Gerenciamento de clientes
│   └── AgendaScreen.js    # Calendário e agendamentos
├── utils/             # Utilitários
│   ├── database.js        # Funções do banco de dados SQLite
│   └── PushNotification.js # Sistema de notificações
├── assets/            # Imagens e recursos
├── App.tsx           # Componente principal com navegação
├── index.ts          # Entry point do app
├── app.json          # Configurações do Expo
└── package.json      # Dependências do projeto
```

## 🔧 Principais Funcionalidades

### 👥 Gestão de Clientes
- Adicionar novos clientes com nome e telefone
- Visualizar lista de clientes
- Editar informações de clientes
- Excluir clientes
- Histórico de atendimentos por cliente
- Integração com WhatsApp

### 📅 Agenda
- Calendário interativo
- Visualização de horários disponíveis e ocupados
- Agendar novos atendimentos
- Selecionar tipo de serviço:
  - Alongamento de Cílios
  - Refill
  - Remoção
  - Higienização
- Cancelar agendamentos
- Notificações automáticas de lembrete

### 🏠 Tela Inicial
- Visualização dos próximos 3 atendimentos
- Acesso rápido às telas de Clientes e Agenda
- Links para redes sociais (Instagram e WhatsApp)

## 🔔 Sistema de Notificações

O app utiliza `expo-notifications` para enviar lembretes automáticos:
- Notificação 10 minutos antes de cada atendimento
- Configuração automática de permissões
- Funciona em segundo plano

**Nota:** Notificações remotas (push) só funcionam em builds standalone, não no Expo Go.

## 💾 Banco de Dados

O app usa **expo-sqlite** para armazenamento local:
- Tabela `clientes`: id, nome, telefone, historico
- Tabela `agendamentos`: id, cliente_id, data_hora, procedimento, duracao
- Fallback automático para AsyncStorage se SQLite não estiver disponível

## 🎨 Tema e Cores

- **Primária:** `#E07A9D` (Rosa principal)
- **Secundária:** `#8A2A5E` (Rosa escuro)
- **Destaque:** `#F4A7B9` (Rosa claro)
- **Background:** `#FADADD` (Rosa muito claro)

## 📦 Principais Dependências

```json
{
  "expo": "~54.0.23",
  "react-native": "0.81.5",
  "@react-navigation/native": "^7.1.19",
  "@react-navigation/bottom-tabs": "^7.8.4",
  "expo-sqlite": "^16.0.9",
  "expo-notifications": "^0.32.12",
  "react-native-calendars": "^1.1313.0"
}
```

## 🔨 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento Expo
- `npm run android` - Roda no Android
- `npm run ios` - Roda no iOS
- `npm run web` - Roda na web

## 📝 Configuração Adicional

### Adicionar suas informações de contato

Edite o arquivo `screens/HomeScreen.js` (linhas 7-8):

```javascript
const INSTAGRAM_HANDLE = 'seu_usuario_instagram';
const WHATSAPP_PHONE = '5511999999999'; // Com código do país
```

### Personalizar notificações

No arquivo `utils/PushNotification.js`, ajuste o tempo de antecedência:

```javascript
await agendarNotificacao(dataHora, cliente, 10); // 10 minutos antes
```

## 🐛 Troubleshooting

### Erro de build Android
```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

### Banco de dados não inicializa
O app possui fallback automático para AsyncStorage. Verifique os logs do console.

### Notificações não aparecem
- Verifique permissões no dispositivo
- Notificações push requerem build standalone (não funcionam no Expo Go)

## 📄 Licença

Este projeto é privado e de uso exclusivo da Ariela Lash Designer.

## 👨‍💻 Desenvolvimento

**Projeto:** Ariela Lash Designer App  
**Plataforma:** React Native + Expo  
**Versão:** 1.0.0  
**Owner:** pedro_bugs14  
**EAS Project ID:** 3539ebb4-65b9-4f8d-899a-632dcfc6c4ab
