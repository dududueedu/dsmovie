<div  align="center">
    <h2>:movie_camera: DSMovie</h2>
    <h4>:star: Avaliação de Filmes :star:</h4>
<p>
  <!-- Image Shields -->
  <img alt="Languages Count" src="https://img.shields.io/github/languages/count/dududueedu/dsmovie">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/dududueedu/dsmovie">
  <img alt="Repo Size" src="https://img.shields.io/github/repo-size/dududueedu/dsmovie">
</p>
</div>

:link: Link de acesso: https://dududev-movies.netlify.app/

![Image](https://raw.githubusercontent.com/dududueedu/dsmovie/main/backend/src/main/java/com/devdudu/dsmovie/assets/home.png "Home")

- Design Figma :art:
  - https://www.figma.com/file/35oNFclfMAtFWSQdmk1lXK/dudu-DSMovies?node-id=0%3A1

- Technologies :rocket:
  - [ReactJS](https://pt-br.reactjs.org)
  - [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [Spring Boot](https://spring.io/projects/spring-boot)
  - [JAVA](https://www.java.com/pt-BR/)
  - [Axios](https://github.com/axios/axios/)

#### Modelo conceitual: Entidades e o seed do banco
![Image](https://raw.githubusercontent.com/dududueedu/dsmovie/main/backend/src/main/java/com/devdudu/dsmovie/assets/dsmovie-dominio.png "Modelo conceitual")

#### Padrão camadas adotado
![Image](https://raw.githubusercontent.com/dududueedu/dsmovie/main/backend/src/main/java/com/devdudu/dsmovie/assets/padrao-camadas.png "Padrão camadas")

- Dependências do Projeto Spring Boot (Backend):
  - Web
  - JPA
  - H2
  - Postgres
  - Security
  
 - Ajuste no arquivo pom.xml:
  ```xml
  <plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-resources-plugin</artifactId>
    <version>3.1.0</version>
  </plugin>
  ```
- Dependências do Projeto ReactJS (Frontend):
  - Node (16 LTS) e Yarn (node -v, yarn -v)
  - Bootstrap
    ```
      yarn add bootstrap@5.1.3
    ```
  - Rotas: Instalar React Router DOM
    ```
    yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2
    ```

### Lógica: Salvar avaliação de um filme
1) Informar email, id do filme e valor da avaliação (1 a 5).
2) Recuperar usuário do banco de dados pelo email. Se o usuário não existir, insira no banco.
3) Salvar a avaliação do usuário para o dado filme.
4) Recalcular a avaliação média do filme e salvar no banco de dados.

![Image](https://raw.githubusercontent.com/dududueedu/dsmovie/main/backend/src/main/java/com/devdudu/dsmovie/assets/dsmovie-objs.png "Padrão camadas")

### Validação no Postgres local
- perfis de projeto: test, dev, prod
- gerar script SQL no perfil dev

#### system.properties
  ```
  java.runtime.version=17
  ```

#### Implantação no Heroku
  - Criar app no Heroku
  - Provisionar banco Postgres
  - Definir variável APP_PROFILE=prod
  - Conectar ao banco via pgAdmin
  - Criar seed do banco

  ```bash
  heroku -v
  heroku login
  heroku git:remote -a <nome-do-app>
  git remote -v
  git subtree push --prefix backend heroku main
  ```

#### Implantação no Netlify
- Deploy básico
  - Base directory: frontend
  - Build command: yarn build
  - Publish directory: frontend/build

- add no Front: Arquivo _redirects
  ```
  /* /index.html 200
  ```
  
<div align="center">
  <p><i>Developed by <a href="https://www.linkedin.com/in/dududueedu/">Eduardo Silva</i></p>
</div>
