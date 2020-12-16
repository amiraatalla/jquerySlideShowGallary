$(document).ready(function () {

    let newImage, exitImage, lessImage, greaterImage, divImage;
    var sources = [];

    // get sources for all pictures
$("#flw img").each(function(){
    sources.push(this.src);});


    let currentImage = 0;
        $("#flw img").click(function () {

        divImage = $('<div></div>');
        $(divImage).attr('id', 'div2');
        $(divImage).addClass("colors");
        $('body').append(divImage);
        $(divImage).css({
            'width': "100%",
            'height': "100%",
            'z-index': '3',
            'position': 'absolute',
            'display': 'block',
            'top': '0',
            'left': '0',
            'text-align': 'center',
            'background':'#B313B3'
        })

        // get index for current image
        currentImage = sources.indexOf(this.src);


        //create less than with this.src

        lessImage = $('<img />', {
            id: 'less',
            src: 'less.png',
            alt: 'Alt text'
        });

        
        $(divImage).append(lessImage);

        $(lessImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "49%",
            'right': "75%"
        })


        //create newimage with this.src

        newImage = $('<img />', {
            id: 'imgId',
            src: this.src,
            alt: 'Alt text'
        });

    
        $(divImage).append(newImage);

        $(newImage).css({
            'width': "700px",
            'height': "650px",

        })

        //create greater than with this.src

        greaterImage = $('<img />', {
            id: 'less',
            src: 'greater.png',
            alt: 'Alt text'
        });

        $(divImage).append(greaterImage);

        $(greaterImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "49%",
            'left': "75%"
        })

        //create exit  image

        exitImage = $('<img />', {
            id: 'exit',
            src: 'exit.png',
            alt: 'Alt text'
        });

        $(divImage).append(exitImage);

        $(exitImage).css({
            'width': "40px",
            'height': "40px",
            'position': 'absolute',
            'top': "1%",

        })

                //start exit function

                $(exitImage).click(function () {

                    $(divImage).remove();
        
                })
        
                //greater than function
                $(greaterImage).click(function () {

                    // repeat the images
                    if(currentImage==3){
                        currentImage=-1;
                    }
                    $(divImage).fadeOut(1000, function(){

                        //change the image source to the next image source from array
                        $("#imgId").attr("src",sources[++currentImage]);
                    });
                     $(divImage).fadeIn(1000);
                   
                })
        
                //less than function
                $(lessImage).click(function () {
                    
                    // repeat the images
                    if(currentImage==0){
                        currentImage=4;
                    }
                    $(divImage).fadeOut(1000, function(){

                        //change the image source to the previous image source from array
                        $("#imgId").attr("src",sources[--currentImage]);
                    });
                     $(divImage).fadeIn(1000);
                   
        
                
        
            })


    
})





});
