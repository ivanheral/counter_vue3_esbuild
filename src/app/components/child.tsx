import { Fragment, ref, defineComponent } from "vue";
import "./child.scss";

const Child = defineComponent({
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };
    return {
      count,
      increase,
    };
  },
  props: {
    test: Number
  },
  render() {
    return (
        <div class="child">
        <p>{this.count}</p>
        <p>{this.test}</p>
        <button onClick={this.increase}>increase</button>
        </div>
    );
  },
});
export default Child;
