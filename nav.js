    const docsNavItems = [
      { label: 'Home', href: 'index.html' },
      { label: 'App', href: 'app.html' },
      { label: 'Telegram', href: 'telegram.html' }
    ];

    const docsNavLinks = document.getElementById('docsNavLinks');

    docsNavItems.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'nav-item';

      const a = document.createElement('a');
      a.className = `nav-link${item.active ? ' active' : ''}`;
      a.href = item.href;
      a.textContent = item.label;

      li.appendChild(a);
      docsNavLinks.appendChild(li);
    });
