import { IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton
    },
    setup() {
        // Setup logic here
    },
    data() {
        return {
            passwordInput: "",
            newIndexInput: ""
        };
    },
    methods: {
        //
        adminAction(action) {
            if (this.passwordInput == "") {
                //
                alert(this.passwordInput);
            }
            else {
                this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/admin', {
                    params: {
                        action: action,
                        password: this.passwordInput,
                        newIndexInput: this.newIndexInput
                    }
                })
                    .then((response) => {
                    console.log(response.data);
                    alert(JSON.stringify(response.data));
                })
                    .catch((error) => {
                    // Handle error
                    console.error(error); // Log or process the error
                    alert(JSON.stringify(error));
                });
            }
        }
    }
});
;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .IonPage;
    ({}.IonPage);
    ({}.IonPage);
    __VLS_components.IonPage;
    __VLS_components.ionPage;
    __VLS_components.IonPage;
    __VLS_components.ionPage;
    // @ts-ignore
    [IonPage, IonPage,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    const __VLS_6 = {}
        .IonToolbar;
    ({}.IonToolbar);
    ({}.IonToolbar);
    __VLS_components.IonToolbar;
    __VLS_components.ionToolbar;
    __VLS_components.IonToolbar;
    __VLS_components.ionToolbar;
    // @ts-ignore
    [IonToolbar, IonToolbar,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    // @ts-ignore
    const __VLS_12 = {}
        .IonButtons;
    ({}.IonButtons);
    ({}.IonButtons);
    __VLS_components.IonButtons;
    __VLS_components.ionButtons;
    __VLS_components.IonButtons;
    __VLS_components.ionButtons;
    // @ts-ignore
    [IonButtons, IonButtons,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ slot: ("start"), }));
    const __VLS_14 = __VLS_13({ slot: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ slot: ("start"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .IonMenuButton;
    ({}.IonMenuButton);
    ({}.IonMenuButton);
    __VLS_components.IonMenuButton;
    __VLS_components.ionMenuButton;
    __VLS_components.IonMenuButton;
    __VLS_components.ionMenuButton;
    // @ts-ignore
    [IonMenuButton, IonMenuButton,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ color: ("primary"), }));
    const __VLS_20 = __VLS_19({ color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ color: ("primary"), }));
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_24 = {}
        .IonTitle;
    ({}.IonTitle);
    ({}.IonTitle);
    __VLS_components.IonTitle;
    __VLS_components.ionTitle;
    __VLS_components.IonTitle;
    __VLS_components.ionTitle;
    // @ts-ignore
    [IonTitle, IonTitle,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    (__VLS_ctx.$route.params.id);
    // @ts-ignore
    [$route,];
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_30 = {}
        .IonContent;
    ({}.IonContent);
    ({}.IonContent);
    __VLS_components.IonContent;
    __VLS_components.ionContent;
    __VLS_components.IonContent;
    __VLS_components.ionContent;
    // @ts-ignore
    [IonContent, IonContent,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ fullscreen: ((true)), ...{ class: ("ion-padding") }, }));
    const __VLS_32 = __VLS_31({ fullscreen: ((true)), ...{ class: ("ion-padding") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ fullscreen: ((true)), ...{ class: ("ion-padding") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    // @ts-ignore
    const __VLS_36 = {}
        .IonGrid;
    ({}.IonGrid);
    ({}.IonGrid);
    __VLS_components.IonGrid;
    __VLS_components.ionGrid;
    __VLS_components.IonGrid;
    __VLS_components.ionGrid;
    // @ts-ignore
    [IonGrid, IonGrid,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    // @ts-ignore
    const __VLS_42 = {}
        .IonRow;
    ({}.IonRow);
    ({}.IonRow);
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    // @ts-ignore
    [IonRow, IonRow,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    // @ts-ignore
    const __VLS_48 = {}
        .IonCol;
    ({}.IonCol);
    ({}.IonCol);
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    // @ts-ignore
    [IonCol, IonCol,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ size: ("12"), }));
    const __VLS_50 = __VLS_49({ size: ("12"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ size: ("12"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_54 = {}
        .IonItem;
    ({}.IonItem);
    ({}.IonItem);
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    // @ts-ignore
    [IonItem, IonItem,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({}));
    const __VLS_56 = __VLS_55({}, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({}));
    // @ts-ignore
    const __VLS_60 = {}
        .IonLabel;
    ({}.IonLabel);
    ({}.IonLabel);
    __VLS_components.IonLabel;
    __VLS_components.ionLabel;
    __VLS_components.IonLabel;
    __VLS_components.ionLabel;
    // @ts-ignore
    [IonLabel, IonLabel,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ position: ("floating"), }));
    const __VLS_62 = __VLS_61({ position: ("floating"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ position: ("floating"), }));
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    // @ts-ignore
    const __VLS_66 = {}
        .IonInput;
    ({}.IonInput);
    ({}.IonInput);
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    // @ts-ignore
    [IonInput, IonInput,];
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ modelValue: ((__VLS_ctx.passwordInput)), value: ((__VLS_ctx.passwordInput)), type: ("password"), }));
    const __VLS_68 = __VLS_67({ modelValue: ((__VLS_ctx.passwordInput)), value: ((__VLS_ctx.passwordInput)), type: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ modelValue: ((__VLS_ctx.passwordInput)), value: ((__VLS_ctx.passwordInput)), type: ("password"), }));
    // @ts-ignore
    [passwordInput, passwordInput,];
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    (__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    // @ts-ignore
    const __VLS_72 = {}
        .IonRow;
    ({}.IonRow);
    ({}.IonRow);
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    // @ts-ignore
    [IonRow, IonRow,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ style: ({}) }, }));
    const __VLS_74 = __VLS_73({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_78 = {}
        .IonCol;
    ({}.IonCol);
    ({}.IonCol);
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    // @ts-ignore
    [IonCol, IonCol,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ size: ("6"), }));
    const __VLS_80 = __VLS_79({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ size: ("6"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_84 = {}
        .IonItem;
    ({}.IonItem);
    ({}.IonItem);
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    // @ts-ignore
    [IonItem, IonItem,];
    // @ts-ignore
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({}));
    // @ts-ignore
    const __VLS_90 = {}
        .IonInput;
    ({}.IonInput);
    ({}.IonInput);
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    // @ts-ignore
    [IonInput, IonInput,];
    // @ts-ignore
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ modelValue: ((__VLS_ctx.newIndexInput)), value: ((__VLS_ctx.newIndexInput)), type: ("number"), placeholder: ("Новое целое значение"), }));
    const __VLS_92 = __VLS_91({ modelValue: ((__VLS_ctx.newIndexInput)), value: ((__VLS_ctx.newIndexInput)), type: ("number"), placeholder: ("Новое целое значение"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({ modelValue: ((__VLS_ctx.newIndexInput)), value: ((__VLS_ctx.newIndexInput)), type: ("number"), placeholder: ("Новое целое значение"), }));
    // @ts-ignore
    [newIndexInput, newIndexInput,];
    const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
    (__VLS_89.slots).default;
    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    // @ts-ignore
    const __VLS_96 = {}
        .IonButton;
    ({}.IonButton);
    ({}.IonButton);
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    // @ts-ignore
    [IonButton, IonButton,];
    // @ts-ignore
    const __VLS_97 = __VLS_asFunctionalComponent(__VLS_96, new __VLS_96({ ...{ 'onClick': {} }, expand: ("block"), }));
    const __VLS_98 = __VLS_97({ ...{ 'onClick': {} }, expand: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_97));
    ({}({ ...{ 'onClick': {} }, expand: ("block"), }));
    let __VLS_102;
    const __VLS_103 = {
        onClick: (...[$event]) => {
            __VLS_ctx.adminAction('updateIndex');
            ;
            // @ts-ignore
            [adminAction,];
        }
    };
    (__VLS_101.slots).default;
    const __VLS_101 = __VLS_pickFunctionalComponentCtx(__VLS_96, __VLS_98);
    let __VLS_99;
    let __VLS_100;
    (__VLS_83.slots).default;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    // @ts-ignore
    const __VLS_104 = {}
        .IonCol;
    ({}.IonCol);
    ({}.IonCol);
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    // @ts-ignore
    [IonCol, IonCol,];
    // @ts-ignore
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ size: ("6"), }));
    const __VLS_106 = __VLS_105({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ size: ("6"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_110 = {}
        .IonItem;
    ({}.IonItem);
    ({}.IonItem);
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    __VLS_components.IonItem;
    __VLS_components.ionItem;
    // @ts-ignore
    [IonItem, IonItem,];
    // @ts-ignore
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({}));
    const __VLS_112 = __VLS_111({}, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({}));
    // @ts-ignore
    const __VLS_116 = {}
        .IonInput;
    ({}.IonInput);
    ({}.IonInput);
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    __VLS_components.IonInput;
    __VLS_components.ionInput;
    // @ts-ignore
    [IonInput, IonInput,];
    // @ts-ignore
    const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ type: ("number"), placeholder: ("Новое целое значение"), }));
    const __VLS_118 = __VLS_117({ type: ("number"), placeholder: ("Новое целое значение"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
    ({}({ type: ("number"), placeholder: ("Новое целое значение"), }));
    const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
    (__VLS_115.slots).default;
    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
    // @ts-ignore
    const __VLS_122 = {}
        .IonButton;
    ({}.IonButton);
    ({}.IonButton);
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    // @ts-ignore
    [IonButton, IonButton,];
    // @ts-ignore
    const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({ ...{ 'onClick': {} }, expand: ("block"), }));
    const __VLS_124 = __VLS_123({ ...{ 'onClick': {} }, expand: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_123));
    ({}({ ...{ 'onClick': {} }, expand: ("block"), }));
    let __VLS_128;
    const __VLS_129 = {
        onClick: (...[$event]) => {
            __VLS_ctx.adminAction('cancelAll');
            ;
            // @ts-ignore
            [adminAction,];
        }
    };
    (__VLS_127.slots).default;
    const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
    let __VLS_125;
    let __VLS_126;
    (__VLS_109.slots).default;
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    (__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    // @ts-ignore
    const __VLS_130 = {}
        .IonRow;
    ({}.IonRow);
    ({}.IonRow);
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    __VLS_components.IonRow;
    __VLS_components.ionRow;
    // @ts-ignore
    [IonRow, IonRow,];
    // @ts-ignore
    const __VLS_131 = __VLS_asFunctionalComponent(__VLS_130, new __VLS_130({ ...{ style: ({}) }, }));
    const __VLS_132 = __VLS_131({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_131));
    ({}({ ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_136 = {}
        .IonCol;
    ({}.IonCol);
    ({}.IonCol);
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    __VLS_components.IonCol;
    __VLS_components.ionCol;
    // @ts-ignore
    [IonCol, IonCol,];
    // @ts-ignore
    const __VLS_137 = __VLS_asFunctionalComponent(__VLS_136, new __VLS_136({ size: ("6"), }));
    const __VLS_138 = __VLS_137({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_137));
    ({}({ size: ("6"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    // @ts-ignore
    const __VLS_142 = {}
        .IonButton;
    ({}.IonButton);
    ({}.IonButton);
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    __VLS_components.IonButton;
    __VLS_components.ionButton;
    // @ts-ignore
    [IonButton, IonButton,];
    // @ts-ignore
    const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({ ...{ 'onClick': {} }, expand: ("block"), }));
    const __VLS_144 = __VLS_143({ ...{ 'onClick': {} }, expand: ("block"), }, ...__VLS_functionalComponentArgsRest(__VLS_143));
    ({}({ ...{ 'onClick': {} }, expand: ("block"), }));
    let __VLS_148;
    const __VLS_149 = {
        onClick: (...[$event]) => {
            __VLS_ctx.adminAction('resetQueueElements');
            ;
            // @ts-ignore
            [adminAction,];
        }
    };
    (__VLS_147.slots).default;
    const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144);
    let __VLS_145;
    let __VLS_146;
    (__VLS_141.slots).default;
    const __VLS_141 = __VLS_pickFunctionalComponentCtx(__VLS_136, __VLS_138);
    (__VLS_135.slots).default;
    const __VLS_135 = __VLS_pickFunctionalComponentCtx(__VLS_130, __VLS_132);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ion-padding'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        IonContent, IonPage, IonGrid, IonRow, IonCol, IonItem, IonLabel, IonInput, IonButton
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
//# sourceMappingURL=AdminView.vue.js.map