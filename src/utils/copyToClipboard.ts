export const copyToClipBoard = (textToCopy: string, event: any): void => {
    const el = document.createElement('textarea');
    el.value = textToCopy;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    const ref = event.target;
    ref.classList.add('copied');
    setTimeout(() => {
        ref.classList.remove('copied');
    }, 1000);
};

export const copyTargetContentToClipboard = (event: any): void => {
    const target = event.target;
    const textToCopy = target.innerText;
    copyToClipBoard(textToCopy, event);
};
