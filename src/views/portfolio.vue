<template>
    <div class="portfolio">
        <div class="container height-100 container-offset-right">
            <div class="logo">
            <h3>
                <a href="/">
                <span class="smaller">{</span> portfolio
                <span class="smaller">}</span>
                </a>
            </h3>
            </div>
        </div>
    <div class="gallery">
      <div class="gallery-panel"
         v-for="photo in photos"
         :key="photo.id">
        <router-link :to="`/photo/${photo.id}`">
            <img :src="thumbUrl(photo.filename)">
        </router-link>
      <!-- <img :src="thumbUrl(photo.filename)"> -->
    </div>
  </div>
  </div>
</template>
<style>
  .gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    /* grid-gap: 1rem; */
    max-width:calc(100% - 70px);
    /* margin: 5rem auto; */
    /* padding: 0 5rem; */
    margin-top: 34px;
  }  .gallery-panel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* border-radius: 0.75rem; */
  }
</style>
<script>
import photos from '@/photos.json'
export default {
  name: 'Gallery',
  data () {
    return {
      photos
    }
  },
  methods: {
    thumbUrl (filename) {
      return require(`../assets/images/thumbnails/${filename}`)
    }
  }
}
</script>
