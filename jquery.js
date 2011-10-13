// notes from "jQuery Pocket Reference"

// common jQuery idioms

// 11
$(":header")
    .map(function(){
	return this.id;
    })
    .toArray()
    .sort();

// 12
$("div").each(function() {
    if ($(this).is(":hidden"))
	return
});

// 14
$("form").attr.("action");

