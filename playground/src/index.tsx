import "assets/styles";

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("./serviceWorker.js", { scope: "/mobrix-ui/" })
    .then(
      function () {
        console.log("Service worker registration succeeded");
      },
      /*catch*/ function () {
        console.log("Service worker registration failed");
      }
    );
} else {
  console.log("Service workers are not supported.");
}

let ModularApp: any = null;
let engineParams: any = null;

import("modular-engine").then(({ initEngine }) => {
  import("./engine.config").then(({ default: engineConfig }) => {
    engineParams = initEngine(engineConfig);
  });
});

import("modular-creator").then(({ initModularCreator }) => {
  import("./app.config").then(({ default: creatorConfig }) => {
    ModularApp = (args: any) =>
      initModularCreator({
        ...args,
        creatorConfig: creatorConfig,
      }).App;
  });
});

const check = () => {
  if (engineParams != null && ModularApp != null) {
    import("react-dom").then(({ render }) => {
      render(
        ModularApp({
          store: engineParams.store,
          engineConfig: engineParams.config,
        }),
        document.getElementById("root"),
        () => {
          let Preloader = document.getElementById("preloader");
          if (Preloader) Preloader.style.visibility = "hidden";
        }
      );
    });
  } else {
    setTimeout(() => {
      check();
    }, 10);
  }
};

check();
