<template>
  <table-view :page="page" :attributes="attributes" headerName="Šalys" :query="query" :apiRoute="apiRoute"/>
</template>


<script>
import TableView from '../components/TableView.vue'

export default {
  props: ['page'],
  data(){
    return{
      attributes : [
        {apiKey: 'name', collName: 'pavadinimas', children:'cities'},
        {apiKey: 'area', collName: 'užimamas plotas'},
        {apiKey: 'population', collName: 'gyventojų skaičius'},
        {apiKey: 'phone_code', collName: 'šalies tel. kodas'},
      ],
      query:{}
    }
  },
  methods:{
    queryFromRouter(){
      let search = this.$route.query.search
      let start_date = this.$route.query.start_date
      let end_date = this.$route.query.end_date
      // cleaning
      let rez = {search: search, start_date: start_date, end_date: end_date}
      Object.keys(rez).forEach(key => {if(rez[key] === null) delete rez[key]})
      return rez
    },

  },
  computed:{
    apiRoute(){
      return import.meta.env.VITE_API_ROUTE+'/countries'
    }
  },
  mounted(){
    this.query = this.queryFromRouter()
    // this.requestItems()
  },
  updated(){
    // this.requestItems()
  },
  beforeUpdate(){
    // couses recursion if in update
    this.query = this.queryFromRouter()
  },
  components:{
    TableView
  },
}
</script>
