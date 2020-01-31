var cogWheels = '<span class="glyphicons glyphicons-cogwheels x1" aria-hidden="true"></span>';
var upload = '<span class="glyphicons glyphicons-upload x1" aria-hidden="true"></span>';
var play = '<span class="glyphicons glyphicons-play x1" aria-hidden="true"></span>';
var playlist = '<span class="glyphicons glyphicons-playlist x1" aria-hidden="true"></span>';
var save = '<span class="glyphicons glyphicons-floppy-save x1" aria-hidden="true"></span>'

var columns = {

  "retrieved_url": {field:"retrieved_url", title: "URL", valign:"middle", align: "middle", rowspan: 2, colspan: 1, formatter: "", sortable: true},

  "language": {field:"language", title: "Language", valign:"middle", align: "middle", rowspan: 2, colspan: 1, formatter: "", sortable: true},

  "sentiment": {field:"sentiment", title: "Sentiment", valign:"middle", align: "middle", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "sscore": {field:"sscore", title: "Score", valign:"middle", align: "middle", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "slabel": {field:"slabel", title: "Label", valign:"middle", align: "middle", rowspan: 1, colspan: 1, formatter: "", sortable: true},


  "keywords": {field:"keywords", title: "Keywords", valign:"middle", align: "middle", rowspan: 1, colspan: 3, formatter: "", sortable: true},

  "ktext": {field:"ktext", title: "Text", valign:"middle", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "krelevance": {field:"krelevance", title: "Relevance", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "kcount": {field:"kcount", title: "Count", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},


  "entities": {field:"entities", title: "Entities", valign:"middle", align: "middle", rowspan: 1, colspan: 5, formatter: "", sortable: true},

  "etype": {field:"etype", title: "Type", valign:"middle", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "etext": {field:"etext", title: "Text", valign:"middle", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "erelevance": {field:"erelevance", title: "Relevance", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "ecount": {field:"ecount", title: "Count", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "econfidence": {field:"econfidence", title: "Confidence", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},


  "concepts": {field:"concepts", title: "Concepts", valign:"middle", align: "middle", rowspan: 1, colspan: 3, formatter: "", sortable: true},

  "ctext": {field:"ctext", title: "Text", valign:"middle", align: "left", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "crelevance": {field:"crelevance", title: "Relevance", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "cdbpedia": {field:"cdbpedia", title: "dbpedia.org", valign:"middle", align: "right", rowspan: 1, colspan: 1, formatter: "", sortable: true},


  "categories": {field:"categories", title: "Categories", valign:"middle", align: "middle", rowspan: 1, colspan: 2, formatter: "", sortable: true},

  "cscore": {field:"cscore", title: "Score", valign:"middle", align: "middle", rowspan: 1, colspan: 1, formatter: "", sortable: true},
  "clabel": {field:"clabel", title: "Label", valign:"middle", align: "middle", rowspan: 1, colspan: 1, formatter: "", sortable: true}

}

var caCols = [];
var caRow0 = [];
caRow0.push(columns.retrieved_url);
caRow0.push(columns.language);
caRow0.push(columns.sentiment);
caRow0.push(columns.categories);
var caRow1 = [];
caRow1.push(columns.sscore);
caRow1.push(columns.slabel);
caRow1.push(columns.cscore);
caRow1.push(columns.clabel);
caCols.push(caRow0);
caCols.push(caRow1);


var coCols = [];
var coRow0 = [];
coRow0.push(columns.retrieved_url);
coRow0.push(columns.language);
coRow0.push(columns.sentiment);
coRow0.push(columns.concepts);
var coRow1 = [];
coRow1.push(columns.sscore);
coRow1.push(columns.slabel);
coRow1.push(columns.ctext);
coRow1.push(columns.crelevance);
coRow1.push(columns.cdbpedia);
coCols.push(coRow0);
coCols.push(coRow1);


var keCols = [];
var keRow0 = [];
keRow0.push(columns.retrieved_url);
keRow0.push(columns.language);
keRow0.push(columns.sentiment);
keRow0.push(columns.keywords);
var keRow1 = [];
keRow1.push(columns.sscore);
keRow1.push(columns.slabel);
keRow1.push(columns.ktext);
keRow1.push(columns.krelevance);
keRow1.push(columns.kcount);
keCols.push(keRow0);
keCols.push(keRow1);


var enCols = [];
var enRow0 = [];
enRow0.push(columns.retrieved_url);
enRow0.push(columns.language);
enRow0.push(columns.sentiment);
enRow0.push(columns.entities);
var enRow1 = [];
enRow1.push(columns.sscore);
enRow1.push(columns.slabel);
enRow1.push(columns.etype);
enRow1.push(columns.etext);
enRow1.push(columns.erelevance);
enRow1.push(columns.ecount);
enRow1.push(columns.econfidence);
enCols.push(enRow0);
enCols.push(enRow1);

var datas;

$(document)
  .ready(function() {


    $('#navTab').hide();
    $('#answers').hide();

    buildTable(keCols);

    loadLinks();

    var msg = 'First step: Select a link.';

    ShowAlert("Welcome to NLU Link Analyzer.", msg, "alert-success", 15000);


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
  console.log(e);
  console.log(clickedIndex);
  console.log(isSelected);
  console.log(previousValue);

  var msg = 'Second step: analyze link by clicking ' + cogWheels;

  ShowAlert("New link have been selected.", msg, "alert-success", 5000);


  var options = {"effect": "bounce", "duration": 5000};
  $('#send').effect("bounce",{times:20,distance:50},5000);



});

$('#keTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(keCols);
  $('#answers').bootstrapTable('load', loadKe(datas));
})

$('#enTab').click(function (){
  $('#answers').bootstrapTable("destroy");
  buildTable(enCols);
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


$("#send").click(function (){

  $('#navTab').show();
  $('#answers').show();

  var selectedLinkId = $('#links').find("option:selected").val();

  linkName = $('#links').find("option:selected").text();

  $.getJSON('res/nlu-resp-' + selectedLinkId + '.json', function(json) {
    // console.log(json);
    $('#answers').bootstrapTable('load', loadKe(json));
    datas = json;
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


function loadCa(data){

  var rows = [];
  var url = data.retrieved_url;
  var language = data.language; 
  var score = data.sentiment.document.score;
  var label = data.sentiment.document.label;

  $.each(data.categories, function(i, categorie){

    rows.push({
      retrieved_url: url,
      language: language,
      sscore: score,
      slabel: label,
      cscore: categorie.score,
      clabel: categorie.label
    });

  })

  return rows;
}


function loadCo(data){

  var rows = [];
  var url = data.retrieved_url;
  var language = data.language; 
  var score = data.sentiment.document.score;
  var label = data.sentiment.document.label;

  $.each(data.concepts, function(i, concept){

    rows.push({
      retrieved_url: url,
      language: language,
      sscore: score,
      slabel: label,
      ctext: concept.text,
      crelevance: concept.relevance,
      cdbpedia: concept.dbpedia_resource
    });

  })

  return rows;
}


function loadEn(data){

  var rows = [];
  var url = data.retrieved_url;
  var language = data.language; 
  var score = data.sentiment.document.score;
  var label = data.sentiment.document.label;

  $.each(data.entities, function(i, entitie){

    rows.push({
      retrieved_url: url,
      language: language,
      sscore: score,
      slabel: label,
      etype: entitie.type,
      etext: entitie.text,
      erelevance: entitie.relevance,
      ecount: entitie.count,
      econfidence: entitie.confidence
    });

  })

  return rows;
}


function loadKe(data){

  var rows = [];
  var url = data.retrieved_url;
  var language = data.language; 
  var score = data.sentiment.document.score;
  var label = data.sentiment.document.label;

  $.each(data.keywords, function(i, keyword){

    rows.push({
      retrieved_url: url,
      language: language,
      sscore: score,
      slabel: label,
      ktext: keyword.text,
      krelevance: keyword.relevance,
      kcount: keyword.count
    });

  })

  return rows;
}

function buildTable(cols){

  $('#answers').bootstrapTable({
      columns: cols,
      // url: url,
      // data: data,
      showToggle: false,
      search: true,
      toolbar: "#mainToolbar",
      toolbarAlign: 'right',
      searchAlign: 'left',
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
