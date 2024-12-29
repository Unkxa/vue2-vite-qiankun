import Vue from 'vue'
import App from './views/App.vue'
import { renderWithQiankun, qiankunWindow, QiankunProps } from 'vite-plugin-qiankun/dist/helper';

// Vue.config.productionTip = false

const render = (props: QiankunProps) => {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}


// some code
renderWithQiankun({
  mount(props) {
    console.log('mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('unmount');
    const { container } = props;
    const mountRoot = container?.querySelector('#root');
    // ReactDOM.unmountComponentAtNode(
    //   mountRoot || document.querySelector('#root')
    // );
  },
  update: function (props: QiankunProps): void | Promise<void> {
    throw new Error('Function not implemented.');
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}