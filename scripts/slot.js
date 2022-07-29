function startAnimation() {
    if (document.getElementById(`result`)) {
      document.getElementById(`result`).classList.add('is-play');
      document.getElementById(`result`).style.transform = 'none';
    }
  }
  function stopAnimation() {
    if (document.getElementById(`result`)) {
      const num = Math.floor(Math.random() * 10);
      document.getElementById(`result`).classList.remove('is-play');
      document.getElementById(`result`).style.transform = `translateY(${-num * 10}%)`;
    }
  }