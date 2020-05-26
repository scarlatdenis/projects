//  page 4, page 6

export default class Form {
    constructor(forms) {
        this.forms = document.querySelectorAll(forms);

        this.message = {
            loading: 'Loading',
            succes: 'Thank you!',
            failure: 'Error'
        }
        this.path = 'assets/question.php'
    }

    async postData(url, data) {
        let res = await fetch(url, {
            method: 'POST',
            body: data
        })
        return await res.text();
    }

    init() {
        this.forms.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();

                let statusMessage = document.createElement('div');
                statusMessage.style.cssText = `

                        margin-top: 15px;
                        font-size: 18px;
                        color: grey;
                    `
                item.parentNode.appendChild(statusMessage);

                statusMessage.textContent = this.message.loading;

                const formData = new FormData(item);

                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = this.message.succes;
                    });

                        .catch (() => {
                    statusMessage.textContent = this.message.failure;
                });

        });
    });
}
}
