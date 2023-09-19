<script setup>
    import ProjectComponent from '../components/ProjectComponent.vue'
</script>

<template>
    <br>
    
    <div class="flex-container">

        <div class="1">
            <h2>This is work page</h2>
            <p>look at all of this work</p>
        </div>

        <div class="2">
            <h2>This is a table</h2>
            <table>
                <tr>
                    <th>table heading 1</th>
                    <th>table heading 2</th>
                    <th>table heading 3</th>
                    <th>table heading 4</th>
                </tr>
                <tr>
                    <td>table data</td>
                    <td>table data</td>
                    <td>table data</td>
                    <td>more table data</td>
                </tr>
                <tr>
                    <td>more table data</td>
                    <td>more table data</td>
                    <td>more table data</td>
                    <td>even more table data</td>
                </tr>
            </table>
        </div>

        <div class="3">
            <ProjectComponent></ProjectComponent>
        </div>

    </div>
    
  </template>
  
  <style scoped>
    @import '../assets/main.css'
  </style>
  