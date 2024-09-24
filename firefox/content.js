javascript:(function() {
  document.querySelectorAll('.oclb').forEach(button => button.click());

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('oclb')) {
          node.click();
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
