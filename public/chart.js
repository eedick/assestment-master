$.getJSON("http://localhost:8888/assessment-master/test_feed.json", function (json) {
  //test JSON is working
  // alert(json.content[0].content.bodyHtml);
  var labels = json.content.map(function(item) {
    return item.vis;
  });
  var data = json.content.map(function(item) {
    var x = JSON.stringify(item.content.bodyHtml);
    console.log(x);
    for (var key in x) {
      if (x.hasOwnProperty(key)) {
        //to get the character individually
        // console.log(key + " -> " + x[key]);
        // console.log(key.length);
        var wordCount = key.trim().split(' ').length; //doesn't work as intended
        console.log(wordCount);
      }
    }
    return wordCount;
  });
  var ctx = canvas.getContext('2d');
    var config = {
       type: 'line',
       data: {
          labels: labels,
          datasets: [{
             label: 'Word Count',
             data: data,
             backgroundColor: 'rgba(0, 119, 204, 0.3)'
          }]
       }
    };
  var chart = new Chart(ctx, config);
});


//how I was able to get the character count of the first bodyHtml but doesn't loop
// $.getJSON("http://localhost:8888/assessment-master/test_feed.json", function (json) {
//         var jsonObject= JSON.stringify(json.content[0].content.bodyHtml);
//         var count = JSON.parse(jsonObject).length;
//         console.log(count);
//         var labels = json.content.map(function(item) {
//             return item.vis;
//         });
//         var data = json.content.map(function(item) {
//             for (var i = 0; i < item.content.bodyHtml; i++) {
//                 var obj = item.content.bodyHtml[i];
//                 if (obj.vis == 1) {
//                     var jsonObject= JSON.stringify(obj);
//                     var count = JSON.parse(jsonObject).length;
//                 }
//                 else if (obj.vis == 2) {
//                     return false;
//                 }
//             }
//             return count;
//         });
//       });