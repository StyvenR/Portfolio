/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "portfolio-light": {
          bg: "rgba(255, 255, 255, 0.15)",
          border: "rgba(255, 255, 255, 0.3)",
          shadow: "rgba(74, 144, 226, 0.1)",
          navbar: "rgba(255, 255, 255, 0.1)",
          "navbar-border": "rgba(162, 155, 254, 0.3)",
          modal: "rgba(255, 255, 255, 0.2)",
          "modal-border": "rgba(162, 155, 254, 0.3)",
          "image-container": "rgba(255, 255, 255, 0.1)",
          "image-border": "rgba(255, 206, 124, 0.3)",
          "btn-bg": "rgba(255, 255, 255, 0.2)",
          "btn-border": "rgba(162, 155, 254, 0.4)",
          "btn-text": "rgba(74, 144, 226, 1)",
          "btn-hover": "rgba(162, 155, 254, 0.8)",
          "btn-hover-border": "rgba(255, 154, 158, 0.6)",
        },
        "portfolio-dark": {
          bg: "rgba(15, 23, 42, 0.4)",
          border: "rgba(67, 56, 202, 0.3)",
          shadow: "rgba(30, 58, 138, 0.2)",
          navbar: "rgba(15, 23, 42, 0.6)",
          "navbar-border": "rgba(67, 56, 202, 0.4)",
          modal: "rgba(15, 23, 42, 0.5)",
          "modal-border": "rgba(67, 56, 202, 0.4)",
          "image-container": "rgba(30, 41, 59, 0.4)",
          "image-border": "rgba(71, 85, 105, 0.4)",
          "btn-bg": "rgba(15, 23, 42, 0.3)",
          "btn-border": "rgba(67, 56, 202, 0.5)",
          "btn-text": "rgba(162, 155, 254, 1)",
          "btn-hover": "rgba(67, 56, 202, 0.8)",
          "btn-hover-border": "rgba(88, 28, 135, 0.6)",
        },
      },
      backgroundImage: {
        "gradient-light":
          "linear-gradient(135deg, rgba(74, 144, 226, 0.8) 0%, rgba(162, 155, 254, 0.8) 25%, rgba(255, 154, 158, 0.8) 50%, rgba(255, 206, 124, 0.8) 75%, rgba(255, 154, 158, 0.8) 100%)",
        "gradient-dark":
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 15%, rgba(51, 65, 85, 0.9) 30%, rgba(71, 85, 105, 0.9) 45%, rgba(30, 58, 138, 0.85) 60%, rgba(67, 56, 202, 0.85) 75%, rgba(88, 28, 135, 0.9) 90%, rgba(15, 23, 42, 0.95) 100%)",
        "progress-light":
          "linear-gradient(90deg, rgb(59, 130, 246) 0%, rgb(139, 92, 246) 50%, rgb(236, 72, 153) 100%)",
        "progress-dark":
          "linear-gradient(90deg, rgb(99, 102, 241) 0%, rgb(168, 85, 247) 50%, rgb(236, 72, 153) 100%)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "40px",
      },
      boxShadow: {
        "portfolio-light": "0 8px 32px rgba(74, 144, 226, 0.1)",
        "portfolio-dark": "0 8px 32px rgba(30, 58, 138, 0.2)",
        "navbar-light": "0 4px 16px rgba(74, 144, 226, 0.1)",
        "navbar-dark": "0 4px 16px rgba(30, 58, 138, 0.2)",
        "modal-light": "0 12px 40px rgba(74, 144, 226, 0.15)",
        "modal-dark": "0 12px 40px rgba(30, 58, 138, 0.25)",
        "btn-light": "0 4px 15px rgba(74, 144, 226, 0.1)",
        "btn-dark": "0 4px 15px rgba(30, 58, 138, 0.2)",
        "btn-hover-light": "0 8px 25px rgba(162, 155, 254, 0.3)",
        "btn-hover-dark": "0 8px 25px rgba(67, 56, 202, 0.4)",
      },
    },
  },
  plugins: [],
};
