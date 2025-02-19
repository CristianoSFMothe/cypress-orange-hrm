# 🚀 Cypress Automation - OrangeHRM

Este projeto tem como objetivo a **automação de testes** para o **OrangeHRM**, uma aplicação voltada para **gestão de recursos humanos**. Os testes foram desenvolvidos utilizando o **Cypress**, um framework moderno e eficiente para testes end-to-end.

![Captura de tela 2025-02-19 121447](https://github.com/user-attachments/assets/42149be1-7578-48e0-bfd1-cb951843f019)


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

![image](https://github.com/user-attachments/assets/53086622-8c33-4913-a1b5-3fbf1882cda9)

![image](https://github.com/user-attachments/assets/13a8f572-0306-4be1-8c5b-caa11de36e1b)

![image](https://github.com/user-attachments/assets/86055edd-afac-4ace-a9b3-569dd4dd0418)


## 🏁 Como Executar os Testes

1. **Instale as dependências:**

   ```sh
   npm install
   ```

2. **Execute os testes no modo interativo:**

   ```sh
   npx cypress open
   ```

   ![image](https://github.com/user-attachments/assets/f17e290a-c2a4-4746-9e5e-f75dab89dfee)


3. **Execute os testes no modo headless (sem interface gráfica):**

   ```sh
   npx cypress run
   ```

   ![Captura de tela 2025-02-19 115655](https://github.com/user-attachments/assets/88feaab1-e7b1-4137-9ca3-063316b9f4d8)


## 📌 Contribuição

Sinta-se à vontade para explorar, contribuir e sugerir melhorias para este projeto!
