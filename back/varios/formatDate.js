const formatDate = (date) => {
    const options = { day: '2-digit', month: '2-digit', year: '2-digit' };
    return new Date(date).toLocaleDateString('es-ES', options);
};

module.exports =  formatDate;