const goal = 1500;

window.addEventListener('onWidgetLoad', function (obj) {

  const count = obj.detail.session.data["subscriber-total"].count || 0;

  document.getElementById('subCount').innerText = count;
  document.getElementById('current').innerText = count;

  const percent = Math.min((count / goal) * 100, 100);

  document.getElementById('progressBar').style.width = percent + '%';

});

window.addEventListener('onEventReceived', function (obj) {

  const listener = obj.detail.listener;

  if (listener === 'subscriber-latest') {

    const name = obj.detail.event.name;

    document.getElementById('latestSub').innerText = name;

    const el = document.getElementById('latestSub');
    el.style.animation = 'none';
    el.offsetHeight;
    el.style.animation = 'slideIn .5s ease';
  }
});
