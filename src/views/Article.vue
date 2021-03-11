<template>
  <div class="container">
    <div class="content">
      <h1 class="article-header">
        MacBook Pro document confirms 'anti-debris' keyboard redesign
      </h1>
      <p class="article-sub-header">
        Apple hasn't publicly acknowledged there's an issue.
      </p>
      <div class="main">
        <div class="article-info">
          <img
            class="user-icon"
            src="../assets/user_icon.webp"
            alt="User Image"
          />
          <p><span>Date: </span> 07/10/2020</p>
          <p><span>Author: </span> S. Krishna</p>
        </div>
        <div class="article-body">
          <img class="main-image" src="../assets/macbook.webp" alt="macbook" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit natus
            quasi sequi, obcaecati in deserunt quo ducimus incidunt impedit
            cupiditate? Minus aperiam recusandae nobis exercitationem architecto
            consectetur dolore temporibus laborum. Illum molestias alias optio
            possimus voluptate itaque praesentium rem repellendus ab nemo illo,
            nihil numquam? Dolorum quo facere tenetur numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius velit
            dolorum aliquam optio voluptates laboriosam officiis voluptate, nisi
            quod pariatur, suscipit facere eligendi labore magnam odio nemo!
            Quod quas consequatur fugiat minima cum ipsam natus atque ducimus
            voluptas nam quos ex, libero, tenetur possimus porro vero nisi sint?
            Inventore, et.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolor
            labore id illum, perspiciatis velit assumenda molestiae ducimus,
            eaque mollitia optio nam vel odio maiores est amet quos nulla
            distinctio ratione officiis ad expedita dolores deserunt. Tempora,
            laboriosam accusantium. Error illo fugit quos nemo odit pariatur
            magni, odio earum iure! Omnis quas expedita reprehenderit minus
            reiciendis aliquid consectetur, iure soluta.
          </p>
        </div>
      </div>
      <create-comment depth="-1" @signin="showSignIn = true" />
      <the-comments
        @close="showSignIn = false"
        @signin="showSignIn = true"
        :showSignIn="showSignIn"
      />
    </div>
  </div>
</template>

<script>
import CreateComment from '../components/CreateComment.vue';
import TheComments from '../components/TheComments.vue';

export default {
  components: {
    CreateComment,
    TheComments,
  },
  data() {
    return {
      showSignIn: false,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  padding: 1rem 2rem;
  margin-top: 1rem;
  max-width: 70rem;
}
.article-header {
  margin: 0 0.5rem 1rem 0.5rem;
  font-size: 3rem;
}
.article-sub-header {
  margin: 0 0.5rem 1rem 0.5rem;
  font-size: 1.3rem;
}
.main {
  display: flex;
  border-top: 1px solid black;
}
.article-info {
  margin: 1rem;
  display: flex;
  flex-direction: column;
}
.article-info p {
  font-size: 16px;
  margin-bottom: 0.5rem;
  text-align: center;
}
.article-info span {
  font-weight: bold;
}
.user-icon {
  border-radius: 50%;
  margin: 1rem auto;
  height: 96px;
  width: 96px;
}
.article-body {
  margin: 2rem auto 2rem 0;
  padding: 0 1rem;
  width: 90%;
  max-width: 50rem;
  background: white;
  line-height: 1.5;
}
.main-image {
  height: auto;
  width: 100%;
  object-fit: contain;
  margin-bottom: 1rem;
}
.article-body p {
  margin: 2rem 0;
}
</style>
