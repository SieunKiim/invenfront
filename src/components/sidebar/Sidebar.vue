<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <div class="row" >
        
            <span v-if="collapsed">
                &nbsp;
            </span>
            <span v-else >LAMEDITECH</span>
        

        </div>
        

        <SidebarLink to="/inven/All/" icon="fas fa-align-justify">All</SidebarLink>
        <SidebarLink to="/inven/Computer/" icon="fas fa-chalkboard-teacher">Computer</SidebarLink>
        <SidebarLink to="/inven/Screen/" icon="fas fa-tv">Screen</SidebarLink>
        <SidebarLink to="/inven/Medical/" icon="fas fa-medkit">Medical</SidebarLink>
        <SidebarLink to="/inven/Others/" icon="fas fa-ellipsis-h">Others</SidebarLink>
        
        
        <div>
            <!-- <SidebarLink to="/user/" icon="fas fa-ellipsis-h">사용자 추가</SidebarLink> -->
        </div>
        <span
            class="collapse-icon"
            :class="{ 'rotate-180': collapsed }"
            @click="toggleSidebar"
        >
            <i class="fas fa-angle-double-left" />
        </span>
    </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
    props: {},
    components: {SidebarLink},
    setup() {
        return {collapsed, toggleSidebar, sidebarWidth}
    }
}
</script>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
.row {
    font-size: 1.5em;
    height: 2.7em;
    margin-top: 2em; 
    font-weight: 800;
    padding: 0em;
}
/* .sidebar h1 {
    height: 2em;
    
} */

.collapse-icon {
    position: absolute;
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);
    
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>