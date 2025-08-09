<script>
/* Simple UI interactions: search, cart counter, language toggle, panel toggle, category filter */

document.addEventListener('DOMContentLoaded', () => {
  // Cart counter
  let cartCount = 0;
  const navCart = document.querySelector('.navcart');
  function updateCart() {
    navCart.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Cart (' + cartCount + ')';
  }
  updateCart();

  // Add to cart when clicking any .box (demo)
  document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', (e) => {
      // prevent triggering when clicking links
      if (e.target.tagName.toLowerCase() === 'a') return;
      cartCount += 1;
      updateCart();
      // small visual feedback
      box.style.transform = 'scale(0.995)';
      setTimeout(()=> box.style.transform = '', 120);
    });
  });

  // Search - simple highlight/filter
  const searchInput = document.querySelector('.search');
  searchInput.addEventListener('input', (e) => {
    const q = e.target.value.trim().toLowerCase();
    document.querySelectorAll('.box .con1 h2').forEach(h => {
      const txt = h.textContent.toLowerCase();
      h.closest('.box').style.display = txt.includes(q) || q === '' ? '' : 'none';
    });
  });

  // All panel toggle
  const panelAll = document.querySelector('.panelall');
  const panel = document.querySelector('.panel');
  panelAll.style.cursor = 'pointer';
  panelAll.addEventListener('click', () => {
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
      panel.style.height = 'auto';
    } else {
      panel.style.height = '39px';
    }
  });

  // Language dropdown (simple)
  const lang = document.querySelector('.lan');
  lang.style.cursor = 'pointer';
  lang.addEventListener('click', () => {
    const langTxt = lang.querySelector('.lang p') || lang.querySelector('p');
    if (langTxt.textContent.trim() === 'EN') langTxt.textContent = 'HI';
    else langTxt.textContent = 'EN';
  });

  // Make hero link clickable
  document.querySelectorAll('.msg a').forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      alert('Demo: Would redirect to amazon.in');
    });
  });
});
</script>
