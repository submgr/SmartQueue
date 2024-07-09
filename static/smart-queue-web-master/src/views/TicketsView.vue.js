import { IonContent, IonPage, IonButton, toastController } from '@ionic/vue';
import { defineComponent } from 'vue';
export default defineComponent({
    components: {
        IonContent, IonPage, IonButton, toastController
    },
    data() {
        return {
            locked: false
        };
    },
    methods: {
        async newTicket() {
            // eslint-disable-next-line
            const parent_this = this;
            this.locked = true;
            this.$axios.get(localStorage.getItem("APIServer_InstanceAddress") + '/queue/add', {
                params: {}
            })
                .then((response) => {
                this.locked = false;
                if (response.data.status == "okay") {
                    parent_this.registered(response.data.added);
                }
            })
                .catch((error) => {
                this.locked = false;
                // Handle error
                console.error(error); // Log or process the error
                alert(JSON.stringify(error));
            });
        },
        async registered(id) {
            const toast = await toastController.create({
                message: `Зарегистрирован №${id}`,
                duration: 3500,
                color: "primary",
                position: 'top',
            });
            await toast.present();
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ class: ("ion-text-center") }, }));
    const __VLS_32 = __VLS_31({ ...{ class: ("ion-text-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ class: ("ion-text-center") }, }));
    if (__VLS_ctx.locked === false) {
        // @ts-ignore
        const __VLS_36 = {}
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ 'onClick': {} }, ...{ style: ({}) }, }));
        let __VLS_42;
        const __VLS_43 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.locked === false)))
                    return;
                __VLS_ctx.newTicket();
                // @ts-ignore
                [locked, newTicket,];
            }
        };
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        let __VLS_39;
        let __VLS_40;
    }
    if (__VLS_ctx.locked === true) {
        // @ts-ignore
        const __VLS_44 = {}
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
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ style: ({}) }, }));
        const __VLS_46 = __VLS_45({ ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ ...{ style: ({}) }, }));
        // @ts-ignore
        [locked,];
        (__VLS_49.slots).default;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    }
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['ion-text-center'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        IonContent, IonPage, IonButton, toastController
    };
    const __VLS_name = undefined;
    let __VLS_internalComponent;
}
//# sourceMappingURL=TicketsView.vue.js.map