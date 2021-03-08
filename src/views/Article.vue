<template>
  <div class="content">
    <div class="article">
      <div class="info">
        <h1 class="title">Article Title</h1>
        <p class="sub-header"><span>Author: </span> Bryan Hilldrup</p>
        <p class="sub-header"><span>Date: </span> 09.18.2020</p>
        <!-- Image -->
      </div>
      <div class="content">
        <h2>Sub-Title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit natus
          quasi sequi, obcaecati in deserunt quo ducimus incidunt impedit
          cupiditate? Minus aperiam recusandae nobis exercitationem architecto
          consectetur dolore temporibus laborum. Illum molestias alias optio
          possimus voluptate itaque praesentium rem repellendus ab nemo illo,
          nihil numquam? Dolorum quo facere tenetur numquam.
        </p>
        <h2>Sub-Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
          dolorum aliquam optio voluptates laboriosam officiis voluptate, nisi
          quod pariatur, suscipit facere eligendi labore magnam odio nemo! Quod
          quas consequatur fugiat minima cum ipsam natus atque ducimus voluptas
          nam quos ex, libero, tenetur possimus porro vero nisi sint? Inventore,
          et.
        </p>
        <h2>Sub-Title</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor
          labore id illum, perspiciatis velit assumenda molestiae ducimus, eaque
          mollitia optio nam vel odio maiores est amet quos nulla distinctio
          ratione officiis ad expedita dolores deserunt. Tempora, laboriosam
          accusantium. Error illo fugit quos nemo odit pariatur magni, odio
          earum iure! Omnis quas expedita reprehenderit minus reiciendis aliquid
          consectetur, iure soluta.
        </p>
      </div>
    </div>
    <create-comment depth="-1" />
    <the-comments />
  </div>
</template>

<script>
import CreateComment from '../components/layout/CreateComment.vue';
import TheComments from '../components/layout/TheComments.vue';

export default {
  components: {
    CreateComment,
    TheComments,
  },
};
</script>

<style scoped>
.article {
  margin: 2rem auto;
  padding: 0 1rem;
  width: 90%;
  max-width: 50rem;
  background: white;
  box-shadow: 0 2px 8px 4px rgba(0, 0, 0, 0.4);
}
.title {
  margin-bottom: 1rem;
  text-align: center;
}
.info {
  padding: 1rem;
  margin: 1rem;
  border-bottom: 1px solid black;
}
.content {
  line-height: 2;
  padding: 1rem 2rem;
  margin-top: 1rem;
}
.sub-header {
  margin: 0.25rem;
  font-size: 12px;
}
.sub-header span {
  font-weight: bold;
}
</style>
