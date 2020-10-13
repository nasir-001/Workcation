<template>
  <section class="bg-gray-800 xl:w-64">
        <div class="flex justify-between px-4 py-3 xl:hidden">
            <div class="relative max-w-sm w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
                </div>
                <input class="bg-gray-900 w-5/6 pl-10 pr-2 focus:outline-none focus:bg-white focus:text-gray-900 py-2 text-white rounded-lg" placeholder="Search by keywords">
            </div>
            <button type="button" class="inline-flex items-center hover:bg-gray-600 focus:outline-none focus:shadow-outline rounded-lg shadow pl-3 pr-4"
                @click="toggle"
                :class="{ 'bg-gray-600': isOpen, 'bg-gray-700': !isOpen }"
            >
                <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"/></svg>
                <span class="text-white font-medium ml-1">Filters</span>
            </button>
        </div>
        <form v-show="isOpen" class="xl:flex xl:flex-col xl:justify-between xl:h-full">
            <div class="lg:flex xl:block xl:overflow-y-auto">
                <div class="px-4 py-4 border-t lg:w-1/3 xl:w-full border-gray-900 xl:border-t-0">
                    <div class="flex flex-wrap -mx-2">
                        <label class="block w-1/2 sm:w-1/4 lg:w-1/2 px-2">
                            <span class="text-sm font-semibold text-gray-500">Bedrooms</span>
                            <select class="block w-full form-select mt-1 shadow focus:bg-gray-600 text-white">
                                <option>4</option>
                            </select>
                        </label>
                        <label class="block w-1/2 sm:w-1/4 lg:w-1/2 px-2">
                            <span class="text-sm font-semibold text-gray-500">Bathrooms</span>
                            <select class="block w-full form-select mt-1 shadow focus:bg-gray-600 text-white">
                                <option>2</option>
                            </select>
                        </label>
                        <label class="mt-4 block w-full sm:w-1/2 lg:w-full lg:mt-4 sm:mt-0 px-2">
                            <span class="text-sm font-semibold text-gray-500">Price Range</span>
                            <select class="block w-full form-select mt-1 shadow focus:bg-gray-600 text-white">
                                <option>Up to $2,000/wk</option>
                            </select>
                        </label> 
                    </div>
                </div>
                <div class="px-4 py-4 border-t lg:w-1/3 xl:w-full border-gray-900 lg:border-l">
                    <span class="block text-sm font-semibold text-gray-500">Property Type</span>
                    <div class="sm:flex sm:-mx-2 lg:block lg:mx-0">
                        <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio" class="form-radio focus:bg-gray-700" name="propertyType" value="house">
                            <span class="ml-2 text-white">House</span>
                        </label>
                        <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio" class="form-radio focus:bg-gray-700" name="propertyType" value="apartment">
                            <span class="ml-2 text-white">Apartment</span>
                        </label>
                        <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio" class="form-radio focus:bg-gray-700" name="propertyType" value="loft">
                            <span class="ml-2 text-white">Loft</span>
                        </label>
                        <label class="mt-3 sm:w-1/4 sm:px-2 flex items-center lg:w-full lg:px-0">
                            <input type="radio" class="form-radio focus:bg-gray-700" name="propertyType" value="townHouse">
                            <span class="ml-2 text-white">Townhouse</span>
                        </label>
                    </div>
                </div>
                <div class="px-4 py-4 border-t lg:w-1/3 xl:w-full border-gray-900 lg:border-l">
                    <span class="block text-sm font-semibold text-gray-500">Amenities</span>
                    <div class="sm:flex sm:-mx-2 sm:flex-wrap">
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="balcony">
                            <span class="ml-2 text-white">Balcony</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="pool">
                            <span class="ml-2 text-white">Pool</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="beach">
                            <span class="ml-2 text-white">Beach</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="petFriendly">
                            <span class="ml-2 text-white">Pet friendly</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="kidFriendly">
                            <span class="ml-2 text-white">Kid friendly</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/4 sm:px-2 lg:w-1/2 xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="parking">
                            <span class="ml-2 text-white">Parking</span>
                        </label>
                        <label class="mt-3 flex items-center sm:w-1/2 sm:px-2 lg:w-full xl:w-full">
                            <input type="checkbox" class="form-checkbox focus:bg-gray-700" name="airConditionin">
                            <span class="ml-2 text-white">Air Conditioning</span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="bg-gray-900 px-4 py-4 sm:text-right">
                <button class="sm:w-auto sm:inline-block block w-full bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg xl:block xl:w-full">Update results</button>
            </div>
        </form>    
    </section>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            isOpen: true,
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>

<style>

</style>