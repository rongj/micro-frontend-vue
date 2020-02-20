import "./set-public-path";
import Vue from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import router from "./router";

import {
  Button,
  Icon,
  Layout,
  Menu,
  Modal,
  Tooltip,
  Spin,
  message
} from "ant-design-vue";

Vue.config.productionTip = false;

Vue.use(Button);
Vue.use(Icon);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Modal);
Vue.use(Tooltip);
Vue.use(Spin);
Vue.prototype.$message = message;
Vue.prototype.$confirm = Modal.confirm;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: "#root",
    render: h => h(App),
    router
  }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
