# 🚀 Cypress Automation - OrangeHRM

Este projeto tem como objetivo a **automação de testes** para o **OrangeHRM**, uma aplicação voltada para **gestão de recursos humanos**. Os testes foram desenvolvidos utilizando o **Cypress**, um framework moderno e eficiente para testes end-to-end.

## 🛠 Tecnologias Utilizadas

- **Cypress** – Testes end-to-end rápidos e confiáveis.
- **JavaScript** – Linguagem principal para implementação dos testes.
- **GitHub Actions** – Integração contínua para execução automática dos testes.
- **Cypress Cloud** – Monitoramento das execuções em nuvem.

## 📂 Estrutura do Projeto

```
cypress/
│── e2e/
│   ├── home.cy.js
│   ├── login.cy.js
│   ├── pim.cy.js
│
│── support/
│   ├── elements/
│   │   ├── homeElements.js
│   │   ├── loginElements.js
│   │   ├── pimElements.js
│   │
│   ├── pages/
│   │   ├── homePages.js
│   │   ├── loginPages.js
│   │   ├── pimPages.js
│   │
│   ├── actions.js
│   ├── commands.js
│   ├── e2e.js
│   ├── utils.js
```

### 🔹 **Explicação da Estrutura**

📌 **`e2e/`** → Contém os testes de cada funcionalidade.  
📌 **`support/elements/`** → Contém os seletores CSS dos elementos testados.  
📌 **`support/pages/`** → Define as ações realizadas em cada página.  
📌 **`support/actions.js`** → Funções reutilizáveis, como cliques e esperas.  
📌 **`support/commands.js`** → Comandos customizados do Cypress para facilitar os testes.  
📌 **`support/utils.js`** → Funções auxiliares para cenários específicos.

## 🚀 Integrações

- **GitHub Actions**: CI/CD configurado para rodar os testes automaticamente a cada commit.
- **Cypress Cloud**: Armazena logs, capturas de tela e vídeos das execuções, permitindo monitoramento eficiente dos testes.

## 🏁 Como Executar os Testes

1. **Instale as dependências:**

   ```sh
   npm install
   ```

2. **Execute os testes no modo interativo:**

   ```sh
   npx cypress open
   ```

3. **Execute os testes no modo headless (sem interface gráfica):**

   ```sh
   npx cypress run
   ```

## 📌 Contribuição

Sinta-se à vontade para explorar, contribuir e sugerir melhorias para este projeto!
