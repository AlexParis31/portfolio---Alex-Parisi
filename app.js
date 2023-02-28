

$(() => {

// Section 1 sidebar hover 
    const $hover = $('.sideBar')

    const appear = () => {
    $('.buttons').css('display', 'block')
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
    }

    const $clickResume = $('.resumeButton')

    const resumeAppear = () => {
        $('#resume').css('display', 'flex')
        $('#home-page').css('display','none')
        $('#bio').css('display', 'none')
        $('#projects').css('display', 'none')
    }

    const $clickProjects = $('.projectsButton')

    const projectsAppear = () => {
        $('#projects').css('display', 'flex')
        $('#home-page').css('display','none')
        $('#bio').css('display', 'none')
        $('#resume').css('display', 'none')
    }

    const $clickHome = $('.homeButton')

    const homePageAppear = () => {
        $('#home-page').css('display', 'flex')
        $('#bio').css('display', 'none')
        $('#resume').css('display', 'none')
        $('#projects').css('display', 'none')
    }
    // ** buttons to other pages **



// Section 3 carousel stuff

    const $clickNext = $('#next')

    let imgIndex = 0
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
    $projectOneText.css('display','block')
    $clickProjectOne.css('display','none')
    $clickProjectOneHide.css('display','inline-block')

    }

    const projectTwo = () => {
    const $projectTwoText = $('.project-text').eq(1)
    $projectTwoText.css('display','block')
    $clickProjectTwo.css('display','none')
    $clickProjectTwoHide.css('display','inline-block')
    }

    const projectThree = () => {
    const $projectThreeText = $('.project-text').eq(2)
    $projectThreeText.css('display','block')
    $clickProjectThree.css('display','none')
    $clickProjectThreeHide.css('display','inline-block')
    }



    const projectOneHide = () => {
        const $projectOneText = $('.project-text').eq(0)
        $projectOneText.css('display','none')
        $clickProjectOne.css('display','inline-block')
        $clickProjectOneHide.css('display','none')
        }

    const projectTwoHide = () => {
        const $projectTwoText = $('.project-text').eq(1)
        $projectTwoText.css('display','none')
        $clickProjectTwo.css('display','inline-block')
        $clickProjectTwoHide.css('display','none')
        }

    const projectThreeHide = () => {
        const $projectThreeText = $('.project-text').eq(2)
        $projectThreeText.css('display','none')
        $clickProjectThree.css('display','inline-block')
        $clickProjectThreeHide.css('display','none')
        }
    

    // ** Project Page **



// CLICKS:

//Section 1: 
    $hover.hover(appear, disappear )
//Section 2: 
    $clickBio.on('click', bioAppear)
    $clickResume.on('click', resumeAppear)
    $clickProjects.on('click', projectsAppear)
    $clickHome.on('click', homePageAppear)
//Section 3
    $clickNext.on('click', nextButton)
//Section 4
    $clickProjectOne.on('click', projectOne)
    $clickProjectTwo.on('click', projectTwo)
    $clickProjectThree.on('click', projectThree)

    $clickProjectOneHide.on('click', projectOneHide)
    $clickProjectTwoHide.on('click', projectTwoHide)
    $clickProjectThreeHide.on('click', projectThreeHide)

    

    

    

})

