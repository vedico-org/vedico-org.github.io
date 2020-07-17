const buttons = document.getElementsByClassName("copybtn");
const fields = document.getElementsByClassName("copybox");
if (buttons != null) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      copyToClipboard(fields[i]);
    });
  }
}

function clicked(el) {
  el.textContent = "Copied!";
  setTimeout(() => {
    el.textContent = "Copy";
  }, 880);
}

function copyToClipboard(elem) {
  const targetId = "_hiddenCopyText_";
  const isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  let origSelectionStart, origSelectionEnd;
  if (isInput) {
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    target = document.getElementById(targetId);
    if (!target) {
      const target = document.createElement("textarea");
      target.style.position = "absolute";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.id = targetId;
      document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
  }
  const currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  let succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }
  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }

  if (isInput) {
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    target.textContent = "";
  }
  return succeed;
}
