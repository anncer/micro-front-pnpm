declare module "*.vue" {
  import { DefineComponent } from "vue";
  const comp: DefineComponent;
  export default comp;
}


declare module "virtual:pwa-register/vue";
