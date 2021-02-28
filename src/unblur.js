'use strict';

function unblurCloudconformity() {
    console.log('Found cloudconformity.com.');
    document.querySelectorAll('p, ol, div, img').forEach(e => e.style.webkitFilter = "blur(0)");
    document.getElementById("kb-email-wall").style.display = "none";
}

function unblurScribd() {
    $("[class*='page_blur_promo'").remove()

    $('.between_page_ads').remove();
    
    $('.text_layer').css('color', '#000');
    $('.absimg').css('opacity', '1.0');
    $('.text_layer').css('text-shadow','black 0px 0px 0px');
}

function unblurOthers() {
    document.querySelectorAll('*').forEach(e => e.style.webkitFilter = "blur(0)");
}

function main() {
    chrome.storage.sync.get("url", ({ url }) => {
        console.log('get:' + url);
        
        if (url.includes('cloudconformity.com')) {
            unblurCloudconformity();
        } else if (url.includes('scribd.com')) {
            unblurScribd();
        } else {
            unblurOthers();            
        }

        console.log('Unblurred.');
    });
}

main();