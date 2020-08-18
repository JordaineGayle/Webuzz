<template>
    <div class="window-height doc-container bg-grey-3">

        <div class="fit column justify-center">

            <div class="row justify-center">

                <div class="window-height col-12 col-md-6 col-lg-4 shadow-5 bg-img relative-position">

                    <div class="absolute fit overlay"></div>

                    <div class="fit column relative-position">

                        <div class="col-12 q-pa-md" style="border-top-right-radius:30px;border-top-left-radius:30px;color:white">
                            <q-btn class="absolute" @click="() => this.$router.back()" unelevated round icon="keyboard_arrow_left" />
                            <div class="column justify-center fit">
                                <div class="row justify-center q-pa-md" style="background-color:rgba(255,255,255,0.4)">
                                    <q-form class="fit q-gutter-lg " >
                                        <div class="col-12">
                                            <h4 class="text-center q-pa-none" >Sign Up Today!</h4>
                                            <q-input label="First Name" filled color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-input label="Last Name" filled color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-input label="Email" filled type="email" color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-input label="Phone" filled type="phone" color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-input label="password" type="password" filled color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-btn rounded size="large" color="deep-purple-8" class="fit" label="Register"/>
                                        </div>
                                        <div class="col-12">
                                            <div class="row justify center">
                                                <div class="col-12">
                                                    <p @click="() => this.$router.push('/login')" class="cursor-pointer text-caption text-center text-bold" style="text-decoration:underline">Already Have An Account?</p>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </q-form>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<script>
export default {
    name:'Register'
}
</script>