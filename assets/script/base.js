var data;

$.get('assets/data/data.json', function (data) {
    var items = "";

    data.forEach(function (subdata, index) {
        items = items.concat('<div class="item"><img src="').concat(subdata.icon).concat('"><span class="description">').concat(subdata.category).concat('</span><div><span class="score">').concat(subdata.score).concat('</span><span class="out-of">/ 100</span></div></div>');
    });

    $("#summary header").after(items);
});