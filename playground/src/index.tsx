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

let MoBrixDesignerApp: any = null;
let engineParams: any = null;

// file deepcode ignore PromiseNotCaughtGeneral: <please specify a reason of ignoring this>
import("mobrix-engine").then(({ initEngine }) => {
  import("./engine.config").then(({ default: engineConfig }) => {
    engineParams = initEngine(engineConfig);
  });
});

import("mobrix-designer").then(({ initMoBrixDesigner }) => {
  import("./app.config").then(({ default: creatorConfig }) => {
    MoBrixDesignerApp = (args: any) =>
      initMoBrixDesigner({
        ...args,
        creatorConfig: creatorConfig,
      }).App;
  });
});

const check = () => {
  if (engineParams != null && MoBrixDesignerApp != null) {
    import("react-dom").then(({ render }) => {
      render(
        MoBrixDesignerApp({
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
