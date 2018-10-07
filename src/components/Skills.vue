<template>
<div class="hello">
  <div class="holder">
    <ul>
      <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
    </ul>
    <div v-bind:class="{alert: showAlert}"></div>
    <!-- shows alert if true -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      skills: [{
          "skill": "Vue.js"
        },
        {
          "skill": "Frontend Developer"
        }
      ],
      showAlert: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- To add external stylesheet /* <style src="./Skills.css" scoped> */ -->
<style scoped>

.alert {
  background-color: yellow;
  width: 100%;
  height: 30px;
}

</style>
