import axios from 'axios';

const phoneService = {
    getPhoneList: (callbacks) => {
        console.log('calling phoneService.getPhoneList');

        axios.get('/api/phones')
            .then((response) => {
                console.log('SUCCESS!');
                console.log(response.data);
                callbacks.success(response.data);
            })
            .catch((error) => {
                console.log('ERROR!');
                console.log(error);
                callbacks.failure(error);
            })
            .finally(() => {
                callbacks.always();
            });
    }
}

export default phoneService;