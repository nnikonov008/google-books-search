import axios from "axios";
import noImage from "../assets/no-image.jpg"

export const getBooksAJAX = (searchingField, subject, sortingMethod, startIndex) => {
    const API_key = `&key=AIzaSyCgLO4tHe1Ws7-8rjgyvmsfs27VUV0PhKk`;
    const searchStr = searchingField === '' ? 'books' : searchingField;
    const subjectStr = subject === 'all' ? '' : `+subject=${subject}`;
    const sortingStr = sortingMethod === 'relevance' ? '' : `&orderBy=${sortingMethod}`;
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchStr}${subjectStr}${API_key}${sortingStr}&maxResults=12&startIndex=${startIndex}`)
        .then(response => {
            const cleanData = (response) => {

                if (response.data.totalItems === 0 || response.data.hasOwnProperty('items') === false) {
                    return 'STOP';
                }

                return {
                    totalItems: response.data.totalItems, items:
                        response.data.items.map(book => {
                            if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                                book.volumeInfo['imageLinks'] = {thumbnail: noImage};
                            }
                            if (book.volumeInfo.hasOwnProperty('categories') === false) {
                                book.volumeInfo['categories'] = [''];
                            }
                            if (book.volumeInfo.hasOwnProperty('authors') === false) {
                                book.volumeInfo['authors'] = [''];
                            }
                            if (book.volumeInfo.hasOwnProperty('title') === false) {
                                book.volumeInfo['title'] = '';
                            }
                            return book;
                        })
                }
            }

            return cleanData(response);
        })
        .catch(error => {
            alert(error);
            return 'ERROR';
        })
}
