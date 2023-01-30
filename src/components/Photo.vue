<template>
  <div class="lightbox" @click.self="closeLightbox">    <a :href="photo.source.url" target="_blank"><img :src="photoUrl(photo.filename)"> </a>   <div class="lightbox-info">
      <div class="lightbox-info-inner">
        <h2 v-if="photo.title">{{ photo.title }}</h2><p v-if="photo.location">{{ photo.location }}</p>
        <h3 v-if="photo.subtitle">{{ photo.subtitle }}</h3>
        <p v-if="photo.description">
        <a rel="nofollow" :href="photo.description.url">
            {{ photo.description.name }}
        </a>
        </p><p v-if="photo.source">
        Visit
        <a rel="nofollow" target="_blank" :href="photo.source.url">
            {{ photo.source.name }}
        </a>
        </p>
        <a v-on:click="previousSlide" id="previous-button"><i class="fas fa-angle-left"></i></a>
        <a v-on:click="nextSlide" id="next-button"><i class="fas fa-angle-right"></i></a>
      </div>
    </div>
  </div>
</template>
<style>
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 1);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    z-index: 10;
  }  .lightbox > a {
    margin: auto;
  }
  .lightbox img {
    padding-left:2rem;
    margin: auto;
    width: 100%;
    grid-column-start: 1;
  }  .lightbox-info {
    margin: auto 2rem auto 0;
    padding-left:2rem;
  }  .lightbox-info-inner {
    background-color: #FFFFFF;
    display: inline-block;
    padding: 2rem;
  }
  #next-button {
    position:absolute;
    top:30px;
    left:calc(50% + 50px);
    font-size:50px;
    color:white;
    cursor:pointer;
  }
  #previous-button {
    position:absolute;
    top:30px;
    left:calc(50% - 20px);
    font-size:50px;
    color:white;
    cursor:pointer;
  }
  .gallery-panel img {
    display:block;
  }
  /* -----------phone media query----------- */
@media only screen and (max-width: 512px) {
  .gallery {
    margin-top:0!important;
    max-width:100%!important;
  }
  .lightbox {
    grid-template-columns: 1fr!important;
    grid-template-rows: 1fr!important;
  }
  .lightbox > a {
    margin:50px 20px 0px 20px!important;
  }
  .lightbox-info {
    margin:0 auto!important;
    padding-left:0;
  }
  .lightbox img {
    padding: 30px 0 0 0;
    max-height:200px auto;
  }
  #next-button, #previous-button {
    top:10px;
  }
  #previous-button {
    left:calc(50% - 60px);
  }
  .lightbox {
    position:absolute;
  }
}
</style>
<script>
import photos from '@/photos.json'; export default {
  name: 'Photo',
  data () {
    return {
      photos
    }
  },
  computed: {
    photo () {
      return this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id)
      })
    }
  },
  methods: {
    photoUrl (filename) {
      return require(`../assets/images/${filename}`)
    },
    closeLightbox () {
      this.$router.push('/portfolio')
    },
    previousSlide: function () {
      var photoID = this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id)
      })
      var minusOne = photoID.id - 1
      if (photoID.id !== 0) {
        // alert('photo id does not equal 0')
        this.$router.push('/photo/' + minusOne)
      } else {
        // alert('photo id equals 0')
        this.$router.push('/portfolio')
      }
    },
    nextSlide: function () {
      var photoID = this.photos.find((photo) => {
        return photo.id === Number(this.$route.params.id)
      })
      // alert(photoID.id)
      var plusOne = photoID.id + 1
      var count = Object.keys(photos).length
      // let count = 0
      // for (var photo in photos) {
      //   console.log(photo)
      //   count = count + 1
      // }
      if (plusOne < count) {
        // alert('count is ' + count + '; and plusOne is ' + plusOne)
        this.$router.push('/photo/' + plusOne)
      } else {
        // alert('photo id = count')
        this.$router.push('/portfolio')
      }
    }
  }
}
</script>
