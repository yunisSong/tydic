import{u as x}from"./TableEditView-8ab2bc22.js";import{k as d,l as P,_ as V,r as b,o as j,m as R,a as i,z as C,u as t,Q as D,w as s,C as m,y as I}from"./virtual_svg-icons-register-0dfd5477.js";const L=()=>{const o=d([]),e=d({}),r=()=>{console.log("formModelRef",e.value),console.log("formModelRef",e.value);const v={resultCode:1e3,resultMsg:"成功",totalCount:4,data:[{projectName:"微信头像爬取",sonarProjectName:"微信爬虫",status:"已完成",remark:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?"},{projectName:"微博敏感信息爬取",sonarProjectName:"微博爬虫",status:"爬取中",remark:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?"},{projectName:"Twitter 散人留言爬取",sonarProjectName:"Twitter 爬虫",status:"失败",remark:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?"},{projectName:"YouTube 地理杂志留言爬取",sonarProjectName:"YouTube 爬虫",status:"已完成",remark:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit error similique nesciunt fuga quidem accusamus ullam maiores quis, eligendi cupiditate quos suscipit veritatis consectetur voluptatem sint repudiandae impedit odio perspiciatis aut distinctio sed facere eius! Eum libero vero dolorem voluptates? Velit, impedit debitis? Veniam perspiciatis blanditiis nisi autem excepturi debitis pariatur, voluptatem odio! Fuga impedit necessitatibus suscipit provident sed aliquam, iure cupiditate eaque, odit veritatis deserunt vero. Perspiciatis, nemo officiis delectus possimus aliquid corrupti tempora maiores veritatis nihil eligendi ipsam quis dolorem reprehenderit voluptas sit vero cum nam expedita est?"}]};f.value=v.totalCount,o.value=v.data.filter(g=>g.projectName.indexOf(e.value.keywords??"")!=-1)},{formConfig:a,formItems:u}=M(),{page:c,totalCount:f,updatePage:q}=E(r),{contentTableConfig:h}=S();return{tableListModelRef:o,formModelRef:e,page:c,totalCount:f,updatePage:q,contentTableConfig:h,formConfig:a,formItems:u,queryTableData:r}},E=o=>{const e=d({pageSize:10,currentPage:1}),r=d(0),a=u=>{e.value=u};return P(e,(u,c)=>{o()}),{page:e,totalCount:r,updatePage:a}},S=()=>({contentTableConfig:{propList:[{prop:"projectName",slotName:"projectName",label:"名称",width:"250"},{prop:"sonarProjectName",label:"项目",width:"120",slotName:"create"},{prop:"status",label:"状态",width:"140"},{prop:"remark",label:"备注",width:"auto"},{label:"操作",width:"auto",slotName:"handler","show-overflow-tooltip":!1,fixed:"right"}],showIndexColumn:!1,showSelectColumn:!1}}),M=()=>({formConfig:{labelPosition:"right",size:"default",colLayout:{xl:6,lg:6,md:6,sm:6,xs:6},itemStyle:{paddingRight:"20px"}},formItems:d([{type:"select",label:"部门",field:"orgName",options:[{label:"智慧物业部",value:"智慧物业部"},{label:"智慧物业部1",value:"智慧物业部1"},{label:"智慧物业部2",value:"智慧物业部2"}],placeholder:"请输入"},{type:"input",label:"关键字",field:"keywords",placeholder:"请输入"},{type:"button",title:"查询",buttonType:"primary",tag:"1"}])});const F={__name:"List",setup(o){const e=x(),{tableListModelRef:r,formModelRef:a,page:u,totalCount:c,updatePage:f,contentTableConfig:q,formConfig:h,formItems:v,queryTableData:g}=L();g();const _=l=>{console.log("item: ",l),e.push("/home/crawlerItem")};return console.log("11111"),(l,w)=>{const y=b("SYForm"),N=b("TableEditView"),p=b("el-link"),T=b("SYTable");return j(),R("div",null,[i(y,C(t(h),{formItems:t(v),modelValue:t(a),"onUpdate:modelValue":w[0]||(w[0]=n=>D(a)?a.value=n:null),ref:"formRef",onButtonClick:t(g)}),null,16,["formItems","modelValue","onButtonClick"]),i(N,{class:"editView",buttons:l.buttons,onDown:l.downExcel,onImport:l.toLead,onDownTemplate:l.downGitTemplate},null,8,["buttons","onDown","onImport","onDownTemplate"]),i(T,C({class:"",listData:t(r)},t(q),{page:t(u),totalCount:t(c),"onUpdate:page":t(f)}),{projectName:s(n=>[i(p,{type:"primary",class:"edit",onClick:k=>_(n.row)},{default:s(()=>[m(I(n.row.projectName),1)]),_:2},1032,["onClick"])]),handler:s(n=>[i(p,{type:"primary",class:"edit",onClick:k=>_(n.row)},{default:s(()=>[m("查看 ")]),_:2},1032,["onClick"]),i(p,{type:"primary",class:"edit"},{default:s(()=>[m("执行 ")]),_:1}),i(p,{type:"primary",class:"edit"},{default:s(()=>[m("修改 ")]),_:1}),i(p,{type:"primary",class:"edit"},{default:s(()=>[m("暂停 ")]),_:1})]),_:1},16,["listData","page","totalCount","onUpdate:page"])])}}},z=V(F,[["__scopeId","data-v-9d733a57"]]);export{z as default};