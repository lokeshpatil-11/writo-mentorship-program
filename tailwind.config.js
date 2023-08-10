module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "270px",
      xs: "320px",
      sm: "450px",
      md: "748px",
      lg: "1250px",
      xl: "1440px",
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px",
      8: "96px",
      9: "128px",
      10: "192px",
      11: "256px",
      12: "384px",
      13: "512px",
    },

    extend: {
      colors: {
        webRed: "#ee4962",
        webGreen: "#1ab79d",
        btn: "#20BF55",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif", "cursive"],
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "105%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },

        type: {
          "0%": {
            width: "0%",
            visibility: "hidden",
          },
          "100%": {
            width: "70%",
          },
        },
        blink: {
          "50%": {
            borderColor: "transparent",
          },
          "100%": {
            borderColor: "white",
          },
        },
      },

      animation: {
        type: "type 3.5s steps(35) infinite alternate, blink .7s infinite",
        typing: "typing 3.5s steps(35) infinite alternate, blink .7s infinite",
      },

      boxShadow: {
        "3xl": "0 5px 0 #1ab79d ",
        "4xl": "5px 5px 5px #1ab79d ",
      },
      dropShadow: {
        "5xl": " 0 40px 25px #ee4962 ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
