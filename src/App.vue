<template>
  <div id="app" class="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen">
    <SiteHeader class="xl-flex-shrink-0"/>
    <div class="xl:flex-1 xl:flex xl:overflow-y-hidden">
        <SearchFilters />
        <main class="py-6 xl:flex-shrink-1">
            <div class="px-4">
                <h3 class="text-gray-900 text-xl">Los Angeles</h3>
                <p class="text-gray-600">Live like the stars in this luxurious Southern Califonia estate.</p> 
            </div>
            <div class="mt-6 sm:overflow-x-auto">
                <div class="px-4 sm:inline-flex sm:ml-2 sm:pb-8">
                    <div v-bind:key="i" v-for="(property, i) in properties" :class="{ 'mt-10': i > 0 }" class="mt-10 sm:mt-0 sm:max-w-xs sm:flex-shrink-0 sm:px-2">
                        <PropertyCard :property="property"/>
                    </div>
                </div>
            </div>       
        </main>
    </div>
    </div>
</template>

<script>
import SiteHeader from '@/components/SiteHeader'
import SearchFilters from '@/components/SearchFilters'
import PropertyCard from '@/components/PropertyCard'

export default {
  name: 'App',
  components: {
      SiteHeader,
      SearchFilters,
      PropertyCard,
  },
  data () {
      return {
          properties: [
              {
                  imageUrl: "/img/villa.jpg",
                  beds: 3,
                  baths: 2,
                  title: "Modern home and city center",
                  price: 140000,
                  reviewCount: 34,
                  rating: 2,
              },
              {
                  imageUrl: "/img/villa2.jpg",
                  beds: 3,
                  baths: 2,
                  title: "New home in San francisco everything you need",
                  price: 15000,
                  reviewCount: 64,
                  rating: 1,
              },
              {
                  imageUrl: "/img/villa3.jpg",
                  beds: 5,
                  baths: 2,
                  title: "New villa iceland (high rating)",
                  price: 350000,
                  reviewCount: 94,
                  rating: 5,
              },
              {
                  imageUrl: "/img/villa4.jpg",
                  beds: 3,
                  baths: 2,
                  title: "New York best hotel just waiting for you",
                  price: 140000,
                  reviewCount: 34,
                  rating: 3,
              },
          ]
      }
  }
}
</script>

<style>

</style>
