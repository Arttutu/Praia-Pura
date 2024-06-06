/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        paraf: ["Roboto"],
        titulo:["Playfair"],
        destaque:["Pacifico"]
       
      },
      colors: {
        //paleta de cor
        fundo: "#fffffe",
        fundo2:"#d8eefe",
        titulo: "#094067",
        parafrafo:"#5f6c7b",
        botao:"#3da9fc",
        textoBotao:"#fffffe",
        cardBackground: "#fffffe",
        cardBackground2:"#094067",
        hoverBotao:"#094067"
        
      },
    },
  },
  plugins: [],
}