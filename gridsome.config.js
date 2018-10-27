const path = require("path");
module.exports = {
  siteName: "tyankatsu",
  chainWebpack: config => {
    const oneOfsMap = config.module.rule("scss").oneOfs.store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: [
            path.resolve(`${__dirname}/src/styles/`, "variables/importer.scss")
          ]
        })
        .end();
    });
  }
};
