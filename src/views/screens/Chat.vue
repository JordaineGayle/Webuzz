<template>
    <div class="window-height column q-pa-none">
        <div class="full-height row justify-center q-gutter-md">
            <div  class="bg-grey-2 col-12 col-lg-8 col-md-10 q-pa-lg">
                <div class="q-mb-xl" v-for="n in 10" :key="n">
                    <q-chat-message
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