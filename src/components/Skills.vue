<template>
<div class="hello">
  <div class="holder">
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{data.skill}}</li>
    </ul>
    <!-- <div v-bind:class="{alert: showAlert, 'another-class': showClass}"></div> -->
    <!-- <div v-bind:class="alertObject"></div> -->
    <!-- shows alert if true -->

    <!-- <div v-bind:style="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight}"></div> -->

    <p>These are the skills that you possess.</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [
        {"skill": "Vue.js"},
        {"skill": "Frontend Developer"}
      ],

      bgColor: "blue",
      bgWidth: "100%",
      bgHeight: "30px"
      // alertObject: {
      //   alert: true,
      //   anotherClass: true
      // }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- To add external stylesheet /* <style src="./Skills.css" scoped> */ -->
<style scoped>

/* .alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}

.anotherClass {
  border: 10px solid black;
} */

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #E0EDF4;
  border-left: 5px solid #3EB3F6;
  margin-bottom: 2px;
  color: #3E5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: grey;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
</style>
