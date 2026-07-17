// globals 스타일: 전역 네임스페이스 하나(App)에 다 매단다 = As-Is의 ScMppApp 재현
window.App = Ember.Application.create({
  LOG_TRANSITIONS: true, // URL 이동 로그를 콘솔에 찍어줌 (라우팅 배울 때 유용)
});
