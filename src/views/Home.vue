<template>
    <div class="window-height doc-container bg-grey-3">
        
        <div class="fit column justify-center">
            <div class="row justify-center">
                <div class="window-height col-12 col-md-6 col-lg-4 shadow-5 bg-img relative-position">
                    <div class="absolute fit overlay"></div>
                    <div class="fit column relative-position">
                        
                        <div class="col-12 q-pa-md" style="border-top-right-radius:30px;border-top-left-radius:30px;color:white">
                            
                            <div class="column justify-center fit">
                                
                                <div class="row justify-center">
                                    <div class="col-12">
                                        <p class="text-h5">Welcome, everyone is accepted.</p>
                                    </div>
                                    <div class="col-12">
                                        <p class="text-body1">Webuzz is a social network platform where you can be yourself, meet people and form communities. Signup today and grow your network.</p>
                                    </div>
                                    <div class="col-12 q-mt-lg">
                                        <q-btn link to="/login" outline rounded  size="large" class="fit" color="white" label="Sign In" />
                                    </div>
                                    <div class="col-12 q-mt-md">
                                        <q-btn link to="/register" outline rounded  size="large" class="fit" color="white" label="Create Account" />
                                    </div>
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
    name: "Home"
}
</script>

<style>
    .bg-img{
        background-image: url('../assets/backgroundImage2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        
    }

    .overlay{
        background-color: rgba(0,0,0,0.5);
        backdrop-filter: blur(5px);
    }
</style>
