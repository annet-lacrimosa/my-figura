jQuery(function() {

    (function(){
        $('.open-popup-btn').on('click', function(e){
            $('body').find('.success-pop-up-filter').css("display", "block")
        });
    }());


    /*function speedometer() {
        var s = Snap('#speedometer');
         Snap.load('common/images/speedometer.svg', function (data) {
            $('.searching-pop-up').show();
            // $('.success-pop-up').hide();
            // s.append(data);
            var pin = s.select('#pin');
            var circle = s.select('#circle');
            var circleGray = s.select('#circle-gray');
            var circleGrayLength = Snap.path.getTotalLength(circleGray);
            Snap.animate(0, circleGrayLength, function (step) {
                circle.attr({path: Snap.path.getSubpath(circleGray, 0, step)});
            }, 2000);
            pin.transform('r90, 200, 200');
            pin.animate({transform: 'r274, 200, 200'}, 2000, function () {
                 $('.searching-pop-up').hide();
                 s.remove();
                $('.searching-pop-up').prepend('<svg id="speedometer" width="400px" height="250px"></svg>');
                $('.success-pop-up').show();
            });
         });
    }

    speedometer();*/

});