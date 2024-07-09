import { IonButtons, IonSelect, IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        IonButtons, IonSelect,
        IonSelectOption, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
    },
    data() {
        return {
            isFullscreen: false,
            workerBinding: {
                1: "333",
                2: "3332",
                3: "3333",
                4: "3334",
                5: "3335",
                6: "3336"
            },
            queueData: [{
                    id: 1,
                    worker: 5,
                    room: "365A"
                }]
        };
    },
    mounted() {
        // eslint-disable-next-line
        const parent_this = this;
        setInterval(() => {
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/get', {
                params: {
                    id: this.workspaceSetting_WorkerID // Replace YOUR_APP_URL_HERE with your actual app URL
                }
            })
                .then((response) => {
                console.log(response.data.data);
                var queueData = [];
                Object.entries(response.data.data).forEach(([key, value]) => {
                    const newData = {
                        id: parseInt(key) + 1, // Преобразование ключа в число и корректировка id, если необходимо
                        worker: parseInt(value.assignedWorker), // Преобразование assignedWorker в число
                        room: "", // Установка значения room в пустую строку или другое стандартное значение,
                        status: value.serviceState
                    };
                    if (value.serviceState == "Calling" || value.serviceState == "Queued") {
                        queueData.push(newData);
                    }
                });
                queueData.sort((a, b) => {
                    // Если оба элемента имеют статус "Calling", сортируем по id
                    if (a.status === "Calling" && b.status === "Calling") {
                        return a.id - b.id;
                    }
                    // Элементы со статусом "Calling" перемещаем в начало массива
                    if (a.status === "Calling")
                        return -1;
                    if (b.status === "Calling")
                        return 1;
                    // Все остальные элементы сортируем по id
                    return a.id - b.id;
                });
                console.log(queueData);
                this.queueData = queueData;
            })
                .catch((error) => {
                // Handle error
                console.error(error); // Log or process the error
            });
        }, 2500);
        setInterval(() => {
            this.check();
        }, 3000);
    },
    methods: {
        //
        check() {
            if (!window.screenTop && !window.screenY) {
                if (!this.isFullscreen) {
                    //nothing
                }
                else {
                    document.querySelectorAll('ion-menu').forEach(function (element) {
                        element.style.display = 'flex';
                    });
                    document.querySelectorAll('ion-toolbar').forEach(function (element) {
                        element.style.display = 'block';
                    });
                }
            }
            else {
                if (this.isFullscreen) {
                    //nothing
                }
                else {
                    document.querySelectorAll('ion-menu').forEach(function (element) {
                        element.style.display = 'none';
                    });
                    document.querySelectorAll('ion-toolbar').forEach(function (element) {
                        element.style.display = 'none';
                    });
                }
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ fullscreen: ((true)), }));
    const __VLS_32 = __VLS_31({ fullscreen: ((true)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ fullscreen: ((true)), }));
    // @ts-ignore
    const __VLS_36 = {}
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
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ collapse: ("condense"), }));
    const __VLS_38 = __VLS_37({ collapse: ("condense"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ collapse: ("condense"), }));
    // @ts-ignore
    const __VLS_42 = {}
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({}));
    const __VLS_44 = __VLS_43({}, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({}));
    // @ts-ignore
    const __VLS_48 = {}
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
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ size: ("large"), }));
    const __VLS_50 = __VLS_49({ size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ size: ("large"), }));
    (__VLS_ctx.$route.params.id);
    // @ts-ignore
    [$route,];
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({ ...{ class: ("data") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.queueData))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ ...{ class: (({ 'highlighted': item.status === 'Calling' })) }, ...{ style: ({}) }, });
        __VLS_styleScopedClasses = ({ 'highlighted': item.status === 'Calling' });
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: (({ 'highlighted': item.status === 'Calling' })) }, });
        __VLS_styleScopedClasses = ({ 'highlighted': item.status === 'Calling' });
        (item.id);
        // @ts-ignore
        [queueData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: (({ 'highlighted': item.status === 'Calling' })) }, });
        __VLS_styleScopedClasses = ({ 'highlighted': item.status === 'Calling' });
        (item.worker);
        __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({ ...{ class: (({ 'highlighted': item.status === 'Calling' })) }, });
        __VLS_styleScopedClasses = ({ 'highlighted': item.status === 'Calling' });
        (__VLS_ctx.workerBinding[item.worker]);
        // @ts-ignore
        [workerBinding,];
    }
    if (__VLS_ctx.queueData.length < 1) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ id: ("container"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({ ...{ class: ("capitalize") }, });
        // @ts-ignore
        [queueData,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['data'];
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
//# sourceMappingURL=MegaView.vue.js.map