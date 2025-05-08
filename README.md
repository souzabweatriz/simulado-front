# 🚀 Projeto Next.js - Estrutura Inicial

Este projeto foi criado com o objetivo de demonstrar habilidades em desenvolvimento front-end utilizando o framework [Next.js](https://nextjs.org/). A estrutura foi cuidadosamente planejada para facilitar a escalabilidade e manutenção do código.

## 📁 Estrutura de Pastas

```
📦nome-do-projeto
├── 📂public
│   ├── 📂icons
│   │   └── favicon.ico
│   ├── 📂images
│   └── 📂media
├── 📂src
│   ├── 📂app
│   │   ├── 📂home
│   │   │   ├── page.jsx
│   │   │   └── Home.module.css
│   │   ├── 📂<nome-da-rota>
│   │   │   ├── page.jsx
│   │   │   └── <NomeDaRota>.module.css
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── 📂components
│   ├── 📂styles
│   └── middleware.js
├── .gitignore
├── package.json
└── README.md
```

## 🛠️ Tecnologias Utilizadas

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [CSS Modules](https://nextjs.org/docs/basic-features/built-in-css-support)
- [Node.js](https://nodejs.org/)

## 🚀 Como Iniciar o Projeto

### Clonar o Projeto Existente

```bash
# Abra o terminal (CMD) no Windows
cd Desktop
git clone <endereço-do-projeto>
cd <nome-do-projeto>
code .
# Feche o terminal CMD do Windows

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Criar um Novo Projeto do Zero

```bash
# Abra o terminal (CMD) no Windows
cd Desktop
npx create-next-app@latest
# Dê um nome ao seu projeto, por exemplo: my-app
# Responda às perguntas conforme desejado

cd my-app
code .
# Feche o terminal CMD do Windows

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🧩 Configuração Inicial

### Arquivo `globals.css`

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

### Arquivo `layout.js`

```javascript
import "./globals.css";

export const metadata = {
  title: "<Nome para aparecer na aba do navegador>",
  icons: {
    icon: "/icons/favicon.ico",
  },
  description: "Projeto para mostrar tudo que eu sei",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
```

### Arquivo `page.js`

```javascript
export default function Home() {
  return null;
}
```

### Arquivo `middleware.js`

```javascript
import { NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export default function middleware(req) {
  return NextResponse.redirect(new URL("/<nome-da-pasta-da-rota>", req.url));
}
```

### Arquivo `page.jsx` na Pasta da Rota

```javascript
import styles from "./<NomeDaRota>.module.css";

export default function <NomeDaRota>() {
  return (
    <div className={styles.container}>
      <h1>Oi</h1>
      <p>sei lá</p>
    </div>
  );
}
```

## 🎨 Dicas para Ícones

Você pode encontrar ícones gratuitos nos seguintes sites:

- [Icons8](https://icons8.com.br/)
- [Flaticon](https://www.flaticon.com/)
- [Google Fonts Icons](https://fonts.google.com/icons)
- [Icon-Icons](https://icon-icons.com/)

## 📜 Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o projeto para produção.
- `npm start`: Inicia o servidor de produção após o build.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir *issues* ou enviar *pull requests*.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request


> *Dica:* Para criar um `README.md` ainda mais atrativo, considere adicionar badges de status, links para deploys (como Vercel ou Netlify) e GIFs demonstrando funcionalidades específicas.
