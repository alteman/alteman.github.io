window.addEventListener('load', function () {

    // This assumes that you're using Rouge; if not, update the selector
    const codeBlocks = document.querySelectorAll('.copy-block');
    //const copyCodeButtons = document.querySelectorAll('.copy-code-button');


    codeBlocks.forEach((codeBlock) => {
        let wrapper = document.createElement('span');
        codeBlock.parentNode.insertBefore(wrapper, codeBlock);
        let codeBlockCopy = codeBlock.cloneNode(true);
        wrapper.appendChild(codeBlockCopy);
        codeBlock.remove();
        let btn = document.createElement('copy-button');
        btn.role = "button";
        btn.classList.add("copy-button");
        let icon = document.createElement('img');
        icon.src = "/assets/icons/copy-16.svg";
        icon.classList.add("copy-button");
        btn.appendChild(icon);
        wrapper.appendChild(btn);

        btn.addEventListener('click', () => {
            // Copy the code to the user's clipboard
            window.navigator.clipboard.writeText(codeBlockCopy.innerText);

            // (Optional) Toggle a class for styling the button
            btn.classList.add('copied');
            codeBlockCopy.classList.add('copied');
            // After 2 seconds, reset the button to its initial UI
            setTimeout(() => {
                btn.classList.remove('copied');
                codeBlockCopy.classList.remove('copied');
            }, 2000);
        });
    });
});
