function createWithDom(dom, items) {
  console.log("dom: ", dom);
  // 1 显示选中
  // 2 显示下拉选项
}

function createOptions(list, isLabel) {
  let targetClass = "yunisProject";
  let projectItem = `<input class="" che-msg="涉及项目" type="hidden" id="syproject" name="syproject" />`;
  if (isLabel) {
    targetClass = "targetLabel";
    projectItem = "";
    return showItems(list);
  }
  var str =
    `<dl class="select fl ${targetClass}" style="width: calc(50% - 150px)">\n` +
    projectItem +
    `        <dt class='border-tl'>请选择</dt>\n` +
    `        <dd style="display: none;">\n` +
    `        <div ><a class="show-tag " name="all" onclick="toggleTagSelect(this,${isLabel})">全部</a>\n`;

  const value = ``;

  $.each(list, function (ind, obj) {
    const tagJSON = JSON.stringify(obj);

    const object_name = obj.object_name ?? obj.project_name ?? obj.NAME ?? "";
    const defineChildA = `<a class="show-tag " 
                            name="defineChild" 
                            onclick="toggleTagSelect(this,${isLabel})"
                            data= ${tagJSON}
                            ">${object_name}</a>`;
    str += defineChildA;
  });
  str += "        </div>\n" + "       </dd>\n" + "    </dl>";
  return str;
}
