var cogWheels = '<span class="glyphicon glyphicon-cog" aria-hidden="true"></span>';
var upload = '<span class="glyphicons glyphicons-upload x1" aria-hidden="true"></span>';
var play = '<span class="glyphicons glyphicons-play x1" aria-hidden="true"></span>';
var playlist = '<span class="glyphicons glyphicons-playlist x1" aria-hidden="true"></span>';
var save = '<span class="glyphicons glyphicons-floppy-save x1" aria-hidden="true"></span>'

var glColumns = {

  "retrieved_url": {field:"retrieved_url", title: "URL", titleTooltip: "URL of the webpage that was analyzed", align: "left", valign:"top", halign: "center", rowspan: 2, colspan: 1, formatter: "URLFormatter", sortable: true},
  "analyzed_text": {field:"analyzed_text", title: "Text", titleTooltip: "Text that was used in the analysis", width: "900", align: "left", valign:"top", halign: "center", rowspan: 2, colspan: 1, formatter: "analyzed_textFormatter", sortable: true},
  "language": {field:"language", title: "Language", titleTooltip: "Language used to analyze the text", align: "left", valign:"top", halign: "center", rowspan: 2, colspan: 1, formatter: "", sortable: true},

  "metadata": {field:"metadata", title: "Metadata", titleTooltip: "Webpage metadata, such as the author and the title of the page", valign:"top", halign: "center", rowspan: 1, colspan: 5, formatter: "", sortable: true},
  "authors": {field:"authors", title: "Authors", titleTooltip: "The authors of the document", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "authorsFormatter", sortable: true},
  "publication_date": {field:"publication_date", title: "Publication Date", titleTooltip: "The publication date in the format ISO 8601", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "title": {field:"title", title: "Title", titleTooltip: "The title of the document", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "image": {field:"image", title: "Image", titleTooltip: "URL of a prominent image on the webpage", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "feeds": {field:"feeds", title: "Feeds", titleTooltip: "RSS/ATOM feeds found on the webpage", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "feedsFormatter", sortable: true},

  "sentiment": {field:"sentiment", title: "Sentiment", titleTooltip: "The sentiment of the content", valign:"top", halign: "center", rowspan: 1, colspan: 2, formatter: "", sortable: true},
  "label": {field:"label", title: "Label", titleTooltip: "", halign: "center", align: "left", valign:"top", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "score": {field:"score", title: "Score", titleTooltip: "Sentiment score from -1 (negative) to 1 (positive)", halign: "center", align: "right", valign:"top", rowspan: 1, colspan: 1, formatter: "", sortable: true},

  "emotion": {field:"emotion", title: "Emotion", titleTooltip: "The anger, disgust, fear, joy, or sadness conveyed by the content", valign:"top", halign: "center", rowspan: 1, colspan: 5, formatter: "", sortable: true}, 
  "anger": {field:"anger", title: "Anger", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "disgust": {field:"disgust", title: "Disgust", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "fear": {field:"fear", title: "Fear", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "joy": {field:"joy", title: "Joy", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "sadness": {field:"sadness", title: "Sadness", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 

  "usage": {field:"usage", title: "Usage", titleTooltip: "API usage information for the request", valign:"top", halign: "center", rowspan: 1, colspan: 3, formatter: "", sortable: true}, 
  "features": {field:"features", title: "Features", titleTooltip: "Number of features used in the API call", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "text_characters": {field:"text_characters", title: "Text Characters", titleTooltip: "Number of text characters processed", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "text_units": {field:"text_units", title: "Text Units", titleTooltip: "Number of 10,000-character units processed", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}
}

var keColumns = {

  "keywords": {field:"keywords", title: "Keywords", titleTooltip: "The keywords from the analyzed text", valign:"top", halign: "center", rowspan: 1, colspan: 10, formatter: "", sortable: true},

  "text": {field:"text", title: "Text", titleTooltip: "The keyword text", valign:"top", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "relevance": {field:"relevance", title: "Relevance", titleTooltip: "Relevance score from 0 to 1. Higher values indicate greater relevance", valign:"top", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "count": {field:"count", title: "Count", titleTooltip: "Number of times the keyword appears in the analyzed text", valign:"top", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},

  "emotion": {field:"emotion", title: "Emotion", titleTooltip: "Emotion analysis results for the keyword", valign:"top", halign: "center", align: "middle", rowspan: 1, colspan: 5, formatter: "", sortable: true},

  "anger": {field:"anger", title: "Anger", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "disgust": {field:"disgust", title: "Disgust", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "fear": {field:"fear", title: "Fear", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "joy": {field:"joy", title: "Joy", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "sadness": {field:"sadness", title: "Sadness", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 

  "sentiment": {field:"sentiment", title: "Sentiment", titleTooltip: "Sentiment analysis results for the keyword", valign:"top", halign: "center", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "label": {field:"label", title: "Label", titleTooltip: "", align: "left", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "score": {field:"score", title: "Score", titleTooltip: "Sentiment score from -1 (negative) to 1 (positive)", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true},


}

var enColumns = {

  "entities": {field:"entities", title: "Entities", titleTooltip: "The entities detected in the analyzed text", valign:"top", halign: "center", align: "middle", rowspan: 1, colspan: 15, formatter: "", sortable: true},

  "type": {field:"type", title: "Type", titleTooltip: "Entity type", valign:"top", halign: "center", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "text": {field:"text", title: "Texte", titleTooltip: "The name of the entity", valign:"top", halign: "center", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "relevance": {field:"relevance", title: "Relevance", titleTooltip: "Relevance score from 0 to 1. Higher values indicate greater relevance", valign:"top", halign: "center", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "confidence": {field:"confidence", title: "Confidence", titleTooltip: "Confidence in the entity identification from 0 to 1. Higher values indicate higher confidence. In standard entities requests, confidence is returned only for English text. All entities requests that use custom models return the confidence score.", valign:"top", halign: "center", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "count": {field:"count", title: "Count", titleTooltip: "How many times the entity was mentioned in the text", valign:"top", halign: "center", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},

  "emotion": {field:"emotion", title: "Emotion", titleTooltip: "Emotion analysis results for the entity", valign:"top", halign: "center", align: "middle", rowspan: 1, colspan: 5, formatter: "", sortable: true},

  "anger": {field:"anger", title: "Anger", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "disgust": {field:"disgust", title: "Disgust", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "fear": {field:"fear", title: "Fear", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "joy": {field:"joy", title: "Joy", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 
  "sadness": {field:"sadness", title: "Sadness", titleTooltip: "", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true}, 

  "sentiment": {field:"sentiment", title: "Sentiment", titleTooltip: "Sentiment analysis results for the entity", valign:"top", halign: "center", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "label": {field:"label", title: "Label", titleTooltip: "", align: "left", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "score": {field:"score", title: "Score", titleTooltip: "Sentiment score from -1 (negative) to 1 (positive)", align: "right", valign:"top", halign: "center", rowspan: 1, colspan: 1, formatter: "", sortable: true},

  "disambiguation": {field:"disambiguation", title: "Disambiguation", titleTooltip: "Disambiguation information for the entity", valign:"top", halign: "center", rowspan: 1, colspan: 3, formatter: "", sortable: true},

  "name": {field:"name", title: "Name", titleTooltip: "", align: "left", valign:"top", align: "middle", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "dbpedia_resource": {field:"dbpedia_resource", title: "DBpedia resource", titleTooltip: "", align: "left", valign:"top", align: "middle", rowspan: 1, colspan: 1, formatter: "URLFormatter", sortable: true},
  "subtype": {field:"subtype", title: "Sub Type", titleTooltip: "", align: "left", valign:"top", align: "middle", rowspan: 1, colspan: 1, formatter: "subtypeFormatter", sortable: true},

}

var coColumns = {

  "concepts": {field:"concepts", title: "Concepts", titleTooltip: "The general concepts referenced or alluded to in the analyzed text", valign:"top", halign: "center", rowspan: 1, colspan: 3, formatter: "", sortable: true},

  "text": {field:"text", title: "Text", titleTooltip: "Name of the concept", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "relevance": {field:"relevance", title: "Relevance", titleTooltip: "Relevance score between 0 and 1. Higher scores indicate greater relevance", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "dbpedia_resource": {field:"dbpedia_resource", title: "DBpedia Resource", titleTooltip: "Link to the corresponding DBpedia resource", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "URLFormatter", sortable: true}

}

var caColumns = {

  "categories": {field:"categories", title: "Categories", titleTooltip: "The categories that the service assigned to the analyzed text.", valign:"top", halign: "center", rowspan: 1, colspan: 3, formatter: "", sortable: true},

  "label": {field:"label", title: "Label", titleTooltip: "The path to the category through the 5-level taxonomy hierarchy. For the complete list of categories, see <a href='https://cloud.ibm.com/docs/services/natural-language-understanding?topic=natural-language-understanding-categories#categories-hierarchy'>the Categories hierarchy documentation.</a>", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "score": {field:"score", title: "Score", titleTooltip: "Confidence score for the category classification. Higher values indicate greater confidence.", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "explanation": {field:"explanation", title: "Explanation", titleTooltip: "An array of relevant text from the source that contributed to the categorization. The sorted array begins with the phrase that contributed most significantly to the result, followed by phrases that were less and less impactful.", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "explanationFormatter", sortable: true}
  
}

var reColumns = {

  "relations": {field:"relations", title: "Relations", titleTooltip: "The relationships between entities in the content", valign:"top", halign: "center", rowspan: 1, colspan: 11, formatter: "", sortable: true},

  "type": {field:"type", title: "Type", titleTooltip: "The type of the relation", valign:"top", halign: "center", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "sentence": {field:"sentence", title: "Sentence", titleTooltip: "The sentence that contains the relation", valign:"top", halign: "center", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "score": {field:"score", title: "Score", titleTooltip: "Confidence score for the relation. Higher values indicate greater confidence.", valign:"top", halign: "center", align: "right", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "arguments0": {field:"arguments0", title: "1st Argument", titleTooltip: "First entity mention that is involved in the relation", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 4, formatter: "", sortable: true},
  "arguments1": {field:"arguments1", title: "2nd Argument", titleTooltip: "Second entity mention that is involved in the relation", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 4, formatter: "", sortable: true},
  
  "text0": {field:"text0", title: "Text", titleTooltip: "Text that corresponds to the argument", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "location0": {field:"location0", title: "Location", titleTooltip: "Character offsets indicating the beginning and end of the mention in the analyzed text", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "entitiesText0": {field:"entitiesText0", title: "Entity Text", titleTooltip: "Text that corresponds to the entity", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "entitiesType0": {field:"entitiesType0", title: "Entity Type", titleTooltip: "Entity type", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "text1": {field:"text1", title: "Text", titleTooltip: "Text that corresponds to the argument", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "location1": {field:"location1", title: "Location", titleTooltip: "Character offsets indicating the beginning and end of the mention in the analyzed text", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "entitiesText1": {field:"entitiesText1", title: "Entity Text", titleTooltip: "Text that corresponds to the entity", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "entitiesType1": {field:"entitiesType1", title: "Entity Type", titleTooltip: "Entity type", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  
}

var srColumns = {

  "semantic_roles": {field:"semantic_roles", title: "Semantic Roles", titleTooltip: "Sentence from the source that contains the subject, action, and object", valign:"top", halign: "center", rowspan: 1, colspan: 10, formatter: "", sortable: true},

  "sentence": {field:"sentence", title: "Sentence", titleTooltip: "The type of the relation", valign:"top", halign: "center", align: "left", rowspan: 2, colspan: 1, formatter: "", sortable: true},
  "subject": {field:"subject", title: "Subject", titleTooltip: "The extracted subject from the sentence", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 3, formatter: "", sortable: true},
  "action": {field:"action", title: "Action", titleTooltip: "The extracted action from the sentence", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 4, formatter: "", sortable: true},
  "object": {field:"object", title: "Object", titleTooltip: "The extracted object from the sentence", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "subjectText": {field:"subjectText", title: "Text", titleTooltip: "Text that corresponds to the subject role", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "subjectEntities": {field:"subjectEntities", title: "Entities", titleTooltip: "Entity type", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "subjectEntitiesFormatter", sortable: true},
  "subjectKeywords": {field:"subjectKeywords", title: "Keywords", titleTooltip: "An array of extracted keywords", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "subjectKeywordsFormatter", sortable: true},

  "actionText": {field:"actionText", title: "Text", titleTooltip: "Analyzed text that corresponds to the action", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "actionNormalized": {field:"actionNormalized", title: "Normalized", titleTooltip: "normalized version of the action", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "actionVerbText": {field:"actionVerbText", title: "Verb Text", titleTooltip: "The keyword text", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "actionVerbTense": {field:"actionVerbTense", title: "Verb Tense", titleTooltip: "Verb tense", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},

  "objectText": {field:"objectText", title: "Text", titleTooltip: "Object text", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "objectKeywords": {field:"objectKeywords", title: "Keywords", titleTooltip: "An array of extracted keywords", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "objectKeywordsFormatter", sortable: true},


}

var syToColumns = {

  "syntax": {field:"syntax", title: "Syntax", titleTooltip: "Tokens and sentences returned from syntax analysis.", valign:"top", halign: "center", rowspan: 1, colspan: 4, formatter: "", sortable: true},

  "tokens": {field:"tokens", title: "Tokens", titleTooltip: "", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 4, formatter: "", sortable: true},
  
  "tokensText": {field:"tokensText", title: "Text", titleTooltip: "The token as it appears in the analyzed text.", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "tokensPartOfSpeech": {field:"tokensPartOfSpeech", title: "Part Of Speech", titleTooltip: "The part of speech of the token. For descriptions of the values, see [Universal Dependencies POS tags](https://universaldependencies.org/u/pos/). Possible values: [ADJ,ADP,ADV,AUX,CCONJ,DET,INTJ,NOUN,NUM,PART,PRON,PROPN,PUNCT,SCONJ,SYM,VERB,X]", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "tokensLocation": {field:"tokensLocation", title: "Location", titleTooltip: "Character offsets indicating the beginning and end of the token in the analyzed text.", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "tokensLemma": {field:"tokensLemma", title: "Lemma", titleTooltip: "The [lemma](https://wikipedia.org/wiki/Lemma_%28morphology%29) of the token.", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},

}

var sySeColumns = {

  "syntax": {field:"syntax", title: "Syntax", titleTooltip: "Tokens and sentences returned from syntax analysis.", valign:"top", halign: "center", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "sentences": {field:"sentences", title: "Sentences", titleTooltip: "", align: "left", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "sentencesText": {field:"sentencesText", title: "Text", titleTooltip: "The sentence.", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "sentencesLocation": {field:"sentencesLocation", title: "Location", titleTooltip: "Character offsets indicating the beginning and end of the sentence in the analyzed text.", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},

}

var syToCols = [];
var syToRow0 = [];
syToRow0.push(syToColumns.syntax);
var syToRow1 = [];
syToRow1.push(syToColumns.tokens);
var syToRow2 = [];
syToRow2.push(syToColumns.tokensText);
syToRow2.push(syToColumns.tokensPartOfSpeech);
syToRow2.push(syToColumns.tokensLocation);
syToRow2.push(syToColumns.tokensLemma);
syToCols.push(syToRow0);
syToCols.push(syToRow1);
syToCols.push(syToRow2);

var sySeCols = [];
var sySeRow0 = [];
sySeRow0.push(sySeColumns.syntax);
var sySeRow1 = [];
sySeRow1.push(sySeColumns.sentences);
var sySeRow2 = [];
sySeRow2.push(sySeColumns.sentencesText);
sySeRow2.push(sySeColumns.sentencesLocation);
sySeCols.push(sySeRow0);
sySeCols.push(sySeRow1);
sySeCols.push(sySeRow2);


var srCols = [];
var srRow0 = [];
srRow0.push(srColumns.semantic_roles);
var srRow1 = [];
srRow1.push(srColumns.sentence);
srRow1.push(srColumns.subject);
srRow1.push(srColumns.action);
srRow1.push(srColumns.object);
var srRow2 = [];
srRow2.push(srColumns.subjectText);
srRow2.push(srColumns.subjectEntities);
srRow2.push(srColumns.subjectKeywords);
srRow2.push(srColumns.actionText);
srRow2.push(srColumns.actionNormalized);
srRow2.push(srColumns.actionVerbText);
srRow2.push(srColumns.actionVerbTense);
srRow2.push(srColumns.objectText);
srRow2.push(srColumns.objectKeywords);
srCols.push(srRow0);
srCols.push(srRow1);
srCols.push(srRow2);

var glCols = [];
var glRow0 = [];
glRow0.push(glColumns.retrieved_url);
glRow0.push(glColumns.analyzed_text);
glRow0.push(glColumns.language);
glRow0.push(glColumns.metadata);
glRow0.push(glColumns.sentiment);
glRow0.push(glColumns.emotion);
glRow0.push(glColumns.usage);
var glRow1 = [];
glRow1.push(glColumns.authors);
glRow1.push(glColumns.publication_date);
glRow1.push(glColumns.title);
glRow1.push(glColumns.image);
glRow1.push(glColumns.feeds);

glRow1.push(glColumns.score);
glRow1.push(glColumns.label);
glRow1.push(glColumns.anger);
glRow1.push(glColumns.disgust);
glRow1.push(glColumns.fear);
glRow1.push(glColumns.joy);
glRow1.push(glColumns.sadness);
glRow1.push(glColumns.features);
glRow1.push(glColumns.text_characters);
glRow1.push(glColumns.text_units);
glCols.push(glRow0);
glCols.push(glRow1);


var caCols = [];
var caRow0 = [];
caRow0.push(caColumns.categories);
var caRow1 = [];
caRow1.push(caColumns.label);
caRow1.push(caColumns.score);
caRow1.push(caColumns.explanation);
caCols.push(caRow0);
caCols.push(caRow1);


var coCols = [];
var coRow0 = [];
coRow0.push(coColumns.concepts);
var coRow1 = [];
coRow1.push(coColumns.text);
coRow1.push(coColumns.relevance);
coRow1.push(coColumns.dbpedia_resource);
coCols.push(coRow0);
coCols.push(coRow1);


var keCols = [];
var keRow0 = [];
keRow0.push(keColumns.keywords);
var keRow1 = [];
keRow1.push(keColumns.text);
keRow1.push(keColumns.relevance);
keRow1.push(keColumns.count);
var keRow2 = [];
keRow2.push(keColumns.anger);
keRow2.push(keColumns.disgust);
keRow2.push(keColumns.fear);
keRow2.push(keColumns.joy);
keRow2.push(keColumns.sadness);
keRow2.push(keColumns.label);
keRow2.push(keColumns.score);

keCols.push(keRow0);
keCols.push(keRow1);
keCols.push(keRow2);


var enCols = [];
var enRow0 = [];
enRow0.push(enColumns.entities);
var enRow1 = [];
enRow1.push(enColumns.type);
enRow1.push(enColumns.text);
enRow1.push(enColumns.relevance);
enRow1.push(enColumns.confidence);
enRow1.push(enColumns.count);
enRow1.push(enColumns.emotion);
enRow1.push(enColumns.sentiment);
enRow1.push(enColumns.disambiguation);
var enRow2 = [];
enRow2.push(enColumns.anger);
enRow2.push(enColumns.disgust);
enRow2.push(enColumns.fear);
enRow2.push(enColumns.joy);
enRow2.push(enColumns.sadness);
enRow2.push(enColumns.label);
enRow2.push(enColumns.score);
enRow2.push(enColumns.name);
enRow2.push(enColumns.dbpedia_resource);
enRow2.push(enColumns.subtype);
enCols.push(enRow0);
enCols.push(enRow1);
enCols.push(enRow2);


var reCols = [];
var reRow0 = [];
reRow0.push(reColumns.relations);
var reRow1 = [];
reRow1.push(reColumns.type);
reRow1.push(reColumns.sentence);
reRow1.push(reColumns.score);
reRow1.push(reColumns.arguments0);
reRow1.push(reColumns.arguments1);
var reRow2 = [];
reRow2.push(reColumns.text0);
reRow2.push(reColumns.location0);
reRow2.push(reColumns.entitiesText0);
reRow2.push(reColumns.entitiesType0);
reRow2.push(reColumns.text1);
reRow2.push(reColumns.location1);
reRow2.push(reColumns.entitiesText1);
reRow2.push(reColumns.entitiesType1);
reCols.push(reRow0);
reCols.push(reRow1);
reCols.push(reRow2);


var datas;

$(document)
  .ready(function() {


    $('#navTab').hide();
    $('#answers').hide();

    console.log(glCols);
    buildTable(glCols);

    loadLinks();

    var msg = 'First step: Select a link.';

    ShowAlert("Welcome to NLU URL Analyzer.", msg, "alert-success", 15000);


  })
  .ajaxStart(function(){
      $("div#Loading").addClass('show');
  })
  .ajaxStop(function(){
      $("div#Loading").removeClass('show');
  });

$('.modal').on('shown.bs.modal', function() {
  $(this).find('[autofocus]').focus();
});

$('#links').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {

  var msg = 'Second step: analyze link by clicking ' + cogWheels;

  ShowAlert("New link have been selected.", msg, "alert-success", 5000);

  var options = {"effect": "bounce", "duration": 5000};
  $('#send').effect("bounce",{times:20,distance:50},5000);

});

$('#glTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(glCols);
  $('#answers').bootstrapTable('load', loadGl(datas));
})

$('#keTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(keCols);
  $('#answers').bootstrapTable('load', loadKe(datas));
})

$('#enTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  // buildTable(enCols);
  buildEnTable(enCols);
  $('#answers').bootstrapTable('load', loadEn(datas));
})

$('#coTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(coCols);
  $('#answers').bootstrapTable('load', loadCo(datas));
})

$('#caTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(caCols);
  $('#answers').bootstrapTable('load', loadCa(datas));
})

$('#reTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(reCols);
  $('#answers').bootstrapTable('load', loadRe(datas));
})

$('#srTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(srCols);
  $('#answers').bootstrapTable('load', loadSr(datas));
})

$('#sySeTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(sySeCols);
  $('#answers').bootstrapTable('load', loadSySe(datas));
})

$('#syToTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(syToCols);
  $('#answers').bootstrapTable('load', loadSyTo(datas));
})


$("#send").click(function (){

  $('#navTab').show();
  $('#answers').show();

  var selectedLinkId = $('#links').find("option:selected").val();

  linkName = $('#links').find("option:selected").text();

  $.getJSON('res/nlu-resp-' + selectedLinkId + '.json', function(json) {
    console.log(json);
    datas = json;
    $('#answers').bootstrapTable("destroy");
    buildTable(glCols);
    $('#answers').bootstrapTable('load', loadGl(json));
    $('#glTab').tab('show');
  })
  .done(function( json ) {
    // ShowAlert("loadLinks()", "Links list loaded successfully.", "alert-success");
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    ShowAlert('Failed to analyze <p class="font-weight-bold">' + linkName + '<p>', err, "alert-danger", 15000);
  });

  // var json = (function () {
  //   var json = null;
  //   $.ajax({
  //       'async': false,
  //       'global': false,
  //       'url': 'res/nlu-resp.json',
  //       'dataType': "json",
  //       'success': function (data) {
  //           json = data;
  //       }
  //   });
  //   return json;
  // })(); 

  // $.ajax({
  //   type: 'POST',
  //   url: "RA",
  //   dataType: 'json',

  //   success: function(data) {
  //       console.log(data);
  //       if(data.STATUS == "OK" && data.ANSWER){
  //         $('#answers').bootstrapTable('load', loadDatas(data.ANSWER));
  //         ShowAlert("Sametime contacts processed successfull.", 'Next step : save Sametime contacts by clicking ' + save , "alert-success");
  //         $('#save').focus();
  //         $('#save').effect("bounce",{times:20,distance:50},5000);
  //       }
  //       if(data.STATUS == "KO" && data.TROUBLESHOOTING){
  //         ShowAlert("There's nothing to process", data.TROUBLESHOOTING, "alert-info");

  //       }
  //       if(data.STATUS == "KO" && !data.TROUBLESHOOTING){
  //         ShowAlert(data.ANSWER, '', "alert-danger");
  //       }
  //   },
  //   error: function(data) {
  //     console.log(data);
  //   }

  // });


})

$('#exampleModalScrollable').on('shown.bs.modal', function() {

  var datas = $('#answers').bootstrapTable("getData");

  console.log(datas);

  var retrieved_url = datas[0].retrieved_url;

  var analyzed_text = datas[0].analyzed_text;

  console.log(retrieved_url);
  console.log(analyzed_text);

  $(this).find('.modal-header').find('.modal-title').empty();
  $(this).find('.modal-body').empty();
  $(this).find('.modal-header').find('.modal-title').append(retrieved_url);
  $(this).find('.modal-body').append(analyzed_text);
});

function loadLinks(){

  $.getJSON("res/links.json", function(data){

    $links = $('#links');

    $links.empty();

    $.each(data, function(index, link){

      var option = '<option value="' + link.id + '" data-subtext="' + link.url + '">' + link.name + '</option>';
      $links.append(option);
    });

    $links.selectpicker('refresh');
    $('.selectpicker').selectpicker('toggle');
  })
  .done(function( json ) {
    // ShowAlert("loadLinks()", "Links list loaded successfully.", "alert-success");
  })
  .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    ShowAlert("Loading links list failed.", err, "alert-danger");
  });
}


function loadRe(data){

  console.log(data);

  var rows = [];

  $.each(data.relations, function(i, relation){

    rows.push({
      type: relation.type,
      sentence: relation.sentence,
      score: relation.score,
      text0: relation.arguments[0].text,
      text1: relation.arguments[1].text,
      location0: relation.arguments[0].location,
      location1: relation.arguments[1].location,
      entitiesText0: relation.arguments[0].entities[0].text,
      entitiesText1: relation.arguments[1].entities[0].text,
      entitiesType0: relation.arguments[0].entities[0].type,
      entitiesType1: relation.arguments[1].entities[0].type

    });

  })

  return rows;
}


function loadCa(data){

  var rows = [];

  $.each(data.categories, function(i, categorie){

    rows.push({
      score: categorie.score,
      label: categorie.label,
      explanation: categorie.explanation
    });

  })

  return rows;
}


function loadCo(data){

  var rows = [];

  $.each(data.concepts, function(i, concept){

    rows.push({
      text: concept.text,
      relevance: concept.relevance,
      dbpedia_resource: concept.dbpedia_resource
    });

  })

  return rows;
}


function loadEn(data){

  var rows = [];

  $.each(data.entities, function(i, entitie){

    var name = '';
    var dbpedia_resource = '';
    var subtype = '';

    if(entitie.disambiguation){
        name = entitie.disambiguation.name;
        dbpedia_resource = entitie.disambiguation.dbpedia_resource;
        subtype = entitie.disambiguation.subtype;
    }


    rows.push({
      type: entitie.type,
      text: entitie.text,
      relevance: entitie.relevance,
      count: entitie.count,
      confidence: entitie.confidence,
      name: name,
      dbpedia_resource: dbpedia_resource,
      subtype: subtype,
      score: entitie.sentiment.score,
      label: entitie.sentiment.label,
      sadness: entitie.emotion.sadness,
      joy: entitie.emotion.joy,
      fear: entitie.emotion.fear,
      disgust: entitie.emotion.disgust,
      anger: entitie.emotion.anger,
      mentions: entitie.mentions
    });


  })

  return rows;
}


function loadSr(data){

  var rows = [];

  $.each(data.semantic_roles, function(i, semantic_role){

    var subjectEntities = [];
    var subjectKeywords = [];
    var objectKeywords = [];
    var objectText = '';

    if(semantic_role.subject.entities){
      subjectEntities = semantic_role.subject.entities;
    }

    if(semantic_role.subject.keywords){
      subjectKeywords = semantic_role.subject.keywords
    }

    if(semantic_role.object && semantic_role.object.keywords){
      objectText = semantic_role.object.text
      objectKeywords = semantic_role.object.keywords
    }

    rows.push({
      sentence: semantic_role.sentence,
      actionText: semantic_role.action.text,
      actionNormalized: semantic_role.action.normalized,
      actionVerbText: semantic_role.action.verb.text,
      actionVerbTense: semantic_role.action.verb.tense,
      subjectText: semantic_role.subject.text,
      objectText: objectText,
      subjectEntities: subjectEntities,
      subjectKeywords: subjectKeywords,
      objectKeywords: objectKeywords
    });


  })

  return rows;
}

function loadSyTo(data){

  var rows = [];

  if(data.syntax && data.syntax.tokens){

    $.each(data.syntax.tokens, function(i, token){

      rows.push({
        tokensText: token.text,
        tokensPartOfSpeech: token.part_of_speech,
        tokensLocation: token.location,
        tokensLemma: token.lemma
      });

    })
  }

  return rows;
}

function loadSySe(data){

  var rows = [];

  if(data.syntax && data.syntax.sentences){

    $.each(data.syntax.sentences, function(i, sentence){

      rows.push({
        sentencesText: sentence.text,
        sentencesLocation: sentence.location         
      });

    })
  }

  return rows;
}

function loadKe(data){

  var rows = [];

  $.each(data.keywords, function(i, keyword){

    rows.push({
      text: keyword.text,
      relevance: keyword.relevance,
      count: keyword.count,
      score: keyword.sentiment.score,
      label: keyword.sentiment.label,
      sadness: keyword.emotion.sadness,
      joy: keyword.emotion.joy,
      fear: keyword.emotion.fear,
      disgust: keyword.emotion.disgust,
      anger: keyword.emotion.anger
    });

  })

  return rows;
}

function loadGl(data){

  console.log(data);

  var authors = [];
  var publication_date ='';
  var title = '';
  var image =  '';
  var feeds = [];

  if(data.metadata){
    authors = data.metadata.authors;
    publication_date = data.metadata.publication_date;
    title = data.metadata.title;
    image = data.metadata.image;
    feeds = data.metadata.feeds;
  }

  var rows = [];

  rows.push({
    retrieved_url: data.retrieved_url,
    analyzed_text: data.analyzed_text,
    language: data.language,
    authors: authors,
    publication_date: publication_date,
    title: title,
    images: image,
    feeds: feeds,
    score: data.sentiment.document.score,
    label: data.sentiment.document.label,
    anger: data.emotion.document.emotion.anger,
    disgust: data.emotion.document.emotion.disgust,
    fear: data.emotion.document.emotion.fear,
    joy: data.emotion.document.emotion.joy,
    sadness: data.emotion.document.emotion.sadness,
    features: data.usage.features,
    text_characters: data.usage.text_characters,
    text_units: data.usage.text_units

  });

  return rows;
}


function buildTable(cols){

  $('#answers').bootstrapTable({
      columns: cols,
      // url: url,
      // data: data,
      showToggle: false,
      showColumns: true,
      search: true,
      showSearchClearButton: true,
      showExtendedPagination: true,
      paginationVAlign: "both",
      pagination: true,
      pageSize: 50,
      toolbar: "#mainToolbar",
      toolbarAlign: 'left',
      showExport: true,
      searchAlign: 'right',
      onEditableInit: function(){
        //Fired when all columns was initialized by $().editable() method.
      },
      onEditableShown: function(editable, field, row, $el){
        //Fired when an editable cell is opened for edits.
      },
      onEditableHidden: function(field, row, $el, reason){
        //Fired when an editable cell is hidden / closed.
      },
      onEditableSave: function (field, row, oldValue, editable) {
        //Fired when an editable cell is saved.
      },
      onClickCell: function (field, value, row, $element){
      }
  });

}

function analyzed_textFormatter(value, row, index) {

  var html = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalScrollable">Text</button>';

  return html;
}

function IndexFormatter(value, row, index) {
  row.index = index;
  return index;
}

function authorsFormatter(value, row, index) {
  if(row.authors && row.authors.length > 0){
    // var html = '<ul class="list-inline">';
    var html = '<ul class="">';
    $.each(row.authors, function(i, st){
      html += '<li>' + st.name + '</li>';
    });
    html += '</ul>';
    return html;
  }
  return '';
}

function feedsFormatter(value, row, index) {
  if(row.feeds && row.feeds.length > 0){
    // var html = '<ul class="list-inline">';
    var html = '<ul class="">';
    $.each(row.feeds, function(i, st){
      html += '<li><a href="' + st.link + '">' + st.link + '</a></li>';
    });
    html += '</ul>';
    return html;
  }
  return '';
}

function locationFormatter(value, row, index) {
  if(value.length > 0){
    // var html = '<ul class="list-inline">';
    var html = '<ul class="">';
    $.each(value, function(i, st){
      html += '<li>' + st + '</li>';
    });
    html += '</ul>';
    return html;
  }
  return '';
}


function objectKeywordsFormatter(value, row, index) {
  if(row.objectKeywords && row.objectKeywords.length > 1){
    var html = '<table style="border: none; width:100%; heigth: 100%">';
    $.each(row.objectKeywords, function(i, objectKeyword){
      html += '<tr style="text-align:left"><td>' + objectKeyword.text + '</tr></td>';
    });
    html += '</table>';
    return html;
  }
  if(row.objectKeywords && row.objectKeywords.length == 1){
    return row.objectKeywords[0].text;
  }
  return '';
}


function subjectKeywordsFormatter(value, row, index) {
  if(row.subjectKeywords && row.subjectKeywords.length > 1){
    var html = '<table style="border: none; width:100%; heigth: 100%">';
    $.each(row.subjectKeywords, function(i, subjectKeyword){
      html += '<tr style="text-align:left"><td>' + subjectKeyword.text + '</tr></td>';
    });
    html += '</table>';
    return html;
  }
  if(row.subjectKeywords && row.subjectKeywords.length == 1){
    return row.subjectKeywords[0].text;
  }
  return '';
}


function subjectEntitiesFormatter(value, row, index) {
  if(row.subjectEntities && row.subjectEntities.length > 0){

    var html = '<table style="border: none; width: 100%">';
    var rowspan = 1;
    var disambiguation = false;

    $.each(row.subjectEntities, function(i, object){
      if(object.disambiguation){
        disambiguation = true;
        if(object.disambiguation.subtype && object.disambiguation.subtype.length > 1){
          console.log(row);
          rowspan = object.disambiguation.subtype.length;
        }
      }
    });

    if(disambiguation){
      html += '<tr>'
      html += '<th rowspan="2" style="text-align:center">Type</th>'
      html += '<th rowspan="2" style="text-align:center">Text</th>'
      html += '<th colspan="3" style="text-align:center">Disambiguation</th>'
      html += '</tr>'

      html += '<tr>'
      html += '<th style="text-align:center">Name</th>'
      html += '<th style="text-align:center">DBpedia Resource</th>'
      html += '<th style="text-align:center">Sub Type</th>'
      html += '</tr>'
    }
    else{
      html += '<tr>'
      html += '<th rowspan="1" style="text-align:center">Type</th>'
      html += '<th rowspan="1" style="text-align:center">Text</th>'
      html += '</tr>'
    }

    $.each(row.subjectEntities, function(i, object){
      

      if(!object.disambiguation){
        html += '<tr style="text-align:left">'
        html += '<td rowspan="' + rowspan + '">' + object.type + '</td>';
        html += '<td rowspan="' + rowspan + '">' + object.text + '</td>';
        html += '</tr>';
  
      }
      else{
        html += '<tr style="text-align:left">'
        html += '<td rowspan="' + rowspan + '">' + object.type + '</td>';
        html += '<td rowspan="' + rowspan + '">' + object.text + '</td>';
        html += '<td rowspan="' + rowspan + '">' + object.disambiguation.name + '</td>';
        var res = '';
        if(object.disambiguation.dbpedia_resource){
          res = object.disambiguation.dbpedia_resource;
          res = res.substring(res.lastIndexOf('/') + 1);
        }
        html += '<td rowspan="' + rowspan + '"><a href="' + object.disambiguation.dbpedia_resource + '">' + res + '</a></td>';
        if(object.disambiguation.subtype){
          html += '<td>' + object.disambiguation.subtype[0] + '</td>';
        }
        html += '</tr>';

        if(object.disambiguation.subtype && object.disambiguation.subtype.length > 1){
            $.each(object.disambiguation.subtype, function(j, st){
              if(j > 0){
                html += '<tr style="text-align:left">'
                html += '<td>' + st + '</td>';
                html += '</tr>';
              }
            })
        }
        
      }

  
    });
    html += '</table>';
    return html;

  }
  return '';
}


function subtypeFormatter(value, row, index) {
  if(row.subtype){
    // var html = '<ul class="list-inline">';
    var html = '<ul class="">';
    $.each(row.subtype, function(i, st){
      html += '<li>' + st + '</li>';
    });
    html += '</ul>';
    return html;
  }
  return '';
}

function explanationFormatter(value, row, index) {
  if(row.explanation.relevant_text){
    // var html = '<ul class="list-inline">';
    var html = '<ul class="">';
    $.each(row.explanation.relevant_text, function(i, st){
      html += '<li>' + st.text + '</li>';
    });
    html += '</ul>';
    return html;
  }
  return '';
}

function URLFormatter(value, row, index) {
    var html = '<a href="' + value + '">';
    html += value + '</a>';
    return html;
}


function buildEnTable(cols){

  $('#answers').bootstrapTable({
      columns: cols,
      // url: url,
      // data: data,
      showToggle: false,
      search: true,
      showSearchClearButton: true,
      showExtendedPagination: true,
      paginationVAlign: "both",
      pagination: true,
      pageSize: 50,
      showColumns: true,
      showExport: true,
      toolbar: "#mainToolbar",
      toolbarAlign: 'left',
      searchAlign: 'right',
      idField: "index",
      detailView: true,
      onExpandRow: function (index, row, $detail) {
        console.log(row);
        ExpandTable($detail, row.mentions, row);
      },
      onEditableInit: function(){
        //Fired when all columns was initialized by $().editable() method.
      },
      onEditableShown: function(editable, field, row, $el){
        //Fired when an editable cell is opened for edits.
      },
      onEditableHidden: function(field, row, $el, reason){
        //Fired when an editable cell is hidden / closed.
      },
      onEditableSave: function (field, row, oldValue, editable) {
        //Fired when an editable cell is saved.
      },
      onClickCell: function (field, value, row, $element){
      }
  });

}

function ExpandTable($detail, data, parentData) {
  $subtable = $detail.html('<table></table>').find('table');
  console.log(data);
  BuildSubTable($subtable, data, parentData);
}


function BuildSubTable($el, data, parentData){

  console.log(data);

  var cols = [];
  var row0 = [];
  // row0.push({field:"index", title: "Index", align:"center", valign:"middle", rowspan: 2, formatter: "IndexFormatter", sortable: false});
  row0.push({field:"mentions", title: "Mentions", titleTooltip: "Entity mentions and locations", valign:"top", halign: "center", align: "middle", rowspan: 1, colspan: 3, formatter: "", sortable: true});

  var row1 = [];
  row1.push({field:"text", title: "text", titleTooltip: "Entity mention text", valign:"top", halign: "center", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true});
  row1.push({field:"location", title: "Location", titleTooltip: "Character offsets indicating the beginning and end of the mention in the analyzed text", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true});
  row1.push({field:"confidence", title: "Confidence", titleTooltip: "Confidence in the entity identification from 0 to 1. Higher values indicate higher confidence. In standard entities requests, confidence is returned only for English text. All entities requests that use custom models return the confidence score.", valign:"top", halign: "center", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true});

  cols.push(row0);
  cols.push(row1);

  $el.bootstrapTable({
      columns: cols,
      // url: url,
      data: data,
      showToggle: false,
      search: false,
      checkboxHeader: false,
      // idField: "index",
      onEditableInit: function(){
        //Fired when all columns was initialized by $().editable() method.
      },
      onEditableShown: function(editable, field, row, $el){
        //Fired when an editable cell is opened for edits.
      },
      onEditableHidden: function(field, row, $el, reason){
        //Fired when an editable cell is hidden / closed.
      },
      onEditableSave: function (field, row, oldValue, editable) {
        //Fired when an editable cell is saved.
        console.log("---------- buildSubTable: onEditableSave -------------");
        console.log("editable=");
        console.log(editable);
        console.log("field=");
        console.log(field);
        console.log("row=");
        console.log(row);
        console.log("oldValue=");
        console.log(oldValue);
        console.log("---------- buildSubTable: onEditableSave -------------");
      },
      onClickCell: function (field, value, row, $element){

      }
  });

}

function ShowAlert(title, message, alertType, timeout, area) {

    $('#alertmsg').remove();

    if(timeout == undefined){
      var timeout = 5000;
    }

    if(area == undefined){
      area = "bottom";
    }
    if(alertType.match('alert-warning')){
      area = "bottom";
      timeout = 20000;
    }
    if(alertType.match('alert-danger')){
      area = "bottom";
      timeout = 120000;
    }

    var $newDiv;

    if(alertType.match('alert-success|alert-info')){
      $newDiv = $('<div/>')
       .attr( 'id', 'alertmsg' )
       .html(
          '<h4>' + title + '</h4>' +
          '<p>' +
          message +
          '</p>'
        )
       .addClass('alert ' + alertType + ' flyover flyover-' + area);
    }
    else{
      $newDiv = $('<div/>')
       .attr( 'id', 'alertmsg' )
       .html(
          '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
          '<h4>' + title + '</h4>' +
          '<p>' +
          '<strong>' + message + '</strong>' +
          '</p>'
        )
       .addClass('alert ' + alertType + ' alert-dismissible flyover flyover-' + area);
    }

    $('#alert').append($newDiv);

    if ( !$('#alertmsg').is( '.in' ) ) {
      $('#alertmsg').addClass('in');

      setTimeout(function() {
         $('#alertmsg').removeClass('in');
      }, timeout);
    }
}

$('#logout').click(function (){
  logout();
})

function logout(){

  $('#modLogout').modal('toggle');

  return;
}
