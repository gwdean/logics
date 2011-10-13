// This is an adaptation of the HTML rendering
// program found in Haverbeke's Eloquent JavaScript

// renderFile makes it all happen

function renderFile(file, title) {
    var paragraphs = map(processParagraph, file.split("\n\n"));
    var footnotes = map(renderFootnote, extractFootnotes(paragraphs));
    var body = map(renderParagraph, paragraphs).concat(footnotes);
    return renderHTML(htmlDoc(title, body));
}

function tag(name, content, attributes) {
    return {name: name, attributes: attributes, content: content};
}

function link(target, text) {
    return tag("a", [text], {href: target});
}

var paragraphs = LAUGHTER.split("\n\n");
paragraph.length;

function processParagraph(paragraph) {
    var header = 0;
    while (paragraph.charAt(header) == "%")
	header++;
    if (header > 0)
	return {type: "h" + header, content: paragraph.slice(header + 1)};
    else
	return {type: "p", content: paragraph};
}

processParagraph(paragraphs[0]);

map(processParagraph, LAUGHTER.split("\n\n"));

// split() from 84. This is not functional, but it is more efficient

function split() {
    var pos = 0, fragments = [];
    while (pos < text.length) {
	if (text.charAt(pos) == "*") {
	    var end = findClosing("*", pos + 1);
	    fragments.push({type: "emphasized", content: text.slice(pos + 1, end)});
	    pos = end + 1;
	}
	else if (text.charAt(pos) == "{") {
	    var end = findClosing("}", pos + 1);
	    fragments.push({type: "footnote", content: text.slice(pos + 1, end)});
	    pos = end + 1;
	}
	else {
	    var end = findOpeningOrEnd(pos);
	    fragments.push({type: "normal", content: text.slice(pos, end)});
	    pos = end;
	}
    }
    return fragments;
}

// Moving the Footnotes

function extractFootnotes(paragraphs) {
    var footnotes = [];
    var currentNote = 0;

    function replaceFootnote(fragment) {
	if (fragment.type == "footnote") {
	    currentNote++;
	    footnotes.push(fragment);
	    fragment.number = currentNote;
	    return {type: "reference", number: currentNote};
	}
	else {
	    return fragment;
	}
    }
    
    forEach(paragraphs, function(paragraph) {
	paragraph.content = map(replaceFootnote, paragraph.content);
    });

    return footnotes;
}



