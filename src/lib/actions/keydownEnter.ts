export function keydownEnter(node: HTMLElement) {
    const handleKeydown = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            node.dispatchEvent(new CustomEvent('enter'));
        }
    };

    document.addEventListener('keydown', handleKeydown, true);

    return {
        destroy() {
            document.removeEventListener('keydown', handleKeydown, true);
        }
    }
}
