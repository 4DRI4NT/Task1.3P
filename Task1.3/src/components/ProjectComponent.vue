<script setup>
    let projects = [{
        projectId: 1,
        projectName: "ProjectONE"
    },
    {
        projectId: 2,
        projectName: "ProjectTWO"
    }]
</script>

<template>
    <div class="1">
        <div v-for="project in projects">
            <h2>{{ project.projectId }} | {{ project.projectName }}</h2>
            <img src='../assets/icon.png' :alt="project.projectName">
        </div>
    </div>
</template>