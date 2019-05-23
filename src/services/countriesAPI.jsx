export class CountriesAPI {
    static async getData () {
        const promise = new Promise((resolve, reject) =>
            fetch('https://restcountries.eu/rest/v2/all', {method: 'GET'})
                .then(response => response.json())
                .catch(reject)
                .then(resolve)
        );

        return await promise;
    };
}