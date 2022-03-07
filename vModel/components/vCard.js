app.component('vcard-display', {
    template:
    /*html*/
    `
    <div class='phonecontainer'>
    <section class='cardcontainer'>
        <div 
            v-for="project in projects" 
            :key="project.id" 
            @click="openProject(project.name, project.image)">
                
                <div class='cardinfo'>
                    <div>
                        <h1> {{ project.name }} </h1>
                    </div>

                    <div>    
                    {{ project.description }}
                    </div>
                    <div class='cardcall'>
                    {{ project.click }}
                    </div>

                </div>


            </div>
    </section>
    <div id='phone'></div>
    </div>

        
        <div class="app-image">
            <img :src="image">
        </div>`,
    data() {
        return {
            name: 'Bwindi',
            image: './assets/bwindi.png',
            projects: [
                { id: 0001, name: 'Bwindi',   description:'Bwindi is a design project developed on Figma. Bwindi is an online store that is designed to be more accessible to users.', image: './assets/bwindi.png', click:'View Bwindi Online Store' },
                { id: 0002, name: 'Craft-Flow', description:'Craft-Flow is a redesign of the profile creation flow on minecrafts website. This project was built with Adobe XD and Figma. ', image: './assets/procreat.png', click:'View Minecraft User Flow' },
                { id: 0003, name: 'Vigor',    description:'Vigor is a fitness app designed for users that are unable to commit to a regular schedule. This design was built on Figma.', image: './assets/vigor.png', click:'View Vigor Fitness App' },
                { id: 0004, name: 'E-Cade',   description:'E-Cade is an arcade wallet. This design concept was made entirely with Material Design 3 in Figma.', image: './assets/bwindi.png', click:'View E-Cade Arcade App' },
            ],
        }
    },
    methods: {
        openProject(projectname, projectimage) {
            this.name = projectname;
            this.image = projectimage;
        }
    }
})
