module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      animation: {
        blob1: "blob1 43s ease-in-out infinite",
        blob2: "blob2 25s ease-in-out infinite",
        blob3: "blob3 37s ease-in-out infinite",
      },
      keyframes: {
        blob1: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(-500px, 400px) scale(1.5)",
          },
          "50%": {
            transform: "translate(-500px, -400px) scale(2)",
          },
          "75%": {
            transform: "translate(500px, -400px) scale(1.5)",
          },
        },
        blob2: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(700px, 200px) scale(1.3)",
          },
          "50%": {
            transform: "translate(-500px, -200px) scale(1.7)",
          },
          "75%": {
            transform: "translate(500px, -100px) scale(1.3)",
          },          
        },
        blob3: {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
          },
          "25%": {
            transform: "translate(300px, 100px) scale(1.7)",
          },
          "50%": {
            transform: "translate(-800px, 400px) scale(1.3)",
          },
          "75%": {
            transform: "translate(100px, -300px) scale(1.5)",
          },
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
