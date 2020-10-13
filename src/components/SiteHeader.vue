<template>
  <header class="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
        <div class="flex justify-between px-4 py-3 xl:w-56 xl:bg-gray-900 xl:py-5">
            <div>
                <img src="/img/logo2.jpg" alt="">
            </div>
            <div class="flex sm:hidden">
                <button type="button" @click="toggle" class="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white">
                    <svg v-if="isOpen" class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"/></svg>
                    <svg v-if="!isOpen" class="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></svg>
                </button>
            </div>
        </div>
        <nav class="sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between" :class="{ 'hidden': !isOpen, 'block': isOpen }">
            <div class="hidden xl:block relative xl:max-w-xs xl:w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg class="h-6 w-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg>
                </div>
                <input class="bg-gray-200 border border-transparent w-5/6 pl-10 pr-2 focus:outline-none focus:bg-white focus:border-gray-400 py-2 text-gray-900 rounded-lg" placeholder="Search by keywords">
            </div>
            <div class="sm:flex sm:items-center">
                <div class="px-3 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-b-0 sm:py-0 sm:px-0"> 
                    <a href="#" class="block px-3 py-1 rounded leading-tight font-semi-bold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900 xl:font-semibold sm:hover:bg-gray-300">List your property</a>
                    <a href="#" class="block px-3 py-1 rounded leading-tight mt-1 sm:mt-0 font-semi-bold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:font-semibold sm:hover:bg-gray-300">Trips</a>
                    <a href="#" class="block px-3 py-1 rounded leading-tight mt-1 sm:mt-0 font-semi-bold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900 xl:font-semibold sm:hover:bg-gray-300">Messages</a>
                </div>
                <div class="px-5 py-5 sm:py-0 sm:px-0">
                    <div class="flex items-center sm:hidden sm:rounded-full sm:overflow-hidden sm:border-2 sm:border-gray-600 xl:border-gray-300 sm:focus:outline-none sm:focus:border-white">
                        <img class="rounded-full h-10 w-10 object-cover" src="/img/face.jpg" alt="">
                        <span class="text-gray-200 font-semibold ml-4 sm:hidden">Isla Schoger</span>
                    </div>
                    <button @click="toggleDropdown" type="button" class="hidden sm:block">
                        <img class="h-10 w-10 sm:h-8 sm:w-8 sm:ml-4 object-cover rounded-full border-2 border-gray-600 xl:border-gray-300" src="/img/face.jpg" alt="">
                    </button>
                    <div :class="[dropdownOpen ? 'sm:block' : 'sm:hidden']">
                    <button @click="dropdownOpen = false" class="hidden sm:block sm:fixed sm:opacity-0 sm:inset-0 sm:cursor-default sm:w-full sm:h-full"></button>
                        <div class="mt-5 sm:rounded-lg sm:absolute sm:bg-white sm:mt-3 sm:shadow-xl sm:py-2 sm:w-48 sm:right-0">
                            <a href="#" class="block text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500">Account settings</a>
                            <a href="#" class="block mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 sm:mt-0">Support</a>
                            <a href="#" class="block mt-3 text-gray-400 hover:text-white sm:text-gray-800 sm:px-4 sm:py-2 sm:hover:bg-indigo-500 sm:mt-0">Sign out</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    props: [],
    data() {
        return {
            isOpen: false,
            dropdownOpen: false
        }
    },
    mounted() {
        const onEscape = (e) => {
            if (!this.dropdownOpen || e.key !== 'Escape') {
                return
            }
            this.dropdownOpen = false
        }
        document.addEventListener('keydown', onEscape)
        this.$on('hook:destroy', () => {
            document.removeEventListener('keydown', onEscape)
        })
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen
        }
    }
}
</script>

<style>

</style>