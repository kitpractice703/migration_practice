App.renderNavigationBar = function (nowPos) {
  var html = "";
  App.navigationData.forEach(function (step, idx) {
    var pos = idx + 1;
    var isNow = pos === nowPos;
    var mark = isNow ? "●" : "○";
    var sytle = isNow ? "font-weight:bold; color:blue;" : "color:gray;";
    html +=
      "<span style='" +
      sytle +
      " margin-right:15px;'>" +
      mark +
      pos +
      " " +
      step.title +
      "</span>";
  });
  return html;
};
