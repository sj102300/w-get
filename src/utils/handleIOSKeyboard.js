export function handleIOSKeyboard() {
  const isIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (isIOS) {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      console.log(1);
    };

    let inputs = document.getElementsByTagName('input');
    console.log(inputs);
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs.item(i);
      input.addEventListener('focus', updateHeight);
      updateHeight();
    }

  }
}
