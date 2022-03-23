var section = '<div class="vs-steps wf-section" style="padding-top: unset;"><div class="container-1140-2 w-container"><div class="w-embed"><h2 class="h2-4 general-features--title">Selling with eBay Export or the&nbsp;<span class="text-span">Growth Program</span>?<br>We Have a <span class="text-span">Special Offer</span> for You!</h2></div><div class="w-embed"><p class="paragraph-14 helpdesk-services--text">Acquiring international sales with <b>eBay Export is the <a href="https://www.3dsellers.com/blog/ebay-growth-program" target="_blank" style="font-weight: 700;text-decoration: none;" disabled="disabled">right choice</a></b> to expand your business without the overhead of technical managing and advertising. If you&apos;re enlisted or considering the <a href="https://export.ebay.com/en/new/?utm_source=3Dsellers" target="_blank">Growth Program</a>, we&apos;re thrilled you&apos;re taking this next step — and we want to support your growth with the best eBay automation and management software available.</p></div><div class="vs-steps--wrapper w-row"><div class="w-col w-col-6"><p class="paragraph-14 helpdesk-services--text" style="text-align: left;margin-left: unset;font-size: 18px;"><i>Expedite sales and <a href="https://www.3dsellers.com/ecommerce-automation" target="_blank" disabled="disabled">automate</a>&nbsp;eBay workflows!</i></p><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><p class="paragraph-14 vs-steps-list--text"><strong>Step 1: </strong><br>Sign up for 3Dsellers!</p></div><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><div class="w-embed"><p class="paragraph-14 vs-steps-list--text"><strong>Step 2: </strong><br>Use this code: <b>EXP3D</b></p></div></div><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><p class="paragraph-14 vs-steps-list--text"><strong>Step 3: </strong><br>Get<strong>&nbsp;15% OFF</strong> for 6 months!</p></div><p class="paragraph-14 vs-steps--text credit"><strong>💰 Start now and get 15% off!</strong></p><a href="/signup" class="btn-blue-8 vs-steps--btn w-button" disabled="disabled">Get Your Credit Now</a></div><div class="w-col w-col-6"><img alt="Inkfrog" loading="lazy" src="https://assets-global.website-files.com/5f60c731c7ffa072ec98ef9c/6203bff778231090e7f0701b_inkFrog.png" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, (max-width: 991px) 47vw, (max-width: 1279px) 48vw, 560px" srcset="https://uploads-ssl.webflow.com/5f60c731c7ffa0706798ef87/623b468cb1fc2faf1721e9ea_eBay%20Export%20and%203Dsellers.png" https:="" uploads-ssl.webflow.com=""></div></div></div></div>';


var url_string = window.location.href;
var url = new URL(url_string);
var utm = url.searchParams.get("utm_source");

if (utm == "export_ebay") {

    var image_ = $('.home-header-image'),
        text = $('.home-header--text'),
        r_col_ = $('.header-column-right');

    var $image = 'https://uploads-ssl.webflow.com/5f60c731c7ffa0706798ef87/623b468cb1fc2faf1721e9ea_eBay%20Export%20and%203Dsellers.png',
        //$r_col_head = '<p class="h2-4 general-features--title" style="font-size: 26px;">Selling with eBay Export or the&nbsp;<span class="text-span" style="font-size: 26px;">Growth Program</span>?<br>We Have a <span class="text-span" style="font-size: 26px;">Special Offer</span> for You!</p>',
        $r_col_text = '<p class="paragraph-14 helpdesk-services--text" style="margin-bottom:0">Acquiring international sales with <b>eBay Export is the <a href="https://www.3dsellers.com/blog/ebay-growth-program/?utm_source=3dsellers" target="_blank" style="font-weight: 700;text-decoration: none;" disabled="disabled">right choice</a></b> to expand your business without the overhead from technical managing and advertising.</p>',
        $main_text = '<div><p class="paragraph-14 helpdesk-services--text" style="text-align: left;margin-left: unset;margin-bottom: 30px;">Considering enlisting in the eBay&nbsp;<a href="https://export.ebay.com/en/new/?utm_source=3Dsellers" disabled="disabled" style="">Growth Program</a>?&nbsp;We&apos;re thrilled you&apos;re taking this next step — and we&apos;d love to support your new sales with eBay<span style="font-size: 18px;">&nbsp;<a href="https://www.3dsellers.com/ecommerce-automation" target="_blank" disabled="disabled">automation</a></span>&nbsp;&amp; management software!</p><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><div class="w-embed"><p class="paragraph-14 vs-steps-list--text">Use code: <b>EBAYN3D&nbsp;</b>&nbsp;&amp; get<span style="font-weight: 700;">&nbsp;15% OFF</span>&nbsp;for 1 year!</p></div></div></div>'


    $(image_).attr('src', $image);
    $(text).after($main_text);
    $(text).remove();
    //$(r_col_).prepend($r_col_head);
    $(r_col_).append($r_col_text);


}
