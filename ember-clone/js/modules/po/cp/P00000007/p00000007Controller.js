App.P00000007Controller = Ember.Controller.extend({
  agreeList: [
    { no: 1, name: "개인신용정보 수집・이용 동의", isaFlag: true, agree: "" },
    { no: 2, name: "상품설명 확인", isaFlag: true, agree: "" },
    { no: 3, name: "마케팅 활용 동의(선택)", isaFlag: false, agree: "" },
  ],

  actions: {
    save: function () {
      var list = this.get("agreeList");

      var notAgreed = list.filter(function (item) {
        return item.isaFlag && item.agree !== "Y";
      });

      if (notAgreed.length > 0) {
        alert("필수 동의 항목에 모두 동의(Y)가 되어있어야합니다.");
        return;
      }

      var payload = list.map(function (item) {
        return { aagrNo: item.no, agrYn: item.agree || "N" };
      });
      console.log("[전문송신 mock SM7903130001 →", JSON.stringify(payload));
      alert("동의서 저장 완료");
    },
  },
});
