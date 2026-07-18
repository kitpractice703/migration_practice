App.P00000007View = App.BaseView.extend({
  didInsertElement: function () {
    Ember.$("#navibar").html(
      // 동의서 팝업은 적금 스텝퍼(부모 BaseView 로직)와 무관하다.
      // → this._super() 일부러 호출 안 함. 이 화면에 맞는 걸 직접 그린다.
      "<span style='color:gray;'>[동의서등록 팝업]</span>",
    );
  },
});
