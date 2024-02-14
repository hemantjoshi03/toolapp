function clearCode() {
    document.getElementById('code-box').innerText = "";
    alert("Cleared!");
  }

  function copyCode() {
    const codeText = document.querySelector('.code-box pre').innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Copied to clipboard!");
      
    }, (err) => {
      
      console.error("Failed to copy code:", err);
    });
  }