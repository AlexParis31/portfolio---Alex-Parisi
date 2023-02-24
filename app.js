

$(() => {

// section 1
    const $hover = $('#sideBar')

    const appear = () => {
    $('#buttons').css('display', 'block')
}

    const disappear = () => {
    $('#buttons').css('display', 'none')
}


// section 2
    const $clickBio = $('#bioButton')

    const bioAppear = () => {
        $('#bio').css('display', 'block')
        $('#container').css('display','none')
    }

    const $clickResume = $('#resumeButton')

    const resumeAppear = () => {
        $('#resume').css('display', 'block')
        $('#container').css('display','none')
    }

    const $clickProjects = $('#projectsButton')

    const projectsAppear = () => {
        $('#projects').css('display', 'block')
        $('#container').css('display','none')
    }



// Section 1: When you click "click me", the options for the other 3 displays shows up
    $hover.hover(appear, disappear )

// Section 2: Click on "bio" "resume" or "projects" to display those pages
    $clickBio.on('click', bioAppear)
    $clickResume.on('click', resumeAppear)
    $clickProjects.on('click', projectsAppear)
})