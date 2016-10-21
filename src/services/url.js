const QS = '?cep=';

export const getFromQueryString = () => {
    let { search } = window.location;
    let qs = search.split(QS);
    if (qs && qs.length && qs[1])
        return qs[1];
};

export const updateQueryString = (cep) => {
    if (!history) return;

    history.replaceState( {} , '', `/${QS}${cep}`);
};