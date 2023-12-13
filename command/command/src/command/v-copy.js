export default {
  install(app) {
    const copyDirective = {
      // 在绑定元素的 attribute 前
      // 或事件监听器应用前调用
      created(el, binding, vnode, prevVnode) {
        // 下面会介绍各个参数的细节
        el._value = binding.value;
        el.addEventListener("click", () => {
          var input = document.createElement("input"); // 创建input元素
          document.body.appendChild(input); // 将input元素挂到body上
          input.setAttribute("value", el._value.text); //设置input的value，也就是想要复制的内容
          input.select(); // 设置当前input元素被选中

          document.execCommand("Copy"); //执行复制命令

          document.body.removeChild(input); // 清除input元素
          // Toast.success("复制成功");
          el._value.success && el._value.success();
        });
      },

      updated(el, binding, vnode, prevVnode) {
        el._value = binding.value;
      },
    };
    app.directive("copy", copyDirective);
  },
};
