export function scrollToSection(id: string): void {
    const target = document.getElementById(id);

    if (!target) {
        return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
