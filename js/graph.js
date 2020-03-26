Plotly.d3.csv("data.csv", function(err, rows) {
  function unpack(rows, key) {
    return rows.map(function(row) {
      return row[key];
    });
  }

  var trace1 = {
    type: "scatter",
    mode: "lines",
    x: unpack(rows, "date"),
    y: unpack(rows, "confirmed_cases"),
    line: { color: "#17BECF" }
  };


  var data = [trace1];
  var layout = {
    title: "Basic Time Series"
  };

  Plotly.newPlot("myDiv", data, layout);
});
