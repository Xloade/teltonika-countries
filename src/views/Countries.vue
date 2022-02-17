<template>
  <whole-page-layout>

    <template #header>
      <page-header headerName="šalys" @clickAdd="showForm = true"/>
    </template>

    <template #body>
      <search-bar/>
      <item-table :items="items" :attributes="attributes" @sort="(order) => this.order = order"/>
      <pagination-row v-if="paginationLinks.length > 3" :links="paginationLinks" :currentProps="this.passProps"/>
      <countries-form v-show="showForm" @close="this.showForm = false"/>
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
  props: ['page','search', 'start_date', 'end_date'],
  data(){
    return{
      response : null,
      order : null,
      attributes : [
        {apiKey: 'name', collName: 'pavadinimas'},
        {apiKey: 'area', collName: 'užimamas plotas'},
        {apiKey: 'population', collName: 'gyventojų skaičius'},
        {apiKey: 'phone_code', collName: 'šalies tel. kodas'},
      ]
    }
  },
  computed:{
    items(){
      if(!this.response) return []
      else if(this.order !== null){
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
      if(!this.response) return []
      else return this.response['meta']['links']
    },
    passProps(){
      return {page: this.page, search: this.search, start_date: this.start_date, end_date: this.end_date}
    }
  },
  methods:{
    requestItems(){
      this.axios.get('https://akademija.teltonika.lt/countries_api/api/countries', { params: {page: this.page, search: this.search, start_date: this.start_date, end_date: this.end_date }})
        .then(response => this.response = response.data)
        .catch(error => alert(error.message))
    }
  },
  mounted(){
    this.requestItems();
  },
  updated(){
    this.requestItems();
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
