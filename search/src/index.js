let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import Widget from "./components/hello-world";
import ButtonWidget from "./components/ButtonWidget";

let _habitat = habitat(Widget);

_habitat.render({
  selector: '[data-widget-host="search"]',
  clean: true
});


let _buttonhabitat = habitat(ButtonWidget);

_buttonhabitat.render({
    selector: '[data-widget-host="button"]',
    clean: true
});
