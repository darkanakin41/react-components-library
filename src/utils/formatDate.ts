export const formatDate = (date: number | undefined) => {
    if (!date) return '#N/C';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR');
};

export const formatTime = (date: number | undefined) => {
    if (!date) return '#N/C';
    const d = new Date(date);
    return d.toLocaleTimeString('fr-FR');
};

export const formatDateTime = (date: number | undefined) => {
    if (!date) return '#N/C';
    const d = new Date(date);
    return `${d.toLocaleDateString('fr-FR')} à ${d.toLocaleTimeString('fr-FR')}`;
};
