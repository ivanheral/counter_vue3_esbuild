import { createApp, ref, defineComponent } from "vue";
// import config
import conf from "./config/test.json";
import img_vue from "./imgs/vue.png";
import "./css/test.scss";
import "./css/father.scss";
// component
import Child from "./components/child.tsx";

const App = defineComponent({
  setup() {
    const count = ref(conf.count);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
    };
  },
  components: { Child },
  render() {
    return (
      <div class="father">
        <img src={img_vue} />
        <Child test={this.count} />
        <p>{this.count}</p>
        <button onClick={this.increase}>increase</button>
      </div>
    );
  },
});

createApp(App).mount("#app");

/**

const App = {
  setup() {
    const count = ref(conf.count);
    const increase = () => {
      count.value++;
    };
    return () => (
      <Fragment>
        <img src={img_vue} />
        <p>{count.value}</p>
        <button onClick={increase}>increase</button>
      </Fragment>
    );
  },
};

 */
