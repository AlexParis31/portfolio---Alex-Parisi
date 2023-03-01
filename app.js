

$(() => {

// Section 1 sidebar hover 
    const $hover = $('.sideBar')

    const appear = () => {
    $('.buttons').show('slow')

    }

    const disappear = () => {
    $('.buttons').css('display', 'none')
    }
    // ** sidebar hover **



// Section 2 buttons to other pages
    const $clickBio = $('.bioButton')

    const bioAppear = () => {
        $('#bio').css('display', 'flex')
        $('#home-page').css('display','none')
        $('#resume').css('display', 'none')
        $('#projects').css('display', 'none')
        $('.carousel-images').children().eq(imgIndex).css('display','block')
        $('header').text("Alex's Biography")
    }

    const $clickResume = $('.resumeButton')

    const resumeAppear = () => {
        $('#resume').css('display', 'flex')
        $('#home-page').css('display','none')
        $('#bio').css('display', 'none')
        $('#projects').css('display', 'none')
        $('header').text("Alex's Resume")
    }

    const $clickProjects = $('.projectsButton')

    const projectsAppear = () => {
        $('#projects').css('display', 'flex')
        $('#home-page').css('display','none')
        $('#bio').css('display', 'none')
        $('#resume').css('display', 'none')
        $('header').text("Alex's Project")
    }

    const $clickHome = $('.homeButton')

    const homePageAppear = () => {
        $('#home-page').css('display', 'flex')
        $('#bio').css('display', 'none')
        $('#resume').css('display', 'none')
        $('#projects').css('display', 'none')
        $('header').text("Alex's Website")
    }
    // ** buttons to other pages **



// Section 3 carousel stuff

    const $clickPrevious = $('#previous')

    const $clickNext = $('#next')

    let imgIndex = 0

    const previousButton = () => {
        imgIndex = imgIndex-1
        $('.carousel-images').children().eq(imgIndex + 1).css('display','none')
        if (imgIndex < 0) {
            imgIndex = 2
            
        }
        $('.carousel-images').children().eq(imgIndex).css('display','block')
    }

    const nextButton = () => {
        imgIndex ++
        $('.carousel-images').children().eq(imgIndex - 1).css('display','none')
        if (imgIndex > 2) {
            imgIndex = 0
            
        }
        $('.carousel-images').children().eq(imgIndex).css('display','block')

       
    }
    // ** carousel stuff **



// Section 4 Project page

    const $clickProjectOne = $('.project-button').eq(0)
    const $clickProjectTwo = $('.project-button').eq(1)
    const $clickProjectThree = $('.project-button').eq(2)

    const $clickProjectOneHide = $('.project-hide').eq(0)
    const $clickProjectTwoHide = $('.project-hide').eq(1)
    const $clickProjectThreeHide = $('.project-hide').eq(2)

    

    const projectOne = () => {
    const $projectOneText = $('.project-text').eq(0)
    $projectOneText.slideDown('slow')
    $clickProjectOne.css('display','none')
    $clickProjectOneHide.css('display','inline-block')

    }

    const projectTwo = () => {
    const $projectTwoText = $('.project-text').eq(1)
    $projectTwoText.slideDown('slow')
    $clickProjectTwo.css('display','none')
    $clickProjectTwoHide.css('display','inline-block')
    }

    const projectThree = () => {
    const $projectThreeText = $('.project-text').eq(2)
    $projectThreeText.slideDown('slow')
    $clickProjectThree.css('display','none')
    $clickProjectThreeHide.css('display','inline-block')
    }



    const projectOneHide = () => {
        const $projectOneText = $('.project-text').eq(0)
        $projectOneText.slideUp('slow')
        $clickProjectOne.css('display','inline-block')
        $clickProjectOneHide.css('display','none')
        }

    const projectTwoHide = () => {
        const $projectTwoText = $('.project-text').eq(1)
        $projectTwoText.slideUp('slow')
        $clickProjectTwo.css('display','inline-block')
        $clickProjectTwoHide.css('display','none')
        }

    const projectThreeHide = () => {
        const $projectThreeText = $('.project-text').eq(2)
        $projectThreeText.slideUp('slow')
        $clickProjectThree.css('display','inline-block')
        $clickProjectThreeHide.css('display','none')
        }
    

    // ** Project Page **

// Section 5 Opacity on buttons hover 
const $hoverBio = $('.bioButton')

const opacityBio = () => {
$hoverBio.css('opacity', '0.8')
}
const noOpacityBio = () => {
    $hoverBio.css('opacity', '1')
}

const $hoverResume = $('.resumeButton')

const opacityResume = () => {
$hoverResume.css('opacity', '0.8')
}
const noOpacityResume = () => {
    $hoverResume.css('opacity', '1')
}

const $hoverProjects = $('.projectsButton')

const opacityProjects = () => {
$hoverProjects.css('opacity', '0.8')
}
const noOpacityProjects = () => {
    $hoverProjects.css('opacity', '1')
}

const $hoverHome = $('.homeButton')

const opacityHome = () => {
$hoverHome.css('opacity', '0.8')
}
const noOpacityHome = () => {
    $hoverHome.css('opacity', '1')
}

// CLICKS:

    
//Section 1: 
    $hover.hover(appear, disappear )
//Section 2: 
    $clickBio.on('click', bioAppear)
    $clickResume.on('click', resumeAppear)
    $clickProjects.on('click', projectsAppear)
    $clickHome.on('click', homePageAppear)
//Section 3
    $clickPrevious.on('click', previousButton)
    $clickNext.on('click', nextButton)
//Section 4
    $clickProjectOne.on('click', projectOne)
    $clickProjectTwo.on('click', projectTwo)
    $clickProjectThree.on('click', projectThree)

    $clickProjectOneHide.on('click', projectOneHide)
    $clickProjectTwoHide.on('click', projectTwoHide)
    $clickProjectThreeHide.on('click', projectThreeHide)

// Section 5
    $hoverBio.hover(opacityBio, noOpacityBio)
    $hoverResume.hover(opacityResume, noOpacityResume)
    $hoverProjects.hover(opacityProjects, noOpacityProjects)
    $hoverHome.hover(opacityHome, noOpacityHome)
    

    

    

})

