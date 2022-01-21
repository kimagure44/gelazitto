module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  resolve: {
    alias: {
      "@components": path.join(__dirname, "src/components"),
      "@assets": path.join(__dirname, "src/assets"),
      "@plugins": path.join(__dirname, "src/plugins"),
    },
  },
};
