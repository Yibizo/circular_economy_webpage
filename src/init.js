export function setActiveView(new_active) {
    $(`#${window.isActive}`).removeClass('nav_is_active');
    $('#content').on('unload');
    window.isActive = new_active;
    $(`#${window.isActive}`).addClass('nav_is_active');
    $('#content').load(`../content/${window.isActive}.html`);
    
    if (window.isActive == 'home_view') {
        $('#content').addClass('has_image');
    } else {
        $('#content').removeClass('has_image');
    }
}
export async function init() {
    // window.active_views = {
    //     home_view: true,
    //     info_view: false,
    //     game_view: false,
    //     review_view: false
    // }
    console.log('init');
    
    window.firstTime = true;

    await $(function() {
        $('#nav').load('nav.html');
        $('#content').load('../content/home_view.html');
        $('#content').addClass('has_image');
        $('#footer').load('footer.html');
    })


    $(document).ready(function () {
        window.isActive = 'home_view';
        $(window).on('load', function() {
            
            $('.nav_btn').click(function (e) { 
                e.preventDefault();
                console.log(window.isActive != $(this).attr('id'));
                if (window.isActive != $(this).attr('id')) {
                    setActiveView($(this).attr('id'));
                }
            });
        });
    });
}
