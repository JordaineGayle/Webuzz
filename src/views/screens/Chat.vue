<template>
    <div class="column justify-center q-pa-none q-gutter-md">
        <div class="row justify-center">
            <div  class="shadow-2 bg-grey-2 col-12 col-lg-4 col-md-6 q-pa-lg">
                <div style="height:auto;" v-for="n in 10" :key="n">
                    <q-chat-message
                    v-for="n in 2" :key="n"
                    name="me"
                    
                    avatar="https://cdn.quasar.dev/img/avatar1.jpg"
                    :text="['hey, how are you?']"
                    sent
                    stamp="1 minutes ago"
                    size="8"
                    />
                    <q-chat-message
                        name="Jane"
                        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                        :text="['doing fine, how r you?']"
                        stamp="1 minutes ago"
                        size="8"
                        text-color="white"
                        bg-color="deep-purple-8"
                    />

                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Notifications'
}
</script>