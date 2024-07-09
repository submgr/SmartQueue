/* __placeholder__ */
import { IonApp, IonContent, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonNote, IonRouterOutlet, IonSplitPane, } from '@ionic/vue';
import { ref } from 'vue';
import { bookmarkOutline, bookmarkSharp, mailOutline, mailSharp, } from 'ionicons/icons';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const selectedIndex = ref(0);
const appPages = [
    {
        title: 'Место оператора',
        url: '/view/Worker',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
    },
    {
        title: 'Доска очереди',
        url: '/view/Mega',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
    },
    {
        title: 'Модификации',
        url: '/view/admin',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
    },
    {
        title: 'Добавление билетов',
        url: '/view/tickets',
        iosIcon: mailOutline,
        mdIcon: mailSharp,
    },
];
const labels = [];
const path = window.location.pathname.split('folder/')[1];
if (path !== undefined) {
    selectedIndex.value = appPages.findIndex((page) => page.title.toLowerCase() === path.toLowerCase());
}
localStorage.setItem("APIServer_InstanceAddress", "http://localhost:3000");
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
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
        .IonApp;
    ({}.IonApp);
    ({}.IonApp);
    __VLS_components.IonApp;
    __VLS_components.ionApp;
    __VLS_components.IonApp;
    __VLS_components.ionApp;
    // @ts-ignore
    [IonApp, IonApp,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    const __VLS_6 = {}
        .IonSplitPane;
    ({}.IonSplitPane);
    ({}.IonSplitPane);
    __VLS_components.IonSplitPane;
    __VLS_components.ionSplitPane;
    __VLS_components.IonSplitPane;
    __VLS_components.ionSplitPane;
    // @ts-ignore
    [IonSplitPane, IonSplitPane,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ contentId: ("main-content"), }));
    const __VLS_8 = __VLS_7({ contentId: ("main-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ contentId: ("main-content"), }));
    // @ts-ignore
    const __VLS_12 = {}
        .IonMenu;
    ({}.IonMenu);
    ({}.IonMenu);
    __VLS_components.IonMenu;
    __VLS_components.ionMenu;
    __VLS_components.IonMenu;
    __VLS_components.ionMenu;
    // @ts-ignore
    [IonMenu, IonMenu,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ contentId: ("main-content"), type: ("overlay"), }));
    const __VLS_14 = __VLS_13({ contentId: ("main-content"), type: ("overlay"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ contentId: ("main-content"), type: ("overlay"), }));
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    // @ts-ignore
    const __VLS_24 = {}
        .IonList;
    ({}.IonList);
    ({}.IonList);
    __VLS_components.IonList;
    __VLS_components.ionList;
    __VLS_components.IonList;
    __VLS_components.ionList;
    // @ts-ignore
    [IonList, IonList,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ id: ("inbox-list"), }));
    const __VLS_26 = __VLS_25({ id: ("inbox-list"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ id: ("inbox-list"), }));
    // @ts-ignore
    const __VLS_30 = {}
        .IonListHeader;
    ({}.IonListHeader);
    ({}.IonListHeader);
    __VLS_components.IonListHeader;
    __VLS_components.ionListHeader;
    __VLS_components.IonListHeader;
    __VLS_components.ionListHeader;
    // @ts-ignore
    [IonListHeader, IonListHeader,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    // @ts-ignore
    const __VLS_36 = {}
        .IonNote;
    ({}.IonNote);
    ({}.IonNote);
    __VLS_components.IonNote;
    __VLS_components.ionNote;
    __VLS_components.IonNote;
    __VLS_components.ionNote;
    // @ts-ignore
    [IonNote, IonNote,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ("https://t.me/virabyanaram"), });
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    for (const [p, i] of __VLS_getVForSourceType((__VLS_ctx.appPages))) {
        // @ts-ignore
        const __VLS_42 = {}
            .IonMenuToggle;
        ({}.IonMenuToggle);
        ({}.IonMenuToggle);
        __VLS_components.IonMenuToggle;
        __VLS_components.ionMenuToggle;
        __VLS_components.IonMenuToggle;
        __VLS_components.ionMenuToggle;
        // @ts-ignore
        [IonMenuToggle, IonMenuToggle,];
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ autoHide: ((false)), key: ((i)), }));
        const __VLS_44 = __VLS_43({ autoHide: ((false)), key: ((i)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        ({}({ autoHide: ((false)), key: ((i)), }));
        // @ts-ignore
        const __VLS_48 = {}
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
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, routerDirection: ("root"), routerLink: ((p.url)), lines: ("none"), detail: ((false)), ...{ class: ("hydrated") }, ...{ class: (({ selected: __VLS_ctx.selectedIndex === i })) }, }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, routerDirection: ("root"), routerLink: ((p.url)), lines: ("none"), detail: ((false)), ...{ class: ("hydrated") }, ...{ class: (({ selected: __VLS_ctx.selectedIndex === i })) }, }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ ...{ 'onClick': {} }, routerDirection: ("root"), routerLink: ((p.url)), lines: ("none"), detail: ((false)), ...{ class: ("hydrated") }, ...{ class: (({ selected: __VLS_ctx.selectedIndex === i })) }, }));
        __VLS_styleScopedClasses = ({ selected: selectedIndex === i });
        let __VLS_54;
        const __VLS_55 = {
            onClick: (...[$event]) => {
                __VLS_ctx.selectedIndex = i;
                // @ts-ignore
                [appPages, selectedIndex, selectedIndex,];
            }
        };
        // @ts-ignore
        const __VLS_56 = {}
            .IonIcon;
        ({}.IonIcon);
        ({}.IonIcon);
        __VLS_components.IonIcon;
        __VLS_components.ionIcon;
        __VLS_components.IonIcon;
        __VLS_components.ionIcon;
        // @ts-ignore
        [IonIcon, IonIcon,];
        // @ts-ignore
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ "aria-hidden": ("true"), slot: ("start"), ios: ((p.iosIcon)), md: ((p.mdIcon)), }));
        const __VLS_58 = __VLS_57({ "aria-hidden": ("true"), slot: ("start"), ios: ((p.iosIcon)), md: ((p.mdIcon)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        ({}({ "aria-hidden": ("true"), slot: ("start"), ios: ((p.iosIcon)), md: ((p.mdIcon)), }));
        const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
        // @ts-ignore
        const __VLS_62 = {}
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
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({}));
        const __VLS_64 = __VLS_63({}, ...__VLS_functionalComponentArgsRest(__VLS_63));
        ({}({}));
        (p.title);
        (__VLS_67.slots).default;
        const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
        (__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        let __VLS_51;
        let __VLS_52;
        (__VLS_47.slots).default;
        const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    }
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    // @ts-ignore
    const __VLS_68 = {}
        .IonList;
    ({}.IonList);
    ({}.IonList);
    __VLS_components.IonList;
    __VLS_components.ionList;
    __VLS_components.IonList;
    __VLS_components.ionList;
    // @ts-ignore
    [IonList, IonList,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ id: ("labels-list"), ...{ style: ({}) }, }));
    const __VLS_70 = __VLS_69({ id: ("labels-list"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ id: ("labels-list"), ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_74 = {}
        .IonListHeader;
    ({}.IonListHeader);
    ({}.IonListHeader);
    __VLS_components.IonListHeader;
    __VLS_components.ionListHeader;
    __VLS_components.IonListHeader;
    __VLS_components.ionListHeader;
    // @ts-ignore
    [IonListHeader, IonListHeader,];
    // @ts-ignore
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({}));
    const __VLS_76 = __VLS_75({}, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({}));
    (__VLS_79.slots).default;
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    for (const [label, index] of __VLS_getVForSourceType((__VLS_ctx.labels))) {
        // @ts-ignore
        const __VLS_80 = {}
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
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ lines: ("none"), key: ((index)), }));
        const __VLS_82 = __VLS_81({ lines: ("none"), key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        ({}({ lines: ("none"), key: ((index)), }));
        // @ts-ignore
        const __VLS_86 = {}
            .IonIcon;
        ({}.IonIcon);
        ({}.IonIcon);
        __VLS_components.IonIcon;
        __VLS_components.ionIcon;
        __VLS_components.IonIcon;
        __VLS_components.ionIcon;
        // @ts-ignore
        [IonIcon, IonIcon,];
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ "aria-hidden": ("true"), slot: ("start"), ios: ((__VLS_ctx.bookmarkOutline)), md: ((__VLS_ctx.bookmarkSharp)), }));
        const __VLS_88 = __VLS_87({ "aria-hidden": ("true"), slot: ("start"), ios: ((__VLS_ctx.bookmarkOutline)), md: ((__VLS_ctx.bookmarkSharp)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({ "aria-hidden": ("true"), slot: ("start"), ios: ((__VLS_ctx.bookmarkOutline)), md: ((__VLS_ctx.bookmarkSharp)), }));
        // @ts-ignore
        [labels, bookmarkOutline, bookmarkSharp,];
        const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
        // @ts-ignore
        const __VLS_92 = {}
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
        const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({}));
        const __VLS_94 = __VLS_93({}, ...__VLS_functionalComponentArgsRest(__VLS_93));
        ({}({}));
        (label);
        (__VLS_97.slots).default;
        const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
        (__VLS_85.slots).default;
        const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    }
    (__VLS_73.slots).default;
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_98 = {}
        .IonRouterOutlet;
    ({}.IonRouterOutlet);
    ({}.IonRouterOutlet);
    __VLS_components.IonRouterOutlet;
    __VLS_components.ionRouterOutlet;
    __VLS_components.IonRouterOutlet;
    __VLS_components.ionRouterOutlet;
    // @ts-ignore
    [IonRouterOutlet, IonRouterOutlet,];
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ id: ("main-content"), }));
    const __VLS_100 = __VLS_99({ id: ("main-content"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ id: ("main-content"), }));
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['hydrated'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                IonApp: IonApp,
                IonContent: IonContent,
                IonIcon: IonIcon,
                IonItem: IonItem,
                IonLabel: IonLabel,
                IonList: IonList,
                IonListHeader: IonListHeader,
                IonMenu: IonMenu,
                IonMenuToggle: IonMenuToggle,
                IonNote: IonNote,
                IonRouterOutlet: IonRouterOutlet,
                IonSplitPane: IonSplitPane,
                bookmarkOutline: bookmarkOutline,
                bookmarkSharp: bookmarkSharp,
                selectedIndex: selectedIndex,
                appPages: appPages,
                labels: labels,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;

//# sourceMappingURL=App.vue.js.map