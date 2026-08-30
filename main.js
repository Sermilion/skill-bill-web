(() => {
  const copyButton = document.getElementById("copy-install");
  if (!copyButton) return;

  const selector = copyButton.getAttribute("data-copy");
  const source = selector ? document.querySelector(selector) : null;
  if (!source) return;

  const idleLabel = copyButton.textContent;

  const setLabel = (text) => {
    copyButton.textContent = text;
  };

  copyButton.addEventListener("click", async () => {
    const value = source.textContent.trim();

    try {
      await navigator.clipboard.writeText(value);
      copyButton.classList.add("is-copied");
      setLabel("Copied");
    } catch {
      const range = document.createRange();
      range.selectNodeContents(source);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      setLabel("Select and copy");
    }

    window.setTimeout(() => {
      copyButton.classList.remove("is-copied");
      setLabel(idleLabel);
    }, 1800);
  });
})();
