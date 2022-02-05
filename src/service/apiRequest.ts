const apiRequest = (values: any) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ ok: true, values: values });
        }, 1000);
    })
}
export default apiRequest