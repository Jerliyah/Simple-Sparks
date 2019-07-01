
// :: Starting variables ::

const container = document.querySelector('.heading_alternating-grid > .grid')

const projects = [
    {
        name: 'Cosmos',
        folder_name: 'cosmos',
        screenshot_path: '/screenshots/one.gif'
    },
    {
        name: 'Circle Pulse',
        folder_name: 'circle-pulse',
        screenshot_path: '/screenshot.gif'
    },
    {
        name: 'Windows',
        folder_name: 'windows',
        screenshot_path: '/screenshot.gif'
    },
    {
        name: '3 Towers',
        folder_name: '3-towers',
        screenshot_path: '/screenshot.png'
    }

]



// =======================================================
// :: Actions ::

remove('.no-js-alert')

projects.forEach( (project) => {
    container.insertAdjacentHTML('beforeend', template(project.name, project.folder_name, project.screenshot_path) )
})



// =======================================================
// Helper functions

function template(name, folder_name, screenshot_path) {
    return `
        <a href="${folder_name + '/index.html'}"
           class="image"
           style="background-image: url(${folder_name + screenshot_path});">
            <div class="j-modal">
            <div class="details">
                <p class="title">
                    ${name}
                </p>
                <hr>
                <div class="pseudo-button"
                     aria-label="- select to see the full project">
                    Check it out
                </div>
            </div>
            </div>
        </a>
    `
}

function remove(selector) {
    let thing = document.querySelector(selector)
    thing.style.display = "none"
}
