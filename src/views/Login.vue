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
                                            <h4 class="text-center" >Sign In</h4>
                                            <q-input label="phone or email" filled color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-input label="password" type="password" filled color="deep-purple-8" bg-color="white"/>
                                        </div>
                                        <div class="col-12">
                                            <q-btn @click="() => this.$router.push('/main/home')" rounded size="large" color="deep-purple-8" class="fit" label="Login"/>
                                        </div>
                                        <div class="col-12">
                                            <div class="row justify center">
                                                <div class="col-6">
                                                    <p @click="() => this.$router.push('/register')" class="cursor-pointer text-caption text-center text-bold" style="text-decoration:underline">Create Account</p>
                                                </div>
                                                <div class="col-6">
                                                    <p @click="() => this.$router.push('/forget-password')" class="cursor-pointer text-caption text-center text-bold" style="text-decoration:underline">Forget Password</p>
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
    name:'Login'
}
</script>