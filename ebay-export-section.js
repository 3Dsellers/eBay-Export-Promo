var url_string = window.location.href;
var url = new URL(url_string);
var utm = url.searchParams.get("utm_source");

if (utm == "export_ebay"){

    var image_ = $('.home-header-image'),
    text = $('.home-header--text'),
    r_col_ = $('.header-column-right');

    var $image = 'https://uploads-ssl.webflow.com/5f60c731c7ffa0706798ef87/623b468cb1fc2faf1721e9ea_eBay%20Export%20and%203Dsellers.png',
    $r_col_head = '<p class="h2-4 general-features--title" style="font-size: 26px;">Selling with eBay Export or the&nbsp;<span class="text-span" style="font-size: 26px;">Growth Program</span>?<br>We Have a <span class="text-span" style="font-size: 26px;">Special Offer</span> for You!</p>',
    $r_col_text = '<p class="paragraph-14 helpdesk-services--text" style="margin-bottom:0">Acquiring international sales with <b>eBay Export is the <a href="https://www.3dsellers.com/blog/ebay-growth-program/?utm_source=3dsellers" target="_blank" style="font-weight: 700;text-decoration: none;">right choice</a></b> to expand your business without the overhead of technical managing and advertising.</p>',
    $main_text = '<div><p class="paragraph-14 helpdesk-services--text" style="text-align: left;margin-left: unset;margin-bottom: 18px;"><i>If you&apos;re enlisted or considering the </i><a href="https://export.ebay.com/en/new/?utm_source=3Dsellers" disabled="false">Growth Program</a>, we&apos;re thrilled you&apos;re taking this next step — we would be honoured to support you with the best eBay<i style="font-size: 18px;">&nbsp;<a href="https://www.3dsellers.com/ecommerce-automation" target="_blank" disabled="false">automation</a></i><i>&nbsp;&amp; management software available!</i></p><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><p class="paragraph-14 vs-steps-list--text"><strong>Step 1: </strong><br>Sign up for 3Dsellers!</p></div><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><div class="w-embed"><p class="paragraph-14 vs-steps-list--text"><strong>Step 2: </strong><br>Use this code: <b>EBAYN3D</b></p></div></div><div class="vs-steps--list"><img src="https://assets-global.website-files.com/5f60c731c7ffa0706798ef87/62035fcb80e5d80a21e17d4b_Group.svg" loading="lazy" alt="" class="vs-steps-list--icon"><p class="paragraph-14 vs-steps-list--text"><strong>Step 3: </strong><br>Get<strong>&nbsp;15% OFF</strong> for 1 year!</p></div><p class="paragraph-14 vs-steps--text credit"><strong>💰 Start now and get 15% off!</strong></p></div>'


    $(image_).attr('src', $image);
    $(text).after($main_text);
    $(text).remove();
    $(r_col_).prepend($r_col_head);
    $(r_col_).append($r_col_text);


}
