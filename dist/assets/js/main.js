$("#genBtn").click(function() {
    $('html,body').animate({
            scrollTop: $(".results").offset().top
        },
        'slow');
});

// Results
$('#form').on('submit', e => {
    e.preventDefault();

    var input = $('#input').val();
    var $results = $('#results');
    var items = StartupNameGenerator(input);
    $results.html('');
    items.forEach((item, idx) => {
        $('<a class="result-item" target="_blank">').
        html(`<span>${item}</span>`).
        attr('href', `https://namecheap.pxf.io/c/3518952/386170/5618?u=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults.aspx%3Fdomain%3D${item.toLowerCase()}.com`).
        //https://namecheap.pxf.io/c/3518952/386170/5618?u=https%3A%2F%2Fwww.namecheap.com%2Fdomains%2Fregistration%2Fresults.aspx%3domain%3D${item.toLowerCase()}.com
        appendTo($results);
    });
});