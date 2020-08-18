<template>
    <div class="column justify-center q-pa-md q-gutter-md">
        <div v-for="n in 20" :key="n" class="row justify-center">
            <div  class="col-12 col-lg-4 col-md-6">
                <q-card class="my-card">
                    

                    <img src="https://cdn.quasar.dev/img/mountains.jpg" style="height: 300px;">

                    <q-card-section class="">
                        <p class="text-body1">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </q-card-section>

                    <q-separator></q-separator>

                    <q-item>
                        <q-item-section avatar>
                        <q-avatar>
                            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                        </q-avatar>
                        </q-item-section>

                        <q-item-section>
                        <q-item-label>Our Changing Planet</q-item-label>
                        <q-item-label caption>by John Doe</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-separator></q-separator>

                    <q-card-actions>
                        <q-space></q-space>
                        <q-btn size="md" flat color="grey-5" icon="favorite" >204k</q-btn>
                        <q-btn size="md" flat color="grey-5" icon="comment" >214</q-btn>
                        <!-- <q-btn size="lg" flat color="grey-5" icon="visibility" >5k</q-btn> -->
                        
                        <q-btn size="md" flat color="grey-5" icon="bookmark" >10</q-btn>
                        <q-btn size="md" flat color="grey-5" icon="share" >23k</q-btn>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Home',
    data(){
        return {
            expanded: false
        }
    }
}
</script>