<template>
  <whole-page-layout>

    <template #header>
      <page-header headerName="Name" @clickAdd="showForm = true"/>
    </template>

    <template #body>
      <search-bar/>
      <item-table/>
      <pagination-row/>
      <countries-form v-show="showForm"/>
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

export default {
  mixins:[TableViewMixin],
  components:{
    WholePageLayout,
    PageHeader,
    SearchBar,
    ItemTable,
    PaginationRow,
    CountriesForm,
  },
  methods:{
    requestItems(){
      
    }
  }
}
</script>
