System.register(["./index-legacy-DTqs_8IE.js"],(function(e,t){"use strict";var a,r,o,s,n,i,l,c,d,u,p,g,k,h,I,m,w,f,_,S,v,y,x,b,W;return{setters:[e=>{a=e.d,r=e.I,o=e.a,s=e.b,n=e.c,i=e.e,l=e.f,c=e.g,d=e.h,u=e.i,p=e._,g=e.r,k=e.o,h=e.j,I=e.w,m=e.k,w=e.l,f=e.t,_=e.m,S=e.n,v=e.F,y=e.p,x=e.q,b=e.s,W=e.u}],execute:function(){var t=document.createElement("style");t.textContent="#container[data-v-38c362e0]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container strong[data-v-38c362e0]{font-size:20px;line-height:26px}#container p[data-v-38c362e0]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container a[data-v-38c362e0]{text-decoration:none}\n",document.head.appendChild(t);const D=a({components:{IonButtons:r,IonSelect:o,IonSelectOption:s,IonContent:n,IonHeader:i,IonMenuButton:l,IonPage:c,IonTitle:d,IonToolbar:u},data:()=>({stage:"workspaceSelection",workplaceIdInput:-1,currentVisitor:-1}),mounted(){localStorage.getItem("workspaceSetting_WorkerID")&&Number(localStorage.getItem("workspaceSetting_WorkerID"))>-1&&(this.stage="workspaceDesk",this.workspaceSetting_WorkerID=Number(localStorage.getItem("workspaceSetting_WorkerID")))},methods:{selectWorkplace(){if(Number(this.workplaceIdInput)>-1){var e=Number(this.workplaceIdInput);this.workspaceSetting_WorkerID=e,localStorage.setItem("workspaceSetting_WorkerID",e+"")}else console.log("Please, select correct value for the workplace's ID.",Number(this.workplaceIdInput))},workplaceSelectorNewValue(e){this.workspaceSetting_WorkerID=Number(e.detail.value)},catchNewRequest(){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/catch",{params:{id:this.workspaceSetting_WorkerID,workerId:this.workspaceSetting_WorkerID}}).then((e=>{if("AddedToFreeWorkers"==e.data.status){this.stage="workspaceIsFreeOfWork";const e=setInterval((()=>{this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/catch",{params:{id:this.workspaceSetting_WorkerID,workerId:this.workspaceSetting_WorkerID}}).then((t=>{"Assigned"==t.data.status&&(clearInterval(e),this.currentVisitor=t.data.key,this.stage="awaitingForVisitor")})).catch((e=>{console.error(e)}))}),4e3)}else"Assigned"==e.data.status&&(this.currentVisitor=e.data.key,this.stage="awaitingForVisitor")})).catch((e=>{console.error(e)}))},acceptArbitrary(){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/acceptArbitrary",{params:{id:this.workspaceSetting_WorkerID}}).then((e=>{"InProgress"==e.data.status&&(this.currentVisitor=e.data.visitorId,this.stage="InProgress")})).catch((e=>{console.error(e)}))},updateStatus(e){this.$axios.get(localStorage.getItem("APIServer_InstanceAddress")+"/queue/updateStatus",{params:{id:this.currentVisitor,newStatus:e}}).then((t=>{"Updated"==t.data.status&&(this.stage="InProgress","Finished"==e&&(this.stage="workspaceDesk"),"CanceledByWorker"==e&&(this.stage="workspaceDesk"))})).catch((e=>{console.error(e)}))}}}),C=e=>(b("data-v-38c362e0"),e=e(),W(),e),V={key:0},z=C((()=>S("strong",{class:"capitalize"},"Выбор оператора",-1))),A=C((()=>S("p",null,"Выберите оператора, за которого вы работаете",-1))),P={style:{width:"50%","max-width":"90vw",margin:"auto"}},N={key:1,style:{"margin-left":"5vw"}},F={style:{background:"#00000010","border-radius":"20px",height:"auto",padding:"10px",width:"180px","margin-left":"5px","margin-bottom":"10vh"}},q={class:"capitalize",style:{"padding-bottom":"15px"}},$=C((()=>S("strong",{class:"capitalize"},"Следующий посетитель",-1))),B=C((()=>S("p",null,"Уже готовы к следующему посетителю?",-1))),O=C((()=>S("strong",{class:"capitalize"},"Принять вне очереди",-1))),T=C((()=>S("p",null,"Принимаете посетителя вне очереди?",-1))),j={key:2,id:"container"},R=[C((()=>S("strong",{class:"capitalize"},"Ждем!",-1))),C((()=>S("p",null,"Сейчас нет посетителей, которых можно бы было взять",-1))),C((()=>S("p",null,"Когда появятся посетители - они будут распределены вам.",-1)))],U={key:3,id:"container"},E={class:"capitalize"},H=C((()=>S("p",null,"Посетитель вызван к вам",-1))),M={key:4,id:"container"},Y={class:"capitalize"},G=C((()=>S("p",null,"Вы работаете с этим посетителем сейчас",-1)));e("default",p(D,[["render",function(e,t,a,r,o,s){const n=g("ion-menu-button"),i=g("ion-buttons"),l=g("ion-title"),c=g("ion-toolbar"),d=g("ion-header"),u=g("ion-select-option"),p=g("ion-select"),b=g("ion-item"),W=g("ion-button"),D=g("ion-col"),C=g("ion-row"),J=g("ion-grid"),K=g("ion-content"),L=g("ion-page");return k(),h(L,null,{default:I((()=>[m(d,{translucent:!0},{default:I((()=>[m(c,null,{default:I((()=>[m(i,{slot:"start"},{default:I((()=>[m(n,{color:"primary"})])),_:1}),m(l,null,{default:I((()=>[w(f(e.$route.params.id),1)])),_:1})])),_:1})])),_:1}),m(K,{fullscreen:!0},{default:I((()=>[m(d,{collapse:"condense"},{default:I((()=>[m(c,null,{default:I((()=>[m(l,{size:"large"},{default:I((()=>[w(f(e.$route.params.id),1)])),_:1})])),_:1})])),_:1}),"workspaceSelection"==e.stage?(k(),_("div",V,[z,A,S("div",P,[m(b,{style:{"margin-top":"5vh"}},{default:I((()=>[m(p,{label:"Оператор",placeholder:"Выберите",modelValue:e.workplaceIdInput,"onUpdate:modelValue":t[0]||(t[0]=t=>e.workplaceIdInput=t),onIonChange:e.workplaceSelectorNewValue},{default:I((()=>[(k(),_(v,null,y(100,(e=>m(u,{key:e,value:e},{default:I((()=>[w(f(e),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue","onIonChange"])])),_:1}),m(W,{style:{"margin-top":"5vh"},onClick:e.selectWorkplace},{default:I((()=>[w("Продолжить")])),_:1},8,["onClick"])])])):x("",!0),"workspaceDesk"==e.stage?(k(),_("div",N,[S("div",F,[S("strong",q,"Рабочее место "+f(e.workspaceSetting_WorkerID),1)]),m(J,null,{default:I((()=>[m(C,null,{default:I((()=>[m(D,{size:"6"},{default:I((()=>[$,B,m(W,{onClick:e.catchNewRequest,style:{"margin-top":"2vh","margin-left":"-4px"}},{default:I((()=>[w("Позвать следующего посетителя")])),_:1},8,["onClick"])])),_:1}),m(D,{size:"6"},{default:I((()=>[O,T,m(W,{onClick:e.acceptArbitrary,style:{"margin-top":"2vh","margin-left":"-4px"}},{default:I((()=>[w("Принять вне очереди")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1})])):x("",!0),"workspaceIsFreeOfWork"==e.stage?(k(),_("div",j,R)):x("",!0),"awaitingForVisitor"==e.stage?(k(),_("div",U,[S("strong",E,"В пути посетитель №"+f(e.currentVisitor),1),H,m(J,{style:{"margin-top":"5vh",width:"65vw"}},{default:I((()=>[m(C,null,{default:I((()=>[m(D,{size:"6"},{default:I((()=>[m(W,{onClick:t[1]||(t[1]=t=>e.updateStatus("CanceledByWorker")),style:{"margin-left":"-4px",opacity:"0.8"},color:"danger"},{default:I((()=>[w("Не пришел, отменить")])),_:1})])),_:1}),m(D,{size:"6"},{default:I((()=>[m(W,{onClick:t[2]||(t[2]=t=>e.updateStatus("InProgress")),style:{"margin-left":"-4px"}},{default:I((()=>[w("Пришел, начать работу")])),_:1})])),_:1})])),_:1})])),_:1})])):x("",!0),"InProgress"==e.stage?(k(),_("div",M,[S("strong",Y,"Ваш посетитель №"+f(e.currentVisitor),1),G,m(W,{onClick:t[3]||(t[3]=t=>e.updateStatus("Finished")),style:{"margin-top":"5vh","margin-left":"-4px"}},{default:I((()=>[w("Мы закончили, завершить")])),_:1})])):x("",!0)])),_:1})])),_:1})}],["__scopeId","data-v-38c362e0"]]))}}}));