var express = require('express')
var app = express()
var _ = require('underscore');

app.listen(process.env.PORT ||3000, function(){
    console.log("Running server")
})


var redirectList = [
    {
        "from": "/",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us/categories/360001513471-Design-Online",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us/sections/360003780552-Designer-FAQ",
        "to": "https://help.coastalreign.com/en/categories/97281-designer-faq"
    },
    {
        "from": "/hc/en-us/articles/360024143392-How-do-I-add-multiple-products-with-the-same-design-",
        "to": "https://help.coastalreign.com/en/articles/366273"
    },
    {
        "from": "/hc/en-us/articles/360024409991-How-do-I-adjust-the-spacing-between-my-text-",
        "to": "https://help.coastalreign.com/en/articles/366337"
    },
    {
        "from": "/hc/en-us/articles/360024407591-How-do-I-add-an-outline-to-my-text-",
        "to": "https://help.coastalreign.com/en/articles/366401"
    },
    {
        "from": "/hc/en-us/articles/360024141132-How-do-I-change-the-colour-of-my-text-",
        "to": "https://help.coastalreign.com/en/articles/366465"
    },
    {
        "from": "/hc/en-us/articles/360024406851-How-do-I-change-the-colour-of-my-artwork-",
        "to": "https://help.coastalreign.com/en/articles/366529"
    },
    {
        "from": "/hc/en-us/articles/360024138172-How-do-I-remove-the-background-from-my-artwork-",
        "to": "https://help.coastalreign.com/en/articles/366593"
    },
    {
        "from": "/hc/en-us/articles/360024136412-How-do-I-upload-my-own-artwork-",
        "to": "https://help.coastalreign.com/en/articles/366657"
    },
    {
        "from": "/hc/en-us/articles/360024401711-How-do-I-change-the-size-of-my-artwork-or-text-",
        "to": "https://help.coastalreign.com/en/articles/366785"
    },
    {
        "from": "/hc/en-us/articles/360024135612-How-do-I-change-the-font-style-",
        "to": "https://help.coastalreign.com/en/articles/366913"
    },
    {
        "from": "/hc/en-us/articles/360024135472-How-do-I-add-personalized-names-and-numbers-",
        "to": "https://help.coastalreign.com/en/articles/367041"
    },
    {
        "from": "/hc/en-us/articles/360024134632-How-do-I-place-a-design-on-the-back-",
        "to": "https://help.coastalreign.com/en/articles/367105"
    },
    {
        "from": "/hc/en-us/articles/360024134552-Navigating-the-designer",
        "to": "https://help.coastalreign.com/en/articles/367169"
    },
    {
        "from": "/hc/en-us/sections/360000077352-Online-Designer",
        "to": "https://help.coastalreign.com/en/categories/97281-designer-faq"
    },
    {
        "from": "/hc/en-us/articles/360000339292-I-want-my-artwork-printed-on-different-products-and-or-colours-How-do-I-do-this-",
        "to": "https://help.coastalreign.com/en/articles/369409"
    },
    {
        "from": "/hc/en-us/articles/360000350371-When-I-upload-my-artwork-the-colours-I-want-is-not-available-in-the-colour-options-",
        "to": "https://help.coastalreign.com/en/articles/369473"
    },
    {
        "from": "/hc/en-us/articles/360000350351-How-do-I-save-my-design-for-later-",
        "to": "https://help.coastalreign.com/en/articles/369601"
    },
    {
        "from": "/hc/en-us/articles/360000350331-How-do-I-get-a-quote-for-an-item-that-I-designed-",
        "to": "https://help.coastalreign.com/en/articles/369665"
    },
    {
        "from": "/hc/en-us/articles/360000339252-Can-I-use-my-own-font-in-the-designer-",
        "to": "https://help.coastalreign.com/en/articles/369729"
    },
    {
        "from": "/hc/en-us/articles/360000350291-How-do-I-make-sure-that-my-design-is-centered-",
        "to": "https://help.coastalreign.com/en/articles/369793"
    },
    {
        "from": "/hc/en-us/sections/360000079351-Expert-Design-Help",
        "to": "https://help.coastalreign.com/en/categories/97473-expert-design-help"
    },
    {
        "from": "/hc/en-us/articles/360000355452-Are-there-any-additional-fees-for-design-work-",
        "to": "https://help.coastalreign.com/en/articles/367233"
    },
    {
        "from": "/hc/en-us/articles/360000367591-How-long-do-design-services-take-",
        "to": "https://help.coastalreign.com/en/articles/367297"
    },
    {
        "from": "/hc/en-us/articles/360000355412-Can-I-speak-with-a-designer-about-design-related-questions-and-requests-",
        "to": "https://help.coastalreign.com/en/articles/367361"
    },
    {
        "from": "/hc/en-us/categories/360000033332-Placing-an-Order",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us/sections/360000079311-High-Quality-Mockups",
        "to": "https://help.coastalreign.com/en/categories/97537-high-quality-mockups"
    },
    {
        "from": "/hc/en-us/articles/360000367551-How-do-I-approve-my-mockup-",
        "to": "https://help.coastalreign.com/en/articles/367425"
    },
    {
        "from": "/hc/en-us/articles/360000355352-When-do-I-receive-my-high-quality-mockup-and-how-do-I-approve-them-",
        "to": "https://help.coastalreign.com/en/articles/367489"
    },
    {
        "from": "/hc/en-us/articles/360000355332-Print-size-on-different-sizes-of-clothing",
        "to": "https://help.coastalreign.com/en/articles/367553"
    },
    {
        "from": "/hc/en-us/articles/360000367431-I-want-my-artwork-to-appear-bigger-smaller-on-the-mockup-is-this-possible-",
        "to": "https://help.coastalreign.com/en/articles/367617"
    },
    {
        "from": "/hc/en-us/articles/360000367391-The-colour-specified-in-my-order-details-is-not-what-I-want-printed-",
        "to": "https://help.coastalreign.com/en/articles/367681"
    },
    {
        "from": "/hc/en-us/articles/360000367191-I-just-received-my-mockup-but-want-to-make-a-change-to-it-Can-I-request-for-a-revision-",
        "to": "https://help.coastalreign.com/en/articles/367745"
    },
    {
        "from": "/hc/en-us/sections/360000077392-Samples",
        "to": "https://help.coastalreign.com/en/categories/97793-samples"
    },
    {
        "from": "/hc/en-us/articles/360000367171-Can-I-order-a-printed-sample-of-my-artwork-",
        "to": "https://help.coastalreign.com/en/articles/368705"
    },
    {
        "from": "/hc/en-us/articles/360000367031-Can-I-order-blank-samples-",
        "to": "https://help.coastalreign.com/en/articles/368769"
    },
    {
        "from": "/hc/en-us/sections/360000077372-Payments",
        "to": "https://help.coastalreign.com/en/categories/97857-payments"
    },
    {
        "from": "/hc/en-us/articles/360000366991-Can-I-pay-with-a-purchase-order-PO-",
        "to": "https://help.coastalreign.com/en/articles/368833"
    },
    {
        "from": "/hc/en-us/articles/360000339372-What-payment-methods-do-you-accept-",
        "to": "https://help.coastalreign.com/en/articles/368897"
    },
    {
        "from": "/hc/en-us/sections/360000079291-Quoting",
        "to": "https://help.coastalreign.com/en/categories/97921-quoting"
    },
    {
        "from": "/hc/en-us/articles/360000350591-How-do-I-lower-my-quoted-price-",
        "to": "https://help.coastalreign.com/en/articles/369025"
    },
    {
        "from": "/hc/en-us/articles/360000350571-How-do-I-get-a-quote-for-my-order-",
        "to": "https://help.coastalreign.com/en/articles/369153"
    },
    {
        "from": "/hc/en-us/sections/360000079271-FAQ",
        "to": "https://help.coastalreign.com/en/categories/98049-faq-frequen"
    },
    {
        "from": "/hc/en-us/articles/17377124122395-How-do-I-reorder-a-previous-order-",
        "to": "https://help.coastalreign.com/en/articles/369857"
    },
    {
        "from": "/hc/en-us/articles/4405390732571-Are-there-Rush-Fees-",
        "to": "https://help.coastalreign.com/en/articles/369921"
    },
    {
        "from": "/hc/en-us/articles/360000368991-Do-you-offer-custom-labelling-tagging-services-",
        "to": "https://help.coastalreign.com/en/articles/369985"
    },
    {
        "from": "/hc/en-us/articles/360000339092-Why-is-product-availability-not-guaranteed-",
        "to": "https://help.coastalreign.com/en/articles/370049"
    },
    {
        "from": "/hc/en-us/articles/360000349991-Can-I-make-an-update-to-my-order-",
        "to": "https://help.coastalreign.com/en/articles/370113"
    },
    {
        "from": "/hc/en-us/articles/360000338752-Can-I-bring-my-own-products-in-to-be-printed-",
        "to": "https://help.coastalreign.com/en/articles/370177"
    },
    {
        "from": "/hc/en-us/articles/360000338712-How-long-does-it-take-to-print-my-product-",
        "to": "https://help.coastalreign.com/en/articles/370241"
    },
    {
        "from": "/hc/en-us/articles/360000338592-Is-there-a-minimum-order-requirement-",
        "to": "https://help.coastalreign.com/en/articles/370305"
    },
    {
        "from": "/hc/en-us/articles/360000338572-What-happens-after-I-place-my-order-",
        "to": "https://help.coastalreign.com/en/articles/370369"
    },
    {
        "from": "/hc/en-us/articles/360000338532-What-is-your-late-order-policy-",
        "to": "https://help.coastalreign.com/en/articles/370433"
    },
    {
        "from": "/hc/en-us/articles/360000338492-What-is-your-misprint-policy-",
        "to": "https://help.coastalreign.com/en/articles/370497"
    },
    {
        "from": "/hc/en-us/articles/360000349691-What-is-your-refund-policy-",
        "to": "https://help.coastalreign.com/en/articles/370561"
    },
    {
        "from": "/hc/en-us/articles/360000349671-How-do-I-submit-my-order-",
        "to": "https://help.coastalreign.com/en/articles/370625"
    },
    {
        "from": "/hc/en-us/categories/360000034531-Product-Information",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us/sections/360000079431-Pricing",
        "to": "https://help.coastalreign.com/en/categories/98177-pricing"
    },
    {
        "from": "/hc/en-us/articles/360000371191-What-is-included-in-the-price-of-my-order-",
        "to": "https://help.coastalreign.com/en/articles/371649"
    },
    {
        "from": "/hc/en-us/articles/360000359292-How-do-I-apply-my-coupon-promo-code-",
        "to": "https://help.coastalreign.com/en/articles/371713"
    },
    {
        "from": "/hc/en-us/articles/360000359252-What-taxes-or-duties-apply-to-my-purchase-",
        "to": "https://help.coastalreign.com/en/articles/371777"
    },
    {
        "from": "/hc/en-us/articles/360000359032-Do-you-offer-discounts-for-bulk-orders-",
        "to": "https://help.coastalreign.com/en/articles/371841"
    },
    {
        "from": "/hc/en-us/articles/360000370471-Do-you-offer-wholesale-contract-pricing-for-resellers-",
        "to": "https://help.coastalreign.com/en/articles/372673"
    },
    {
        "from": "/hc/en-us/articles/360000370311-Do-you-offer-price-matching-",
        "to": "https://help.coastalreign.com/en/articles/371905"
    },
    {
        "from": "/hc/en-us/articles/360000357892-I-am-purchasing-items-for-a-school-How-do-I-receive-PST-exemption-",
        "to": "https://help.coastalreign.com/en/articles/371969"
    },
    {
        "from": "/hc/en-us/sections/360000079411-Embroidery",
        "to": "https://help.coastalreign.com/en/categories/98561-embroidery"
    },
    {
        "from": "/hc/en-us/articles/360000369771-Can-I-see-an-embroidery-sample-sew-out-before-production-",
        "to": "https://help.coastalreign.com/en/articles/372033"
    },
    {
        "from": "/hc/en-us/articles/360000357712-How-expensive-is-embroidery-",
        "to": "https://help.coastalreign.com/en/articles/372097"
    },
    {
        "from": "/hc/en-us/sections/360000079391-Printing",
        "to": "https://help.coastalreign.com/en/categories/98689-printing"
    },
    {
        "from": "/hc/en-us/articles/360000369711-Can-I-print-tone-on-tone-black-on-black-",
        "to": "https://help.coastalreign.com/en/articles/372225"
    },
    {
        "from": "/hc/en-us/articles/360000369691-Is-screen-printing-cheaper-than-embroidery-",
        "to": "https://help.coastalreign.com/en/articles/372289"
    },
    {
        "from": "/hc/en-us/articles/360000369671-Does-screen-printing-last-a-long-time-",
        "to": "https://help.coastalreign.com/en/articles/372353"
    },
    {
        "from": "/hc/en-us/articles/360000369431-How-many-colours-can-be-printed-",
        "to": "https://help.coastalreign.com/en/articles/372417"
    },
    {
        "from": "/hc/en-us/sections/360000077412-General-Product-Information",
        "to": "https://help.coastalreign.com/en/categories/98753-general-product-information"
    },
    {
        "from": "/hc/en-us/articles/4404624424987-What-is-the-difference-between-sublimated-patches-and-embroidered-patches-",
        "to": "https://help.coastalreign.com/en/articles/372481"
    },
    {
        "from": "/hc/en-us/articles/4404617809819-What-types-of-towels-do-you-offer-",
        "to": "https://help.coastalreign.com/en/articles/372737"
    },
    {
        "from": "/hc/en-us/articles/4404331762459-How-do-custom-sublimated-towel-orders-work-",
        "to": "https://help.coastalreign.com/en/articles/372801"
    },
    {
        "from": "/hc/en-us/articles/4404331421851-What-printing-methods-do-you-offer-and-what-are-the-differences-",
        "to": "https://help.coastalreign.com/en/articles/372865"
    },
    {
        "from": "/hc/en-us/articles/4404261438875-What-printing-methods-do-you-offer-on-bottles-mugs-and-other-drinkware-",
        "to": "https://help.coastalreign.com/en/articles/372929"
    },
    {
        "from": "/hc/en-us/articles/360000369491-How-are-individual-names-and-numbers-printed-",
        "to": "https://help.coastalreign.com/en/articles/372993"
    },
    {
        "from": "/hc/en-us/articles/360000369351-How-do-I-take-care-of-my-printed-products-",
        "to": "https://help.coastalreign.com/en/articles/373057"
    },
    {
        "from": "/hc/en-us/articles/360000357252-Can-I-customize-team-uniforms-with-names-and-numbers-",
        "to": "https://help.coastalreign.com/en/articles/373121"
    },
    {
        "from": "/hc/en-us/articles/360000369231-What-if-I-want-to-print-my-design-on-special-locations-",
        "to": "https://help.coastalreign.com/en/articles/373185"
    },
    {
        "from": "/hc/en-us/articles/360000368071-What-is-the-difference-between-printing-and-embroidery-",
        "to": "https://help.coastalreign.com/en/articles/373249"
    },
    {
        "from": "/hc/en-us/articles/360000368031-Where-can-I-find-the-sizing-chart-for-a-product-",
        "to": "https://help.coastalreign.com/en/articles/373313"
    },
    {
        "from": "/hc/en-us/articles/360000355532-I-can-t-find-a-product-that-suits-my-needs-",
        "to": "https://help.coastalreign.com/en/articles/373377"
    },
    {
        "from": "/hc/en-us/categories/360000034511-File-Setup-and-Prep",
        "to": "https://help.coastalreign.com/en/categories/98945-general-file-and-prep-questions"
    },
    {
        "from": "/hc/en-us/sections/360000080312-General-File-and-Prep-Questions",
        "to": "https://help.coastalreign.com/en/categories/98945-general-file-and-prep-questions"
    },
    {
        "from": "/hc/en-us/articles/360000372671-Can-I-request-a-specific-Pantone-colour-",
        "to": "https://help.coastalreign.com/en/articles/373505"
    },
    {
        "from": "/hc/en-us/articles/360000372571-Can-you-print-a-specific-HEX-colour-",
        "to": "https://help.coastalreign.com/en/articles/373569"
    },
    {
        "from": "/hc/en-us/articles/360000360772-What-are-some-issues-that-may-arise-with-printing-",
        "to": "https://help.coastalreign.com/en/articles/373633"
    },
    {
        "from": "/hc/en-us/articles/360000360712-What-resolution-should-my-graphic-be-",
        "to": "https://help.coastalreign.com/en/articles/373697"
    },
    {
        "from": "/hc/en-us/articles/360000360532-What-is-a-vector-file-",
        "to": "https://help.coastalreign.com/en/articles/373761"
    },
    {
        "from": "/hc/en-us/articles/360000371931-My-design-contains-a-gradient-How-many-colours-is-that-considered-if-I-want-it-printed-",
        "to": "https://help.coastalreign.com/en/articles/373825"
    },
    {
        "from": "/hc/en-us/articles/360000360172-What-format-should-my-file-be-in-",
        "to": "https://help.coastalreign.com/en/articles/373889"
    },
    {
        "from": "/hc/en-us/articles/360000371511-I-don-t-have-a-high-resolution-file-is-that-okay-",
        "to": "https://help.coastalreign.com/en/articles/373953"
    },
    {
        "from": "/hc/en-us/categories/360000034471-Shipping-and-Pickup",
        "to": "https://help.coastalreign.com/"
    },
    {
        "from": "/hc/en-us/sections/360000082391-Pickups",
        "to": "https://help.coastalreign.com/en/categories/99073-pickups"
    },
    {
        "from": "/hc/en-us/articles/360000361872-I-can-no-longer-pick-up-my-order-can-you-ship-it-to-me-instead-",
        "to": "https://help.coastalreign.com/en/articles/374017"
    },
    {
        "from": "/hc/en-us/articles/360000361752-Can-I-arrange-a-courier-to-pick-up-my-order-",
        "to": "https://help.coastalreign.com/en/articles/374081"
    },
    {
        "from": "/hc/en-us/articles/360000373771-What-are-your-hours-of-operation-",
        "to": "https://help.coastalreign.com/en/articles/374145"
    },
    {
        "from": "/hc/en-us/articles/360000318412-What-is-your-pickup-address-",
        "to": "https://help.coastalreign.com/en/articles/374209"
    },
    {
        "from": "/hc/en-us/sections/360000080352-Shipping",
        "to": "https://help.coastalreign.com/en/categories/99137-shipping"
    },
    {
        "from": "/hc/en-us/articles/14992086624411-Can-I-ship-my-order-to-multiple-locations-",
        "to": "https://help.coastalreign.com/en/articles/374273"
    },
    {
        "from": "/hc/en-us/articles/4418090010139-International-Shipping",
        "to": "https://help.coastalreign.com/en/articles/374337"
    },
    {
        "from": "/hc/en-us/articles/4404308796571-When-will-my-order-be-ready-delivered-",
        "to": "https://help.coastalreign.com/en/articles/374465"
    },
    {
        "from": "/hc/en-us/articles/360000373751-Where-do-you-ship-to-",
        "to": "https://help.coastalreign.com/en/articles/374529"
    },
    {
        "from": "/hc/en-us/articles/360000373591-How-do-I-qualify-for-free-shipping-",
        "to": "https://help.coastalreign.com/en/articles/374593"
    },
    {
        "from": "/hc/en-us/articles/360000373531-How-long-does-shipping-take-",
        "to": "https://help.coastalreign.com/en/articles/374657"
    },
    {
        "from": "/hc/en-us/articles/360000361552-How-much-will-shipping-to-my-location-cost-",
        "to": "https://help.coastalreign.com/en/articles/374721"
    }
]
_.each(redirectList, function(redirect){
    app.get(redirect.from, function(req, res) {
        res.redirect(301, redirect.to)
    });
})
