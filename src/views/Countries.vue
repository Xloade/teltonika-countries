<template>
  <whole-page-layout>

    <template #header>
      <page-header headerName="šalys" @clickAdd="showForm = true"/>
    </template>

    <template #body>
      <search-bar/>
      <item-table :items="items" :attributes="attributes" @sort="(order) => this.order = order" @edit="(id) => edit(id)" @delete="(id) => deleteItem(id)"/>
      <pagination-row v-if="paginationLinks.length > 3" :links="paginationLinks" :currentQuery="this.passQuerry"/>
      <countries-form v-show="showForm" :id="editId" @close="closeForm()" @submited="formSubmited()"/>
    </template>

  </whole-page-layout>
</template>


<script>
import WholePageLayout from '../layouts/WholePageLayout.vue'
import PageHeader from '../components/PageHeader.vue'
import SearchBar from '../components/SearchBar.vue'
import ItemTable from '../components/ItemTable.vue'
import PaginationRow from '../components/PaginationRow.vue'
import CountriesForm from '../components/CountriesForm.vue/'

import TableViewMixin from '../Mixins/TableViewMixin.vue'
import { computed } from '@vue/runtime-core'

export default {
  mixins:[TableViewMixin],
  props: ['page'],
  data(){
    return{
      response : [],
      order : null,
      attributes : [
        {apiKey: 'name', collName: 'pavadinimas'},
        {apiKey: 'area', collName: 'užimamas plotas'},
        {apiKey: 'population', collName: 'gyventojų skaičius'},
        {apiKey: 'phone_code', collName: 'šalies tel. kodas'},
      ],
      editId : null,
      search : null,
      start_date : null,
      end_date : null,
    }
  },
  computed:{
    items(){
      // sorting
      if(this.order !== null){
        this.response['data'].sort((a, b) => {
            if(a.attributes.name == b.attributes.name){
              return 0
            }
            return a.attributes.name < b.attributes.name ? -1 : 1
          })
        if(this.order === 'desc'){
          this.response['data'].reverse()
        }
      }
      return this.response['data']
    },
    paginationLinks(){
      if(this.response.length < 1) return []
      return this.response['meta']['links']
    },
    passQuerry(){
      let query = {}
      if(this.search) query.search = this.search
      if(this.start_date) query.start_date = this.start_date
      if(this.end_date) query.end_date = this.end_date
      return query
    }
  },
  methods:{
    requestItems(){
      this.axios.get('https://akademija.teltonika.lt/countries_api/api/countries', { params: {page: this.page, search: this.search, start_date: this.start_date, end_date: this.end_date }})
        .then(response => this.response = response.data)
        .catch(error => alert(error.message))
    },
    closeForm(){
      this.showForm = false;
      this.editId = null
    },
    edit(id){
      this.editId = id
      this.showForm = true
    },
    deleteItem(id){
      this.axios.delete('https://akademija.teltonika.lt/countries_api/api/countries/'+id)
        .then(response => {
          this.requestItems();
          alert(response.data.message)
        })
        .catch(error => alert(error.message))
    },
    formSubmited(){
      this.closeForm()
      this.requestItems()
    },
    setFromQuery(){
      this.search = this.$route.query.search
      this.start_date = this.$route.query.start_date
      this.end_date = this.$route.query.end_date
    }
  },
  mounted(){
    this.setFromQuery()
    this.requestItems()
  },
  updated(){
    this.setFromQuery()
    this.requestItems()
  },
  components:{
    WholePageLayout,
    PageHeader,
    SearchBar,
    ItemTable,
    PaginationRow,
    CountriesForm,
  },
}
</script>
