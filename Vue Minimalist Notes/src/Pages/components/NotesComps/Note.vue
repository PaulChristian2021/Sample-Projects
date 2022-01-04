<template>
  <BaseCard>
    <li :id="id">
      <p>{{ desc }}</p>
      <div>
        <p class="time">{{ time }}</p>
        <p class="date">{{ date }}</p>
      </div>
    </li>
    <i class="uil uil-times" @click="deleteNote"></i>
  </BaseCard>
</template>

<script>
export default {
  props: ["desc", "date", "id", "time"],
  methods:{
    deleteNote(){
      this.$store.commit('deleteNote', this.id)
    }
  }
};
</script>

<style scoped>

.card {
  margin-top: 5px;
}
li {
  list-style: none;
}
li>p{width: 260px;

  word-wrap: break-word;
}
div {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 280px;
}
.time, .date {
  color: rgb(138, 138, 138);
}

.uil-times{
  height: 16px;
  float:right;
  margin-left: -10px;
  transition: transform .2s;
}

.uil-times:hover{
  cursor:pointer;
  color: rgb(168, 1, 1);
  transform: rotate(180deg)
}
</style>
