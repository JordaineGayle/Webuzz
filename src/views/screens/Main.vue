<template>
    <q-layout view="lHH lpr lFF">
         <q-header class="bg-deep-purple-8">
            <q-toolbar>
                <q-btn flat dense icon="keyboard_arrow_left" @click="() => this.$router.back()" class="q-mr-sm"><span class="text-bold q-pl-sm">Webuzz</span></q-btn>
                
                <q-space ></q-space>
                <q-btn flat dense icon="timelapse" link to="/main/status" class="q-mr-sm"></q-btn>
                <q-btn flat round dense size="md"  link to="/main/find-a-friend" icon="person_search" class="q-mr-sm" />
                <q-btn flat round dense link to="/main/settings" icon="settings" class="q-mr-sm"/>
            </q-toolbar>
        </q-header>

        <q-footer bordered class="bg-white text-primary" align="justify">
            <q-tabs v-if="getCurrentTab !== 'chat'" no-caps active-color="deep-purple-8" indicator-color="transparent" class="text-grey" v-model="tab" >
                <q-route-tab v-for="(item,i) in tabs" :key="i"
                :icon="item.icon"
                :name="item.name.toLowerCase()"
                :to="'/main/'+item.name.toLowerCase()"
                exact
                :label="item.name">
                    <q-badge v-if="item.alert" color="red" floating>{{item.alert}}</q-badge>
                </q-route-tab>
            </q-tabs>
            <div v-else class="row justify-center q-pa-none">
                <div class="col-12 col-lg-4 q-pa-none">
                    <q-input bottom-slots class="q-pa-none q-pl-lg q-pr-lg"  color="deep-purple-8" borderless autogrow v-model="message" placeholder="Enter Message">
                        
                        <template v-slot:after>
                            <q-btn @click="() => message = ''" dense size="lg" flat icon="send" />
                        </template>
                    </q-input>
                </div>
            </div>
        </q-footer>

        <q-page-container >
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name:'Main',
    created(){
        this.tab = this.$route.name.toLowerCase();
    },
    updated(){
        this.tab = this.$route.name.toLowerCase();
    },
    data(){
        return {
            tab:'',
            tabs: [
                {name:'Homepage',icon:'home',alert:''},
                {name:'Messages',icon:'message',alert:'2'},
                {name:'Post',icon:'add_circle',alert:''},
                {name:'Activity',icon:'notifications',alert:'10+'},
                {name:'Profile',icon:'account_circle',alert:''}
            ],
            message: ''
        }
    },
    computed: {
        getCurrentTab: function(){
            return this.$route.name.toLowerCase();
        }
    }
}
</script>