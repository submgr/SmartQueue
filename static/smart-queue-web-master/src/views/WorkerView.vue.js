import { IonButtons, IonSelect, IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        IonButtons, IonSelect,
        IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
    },
    data() {
        return {
            stage: "workspaceSelection",
            workplaceIdInput: -1,
            currentVisitor: -1,
        };
    },
    mounted() {
        // eslint-disable-next-line
        const parent_this = this;
        if (localStorage.getItem("workspaceSetting_WorkerID") && Number(localStorage.getItem("workspaceSetting_WorkerID")) > -1) {
            this.stage = "workspaceDesk";
            this.workspaceSetting_WorkerID = Number(localStorage.getItem("workspaceSetting_WorkerID"));
        }
    },
    methods: {
        selectWorkplace() {
            if (Number(this.workplaceIdInput) > -1) {
                var id = Number(this.workplaceIdInput);
                this.workspaceSetting_WorkerID = id;
                localStorage.setItem("workspaceSetting_WorkerID", id + "");
            }
            else {
                console.log("Please, select correct value for the workplace's ID.", Number(this.workplaceIdInput));
            }
        },
        workplaceSelectorNewValue(event) {
            this.workspaceSetting_WorkerID = Number(event.detail.value);
        },
        catchNewRequest() {
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/catch', {
                params: {
                    id: this.workspaceSetting_WorkerID,
                    workerId: this.workspaceSetting_WorkerID,
                    // yeah we do pass the same value here twice, don't ask why :)
                }
            })
                .then((response) => {
                if (response.data.status == "AddedToFreeWorkers") {
                    this.stage = "workspaceIsFreeOfWork";
                    const intervalId = setInterval(() => {
                        this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/catch', {
                            params: {
                                id: this.workspaceSetting_WorkerID,
                                workerId: this.workspaceSetting_WorkerID,
                                // yeah we do pass the same value here twice, don't ask why :)
                            }
                        })
                            .then((response) => {
                            if (response.data.status == "Assigned") {
                                clearInterval(intervalId);
                                this.currentVisitor = response.data.key;
                                this.stage = "awaitingForVisitor";
                            }
                        })
                            .catch((error) => {
                            // Handle error
                            console.error(error); // Log or process the error
                        });
                    }, 4000);
                }
                else if (response.data.status == "Assigned") {
                    this.currentVisitor = response.data.key;
                    this.stage = "awaitingForVisitor";
                }
            })
                .catch((error) => {
                // Handle error
                console.error(error); // Log or process the error
            });
        },
        acceptArbitrary() {
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/acceptArbitrary', {
                params: {
                    id: this.workspaceSetting_WorkerID // Replace YOUR_APP_URL_HERE with your actual app URL
                }
            })
                .then((response) => {
                if (response.data.status == "InProgress") {
                    this.currentVisitor = response.data.visitorId;
                    this.stage = "InProgress";
                }
            })
                .catch((error) => {
                // Handle error
                console.error(error); // Log or process the error
            });
        },
        updateStatus(newStatus) {
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/updateStatus', {
                params: {
                    id: this.currentVisitor,
                    newStatus: newStatus
                }
            })
                .then((response) => {
                if (response.data.status == "Updated") {
                    this.stage = "InProgress";
                    if (newStatus == "Finished") {
                        this.stage = "workspaceDesk";
                    }
                    if (newStatus == "CanceledByWorker") {
                        this.stage = "workspaceDesk";
                    }
                }
            })
                .catch((error) => {
                // Handle error
                console.error(error); // Log or process the error
            });
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
        .IonHeader;
    ({}.IonHeader);
    ({}.IonHeader);
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    // @ts-ignore
    [IonHeader, IonHeader,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ translucent: ((true)), }));
    const __VLS_8 = __VLS_7({ translucent: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ translucent: ((true)), }));
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ slot: ("start"), }));
    const __VLS_20 = __VLS_19({ slot: ("start"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ slot: ("start"), }));
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ color: ("primary"), }));
    const __VLS_26 = __VLS_25({ color: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ color: ("primary"), }));
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    // @ts-ignore
    const __VLS_30 = {}
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    (__VLS_ctx.$route.params.id);
    // @ts-ignore
    [$route,];
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_36 = {}
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
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ fullscreen: ((true)), }));
    const __VLS_38 = __VLS_37({ fullscreen: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ fullscreen: ((true)), }));
    // @ts-ignore
    const __VLS_42 = {}
        .IonHeader;
    ({}.IonHeader);
    ({}.IonHeader);
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    __VLS_components.IonHeader;
    __VLS_components.ionHeader;
    // @ts-ignore
    [IonHeader, IonHeader,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ collapse: ("condense"), }));
    const __VLS_44 = __VLS_43({ collapse: ("condense"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ collapse: ("condense"), }));
    // @ts-ignore
    const __VLS_48 = {}
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
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
    const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({}));
    // @ts-ignore
    const __VLS_54 = {}
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
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ size: ("large"), }));
    const __VLS_56 = __VLS_55({ size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ size: ("large"), }));
    (__VLS_ctx.$route.params.id);
    // @ts-ignore
    [$route,];
    (__VLS_59.slots).default;
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    if (__VLS_ctx.stage == 'workspaceSelection') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        // @ts-ignore
        [stage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        // @ts-ignore
        const __VLS_60 = {}
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
        const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ ...{ style: ({}) }, }));
        const __VLS_62 = __VLS_61({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_61));
        ({}({ ...{ style: ({}) }, }));
        // @ts-ignore
        const __VLS_66 = {}
            .IonSelect;
        ({}.IonSelect);
        ({}.IonSelect);
        __VLS_components.IonSelect;
        __VLS_components.ionSelect;
        __VLS_components.IonSelect;
        __VLS_components.ionSelect;
        // @ts-ignore
        [IonSelect, IonSelect,];
        // @ts-ignore
        const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ ...{ 'onIonChange': {} }, label: ("Оператор"), placeholder: ("Выберите"), modelValue: ((__VLS_ctx.workplaceIdInput)), }));
        const __VLS_68 = __VLS_67({ ...{ 'onIonChange': {} }, label: ("Оператор"), placeholder: ("Выберите"), modelValue: ((__VLS_ctx.workplaceIdInput)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
        ({}({ ...{ 'onIonChange': {} }, label: ("Оператор"), placeholder: ("Выберите"), modelValue: ((__VLS_ctx.workplaceIdInput)), }));
        let __VLS_72;
        const __VLS_73 = {
            onIonChange: (__VLS_ctx.workplaceSelectorNewValue)
        };
        for (const [index] of __VLS_getVForSourceType((100))) {
            // @ts-ignore
            const __VLS_74 = {}
                .IonSelectOption;
            ({}.IonSelectOption);
            ({}.IonSelectOption);
            __VLS_components.IonSelectOption;
            __VLS_components.ionSelectOption;
            __VLS_components.IonSelectOption;
            __VLS_components.ionSelectOption;
            // @ts-ignore
            [IonSelectOption, IonSelectOption,];
            // @ts-ignore
            const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ key: ((index)), value: ((index)), }));
            const __VLS_76 = __VLS_75({ key: ((index)), value: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
            ({}({ key: ((index)), value: ((index)), }));
            (index);
            // @ts-ignore
            [workplaceIdInput, workplaceSelectorNewValue,];
            (__VLS_79.slots).default;
            const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
        }
        (__VLS_71.slots).default;
        const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
        let __VLS_69;
        let __VLS_70;
        (__VLS_65.slots).default;
        const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
        // @ts-ignore
        const __VLS_80 = {}
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
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_82 = __VLS_81({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_86;
        const __VLS_87 = {
            onClick: (__VLS_ctx.selectWorkplace)
        };
        // @ts-ignore
        [selectWorkplace,];
        (__VLS_85.slots).default;
        const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
        let __VLS_83;
        let __VLS_84;
    }
    if (__VLS_ctx.stage == 'workspaceDesk') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, ...{ style: ({}) }, });
        (__VLS_ctx.workspaceSetting_WorkerID);
        // @ts-ignore
        [stage, workspaceSetting_WorkerID,];
        // @ts-ignore
        const __VLS_88 = {}
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
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({}));
        const __VLS_90 = __VLS_89({}, ...__VLS_functionalComponentArgsRest(__VLS_89));
        ({}({}));
        // @ts-ignore
        const __VLS_94 = {}
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
        const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({}));
        const __VLS_96 = __VLS_95({}, ...__VLS_functionalComponentArgsRest(__VLS_95));
        ({}({}));
        // @ts-ignore
        const __VLS_100 = {}
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
        const __VLS_101 = __VLS_asFunctionalComponent(__VLS_100, new __VLS_100({ size: ("6"), }));
        const __VLS_102 = __VLS_101({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_101));
        ({}({ size: ("6"), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        const __VLS_106 = {}
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
        const __VLS_107 = __VLS_asFunctionalComponent(__VLS_106, new __VLS_106({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_108 = __VLS_107({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_107));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_112;
        const __VLS_113 = {
            onClick: (__VLS_ctx.catchNewRequest)
        };
        // @ts-ignore
        [catchNewRequest,];
        (__VLS_111.slots).default;
        const __VLS_111 = __VLS_pickFunctionalComponentCtx(__VLS_106, __VLS_108);
        let __VLS_109;
        let __VLS_110;
        (__VLS_105.slots).default;
        const __VLS_105 = __VLS_pickFunctionalComponentCtx(__VLS_100, __VLS_102);
        // @ts-ignore
        const __VLS_114 = {}
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
        const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ size: ("6"), }));
        const __VLS_116 = __VLS_115({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
        ({}({ size: ("6"), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        const __VLS_120 = {}
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
        const __VLS_121 = __VLS_asFunctionalComponent(__VLS_120, new __VLS_120({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_122 = __VLS_121({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_121));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_126;
        const __VLS_127 = {
            onClick: (__VLS_ctx.acceptArbitrary)
        };
        // @ts-ignore
        [acceptArbitrary,];
        (__VLS_125.slots).default;
        const __VLS_125 = __VLS_pickFunctionalComponentCtx(__VLS_120, __VLS_122);
        let __VLS_123;
        let __VLS_124;
        (__VLS_119.slots).default;
        const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
        (__VLS_99.slots).default;
        const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
        (__VLS_93.slots).default;
        const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
    }
    if (__VLS_ctx.stage == 'workspaceIsFreeOfWork') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("container"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        // @ts-ignore
        [stage,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    if (__VLS_ctx.stage == 'awaitingForVisitor') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("container"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        (__VLS_ctx.currentVisitor);
        // @ts-ignore
        [stage, currentVisitor,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        const __VLS_128 = {}
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
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({ ...{ style: ({}) }, }));
        const __VLS_130 = __VLS_129({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_129));
        ({}({ ...{ style: ({}) }, }));
        // @ts-ignore
        const __VLS_134 = {}
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
        const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({}));
        const __VLS_136 = __VLS_135({}, ...__VLS_functionalComponentArgsRest(__VLS_135));
        ({}({}));
        // @ts-ignore
        const __VLS_140 = {}
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
        const __VLS_141 = __VLS_asFunctionalComponent(__VLS_140, new __VLS_140({ size: ("6"), }));
        const __VLS_142 = __VLS_141({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_141));
        ({}({ size: ("6"), }));
        // @ts-ignore
        const __VLS_146 = {}
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
        const __VLS_147 = __VLS_asFunctionalComponent(__VLS_146, new __VLS_146({ ...{ 'onClick': {} }, ...{ style: ({}) }, color: ("danger"), }));
        const __VLS_148 = __VLS_147({ ...{ 'onClick': {} }, ...{ style: ({}) }, color: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_147));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, color: ("danger"), }));
        let __VLS_152;
        const __VLS_153 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.stage == 'awaitingForVisitor')))
                    return;
                __VLS_ctx.updateStatus('CanceledByWorker');
                // @ts-ignore
                [updateStatus,];
            }
        };
        (__VLS_151.slots).default;
        const __VLS_151 = __VLS_pickFunctionalComponentCtx(__VLS_146, __VLS_148);
        let __VLS_149;
        let __VLS_150;
        (__VLS_145.slots).default;
        const __VLS_145 = __VLS_pickFunctionalComponentCtx(__VLS_140, __VLS_142);
        // @ts-ignore
        const __VLS_154 = {}
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
        const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({ size: ("6"), }));
        const __VLS_156 = __VLS_155({ size: ("6"), }, ...__VLS_functionalComponentArgsRest(__VLS_155));
        ({}({ size: ("6"), }));
        // @ts-ignore
        const __VLS_160 = {}
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
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_162 = __VLS_161({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_161));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_166;
        const __VLS_167 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.stage == 'awaitingForVisitor')))
                    return;
                __VLS_ctx.updateStatus('InProgress');
                // @ts-ignore
                [updateStatus,];
            }
        };
        (__VLS_165.slots).default;
        const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
        let __VLS_163;
        let __VLS_164;
        (__VLS_159.slots).default;
        const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
        (__VLS_139.slots).default;
        const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
        (__VLS_133.slots).default;
        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
    }
    if (__VLS_ctx.stage == 'InProgress') {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("container"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        (__VLS_ctx.currentVisitor);
        // @ts-ignore
        [stage, currentVisitor,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        // @ts-ignore
        const __VLS_168 = {}
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
        const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_170 = __VLS_169({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_169));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_174;
        const __VLS_175 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.stage == 'InProgress')))
                    return;
                __VLS_ctx.updateStatus('Finished');
                // @ts-ignore
                [updateStatus,];
            }
        };
        (__VLS_173.slots).default;
        const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
        let __VLS_171;
        let __VLS_172;
    }
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
        __VLS_styleScopedClasses['capitalize'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        IonButtons, IonSelect,
        IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
//# sourceMappingURL=WorkerView.vue.js.map