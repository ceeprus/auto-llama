javascript:(function() {
  var buttons = document.querySelectorAll('.oclb');
  buttons.forEach(function(button) {
      button.click();
  });
})();

(function() {
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('.oclb')) {
          node.click();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();