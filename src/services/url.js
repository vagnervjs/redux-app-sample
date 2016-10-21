const QS = '?cep=';

export const getFromQueryString = (search) => {
    if (!search) search = window.location.search;

    let qs = search.split(QS);
    if (qs && qs.length && qs[1])
        return qs[1];

    return false;
};

export const updateQueryString = (cep) => {
    if (!history || !cep) return false;

    history.replaceState( {} , '', `/${QS}${cep}`);
};