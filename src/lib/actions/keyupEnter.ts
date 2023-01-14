export function keyupEnter(node: HTMLElement) {
    const handleKeyup = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            node.dispatchEvent(new CustomEvent('enter'));
        }
    };

    document.addEventListener('keyup', handleKeyup, true);

    return {
        destroy() {
            document.removeEventListener('keyup', handleKeyup, true);
        }
    }
}
