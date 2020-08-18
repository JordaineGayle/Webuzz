<template>
    <div class="column justify-center  q-gutter-md">
        <div class="row justify-center">
            <div  class="col-12 col-lg-4 col-md-6">

                <q-tabs v-model="tab" inline-label left-icon dense class="bg-deep-purple-8" active-bg-color="deep-purple-6"  align="justify">
                    <q-tab icon="forum" style="color:white" name="chats" label="Chats" />
                    <q-tab icon="people_alt" style="color:white" name="contacts" label="LYNCs" />
                </q-tabs>

                <q-separator />

                <q-tab-panels  v-model="tab" animated swipeable infinite>
                    <q-tab-panel name="chats" class="q-pa-none">
                        <q-list bordered class="rounded-borders " >
                            <div v-for="n in 6" :key="n">
                                <q-item to="/main/chat" clickable v-ripple>
                                    <q-item-section avatar>
                                    <q-avatar>
                                        <img :src="'https://cdn.quasar.dev/img/avatar'+n+'.jpg'">
                                    </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                    <q-item-label lines="1">Janet</q-item-label>
                                    <q-item-label caption lines="2">
                                        I'll be in your neighborhood doing errands this
                                        weekend. Do you want to grab brunch?
                                    </q-item-label>
                                    </q-item-section>

                                    <q-item-section side top>
                                    <p class="text-caption">1 min ago</p>
                                    </q-item-section>

                                    <!-- <q-separator  /> -->
                                </q-item>

                                <q-separator  inset="item" />
                            </div>
                        </q-list>
                    </q-tab-panel>

                    <q-tab-panel name="contacts" class="q-pa-none">
                        <q-list bordered class="rounded-borders " >
                            <div v-for="n in 6" :key="n">
                                <q-item to="/main/chat" clickable v-ripple>
                                    <q-item-section avatar>
                                        <q-avatar>
                                            <img :src="'https://cdn.quasar.dev/img/avatar'+n+'.jpg'">
                                        </q-avatar>
                                    </q-item-section>

                                    <q-item-section>
                                        <q-item-label lines="1">James {{n}}</q-item-label>
                                        <q-item-label caption lines="1">
                                            "In a real life me seh"
                                        </q-item-label>
                                    </q-item-section>

                                    <q-item-section side top>
                                    <p style="color:green" class=" text-caption">online</p>
                                    </q-item-section>

                                    <!-- <q-separator  /> -->
                                </q-item>

                                <q-separator   />
                            </div>
                        </q-list>
                    </q-tab-panel>
                </q-tab-panels>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Messages',
    data(){
        return{
            tab: 'chats'
        }
    }
}
</script>

<style scoped>
    .color-white{
        color: white!important;
    }
</style>