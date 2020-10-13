<template>
    <div class="sm:mt-8">
        <div class="relative pb-64">
            <img class="inset-0 absolute rounded-lg w-full shadow-md object-cover h-64" :src="property.imageUrl" alt="">
        </div>
        <div class="relative px-4 -mt-16">
            <div class="bg-white rounded-lg px-4 py-4 shadow-lg">
                <div class="flex sm:flex-wrap">
                    <span class="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-sm">PLUS</span>
                    <div class="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                        {{ property.beds }} {{ property.beds === 1 ? 'bed' : 'beds' }} &bull; {{ property.baths }} {{ property.baths === 1 ? 'bath' : 'baths' }}
                    </div>
                </div>
                <h4 class="mt-1 text-gray-900 font-semibold text-lg">{{ property.title }}</h4>
                <div class="mt-1">
                    <span class="text-gray-900">{{ property.price }}</span>
                    <span class="ml-1 text-gray-600">/ wk</span>
                </div>
                <div class="flex items-center mt-2 text-sm text-gray-600">
                    <svg v-bind:key="i" v-for="i in 5" class="h-4 w-4 fill-current" :class="property.rating >= i ? 'text-teal-500' : 'text-gray-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>
                    <span class="ml-2">{{ property.reviewCount }} reviews</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['property'],
}
</script>

<style>

</style>